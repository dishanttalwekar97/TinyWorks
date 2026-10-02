import { useLayoutEffect, useRef } from 'react';
import { gsap } from '../utils/animations';

/**
 * Custom React hook for GSAP animations with context cleanup
 * @param {Function} effectCallback Function containing GSAP animations
 * @param {Array} dependencies React dependency array
 */
export const useGsap = (effectCallback, dependencies = []) => {
  const scopeRef = useRef(null);

  useLayoutEffect(() => {
    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      effectCallback(scopeRef);
    }, scopeRef);

    return () => {
      ctx.revert(); // Clean up all GSAP timelines and ScrollTriggers created in context
    };
  }, dependencies);

  return scopeRef;
};

export default useGsap;
