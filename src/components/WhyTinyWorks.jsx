import React, { useRef } from 'react';
import { useGsap } from '../hooks/useGsap';
import { gsap } from '../utils/animations';
import { Target, Layers, Cpu, ShieldCheck, ArrowRight } from 'lucide-react';

export const WhyTinyWorks = ({ onOpenContact }) => {
  const containerRef = useRef(null);
  const gridRef = useRef(null);

  useGsap(() => {
    if (!gridRef.current) return;

    gsap.fromTo(
      gridRef.current.children,
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.16,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  const reasons = [
    {
      title: 'Business First',
      description: 'Technology designed around actual business workflows. We study operational bottlenecks before writing a line of code.',
      highlights: ['Workflow Analysis', 'ROI Centric', 'User Adoption'],
      icon: Target,
      image: '/images/why_business_first.jpg',
    },
    {
      title: 'Scalable Architecture',
      description: 'Solutions built with long-term growth in mind. Clean code, microservices modularity, and database optimization.',
      highlights: ['Modular Codebase', 'High Throughput DBs', 'Auto-scaling'],
      icon: Layers,
      image: '/images/why_scalable_architecture.jpg',
    },
    {
      title: 'Modern Technology',
      description: 'Use modern development, cloud, automation, and AI technologies to ensure your systems remain future-proof.',
      highlights: ['React & R3F Stack', 'Cloud Native AWS', 'AI Workflows'],
      icon: Cpu,
      image: '/images/why_modern_tech.jpg',
    },
    {
      title: 'Reliable Delivery',
      description: 'Focus on maintainability, usability, and dependable software with comprehensive test coverage and deployment SLAs.',
      highlights: ['Rigorous QA Testing', '24/7 Support', 'Security Compliance'],
      icon: ShieldCheck,
      image: '/images/why_reliable_delivery.jpg',
    },
  ];

  return (
    <section id="why-us" ref={containerRef} className="py-24 relative z-30 bg-[#F2F2F4] border-t border-slate-200">
      
      {/* Light Soft Glow */}
      <div className="absolute top-1/3 left-1/3 w-[450px] h-[450px] bg-sky-200/30 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-sky-600 font-mono text-xs font-semibold uppercase tracking-widest mb-3">
            Our Core Value Proposition
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Why Businesses Choose <span className="text-gradient-cyan">TinyWorks</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We bridge the gap between complex software engineering and pragmatic, real-world business results.
          </p>
        </div>

        {/* 2X2 IMAGE CARD GRID LAYOUT WITH GLASSMORPHISM HOVER OVERLAY */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((item, idx) => {
            const IconComp = item.icon;

            return (
              <div
                key={idx}
                className="group relative h-[440px] sm:h-[480px] rounded-[36px] overflow-hidden border border-black/10 shadow-xl cursor-pointer"
              >
                {/* Background Image with smooth zoom on hover */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Top Step Badge */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10 pointer-events-none">
                  <div className="p-3.5 rounded-2xl bg-black/50 backdrop-blur-md border border-white/20 text-white shadow-lg">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs font-bold px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white shadow-lg">
                    0{idx + 1}
                  </span>
                </div>

                {/* Default Bottom Vignette & Title (Fades out when hovered) */}
                <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end transition-opacity duration-300 group-hover:opacity-0 pointer-events-none z-10">
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                </div>

                {/* SEMI-TRANSPARENT DARK GRADIENT HOVER OVERLAY (Appears smoothly from bottom on hover with glassmorphism backdrop blur) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/20 backdrop-blur-md flex flex-col justify-end p-8 sm:p-10 translate-y-full opacity-0 pointer-events-none group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-500 ease-out border-t border-white/10 z-20">
                  
                  {/* Bold White Title */}
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2.5 tracking-tight">
                    {item.title}
                  </h3>

                  {/* Short White Description */}
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-5 font-normal max-w-lg">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.highlights.map((hl, hIdx) => (
                      <span key={hIdx} className="px-3 py-1 rounded-full bg-white/15 border border-white/20 text-xs text-white font-mono">
                        {hl}
                      </span>
                    ))}
                  </div>

                  {/* 'Explore Now' Button with Rightward Arrow */}
                  <div>
                    <button
                      onClick={onOpenContact}
                      className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white hover:bg-slate-100 text-[#1D1D1F] text-sm font-semibold shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
                    >
                      <span>Explore Now</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyTinyWorks;
