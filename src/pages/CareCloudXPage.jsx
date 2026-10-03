import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import { YouTubeThumbnail, YouTubeVideoModal } from '../components/YouTubePlayer';
import {
  Stethoscope,
  HeartPulse,
  Activity,
  FlaskConical,
  FileText,
  Pill,
  CreditCard,
  UserPlus,
  Scissors,
  Box,
  Users,
  DollarSign,
  BarChart3,
  Lock,
  Cloud,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Layers,
  ChevronRight,
  ArrowLeft,
  Play,
  Video,
  Maximize2,
} from 'lucide-react';

export const CareCloudXPage = ({ onNavigate }) => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [activeVideoModal, setActiveVideoModal] = useState(null);

  useEffect(() => {
    document.title = 'CareCloudX | Enterprise Hospital ERP - TinyWorks Infotech';
    window.scrollTo(0, 0);
  }, []);

  const pillars = [
    {
      title: 'Unified Platform',
      desc: 'One integrated operating system connecting all clinical & administrative hospital departments seamlessly.',
      icon: Layers,
    },
    {
      title: 'Smart Analytics',
      desc: 'Data-driven real-time insights for clinical efficiency, bed occupancy, and financial decision-making.',
      icon: BarChart3,
    },
    {
      title: 'Secure & Compliant',
      desc: 'HIPAA & NABH compliant infrastructure with role-based access control and immutable audit trails.',
      icon: Lock,
    },
    {
      title: 'Anywhere Access',
      desc: 'Cloud-native deployment accessible securely from any browser, tablet, or mobile device 24/7.',
      icon: Cloud,
    },
  ];

  const modules = [
    {
      num: '01',
      title: 'OPD Management',
      category: 'Outpatient Department',
      tagline: 'Smarter Outpatient Care. Faster Consultations.',
      desc: 'CareCloudX OPD Management streamlines your outpatient department operations with intelligent workflows, reduced waiting time, paperless e-prescriptions, and improved patient experience.',
      features: [
        'Appointment Scheduling & Doctor Slots',
        'Smart Queue & Real-time Token Tracking',
        'Paperless Digital e-Prescriptions',
        'Instant OPD Billing Integration',
        'Complete Patient Visit & EMR History',
      ],
      benefits: [
        'Reduce patient waiting time by up to 40%',
        'Improve doctor productivity & consultation speed',
        'Centralized patient information & visit history',
      ],
      icon: Stethoscope,
      isOPD: true,
    },
    {
      num: '02',
      title: 'IPD Management',
      category: 'Inpatient Department',
      tagline: 'Complete Inpatient Care. Digitized. Integrated. Efficient.',
      desc: 'CareCloudX IPD Management streamlines the entire inpatient journey from admission to discharge with real-time tracking, integrated billing, and smarter clinical workflows.',
      features: [
        'Admissions & Smart Bed Allocation',
        'Nursing Workflows & Vitals Tracking',
        'Doctor Rounds & Clinical Notes',
        'Interim Billing During Hospital Stay',
        'Automated Discharge Summary & Clearance',
      ],
      benefits: [
        'End-to-end inpatient lifecycle management',
        'Real-time visibility of bed & patient status',
        'Accurate billing & zero revenue leakage',
      ],
      icon: HeartPulse,
      isIPD: true,
    },
    {
      num: '03',
      title: 'Laboratory (LIS)',
      category: 'Lab Information System',
      tagline: 'Faster Diagnostics. Smarter Reporting.',
      desc: 'CareCloudX LIS automates your laboratory operations from test ordering to reporting with accuracy, traceability, and speed.',
      features: [
        'Sample collection & barcode tracking',
        'Bi-directional lab analyzer integration',
        'Normal value reference validation',
        'Report delivery via SMS & WhatsApp',
      ],
      icon: FlaskConical,
      isLab: true,
    },
    {
      num: '04',
      title: 'Radiology (RIS)',
      category: 'Radiology & Imaging',
      desc: 'Integrated radiology workflow with PACS and DICOM viewer compatibility for X-Ray, CT, MRI, and Ultrasound reporting.',
      features: [
        'DICOM viewer & PACS link integration',
        'Radiologist digital sign-off workflow',
        'Diagnostic template builder',
        'Prior study comparison archives',
      ],
      icon: FileText,
      isRadiology: true,
    },
    {
      num: '05',
      title: 'Pharmacy',
      category: 'Inventory & POS',
      desc: 'Comprehensive pharmacy management with stock control, batch expiry alerts, barcode scanning, and instant POS billing.',
      features: [
        'Batch & expiry date tracking',
        'Automated reorder point alerts',
        'OPD/IPD prescription auto-fetch',
        'Supplier purchase order management',
      ],
      icon: Pill,
      isPharmacy: true,
    },
    {
      num: '06',
      title: 'Billing & Insurance',
      category: 'Cashless & TPA',
      desc: 'Multi-tariff billing engine supporting cash, credit, TPA insurance claims, GIPSA package rates, and split payments.',
      features: [
        'TPA cashless claim pre-authorization',
        'GIPSA & corporate package billing',
        'Multi-level discount approval control',
        'Real-time revenue settlement logs',
      ],
      icon: CreditCard,
      isBilling: true,
    },
    {
      num: '07',
      title: 'Patient Registration',
      category: 'UHID & EHR',
      desc: 'Centralized patient demographic database with unique patient identification (UHID) and lifetime electronic health records.',
      features: [
        'Smart UHID generation & lookup',
        'Demographic & contact history',
        'Lifetime EHR clinical repository',
        'Biometric & ID document attachments',
      ],
      icon: UserPlus,
      isRegistration: true,
    },
    {
      num: '08',
      title: 'Operation Theatre',
      category: 'OT & Surgery',
      desc: 'Schedule OT slots, log surgeon and anesthesia notes, track surgical implants, and manage OT consumables.',
      features: [
        'OT calendar slot scheduling',
        'Pre & post-operative checklists',
        'Surgeon & anesthetist clinical notes',
        'Implant & sterile stock utilization',
      ],
      icon: Scissors,
      isOT: true,
    },
    {
      num: '09',
      title: 'Inventory & Stores',
      category: 'Supply Chain',
      desc: 'Central store requisitions, vendor purchase orders, minimum stock alerts, and real-time inventory valuation.',
      features: [
        'Central & sub-store requisitions',
        'Vendor PO & GRN workflow',
        'FIFO stock issue control',
        'Valuation & stock audit reports',
      ],
      icon: Box,
      isInventory: true,
    },
    {
      num: '10',
      title: 'HR & Payroll',
      category: 'Staff & Duty Rosters',
      desc: 'Manage medical staff duty rosters, biometric attendance, doctor consultant share calculations, and monthly payroll processing.',
      features: [
        'Doctor duty roster planner',
        'Biometric attendance integration',
        'Consultant payout & commission logs',
        'Automated monthly salary slips',
      ],
      icon: Users,
      isHR: true,
    },
    {
      num: '11',
      title: 'Finance & Accounts',
      category: 'General Ledger',
      desc: 'Complete financial accounting system with general ledger, accounts payable/receivable, bank reconciliation, and GST reports.',
      features: [
        'Double-entry General Ledger',
        'Accounts payable & vendor payouts',
        'Daybook & cashflow statements',
        'GST compliant tax reporting',
      ],
      icon: DollarSign,
      isFinance: true,
    },
    {
      num: '12',
      title: 'Analytics & Reports',
      category: 'Executive BI',
      desc: 'Real-time executive dashboards covering revenue, bed occupancy, average length of stay, and NABH compliance metrics.',
      features: [
        'Real-time revenue & collection BI',
        'Bed occupancy & turnover rate',
        'Departmental performance KPIs',
        'NABH audit compliance reporting',
      ],
      icon: BarChart3,
      isAnalytics: true,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 relative selection:bg-[#C82190]/20 selection:text-[#C82190] font-sans">

      {/* Sticky Top Navbar */}
      <Navbar onOpenContact={() => setContactModalOpen(true)} onNavigate={onNavigate} />

      <main className="pt-20 sm:pt-24 pb-12 sm:pb-20">

        {/* Back Link */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8 pt-2 sm:pt-4">
          <button
            onClick={() => {
              if (onNavigate) {
                onNavigate('/');
              } else {
                window.history.pushState({}, '', '/');
                window.dispatchEvent(new Event('popstate'));
              }
            }}
            className="inline-flex items-center gap-2 font-semibold text-[11px] sm:text-xs text-slate-600 hover:text-[#C82190] transition-colors cursor-pointer bg-white px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full border border-slate-200/90 shadow-sm hover:shadow"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to TinyWorks Home</span>
          </button>
        </div>

        {/* HERO SECTION - PROFESSIONAL ENTERPRISE HEALTHCARE BRANDING */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 pt-2">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">

            {/* Left Column: Headline & CareCloudX Branding */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">

              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-pink-50 border border-pink-200 text-[#C82190] text-[10px] sm:text-xs font-semibold uppercase tracking-wider sm:tracking-widest shadow-sm max-w-full overflow-hidden truncate">
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#C82190] animate-pulse shrink-0" />
                <span className="truncate">CARECLOUDX • ENTERPRISE HOSPITAL ERP</span>
              </div>

              {/* Logo & Headline */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <img
                  src="/images/carecloudx-logo.webp"
                  alt="CareCloudX Logo"
                  className="h-12 sm:h-16 md:h-20 w-auto object-contain shrink-0 drop-shadow-sm self-start sm:self-auto"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "http://tinyworksindia.com/logo/carecloudx/carecloudx-logo@2x.webp";
                  }}
                />
                <div className="border-l-2 border-slate-200 pl-3 sm:pl-4">
                  <h1 className="text-2xl sm:text-4xl md:text-5xl font-normal tracking-[-0.04em] text-slate-900 leading-[1.05] sm:leading-[0.98]">
                    CareCloud<span className="text-[#C82190]">X</span>
                  </h1>
                  <span className="text-[10px] sm:text-xs font-mono font-medium uppercase tracking-wider text-slate-500 block mt-0.5">
                    Hospital Information System
                  </span>
                </div>
              </div>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl md:text-2xl font-normal text-[#C82190] tracking-[-0.03em] leading-snug sm:leading-[1.05]">
                Intelligent Healthcare ERP — Streamlining Clinical, Operational, Financial & Administrative Workflows.
              </p>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl">
                CareCloudX is a next-generation hospital information system engineered for high stability, complete NABH compliance, and seamless multi-departmental coordination across OPD, IPD, Lab, Pharmacy, and Finance.
              </p>

              {/* Key Highlights Tags */}
              <div className="flex flex-wrap gap-2 sm:gap-2.5 pt-1 sm:pt-2">
                <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-800 text-[11px] sm:text-xs font-semibold shadow-sm flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C82190] shrink-0" />
                  12 Integrated ERP Modules
                </span>
                <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-800 text-[11px] sm:text-xs font-semibold shadow-sm flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C82190] shrink-0" />
                  NABH & HIPAA Compliant
                </span>
                <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-800 text-[11px] sm:text-xs font-semibold shadow-sm flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C82190] shrink-0" />
                  24/7 Cloud Architecture
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-3 sm:pt-4 w-full sm:w-auto">
                <button
                  onClick={() => setContactModalOpen(true)}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-[#4F16A9] via-[#C82190] to-[#FF6B2B] hover:opacity-95 text-white font-bold text-xs sm:text-base rounded-full shadow-lg shadow-purple-900/20 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <span>Schedule Live ERP Demo</span>
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0" />
                </button>

                <a
                  href="#modules-list"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-white border-2 border-[#C82190] hover:bg-pink-50 text-[#C82190] font-bold text-xs sm:text-base rounded-full shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  <span>Explore 12 Modules</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                </a>
              </div>

            </div>

            {/* Right Column: Executive Showcase Card */}
            <div className="lg:col-span-5">
              <div className="p-5 sm:p-8 md:p-10 bg-white border border-slate-200/90 rounded-2xl sm:rounded-[32px] shadow-[0_12px_40px_rgba(0,0,0,0.05)] space-y-4 sm:space-y-6 relative overflow-hidden flex flex-col justify-between">

                {/* Top Badge */}
                <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-100 gap-2">
                  <div className="flex items-center gap-2 truncate">
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#C82190] animate-pulse shrink-0" />
                    <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-500 truncate">
                      OFFICIAL PRODUCT SUITE
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-mono font-bold bg-pink-50 text-[#C82190] px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-pink-200 shrink-0">
                    v2.4 Enterprise
                  </span>
                </div>

                {/* Main Logo Display */}
                <div className="my-1 sm:my-2 py-5 sm:py-8 px-4 sm:px-6 bg-slate-50 border border-slate-200/80 rounded-xl sm:rounded-2xl flex flex-col items-center justify-center text-center shadow-inner">
                  <img
                    src="/images/carecloudx-logo.webp"
                    alt="CareCloudX Official Logo"
                    className="w-36 sm:w-48 md:w-60 h-auto object-contain mb-3 sm:mb-4 drop-shadow-md"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "http://tinyworksindia.com/logo/carecloudx/carecloudx-logo@2x.webp";
                    }}
                  />
                  <h3 className="font-heading font-extrabold text-lg sm:text-xl text-slate-900">
                    CareCloudX ERP
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-semibold mt-1">
                    TinyWorks Healthcare Operating System
                  </p>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-1 sm:pt-2 text-center">
                  <div className="p-2 sm:p-3 bg-slate-50 border border-slate-200/80 rounded-xl sm:rounded-2xl">
                    <span className="block font-mono text-base sm:text-xl font-extrabold text-[#C82190]">12</span>
                    <span className="block text-[9px] sm:text-[10px] font-mono uppercase font-bold text-slate-500">Modules</span>
                  </div>
                  <div className="p-2 sm:p-3 bg-slate-50 border border-slate-200/80 rounded-xl sm:rounded-2xl">
                    <span className="block font-mono text-base sm:text-xl font-extrabold text-[#4F16A9]">99.9%</span>
                    <span className="block text-[9px] sm:text-[10px] font-mono uppercase font-bold text-slate-500">Uptime</span>
                  </div>
                  <div className="p-2 sm:p-3 bg-slate-50 border border-slate-200/80 rounded-xl sm:rounded-2xl">
                    <span className="block font-mono text-base sm:text-xl font-extrabold text-[#C82190]">NABH</span>
                    <span className="block text-[9px] sm:text-[10px] font-mono uppercase font-bold text-slate-500">Verified</span>
                  </div>
                </div>

                {/* Bottom Spec Sheet CTA */}
                <button
                  onClick={() => setContactModalOpen(true)}
                  className="w-full mt-3 sm:mt-4 py-3 sm:py-3.5 bg-gradient-to-r from-[#4F16A9] via-[#C82190] to-[#FF6B2B] hover:opacity-95 text-white rounded-xl sm:rounded-2xl font-bold text-[11px] sm:text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md"
                >
                  <span>Request Architecture Spec</span>
                  <ChevronRight className="w-4 h-4 text-white shrink-0" />
                </button>

              </div>
            </div>

          </div>
        </section>

        {/* 4 PILLARS SECTION */}
        <section className="py-12 sm:py-16 bg-slate-50 border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
              <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#C82190] block mb-1 sm:mb-2">
                ARCHITECTURAL FOUNDATION
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
                Why Choose CareCloudX?
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 font-normal">
                Engineered on four core architectural pillars designed for modern medical institutions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {pillars.map((pillar, idx) => {
                const IconC = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-pink-50 text-[#C82190] border border-pink-100 flex items-center justify-center mb-4 sm:mb-5 shadow-sm group-hover:bg-gradient-to-r group-hover:from-[#4F16A9] group-hover:to-[#C82190] group-hover:text-white transition-all duration-300">
                        <IconC className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 group-hover:text-[#C82190] transition-colors">{pillar.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">{pillar.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* OFFICIAL VIDEO SHOWCASE SECTION */}
        <section className="py-12 sm:py-16 bg-gradient-to-b from-white via-pink-50/20 to-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden border border-slate-800">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-950/80 border border-pink-500/30 text-pink-300 text-xs font-mono font-bold uppercase tracking-wider">
                    <Video className="w-3.5 h-3.5 text-[#C82190]" />
                    <span>Official Product Video</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
                    Watch CareCloudX ERP in Action
                  </h2>
                  <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
                    Explore our comprehensive hospital information system video walkthrough directly on your website.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <button
                      onClick={() =>
                        setActiveVideoModal({
                          title: 'CareCloudX Hospital ERP Official Walkthrough',
                          subtitle: 'Complete hospital information system demonstration',
                          youtubeUrl: 'https://youtu.be/R-bVcwDzems?si=w3Z-Slc4LqJnmnDF',
                          youtubeId: 'R-bVcwDzems',
                          badge: 'Official Walkthrough',
                        })
                      }
                      className="px-6 py-3.5 bg-gradient-to-r from-[#4F16A9] via-[#C82190] to-[#FF6B2B] hover:opacity-95 text-white font-bold text-xs sm:text-sm rounded-full shadow-lg flex items-center gap-2 cursor-pointer transition-all hover:scale-[1.02]"
                    >
                      <Play className="w-4 h-4 fill-current" />
                      <span>Play Video on Website</span>
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div
                    onClick={() =>
                      setActiveVideoModal({
                        title: 'CareCloudX Hospital ERP Official Walkthrough',
                        subtitle: 'Complete hospital information system demonstration',
                        youtubeUrl: 'https://youtu.be/R-bVcwDzems?si=w3Z-Slc4LqJnmnDF',
                        youtubeId: 'R-bVcwDzems',
                        badge: 'Official Walkthrough',
                      })
                    }
                    className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-700/80 cursor-pointer group shadow-2xl hover:scale-[1.01] transition-transform"
                  >
                    <YouTubeThumbnail
                      videoUrl="https://youtu.be/R-bVcwDzems?si=w3Z-Slc4LqJnmnDF"
                      alt="CareCloudX ERP Video Walkthrough"
                      className="opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-between p-4 sm:p-6">
                      <div className="flex justify-end">
                        <span className="bg-slate-900/90 backdrop-blur-md text-pink-300 text-xs font-mono font-bold px-3 py-1 rounded-full border border-pink-500/30 flex items-center gap-1.5 shadow">
                          <Maximize2 className="w-3.5 h-3.5 text-[#C82190]" />
                          <span>Click to Play HD</span>
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white font-bold text-sm sm:text-base">CareCloudX System Tour</h4>
                          <p className="text-slate-300 text-xs font-mono">YouTube HD Video</p>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#4F16A9] to-[#C82190] text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl shrink-0">
                          <Play className="w-6 h-6 fill-current ml-0.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 12 INTEGRATED MODULES GRID SECTION */}
        <section id="modules-list" className="py-12 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-14 pb-4 sm:pb-6 border-b border-slate-200 gap-3 sm:gap-4">
              <div>
                <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#C82190] block mb-1">
                  COMPLETE HEALTHCARE SUITE
                </span>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                  12 Integrated ERP Modules
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md font-normal leading-relaxed">
                A complete suite covering outpatient, inpatient, laboratory, pharmacy, billing, surgical, and financial workflows.
              </p>
            </div>

            {/* Grid of 12 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
              {modules.map((m) => {
                const IconC = m.icon;
                return (
                  <div
                    key={m.num}
                    className="p-5 sm:p-6 lg:p-8 bg-slate-50/70 border border-slate-200/90 rounded-2xl sm:rounded-[32px] flex flex-col justify-between shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden"
                  >
                    <div>
                      {/* Top Bar */}
                      <div className="flex items-center justify-between mb-4 sm:mb-6">
                        <span className="font-mono text-2xl sm:text-3xl font-black bg-gradient-to-r from-[#4F16A9] to-[#C82190] bg-clip-text text-transparent">
                          {m.num}
                        </span>
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white border border-slate-200 text-[#C82190] flex items-center justify-center shadow-sm group-hover:bg-gradient-to-r group-hover:from-[#4F16A9] group-hover:to-[#C82190] group-hover:text-white transition-all duration-300">
                          <IconC className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                      </div>

                      {/* Title & Category */}
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-1 group-hover:text-[#C82190] transition-colors">
                        {m.title}
                      </h3>

                      <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#C82190] bg-pink-50 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-pink-200 inline-block mb-3">
                        {m.category}
                      </span>

                      {m.tagline && (
                        <span className="text-xs font-semibold text-slate-700 block mb-2.5 italic">
                          "{m.tagline}"
                        </span>
                      )}

                      {/* Description */}
                      <p className="text-xs text-slate-600 leading-relaxed font-normal mb-5 sm:mb-6">
                        {m.desc}
                      </p>

                      {/* Capabilities checklist */}
                      <div className="space-y-2 sm:space-y-2.5 pt-3 sm:pt-4 border-t border-slate-200 mb-5 sm:mb-6">
                        <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1.5 sm:mb-2">CORE CAPABILITIES</span>
                        {m.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-[11px] sm:text-xs font-medium text-slate-800">
                            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C82190] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                    </div>

                    {/* Footer Button */}
                    <button
                      onClick={() => {
                        if (m.isOPD || m.title.toLowerCase().includes('opd')) {
                          if (onNavigate) {
                            onNavigate('/carecloudx/opd management');
                          } else {
                            window.history.pushState({}, '', '/carecloudx/opd management');
                            window.dispatchEvent(new Event('popstate'));
                          }
                        } else if (m.isIPD || m.title.toLowerCase().includes('ipd')) {
                          if (onNavigate) {
                            onNavigate('/carecloudx/ipd management');
                          } else {
                            window.history.pushState({}, '', '/carecloudx/ipd management');
                            window.dispatchEvent(new Event('popstate'));
                          }
                        } else if (m.isLab || m.title.toLowerCase().includes('laboratory') || m.title.toLowerCase().includes('lis')) {
                          if (onNavigate) {
                            onNavigate('/carecloudx/laboratory');
                          } else {
                            window.history.pushState({}, '', '/carecloudx/laboratory');
                            window.dispatchEvent(new Event('popstate'));
                          }
                        } else if (m.isRadiology || m.title.toLowerCase().includes('radiology') || m.title.toLowerCase().includes('ris')) {
                          if (onNavigate) {
                            onNavigate('/carecloudx/radiology');
                          } else {
                            window.history.pushState({}, '', '/carecloudx/radiology');
                            window.dispatchEvent(new Event('popstate'));
                          }
                        } else if (m.isPharmacy || m.title.toLowerCase().includes('pharmacy')) {
                          if (onNavigate) {
                            onNavigate('/carecloudx/pharmacy');
                          } else {
                            window.history.pushState({}, '', '/carecloudx/pharmacy');
                            window.dispatchEvent(new Event('popstate'));
                          }
                        } else if (m.isBilling || m.title.toLowerCase().includes('billing')) {
                          if (onNavigate) {
                            onNavigate('/carecloudx/billing');
                          } else {
                            window.history.pushState({}, '', '/carecloudx/billing');
                            window.dispatchEvent(new Event('popstate'));
                          }
                        } else if (m.isRegistration || m.title.toLowerCase().includes('registration')) {
                          if (onNavigate) {
                            onNavigate('/carecloudx/registration');
                          } else {
                            window.history.pushState({}, '', '/carecloudx/registration');
                            window.dispatchEvent(new Event('popstate'));
                          }
                        } else if (m.isInventory || m.title.toLowerCase().includes('inventory') || m.title.toLowerCase().includes('stores')) {
                          if (onNavigate) {
                            onNavigate('/carecloudx/inventory');
                          } else {
                            window.history.pushState({}, '', '/carecloudx/inventory');
                            window.dispatchEvent(new Event('popstate'));
                          }
                        } else if (m.isHR || m.title.toLowerCase().includes('hr') || m.title.toLowerCase().includes('payroll')) {
                          if (onNavigate) {
                            onNavigate('/carecloudx/hr');
                          } else {
                            window.history.pushState({}, '', '/carecloudx/hr');
                            window.dispatchEvent(new Event('popstate'));
                          }
                        } else if (m.isOT || m.title.toLowerCase().includes('theatre') || m.title.toLowerCase().includes('operation')) {
                          if (onNavigate) {
                            onNavigate('/carecloudx/operation-theatre');
                          } else {
                            window.history.pushState({}, '', '/carecloudx/operation-theatre');
                            window.dispatchEvent(new Event('popstate'));
                          }
                        } else if (m.isFinance || m.title.toLowerCase().includes('finance') || m.title.toLowerCase().includes('accounts')) {
                          if (onNavigate) {
                            onNavigate('/carecloudx/finance');
                          } else {
                            window.history.pushState({}, '', '/carecloudx/finance');
                            window.dispatchEvent(new Event('popstate'));
                          }
                        } else if (m.isAnalytics || m.title.toLowerCase().includes('analytics') || m.title.toLowerCase().includes('reports')) {
                          if (onNavigate) {
                            onNavigate('/carecloudx/analytics');
                          } else {
                            window.history.pushState({}, '', '/carecloudx/analytics');
                            window.dispatchEvent(new Event('popstate'));
                          }
                        } else {
                          setContactModalOpen(true);
                        }
                      }}
                      className={`w-full py-3 sm:py-3.5 rounded-xl sm:rounded-2xl font-bold text-[11px] sm:text-xs flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md ${
                        m.isOPD || m.isIPD || m.isLab || m.isRadiology || m.isPharmacy || m.isBilling || m.isRegistration || m.isOT || m.isInventory || m.isHR || m.isFinance || m.isAnalytics
                          ? 'bg-gradient-to-r from-[#4F16A9] via-[#C82190] to-[#FF6B2B] hover:opacity-95 text-white'
                          : 'bg-slate-900 hover:bg-slate-800 text-white'
                      }`}
                    >
                      <span>
                        {m.isOPD
                          ? 'Explore Dedicated OPD Page'
                          : m.isIPD
                          ? 'Explore Dedicated IPD Page'
                          : m.isLab
                          ? 'Explore Dedicated Lab LIS Page'
                          : m.isRadiology
                          ? 'Explore Dedicated Radiology Page'
                          : m.isPharmacy
                          ? 'Explore Dedicated Pharmacy Page'
                          : m.isBilling
                          ? 'Explore Dedicated Billing Page'
                          : m.isRegistration
                          ? 'Explore Dedicated Registration Page'
                          : m.isOT
                          ? 'Explore Dedicated OT Page'
                          : m.isInventory
                          ? 'Explore Dedicated Inventory Page'
                          : m.isHR
                          ? 'Explore Dedicated HR & Payroll Page'
                          : m.isFinance
                          ? 'Explore Dedicated Finance Page'
                          : m.isAnalytics
                          ? 'Explore Dedicated Analytics Page'
                          : 'Request Module Demo'}
                      </span>
                      <ChevronRight className="w-4 h-4 shrink-0" />
                    </button>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* BOTTOM CTA BANNER */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12">
          <div className="p-6 sm:p-10 lg:p-16 bg-gradient-to-br from-[#4F16A9] via-[#8B1C9B] to-[#C82190] text-white rounded-2xl sm:rounded-[32px] flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 shadow-2xl relative overflow-hidden border border-pink-400/30">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />

            <div className="text-center md:text-left max-w-2xl space-y-2 sm:space-y-3 relative z-10">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-pink-200 block">
                HOSPITAL ERP DEMO
              </span>
              <h3 className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                Ready to transform your healthcare facility?
              </h3>
              <p className="text-xs sm:text-sm text-pink-50 font-normal leading-relaxed">
                Schedule a personalized walkthrough of CareCloudX with our hospital software specialists.
              </p>
            </div>

            <button
              onClick={() => setContactModalOpen(true)}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-white hover:bg-pink-50 text-[#C82190] font-extrabold text-xs sm:text-base rounded-full shadow-lg hover:scale-105 transition-all shrink-0 flex items-center justify-center gap-2 cursor-pointer relative z-10"
            >
              <span>Schedule ERP Demo</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#C82190] shrink-0" />
            </button>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer onOpenContact={() => setContactModalOpen(true)} onNavigate={onNavigate} />

      {/* Contact Form Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      {/* YouTube Video Lightbox Modal */}
      <YouTubeVideoModal
        video={activeVideoModal}
        onClose={() => setActiveVideoModal(null)}
      />
    </div>
  );
};

export default CareCloudXPage;
