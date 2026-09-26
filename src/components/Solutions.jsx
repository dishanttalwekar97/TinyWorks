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
        background: 'linear-gradient(135deg, #FF4500 0%, #FF5500 50%, #D83B00 100%)',
      },
      gridColor: 'rgba(0, 0, 0, 0.35)',
      border: 'border-[#FF4500]/50',
      badgeBg: 'bg-black text-white',
      numColor: 'text-black/80 font-bold',
      textColor: 'text-black',
      descColor: 'text-black/90 font-medium',
      checkColor: 'text-black',
      borderColor: 'border-black/20',
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
        background: 'linear-gradient(135deg, #0284C7 0%, #0369A1 50%, #075985 100%)',
      },
      gridColor: 'rgba(255, 255, 255, 0.22)',
      border: 'border-sky-500/40',
      badgeBg: 'bg-white/20 text-white border border-white/30 backdrop-blur-md',
      numColor: 'text-sky-200 font-bold',
      textColor: 'text-white',
      descColor: 'text-sky-100',
      checkColor: 'text-white',
      borderColor: 'border-white/20',
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
        background: 'linear-gradient(135deg, #EAB308 0%, #CA8A04 50%, #A16207 100%)',
      },
      gridColor: 'rgba(0, 0, 0, 0.35)',
      border: 'border-yellow-600/40',
      badgeBg: 'bg-black text-white',
      numColor: 'text-black/80 font-bold',
      textColor: 'text-black',
      descColor: 'text-black/90 font-medium',
      checkColor: 'text-black',
      borderColor: 'border-black/20',
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
        background: 'linear-gradient(135deg, #10B981 0%, #059669 50%, #047857 100%)',
      },
      gridColor: 'rgba(255, 255, 255, 0.22)',
      border: 'border-emerald-500/40',
      badgeBg: 'bg-black text-white',
      numColor: 'text-emerald-200 font-bold',
      textColor: 'text-white',
      descColor: 'text-emerald-100',
      checkColor: 'text-white',
      borderColor: 'border-white/20',
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
        <div ref={cardsContainerRef} className="space-y-16 pb-32">
          {solutions.map((item) => (
            <div
              key={item.id}
              ref={item.ref}
              onClick={() => setActiveModal(item)}
              style={item.bgStyle}
              className={`sticky ${item.topOffset} border ${item.border} rounded-[40px] p-10 sm:p-14 lg:p-18 xl:p-20 shadow-2xl cursor-pointer transition-all duration-300 hover:shadow-3xl transform-gpu origin-top min-h-[520px] lg:min-h-[560px] flex flex-col justify-center overflow-hidden relative`}
            >
              {/* CTA-style Grid Overlay */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-30"
                style={{
                  backgroundImage: `linear-gradient(to right, ${item.gridColor} 1px, transparent 1px), linear-gradient(to bottom, ${item.gridColor} 1px, transparent 1px)`,
                  backgroundSize: '2.5rem 2.5rem'
                }}
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">

                {/* Left Column: Text Section */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <span className={`font-mono text-base font-semibold ${item.numColor}`}>
                        {item.num}
                      </span>
                      <span className={`text-xs sm:text-sm px-4 py-1.5 rounded-full font-semibold ${item.badgeBg}`}>
                        Solution
                      </span>
                    </div>

                    <h3 className={`font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight mb-6 ${item.textColor}`}>
                      {item.title}
                    </h3>

                    <p className={`text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl ${item.descColor}`}>
                      {item.description}
                    </p>

                    <ul className="space-y-3.5 mb-10">
                      {item.features.slice(0, 2).map((feat, fIdx) => (
                        <li key={fIdx} className={`flex items-center gap-3.5 text-base sm:text-lg font-medium ${item.textColor}`}>
                          <CheckCircle2 className={`w-5 h-5 sm:w-6 sm:h-6 shrink-0 ${item.checkColor}`} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`pt-6 border-t ${item.borderColor} flex items-center justify-between text-base font-medium ${item.textColor}`}>
                    <span className={`text-hover-slide flex items-center gap-2.5 text-base sm:text-lg font-semibold ${item.textColor}`}>
                      Explore Details
                      <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </span>
                  </div>
                </div>

                {/* Right Column: Enlarged Realistic Photo Container */}
                <div className={`lg:col-span-5 h-80 sm:h-96 lg:h-[460px] xl:h-[500px] rounded-[32px] overflow-hidden shadow-2xl border ${item.borderColor}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
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
