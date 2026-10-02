import React, { useRef } from 'react';
import { useGsap } from '../hooks/useGsap';
import { gsap } from '../utils/animations';
import { ArrowRight } from 'lucide-react';
import TextType from './animations/TextType';

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
      {/* FULL-WIDTH BACKGROUND HERO BANNER IMAGE */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/images/hero_banner.jpg"
          alt="TinyWorks Enterprise Hero Background"
          className="w-full h-full object-cover object-right opacity-100 contrast-[1.05] saturate-[1.1]"
        />
        {/* Soft Left Gradient Fade ONLY for Left Text Readability */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[55%] bg-gradient-to-r from-white via-white/90 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">

        {/* TWO-COLUMN ENTERPRISE HERO LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT SIDE: ~54% Width (Text Content) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            {/* Interactive Typing Animation Heading */}
            <TextType
              text={["Building Intelligent Software for the Modern Enterprise"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              texts={[
                "Building Intelligent Software for the Modern Enterprise",
                "Scalable Architecture & Custom AI Engineering",
                "High-Performance Cloud & Mobile Solutions"
              ]}
              deletingSpeed={50}
              variableSpeedEnabled={false}
              variableSpeedMin={60}
              variableSpeedMax={120}
              cursorBlinkDuration={0.5}
              as="h1"
              className="font-heading font-normal text-[clamp(2rem,3.8vw,4.25rem)] tracking-[-0.04em] leading-[1.02] text-[#101828] mb-6 w-full min-h-[110px] sm:min-h-[135px]"
            />

            {/* Supporting Paragraph with GPU Accelerated 3D Transform */}
            <p
              ref={paragraphRef}
              className="text-[#667085] text-base sm:text-lg lg:text-xl font-normal leading-[1.5] mb-8 sm:mb-10 max-w-xl transform-gpu origin-top-left perspective-1000"
            >
              Custom software platforms, AI-powered automation, cloud solutions, and digital products designed to help businesses scale faster.
            </p>

            {/* Action CTA Buttons */}
            <div ref={ctaButtonsRef} className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenContact}
                className="group px-8 py-4 rounded-full bg-gradient-to-r from-[#4F16A9] via-[#C82190] to-[#FF6B2B] hover:opacity-95 text-white text-base font-semibold transition-all shadow-xl shadow-purple-900/20 hover:scale-[1.02] flex items-center gap-2.5 cursor-pointer"
                data-cursor="Contact"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1.5 transition-transform" />
              </button>

              <a
                href="#solutions"
                className="px-8 py-4 rounded-full bg-[#F7F9FC] hover:bg-slate-100 border border-slate-200 text-[#101828] text-base font-medium transition-all hover:scale-[1.02]"
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
