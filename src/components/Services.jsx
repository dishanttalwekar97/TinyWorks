import React, { useRef } from 'react';
import { useGsap } from '../hooks/useGsap';
import { gsap } from '../utils/animations';
import { Code, Globe, Smartphone, Cloud, Cpu, Building, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import useMediaQuery from '../hooks/useMediaQuery';
import TextReveal from './animations/TextReveal';

export const Services = ({ onOpenContact }) => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const services = [
    {
      num: '01',
      title: 'Product Engineering',
      category: 'Software Architecture',
      desc: 'End-to-end digital product design, prototyping, microservices architecture, and scalable software development.',
      tags: ['SaaS Platforms', 'Microservices', 'API Design', 'System Architecture'],
      icon: Code,
      accentGradient: 'from-sky-500 via-blue-600 to-indigo-600',
      numColor: 'text-sky-600',
      badgeBg: 'bg-sky-50 text-sky-700 border-sky-200/80',
      dotBg: 'bg-sky-500',
      iconBoxBg: 'bg-sky-50 border-sky-200/60 text-sky-600 group-hover:bg-sky-600 group-hover:text-white',
      hoverBorder: 'hover:border-sky-300',
      hoverShadow: 'hover:shadow-sky-500/10',
      btnColor: 'text-sky-600 hover:text-sky-700',
    },
    {
      num: '02',
      title: 'Web Development',
      category: 'Frontend & Full-stack',
      desc: 'High-performance web applications built with React, modern CSS, dynamic animations, and optimal SEO standards.',
      tags: ['React.js & Next.js', 'Vite', 'Tailwind CSS', 'GSAP Animations'],
      icon: Globe,
      accentGradient: 'from-blue-600 via-indigo-600 to-purple-600',
      numColor: 'text-blue-600',
      badgeBg: 'bg-blue-50 text-blue-700 border-blue-200/80',
      dotBg: 'bg-blue-500',
      iconBoxBg: 'bg-blue-50 border-blue-200/60 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
      hoverBorder: 'hover:border-blue-300',
      hoverShadow: 'hover:shadow-blue-500/10',
      btnColor: 'text-blue-600 hover:text-blue-700',
    },
    {
      num: '03',
      title: 'Mobile Development',
      category: 'Cross-platform Apps',
      desc: 'Native-feel iOS and Android applications designed for speed, fluid user interfaces, and offline resilience.',
      tags: ['React Native & Flutter', 'iOS & Android', 'Push Sync', 'Offline First'],
      icon: Smartphone,
      accentGradient: 'from-indigo-500 via-purple-600 to-pink-600',
      numColor: 'text-indigo-600',
      badgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-200/80',
      dotBg: 'bg-indigo-500',
      iconBoxBg: 'bg-indigo-50 border-indigo-200/60 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white',
      hoverBorder: 'hover:border-indigo-300',
      hoverShadow: 'hover:shadow-indigo-500/10',
      btnColor: 'text-indigo-600 hover:text-indigo-700',
    },
    {
      num: '04',
      title: 'Cloud & DevOps',
      category: 'Infrastructure',
      desc: 'Automated CI/CD deployment pipelines, AWS cloud architecture, containerization, and 24/7 uptime monitoring.',
      tags: ['AWS Cloud', 'Docker & K8s', 'CI/CD Pipelines', 'Infrastructure as Code'],
      icon: Cloud,
      accentGradient: 'from-purple-500 via-pink-600 to-rose-600',
      numColor: 'text-purple-600',
      badgeBg: 'bg-purple-50 text-purple-700 border-purple-200/80',
      dotBg: 'bg-purple-500',
      iconBoxBg: 'bg-purple-50 border-purple-200/60 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
      hoverBorder: 'hover:border-purple-300',
      hoverShadow: 'hover:shadow-purple-500/10',
      btnColor: 'text-purple-600 hover:text-purple-700',
    },
    {
      num: '05',
      title: 'AI & Automation',
      category: 'Intelligent Systems',
      desc: 'Business process automation, custom AI agent integrations, document parsing, and automated workflow orchestrations.',
      tags: ['n8n & Zapier', 'LLM Integrations', 'RAG Pipelines', 'Document OCR'],
      icon: Cpu,
      accentGradient: 'from-teal-500 via-emerald-600 to-cyan-600',
      numColor: 'text-teal-600',
      badgeBg: 'bg-teal-50 text-teal-700 border-teal-200/80',
      dotBg: 'bg-teal-500',
      iconBoxBg: 'bg-teal-50 border-teal-200/60 text-teal-600 group-hover:bg-teal-600 group-hover:text-white',
      hoverBorder: 'hover:border-teal-300',
      hoverShadow: 'hover:shadow-teal-500/10',
      btnColor: 'text-teal-600 hover:text-teal-700',
    },
    {
      num: '06',
      title: 'Enterprise Solutions',
      category: 'Custom Platforms',
      desc: 'Custom Hospital ERP, Inventory, CRM, and bespoke enterprise software built around complex business rules.',
      tags: ['Hospital ERP', 'Enterprise CRM', 'Inventory Control', 'Financial Auditing'],
      icon: Building,
      accentGradient: 'from-amber-500 via-orange-600 to-red-600',
      numColor: 'text-amber-600',
      badgeBg: 'bg-amber-50 text-amber-800 border-amber-200/80',
      dotBg: 'bg-amber-500',
      iconBoxBg: 'bg-amber-50 border-amber-200/60 text-amber-600 group-hover:bg-amber-600 group-hover:text-white',
      hoverBorder: 'hover:border-amber-300',
      hoverShadow: 'hover:shadow-amber-500/10',
      btnColor: 'text-amber-600 hover:text-amber-700',
    },
  ];

  useGsap(() => {
    if (!isDesktop || !trackRef.current || !sectionRef.current) return;

    const track = trackRef.current;
    const totalWidth = track.scrollWidth - window.innerWidth + 120;

    const tween = gsap.to(track, {
      x: -totalWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 1,
        start: 'top top',
        end: () => `+=${totalWidth}`,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      tween.kill();
    };
  }, [isDesktop]);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 lg:py-0 lg:min-h-screen flex flex-col justify-center relative z-20 bg-[#F8F9FA] text-slate-900 overflow-hidden border-t border-slate-200/80"
    >
      {/* Background Subtle Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)`,
          backgroundSize: '2.5rem 2.5rem',
        }}
      />

      {/* Light Soft Radial Background Glows */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-sky-200/40 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-[160px] pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-12 lg:mb-10 pt-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/80 border border-sky-200/80 text-sky-700 font-sans text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>Engineering Excellence</span>
            </div>
            <TextReveal
              text="From Idea to Production"
              as="h2"
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#101828]"
            />
          </div>
          <p className="text-slate-600 text-base sm:text-lg max-w-md font-normal leading-relaxed">
            Full-lifecycle software engineering tailored for enterprises, startups, and modern digital platforms.
          </p>
        </div>
      </div>

      {/* Horizontal Scroll Track (Desktop) / Vertical Grid (Mobile) */}
      <div className="w-full relative z-10">
        {isDesktop ? (
          <div className="overflow-hidden w-full pl-8 lg:pl-16 pr-12 py-6">
            <div ref={trackRef} className="flex gap-8 w-max transform-gpu">
              {services.map((service, idx) => {
                const IconComp = service.icon;

                return (
                  <div
                    key={idx}
                    className={`w-[420px] p-8 rounded-[30px] bg-white border border-slate-200/80 shadow-lg shadow-slate-200/50 flex flex-col justify-between shrink-0 relative group transition-all duration-300 hover:-translate-y-2 ${service.hoverBorder} ${service.hoverShadow} hover:shadow-2xl overflow-hidden`}
                  >
                    {/* Top Accent Bar Gradient */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r ${service.accentGradient} opacity-90 group-hover:opacity-100 transition-opacity duration-300`}
                    />

                    <div>
                      {/* Top Bar with Number & Matching Icon */}
                      <div className="flex items-center justify-between mb-6">
                        <span className={`font-mono font-bold text-3xl tracking-tight ${service.numColor}`}>
                          {service.num}
                        </span>
                        <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shadow-sm transition-all duration-300 ${service.iconBoxBg}`}>
                          <IconComp className="w-5 h-5 transition-transform group-hover:scale-110" />
                        </div>
                      </div>

                      {/* Category Badge with Color Dot */}
                      <div
                        className={`inline-flex items-center text-[11px] font-sans uppercase tracking-wider mb-4 font-semibold px-3 py-1 rounded-full border ${service.badgeBg}`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${service.dotBg} mr-2`} />
                        <span>{service.category}</span>
                      </div>

                      {/* Card Title */}
                      <h3 className="font-heading text-2xl font-bold mb-3 text-[#101828] group-hover:text-slate-900 transition-colors">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal min-h-[48px]">
                        {service.desc}
                      </p>

                      {/* Feature Tags */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {service.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-200/80 text-slate-700 text-xs font-medium hover:bg-white hover:border-slate-300 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                      <button
                        onClick={onOpenContact}
                        className={`text-xs sm:text-sm font-semibold flex items-center gap-2 ${service.btnColor} transition-colors group/btn cursor-pointer`}
                      >
                        <span>Discuss Requirement</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
                      </button>
                      <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-slate-200 group-hover:text-slate-600 transition-colors">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, idx) => {
              const IconComp = service.icon;

              return (
                <div
                  key={idx}
                  className={`p-7 rounded-[28px] bg-white border border-slate-200/80 shadow-lg shadow-slate-200/40 flex flex-col justify-between relative group ${service.hoverBorder} transition-all`}
                >
                  <div
                    className={`absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r ${service.accentGradient} rounded-t-[28px]`}
                  />

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className={`font-mono font-bold text-2xl ${service.numColor}`}>
                        {service.num}
                      </span>
                      <div className={`p-3 rounded-xl border ${service.iconBoxBg}`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    <div
                      className={`inline-flex items-center text-[11px] font-sans uppercase tracking-wider mb-3 font-semibold px-2.5 py-1 rounded-full border ${service.badgeBg}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${service.dotBg} mr-1.5`} />
                      <span>{service.category}</span>
                    </div>

                    <h3 className="font-heading text-xl font-bold mb-3 text-[#101828]">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                      {service.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={onOpenContact}
                    className={`text-xs font-semibold flex items-center justify-between pt-4 border-t border-slate-100 ${service.btnColor}`}
                  >
                    <span className="flex items-center gap-2">
                      <span>Discuss Requirement</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
