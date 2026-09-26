import React, { useRef } from 'react';
import { useGsap } from '../hooks/useGsap';
import { gsap } from '../utils/animations';
import TextReveal from './animations/TextReveal';

export const Stats = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useGsap(() => {
    if (!cardsRef.current) return;

    gsap.fromTo(
      cardsRef.current.children,
      { opacity: 0, y: 40, scale: 0.94 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
      }
    );
  }, []);

  const stats = [
    {
      title: 'Active modules',
      value: '128',
      desc: 'Across four core disciplines',
      theme: 'dark',
    },
    {
      title: 'Reliability rating',
      value: '99.9%',
      desc: 'System uptime and SLA compliance',
      theme: 'light',
    },
    {
      title: 'Enterprise domains',
      titleRight: '5+',
      value: '24/7',
      desc: 'Continuous real-time operations',
      theme: 'dark',
    },
    {
      title: 'Response time',
      value: '<50ms',
      desc: 'Optimized API latency',
      theme: 'light',
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 relative bg-[#F2F2F4] border-t border-slate-300/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title with Professional Text Reveal Transformation */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <TextReveal
            text="Designed for high performance."
            as="h2"
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium text-[#1D1D1F] tracking-tight mb-4"
          />
          <p className="text-[#86868B] text-base sm:text-lg font-normal">
            Engineered with extreme precision for stability, throughput, and operational clarity.
          </p>
        </div>

        {/* Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const isDark = stat.theme === 'dark';

            return (
              <div
                key={idx}
                className={`p-8 flex flex-col justify-between h-52 ${
                  isDark ? 'card-dark-pro' : 'card-pro'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[12px] text-[#86868B] font-normal">{stat.title}</span>
                  {stat.titleRight && (
                    <span className="text-[12px] text-[#86868B] font-normal">{stat.titleRight}</span>
                  )}
                </div>

                <div className="my-auto">
                  <span
                    className={`font-sans text-5xl sm:text-6xl font-light tracking-tight ${
                      isDark ? 'text-[#F5F5F7]' : 'text-[#1D1D1F]'
                    }`}
                  >
                    {stat.value}
                  </span>
                </div>

                <div>
                  <p className="text-[11px] text-[#86868B] font-normal">
                    {stat.desc}
                  </p>
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
