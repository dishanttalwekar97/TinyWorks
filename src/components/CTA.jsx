import React, { useRef } from 'react';
import { useGsap } from '../hooks/useGsap';
import { gsap } from '../utils/animations';
import { ArrowRight, MessageSquare } from 'lucide-react';

export const CTA = ({ onOpenContact }) => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const btnRef = useRef(null);

  useGsap(() => {
    if (!cardRef.current) return;

    // Entrance Timeline triggered on scroll into view
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    tl.fromTo(
      cardRef.current,
      { opacity: 0, y: 70, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out' }
    )
      .fromTo(
        [badgeRef.current, textRef.current, btnRef.current],
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power2.out' },
        '-=0.6'
      );

    // 3D Perspective Kinetic Transformation Animation + Continuous Floating Loop
    if (titleRef.current) {
      const words = titleRef.current.querySelectorAll('.cta-3d-word');
      gsap.fromTo(
        words,
        {
          opacity: 0,
          y: 60,
          rotateX: -85,
          scale: 0.82,
          transformOrigin: '50% 100% -40px',
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 1.1,
          stagger: 0.09,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          onComplete: () => {
            // Continuous Floating Animation (Organic staggered sine-wave floating motion)
            gsap.to(words, {
              y: -10,
              rotateZ: 0.8,
              duration: 2.2,
              ease: 'sine.inOut',
              repeat: -1,
              yoyo: true,
              stagger: {
                each: 0.18,
                repeat: -1,
                yoyo: true,
              },
            });
          },
        }
      );
    }

    // Continuous GSAP ScrollTrigger Parallax effect while scrolling past the card
    gsap.to(cardRef.current, {
      y: -30,
      scale: 1.02,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });
  }, []);

  return (
    <section id="contact" ref={containerRef} className="py-24 relative bg-[#F2F2F4] overflow-hidden">
      
      {/* Light Background Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-orange-200/30 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* VIBRANT TW LOGO GRADIENT CARD WITH GRID LINING & GSAP SCROLL ANIMATION */}
        <div
          ref={cardRef}
          className="p-10 sm:p-16 lg:p-20 rounded-[32px] sm:rounded-[40px] relative overflow-hidden text-center shadow-2xl transition-shadow duration-500 border border-white/20"
          style={{
            background: 'linear-gradient(135deg, #4F16A9 0%, #C82190 50%, #FF6B2B 100%)',
          }}
        >
          {/* CRISP GLASS GRID LINING OVERLAY */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.3) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '2.5rem 2.5rem',
            }}
          />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            
            {/* Badge */}
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-semibold tracking-wide uppercase shadow-md mb-8 border border-white/25"
            >
              <MessageSquare className="w-3.5 h-3.5 text-pink-200" />
              <span>Start a Partnership</span>
            </div>

            {/* Main Headline with 3D Kinetic Transformation Animation */}
            <h2
              ref={titleRef}
              className="font-heading font-normal text-4xl sm:text-6xl lg:text-7xl text-white tracking-[-0.04em] leading-[0.98] mb-6 perspective-1000"
            >
              <span className="block mb-2">
                {["Let's", "Build", "Something"].map((word, idx) => (
                  <span key={idx} className="inline-block overflow-hidden mr-[0.25em] align-top">
                    <span className="cta-3d-word inline-block transform-gpu origin-bottom-left text-hover-lift cursor-default transition-transform duration-300 hover:scale-105">
                      {word}
                    </span>
                  </span>
                ))}
              </span>
              <span className="block font-normal text-white">
                {["That", "Matters."].map((word, idx) => (
                  <span key={idx} className="inline-block overflow-hidden mr-[0.25em] align-top">
                    <span className="cta-3d-word inline-block transform-gpu origin-bottom-left text-hover-lift cursor-default transition-transform duration-300 hover:scale-105">
                      {word}
                    </span>
                  </span>
                ))}
              </span>
            </h2>

            {/* Subtitle */}
            <p
              ref={textRef}
              className="text-white/90 text-base sm:text-lg lg:text-xl font-normal leading-[1.5] mb-10 max-w-xl"
            >
              Have an idea, business challenge, or digital transformation project? Let's discuss how technology can help.
            </p>

            {/* Action Button */}
            <div ref={btnRef}>
              <button
                onClick={onOpenContact}
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-semibold text-sm sm:text-base shadow-2xl hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer"
                data-cursor="Let's Talk"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>

            <p className="text-xs text-white/70 font-mono mt-8">
              Response guaranteed within 24 business hours • NDAs available upon request
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CTA;
