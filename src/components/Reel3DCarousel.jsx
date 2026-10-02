import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Reel3DCarousel = ({
  items = [],
  activeIndex = 0,
  onChange = () => {},
  className = '',
  itemHeight = 80,
  visibleNeighbors = 3,
}) => {
  const containerRef = useRef(null);
  const lastScrollTime = useRef(0);

  // Wheel scroll handler with cooldown ease
  const handleWheel = (e) => {
    const now = Date.now();
    if (now - lastScrollTime.current < 250) return;

    if (Math.abs(e.deltaY) > 15) {
      if (e.deltaY > 0) {
        if (activeIndex < items.length - 1) {
          onChange(activeIndex + 1, items[activeIndex + 1]);
          lastScrollTime.current = now;
        }
      } else {
        if (activeIndex > 0) {
          onChange(activeIndex - 1, items[activeIndex - 1]);
          lastScrollTime.current = now;
        }
      }
    }
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!containerRef.current) return;
      if (e.key === 'ArrowDown') {
        if (activeIndex < items.length - 1) {
          onChange(activeIndex + 1, items[activeIndex + 1]);
        }
      } else if (e.key === 'ArrowUp') {
        if (activeIndex > 0) {
          onChange(activeIndex - 1, items[activeIndex - 1]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, items, onChange]);

  const totalHeight = itemHeight * (visibleNeighbors * 2 + 1);

  return (
    <div
      ref={containerRef}
      onWheel={handleWheel}
      style={{ height: `${totalHeight}px`, perspective: '1000px' }}
      className={`relative w-full overflow-hidden select-none flex items-center justify-center ${className}`}
    >
      {/* ANGLED VIEWFINDER / CHEVRON FOCUS FRAME (SVG OVERLAY) */}
      <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center">
        {/* Active Frame Box */}
        <div
          style={{ height: `${itemHeight}px` }}
          className="relative w-full max-w-md mx-auto flex items-center justify-between px-2"
        >
          {/* Left Angled Bracket SVG Chevron */}
          <svg className="w-6 h-12 text-[#CCFF00] opacity-90 drop-shadow-[0_0_8px_rgba(204,255,0,0.5)]" viewBox="0 0 24 48" fill="none">
            <path d="M20 4L4 24L20 44" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          {/* Center Glowing Focus Guide Hairlines */}
          <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#CCFF00]/40 to-transparent" />
          <div className="absolute inset-x-8 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#CCFF00]/40 to-transparent" />

          {/* Right Angled Bracket SVG Chevron */}
          <svg className="w-6 h-12 text-[#CCFF00] opacity-90 drop-shadow-[0_0_8px_rgba(204,255,0,0.5)]" viewBox="0 0 24 48" fill="none">
            <path d="M4 4L20 24L4 44" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* 3D VERTICAL REEL TRANSFORM CONTAINER */}
      <motion.div
        animate={{ y: -activeIndex * itemHeight }}
        transition={{ type: 'spring', stiffness: 240, damping: 28 }}
        style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
        className="w-full flex flex-col items-center justify-center"
      >
        {items.map((item, idx) => {
          const distance = idx - activeIndex;
          const absDistance = Math.abs(distance);
          const isActive = idx === activeIndex;

          // 3D Perspective Calculations
          const rotateX = Math.max(-45, Math.min(45, -distance * 14)); // Rotation around X-axis
          const translateZ = -absDistance * 40; // Push inactive items back in 3D depth
          const opacity = isActive ? 1.0 : absDistance === 1 ? 0.5 : absDistance === 2 ? 0.22 : 0.08;
          const scale = isActive ? 1.0 : absDistance === 1 ? 0.85 : 0.7;
          const blur = isActive ? 0 : absDistance === 1 ? 1 : 3;

          const titleText = typeof item === 'string' ? item : item.title || item.name;
          const subText = typeof item === 'object' ? item.subtitle || item.meta : '';

          return (
            <motion.div
              key={item.id || idx}
              onClick={() => onChange(idx, item)}
              animate={{
                rotateX,
                z: translateZ,
                opacity,
                scale,
                filter: `blur(${blur}px)`,
              }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              style={{
                height: `${itemHeight}px`,
                transformStyle: 'preserve-3d',
                willChange: 'transform, opacity, filter',
              }}
              className="w-full flex flex-col items-center justify-center cursor-pointer text-center px-4 transition-colors"
            >
              <div
                className={`font-heading text-xl sm:text-2xl md:text-3xl font-normal tracking-[-0.03em] leading-tight transition-colors ${
                  isActive
                    ? 'text-[#CCFF00] drop-shadow-[0_0_12px_rgba(204,255,0,0.4)]'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {titleText}
              </div>

              {subText && (
                <div
                  className={`text-xs font-mono mt-0.5 transition-colors ${
                    isActive ? 'text-white/90 font-medium' : 'text-slate-400'
                  }`}
                >
                  {subText}
                </div>
              )}
            </motion.div>
          );
        })}
      </motion.div>

      {/* Top & Bottom Fade Gradients */}
      <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-slate-950 via-slate-950/80 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent pointer-events-none z-10" />
    </div>
  );
};

export default Reel3DCarousel;
