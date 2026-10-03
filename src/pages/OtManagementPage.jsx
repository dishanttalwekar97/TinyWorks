import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import { YouTubeThumbnail, YouTubeVideoModal } from '../components/YouTubePlayer';
import {
  Scissors,
  CalendarDays,
  Users,
  ShieldCheck,
  Activity,
  Receipt,
  BarChart3,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Play,
  Video,
  Globe,
  Tv,
  Maximize2,
  FileText,
  Clock,
  Boxes,
  ClipboardList,
} from 'lucide-react';

export const OtManagementPage = ({ onNavigate }) => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  // Per-card video controls state
  const [cardModes, setCardModes] = useState({
    'ot-scheduling': '40s',
    'ot-safety': '40s',
    'ot-implants': '40s',
  });

  const [cardLanguages, setCardLanguages] = useState({
    'ot-scheduling': 'English',
    'ot-safety': 'English',
    'ot-implants': 'English',
  });

  // Big Screen Video Lightbox Modal state
  const [activeModalVideo, setActiveModalVideo] = useState(null);

  const videoSectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Keyboard shortcut ESC to close modals
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveModalVideo(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const videoCards = [
    {
      id: 'ot-scheduling',
      title: 'Multi-Theater Surgical Scheduling & Slot Allocation',
      subtitle: 'Coordinate surgeon availability, anesthetist rosters, specialized nursing teams, and theatre rooms without schedule conflicts.',
      youtubeUrl: 'https://youtu.be/R-bVcwDzems?si=w3Z-Slc4LqJnmnDF',
      youtubeId: 'R-bVcwDzems',
      tag: 'THEATRE SCHEDULING',
      duration: '0:40',
      fullDuration: '6:15',
    },
    {
      id: 'ot-safety',
      title: 'WHO Surgical Safety Checklist & Pre-Op Verification',
      subtitle: 'Mandatory digital sign-in, time-out, and sign-out protocols ensuring patient safety, anesthesia clearance, and sterility compliance.',
      youtubeUrl: 'https://youtu.be/R-bVcwDzems?si=w3Z-Slc4LqJnmnDF',
      youtubeId: 'R-bVcwDzems',
      tag: 'SURGICAL SAFETY',
      duration: '0:40',
      fullDuration: '5:48',
    },
    {
      id: 'ot-implants',
      title: 'Implants, Sutures & Consumables Requisition & Billing',
      subtitle: 'Real-time barcode scanning of surgical implants, prosthetic meshes, and high-cost consumables with automated billing integration.',
      youtubeUrl: 'https://youtu.be/R-bVcwDzems?si=w3Z-Slc4LqJnmnDF',
      youtubeId: 'R-bVcwDzems',
      tag: 'IMPLANTS & BILLING',
      duration: '0:40',
      fullDuration: '7:20',
    },
  ];

  const handleModeChange = (cardId, mode) => {
    setCardModes((prev) => ({ ...prev, [cardId]: mode }));
  };

  const handleLanguageChange = (cardId, lang) => {
    setCardLanguages((prev) => ({ ...prev, [cardId]: lang }));
  };

  const openBigScreenVideo = (card) => {
    const mode = cardModes[card.id] || '40s';
    const lang = cardLanguages[card.id] || 'English';

    setActiveModalVideo({
      youtubeUrl: card.youtubeUrl,
      youtubeId: card.youtubeId,
      title: card.title,
      badge: `${card.tag} • ${mode === '40s' ? '40-SEC SUMMARY' : 'FULL WALKTHROUGH'} (${lang.toUpperCase()})`,
    });
  };


  // 8 Core Features from http://tinyworksindia.com/modules/operation-theatre.html
  const features = [
    {
      num: '01',
      title: 'OT Scheduling',
      desc: 'Plan surgeries with surgeon, surgical team and OT room availability with intelligent conflict prevention.',
      icon: CalendarDays,
      metric: 'Zero Overlaps',
    },
    {
      num: '02',
      title: 'Pre-op Checklists',
      desc: 'Structured pre-operative assessments, PAC anesthesia clearance, and digital informed consent tracking.',
      icon: ClipboardList,
      metric: '100% Compliance',
    },
    {
      num: '03',
      title: 'Surgical Team Management',
      desc: 'Assign chief surgeons, assistants, anesthetists, scrub nurses, and circulating support staff per procedure.',
      icon: Users,
      metric: 'Full Rostering',
    },
    {
      num: '04',
      title: 'Consumables & Implants',
      desc: 'Track high-value implants, prosthetics, sutures and surgical consumables with batch barcode verification.',
      icon: Boxes,
      metric: 'Batch Traceability',
    },
    {
      num: '05',
      title: 'Intra-op Notes',
      desc: 'Document detailed surgical procedure notes, clinical findings, specimen collections, and vitals monitoring.',
      icon: FileText,
      metric: 'Live EMR Sync',
    },
    {
      num: '06',
      title: 'Post-op Recovery',
      desc: 'Structured handover summaries to PACU recovery or ICU with continuous vitals logs and recovery milestones.',
      icon: Activity,
      metric: 'Instant PACU Log',
    },
    {
      num: '07',
      title: 'OT Billing Integration',
      desc: 'Automatically capture theatre charges, anesthesia fees, equipment usage, and surgeon share into unified bill.',
      icon: Receipt,
      metric: 'Zero Leakage',
    },
    {
      num: '08',
      title: 'Analytics & Utilization',
      desc: 'Executive analytics on theatre utilization rates, room turnaround times, case durations, and cancellation reasons.',
      icon: BarChart3,
      metric: 'Max Turnaround',
    },
  ];

  // Key Benefits from http://tinyworksindia.com/modules/operation-theatre.html
  const benefits = [
    'Improved OT utilization and conflict-free scheduling',
    'Better surgical safety and WHO checklist compliance',
    'Accurate consumable and surgical implant tracking',
    'Reduced billing leakage for complex procedures & consumables',
    'Complete medicolegal audit trail for every surgery',
    'Enhanced coordination across surgical, anesthesia & nursing teams',
  ];

  // 6-Step Workflow from http://tinyworksindia.com/modules/operation-theatre.html
  const workflowSteps = [
    {
      step: '01',
      title: 'Surgery Scheduling & Consent',
      desc: 'Surgeon books theatre slot, reserves team and equipment; patient signs digital informed consent.',
    },
    {
      step: '02',
      title: 'Pre-op Assessment & Preparation',
      desc: 'PAC anesthesia clearance, blood cross-match verification, and surgical prep completed in ward.',
    },
    {
      step: '03',
      title: 'OT Check-in & Team Briefing',
      desc: 'Patient checked into holding area; team conducts mandatory WHO sign-in & time-out briefing.',
    },
    {
      step: '04',
      title: 'Procedure & Intra-op Documentation',
      desc: 'Surgery performed; live logging of surgical notes, anesthesia monitoring, and implant lot numbers.',
    },
    {
      step: '05',
      title: 'Post-op Handover & Recovery',
      desc: 'Sign-out checklist confirmed; structured handover to PACU / ICU with recovery instructions.',
    },
    {
      step: '06',
      title: 'Billing & Reports',
      desc: 'Procedure codes, consumable ledger, and team commission shares automatically posted to billing.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 relative selection:bg-[#C82190]/20 selection:text-[#C82190] font-sans">

      {/* Top Navbar */}
      <Navbar onOpenContact={() => setContactModalOpen(true)} onNavigate={onNavigate} />

      <main className="pt-24 pb-20">

        {/* Back Navigation Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 pt-4">
          <div className="flex flex-wrap items-center gap-3 text-xs font-medium">
            <button
              onClick={() => {
                if (onNavigate) {
                  onNavigate('/carecloudx');
                } else {
                  window.history.pushState({}, '', '/carecloudx');
                  window.dispatchEvent(new Event('popstate'));
                }
              }}
              className="inline-flex items-center gap-2 font-semibold text-slate-600 hover:text-[#C82190] transition-colors cursor-pointer bg-white px-3.5 py-2 rounded-full border border-slate-200/90 shadow-sm hover:shadow transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to CareCloudX</span>
            </button>
            <span className="text-slate-300">/</span>
            <button
              onClick={() => {
                if (onNavigate) {
                  onNavigate('/carecloudx/opd management');
                } else {
                  window.history.pushState({}, '', '/carecloudx/opd management');
                  window.dispatchEvent(new Event('popstate'));
                }
              }}
              className="text-slate-500 hover:text-[#C82190] transition-colors font-medium text-[11px] px-2.5 py-1 rounded-full hover:bg-white"
            >
              OPD Management
            </button>
            <span className="text-slate-300">/</span>
            <span className="text-[#C82190] font-semibold uppercase tracking-wider text-[11px] bg-pink-50 px-3.5 py-1 rounded-full border border-pink-200/70">
              Operation Theatre
            </span>
          </div>
        </div>

        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-2">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-[#C82190] text-xs font-semibold uppercase tracking-widest shadow-sm">
                <Scissors className="w-4 h-4 text-[#C82190]" />
                <span>CARECLOUDX • MODULE 08</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-normal tracking-[-0.04em] text-slate-900 leading-[0.98]">
                Safer Surgeries & Smarter <span className="bg-gradient-to-r from-[#4F16A9] via-[#C82190] to-[#FF6B2B] bg-clip-text text-transparent">Operation Theatre Control</span>
              </h1>

              <div className="flex items-center gap-3">
                <span className="text-sm sm:text-base font-semibold text-[#C82190] italic">
                  "Safer Surgeries. Smarter Scheduling. Complete Control."
                </span>
              </div>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                CareCloudX OT Management coordinates surgical scheduling, pre-op checklists, consumables, team assignments and post-op documentation for safer, more efficient operations.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <button
                  onClick={() => openBigScreenVideo(videoCards[0])}
                  className="px-7 py-4 rounded-full bg-gradient-to-r from-[#4F16A9] via-[#C82190] to-[#FF6B2B] hover:opacity-95 text-white font-bold text-sm sm:text-base transition-all shadow-xl shadow-purple-900/20 hover:scale-[1.02] flex items-center gap-2.5 cursor-pointer"
                >
                  <Play className="w-5 h-5 fill-current" />
                  <span>Watch OT Walkthrough</span>
                </button>

                <a
                  href="#workflow-section"
                  className="px-6 py-4 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-sm sm:text-base rounded-full transition-all flex items-center gap-2 shadow-sm hover:shadow"
                >
                  <span>Explore Surgical Workflow</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </a>
              </div>

            </div>

            {/* Right Hero Video Card */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-7 bg-white border border-slate-200/90 rounded-[32px] shadow-[0_12px_40px_rgba(0,0,0,0.05)] space-y-6 relative overflow-hidden">

                {/* Hero Mini Video Preview Card */}
                <div
                  onClick={() => openBigScreenVideo(videoCards[0])}
                  className="relative group rounded-2xl overflow-hidden cursor-pointer border border-slate-200 bg-slate-900 shadow-md transition-transform duration-300 hover:scale-[1.01]"
                >
                  <YouTubeThumbnail
                    videoUrl="https://youtu.be/R-bVcwDzems?si=w3Z-Slc4LqJnmnDF"
                    alt="Operation Theatre Management Walkthrough Video"
                    className="w-full h-48 sm:h-56 opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-between p-4">
                    <div className="flex items-center justify-between">
                      <span className="bg-[#C82190] text-white text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow">
                        <Video className="w-3.5 h-3.5" />
                        <span>BIG SCREEN VIDEO</span>
                      </span>
                      <span className="bg-slate-900/90 backdrop-blur-sm text-pink-200 text-[10px] font-mono px-2.5 py-0.5 rounded-full border border-pink-500/30 font-bold flex items-center gap-1">
                        <Maximize2 className="w-3 h-3" />
                        <span>CLICK TO WATCH</span>
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-bold text-sm leading-snug">Operation Theatre Tour</h4>
                        <p className="text-slate-300 text-xs font-mono">Watch HD Video on Website</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#4F16A9] to-[#C82190] text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shrink-0 ml-2">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-xs font-mono font-semibold uppercase text-slate-400 tracking-wider">
                    MODULE METRICS
                  </span>
                  <span className="text-xs font-mono font-bold bg-pink-50 text-[#C82190] px-3 py-1 rounded-full border border-pink-200">
                    ⚡ 99.5% On-Time Start
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between transition-all hover:bg-pink-50/40">
                    <div>
                      <span className="text-[11px] font-mono text-slate-500 block uppercase font-semibold">OT TURNAROUND TIME</span>
                      <span className="text-base font-bold text-slate-900">&lt; 15 mins Between Cases</span>
                    </div>
                    <div className="w-9 h-9 rounded-xl bg-pink-100 text-[#C82190] flex items-center justify-center font-bold">
                      <Clock className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between transition-all hover:bg-purple-50/40">
                    <div>
                      <span className="text-[11px] font-mono text-slate-500 block uppercase font-semibold">SURGICAL SAFETY</span>
                      <span className="text-base font-bold text-slate-900">100% WHO Checklist Adherence</span>
                    </div>
                    <div className="w-9 h-9 rounded-xl bg-purple-100 text-[#4F16A9] flex items-center justify-center font-bold">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between transition-all hover:bg-emerald-50/40">
                    <div>
                      <span className="text-[11px] font-mono text-slate-500 block uppercase font-semibold">IMPLANT RECONCILIATION</span>
                      <span className="text-base font-bold text-slate-900">Zero Billing Discrepancies</span>
                    </div>
                    <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                      <Receipt className="w-5 h-5" />
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* 3 INTERACTIVE VIDEO DEMO CARDS SECTION */}
        <section ref={videoSectionRef} className="py-16 bg-white border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C82190] block mb-2">
                INTERACTIVE VIDEO DEMOS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
                Experience Operation Theatre in Action
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-normal">
                Choose between rapid 40-second overviews or in-depth technical walkthroughs with multilingual audio options.
              </p>
            </div>

            {/* 3 SEPARATE VIDEO CARDS GRID - 2-WIDE ON MOBILE */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
              {videoCards.map((card) => {
                const currentMode = cardModes[card.id] || '40s';
                const currentLang = cardLanguages[card.id] || 'English';

                return (
                  <div
                    key={card.id}
                    className="bg-slate-50/80 border border-slate-200/90 rounded-2xl sm:rounded-[28px] p-3 sm:p-6 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div>
                      {/* Top Controls: 40s / Full toggle & Language */}
                      <div className="flex items-center justify-between gap-1 sm:gap-2 mb-2 sm:mb-4 pb-2 sm:pb-3 border-b border-slate-200">
                        {/* 40s vs Full Toggle */}
                        <div className="inline-flex p-0.5 bg-slate-200/80 rounded-lg text-[9px] sm:text-[11px] font-mono font-semibold">
                          <button
                            onClick={() => handleModeChange(card.id, '40s')}
                            className={`px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md transition-all cursor-pointer ${
                              currentMode === '40s'
                                ? 'bg-[#C82190] text-white shadow-sm font-bold'
                                : 'text-slate-600 hover:text-slate-900'
                            }`}
                          >
                            40s
                          </button>
                          <button
                            onClick={() => handleModeChange(card.id, 'full')}
                            className={`px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md transition-all cursor-pointer ${
                              currentMode === 'full'
                                ? 'bg-[#4F16A9] text-white shadow-sm font-bold'
                                : 'text-slate-600 hover:text-slate-900'
                            }`}
                          >
                            Full
                          </button>
                        </div>

                        {/* Language Select */}
                        <div className="flex items-center gap-1 bg-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-lg border border-slate-200 text-[9px] sm:text-[11px] font-mono">
                          <Globe className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-slate-500" />
                          <select
                            value={currentLang}
                            onChange={(e) => handleLanguageChange(card.id, e.target.value)}
                            className="bg-transparent border-none text-slate-700 font-semibold focus:outline-none cursor-pointer text-[9px] sm:text-[11px]"
                          >
                            <option value="English">ENG</option>
                            <option value="Hindi">HIN</option>
                            <option value="Hinglish">HING</option>
                          </select>
                        </div>
                      </div>

                      {/* Video Player Box */}
                      <div
                        onClick={() => openBigScreenVideo(card)}
                        className="relative group rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer bg-slate-950 aspect-video mb-2.5 sm:mb-4 shadow border border-slate-800/80"
                      >
                        <YouTubeThumbnail
                          videoUrl={card.youtubeUrl}
                          alt={card.title}
                          className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity"
                        />

                        {/* Overlay with Duration Badge */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-between p-2 sm:p-3">
                          <div className="flex justify-between items-start">
                            <span className="text-[8px] sm:text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-900/90 text-pink-300 px-1.5 sm:px-2 py-0.5 rounded border border-pink-500/30 truncate max-w-[70%]">
                              {card.tag}
                            </span>
                            <span className="text-[8px] sm:text-[10px] font-mono font-bold bg-slate-900/90 text-slate-200 px-1.5 sm:px-2 py-0.5 rounded flex items-center gap-1 border border-slate-700 shrink-0">
                              <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#FF6B2B]" />
                              {currentMode === '40s' ? card.duration : card.fullDuration}
                            </span>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-white text-[9px] sm:text-xs font-mono font-bold flex items-center gap-1 truncate">
                              <Tv className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C82190]" />
                              Play HD
                            </span>
                            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-gradient-to-r from-[#4F16A9] to-[#C82190] text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shrink-0">
                              <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current ml-0.5" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Title & Description */}
                      <h3 className="font-heading font-extrabold text-xs sm:text-lg text-slate-900 mb-1 sm:mb-2 leading-snug">
                        {card.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-slate-600 leading-tight sm:leading-relaxed font-normal line-clamp-2 sm:line-clamp-none">
                        {card.subtitle}
                      </p>
                    </div>

                    {/* Bottom CTA to trigger Big-Screen Modal */}
                    <button
                      onClick={() => openBigScreenVideo(card)}
                      className="mt-3 sm:mt-5 w-full py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg sm:rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 text-[10px] sm:text-xs font-bold flex items-center justify-center gap-1.5 sm:gap-2 transition-colors cursor-pointer shadow-sm"
                    >
                      <Maximize2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C82190]" />
                      <span>Watch Fullscreen HD</span>
                    </button>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* 8 CORE FEATURES GRID - 2 COLUMNS ON MOBILE */}
        <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C82190] block mb-2">
              CLINICAL ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2 sm:mb-3">
              8 Core Surgical Capabilities
            </h2>
            <p className="text-slate-600 text-xs sm:text-base font-normal">
              Engineered for seamless surgical workflows, compliance, and patient outcomes.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
            {features.map((feat) => {
              const IconC = feat.icon;
              return (
                <div
                  key={feat.num}
                  className="bg-white border border-slate-200/90 rounded-xl sm:rounded-[24px] p-3 sm:p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2 sm:mb-4">
                      <span className="font-mono text-base sm:text-xl font-black bg-gradient-to-r from-[#4F16A9] to-[#C82190] bg-clip-text text-transparent">
                        {feat.num}
                      </span>
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-pink-50 text-[#C82190] flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[#4F16A9] group-hover:to-[#C82190] group-hover:text-white transition-all shadow-sm">
                        <IconC className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                    </div>

                    <h3 className="font-heading font-extrabold text-xs sm:text-lg text-slate-900 mb-1 sm:mb-2 group-hover:text-[#C82190] transition-colors leading-snug">
                      {feat.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-tight sm:leading-relaxed font-normal">
                      {feat.desc}
                    </p>
                  </div>

                  <div className="pt-2 sm:pt-4 mt-2 sm:mt-4 border-t border-slate-100 flex items-center justify-between text-[9px] sm:text-[11px] font-mono">
                    <span className="text-slate-400">BENEFIT</span>
                    <span className="font-bold text-[#C82190] bg-pink-50 px-1.5 sm:px-2 py-0.5 rounded border border-pink-100 truncate max-w-[65%]">
                      {feat.metric}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 6-STEP WORKFLOW SECTION - 2 COLUMNS ON MOBILE */}
        <section id="workflow-section" className="py-12 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-16">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-pink-400 block mb-2">
                END-TO-END PATIENT LIFECYCLE
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-2 sm:mb-3">
                6-Step Surgical Pathway
              </h2>
              <p className="text-slate-400 text-xs sm:text-base font-normal">
                How CareCloudX guides surgical cases smoothly from pre-op consent through recovery and billing.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6">
              {workflowSteps.map((step) => (
                <div
                  key={step.step}
                  className="bg-slate-800/70 border border-slate-700/80 rounded-xl sm:rounded-[24px] p-3.5 sm:p-6 relative overflow-hidden group hover:border-pink-500/50 transition-all shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
                      <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-[#4F16A9] to-[#C82190] text-white flex items-center justify-center font-mono font-bold text-[10px] sm:text-xs shrink-0 shadow">
                        {step.step}
                      </span>
                      <h3 className="font-heading font-bold text-xs sm:text-base text-white group-hover:text-pink-300 transition-colors leading-snug">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-300 leading-tight sm:leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* BENEFITS & TESTIMONIAL SECTION */}
        <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* Left: Key Benefits Checklist */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C82190] block mb-1">
                VALUE & ROI
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Measurable Impact for Hospital Operations
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                CareCloudX Operation Theatre delivers clear clinical and operational benefits across departments.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {benefits.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#C82190] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Testimonial Card */}
            <div className="lg:col-span-5">
              <div className="p-8 bg-gradient-to-br from-white to-pink-50/50 border border-pink-200/80 rounded-[32px] shadow-xl relative overflow-hidden">
                <div className="w-12 h-12 rounded-2xl bg-[#C82190]/10 text-[#C82190] flex items-center justify-center font-serif text-2xl font-bold mb-6">
                  “
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic font-medium mb-6">
                  "OT scheduling and consumable tracking is now fully digitized — our utilization has improved noticeably."
                </p>

                <div className="pt-4 border-t border-pink-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#4F16A9] to-[#C82190] text-white flex items-center justify-center font-bold text-sm">
                    AK
                  </div>
                  <div>
                    <h4 className="font-heading font-extrabold text-sm text-slate-900">Dr. Anil Kulkarni</h4>
                    <p className="text-xs text-slate-500 font-mono">Chief of Surgery</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

      </main>

      {/* BIG SCREEN LIGHTBOX VIDEO MODAL */}
      <YouTubeVideoModal
        video={activeModalVideo}
        onClose={() => setActiveModalVideo(null)}
      />

      {/* Footer */}
      <Footer onOpenContact={() => setContactModalOpen(true)} onNavigate={onNavigate} />

      {/* Contact Form Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

    </div>
  );
};

export default OtManagementPage;
