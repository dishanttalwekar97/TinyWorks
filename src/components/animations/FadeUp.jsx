import React, { useRef } from 'react';
import { useGsap } from '../../hooks/useGsap';
import { gsap } from '../../utils/animations';

export const FadeUp = ({
  children,
  delay = 0,
  duration = 0.8,
  y = 40,
  className = '',
  stagger = 0,
}) => {
  const elRef = useRef(null);

  useGsap(() => {
    if (!elRef.current) return;

    const targets = stagger > 0 ? elRef.current.children : elRef.current;

    gsap.fromTo(
      targets,
      { opacity: 0, y: y },
      {
        opacity: 1,
        y: 0,
        duration: duration,
        delay: delay,
        stagger: stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: elRef.current,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, [delay, duration, y, stagger]);

  return (
    <div ref={elRef} className={className}>
      {children}
    </div>
  );
};

export default FadeUp;
