import React, { useRef, useState } from 'react';
import { useGsap } from '../hooks/useGsap';
import { gsap } from '../utils/animations';
import { ArrowRight, CheckCircle2, X } from 'lucide-react';
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
      title: 'Hospital ERP',
      num: '01',
      tagline: 'Healthcare Operations & Patient Management',
      description: 'A centralized platform designed to streamline hospital operations, workflows, finance, HR, and patient management.',
      features: [
        'Integrated OPD & IPD Patient Registration',
        'Pharmacy Stock & Billing Automation',
        'Diagnostic Laboratory & Radiology Workflow',
        'Real-time Financial Ledgers & HR Payroll',
      ],
      bgStyle: {
        background: 'linear-gradient(135deg, #0A1329 0%, #16254A 50%, #1E305C 100%)',
      },
      gridColor: 'rgba(255, 255, 255, 0.08)',
      border: 'border-blue-500/25',
      badgeBg: 'bg-orange-500/20 text-orange-300 border border-orange-500/30 backdrop-blur-md',
      numColor: 'text-orange-400 font-bold',
      textColor: 'text-white',
      descColor: 'text-slate-300 font-normal',
      checkColor: 'text-orange-400',
      borderColor: 'border-white/15',
      image: '/images/hospital_erp.jpg',
      ref: card0Ref,
      topOffset: 'top-[80px]',
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
        'Custom Approval & Notification Workflows',
        'Operational Bottleneck Analytics',
      ],
      bgStyle: {
        background: 'linear-gradient(135deg, #081B2B 0%, #0F324D 50%, #17486E 100%)',
      },
      gridColor: 'rgba(255, 255, 255, 0.08)',
      border: 'border-sky-500/25',
      badgeBg: 'bg-sky-500/20 text-sky-300 border border-sky-500/30 backdrop-blur-md',
      numColor: 'text-sky-400 font-bold',
      textColor: 'text-white',
      descColor: 'text-slate-300 font-normal',
      checkColor: 'text-sky-400',
      borderColor: 'border-white/15',
      image: '/images/business_automation.jpg',
      ref: card1Ref,
      topOffset: 'top-[110px]',
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
        'Enterprise Security & Compliance Standards',
      ],
      bgStyle: {
        background: 'linear-gradient(135deg, #0D1629 0%, #162542 50%, #20355D 100%)',
      },
      gridColor: 'rgba(255, 255, 255, 0.08)',
      border: 'border-indigo-500/25',
      badgeBg: 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 backdrop-blur-md',
      numColor: 'text-indigo-400 font-bold',
      textColor: 'text-white',
      descColor: 'text-slate-300 font-normal',
      checkColor: 'text-indigo-400',
      borderColor: 'border-white/15',
      image: '/images/custom_software.jpg',
      ref: card2Ref,
      topOffset: 'top-[140px]',
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
        background: 'linear-gradient(135deg, #071924 0%, #0E2B3D 50%, #153E57 100%)',
      },
      gridColor: 'rgba(255, 255, 255, 0.08)',
      border: 'border-teal-500/25',
      badgeBg: 'bg-teal-500/20 text-teal-300 border border-teal-500/30 backdrop-blur-md',
      numColor: 'text-teal-400 font-bold',
      textColor: 'text-white',
      descColor: 'text-slate-300 font-normal',
      checkColor: 'text-teal-400',
      borderColor: 'border-white/15',
      image: '/images/cloud_solutions.jpg',
      ref: card3Ref,
      topOffset: 'top-[170px]',
    },
  ];

  useGsap(() => {
    if (!cardsContainerRef.current) return;

    // GSAP ScrollTrigger Sticky Card Scale-down Stacking Effect
    const cardElements = [card0Ref.current, card1Ref.current, card2Ref.current, card3Ref.current];

    cardElements.forEach((card, index) => {
      if (!card || index === cardElements.length - 1) return;

      gsap.to(card, {
        scale: 1 - (cardElements.length - index) * 0.03,
        opacity: 0.92,
        ease: 'none',
        scrollTrigger: {
          trigger: cardElements[index + 1],
          start: 'top 80%',
          end: 'top 220px',
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <section id="solutions" ref={containerRef} className="py-28 relative z-10 bg-[#F2F2F4]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <TextReveal
            text="Technology designed around your business."
            as="h2"
            className="font-heading text-4xl sm:text-6xl lg:text-7xl font-medium text-[#1D1D1F] tracking-tight mb-4"
          />
          <p className="text-[#86868B] text-lg font-normal max-w-xl mx-auto">
            Targeted software engineering and intelligent platform solutions built for performance and scale.
          </p>
        </div>

        {/* STICKY STACKING CARDS CONTAINER WITH COLOR THEME & CTA GRID OVERLAY */}
        <div ref={cardsContainerRef} className="space-y-8 sm:space-y-16 pb-20 sm:pb-32">
          {solutions.map((item) => (
            <div
              key={item.id}
              ref={item.ref}
              onClick={() => setActiveModal(item)}
              style={item.bgStyle}
              className={`sticky ${item.topOffset} border ${item.border} rounded-[28px] sm:rounded-[40px] p-6 sm:p-12 lg:p-16 shadow-2xl cursor-pointer transform-gpu origin-top min-h-0 sm:min-h-[520px] flex flex-col justify-center overflow-hidden relative`}
            >
              {/* CTA-style Grid Overlay */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-30"
                style={{
                  backgroundImage: `linear-gradient(to right, ${item.gridColor} 1px, transparent 1px), linear-gradient(to bottom, ${item.gridColor} 1px, transparent 1px)`,
                  backgroundSize: '2.5rem 2.5rem'
                }}
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-14 items-center relative z-10">

                {/* Left Column: Text Section */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4 sm:mb-8">
                      <span className={`font-mono text-sm sm:text-base font-semibold ${item.numColor}`}>
                        {item.num}
                      </span>
                      <span className={`text-[11px] sm:text-xs px-3.5 py-1 sm:py-1.5 rounded-full font-semibold ${item.badgeBg}`}>
                        Solution
                      </span>
                    </div>

                    <h3 className={`font-heading text-2xl sm:text-4xl lg:text-6xl font-semibold tracking-tight mb-3 sm:mb-6 ${item.textColor}`}>
                      {item.title}
                    </h3>

                    <p className={`text-xs sm:text-base leading-relaxed mb-4 sm:mb-8 max-w-2xl ${item.descColor}`}>
                      {item.description}
                    </p>

                    <ul className="space-y-2 sm:space-y-3.5 mb-5 sm:mb-10">
                      {item.features.slice(0, 2).map((feat, fIdx) => (
                        <li key={fIdx} className={`flex items-center gap-2.5 sm:gap-3.5 text-xs sm:text-base font-medium ${item.textColor}`}>
                          <CheckCircle2 className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 ${item.checkColor}`} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`pt-4 sm:pt-6 border-t ${item.borderColor} flex items-center justify-between text-xs sm:text-base font-medium ${item.textColor}`}>
                    <span className={`text-hover-slide flex items-center gap-2 sm:gap-2.5 text-xs sm:text-base font-semibold ${item.textColor}`}>
                      Explore Details
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </span>
                  </div>
                </div>

                {/* Right Column: Photo Container */}
                <div className={`lg:col-span-5 h-44 sm:h-72 lg:h-[420px] rounded-[20px] sm:rounded-[32px] overflow-hidden shadow-xl border ${item.borderColor}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal Drawer */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="relative w-full max-w-xl bg-white rounded-[28px] p-8 md:p-10 shadow-2xl border border-slate-100">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-6 right-6 p-2 rounded-full text-[#86868B] hover:text-[#1D1D1F] hover:bg-slate-100 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="font-heading text-3xl font-medium text-[#1D1D1F] mb-1">{activeModal.title}</h3>
            <span className="text-sm text-[#86868B] block mb-4 font-mono">{activeModal.tagline}</span>

            <p className="text-[#484848] text-base leading-relaxed mb-6">
              {activeModal.description}
            </p>

            <div className="space-y-3 mb-8">
              <h4 className="text-xs font-semibold text-[#1D1D1F] uppercase tracking-wider">Key Capabilities</h4>
              {activeModal.features.map((feat, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#F2F2F4] text-sm text-[#1D1D1F] font-medium flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setActiveModal(null)}
              className="w-full py-4 rounded-full bg-[#1D1D1F] hover:bg-black text-[#F5F5F7] text-sm font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Solutions;
