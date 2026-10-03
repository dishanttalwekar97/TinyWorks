import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import { YouTubeThumbnail, YouTubeVideoModal } from '../components/YouTubePlayer';
import {
  Bed,
  BedDouble,
  Activity,
  Receipt,
  FileText,
  CreditCard,
  Sparkles,
  Calendar,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  HeartPulse,
  Maximize2,
  X,
  Play,
  Video,
  Tv,
  Globe,
  Building2,
  Layers,
  ChevronRight,
  Stethoscope,
} from 'lucide-react';

export const IpdManagementPage = ({ onNavigate }) => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  // Per-card video controls state
  const [cardModes, setCardModes] = useState({
    'ipd-admissions': '40s',
    'nursing-care': '40s',
    'ipd-discharge': '40s',
  });

  const [cardLanguages, setCardLanguages] = useState({
    'ipd-admissions': 'English',
    'nursing-care': 'English',
    'ipd-discharge': 'English',
  });

  // Big Screen Lightbox Modal state
  const [activeModalVideo, setActiveModalVideo] = useState(null); // card object or null

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
      id: 'ipd-admissions',
      title: 'Inpatient Admission & Smart Bed Allocation',
      subtitle: 'Fast-track patient admission, ward categorization (General, Deluxe, ICU), real-time bed occupancy matrix, and seamless inter-ward bed transfers.',
      youtubeUrl: 'https://youtu.be/R-bVcwDzems?si=w3Z-Slc4LqJnmnDF',
      youtubeId: 'R-bVcwDzems',
      duration: '3:45',
      badge: 'Admission & Bed Matrix',
      metrics: '100% Real-time Beds',
      points: [
        'Instant UHID-linked admission and patient tagging',
        'Visual color-coded bed occupancy and availability matrix',
        'Quick bed transfers with automated tariff and room rate recalibration',
      ],
    },
    {
      id: 'nursing-care',
      title: 'Nursing Station, Vitals & Medication Tracking',
      subtitle: 'Comprehensive paperless nursing workflow with 24/7 vitals logging, Medication Administration Records (MAR), and seamless shift handovers.',
      youtubeUrl: 'https://youtu.be/R-bVcwDzems?si=w3Z-Slc4LqJnmnDF',
      youtubeId: 'R-bVcwDzems',
      duration: '3:20',
      badge: 'Nursing Station & MAR',
      metrics: 'Zero Charting Errors',
      points: [
        'Digital nursing care notes and shift handover reports',
        'Periodic vitals logging with automated critical threshold alerts',
        'Bedside medication administration schedules and pharmacy indenting',
      ],
    },
    {
      id: 'ipd-discharge',
      title: 'Doctor Daily Rounds, Interim Billing & Discharge',
      subtitle: 'Daily clinical rounds, CPOE orders for Lab and Radiology, running interim bill tracking, and single-click automated discharge summary.',
      youtubeUrl: 'https://youtu.be/R-bVcwDzems?si=w3Z-Slc4LqJnmnDF',
      youtubeId: 'R-bVcwDzems',
      duration: '4:10',
      badge: 'Rounds, Billing & Discharge',
      metrics: 'Zero Revenue Leakage',
      points: [
        'Doctor daily clinical progress notes and diagnostic order entry',
        'Real-time interim billing capturing room, doctor, and procedure fees',
        'Standardized digital discharge summary with pharmacy returns clearance',
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

  const features = [
    {
      title: 'Admissions & Bed Allocation',
      desc: 'Quick patient admission, category selection (General, Deluxe, ICU), and smart bed assignment.',
      icon: BedDouble,
    },
    {
      title: 'Nursing Workflows',
      desc: 'Nursing notes, vitals monitoring, medication charting, and shift handover care tracking.',
      icon: Activity,
    },
    {
      title: 'Doctor Rounds & Notes',
      desc: 'Daily rounds, clinical progress sheets, treatment plans, and computerized physician order entry.',
      icon: Stethoscope,
    },
    {
      title: 'Interim Billing',
      desc: 'Raise interim bills seamlessly during hospital stay with automated tariff and room rent tracking.',
      icon: Receipt,
    },
    {
      title: 'Discharge Management',
      desc: 'Smooth discharge with automated discharge summary, medication reconciliation, and final billing.',
      icon: FileText,
    },
    {
      title: 'Bed Occupancy Dashboard',
      desc: 'Real-time bed status and occupancy analytics with color-coded ward and bed status matrix.',
      icon: Building2,
    },
    {
      title: 'Integrated Services',
      desc: 'Direct bi-directional linkage with Pathology Lab (LIS), Radiology (RIS), Pharmacy, and OT.',
      icon: Layers,
    },
    {
      title: 'TPA & Cashless Insurance',
      desc: 'Comprehensive cashless claims, insurance pre-authorization, package tariffs, and co-pay tracking.',
      icon: CreditCard,
    },
  ];

  const benefits = [
    'End-to-end inpatient lifecycle management from arrival to discharge',
    'Real-time visibility of bed & patient status across wards & ICUs',
    'Improved nursing & clinical efficiency with paperless charting',
    'Accurate billing & reduced revenue leakage with automated charge capture',
    'Better patient safety & quality of care with vitals alert tracking',
    'Data-driven decisions with smart occupancy reports and ALOS analytics',
  ];

  const workflowSteps = [
    { num: '01', title: 'Admission & Bed Allocation', desc: 'Patient admission, UHID verification, category selection (ICU, Deluxe, General), and instant bed assignment.' },
    { num: '02', title: 'Treatment & Clinical Care', desc: 'Daily doctor rounds, clinical progress notes, diagnosis logging, and computerized order entry.' },
    { num: '03', title: 'Nursing Station & Vitals', desc: 'Continuous round-the-clock vitals monitoring, medication administration (MAR), and nurse shift handovers.' },
    { num: '04', title: 'Lab, Radiology & Pharmacy', desc: 'Direct computerized order entry for diagnostic investigations and pharmacy medication indents.' },
    { num: '05', title: 'Interim Billing & TPA', desc: 'Continuous room charge capture, running bill transparency, and cashless insurance pre-authorization.' },
    { num: '06', title: 'Discharge Summary & Settlement', desc: 'Automated digital discharge summary, pharmacy return clearance, final billing settlement, and bed turnover.' },
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
              IPD Management
            </span>
          </div>
        </div>

        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-2">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-[#C82190] text-xs font-semibold uppercase tracking-widest shadow-sm">
                <HeartPulse className="w-4 h-4 text-[#C82190]" />
                <span>CARECLOUDX • MODULE 02</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-normal tracking-[-0.04em] text-slate-900 leading-[0.98]">
                Intelligent <span className="bg-gradient-to-r from-[#4F16A9] via-[#C82190] to-[#FF6B2B] bg-clip-text text-transparent">IPD Management</span>
              </h1>

              <p className="text-xl sm:text-2xl font-normal text-[#C82190] tracking-[-0.03em] leading-[1.05]">
                Complete Inpatient Care. Digitized. Integrated. Efficient.
              </p>

              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
                CareCloudX IPD Management streamlines the entire inpatient journey from admission to discharge with real-time tracking, integrated billing, and smarter clinical workflows.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => setContactModalOpen(true)}
                  className="px-8 py-4 bg-gradient-to-r from-[#4F16A9] via-[#C82190] to-[#FF6B2B] hover:opacity-95 text-white font-bold text-sm sm:text-base rounded-full shadow-lg shadow-purple-900/20 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-3 cursor-pointer"
                >
                  <span>Book IPD Demo</span>
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

            {/* Right Hero Video / Visual Card */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-7 bg-white border border-slate-200/90 rounded-[32px] shadow-[0_12px_40px_rgba(0,0,0,0.05)] space-y-6 relative overflow-hidden">
                
                {/* Hero Mini Video / Preview Card */}
                <div 
                  onClick={() => openBigScreenVideo(videoCards[0])}
                  className="relative group rounded-2xl overflow-hidden cursor-pointer border border-slate-200 bg-slate-900 shadow-md transition-transform duration-300 hover:scale-[1.01]"
                >
                  <YouTubeThumbnail
                    videoUrl="https://youtu.be/R-bVcwDzems?si=w3Z-Slc4LqJnmnDF"
                    alt="IPD Walkthrough YouTube Video"
                    className="w-full h-48 sm:h-56 opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-between p-4">
                    <div className="flex items-center justify-between">
                      <span className="bg-[#C82190] text-white text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow">
                        <Video className="w-3.5 h-3.5" />
                        <span>BIG SCREEN WALKTHROUGH</span>
                      </span>
                      <span className="bg-slate-900/90 backdrop-blur-sm text-pink-200 text-[10px] font-mono px-2.5 py-0.5 rounded-full border border-pink-500/30 font-bold flex items-center gap-1">
                        <Maximize2 className="w-3 h-3" />
                        <span>CLICK TO WATCH</span>
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-bold text-sm leading-snug">IPD Inpatient Journey Walkthrough</h4>
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
                    ⚡ 360° Bed Matrix
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between transition-all hover:bg-pink-50/40">
                    <div>
                      <span className="text-[11px] font-mono text-slate-500 block uppercase font-semibold">BED UTILIZATION RATE</span>
                      <span className="text-base font-bold text-slate-900">Optimized to 95%+ Occupancy</span>
                    </div>
                    <div className="w-9 h-9 rounded-xl bg-pink-100 text-[#C82190] flex items-center justify-center font-bold">
                      <Bed className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between transition-all hover:bg-pink-50/40">
                    <div>
                      <span className="text-[11px] font-mono text-slate-500 block uppercase font-semibold">INPATIENT BILLING ACCURACY</span>
                      <span className="text-base font-bold text-slate-900">Zero Revenue Leakage</span>
                    </div>
                    <div className="w-9 h-9 rounded-xl bg-purple-100 text-[#4F16A9] flex items-center justify-center font-bold">
                      <Receipt className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setContactModalOpen(true)}
                  className="w-full py-3.5 bg-gradient-to-r from-[#4F16A9] via-[#C82190] to-[#FF6B2B] hover:opacity-95 text-white rounded-2xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md"
                >
                  <span>Request Full IPD Spec Sheet</span>
                  <ChevronRight className="w-4 h-4 text-white" />
                </button>

              </div>
            </div>

          </div>
        </section>

        {/* SEPARATE VIDEO / DEMO CARDS SECTION */}
        <section id="video-showcase" className="py-20 bg-gradient-to-b from-white via-pink-50/30 to-white border-y border-slate-200/90 relative">
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 text-[#C82190] border border-pink-200 text-xs font-semibold uppercase tracking-widest shadow-sm">
                <Tv className="w-4 h-4 text-[#C82190]" />
                <span>IPD FEATURE DEMO CARDS</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                IPD Module Video Demonstrations
              </h2>
              <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
                Click any video card below to open and watch the inpatient module walkthrough in HD on the <strong>Big Screen</strong>.
              </p>
            </div>

            {/* 3 SEPARATE VIDEO CARDS GRID - 2-WIDE ON MOBILE */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
              {videoCards.map((card) => {
                const mode = cardModes[card.id] || '40s';
                const lang = cardLanguages[card.id] || 'English';

                return (
                  <div
                    key={card.id}
                    className="bg-white border-2 border-slate-200/90 rounded-2xl sm:rounded-[32px] p-3 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative"
                  >
                    
                    <div>

                      {/* Card Header & Badge */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-2 sm:pb-4 mb-2 sm:mb-4 border-b border-slate-100 gap-1 sm:gap-2">
                        <span className="bg-pink-50 text-[#C82190] text-[9px] sm:text-[11px] font-mono font-bold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border border-pink-200 truncate max-w-full">
                          {card.badge}
                        </span>
                        <span className="bg-slate-100 text-slate-700 text-[9px] sm:text-[11px] font-mono font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border border-slate-200 shrink-0">
                          {card.metrics}
                        </span>
                      </div>

                      <h3 className="text-xs sm:text-xl font-extrabold text-slate-900 mb-1 sm:mb-2 leading-snug group-hover:text-[#C82190] transition-colors">
                        {card.title}
                      </h3>

                      <p className="text-[11px] sm:text-xs text-slate-600 leading-tight sm:leading-relaxed font-normal mb-3 sm:mb-5 line-clamp-2 sm:line-clamp-none">
                        {card.subtitle}
                      </p>

                      {/* Video Preview Frame with Big Screen Play Trigger */}
                      <div 
                        onClick={() => openBigScreenVideo(card)}
                        className="relative aspect-video w-full rounded-xl sm:rounded-2xl bg-black overflow-hidden shadow-md border border-slate-200 mb-3 sm:mb-5 cursor-pointer group/vid"
                      >
                        <YouTubeThumbnail
                          videoUrl={card.youtubeUrl || 'https://youtu.be/R-bVcwDzems?si=w3Z-Slc4LqJnmnDF'}
                          alt={card.title}
                          className="opacity-90 group-hover/vid:opacity-100 transition-opacity"
                        />

                        {/* Overlay with Big Screen Play Button */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-between p-2.5 sm:p-4 transition-opacity">
                          <div className="flex justify-end">
                            <span className="bg-slate-900/80 backdrop-blur-md text-white text-[8px] sm:text-[10px] font-mono font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border border-white/20 flex items-center gap-1 shadow">
                              <Maximize2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#C82190]" />
                              <span>Big Screen</span>
                            </span>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-white text-[9px] sm:text-xs font-bold font-mono truncate">
                              Watch Video
                            </span>
                            <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-[#4F16A9] to-[#C82190] text-white flex items-center justify-center group-hover/vid:scale-110 transition-transform shadow-xl shrink-0">
                              <Play className="w-4 h-4 sm:w-6 sm:h-6 fill-current ml-0.5" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Per-Card Mode & Language Switcher Controls */}
                      <div className="space-y-2 mb-4 bg-slate-50 p-2 sm:p-3 rounded-xl sm:rounded-2xl border border-slate-100">
                        
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] sm:text-[11px] font-mono font-bold text-slate-500 uppercase">Version</span>
                          <div className="flex items-center bg-white p-0.5 rounded-lg sm:rounded-xl border border-slate-200 shadow-2xs">
                            <button
                              onClick={() => setModeForCard(card.id, '40s')}
                              className={`px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-[9px] sm:text-[10px] font-mono font-bold transition-all cursor-pointer ${
                                mode === '40s'
                                  ? 'bg-[#C82190] text-white'
                                  : 'text-slate-600 hover:text-slate-900'
                              }`}
                            >
                              40s
                            </button>
                            <button
                              onClick={() => setModeForCard(card.id, 'full')}
                              className={`px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-[9px] sm:text-[10px] font-mono font-bold transition-all cursor-pointer ${
                                mode === 'full'
                                  ? 'bg-[#C82190] text-white'
                                  : 'text-slate-600 hover:text-slate-900'
                              }`}
                            >
                              Full
                            </button>
                          </div>
                        </div>

                      </div>

                      {/* Key Highlights List */}
                      <div className="space-y-1.5 mb-4">
                        {card.points.map((pt, pIdx) => (
                          <div key={pIdx} className="flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C82190] shrink-0" />
                            <span className="line-clamp-1">{pt}</span>
                          </div>
                        ))}
                      </div>

                    </div>

                    {/* Card Big Screen Play CTA Button */}
                    <button
                      onClick={() => openBigScreenVideo(card)}
                      className="w-full py-2.5 sm:py-3.5 bg-gradient-to-r from-[#4F16A9] via-[#C82190] to-[#FF6B2B] hover:opacity-95 text-white font-bold text-[10px] sm:text-xs rounded-lg sm:rounded-xl shadow-md transition-all flex items-center justify-center gap-1 sm:gap-2 cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Watch Big Screen</span>
                    </button>

                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* 8 CORE FEATURES GRID - 2 COLUMNS ON MOBILE */}
        <section className="py-12 sm:py-20 bg-slate-50 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C82190] block mb-2">
                MODULE CAPABILITIES
              </span>
              <h2 className="text-2xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                Core IPD Features
              </h2>
              <p className="text-slate-600 text-xs sm:text-base font-normal">
                Everything required for modern inpatient hospital operations in one digitized, unified platform.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
              {features.map((feat, idx) => {
                const IconComponent = feat.icon;
                return (
                  <div
                    key={idx}
                    className="p-3 sm:p-6 bg-white border border-slate-200/90 rounded-xl sm:rounded-3xl flex flex-col justify-between hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 shadow-sm group"
                  >
                    <div>
                      <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl bg-pink-50 text-[#C82190] border border-pink-100 flex items-center justify-center mb-3 sm:mb-6 shadow-2xs group-hover:bg-gradient-to-r group-hover:from-[#4F16A9] group-hover:to-[#C82190] group-hover:text-white transition-all duration-300">
                        <IconComponent className="w-4 h-4 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <h3 className="text-xs sm:text-lg font-bold text-slate-900 mb-1 sm:mb-2 group-hover:text-[#C82190] transition-colors">{feat.title}</h3>
                      <p className="text-[11px] sm:text-xs text-slate-600 leading-tight sm:leading-relaxed font-normal">{feat.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* WORKFLOW SEQUENCE SECTION - 2 COLUMNS ON MOBILE */}
        <section id="workflow-section" className="py-12 sm:py-20 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 block mb-2">
                CLINICAL INPATIENT JOURNEY
              </span>
              <h2 className="text-2xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                6-Step IPD Workflow
              </h2>
              <p className="text-slate-600 text-xs sm:text-base font-normal">
                End-to-end inpatient care cycle from patient admission to final discharge and bed turnover.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-8">
              {workflowSteps.map((step) => (
                <div
                  key={step.num}
                  className="p-3.5 sm:p-8 bg-slate-50/70 border border-slate-200/80 rounded-xl sm:rounded-3xl relative shadow-sm hover:shadow-md transition-all duration-300 border-t-4 border-t-[#C82190] hover:-translate-y-1"
                >
                  <span className="font-mono text-xl sm:text-4xl font-black bg-gradient-to-r from-[#4F16A9] to-[#C82190] bg-clip-text text-transparent block mb-2 sm:mb-4">
                    {step.num}
                  </span>
                  <h3 className="text-xs sm:text-xl font-bold text-slate-900 mb-1 sm:mb-2">{step.title}</h3>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-tight sm:leading-relaxed font-normal">{step.desc}</p>
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
                  Why Hospitals Upgrade to CareCloudX IPD
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
                    "CareCloudX IPD management has significantly improved our bed utilization and billing accuracy."
                  </blockquote>

                  <div className="pt-4 border-t border-pink-400/30">
                    <span className="font-extrabold text-white block text-base">Dr. Sandeep Rao</span>
                    <span className="text-xs font-mono text-pink-200">Hospital Administrator</span>
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

export default IpdManagementPage;
