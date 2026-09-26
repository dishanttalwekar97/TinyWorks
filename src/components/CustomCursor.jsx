import React, { useEffect, useState, useRef } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const cursorRef = useRef(null);

  const isTouchDevice = useMediaQuery('(pointer: coarse)');

  useEffect(() => {
    if (isTouchDevice) return;

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if target or parent has interactive attributes
      const target = e.target;
      const interactiveEl = target.closest('a, button, [data-cursor], input, textarea, select');

      if (interactiveEl) {
        setIsHovered(true);
        const customText = interactiveEl.getAttribute('data-cursor');
        setHoverText(customText || '');
      } else {
        setIsHovered(false);
        setHoverText('');
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isTouchDevice, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Primary Dot */}
      <div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-cyan-400 rounded-full pointer-events-none z-[9999] transition-transform duration-75 -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      />

      {/* Expanding Ring Outer Ring */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out flex items-center justify-center ${
          isHovered
            ? 'w-14 h-14 bg-cyan-500/15 border border-cyan-400/40 backdrop-blur-[2px]'
            : 'w-8 h-8 border border-white/20'
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      >
        {hoverText && (
          <span className="text-[10px] font-semibold text-cyan-300 uppercase tracking-wider animate-fade-in">
            {hoverText}
          </span>
        )}
      </div>
    </>
  );
};

export default CustomCursor;
