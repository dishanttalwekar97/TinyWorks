import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import { YouTubeThumbnail, YouTubeVideoModal } from '../components/YouTubePlayer';
import {
  Stethoscope,
  Calendar,
  UserCheck,
  Receipt,
  FileText,
  CreditCard,
  Clock,
  ClipboardList,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Zap,
  ChevronRight,
  Play,
  Video,
  Film,
  Globe,
  Tv,
  Maximize2,
  X,
} from 'lucide-react';

export const OpdManagementPage = ({ onNavigate }) => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  // Per-card video controls state
  const [cardModes, setCardModes] = useState({
    'opd-appointment': '40s',
    'tab-opd': '40s',
    'simple-opd': '40s',
  });

  const [cardLanguages, setCardLanguages] = useState({
    'opd-appointment': 'English',
    'tab-opd': 'English',
    'simple-opd': 'English',
  });

  // Big Screen Video Lightbox Modal state
  const [activeModalVideo, setActiveModalVideo] = useState(null); // card object or null

  const videoSectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Keyboard shortcut ESC to close modal
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
      id: 'opd-appointment',
      title: 'OPD Appointment & Queue Management',
      subtitle: 'Smart front-desk booking, doctor schedule allocation, patient token flow, and waiting queue reduction.',
      youtubeUrl: 'https://youtu.be/R-bVcwDzems?si=w3Z-Slc4LqJnmnDF',
      youtubeId: 'R-bVcwDzems',
      duration: '3:30',
      badge: 'Appointment & Queue',
      metrics: '40% Faster Queue',
      points: [
        'Online & front-desk appointment booking',
        'Smart waiting queue token generation',
        'Real-time doctor calendar & room allocation',
      ],
    },
    {
      id: 'tab-opd',
      title: 'Tab & Mobile OPD Prescription Workflow',
      subtitle: 'Fast doctor consultation interface on tablets with instant e-prescriptions, vitals logging & diagnosis templates.',
      youtubeUrl: 'https://youtu.be/R-bVcwDzems?si=w3Z-Slc4LqJnmnDF',
      youtubeId: 'R-bVcwDzems',
      duration: '3:15',
      badge: 'Tablet & Mobile EMR',
      metrics: '100% Paperless',
      points: [
        'Doctor-friendly touch tablet interface',
        'Instant ICD-10 digital e-prescriptions',
        'Direct pharmacy & lab test ordering',
      ],
    },
    {
      id: 'simple-opd',
      title: 'Complete Outpatient Management Overview',
      subtitle: 'Comprehensive overview covering patient registration, consultation, e-prescribing, lab orders, and instant billing.',
      youtubeUrl: 'https://youtu.be/R-bVcwDzems?si=w3Z-Slc4LqJnmnDF',
      youtubeId: 'R-bVcwDzems',
      duration: '4:20',
      badge: 'Full Module Walkthrough',
      metrics: 'Unified OPD Flow',
      points: [
        'End-to-end outpatient workflow',
        'Centralized patient clinical visit history',
        'Instant consultation fee & procedure billing',
      ],
    },
  ];

  const getCardVideoSrc = (card) => {
    const mode = cardModes[card.id] || '40s';
    const lang = cardLanguages[card.id] || 'English';

    if (mode === '40s') {
      return card.shortSrc;
    }
    return lang === 'Hindi' ? card.fullHindiSrc : card.fullEnglishSrc;
  };

  const setModeForCard = (cardId, mode) => {
    setCardModes((prev) => ({ ...prev, [cardId]: mode }));
  };

  const setLanguageForCard = (cardId, lang) => {
    setCardLanguages((prev) => ({ ...prev, [cardId]: lang }));
  };

  const openBigScreenVideo = (card) => {
    setActiveModalVideo(card);
  };

  const scrollToVideo = () => {
    if (videoSectionRef.current) {
      videoSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      title: 'Appointment Scheduling',
      desc: 'Easy online & front-desk booking, slot allocation, and doctor calendar management.',
      icon: Calendar,
    },
    {
      title: 'Doctor Management',
      desc: 'Manage doctor rosters, consulting hours, duty schedules, and OPD room availability.',
      icon: UserCheck,
    },
    {
      title: 'Token & Queue System',
      desc: 'Smart queue token generation, real-time waiting display, and crowd management.',
      icon: Receipt,
    },
    {
      title: 'Digital Prescriptions',
      desc: 'Paperless e-prescriptions with custom dosage templates, ICD-10 codes, and vitals.',
      icon: FileText,
    },
    {
      title: 'OPD Billing Integration',
      desc: 'Instant charge capture, consultation fee billing, discount approvals, and receipts.',
      icon: CreditCard,
    },
    {
      title: 'Complete Visit History',
      desc: 'Unified patient clinical timeline across past OPD visits, diagnoses, and lab tests.',
      icon: Clock,
    },
    {
      title: 'Queue & Waiting Reduction',
      desc: 'Automated token flow alerts and patient notifications to reduce wait times by 40%.',
      icon: Clock,
    },
    {
      title: 'EMR Ready Consultations',
      desc: 'Structured case notes, chief complaints, physical exam logs, and follow-up advice.',
      icon: ClipboardList,
    },
  ];

  const benefits = [
    'Reduce patient waiting time by up to 40%',
    'Improve doctor consultation speed & daily throughput',
    'Centralized patient clinical records & visit history',
    'Instant OPD billing and automated financial reconciliation',
    'Enhanced patient satisfaction and paperless care',
    'Real-time OPD queue analytics for hospital management',
  ];

  const workflowSteps = [
    { num: '01', title: 'Appointment Booking', desc: 'Patient registers online or at front desk and selects doctor slot.' },
    { num: '02', title: 'Token Generation', desc: 'Smart queue token assigned with real-time status display.' },
    { num: '03', title: 'Doctor Consultation', desc: 'Doctor examines patient, logs vitals, and records EMR case notes.' },
    { num: '04', title: 'e-Prescription & Advice', desc: 'Instant digital prescription generated with pharmacy integration.' },
    { num: '05', title: 'Billing & Payment', desc: 'Unified invoice generated for consultation and OPD procedures.' },
    { num: '06', title: 'Summary & Follow-up', desc: 'Digital visit summary provided with scheduled follow-up reminder.' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 relative selection:bg-[#C82190]/20 selection:text-[#C82190] font-sans">

      {/* Top Navbar */}
      <Navbar onOpenContact={() => setContactModalOpen(true)} />

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
            <span className="text-[#C82190] font-semibold uppercase tracking-wider text-[11px] bg-pink-50 px-3.5 py-1 rounded-full border border-pink-200/70">
              OPD Management
            </span>
          </div>
        </div>

        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-2">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-[#C82190] text-xs font-semibold uppercase tracking-widest shadow-sm">
                <Stethoscope className="w-4 h-4 text-[#C82190]" />
                <span>CARECLOUDX • MODULE 01</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-normal tracking-[-0.04em] text-slate-900 leading-[0.98]">
                Intelligent <span className="bg-gradient-to-r from-[#4F16A9] via-[#C82190] to-[#FF6B2B] bg-clip-text text-transparent">OPD Management</span>
              </h1>

              <p className="text-xl sm:text-2xl font-normal text-[#C82190] tracking-[-0.03em] leading-[1.05]">
                Smarter Outpatient Care. Faster Consultations.
              </p>

              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
                CareCloudX OPD Management streamlines your outpatient department operations with intelligent workflows, reduced waiting times, paperless e-prescriptions, and seamless billing integration.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => setContactModalOpen(true)}
                  className="px-8 py-4 bg-gradient-to-r from-[#4F16A9] via-[#C82190] to-[#FF6B2B] hover:opacity-95 text-white font-bold text-sm sm:text-base rounded-full shadow-lg shadow-purple-900/20 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-3 cursor-pointer"
                >
                  <span>Book OPD Demo</span>
                  <Calendar className="w-5 h-5 text-white" />
                </button>

                <button
                  onClick={() => openBigScreenVideo(videoCards[0])}
                  className="px-8 py-4 bg-white border-2 border-[#C82190] hover:bg-pink-50 text-[#C82190] font-bold text-sm sm:text-base rounded-full shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                  <span>Play Big Screen Video</span>
                </button>

                <a
                  href="#workflow-section"
                  className="px-6 py-4 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-sm sm:text-base rounded-full transition-all flex items-center gap-2 shadow-sm hover:shadow"
                >
                  <span>Explore Workflow</span>
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
                    alt="OPD Walkthrough YouTube Video"
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
                        <h4 className="text-white font-bold text-sm leading-snug">OPD Appointment Walkthrough</h4>
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
                    ⚡ 40% Faster Queue
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between transition-all hover:bg-pink-50/40">
                    <div>
                      <span className="text-[11px] font-mono text-slate-500 block uppercase font-semibold">PATIENT WAITING TIME</span>
                      <span className="text-base font-bold text-slate-900">Reduced by 40%</span>
                    </div>
                    <div className="w-9 h-9 rounded-xl bg-pink-100 text-[#C82190] flex items-center justify-center font-bold">
                      <Clock className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between transition-all hover:bg-pink-50/40">
                    <div>
                      <span className="text-[11px] font-mono text-slate-500 block uppercase font-semibold">E-PRESCRIPTION RATE</span>
                      <span className="text-base font-bold text-slate-900">100% Paperless EMR</span>
                    </div>
                    <div className="w-9 h-9 rounded-xl bg-purple-100 text-[#4F16A9] flex items-center justify-center font-bold">
                      <FileText className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setContactModalOpen(true)}
                  className="w-full py-3.5 bg-gradient-to-r from-[#4F16A9] via-[#C82190] to-[#FF6B2B] hover:opacity-95 text-white rounded-2xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md"
                >
                  <span>Request Full Spec Sheet</span>
                  <ChevronRight className="w-4 h-4 text-white" />
                </button>

              </div>
            </div>

          </div>
        </section>

        {/* SEPARATE VIDEO CARDS SECTION */}
        <section ref={videoSectionRef} id="video-showcase" className="py-20 bg-gradient-to-b from-white via-pink-50/30 to-white border-y border-slate-200/90 relative">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 text-[#C82190] border border-pink-200 text-xs font-semibold uppercase tracking-widest shadow-sm">
                <Tv className="w-4 h-4 text-[#C82190]" />
                <span>OPD FEATURE DEMO CARDS</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                OPD Module Video Demonstrations
              </h2>
              <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
                Click any video card below to open and watch the video in HD on the <strong>Big Screen</strong>.
              </p>
            </div>

            {/* 3 SEPARATE VIDEO CARDS GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {videoCards.map((card) => {
                const mode = cardModes[card.id] || '40s';
                const lang = cardLanguages[card.id] || 'English';

                return (
                  <div
                    key={card.id}
                    className="bg-white border-2 border-slate-200/90 rounded-[32px] p-6 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative"
                  >

                    <div>

                      {/* Card Header & Badge */}
                      <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 gap-2">
                        <span className="bg-pink-50 text-[#C82190] text-[11px] font-mono font-bold px-3 py-1 rounded-full border border-pink-200">
                          {card.badge}
                        </span>
                        <span className="bg-slate-100 text-slate-700 text-[11px] font-mono font-bold px-2.5 py-1 rounded-full border border-slate-200">
                          {card.metrics}
                        </span>
                      </div>

                      <h3 className="text-xl font-extrabold text-slate-900 mb-2 leading-snug group-hover:text-[#C82190] transition-colors">
                        {card.title}
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed font-normal mb-5">
                        {card.subtitle}
                      </p>

                      {/* Video Preview Frame with Big Screen Play Trigger */}
                      <div
                        onClick={() => openBigScreenVideo(card)}
                        className="relative aspect-video w-full rounded-2xl bg-black overflow-hidden shadow-md border border-slate-200 mb-5 cursor-pointer group/vid"
                      >
                        <YouTubeThumbnail
                          videoUrl={card.youtubeUrl || 'https://youtu.be/R-bVcwDzems?si=w3Z-Slc4LqJnmnDF'}
                          alt={card.title}
                          className="opacity-90 group-hover/vid:opacity-100 transition-opacity"
                        />

                        {/* Overlay with Big Screen Play Button */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-between p-4 transition-opacity">
                          <div className="flex justify-end">
                            <span className="bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border border-white/20 flex items-center gap-1 shadow">
                              <Maximize2 className="w-3 h-3 text-[#C82190]" />
                              <span>Big Screen HD</span>
                            </span>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-white text-xs font-bold font-mono">
                              Watch Video on Website
                            </span>
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#4F16A9] to-[#C82190] text-white flex items-center justify-center group-hover/vid:scale-110 transition-transform shadow-xl shrink-0">
                              <Play className="w-6 h-6 fill-current ml-0.5" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Per-Card Mode & Language Switcher Controls */}
                      <div className="space-y-3 mb-6 bg-slate-50 p-3 rounded-2xl border border-slate-100">

                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-mono font-bold text-slate-500 uppercase">Video Version</span>
                          <div className="flex items-center bg-white p-0.5 rounded-xl border border-slate-200 shadow-sm">
                            <button
                              onClick={() => setModeForCard(card.id, '40s')}
                              className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold transition-all cursor-pointer ${mode === '40s'
                                  ? 'bg-[#C82190] text-white'
                                  : 'text-slate-600 hover:text-slate-900'
                                }`}
                            >
                              40s Highlight
                            </button>
                            <button
                              onClick={() => setModeForCard(card.id, 'full')}
                              className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold transition-all cursor-pointer ${mode === 'full'
                                  ? 'bg-[#C82190] text-white'
                                  : 'text-slate-600 hover:text-slate-900'
                                }`}
                            >
                              Full Video
                            </button>
                          </div>
                        </div>

                        {/* Language switcher when full mode is selected */}
                        {mode === 'full' && (
                          <div className="flex items-center justify-between pt-2 border-t border-slate-200/60 animate-fadeIn">
                            <span className="text-[11px] font-mono font-bold text-slate-500 uppercase flex items-center gap-1">
                              <Globe className="w-3 h-3 text-[#C82190]" />
                              Audio
                            </span>
                            <div className="flex items-center bg-white p-0.5 rounded-xl border border-slate-200 shadow-sm">
                              <button
                                onClick={() => setLanguageForCard(card.id, 'English')}
                                className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold transition-all cursor-pointer ${lang === 'English'
                                    ? 'bg-[#4F16A9] text-white'
                                    : 'text-slate-600 hover:text-slate-900'
                                  }`}
                              >
                                English
                              </button>
                              <button
                                onClick={() => setLanguageForCard(card.id, 'Hindi')}
                                className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold transition-all cursor-pointer ${lang === 'Hindi'
                                    ? 'bg-[#4F16A9] text-white'
                                    : 'text-slate-600 hover:text-slate-900'
                                  }`}
                              >
                                Hindi
                              </button>
                            </div>
                          </div>
                        )}

                      </div>

                      {/* Key Highlights List */}
                      <div className="space-y-2 mb-6">
                        {card.points.map((pt, pIdx) => (
                          <div key={pIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-[#C82190] shrink-0" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>

                    </div>

                    {/* Card Big Screen Play CTA Button */}
                    <button
                      onClick={() => openBigScreenVideo(card)}
                      className="w-full py-3.5 bg-gradient-to-r from-[#4F16A9] via-[#C82190] to-[#FF6B2B] hover:opacity-95 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Play className="w-4 h-4 fill-current" />
                      <span>Watch Big Screen Video</span>
                    </button>

                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* 8 CORE FEATURES GRID */}
        <section className="py-20 bg-slate-50 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C82190] block mb-2">
                MODULE CAPABILITIES
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                Core OPD Features
              </h2>
              <p className="text-slate-600 text-base font-normal">
                Everything required for high-volume outpatient management in one unified platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feat, idx) => {
                const IconComponent = feat.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 bg-white border border-slate-200/90 rounded-3xl flex flex-col justify-between hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 shadow-sm group"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-pink-50 text-[#C82190] border border-pink-100 flex items-center justify-center mb-6 shadow-sm group-hover:bg-gradient-to-r group-hover:from-[#4F16A9] group-hover:to-[#C82190] group-hover:text-white transition-all duration-300">
                        <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#C82190] transition-colors">{feat.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">{feat.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* WORKFLOW SEQUENCE SECTION */}
        <section id="workflow-section" className="py-20 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 block mb-2">
                CLINICAL PATIENT JOURNEY
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                6-Step OPD Workflow
              </h2>
              <p className="text-slate-600 text-base font-normal">
                End-to-end outpatient consultation process from arrival to follow-up.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {workflowSteps.map((step) => (
                <div
                  key={step.num}
                  className="p-8 bg-slate-50/70 border border-slate-200/80 rounded-3xl relative shadow-sm hover:shadow-md transition-all duration-300 border-t-4 border-t-[#C82190] hover:-translate-y-1"
                >
                  <span className="font-mono text-4xl font-black bg-gradient-to-r from-[#4F16A9] to-[#C82190] bg-clip-text text-transparent block mb-4">
                    {step.num}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{step.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* BENEFITS & CLIENT TESTIMONIAL */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              {/* Left Column: Benefits */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C82190] block">
                  KEY BENEFITS
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Why Hospitals Upgrade to CareCloudX OPD
                </h2>

                <div className="space-y-3 pt-4">
                  {benefits.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-pink-300 transition-all duration-300 hover:shadow">
                      <CheckCircle2 className="w-5 h-5 text-[#C82190] shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-slate-800">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Testimonial Card */}
              <div className="lg:col-span-5">
                <div className="p-8 sm:p-10 bg-gradient-to-br from-[#4F16A9] via-[#8B1C9B] to-[#C82190] text-white rounded-[32px] shadow-2xl relative space-y-6 border border-pink-400/30 overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />

                  <Sparkles className="w-12 h-12 text-pink-200 opacity-90" />

                  <blockquote className="text-base sm:text-lg italic font-normal leading-relaxed text-pink-50">
                    "CareCloudX OPD has reduced our patient waiting time by 40% and improved patient satisfaction significantly."
                  </blockquote>

                  <div className="pt-4 border-t border-pink-400/30">
                    <span className="font-extrabold text-white block text-base">Dr. Rahul Mehta</span>
                    <span className="text-xs font-mono text-pink-200">Medical Director</span>
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
      <Footer onOpenContact={() => setContactModalOpen(true)} />

      {/* Contact Form Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

    </div>
  );
};

export default OpdManagementPage;
