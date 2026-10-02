import React, { useRef, useState } from 'react';
import { useGsap } from '../hooks/useGsap';
import { gsap } from '../utils/animations';
import { Search, Compass, Palette, Code, CheckCircle2, Rocket, TrendingUp, Sparkles, ArrowRight, ChevronRight } from 'lucide-react';
import TextReveal from './animations/TextReveal';

export const Process = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const progressBarRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Discover',
      subtitle: 'Workflow & Requirement Analysis',
      desc: 'We inspect existing business processes, identify operational bottlenecks, and establish clear technical objectives.',
      icon: Search,
      accent: 'from-cyan-500 via-blue-500 to-indigo-500',
      glow: 'rgba(6, 182, 212, 0.25)',
      badgeBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
      highlights: ['Deep process audit', 'Bottleneck analysis', 'Tech roadmap alignment'],
    },
    {
      num: '02',
      title: 'Plan',
      subtitle: 'Architecture & Tech Specification',
      desc: 'Formulate database schemas, API specs, cloud topology, security guidelines, and milestone delivery roadmaps.',
      icon: Compass,
      accent: 'from-blue-500 via-indigo-500 to-purple-500',
      glow: 'rgba(59, 130, 246, 0.25)',
      badgeBg: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
      highlights: ['Database schema design', 'Cloud architecture', 'Security compliance'],
    },
    {
      num: '03',
      title: 'Design',
      subtitle: 'UX/UI & Interactive Prototypes',
      desc: 'Craft intuitive, accessible user interfaces with design tokens, glassmorphism components, and responsive layouts.',
      icon: Palette,
      accent: 'from-indigo-500 via-purple-500 to-pink-500',
      glow: 'rgba(99, 102, 241, 0.25)',
      badgeBg: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
      highlights: ['Design token system', 'Glassmorphism UI', 'Interactive prototyping'],
    },
    {
      num: '04',
      title: 'Develop',
      subtitle: 'Agile Modular Engineering',
      desc: 'Write clean, maintainable code across frontend and backend modules with continuous integration and unit tests.',
      icon: Code,
      accent: 'from-purple-500 via-pink-500 to-rose-500',
      glow: 'rgba(168, 85, 247, 0.25)',
      badgeBg: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
      highlights: ['Clean modular code', 'CI/CD pipelines', 'Automated unit tests'],
    },
    {
      num: '05',
      title: 'Test',
      subtitle: 'Rigorous QA & Security Audit',
      desc: 'Execute automated regression testing, load testing, vulnerability scans, and user acceptance sign-offs.',
      icon: CheckCircle2,
      accent: 'from-pink-500 via-rose-500 to-orange-500',
      glow: 'rgba(236, 72, 153, 0.25)',
      badgeBg: 'bg-pink-500/10 text-pink-400 border-pink-500/30',
      highlights: ['Regression testing', 'Vulnerability scanning', 'Performance load test'],
    },
    {
      num: '06',
      title: 'Deploy',
      subtitle: 'Zero-Downtime Rollout',
      desc: 'Orchestrate automated CI/CD deployments to cloud infrastructure with zero-downtime database migrations.',
      icon: Rocket,
      accent: 'from-rose-500 via-orange-500 to-amber-500',
      glow: 'rgba(244, 63, 94, 0.25)',
      badgeBg: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
      highlights: ['Zero-downtime deploy', 'Automated rollbacks', 'Live traffic routing'],
    },
    {
      num: '07',
      title: 'Improve',
      subtitle: '24/7 Monitoring & Evolution',
      desc: 'Monitor system telemetry, collect user feedback, provide security updates, and implement ongoing feature enhancements.',
      icon: TrendingUp,
      accent: 'from-amber-500 via-emerald-500 to-teal-500',
      glow: 'rgba(245, 158, 11, 0.25)',
      badgeBg: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
      highlights: ['Real-time telemetry', '24/7 SLO tracking', 'Continuous updates'],
    },
  ];

  useGsap(() => {
    if (!containerRef.current || !trackRef.current) return;

    // Check screen width for desktop horizontal pin scroll
    const isDesktop = window.innerWidth >= 768;

    if (isDesktop) {
      const track = trackRef.current;
      const getScrollAmount = () => track.scrollWidth - window.innerWidth + 120;

      const tween = gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: () => `+=${getScrollAmount()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // Update top progress bar
            if (progressBarRef.current) {
              gsap.set(progressBarRef.current, { scaleX: self.progress });
            }
            // Update active step index
            const currentIdx = Math.min(
              steps.length - 1,
              Math.floor(self.progress * steps.length)
            );
            setActiveStep(currentIdx);
          },
        },
      });

      return () => {
        tween.kill();
      };
    }
  }, []);

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative bg-[#060A12] text-white overflow-hidden py-24 md:py-0 md:min-h-screen flex flex-col justify-center"
    >
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1px, transparent 1px)`,
          backgroundSize: '3rem 3rem',
        }}
      />

      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[180px] pointer-events-none" />

      {/* Section Header & Sticky Horizontal Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 pb-4 relative z-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-widest mb-4 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              Proven Delivery Methodology
            </div>
            <TextReveal
              text="How We Build"
              as="h2"
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white"
            />
          </div>

          {/* Active Step Indicator & Controls */}
          <div className="flex items-center gap-4 bg-slate-900/80 backdrop-blur-xl px-5 py-3 rounded-2xl border border-slate-800 shrink-0">
            <span className="font-mono text-xs font-bold text-cyan-400">
              STEP {steps[activeStep]?.num || '01'} / 07
            </span>
            <div className="w-32 sm:w-48 h-1.5 bg-slate-800 rounded-full overflow-hidden relative">
              <div
                ref={progressBarRef}
                className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 rounded-full origin-left transform-gpu transition-transform duration-100"
                style={{ scaleX: 0.14 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* HORIZONTAL CARDS TRACK CONTAINER */}
      <div className="w-full relative z-10 overflow-hidden md:overflow-visible">
        <div
          ref={trackRef}
          className="flex flex-col md:flex-row gap-6 md:gap-8 px-4 sm:px-6 lg:px-12 w-full md:w-max transform-gpu"
        >
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            const isActive = activeStep === idx;

            return (
              <div
                key={idx}
                className="w-full md:w-[480px] lg:w-[540px] shrink-0 group"
              >
                <div
                  className={`relative h-full p-8 sm:p-10 rounded-[36px] bg-slate-900/70 backdrop-blur-xl border border-slate-800/90 shadow-2xl transition-all duration-500 group-hover:-translate-y-2 overflow-hidden flex flex-col justify-between ${
                    isActive ? 'border-cyan-500/50 shadow-cyan-500/10' : ''
                  }`}
                  style={{
                    boxShadow: isActive
                      ? `0 20px 40px -15px ${step.glow}`
                      : '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  {/* Subtle Inner Top Gradient Accent Bar */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${step.accent} opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Huge Translucent Number background */}
                  <span className="absolute top-2 right-4 text-8xl sm:text-9xl font-extrabold font-mono text-slate-800/30 group-hover:text-slate-700/50 transition-colors pointer-events-none select-none">
                    {step.num}
                  </span>

                  <div>
                    {/* Top Row */}
                    <div className="flex items-center justify-between gap-4 mb-6 relative z-10">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-700/80 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <IconComp className="w-6 h-6 text-cyan-400" />
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${step.badgeBg}`}
                        >
                          STEP {step.num}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-slate-400">
                        {step.subtitle}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="font-heading text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4 group-hover:text-cyan-300 transition-colors relative z-10">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-slate-300 text-base leading-relaxed font-normal mb-8 relative z-10">
                      {step.desc}
                    </p>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="pt-6 border-t border-slate-800/80 relative z-10">
                    <span className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider block mb-3">
                      Key Deliverables
                    </span>
                    <ul className="space-y-2">
                      {step.highlights.map((item, hIdx) => (
                        <li
                          key={hIdx}
                          className="flex items-center gap-2 text-sm text-slate-300 font-medium"
                        >
                          <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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

export default Process;
