import React, { useState, useEffect, useRef } from 'react';
import { gsap } from '../utils/animations';

export const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);
  const barRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 18) + 12;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(finishAnimation, 200);
      }
      setProgress(current);
    }, 60);

    return () => clearInterval(interval);
  }, []);

  const finishAnimation = () => {
    if (!containerRef.current) return;

    gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      },
    })
      .to(textRef.current, { opacity: 0, y: -20, duration: 0.3 })
      .to(containerRef.current, {
        yPercent: -100,
        duration: 0.6,
        ease: 'power4.inOut',
      });
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-[#030712] flex flex-col items-center justify-center pointer-events-auto select-none"
    >
      <div ref={textRef} className="flex flex-col items-center gap-6">
        {/* Brand Icon & Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-indigo-500 to-purple-600 p-[1px] shadow-lg shadow-cyan-500/20">
            <div className="w-full h-full bg-[#0b0f19] rounded-[11px] flex items-center justify-center">
              <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
          </div>
          <span className="font-heading font-bold text-2xl tracking-tight text-white">
            TinyWorks <span className="text-cyan-400 font-light">Infotech</span>
          </span>
        </div>

        {/* Progress Bar Container */}
        <div className="w-64 h-1 bg-slate-800/80 rounded-full overflow-hidden p-[1px]">
          <div
            ref={barRef}
            className="h-full bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 rounded-full transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between w-64 text-xs font-mono text-slate-400">
          <span>Enterprise Tech Solutions</span>
          <span className="text-cyan-400 font-semibold">{progress}%</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
