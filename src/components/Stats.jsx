import React, { useRef } from 'react';
import { useGsap } from '../hooks/useGsap';
import { gsap } from '../utils/animations';
import TextReveal from './animations/TextReveal';
import { Layers, ShieldCheck, Server, Zap, ArrowUpRight } from 'lucide-react';

export const Stats = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useGsap(() => {
    if (!cardsRef.current) return;

    gsap.fromTo(
      cardsRef.current.children,
      { opacity: 0, y: 30, scale: 0.97 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 82%',
        },
      }
    );
  }, []);

  const stats = [
    {
      title: 'Active modules',
      badge: 'Core Platform',
      value: '128',
      desc: 'Across four core disciplines',
      icon: Layers,
    },
    {
      title: 'Reliability rating',
      badge: 'High Availability',
      value: '99.9%',
      desc: 'System uptime & SLA',
      icon: ShieldCheck,
    },
    {
      title: 'Enterprise domains',
      badge: 'Global Scope',
      titleRight: '5+ Regions',
      value: '24/7',
      desc: 'Continuous real-time operations',
      icon: Server,
    },
    {
      title: 'Response time',
      badge: 'Performance',
      value: '<50ms',
      desc: 'Optimized API latency',
      icon: Zap,
    },
  ];

  return (
    <section ref={sectionRef} className="py-14 sm:py-24 relative bg-[#F4F4F6] border-t border-slate-300/50">
      {/* Soft light top background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title with Professional Text Reveal */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 border border-slate-300/70 mb-4 text-xs font-medium text-slate-700">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C82190] animate-pulse" />
            Performance & Reliability Metrics
          </div>
          <TextReveal
            text="Designed for high performance."
            as="h2"
            className="font-heading text-2xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight mb-3 sm:mb-4"
          />
          <p className="text-slate-600 text-xs sm:text-lg font-normal max-w-2xl mx-auto leading-relaxed">
            Engineered with extreme precision for stability, throughput, and operational clarity.
          </p>
        </div>

        {/* Cards Grid - 2x2 grid on mobile, 4 columns on desktop */}
        <div ref={cardsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;

            return (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-7 flex flex-col justify-between border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_30px_-10px_rgba(200,33,144,0.18)] hover:border-[#C82190]/40 transition-all duration-300 ease-out transform hover:-translate-y-1.5 overflow-hidden min-h-[160px] sm:min-h-[240px]"
              >
                {/* Top highlight bar animation matching TinyWorks logo gradient */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4F16A9] via-[#C82190] to-[#FF6B2B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Header: Icon + Title & Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 sm:mb-4">
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-slate-100/90 group-hover:bg-purple-50 text-slate-700 group-hover:text-[#C82190] flex items-center justify-center transition-colors duration-300 border border-slate-200/60 group-hover:border-[#C82190]/30 shadow-xs shrink-0">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-xs sm:text-sm font-semibold text-slate-900 tracking-tight truncate">{stat.title}</span>
                      <span className="block text-[9px] sm:text-[10px] font-medium text-slate-400 uppercase tracking-wider truncate">{stat.badge}</span>
                    </div>
                  </div>

                  {stat.titleRight && (
                    <span className="self-start sm:self-auto px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[9px] sm:text-[11px] font-medium border border-slate-200/70 shrink-0">
                      {stat.titleRight}
                    </span>
                  )}
                </div>

                {/* Main Metric Value */}
                <div className="my-auto py-1 sm:py-2">
                  <span className="font-heading text-2xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 group-hover:text-[#C82190] transition-colors duration-300">
                    {stat.value}
                  </span>
                </div>

                {/* Card Footer */}
                <div className="pt-2 sm:pt-3 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <p className="text-[10px] sm:text-xs text-slate-500 font-medium leading-tight sm:leading-normal line-clamp-2 sm:line-clamp-none">
                    {stat.desc}
                  </p>
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-300 group-hover:text-[#C82190] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0 ml-1 sm:ml-2" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Stats;

