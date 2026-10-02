import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins safely
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

/**
 * Standard Fade Up animation helper
 */
export const fadeUp = (element, options = {}) => {
  return gsap.fromTo(
    element,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: options.duration || 0.8,
      delay: options.delay || 0,
      ease: options.ease || 'power3.out',
      scrollTrigger: options.scrollTrigger || null,
      stagger: options.stagger || 0,
    }
  );
};

/**
 * Staggered child elements reveal
 */
export const staggerReveal = (elements, options = {}) => {
  return gsap.fromTo(
    elements,
    { opacity: 0, y: 30, scale: 0.96 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: options.duration || 0.7,
      stagger: options.stagger || 0.12,
      ease: 'power2.out',
      scrollTrigger: options.scrollTrigger || null,
    }
  );
};

/**
 * Text reveal animation for titles
 */
export const textReveal = (element, options = {}) => {
  return gsap.fromTo(
    element,
    { opacity: 0, y: 35, rotateX: -15 },
    {
      opacity: 1,
      y: 0,
      rotateX: 0,
      duration: options.duration || 0.9,
      ease: 'power3.out',
      scrollTrigger: options.scrollTrigger || null,
    }
  );
};

/**
 * Scale in animation
 */
export const scaleIn = (element, options = {}) => {
  return gsap.fromTo(
    element,
    { opacity: 0, scale: 0.9 },
    {
      opacity: 1,
      scale: 1,
      duration: options.duration || 0.8,
      ease: 'power2.out',
      scrollTrigger: options.scrollTrigger || null,
    }
  );
};
