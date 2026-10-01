import React, { useRef, useState, useEffect } from 'react';
import { useGsap } from '../hooks/useGsap';
import { gsap, ScrollTrigger } from '../utils/animations';
import { ArrowRight, CheckCircle2, X, Sparkles } from 'lucide-react';
import TextReveal from './animations/TextReveal';

export const Solutions = () => {
  const containerRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const [activeModal, setActiveModal] = useState(null);

  const card0Ref = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  const solutions = [
    {
      id: 'hospital-erp',
      title: 'Hospital ERP & OPD',
      num: '01',
      tagline: 'Smarter Outpatient Care & Healthcare Operations',
      description: 'CareCloudX OPD Management streamlines outpatient department operations with intelligent workflows, smart queue token tracking, paperless e-prescriptions, reduced waiting times, and integrated billing.',
      features: [
        'Appointment Scheduling & Doctor Slot Management',
        'Smart Queue & Real-time Token Tracking',
        'Paperless Digital e-Prescriptions & EMR Notes',
        'Instant OPD Billing & Payment Integration',
        'Complete Patient Visit History & Consultation Records',
      ],
      bgStyle: {
        background: '#1B1C1E',
      },
      gridColor: 'rgba(255, 255, 255, 0.04)',
      border: 'border-white/10 hover:border-white/25',
      badgeBg: 'bg-white/10 text-cyan-300 border border-white/15 backdrop-blur-md',
      numColor: 'text-cyan-400 font-bold font-mono',
      textColor: 'text-white',
      descColor: 'text-slate-300 font-normal',
      checkColor: 'text-cyan-300',
      linkColor: 'text-cyan-300',
      borderColor: 'border-white/10',
      image: '/images/hospital_erp.jpg',
      ref: card0Ref,
    },
    {
      id: 'business-automation',
      title: 'Business Automation',
      num: '02',
      tagline: 'Workflow Integration & Process Efficiency',
      description: 'Automate repetitive business processes and connect different systems into efficient workflows.',
      features: [
        'Automated Document Processing & Invoicing',
        'Cross-system API Data Synchronization',
        'Custom Approval Workflows',
        'Operational Bottleneck Analytics',
      ],
      bgStyle: {
        background: '#0033B3',
      },
      gridColor: 'rgba(255, 255, 255, 0.08)',
      border: 'border-blue-400/30 hover:border-blue-300/60',
      badgeBg: 'bg-white/15 text-white border border-white/20 backdrop-blur-md',
      numColor: 'text-cyan-300 font-bold font-mono',
      textColor: 'text-white',
      descColor: 'text-blue-100 font-normal',
      checkColor: 'text-cyan-300',
      linkColor: 'text-cyan-300',
      borderColor: 'border-white/20',
      image: '/images/business_automation.jpg',
      ref: card1Ref,
    },
    {
      id: 'custom-software',
      title: 'Custom Software',
      num: '03',
      tagline: 'Tailored Digital Products & Platforms',
      description: 'Build software solutions around specific business requirements and operational workflows.',
      features: [
        'Tailored SaaS Product Engineering',
        'Scalable Microservices Architecture',
        'High-performance Web & Mobile Platforms',
        'Enterprise Security Standards',
      ],
      bgStyle: {
        background: '#1B1C1E',
      },
      gridColor: 'rgba(255, 255, 255, 0.04)',
      border: 'border-white/10 hover:border-white/25',
      badgeBg: 'bg-white/10 text-cyan-300 border border-white/15 backdrop-blur-md',
      numColor: 'text-cyan-400 font-bold font-mono',
      textColor: 'text-white',
      descColor: 'text-slate-300 font-normal',
      checkColor: 'text-cyan-300',
      linkColor: 'text-cyan-300',
      borderColor: 'border-white/10',
      image: '/images/custom_software.jpg',
      ref: card2Ref,
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions',
      num: '04',
      tagline: 'Infrastructure Modernization & DevOps',
      description: 'Modernize applications and infrastructure with scalable cloud technologies.',
      features: [
        'AWS & Cloud Native Architecture Setup',
        'CI/CD Automated Deployment Pipelines',
        'High Availability & Disaster Recovery',
        'Kubernetes Container Orchestration',
      ],
      bgStyle: {
        background: '#0033B3',
      },
      gridColor: 'rgba(255, 255, 255, 0.08)',
      border: 'border-blue-400/30 hover:border-blue-300/60',
      badgeBg: 'bg-white/15 text-white border border-white/20 backdrop-blur-md',
      numColor: 'text-cyan-300 font-bold font-mono',
      textColor: 'text-white',
      descColor: 'text-blue-100 font-normal',
      checkColor: 'text-cyan-300',
      linkColor: 'text-cyan-300',
      borderColor: 'border-white/20',
      image: '/images/cloud_solutions.jpg',
      ref: card3Ref,
    },
  ];

  useGsap(() => {
    if (!cardsContainerRef.current) return;

    // Configure ScrollTrigger for production stability
    ScrollTrigger.config({ ignoreMobileResize: true });

    // Sticky Card Scale-down Stacking Effect
    const cardElements = [card0Ref.current, card1Ref.current, card2Ref.current, card3Ref.current].filter(Boolean);

    cardElements.forEach((card, index) => {
      if (index === cardElements.length - 1) return;
      const nextCard = cardElements[index + 1];
      if (!nextCard) return;

      gsap.to(card, {
        scale: 0.94 + index * 0.015,
        transformOrigin: 'top center',
        ease: 'none',
        scrollTrigger: {
          trigger: nextCard,
          start: 'top 85%',
          end: 'top 140px',
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      });
    });

    // Multi-stage refresh to handle asset loading & Vercel SSR/production hydration
    const timer1 = setTimeout(() => ScrollTrigger.refresh(), 100);
    const timer2 = setTimeout(() => ScrollTrigger.refresh(), 500);
    const timer3 = setTimeout(() => ScrollTrigger.refresh(), 1200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  // Window load & orientation change fallback to trigger ScrollTrigger.refresh() on Vercel deployment
  useEffect(() => {
    const handleRefresh = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('load', handleRefresh);
    window.addEventListener('resize', handleRefresh);
    return () => {
      window.removeEventListener('load', handleRefresh);
      window.removeEventListener('resize', handleRefresh);
    };
  }, []);

  return (
    <section id="solutions" ref={containerRef} className="py-16 sm:py-24 relative z-10 bg-black border-t border-slate-800/80 overflow-visible">

      {/* Background Ambient Glow */}
      <div className="absolute bottom-1/4 right-10 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 2-COLUMN MAIN LAYOUT: LEFT STICKY PINNED HEADER & VIDEO + RIGHT STACKING CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* LEFT SIDE: PINNED STICKY HEADER & 3D SPHERE */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 self-start z-20 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              Tailored Engineering
            </div>
            <TextReveal
              text="Technology designed around your business."
              as="h2"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight"
            />
            <p className="text-slate-400 text-sm sm:text-base font-normal max-w-lg">
              Targeted software engineering and intelligent platform solutions built for high performance and enterprise scale.
            </p>

            {/* 3D Floating Sphere Video */}
            <div className="relative aspect-square w-full max-w-[400px] overflow-hidden flex items-center justify-center pointer-events-none bg-black rounded-2xl pt-2">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain bg-black pointer-events-none"
              >
                <source src="/videos/2nd-fold-Sphere-Sparkles.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* RIGHT SIDE: ONLY SOLUTION CARDS MOVE AND STACK */}
          <div className="lg:col-span-7">
            <div ref={cardsContainerRef} className="space-y-12 sm:space-y-16 pb-32 relative">
              {solutions.map((item, index) => {
                const baseTop = 90; // Sticky distance from top of viewport (in px)
                const stackMargin = 36; // Visible stacked header margin per card (in px)
                const topValue = baseTop + index * stackMargin;

                return (
                  <div
                    key={item.id}
                    ref={item.ref}
                    onClick={() => setActiveModal(item)}
                    style={{
                      ...item.bgStyle,
                      top: `${topValue}px`,
                      zIndex: index + 10,
                    }}
                    className={`sticky-card sticky border ${item.border} rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 shadow-2xl cursor-pointer transform-gpu origin-top flex flex-col justify-between overflow-hidden relative transition-[border-color,box-shadow,background-color] duration-300 hover:shadow-cyan-500/10 min-h-[340px] sm:min-h-[380px]`}
                  >
                    {/* Grid Overlay */}
                    <div
                      className="absolute inset-0 pointer-events-none opacity-15"
                      style={{
                        backgroundImage: `linear-gradient(to right, ${item.gridColor} 1px, transparent 1px), linear-gradient(to bottom, ${item.gridColor} 1px, transparent 1px)`,
                        backgroundSize: '2rem 2rem'
                      }}
                    />

                    {/* Top Center DNA Illustration SVG Overlay (Slightly Smaller & Elegant) */}
                    <div className="absolute top-3.5 right-24 sm:top-4 sm:right-32 pointer-events-none opacity-60 group-hover:opacity-90 transition-opacity duration-300 w-32 sm:w-44 lg:w-56 h-auto overflow-hidden">
                      <img
                        src="/images/dna_illustration.svg"
                        alt="DNA Equalizer Illustration"
                        className="w-full h-auto object-contain filter drop-shadow-md brightness-125"
                      />
                    </div>

                    <div className="relative z-10 flex flex-col justify-between h-full">

                      {/* Header Row */}
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className={`font-mono text-xs sm:text-sm font-semibold ${item.numColor}`}>
                            {item.num}
                          </span>
                          <span className={`text-[10px] sm:text-xs px-3 py-1 rounded-full font-semibold ${item.badgeBg}`}>
                            Solution
                          </span>
                        </div>

                        <h3 className={`font-heading text-xl sm:text-3xl font-bold tracking-tight mb-2 ${item.textColor}`}>
                          {item.title}
                        </h3>

                        <p className={`text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2 ${item.descColor}`}>
                          {item.description}
                        </p>

                        <ul className="space-y-2 mb-6">
                          {item.features.slice(0, 2).map((feat, fIdx) => (
                            <li key={fIdx} className={`flex items-center gap-2 text-xs sm:text-sm font-medium ${item.textColor}`}>
                              <CheckCircle2 className={`w-4 h-4 shrink-0 ${item.checkColor}`} />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Bottom Action Line */}
                      <div className={`pt-4 border-t ${item.borderColor} flex items-center justify-between text-xs sm:text-sm font-medium ${item.textColor}`}>
                        <span className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-cyan-300 group-hover:text-white transition-colors">
                          Explore Details
                        </span>

                        {/* Rotatable Cyan 4-Point Star SVG Icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 32 32"
                          fill="none"
                          className="transform transition-transform duration-700 ease-out group-hover:rotate-180 hover:rotate-180 hover:scale-125 cursor-pointer shrink-0"
                        >
                          <path d="M16 0C16 10.9714 5.33333 15.746 0 16.7619C11.52 19.2 15.4667 27.9365 16 32V0Z" fill="#00E6E4" />
                          <path d="M16 0C16 10.9714 26.6667 15.746 32 16.7619C20.48 19.2 16.5333 27.9365 16 32V0Z" fill="#00E6E4" />
                        </svg>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>

      {/* Detail Modal Drawer */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
          <div className="relative w-full max-w-xl bg-slate-900 rounded-[28px] p-8 md:p-10 shadow-2xl border border-slate-800 text-white">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="font-heading text-3xl font-bold text-white mb-1">{activeModal.title}</h3>
            <span className="text-xs text-cyan-400 block mb-4 font-mono">{activeModal.tagline}</span>

            <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
              {activeModal.description}
            </p>

            <div className="space-y-2.5 mb-8">
              <h4 className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider">Key Capabilities</h4>
              {activeModal.features.map((feat, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-200 font-medium flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setActiveModal(null)}
              className="w-full py-3.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-sm font-semibold transition-colors shadow-lg shadow-cyan-500/20"
            >
              Close Details
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Solutions;
