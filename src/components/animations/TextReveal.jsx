import React, { useRef } from 'react';
import { useGsap } from '../../hooks/useGsap';
import { gsap } from '../../utils/animations';

export const TextReveal = ({
  text,
  as: Component = 'h2',
  className = '',
  delay = 0,
  stagger = 0.05,
}) => {
  const textRef = useRef(null);

  const words = text ? text.split(' ') : [];

  useGsap(() => {
    if (!textRef.current) return;
    const wordElements = textRef.current.querySelectorAll('.word-item');

    gsap.fromTo(
      wordElements,
      { opacity: 0, y: 30, rotateX: -20 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.8,
        delay: delay,
        stagger: stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, [text, delay, stagger]);

  return (
    <Component ref={textRef} className={`${className} perspective-1000`}>
      {words.map((word, idx) => (
        <span key={idx} className="inline-block overflow-hidden mr-[0.25em] align-top">
          <span className="word-item inline-block transform-gpu origin-bottom">
            {word}
          </span>
        </span>
      ))}
    </Component>
  );
};

export default TextReveal;
