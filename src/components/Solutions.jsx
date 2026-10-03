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

  const wrap0Ref = useRef(null);
  const wrap1Ref = useRef(null);
  const wrap2Ref = useRef(null);
  const wrap3Ref = useRef(null);

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
        background: '#FFFFFF',
      },
      gridColor: 'rgba(200, 33, 144, 0.04)',
      border: 'border-slate-200/90 hover:border-[#C82190]/60 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-pink-500/10',
      accentBar: 'bg-gradient-to-r from-[#4F16A9] via-[#C82190] to-[#FF6B2B]',
      badgeBg: 'bg-pink-50 text-[#C82190] border border-pink-200/80',
      numColor: 'text-[#C82190] font-extrabold font-mono',
      textColor: 'text-slate-900',
      descColor: 'text-slate-600 font-normal',
      checkColor: 'text-[#C82190]',
      linkColor: 'text-[#C82190]',
      borderColor: 'border-slate-100',
      starFill1: '#C82190',
      starFill2: '#4F16A9',
      image: '/images/hospital_erp.jpg',
      ref: card0Ref,
      wrapperRef: wrap0Ref,
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
        background: '#FFFFFF',
      },
      gridColor: 'rgba(79, 22, 169, 0.04)',
      border: 'border-slate-200/90 hover:border-[#4F16A9]/60 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-purple-500/10',
      accentBar: 'bg-gradient-to-r from-[#4F16A9] to-[#C82190]',
      badgeBg: 'bg-purple-50 text-[#4F16A9] border border-purple-200/80',
      numColor: 'text-[#4F16A9] font-extrabold font-mono',
      textColor: 'text-slate-900',
      descColor: 'text-slate-600 font-normal',
      checkColor: 'text-[#4F16A9]',
      linkColor: 'text-[#4F16A9]',
      borderColor: 'border-slate-100',
      starFill1: '#4F16A9',
      starFill2: '#C82190',
      image: '/images/business_automation.jpg',
      ref: card1Ref,
      wrapperRef: wrap1Ref,
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
        background: '#FFFFFF',
      },
      gridColor: 'rgba(255, 107, 43, 0.04)',
      border: 'border-slate-200/90 hover:border-[#FF6B2B]/60 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-orange-500/10',
      accentBar: 'bg-gradient-to-r from-[#C82190] via-[#FF6B2B] to-[#4F16A9]',
      badgeBg: 'bg-orange-50 text-[#FF6B2B] border border-orange-200/80',
      numColor: 'text-[#FF6B2B] font-extrabold font-mono',
      textColor: 'text-slate-900',
      descColor: 'text-slate-600 font-normal',
      checkColor: 'text-[#FF6B2B]',
      linkColor: 'text-[#FF6B2B]',
      borderColor: 'border-slate-100',
      starFill1: '#FF6B2B',
      starFill2: '#C82190',
      image: '/images/custom_software.jpg',
      ref: card2Ref,
      wrapperRef: wrap2Ref,
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
        background: '#FFFFFF',
      },
      gridColor: 'rgba(200, 33, 144, 0.04)',
      border: 'border-slate-200/90 hover:border-[#C82190]/60 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-pink-500/10',
      accentBar: 'bg-gradient-to-r from-[#4F16A9] via-[#C82190] to-[#FF6B2B]',
      badgeBg: 'bg-pink-50 text-[#C82190] border border-pink-200/80',
      numColor: 'text-[#C82190] font-extrabold font-mono',
      textColor: 'text-slate-900',
      descColor: 'text-slate-600 font-normal',
      checkColor: 'text-[#C82190]',
      linkColor: 'text-[#C82190]',
      borderColor: 'border-slate-100',
      starFill1: '#C82190',
      starFill2: '#4F16A9',
      image: '/images/cloud_solutions.jpg',
      ref: card3Ref,
      wrapperRef: wrap3Ref,
    },
  ];

  useGsap(() => {
    if (!cardsContainerRef.current) return;

    ScrollTrigger.config({ ignoreMobileResize: true });

    const cardElements = [card0Ref.current, card1Ref.current, card2Ref.current, card3Ref.current].filter(Boolean);

    cardElements.forEach((card, index) => {
      if (index === cardElements.length - 1) return;
      const nextCard = cardElements[index + 1];
      if (!nextCard) return;

      const targetTop = 96 + (index + 1) * 40;

      gsap.to(card, {
        scale: 0.92 + index * 0.02,
        transformOrigin: 'top center',
        ease: 'none',
        scrollTrigger: {
          trigger: nextCard,
          start: 'top bottom',
          end: `top ${targetTop}px`,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    });

    const timer1 = setTimeout(() => ScrollTrigger.refresh(), 200);
    const timer2 = setTimeout(() => ScrollTrigger.refresh(), 600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // Forcefully remove any legacy inline filter or background properties left by previous browser HMR sessions
  useEffect(() => {
    const cardElements = [card0Ref.current, card1Ref.current, card2Ref.current, card3Ref.current].filter(Boolean);
    cardElements.forEach((card) => {
      if (card) {
        card.style.removeProperty('filter');
        card.style.removeProperty('-webkit-filter');
        card.style.backgroundColor = '#FFFFFF';
        card.style.color = '#0F172A';
      }
    });
  }, []);

  // Handle async font and image loading recalculations on hard refresh (Ctrl + Shift + R)
  useEffect(() => {
    const handleRefresh = () => {
      ScrollTrigger.refresh();
    };

    if (document.fonts) {
      document.fonts.ready.then(() => {
        ScrollTrigger.refresh();
      });
    }

    window.addEventListener('load', handleRefresh);
    window.addEventListener('resize', handleRefresh);
    return () => {
      window.removeEventListener('load', handleRefresh);
      window.removeEventListener('resize', handleRefresh);
    };
  }, []);

  return (
    <section id="solutions" ref={containerRef} className="py-16 sm:py-24 relative z-10 bg-slate-50 text-slate-900 border-t border-slate-200/80 overflow-visible">

      {/* Background Ambient Brand Glows */}
      <div className="absolute top-1/4 left-10 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#C82190]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#4F16A9]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 2-COLUMN MAIN LAYOUT: LEFT STICKY PINNED HEADER & VIDEO + RIGHT STACKING CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* LEFT SIDE: PINNED STICKY HEADER */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 self-start z-20 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-200/90 text-[#C82190] font-mono text-xs font-semibold uppercase tracking-widest shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#C82190]" />
              Tailored Engineering
            </div>
            <TextReveal
              text="Technology designed around your business."
              as="h2"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 tracking-[-0.04em] leading-[0.98]"
            />
            <p className="text-[#667085] text-base font-normal max-w-lg leading-[1.5]">
              Targeted software engineering and intelligent platform solutions built for high performance and enterprise scale.
            </p>
          </div>

          {/* RIGHT SIDE: ONLY SOLUTION CARDS MOVE AND STACK */}
          <div className="lg:col-span-7">
            <div ref={cardsContainerRef} className="space-y-12 sm:space-y-16 pb-48 relative">
              {solutions.map((item, index) => {
                const baseTop = 96; // Sticky distance from top of viewport (in px)
                const stackMargin = 40; // Visible stacked header margin per card (in px)
                const topValue = baseTop + index * stackMargin;

                return (
                  <div
                    key={item.id}
                    ref={item.ref}
                    onClick={() => setActiveModal(item)}
                    style={{
                      backgroundColor: '#FFFFFF',
                      position: 'sticky',
                      top: `${topValue}px`,
                      zIndex: index + 10,
                    }}
                    className={`sticky-card group bg-white border ${item.border} rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 origin-top flex flex-col justify-between overflow-hidden transition-colors duration-300 cursor-pointer min-h-[340px] sm:min-h-[380px]`}
                  >
                    {/* Top Accent Gradient Line */}
                    <div className={`absolute top-0 left-0 right-0 h-1.5 ${item.accentBar}`} />

                    {/* Grid Overlay */}
                    <div
                      className="absolute inset-0 pointer-events-none opacity-40"
                      style={{
                        backgroundImage: `linear-gradient(to right, ${item.gridColor} 1px, transparent 1px), linear-gradient(to bottom, ${item.gridColor} 1px, transparent 1px)`,
                        backgroundSize: '2rem 2rem'
                      }}
                    />

                    {/* Top Center DNA Illustration SVG Overlay */}
                    <div className="absolute top-4 right-24 sm:top-5 sm:right-32 pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity duration-300 w-32 sm:w-44 lg:w-56 h-auto overflow-hidden">
                      <img
                        src="/images/dna_illustration.svg"
                        alt="DNA Equalizer Illustration"
                        className="w-full h-auto object-contain brightness-50 opacity-60"
                      />
                    </div>

                    <div className="relative z-10 flex flex-col justify-between h-full pt-1">

                      {/* Header Row */}
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className={`font-mono text-xs sm:text-sm font-medium ${item.numColor}`}>
                            {item.num}
                          </span>
                          <span className={`text-[10px] sm:text-xs px-3 py-1 rounded-full font-semibold ${item.badgeBg}`}>
                            Solution
                          </span>
                        </div>

                        <h3 className={`font-heading text-xl sm:text-3xl font-normal tracking-[-0.03em] leading-[1.02] mb-2 ${item.textColor}`}>
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
                        <span className={`flex items-center gap-2 text-xs sm:text-sm font-bold ${item.linkColor} group-hover:opacity-80 transition-opacity`}>
                          Explore Details
                        </span>

                        {/* Rotatable Brand 4-Point Star SVG Icon - ENLARGED */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="38"
                          height="38"
                          viewBox="0 0 32 32"
                          fill="none"
                          className="transform transition-transform duration-700 ease-out group-hover:rotate-180 hover:rotate-180 hover:scale-125 cursor-pointer shrink-0 drop-shadow-sm"
                        >
                          <path d="M16 0C16 10.9714 5.33333 15.746 0 16.7619C11.52 19.2 15.4667 27.9365 16 32V0Z" fill={item.starFill1} />
                          <path d="M16 0C16 10.9714 26.6667 15.746 32 16.7619C20.48 19.2 16.5333 27.9365 16 32V0Z" fill={item.starFill2} />
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-xl bg-white rounded-[28px] p-8 md:p-10 shadow-2xl border border-slate-200 text-slate-900">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="font-heading text-3xl font-extrabold text-slate-900 mb-1">{activeModal.title}</h3>
            <span className="text-xs text-[#C82190] block mb-4 font-mono font-bold uppercase tracking-wider">{activeModal.tagline}</span>

            <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
              {activeModal.description}
            </p>

            <div className="space-y-2.5 mb-8">
              <h4 className="text-xs font-mono font-bold text-[#C82190] uppercase tracking-wider">Key Capabilities</h4>
              {activeModal.features.map((feat, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-800 font-medium flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#C82190] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setActiveModal(null)}
              className="w-full py-4 rounded-full bg-gradient-to-r from-[#4F16A9] via-[#C82190] to-[#FF6B2B] hover:opacity-95 text-white text-sm font-bold transition-all shadow-lg shadow-purple-900/20 cursor-pointer"
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

