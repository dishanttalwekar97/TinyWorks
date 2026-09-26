import React, { useRef } from 'react';
import { useGsap } from '../hooks/useGsap';
import { gsap } from '../utils/animations';
import { ArrowRight } from 'lucide-react';
import MaskedHeading from './animations/MaskedHeading';

export const Hero = ({ onOpenContact }) => {
  const containerRef = useRef(null);
  const paragraphRef = useRef(null);
  const ctaButtonsRef = useRef(null);

  useGsap(() => {
    if (!containerRef.current) return;

    // Timeline for Left Column Sequential Entrance
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      paragraphRef.current,
      { opacity: 0, y: 25, rotateX: -10 },
      { opacity: 1, y: 0, rotateX: 0, duration: 0.8, delay: 0.4, ease: 'power3.out' }
    )
      .fromTo(
        ctaButtonsRef.current?.children || [],
        { opacity: 0, y: 20, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.12, ease: 'back.out(1.4)' },
        '-=0.4'
      );
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen pt-24 pb-16 md:pt-32 md:pb-20 bg-white text-[#101828] overflow-hidden flex flex-col justify-center"
    >
      {/* FULL-WIDTH BACKGROUND HERO BANNER IMAGE (From Requested URL) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/images/hero_banner.jpg"
          alt="TinyWorks Enterprise Hero Background"
          className="w-full h-full object-cover object-right opacity-95"
        />
        {/* Soft Gradient Overlays for Optimal Text Readability on Left Side */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
        
        {/* TWO-COLUMN ENTERPRISE HERO LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE: ~54% Width (Text Content) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Masked Heading Component with Interactive GSAP & SVG Masking */}
            <MaskedHeading
              text="Building Intelligent Software for the Modern Enterprise"
              tag="h1"
              align="left"
              reveal="rise"
              trigger="view"
              src="/images/why_modern_tech.jpg"
              fillScale={1.3}
              parallax={24}
              drift={16}
              duration={1.1}
              stagger={0.08}
              textScale={0.085}
              className="font-heading font-bold tracking-tight text-[#101828] mb-6 w-full"
            />

            {/* Supporting Paragraph with GPU Accelerated 3D Transform */}
            <p
              ref={paragraphRef}
              className="text-[#667085] text-lg sm:text-xl font-normal leading-relaxed mb-10 max-w-xl transform-gpu origin-top-left perspective-1000"
            >
              Custom software platforms, AI-powered automation, cloud solutions, and digital products designed to help businesses scale faster.
            </p>

            {/* Action CTA Buttons */}
            <div ref={ctaButtonsRef} className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenContact}
                className="group px-8 py-4 rounded-full bg-[#FF5A1F] hover:bg-[#E04B00] text-white text-base font-semibold transition-all shadow-lg shadow-orange-500/25 hover:scale-[1.02] flex items-center gap-2.5 cursor-pointer"
                data-cursor="Contact"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1.5 transition-transform" />
              </button>

              <a
                href="#solutions"
                className="px-8 py-4 rounded-full bg-[#F7F9FC] hover:bg-slate-100 border border-slate-200 text-[#101828] text-base font-semibold transition-all hover:scale-[1.02]"
              >
                Explore Solutions
              </a>
            </div>

          </div>

          {/* RIGHT SIDE: Open Space for Full-Width Hero Background Graphic */}
          <div className="lg:col-span-5 relative hidden lg:block h-[500px] pointer-events-none" />

        </div>

      </div>
    </section>
  );
};

export default Hero;
