import React, { useState, useRef } from 'react';
import { useGsap } from '../hooks/useGsap';
import { gsap } from '../utils/animations';
import { Cpu, Code2, Server, Database, Cloud, Bot, Layers, Sparkles } from 'lucide-react';

export const Technology = () => {
  const containerRef = useRef(null);
  const track1Ref = useRef(null);
  const track2Ref = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Backend', 'Cloud & DevOps', 'Database', 'AI & Automation'];

  const techStack = [
    { name: 'React.js', category: 'Frontend', desc: 'Modern reactive UI component framework', icon: Code2, color: 'text-sky-600' },
    { name: 'Vite', category: 'Frontend', desc: 'Next-gen lightning fast frontend tooling', icon: Layers, color: 'text-purple-600' },
    { name: 'Tailwind CSS', category: 'Frontend', desc: 'Utility-first modern design system', icon: Code2, color: 'text-sky-500' },
    { name: 'Three.js / R3F', category: 'Frontend', desc: 'Hardware-accelerated 3D WebGL graphics', icon: Sparkles, color: 'text-indigo-600' },
    { name: 'GSAP', category: 'Frontend', desc: 'High-performance 60fps timeline animations', icon: Sparkles, color: 'text-emerald-600' },

    { name: 'Node.js', category: 'Backend', desc: 'Scalable event-driven backend runtime', icon: Server, color: 'text-emerald-600' },
    { name: 'Python', category: 'Backend', desc: 'Enterprise logic, data processing & AI', icon: Cpu, color: 'text-amber-600' },
    { name: 'Django', category: 'Backend', desc: 'High-level secure web framework', icon: Server, color: 'text-teal-600' },
    { name: 'Java', category: 'Backend', desc: 'Robust enterprise backend architecture', icon: Server, color: 'text-rose-600' },

    { name: 'AWS Cloud', category: 'Cloud & DevOps', desc: 'Elastic compute, serverless & storage', icon: Cloud, color: 'text-amber-600' },
    { name: 'Docker', category: 'Cloud & DevOps', desc: 'Containerized deployment isolation', icon: Cloud, color: 'text-blue-600' },
    { name: 'Kubernetes', category: 'Cloud & DevOps', desc: 'Automated container orchestration', icon: Cloud, color: 'text-indigo-600' },

    { name: 'PostgreSQL', category: 'Database', desc: 'ACID-compliant relational database', icon: Database, color: 'text-blue-700' },
    { name: 'MongoDB', category: 'Database', desc: 'Flexible high-throughput document store', icon: Database, color: 'text-emerald-700' },
    { name: 'Redis', category: 'Database', desc: 'Ultra-fast in-memory caching & queues', icon: Database, color: 'text-red-600' },

    { name: 'n8n Workflow', category: 'AI & Automation', desc: 'Fair-code workflow automation node engine', icon: Bot, color: 'text-pink-600' },
    { name: 'Gemini / OpenAI API', category: 'AI & Automation', desc: 'Multimodal LLM & RAG integrations', icon: Bot, color: 'text-sky-600' },
  ];

  const filteredTech =
    activeCategory === 'All'
      ? techStack
      : techStack.filter((t) => t.category === activeCategory);

  useGsap(() => {
    if (!track1Ref.current || !track2Ref.current) return;

    // Infinite Seamless GSAP Marquee - Row 1 (Right to Left - Slower Smooth Speed)
    const tween1 = gsap.to(track1Ref.current, {
      xPercent: -50,
      ease: 'none',
      duration: 65,
      repeat: -1,
    });

    // Infinite Seamless GSAP Marquee - Row 2 (Left to Right - Slower Smooth Speed)
    const tween2 = gsap.fromTo(
      track2Ref.current,
      { xPercent: -50 },
      {
        xPercent: 0,
        ease: 'none',
        duration: 72,
        repeat: -1,
      }
    );

    // GSAP ScrollTrigger Gentle Velocity Shift on Scroll
    gsap.to([tween1, tween2], {
      timeScale: 1.3,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });
  }, [activeCategory]);

  return (
    <section id="technology" ref={containerRef} className="py-24 relative z-30 bg-[#F2F2F4] border-t border-slate-200 overflow-hidden">
      
      {/* Light Soft Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-sky-200/30 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-sky-600 font-mono text-xs font-semibold uppercase tracking-widest mb-3">
            Proven Modern Stack
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Enterprise <span className="text-gradient-cyan">Technology Stack</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We select industry-standard, high-performance frameworks and cloud infrastructure designed for reliability and seamless integration.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-slate-900 text-white font-bold shadow-md scale-105'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>

      {/* CONTINUOUS RIGHT-TO-LEFT SCROLLING MARQUEE TRACKS */}
      <div className="space-y-6 overflow-hidden w-full py-4 relative">
        {/* Left & Right Fade Edge Gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-6 sm:w-24 bg-gradient-to-r from-[#F2F2F4] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-6 sm:w-24 bg-gradient-to-l from-[#F2F2F4] to-transparent z-10 pointer-events-none" />

        {/* Row 1: Right to Left Continuous GSAP Marquee Track */}
        <div className="overflow-hidden w-full">
          <div ref={track1Ref} className="flex gap-5 w-max">
            {[...filteredTech, ...filteredTech, ...filteredTech].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/90 hover:border-slate-400 p-5 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 w-[320px] shrink-0 flex items-start gap-4 group cursor-pointer"
                >
                  <div className={`p-3 rounded-xl bg-slate-100 border border-slate-200 ${item.color} group-hover:scale-110 transition-transform shrink-0`}>
                    <IconComp className="w-5 h-5" />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-heading font-bold text-base text-slate-900 group-hover:text-sky-600 transition-colors">
                        {item.name}
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono text-sky-600 uppercase tracking-wider block mb-1">
                      {item.category}
                    </span>
                    <p className="text-xs text-slate-600 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 2: Reverse Left to Right GSAP Marquee Track */}
        <div className="overflow-hidden w-full">
          <div ref={track2Ref} className="flex gap-5 w-max">
            {[...filteredTech, ...filteredTech, ...filteredTech].reverse().map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/90 hover:border-slate-400 p-5 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 w-[320px] shrink-0 flex items-start gap-4 group cursor-pointer"
                >
                  <div className={`p-3 rounded-xl bg-slate-100 border border-slate-200 ${item.color} group-hover:scale-110 transition-transform shrink-0`}>
                    <IconComp className="w-5 h-5" />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-heading font-bold text-base text-slate-900 group-hover:text-sky-600 transition-colors">
                        {item.name}
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono text-sky-600 uppercase tracking-wider block mb-1">
                      {item.category}
                    </span>
                    <p className="text-xs text-slate-600 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Technology;
