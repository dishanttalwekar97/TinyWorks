import React, { useState } from 'react';
import { Sparkles, CheckCircle2, X, ArrowRight, ArrowLeft, ArrowUpRight } from 'lucide-react';
import TextReveal from './animations/TextReveal';
import MoltenRingCarousel from './MoltenRingCarousel';

export const Industries = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeModal, setActiveModal] = useState(null);

  const industries = [
    {
      id: 'banking-finance',
      title: 'Banking & Financial Services',
      meta: 'Fintech & Security',
      desc: 'Secure payment gateways, core banking integrations, fraud detection systems, and automated financial audit ledgers.',
      image: '/images/industry_fintech.jpg',
      features: [
        'Contactless Payment Terminal Integration',
        'Real-time Financial Reconciliation',
        'PCI-DSS Compliant Security Layers'
      ],
    },
    {
      id: 'insurance',
      title: 'Insurance',
      meta: 'Claims & Portals',
      desc: 'Automated claim processing, policy management portals, AI risk assessment, and customer self-service web applications.',
      image: '/images/why_scalable_architecture.jpg',
      features: [
        'Instant Digital Claim Filing',
        'Automated Policy Underwriting',
        'Omnichannel Customer Portals'
      ],
    },
    {
      id: 'healthcare',
      title: 'Healthcare',
      meta: 'EHR & Telehealth',
      desc: 'HIPAA-compliant telemedicine platforms, EMR/EHR integrations, digital appointment scheduling, and OPD/IPD workflows.',
      image: '/images/hospital_erp.jpg',
      features: [
        'Telehealth Video Consultations',
        'Unified Patient EMR Records',
        'Hospital Pharmacy & Lab Billing'
      ],
    },
    {
      id: 'life-sciences',
      title: 'Life Sciences',
      meta: 'LIMS & Trials',
      desc: 'Clinical trial management tools, laboratory information management systems (LIMS), and pharmaceutical supply chain tracking.',
      image: '/images/why_business_first.jpg',
      features: [
        'LIMS Sample Tracking',
        'Regulatory Compliance Auditing',
        'Clinical Trial Telemetry'
      ],
    },
    {
      id: 'industrial',
      title: 'Industrial & Robotics',
      meta: 'IoT & Automation',
      desc: 'IoT telemetry dashboards, predictive machine maintenance, shop floor automation, and inventory control systems.',
      image: '/images/business_automation.jpg',
      features: [
        'IoT Sensor Telemetry',
        'Predictive Equipment Maintenance',
        'Automated Stock Inventory'
      ],
    },
    {
      id: 'software-hitech',
      title: 'Software & Hi-Tech',
      meta: 'SaaS & APIs',
      desc: 'Cloud-native SaaS engineering, developer API platforms, microservices architecture, and high-performance Web/Mobile apps.',
      image: '/images/custom_software.jpg',
      features: [
        'Scalable SaaS Platforms',
        'High-throughput REST & GraphQL APIs',
        'Continuous CI/CD Delivery'
      ],
    },
    {
      id: 'telecom-media',
      title: 'Telecom & Media',
      meta: 'OTT & Streaming',
      desc: 'High-throughput content delivery networks, subscriber billing engines, network performance monitoring, and OTT platforms.',
      image: '/images/cloud_solutions.jpg',
      features: [
        'High-volume Subscriber Billing',
        'Real-time Telemetry Dashboard',
        'Bandwidth & Traffic Analytics'
      ],
    },
    {
      id: 'consumer-tech',
      title: 'Consumer Tech',
      meta: 'E-Commerce & Mobile',
      desc: 'Next-gen mobile commerce, AR virtual try-on experiences, personalized recommendation engines, and loyalty platforms.',
      image: '/images/why_modern_tech.jpg',
      features: [
        'Cross-platform Mobile Apps',
        'Personalized Product Discovery',
        'AR Shopping Experiences'
      ],
    },
  ];

  const currentItem = industries[activeIndex] || industries[0];

  return (
    <section id="industries" className="py-24 sm:py-32 relative bg-white text-slate-900 overflow-hidden border-t border-slate-100">
      
      {/* Soft Ambient Radial Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-to-tr from-[#4F16A9]/5 via-[#C82190]/5 to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C82190]/10 border border-[#C82190]/20 text-[#C82190] font-mono text-xs font-semibold uppercase tracking-widest mb-6 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            Domain Expertise
          </div>
          <TextReveal
            text="Industries We Serve"
            as="h2"
            className="font-heading text-4xl sm:text-6xl lg:text-7xl font-normal tracking-[-0.04em] leading-[0.98] text-slate-900 mb-6"
          />
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal max-w-2xl mx-auto">
            Delivering tailored enterprise software, automation, and digital platforms across diverse industry verticals.
          </p>
        </div>

        {/* SINGLE UNIFIED SHOWCASE STAGE */}
        <div className="relative w-full rounded-[36px] sm:rounded-[44px] border border-slate-200/80 bg-gradient-to-tr from-slate-50/90 via-white to-purple-50/30 overflow-hidden shadow-xl shadow-slate-200/50 p-6 sm:p-10 min-h-[520px] sm:min-h-[580px] flex items-center">
          
          {/* Full-stage WebGL Liquid Molten Ring Canvas (Cards emanate from behind left panel) */}
          <div className="absolute inset-0 z-0">
            <MoltenRingCarousel
              items={industries}
              brand="TinyWorks Verticals"
              arc={1.1}
              cardSize={0.28}
              cardRatio={1.4}
              threads={false}
              fuse={0}
              glass={false}
              offsetX={0.22}
              selectedIndex={activeIndex}
              onActiveChange={(newIdx) => setActiveIndex(newIdx)}
              onItemSelect={(item) => setActiveModal(item)}
              showOverlayText={false}
            />
          </div>

          {/* Left Floating Information Panel */}
          <div className="relative z-10 max-w-md w-full bg-white p-6 sm:p-8 rounded-[28px] border border-slate-200 shadow-lg space-y-6">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[#C82190] font-mono text-xs font-semibold tracking-wider uppercase bg-[#C82190]/10 px-3 py-1 rounded-full">
                  {currentItem.meta}
                </span>
                <span className="text-slate-400 font-mono text-xs font-semibold tabular-nums">
                  {String(activeIndex + 1).padStart(2, '0')} / {String(industries.length).padStart(2, '0')}
                </span>
              </div>

              <h3 className="font-heading text-2xl sm:text-4xl font-normal tracking-[-0.04em] leading-[1.02] text-slate-900 mb-3 transition-all">
                {currentItem.title}
              </h3>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal mb-5">
                {currentItem.desc}
              </p>

              <div className="space-y-2 mb-2">
                {currentItem.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C82190] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Row & Nav Buttons */}
            <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between gap-4">
              <button
                onClick={() => setActiveModal(currentItem)}
                className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-[#4F16A9] text-white text-xs font-medium transition-all duration-300 flex items-center gap-2 shadow-md group"
              >
                <span>Explore Deliverables</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveIndex((prev) => (prev > 0 ? prev - 1 : industries.length - 1))}
                  className="w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 flex items-center justify-center transition-all shadow-sm"
                  aria-label="Previous Industry"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveIndex((prev) => (prev < industries.length - 1 ? prev + 1 : 0))}
                  className="w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 flex items-center justify-center transition-all shadow-sm"
                  aria-label="Next Industry"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Right Prompt */}
          <div className="absolute bottom-4 right-6 pointer-events-none z-20 flex items-center gap-2 text-xs font-mono text-slate-400">
            <span>Drag or swipe ring</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C82190] animate-pulse" />
          </div>

        </div>



      </div>

      {/* Interactive Detail Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-xl bg-white border border-slate-200 rounded-[32px] p-6 sm:p-10 shadow-2xl text-slate-900">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#4F16A9] text-white">
                {activeModal.meta}
              </span>
            </div>

            <h3 className="font-heading text-3xl sm:text-4xl font-normal tracking-[-0.04em] leading-[0.98] text-slate-900 mb-4">
              {activeModal.title}
            </h3>

            <p className="text-slate-600 text-base leading-relaxed mb-6 font-normal">
              {activeModal.desc}
            </p>

            <div className="space-y-3 mb-8">
              <h4 className="text-xs font-mono font-semibold text-[#C82190] uppercase tracking-wider">
                Core Engineering Deliverables
              </h4>
              {activeModal.features.map((feat, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-800 font-medium flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C82190] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setActiveModal(null)}
              className="w-full py-4 rounded-full bg-gradient-to-r from-[#4F16A9] to-[#C82190] hover:opacity-95 text-white text-base font-semibold transition-all shadow-lg shadow-[#C82190]/20"
            >
              Close Details
            </button>
          </div>
        </div>
      )}

    </section>
  );
};

export default Industries;
