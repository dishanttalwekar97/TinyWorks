import React, { useRef } from 'react';
import { useGsap } from '../hooks/useGsap';
import { gsap } from '../utils/animations';
import { Code, Globe, Smartphone, Cloud, Cpu, Building, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import useMediaQuery from '../hooks/useMediaQuery';
import TextReveal from './animations/TextReveal';

export const Services = ({ onOpenContact }) => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const mobileTrackRef = useRef(null);
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const services = [
    {
      num: '01',
      title: 'Product Engineering',
      category: 'Software Architecture',
      desc: 'End-to-end digital product design, prototyping, microservices architecture, and scalable software development.',
      tags: ['SaaS Platforms', 'Microservices', 'API Design', 'System Architecture'],
      icon: Code,
      image: '/images/why_scalable_architecture.jpg',
    },
    {
      num: '02',
      title: 'Web Development',
      category: 'Frontend & Full-stack',
      desc: 'High-performance web applications built with React, modern CSS, dynamic animations, and optimal SEO standards.',
      tags: ['React.js & Next.js', 'Vite', 'Tailwind CSS', 'GSAP Animations'],
      icon: Globe,
      image: '/images/why_modern_tech.jpg',
    },
    {
      num: '03',
      title: 'Mobile Development',
      category: 'Cross-platform Apps',
      desc: 'Native-feel iOS and Android applications designed for speed, fluid user interfaces, and offline resilience.',
      tags: ['React Native & Flutter', 'iOS & Android', 'Push Sync', 'Offline First'],
      icon: Smartphone,
      image: '/images/custom_software.jpg',
    },
    {
      num: '04',
      title: 'Cloud & DevOps',
      category: 'Infrastructure',
      desc: 'Automated CI/CD deployment pipelines, AWS cloud architecture, containerization, and 24/7 uptime monitoring.',
      tags: ['AWS Cloud', 'Docker & K8s', 'CI/CD Pipelines', 'Infrastructure as Code'],
      icon: Cloud,
      image: '/images/cloud_solutions.jpg',
    },
    {
      num: '05',
      title: 'AI & Automation',
      category: 'Intelligent Systems',
      desc: 'Business process automation, custom AI agent integrations, document parsing, and automated workflow orchestrations.',
      tags: ['n8n & Zapier', 'LLM Integrations', 'RAG Pipelines', 'Document OCR'],
      icon: Cpu,
      image: '/images/business_automation.jpg',
    },
    {
      num: '06',
      title: 'Enterprise Solutions',
      category: 'Custom Platforms',
      desc: 'Custom Hospital ERP, Inventory, CRM, and bespoke enterprise software built around complex business rules.',
      tags: ['Hospital ERP', 'Enterprise CRM', 'Inventory Control', 'Financial Auditing'],
      icon: Building,
      image: '/images/hospital_erp.jpg',
    },
  ];

  useGsap(() => {
    if (isDesktop) {
      if (!trackRef.current || !sectionRef.current) return;

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
    } else {
      if (!mobileTrackRef.current) return;

      // Continuous infinite flowing marquee from Left to Right
      const tween = gsap.fromTo(
        mobileTrackRef.current,
        { xPercent: -50 },
        {
          xPercent: 0,
          ease: 'none',
          duration: 35,
          repeat: -1,
        }
      );

      return () => {
        tween.kill();
      };
    }
  }, [isDesktop]);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 lg:py-0 lg:min-h-screen flex flex-col justify-center relative z-20 bg-white text-slate-900 overflow-hidden border-t border-slate-200/80"
    >
      {/* Background Subtle Mesh */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />

      {/* Atmospheric Soft Lighting */}
      <div className="absolute top-1/4 -right-10 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 -left-10 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-12 lg:mb-10 pt-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-[#FF5A1F] font-mono text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#FF5A1F]" />
              <span>Our Services</span>
            </div>
            <TextReveal
              text="From Idea to Production"
              as="h2"
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.04em] leading-[0.98] text-[#101828] mb-2"
            />
          </div>
          <p className="text-slate-600 text-base sm:text-lg max-w-md font-normal leading-[1.5]">
            Delivering domain expertise and technology-driven offerings to help you turn digital challenges into opportunities.
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
                    className="w-[420px] p-8 rounded-[28px] bg-white border border-slate-100 shadow-xl shadow-black/30 flex flex-col justify-between shrink-0 relative overflow-hidden"
                  >
                    {/* Subtle Background Image Texture with Soft Blend */}
                    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.12]">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover mix-blend-multiply"
                      />
                    </div>

                    {/* Card Content */}
                    <div className="relative z-10">
                      {/* Top Bar with Number & Matching Icon */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-mono font-medium text-3xl tracking-tight text-[#101828]">
                          {service.num}
                        </span>
                        <div className="w-12 h-12 rounded-2xl border border-orange-200/80 bg-orange-50/80 flex items-center justify-center text-[#FF5A1F] shadow-sm">
                          <IconComp className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Category Badge */}
                      <div className="inline-flex items-center text-[11px] font-sans uppercase tracking-wider font-semibold px-3 py-1 rounded-full border border-slate-200 bg-slate-100/80 text-slate-700 mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F] mr-2" />
                        <span>{service.category}</span>
                      </div>

                      {/* Card Title */}
                      <h3 className="font-heading text-2xl font-normal tracking-[-0.03em] leading-[1.05] mb-3 text-[#101828]">
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
                            className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-200/80 text-slate-700 text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="pt-5 border-t border-slate-100 flex items-center justify-between relative z-10">
                      <button
                        onClick={onOpenContact}
                        className="text-xs sm:text-sm font-semibold flex items-center gap-2 text-[#101828] cursor-pointer"
                      >
                        <span>Discuss Requirement</span>
                        <ArrowRight className="w-4 h-4 text-[#FF5A1F]" />
                      </button>
                      <div className="w-7 h-7 rounded-full bg-slate-100 border border-slate-200/60 flex items-center justify-center text-[#FF5A1F]">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="w-full relative overflow-hidden py-4">
            {/* Ambient Left & Right Gradient Soft Fades */}
            <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

            <div ref={mobileTrackRef} className="flex gap-5 w-max transform-gpu">
              {[...services, ...services, ...services].map((service, idx) => {
                const IconComp = service.icon;

                return (
                  <div
                    key={idx}
                    className="w-[300px] p-6 rounded-[26px] bg-white border border-slate-100 shadow-xl shadow-black/30 flex flex-col justify-between shrink-0 relative overflow-hidden"
                  >
                    {/* Subtle Background Image Texture */}
                    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.12]">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover mix-blend-multiply"
                      />
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono font-bold text-2xl text-[#101828]">
                          {service.num}
                        </span>
                        <div className="p-3 rounded-xl border border-orange-200 bg-orange-50 text-[#FF5A1F] shadow-sm">
                          <IconComp className="w-5 h-5" />
                        </div>
                      </div>

                      <div className="inline-flex items-center text-[10px] font-sans uppercase tracking-wider mb-3 font-semibold px-2.5 py-1 rounded-full border border-slate-200 bg-slate-100 text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F] mr-1.5" />
                        <span>{service.category}</span>
                      </div>

                      <h3 className="font-heading text-lg font-bold mb-2 text-[#101828] leading-tight">
                        {service.title}
                      </h3>

                      <p className="text-slate-600 text-xs leading-relaxed mb-4 font-normal line-clamp-3">
                        {service.desc}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {service.tags.slice(0, 3).map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-[11px] font-medium text-slate-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={onOpenContact}
                      className="text-xs font-semibold flex items-center justify-between pt-4 border-t border-slate-100 text-[#101828] relative z-10 cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        <span>Discuss Requirement</span>
                        <ArrowRight className="w-4 h-4 text-[#FF5A1F]" />
                      </span>
                      <div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200/60 flex items-center justify-center text-[#FF5A1F]">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;





