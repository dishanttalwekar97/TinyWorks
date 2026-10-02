import React, { useRef, useState, useEffect } from 'react';
import { cn } from '../lib/utils';

const MAX_CARDS = 24;
const MAX_STRANDS = 24;

const FUSE = 0.087;
const CORNER = 0.015;
const CROSSFADE = 0.035;
const SPACING = 1.55;

const CURSOR_FUSE = 0.085;
const CURSOR_REACH = 0.65;
const PULL = 0.065;
const SWELL = 0.09;
const REACH = 1.7;
const GRAB = 0.14;
const RELEASE = 0.06;
const NEIGHBOUR_PUSH = 0.042;
const NEIGHBOUR_SCALE = 0.035;
const NEIGHBOUR_DIM = 0.15;
const NEIGHBOUR_REACH = 2.4;
const WAVE = 0.01;
const WAVE_FREQ = 20;
const WAVE_SPEED = 7;

const STRAND = 0.2;
const STRAND_SNAP = 1.15;
const WAIST = 0.35;
const SAG = 0.015;
const WELD = 0.035;

const BAND = 0.08;
const REFRACT = 0.15;
const SQUEEZE = 0.05;
const RIPPLE = 0.0125;
const RIPPLE_FREQ = 8;
const FRINGE = 0.004;
const SHEEN = 0.05;

const WOBBLE = 0.0075;

const WHEEL = 0.0022;
const DRAG = 0.007;
const EASE = 0.08;
const SNAP_IDLE = 260;
const SNAP_EASE = 0.06;
const CLICK_SLOP = 6;
const CLICK_MS = 700;

const ENTRY_MS = 2600;
const THEME_EVERY = 20;

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
const inOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const outCubic = (t) => 1 - Math.pow(1 - clamp(t, 0, 1), 3);

const QUAD_VERT = `#version 300 es
in vec2 aPos;
out vec2 vUv;
void main() {
  vUv = aPos;
  gl_Position = vec4(aPos * 2.0 - 1.0, 0.0, 1.0);
}`;

const RING_FRAG = `#version 300 es
precision highp float;

#define MAX_CARDS ${MAX_CARDS}
#define MAX_STRANDS ${MAX_STRANDS}

in vec2 vUv;
out vec4 fragColor;

uniform vec2  uResolution;
uniform vec2  uSize;
uniform float uCorner;

uniform float uCount;
uniform vec2  uCentre[MAX_CARDS];
uniform float uAngle[MAX_CARDS];
uniform vec4  uCardState[MAX_CARDS];

uniform float uStrandCount;
uniform vec2  uStrandA[MAX_STRANDS];
uniform vec2  uStrandB[MAX_STRANDS];
uniform vec4  uStrandPar[MAX_STRANDS];

uniform float uFuse;
uniform float uJitter;
uniform float uTime;
uniform vec3  uColor;

uniform sampler2D uAtlas;
uniform vec2  uGrid;
uniform float uCrossfade;
uniform float uHasArt;

uniform vec4  uCursor;
uniform vec4  uWake;

uniform float uLipDepth;
uniform vec4  uLip;
uniform float uFringe;
uniform float uSheen;

vec2 atlasUV(vec2 uv, float idx) {
  return (vec2(mod(idx, uGrid.x), floor(idx / uGrid.x)) + uv) / uGrid;
}

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
    f.y
  ) * 2.0 - 1.0;
}

float sdRoundBox(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r;
}

float sdStrand(vec2 p, vec2 a, vec2 b, float rEnd, float rMid, float sag) {
  vec2 ba = b - a;
  float len = length(ba);
  if (len < 0.001) return 1e6;

  vec2 dir = ba / len;
  vec2 nrm = vec2(-dir.y, dir.x);
  vec2 q = p - (a + b) * 0.5;
  float along = dot(q, dir);
  float across = dot(q, nrm);

  float h = clamp(along / len + 0.5, 0.0, 1.0);
  float bell = sin(3.14159265 * h);
  across += sag * bell * nrm.y;
  float r = mix(rMid, rEnd, pow(1.0 - bell, 1.7));

  return max(abs(along) - len * 0.5, abs(across) - r);
}

float smin(float a, float b, float k) {
  if (k <= 0.0001) return min(a, b);
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h);
}

float lipWarp(inout vec2 p) {
  if (uLipDepth <= 0.5) return 0.0;
  float dy = abs(p.y) - (uResolution.y * 0.5 - uLipDepth);
  if (dy <= 0.0) return 0.0;

  float t = clamp(dy / uLipDepth, 0.0, 1.0);
  float bend = 1.0 - sqrt(max(0.0, 1.0 - t * t));

  p.y -= sign(p.y) * bend * (uLip.x + sin(p.x * uLip.w) * uLip.z);
  p.x *= 1.0 - bend * uLip.y;
  return bend;
}

void main() {
  vec2 p = (vUv - 0.5) * uResolution;
  float bend = lipWarp(p);
  float toCursor = length(p - uCursor.xy);

  float k = uFuse;
  if (uCursor.z > 0.001) {
    float t = 1.0 - smoothstep(0.0, max(uWake.x, 1.0), toCursor);
    k += uCursor.w * uCursor.z * t * t;
  }

  float d = 1e6;

  float d0 = 1e6, d1 = 1e6;
  vec2 uv0 = vec2(0.5), uv1 = vec2(0.5);
  float im0 = 0.0, im1 = 0.0;
  float dm0 = 1.0, dm1 = 1.0;

  float halfSpan = length(uSize) * 0.5;

  for (int i = 0; i < MAX_CARDS; i++) {
    if (float(i) >= uCount) break;

    vec4 st = uCardState[i];
    float grown = max(st.x, st.y);
    if (grown <= 0.0001) continue;

    vec2 q = p - uCentre[i];
    float cull = halfSpan * grown + k + uJitter + 8.0;
    if (dot(q, q) > cull * cull) continue;

    float ca = cos(uAngle[i]), sa = sin(uAngle[i]);
    q = vec2(q.x * ca + q.y * sa, -q.x * sa + q.y * ca);

    vec2 halfSize = max(uSize * 0.5 * st.xy, vec2(0.0001));
    float rMax = min(halfSize.x, halfSize.y);
    float r = min(rMax, mix(rMax, uCorner, smoothstep(0.30, 1.0, min(st.x, st.y))));

    float di = sdRoundBox(q, halfSize, r);
    d = smin(d, di, k);

    vec2 luv = clamp(q / (2.0 * halfSize) + 0.5, 0.004, 0.996);
    luv.y = 1.0 - luv.y;

    if (di < d0) {
      d1 = d0; uv1 = uv0; im1 = im0; dm1 = dm0;
      d0 = di; uv0 = luv; im0 = st.w; dm0 = st.z;
    } else if (di < d1) {
      d1 = di; uv1 = luv; im1 = st.w; dm1 = st.z;
    }
  }

  for (int i = 0; i < MAX_STRANDS; i++) {
    if (float(i) >= uStrandCount) break;
    vec4 par = uStrandPar[i];
    if (par.x <= -3.0) continue;
    vec2 a = uStrandA[i], b = uStrandB[i];
    vec2 mid = (a + b) * 0.5;
    float span = length(b - a) * 0.5 + par.x + par.w + 8.0;
    if (dot(p - mid, p - mid) > span * span) continue;
    d = smin(d, sdStrand(p, a, b, par.x, par.y, par.z), par.w);
  }

  if (uJitter > 0.001) {
    d += noise(p * 0.012 + vec2(uTime * 0.22, uTime * -0.17)) * uJitter;
  }

  if (uWake.y > 0.001) {
    d += sin(toCursor * uWake.z - uTime * uWake.w)
       * uWake.y * exp(-toCursor / max(uWake.x, 1.0));
  }

  float aa = clamp(fwidth(d), 0.5, 2.0);
  float alpha = 1.0 - smoothstep(-aa, aa, d);
  if (alpha <= 0.001) discard;

  float nearest = smoothstep(-uCrossfade, uCrossfade, d1 - d0);

  vec3 col = uColor;
  if (uHasArt > 0.5) {
    vec2 fr = vec2(uFringe * bend, 0.0);
    vec3 c0 = vec3(
      texture(uAtlas, atlasUV(uv0 + fr, im0)).r,
      texture(uAtlas, atlasUV(uv0, im0)).g,
      texture(uAtlas, atlasUV(uv0 - fr, im0)).b
    );
    vec3 c1 = vec3(
      texture(uAtlas, atlasUV(uv1 + fr, im1)).r,
      texture(uAtlas, atlasUV(uv1, im1)).g,
      texture(uAtlas, atlasUV(uv1 - fr, im1)).b
    );
    col = mix(c1, c0, nearest);
  }

  col *= mix(dm1, dm0, nearest);
  col += bend * uSheen;

  fragColor = vec4(col, alpha);
}`;

function build(gl, vert, frag) {
  const program = gl.createProgram();
  if (!program) return null;
  for (const [type, source] of [
    [gl.VERTEX_SHADER, vert],
    [gl.FRAGMENT_SHADER, frag],
  ]) {
    const shader = gl.createShader(type);
    if (!shader) return null;
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error(gl.getShaderInfoLog(shader));
      return null;
    }
    gl.attachShader(program, shader);
    gl.deleteShader(shader);
  }
  gl.bindAttribLocation(program, 0, "aPos");
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error(gl.getProgramInfoLog(program));
    return null;
  }
  return program;
}

function uniforms(gl, program) {
  const cache = new Map();
  return (name) => {
    let loc = cache.get(name);
    if (loc === undefined) {
      loc = gl.getUniformLocation(program, name);
      cache.set(name, loc);
    }
    return loc;
  };
}

function colorReader() {
  const probe = document.createElement("canvas");
  probe.width = probe.height = 1;
  const ctx = probe.getContext("2d", { willReadFrequently: true });
  return (css) => {
    if (!ctx) return [0, 0, 0];
    ctx.fillStyle = "#000";
    ctx.fillStyle = css;
    ctx.fillRect(0, 0, 1, 1);
    const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
    return [r / 255, g / 255, b / 255];
  };
}

function packAtlas(images, cols, cell, ratio) {
  const rows = Math.ceil(images.length / cols);
  const sheet = document.createElement("canvas");
  sheet.width = cols * cell;
  sheet.height = rows * Math.round(cell / ratio);
  const ctx = sheet.getContext("2d");
  if (!ctx) return sheet;
  const cellH = Math.round(cell / ratio);
  images.forEach((image, i) => {
    if (!image.naturalWidth || !image.naturalHeight) return;
    const x = (i % cols) * cell;
    const y = Math.floor(i / cols) * cellH;
    const scale = Math.max(
      cell / image.naturalWidth,
      cellH / image.naturalHeight
    );
    const w = image.naturalWidth * scale;
    const h = image.naturalHeight * scale;
    ctx.save();
    ctx.beginPath();
    ctx.rect(x, y, cell, cellH);
    ctx.clip();
    ctx.drawImage(image, x + (cell - w) / 2, y + (cellH - h) / 2, w, h);
    ctx.restore();
  });
  return sheet;
}

export function MoltenRingCarousel({
  items,
  brand,
  arc = 1,
  cardSize = 0.265,
  cardRatio = 1.5,
  fuse = FUSE,
  threads = true,
  glass = true,
  offsetX = 0,
  selectedIndex,
  onActiveChange,
  onItemSelect,
  className,
  showOverlayText = true,
  ...props
}) {
  const canvasRef = useRef(null);
  const [active, setActive] = useState(0);
  const [reduced, setReduced] = useState(false);
  const [supported, setSupported] = useState(true);

  const settings = useRef({
    arc,
    cardSize,
    cardRatio,
    fuse,
    threads,
    glass,
    offsetX,
  });
  settings.current = { arc, cardSize, cardRatio, fuse, threads, glass, offsetX };

  const step = useRef(() => { });
  const goToIndexRef = useRef(() => { });

  const count = Math.min(items.length, MAX_CARDS);
  const sources = items.map((item) => item.image).join(" ");

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const read = () => setReduced(query.matches);
    read();
    query.addEventListener("change", read);
    return () => query.removeEventListener("change", read);
  }, []);

  useEffect(() => {
    if (selectedIndex !== undefined && selectedIndex >= 0 && selectedIndex < count) {
      goToIndexRef.current(selectedIndex);
    }
  }, [selectedIndex, count]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !count) return;

    const gl = canvas.getContext("webgl2", {
      alpha: true,
      premultipliedAlpha: false,
      antialias: false,
    });
    if (!gl) {
      setSupported(false);
      return;
    }

    const readColor = colorReader();
    const program = build(gl, QUAD_VERT, RING_FRAG);
    if (!program) return;
    const u = uniforms(gl, program);

    const quad = gl.createVertexArray();
    gl.bindVertexArray(quad);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]),
      gl.STATIC_DRAW
    );
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

    const COLS = Math.min(4, count);
    const CELL = 512;
    let atlas = null;
    let loaded = 0;
    const images = items.slice(0, count).map((item) => {
      const image = new Image();
      image.crossOrigin = "anonymous";
      image.decoding = "async";
      const settle = () => {
        if (++loaded < count) return;
        atlas = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, atlas);
        gl.texImage2D(
          gl.TEXTURE_2D,
          0,
          gl.RGBA,
          gl.RGBA,
          gl.UNSIGNED_BYTE,
          packAtlas(images, COLS, CELL, settings.current.cardRatio)
        );
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      };
      image.onload = settle;
      image.onerror = () => {
        console.warn(`molten-ring-carousel: ${item.image} failed to load`);
        settle();
      };
      image.src = item.image;
      return image;
    });

    let width = 0;
    let height = 0;
    let progress = 0;
    let goal = 0;
    let lastInput = 0;
    let snapped = true;
    let hovered = -1;
    let pointerX = -1;
    let pointerY = -1;
    let pointerSpeed = 0;
    let entry = 0;
    let clock = 0;
    let previous = 0;
    let ticks = 0;
    let frame = 0;
    let tween = null;
    let ink = [0, 0, 0];

    const leanX = new Float32Array(count);
    const leanY = new Float32Array(count);
    const swell = new Float32Array(count);
    const dim = new Float32Array(count);

    const pos = new Float32Array(MAX_CARDS * 2);
    const rot = new Float32Array(MAX_CARDS);
    const scale = new Float32Array(MAX_CARDS * 4);
    const strandA = new Float32Array(MAX_STRANDS * 2);
    const strandB = new Float32Array(MAX_STRANDS * 2);
    const strandPar = new Float32Array(MAX_STRANDS * 4);

    const at = Array.from({ length: count }, () => ({
      x: 0,
      y: 0,
      angle: 0,
      scale: 1,
    }));
    const FRONT = Math.floor(count / 2);

    const resize = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (!w || !h) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = w;
      height = h;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    const onWheel = (event) => {
      event.preventDefault();
      tween = null;
      goal += event.deltaY * WHEEL;
      lastInput = performance.now();
      snapped = false;
    };
    canvas.addEventListener("wheel", onWheel, { passive: false });

    step.current = (by) => {
      tween = { from: goal, to: Math.round(goal) + by, at: performance.now() };
      lastInput = performance.now();
      snapped = true;
    };

    goToIndexRef.current = (targetIndex) => {
      const want = (((targetIndex - FRONT) % count) + count) % count;
      tween = {
        from: goal,
        to: want + Math.round((goal - want) / count) * count,
        at: performance.now(),
      };
      snapped = true;
    };

    let dragFrom = null;
    let dragTravel = 0;
    const onDown = (event) => {
      dragFrom = event.clientY;
      dragTravel = 0;
      tween = null;
      canvas.setPointerCapture(event.pointerId);
    };
    const onMove = (event) => {
      const box = canvas.getBoundingClientRect();
      const nx = event.clientX - box.left;
      const ny = event.clientY - box.top;
      pointerSpeed = Math.hypot(nx - pointerX, ny - pointerY);
      pointerX = nx;
      pointerY = ny;
      if (dragFrom !== null) {
        const travel = dragFrom - event.clientY;
        dragTravel += Math.abs(travel);
        dragFrom = event.clientY;
        goal += travel * DRAG;
        lastInput = performance.now();
        snapped = false;
      }
    };
    const onUp = () => {
      const wasClick = dragFrom !== null && dragTravel < CLICK_SLOP;
      dragFrom = null;
      if (!wasClick || hovered < 0) return;
      const want = (((hovered - FRONT) % count) + count) % count;
      tween = {
        from: goal,
        to: want + Math.round((goal - want) / count) * count,
        at: performance.now(),
      };
      snapped = true;
      if (onItemSelect) {
        onItemSelect(items[hovered]);
      }
    };
    const onLeave = () => {
      pointerX = -1;
      pointerY = -1;
      hovered = -1;
    };

    canvas.addEventListener("pointerdown", onDown);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerup", onUp);
    canvas.addEventListener("pointercancel", onUp);
    canvas.addEventListener("pointerleave", onLeave);

    const draw = (now) => {
      frame = requestAnimationFrame(draw);
      if (!width || !height) return;
      const dt = previous ? Math.min((now - previous) / 1000, 1 / 20) : 0;
      previous = now;
      clock += dt;
      const config = settings.current;

      if (ticks++ % THEME_EVERY === 0)
        ink = readColor(getComputedStyle(canvas).color);

      if (atlas)
        entry = reduced ? 1 : Math.min(1, entry + (dt * 1000) / ENTRY_MS);
      const spread = inOutCubic(entry);

      if (tween) {
        const t = clamp((now - tween.at) / CLICK_MS, 0, 1);
        goal = tween.from + (tween.to - tween.from) * outCubic(t);
        if (t >= 1) tween = null;
      } else if (!snapped && now - lastInput > SNAP_IDLE) {
        goal = Math.round(goal);
        snapped = true;
      }
      progress += (goal - progress) * (reduced ? 1 : snapped ? SNAP_EASE : EASE);
      const speed = Math.abs(goal - progress);

      const near = (((Math.round(goal) + FRONT) % count) + count) % count;
      setActive((prev) => {
        if (prev !== near) {
          if (onActiveChange) onActiveChange(near);
          return near;
        }
        return prev;
      });

      const long = width * config.cardSize;
      const short = long / config.cardRatio;
      const radius = width * config.arc;
      const angleStep = (short * SPACING) / radius;
      const centreX = -radius + (config.offsetX || 0) * width;

      for (let i = 0; i < count; i++) {
        const slot = ((((i - progress) % count) + count) % count) - FRONT;
        const angle = slot * angleStep * spread;
        at[i].angle = angle;
        at[i].x = centreX + Math.cos(angle) * radius;
        at[i].y = Math.sin(angle) * radius;
      }

      const mx = pointerX >= 0 ? pointerX - width / 2 : 0;
      const my = pointerY >= 0 ? height / 2 - pointerY : 0;
      const present = pointerX >= 0 ? 1 : 0;

      if (present && pointerSpeed < 24) {
        hovered = -1;
        let best = Infinity;
        for (let i = 0; i < count; i++) {
          const dx = Math.abs(mx - at[i].x);
          const dy = Math.abs(my - at[i].y);
          if (dx > long / 2 || dy > short / 2) continue;
          const distance = dx + dy;
          if (distance < best) {
            best = distance;
            hovered = i;
          }
        }
      }
      pointerSpeed *= 0.85;

      let strands = 0;
      for (let i = 0; i < count; i++) {
        const dx = mx - at[i].x;
        const dy = my - at[i].y;
        const pull = present
          ? Math.max(0, 1 - Math.hypot(dx, dy) / (long * REACH))
          : 0;
        const isHovered = i === hovered ? 1 : 0;

        const towardX = dx * (pull * pull) * PULL * long * 0.02;
        const towardY = dy * (pull * pull) * PULL * long * 0.02;
        leanX[i] += (towardX - leanX[i]) * (pull > 0 ? GRAB : RELEASE);
        leanY[i] += (towardY - leanY[i]) * (pull > 0 ? GRAB : RELEASE);

        let push = 0;
        let dimTarget = 0;
        if (hovered >= 0 && i !== hovered) {
          let gap = Math.abs(i - hovered);
          gap = Math.min(gap, count - gap);
          const off = Math.max(0, 1 - gap / NEIGHBOUR_REACH);
          push =
            Math.sign(at[i].y - at[hovered].y || 1) *
            off *
            NEIGHBOUR_PUSH *
            long;
          dimTarget = off * NEIGHBOUR_DIM;
        }
        dim[i] += (dimTarget - dim[i]) * (dimTarget > dim[i] ? GRAB : RELEASE);

        const wantSwell =
          pull * pull * SWELL +
          isHovered * NEIGHBOUR_SCALE -
          dimTarget * (NEIGHBOUR_SCALE / NEIGHBOUR_DIM);
        swell[i] +=
          (wantSwell - swell[i]) * (wantSwell > swell[i] ? GRAB : RELEASE);

        at[i].x += leanX[i];
        at[i].y += leanY[i] + push;
        at[i].scale = (0.18 + 0.82 * spread) * (1 + swell[i]);

        pos[i * 2] = at[i].x;
        pos[i * 2 + 1] = at[i].y;
        rot[i] = at[i].angle;
        scale[i * 4] = at[i].scale;
        scale[i * 4 + 1] = at[i].scale;
        scale[i * 4 + 2] = 1 - dim[i];
        scale[i * 4 + 3] = i;
      }

      if (config.threads) {
        for (let i = 0; i < count && strands < MAX_STRANDS; i++) {
          const j = (i + 1) % count;
          const gap = Math.hypot(at[j].x - at[i].x, at[j].y - at[i].y);
          const opening = (gap - short) / (short * STRAND_SNAP);
          if (opening > 1 || opening < -1) continue;
          const strength = Math.max(
            1 - spread,
            hovered === i || hovered === j ? 1 : 0
          );
          if (strength < 0.02) continue;
          const rEnd =
            short * 0.5 * STRAND * strength * (1 - clamp(opening, 0, 1));
          if (rEnd <= 0.5) continue;
          strandA[strands * 2] = at[i].x;
          strandA[strands * 2 + 1] = at[i].y;
          strandB[strands * 2] = at[j].x;
          strandB[strands * 2 + 1] = at[j].y;
          strandPar[strands * 4] = rEnd;
          strandPar[strands * 4 + 1] = rEnd * WAIST;
          strandPar[strands * 4 + 2] = SAG * long * clamp(opening, 0, 1);
          strandPar[strands * 4 + 3] = WELD * long;
          strands++;
        }
      }

      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(program);
      gl.bindVertexArray(quad);

      gl.uniform2f(u("uResolution"), width, height);
      gl.uniform2f(u("uSize"), long, short);
      gl.uniform1f(u("uCorner"), CORNER * long);
      gl.uniform1f(u("uCount"), count);
      gl.uniform2fv(u("uCentre"), pos);
      gl.uniform1fv(u("uAngle"), rot);
      gl.uniform4fv(u("uCardState"), scale);
      gl.uniform1f(u("uStrandCount"), strands);
      gl.uniform2fv(u("uStrandA"), strandA);
      gl.uniform2fv(u("uStrandB"), strandB);
      gl.uniform4fv(u("uStrandPar"), strandPar);
      gl.uniform1f(u("uFuse"), config.fuse * long);
      gl.uniform1f(
        u("uJitter"),
        reduced ? 0 : WOBBLE * long * clamp(speed * 2 + (1 - spread), 0, 1)
      );
      gl.uniform1f(u("uTime"), reduced ? 0 : clock);
      gl.uniform3fv(u("uColor"), ink);
      gl.uniform1f(u("uCrossfade"), CROSSFADE * long);
      gl.uniform1f(u("uHasArt"), atlas ? 1 : 0);
      gl.uniform2f(u("uGrid"), COLS, Math.ceil(count / COLS));
      gl.uniform4f(u("uCursor"), mx, my, present, CURSOR_FUSE * long);
      gl.uniform4f(
        u("uWake"),
        CURSOR_REACH * long,
        reduced ? 0 : WAVE * long * clamp(pointerSpeed / 40, 0, 1),
        WAVE_FREQ / long,
        WAVE_SPEED
      );
      gl.uniform1f(u("uLipDepth"), config.glass ? BAND * height : 0);
      gl.uniform4f(
        u("uLip"),
        REFRACT * long,
        SQUEEZE,
        RIPPLE * long,
        RIPPLE_FREQ / long
      );
      gl.uniform1f(u("uFringe"), FRINGE);
      gl.uniform1f(u("uSheen"), SHEEN);

      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, atlas);
      gl.uniform1i(u("uAtlas"), 0);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    };
    frame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      canvas.removeEventListener("wheel", onWheel);
      canvas.removeEventListener("pointerdown", onDown);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerup", onUp);
      canvas.removeEventListener("pointercancel", onUp);
      canvas.removeEventListener("pointerleave", onLeave);
      for (const image of images) image.onload = null;
      if (atlas) gl.deleteTexture(atlas);
      gl.deleteBuffer(buffer);
      gl.deleteVertexArray(quad);
      gl.deleteProgram(program);
    };
  }, [sources, count, reduced]);

  const item = items[active];

  if (!supported) {
    return (
      <section
        aria-roledescription="carousel"
        aria-label={brand ?? "Gallery"}
        className={cn(
          "bg-background text-foreground relative h-full min-h-[24rem] w-full",
          className
        )}
        {...props}
      >
        <ul className="flex h-full snap-y snap-mandatory flex-col items-center gap-3 overflow-y-auto py-[6%]">
          {items.map((entry) => (
            <li key={entry.image} className="w-[62%] shrink-0 snap-center">
              <img
                src={entry.image}
                alt={entry.title}
                className="bg-muted w-full rounded-lg object-cover"
                style={{ aspectRatio: cardRatio }}
              />
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <section
      aria-roledescription="carousel"
      aria-label={brand ?? "Gallery"}
      className={cn(
        "bg-transparent text-white relative h-full min-h-[28rem] sm:min-h-[36rem] w-full overflow-hidden select-none",
        className
      )}
      {...props}
    >
      <canvas
        ref={canvasRef}
        tabIndex={0}
        role="listbox"
        aria-label={brand ?? "Gallery"}
        aria-activedescendant={`molten-ring-${active}`}
        className="text-foreground focus-visible:outline-foreground absolute inset-0 h-full w-full cursor-grab touch-pan-x outline-none focus-visible:outline-2 focus-visible:-outline-offset-4 active:cursor-grabbing"
        onKeyDown={(event) => {
          if (event.key === "ArrowDown") step.current(1);
          else if (event.key === "ArrowUp") step.current(-1);
          else return;
          event.preventDefault();
        }}
      />

      <ul className="sr-only">
        {items.map((entry, i) => (
          <li
            key={entry.image}
            id={`molten-ring-${i}`}
            role="option"
            aria-selected={i === active}
          >
            {entry.title}
            {entry.meta ? `. ${entry.meta}` : ""}
          </li>
        ))}
      </ul>

      {showOverlayText && (
        <>
          {brand ? (
            <div className="pointer-events-none absolute top-[6%] left-[5%] text-sm font-medium tracking-tight text-white/90">
              {brand}
            </div>
          ) : null}

          <div className="pointer-events-none absolute top-1/2 left-[5%] -translate-y-1/2 z-20 max-w-xs sm:max-w-md">
            <div className="text-[#C82190] font-mono text-xs tabular-nums font-semibold mb-1">
              {String(active + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
            </div>
            <div className="text-xl sm:text-3xl leading-tight font-normal tracking-[-0.03em] text-white">
              {item?.title}
            </div>
            {item?.desc && (
              <div className="mt-2 text-xs sm:text-sm text-slate-300 font-normal leading-relaxed line-clamp-3">
                {item.desc}
              </div>
            )}
          </div>

          {item?.meta ? (
            <div className="text-slate-400 pointer-events-none absolute top-1/2 right-[5%] -translate-y-1/2 text-right text-xs font-mono z-20">
              {item.meta}
            </div>
          ) : null}
        </>
      )}
    </section>
  );
}

export default MoltenRingCarousel;
