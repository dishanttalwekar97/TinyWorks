import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, X, Sparkles, Building2, ShieldCheck, Stethoscope, FlaskConical, Bot, Laptop, Radio, Smartphone } from 'lucide-react';
import TextReveal from './animations/TextReveal';

export const Industries = () => {
  const [activeModal, setActiveModal] = useState(null);

  const industries = [
    {
      id: 'banking-finance',
      title: 'Banking & Financial Services',
      bg: 'bg-[#009688]',
      textColor: 'text-white',
      desc: 'Secure payment gateways, core banking integrations, fraud detection systems, and automated financial audit ledgers.',
      icon: Building2,
      image: '/images/industry_fintech.jpg',
      features: ['Contactless Payment Terminal Integration', 'Real-time Financial Reconciliation', 'PCI-DSS Compliant Security Layers'],
    },
    {
      id: 'insurance',
      title: 'Insurance',
      bg: 'bg-[#26A69A]',
      textColor: 'text-white',
      desc: 'Automated claim processing, policy management portals, AI risk assessment, and customer self-service web applications.',
      icon: ShieldCheck,
      image: '/images/why_scalable_architecture.jpg',
      features: ['Instant Digital Claim Filing', 'Automated Policy Underwriting', 'Omnichannel Customer Portals'],
    },
    {
      id: 'healthcare',
      title: 'Healthcare',
      bg: 'bg-[#00B4D8]',
      textColor: 'text-white',
      desc: 'HIPAA-compliant telemedicine platforms, EMR/EHR integrations, digital appointment scheduling, and OPD/IPD workflows.',
      icon: Stethoscope,
      image: '/images/hospital_erp.jpg',
      features: ['Telehealth Video Consultations', 'Unified Patient EMR Records', 'Hospital Pharmacy & Lab Billing'],
    },
    {
      id: 'life-sciences',
      title: 'Life Sciences',
      bg: 'bg-[#0077B6]',
      textColor: 'text-white',
      desc: 'Clinical trial management tools, laboratory information management systems (LIMS), and pharmaceutical supply chain tracking.',
      icon: FlaskConical,
      image: '/images/why_business_first.jpg',
      features: ['LIMS Sample Tracking', 'Regulatory Compliance Auditing', 'Clinical Trial Telemetry'],
    },
    {
      id: 'industrial',
      title: 'Industrial & Robotics',
      bg: 'bg-[#EAB308]',
      textColor: 'text-slate-900',
      desc: 'IoT telemetry dashboards, predictive machine maintenance, shop floor automation, and inventory control systems.',
      icon: Bot,
      image: '/images/business_automation.jpg',
      features: ['IoT Sensor Telemetry', 'Predictive Equipment Maintenance', 'Automated Stock Inventory'],
    },
    {
      id: 'software-hitech',
      title: 'Software & Hi-Tech',
      bg: 'bg-[#F43F5E]',
      textColor: 'text-white',
      desc: 'Cloud-native SaaS engineering, developer API platforms, microservices architecture, and high-performance Web/Mobile apps.',
      icon: Laptop,
      image: '/images/custom_software.jpg',
      features: ['Scalable SaaS Platforms', 'High-throughput REST & GraphQL APIs', 'Continuous CI/CD Delivery'],
    },
    {
      id: 'telecom-media',
      title: 'Telecom & Media',
      bg: 'bg-[#84CC16]',
      textColor: 'text-slate-900',
      desc: 'High-throughput content delivery networks, subscriber billing engines, network performance monitoring, and OTT platforms.',
      icon: Radio,
      image: '/images/cloud_solutions.jpg',
      features: ['High-volume Subscriber Billing', 'Real-time Telemetry Dashboard', 'Bandwidth & Traffic Analytics'],
    },
    {
      id: 'consumer-tech',
      title: 'Consumer Tech',
      bg: 'bg-[#6366F1]',
      textColor: 'text-white',
      desc: 'Next-gen mobile commerce, AR virtual try-on experiences, personalized recommendation engines, and loyalty platforms.',
      icon: Smartphone,
      image: '/images/why_modern_tech.jpg',
      features: ['Cross-platform Mobile Apps', 'Personalized Product Discovery', 'AR Shopping Experiences'],
    },
  ];

  return (
    <section id="industries" className="py-28 relative bg-[#060A12] text-white overflow-hidden border-t border-slate-800/60">

      {/* Ambient Radial Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-cyan-600/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-widest mb-6 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            Domain Expertise
          </div>
          <TextReveal
            text="Industries We Serve"
            as="h2"
            className="font-heading text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-6"
          />
          <p className="text-slate-400 text-lg sm:text-xl leading-relaxed font-normal max-w-2xl mx-auto">
            Delivering tailored enterprise software, automation, and digital platforms across diverse industry verticals.
          </p>
        </div>

        {/* 8-CARD HORIZONTAL SWIPE CONTAINER ON MOBILE / GRID ON DESKTOP */}
        <div className="flex overflow-x-auto snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 rounded-[28px] sm:rounded-[36px] pb-4 sm:pb-0 scrollbar-none scroll-smooth">
          {industries.map((item) => {
            const IconComp = item.icon;

            return (
              <div
                key={item.id}
                onClick={() => setActiveModal(item)}
                className={`w-[78vw] sm:w-auto shrink-0 snap-center relative min-h-[280px] sm:min-h-[340px] p-6 sm:p-8 ${item.bg} rounded-[28px] sm:rounded-[32px] flex flex-col justify-between cursor-pointer group overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1.5`}
              >
                {/* Background Image with Blend & Zoom Hover */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center opacity-30 mix-blend-overlay group-hover:scale-110 group-hover:opacity-40 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
                </div>

                {/* Top Action Row */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-lg">
                    <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-80 group-hover:opacity-100 group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>

                {/* Bottom Title & Learn More */}
                <div className="relative z-10 pt-12 sm:pt-16">
                  <h3 className={`font-heading text-xl sm:text-3xl font-bold tracking-tight mb-2 sm:mb-3 leading-tight ${item.textColor}`}>
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm font-medium line-clamp-2 max-w-md group-hover:text-white transition-colors">
                    {item.desc}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Interactive Detail Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
          <div className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-[32px] p-8 sm:p-10 shadow-2xl text-white">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold ${activeModal.bg} text-white`}>
                Industry Solution
              </span>
            </div>

            <h3 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              {activeModal.title}
            </h3>

            <p className="text-slate-300 text-base leading-relaxed mb-6 font-normal">
              {activeModal.desc}
            </p>

            <div className="space-y-3 mb-8">
              <h4 className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider">
                Core Engineering Deliverables
              </h4>
              {activeModal.features.map((feat, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-sm text-slate-200 font-medium flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setActiveModal(null)}
              className="w-full py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-base font-semibold transition-colors shadow-lg shadow-cyan-500/20"
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
