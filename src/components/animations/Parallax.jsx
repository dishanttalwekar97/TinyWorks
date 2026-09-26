import React, { useRef } from 'react';
import { useGsap } from '../../hooks/useGsap';
import { gsap } from '../../utils/animations';

export const Parallax = ({ children, speed = 0.2, className = '' }) => {
  const containerRef = useRef(null);

  useGsap(() => {
    if (!containerRef.current) return;

    gsap.to(containerRef.current, {
      y: () => -100 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, [speed]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default Parallax;
