import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import { YouTubeThumbnail, YouTubeVideoModal } from '../components/YouTubePlayer';
import {
  Scan,
  Radio,
  Cpu,
  Database,
  FileCheck,
  CreditCard,
  Share2,
  BarChart3,
  ShieldCheck,
  Calendar,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
  ChevronRight,
  Play,
  Video,
  Globe,
  Tv,
  Maximize2,
  X,
  FileText,
  Clock,
  Layers,
  Activity,
  Film,
} from 'lucide-react';

export const RadiologyManagementPage = ({ onNavigate }) => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [bannerLightboxOpen, setBannerLightboxOpen] = useState(false);

  // Per-card video controls state
  const [cardModes, setCardModes] = useState({
    'radiology-pacs': '40s',
    'radiology-reporting': '40s',
    'radiology-portal': '40s',
  });

  const [cardLanguages, setCardLanguages] = useState({
    'radiology-pacs': 'English',
    'radiology-reporting': 'English',
    'radiology-portal': 'English',
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
        setBannerLightboxOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const videoCards = [
    {
      id: 'radiology-pacs',
      title: 'DICOM Modality Worklist & PACS Integration',
      subtitle: 'Seamless bi-directional integration with MRI, CT, X-Ray, and Ultrasound via DICOM 3.0 and HL7 protocols for automated worklist synchronization.',
      youtubeUrl: 'https://youtu.be/R-bVcwDzems?si=w3Z-Slc4LqJnmnDF',
      youtubeId: 'R-bVcwDzems',
      duration: '3:40',
      badge: 'Modality Worklist & PACS',
      metrics: '100% DICOM Compliant',
      points: [
        'Automated Modality Worklist (MWL) pushing patient metadata',
        'High-speed PACS image archiving with multi-modality viewers',
        'Zero manual typing errors on imaging consoles',
      ],
    },
    {
      id: 'radiology-reporting',
      title: 'Radiologist Reporting, Templates & Voice Dictation',
      subtitle: 'Structured radiology report templates, speech-to-text voice dictation, prior study comparison, and digital sign-off.',
      youtubeUrl: 'https://youtu.be/R-bVcwDzems?si=w3Z-Slc4LqJnmnDF',
      youtubeId: 'R-bVcwDzems',
      duration: '3:20',
      badge: 'Structured Reporting & TAT',
      metrics: '40% Faster TAT',
      points: [
        'Specialty-specific reporting templates (Neuro, MSK, Chest)',
        'Side-by-side prior study comparison and key image pinning',
        'Radiologist digital verification with instant dispatch',
      ],
    },
    {
      id: 'radiology-portal',
      title: 'End-to-End Radiology Billing & Secure Image Portal',
      subtitle: 'Seamless order entry from OPD/IPD, instant fee capture with TPA insurance, and QR/web portal access for referring doctors and patients.',
      youtubeUrl: 'https://youtu.be/R-bVcwDzems?si=w3Z-Slc4LqJnmnDF',
      youtubeId: 'R-bVcwDzems',
      duration: '4:15',
      badge: 'Order, Billing & Portal',
      metrics: 'Instant Web Access',
      points: [
        'Direct order sync with OPD, IPD, and Emergency EMR',
        'Automated procedure tariff billing and cashless pre-auth',
        'Cloud DICOM viewer link sent via SMS and WhatsApp',
      ],
    },
  ];

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

  // 8 Core Features from http://tinyworksindia.com/modules/radiology.html
  const features = [
    {
      title: 'Imaging Order Management',
      desc: 'Create, schedule & track imaging orders easily across outpatient, inpatient, and emergency departments.',
      icon: FileText,
    },
    {
      title: 'Modalities Integration',
      desc: 'Full DICOM connectivity for MRI, CT, USG, X-Ray, PET-CT, Mammography, and fluoroscopy systems.',
      icon: Radio,
    },
    {
      title: 'PACS Management',
      desc: 'Store, view & manage diagnostic images securely with vendor neutral archiving and high availability.',
      icon: Database,
    },
    {
      title: 'Reporting Workflows',
      desc: 'Structured templates, speech-to-text voice dictation & rapid reporting with standard clinical lexicons.',
      icon: FileCheck,
    },
    {
      title: 'Billing Integration',
      desc: 'Integrated billing with OPD, IPD & Insurance including split payments, contrast charges, and consumables.',
      icon: CreditCard,
    },
    {
      title: 'Image Sharing & Access',
      desc: 'Secure DICOM web viewer sharing with referring physicians, clinical specialists, and patients.',
      icon: Share2,
    },
    {
      title: 'Analytics & Dashboards',
      desc: 'Real-time operational insights on exam volume, turnaround times (TAT), and modality utilization.',
      icon: BarChart3,
    },
    {
      title: 'Security & Compliance',
      desc: 'Role-based access control, HIPAA compliance, audit logs & high-grade enterprise data encryption.',
      icon: ShieldCheck,
    },
  ];

  // Key Benefits from http://tinyworksindia.com/modules/radiology.html
  const benefits = [
    'Reduced turnaround time (TAT) from imaging acquisition to verified report',
    'Improved reporting accuracy with standardized structured templates',
    'Better equipment utilization with smart modality scheduling',
    'Centralized image repository accessible anytime, anywhere',
    'Seamless integration with HIS/ERP, OPD, and IPD clinical workflows',
    'Enhanced collaboration with referring doctors & improved patient experience',
  ];

  // 6-Step Workflow from http://tinyworksindia.com/modules/radiology.html
  const workflowSteps = [
    {
      num: '01',
      title: 'Order Creation & Scheduling',
      desc: 'Physician generates clinical imaging requisition from OPD/IPD with urgency flags and slot scheduling.',
    },
    {
      num: '02',
      title: 'Patient Check-in & Preparation',
      desc: 'Front-desk check-in, allergy/contrast screening, and automated Modality Worklist (MWL) update.',
    },
    {
      num: '03',
      title: 'Image Acquisition (Modalities)',
      desc: 'Technologist acquires images on MRI, CT, USG, or X-Ray with verified patient demographics from MWL.',
    },
    {
      num: '04',
      title: 'Image Transfer (PACS)',
      desc: 'Images transmitted automatically to centralized PACS archives and diagnostic high-res viewing stations.',
    },
    {
      num: '05',
      title: 'Reporting & Verification',
      desc: 'Radiologist reviews scans, compares priors, dictates report, and signs off with digital signature.',
    },
    {
      num: '06',
      title: 'Billing & Results Delivery',
      desc: 'Automated charge reconciliation and instant report & image link dispatch to patient and consulting doctor.',
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
            <button
              onClick={() => {
                if (onNavigate) {
                  onNavigate('/carecloudx/pharmacy');
                } else {
                  window.history.pushState({}, '', '/carecloudx/pharmacy');
                  window.dispatchEvent(new Event('popstate'));
                }
              }}
              className="text-slate-500 hover:text-[#C82190] transition-colors font-medium text-[11px] px-2.5 py-1 rounded-full hover:bg-white"
            >
              Pharmacy
            </button>
            <span className="text-slate-300">/</span>
            <span className="text-[#C82190] font-semibold uppercase tracking-wider text-[11px] bg-pink-50 px-3.5 py-1 rounded-full border border-pink-200/70">
              Radiology & Imaging (RIS)
            </span>
          </div>
        </div>

        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-2">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-[#C82190] text-xs font-semibold uppercase tracking-widest shadow-sm">
                <Scan className="w-4 h-4 text-[#C82190]" />
                <span>CARECLOUDX • MODULE 04</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-normal tracking-[-0.04em] text-slate-900 leading-[0.98]">
                Intelligent <span className="bg-gradient-to-r from-[#4F16A9] via-[#C82190] to-[#FF6B2B] bg-clip-text text-transparent">Radiology (RIS)</span>
              </h1>

              <p className="text-xl sm:text-2xl font-normal text-[#C82190] tracking-[-0.03em] leading-[1.05]">
                Connected Imaging. Smarter Diagnosis. Better Outcomes.
              </p>

              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
                CareCloudX Radiology (RIS) streamlines imaging workflows with seamless scheduling, reporting, PACS integration and billing — delivering speed, accuracy and exceptional care.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => setContactModalOpen(true)}
                  className="px-8 py-4 bg-gradient-to-r from-[#4F16A9] via-[#C82190] to-[#FF6B2B] hover:opacity-95 text-white font-bold text-sm sm:text-base rounded-full shadow-lg shadow-purple-900/20 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-3 cursor-pointer"
                >
                  <span>Book Radiology Demo</span>
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

            {/* Right Hero Video / Banner Card */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-7 bg-white border border-slate-200/90 rounded-[32px] shadow-[0_12px_40px_rgba(0,0,0,0.05)] space-y-6 relative overflow-hidden">

                {/* Hero Mini Banner Preview Card */}
                <div
                  onClick={() => setBannerLightboxOpen(true)}
                  className="relative group rounded-2xl overflow-hidden cursor-pointer border border-slate-200 bg-slate-900 shadow-md transition-transform duration-300 hover:scale-[1.01]"
                  title="Click to view full Radiology Brochure Banner"
                >
                  <picture className="block w-full h-52 sm:h-60 overflow-hidden bg-slate-900">
                    <source type="image/webp" srcSet="/images/radiology-banner@2x.webp" />
                    <img
                      src="/images/radiology-banner@2x.png"
                      alt="Radiology & Imaging (RIS) Platform Overview"
                      className="w-full h-full object-cover object-top opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      loading="lazy"
                    />
                  </picture>

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-between p-4 pointer-events-none">
                    <div className="flex items-center justify-between">
                      <span className="bg-[#C82190] text-white text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow">
                        <Scan className="w-3.5 h-3.5" />
                        <span>CARECLOUDX RIS</span>
                      </span>
                      <span className="bg-slate-900/90 backdrop-blur-sm text-pink-200 text-[10px] font-mono px-2.5 py-0.5 rounded-full border border-pink-500/30 font-bold flex items-center gap-1">
                        <Maximize2 className="w-3 h-3" />
                        <span>ZOOM BROCHURE</span>
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-bold text-sm leading-snug">Radiology (RIS) Showcase</h4>
                        <p className="text-slate-300 text-xs font-mono">High-Definition Spec Brochure</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#4F16A9] to-[#C82190] text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shrink-0 ml-2">
                        <Maximize2 className="w-5 h-5 ml-0.5" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-xs font-mono font-semibold uppercase text-slate-400 tracking-wider">
                    MODULE METRICS
                  </span>
                  <span className="text-xs font-mono font-bold bg-pink-50 text-[#C82190] px-3 py-1 rounded-full border border-pink-200">
                    ⚡ 40% Faster TAT
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between transition-all hover:bg-pink-50/40">
                    <div>
                      <span className="text-[11px] font-mono text-slate-500 block uppercase font-semibold">TURNAROUND TIME</span>
                      <span className="text-base font-bold text-slate-900">40% Reduced Reporting TAT</span>
                    </div>
                    <div className="w-9 h-9 rounded-xl bg-pink-100 text-[#C82190] flex items-center justify-center font-bold">
                      <Clock className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between transition-all hover:bg-pink-50/40">
                    <div>
                      <span className="text-[11px] font-mono text-slate-500 block uppercase font-semibold">MODALITIES & PACS</span>
                      <span className="text-base font-bold text-slate-900">100% DICOM & HL7 Integrated</span>
                    </div>
                    <div className="w-9 h-9 rounded-xl bg-purple-100 text-[#4F16A9] flex items-center justify-center font-bold">
                      <Database className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setContactModalOpen(true)}
                  className="w-full py-3.5 bg-gradient-to-r from-[#4F16A9] via-[#C82190] to-[#FF6B2B] hover:opacity-95 text-white rounded-2xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md"
                >
                  <span>Request Full RIS Spec Sheet</span>
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
                <span>RADIOLOGY FEATURE DEMO CARDS</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                Radiology Module Video Demonstrations
              </h2>
              <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
                Click any video card below to open and watch the video in HD on the <strong>Big Screen</strong>.
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
                              className={`px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-[9px] sm:text-[10px] font-mono font-bold transition-all cursor-pointer ${mode === '40s'
                                  ? 'bg-[#C82190] text-white'
                                  : 'text-slate-600 hover:text-slate-900'
                                }`}
                            >
                              40s
                            </button>
                            <button
                              onClick={() => setModeForCard(card.id, 'full')}
                              className={`px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-[9px] sm:text-[10px] font-mono font-bold transition-all cursor-pointer ${mode === 'full'
                                  ? 'bg-[#C82190] text-white'
                                  : 'text-slate-600 hover:text-slate-900'
                                }`}
                            >
                              Full
                            </button>
                          </div>
                        </div>

                        {/* Language switcher when full mode is selected */}
                        {mode === 'full' && (
                          <div className="flex items-center justify-between pt-1.5 border-t border-slate-200/60 animate-fadeIn">
                            <span className="text-[9px] sm:text-[11px] font-mono font-bold text-slate-500 uppercase flex items-center gap-1">
                              <Globe className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#C82190]" />
                              Audio
                            </span>
                            <div className="flex items-center bg-white p-0.5 rounded-lg sm:rounded-xl border border-slate-200 shadow-2xs">
                              <button
                                onClick={() => setLanguageForCard(card.id, 'English')}
                                className={`px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-[9px] sm:text-[10px] font-mono font-bold transition-all cursor-pointer ${lang === 'English'
                                    ? 'bg-[#4F16A9] text-white'
                                    : 'text-slate-600 hover:text-slate-900'
                                  }`}
                              >
                                Eng
                              </button>
                              <button
                                onClick={() => setLanguageForCard(card.id, 'Hindi')}
                                className={`px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-[9px] sm:text-[10px] font-mono font-bold transition-all cursor-pointer ${lang === 'Hindi'
                                    ? 'bg-[#4F16A9] text-white'
                                    : 'text-slate-600 hover:text-slate-900'
                                  }`}
                              >
                                Hin
                              </button>
                            </div>
                          </div>
                        )}

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
                Core Radiology Features
              </h2>
              <p className="text-slate-600 text-xs sm:text-base font-normal">
                Complete diagnostic imaging workflow management connecting modalities, PACS, radiologist reporting, and hospital billing.
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
                DIAGNOSTIC IMAGING PIPELINE
              </span>
              <h2 className="text-2xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                6-Step Radiology Workflow
              </h2>
              <p className="text-slate-600 text-xs sm:text-base font-normal">
                End-to-end clinical imaging journey from doctor order entry to high-resolution DICOM archive and delivery.
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
                  Why Hospitals Upgrade to CareCloudX Radiology
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
                    "CareCloudX Radiology has reduced our reporting turnaround time by 40% and improved image accessibility across our hospital."
                  </blockquote>

                  <div className="pt-4 border-t border-pink-400/30">
                    <span className="font-extrabold text-white block text-base">Dr. Vivek Sharma</span>
                    <span className="text-xs font-mono text-pink-200">Radiology Head</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

      </main>

      {/* BANNER LIGHTBOX MODAL */}
      {bannerLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 md:p-8 animate-in fade-in duration-200"
          onClick={() => setBannerLightboxOpen(false)}
        >
          <div
            className="max-w-4xl w-full max-h-[92vh] bg-slate-900 border-2 border-slate-700/80 rounded-2xl sm:rounded-[32px] overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-800 bg-slate-900/90">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C82190] animate-pulse" />
                <h3 className="text-base sm:text-lg font-bold text-white">
                  CareCloudX Radiology (RIS) Module Brochure
                </h3>
              </div>
              <button
                onClick={() => setBannerLightboxOpen(false)}
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-[#C82190] text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 sm:p-6 overflow-auto flex items-center justify-center bg-slate-950">
              <img
                src="/images/radiology-banner@2x.png"
                alt="CareCloudX Radiology High Resolution Banner"
                className="max-h-[75vh] w-auto object-contain rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}

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

export default RadiologyManagementPage;
