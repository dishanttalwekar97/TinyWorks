import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import {
  Stethoscope,
  HeartPulse,
  Activity,
  FileText,
  Pill,
  CreditCard,
  UserPlus,
  Scissors,
  Box,
  Users,
  DollarSign,
  BarChart3,
  ShieldCheck,
  Zap,
  Lock,
  Cloud,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Layers,
  ChevronRight,
  ArrowLeft,
  Sparkles,
} from 'lucide-react';

export const CareCloudXPage = ({ onNavigate }) => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  useEffect(() => {
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
      desc: 'Complete inpatient lifecycle management from bed allocation to nursing care notes, vitals monitoring, and discharge summaries.',
      features: [
        'Real-time bed occupancy dashboard',
        'Nursing station & vitals tracking',
        'Inter-departmental service requests',
        'Automated IPD discharge summary',
      ],
      icon: HeartPulse,
    },
    {
      num: '03',
      title: 'Laboratory (LIS)',
      category: 'Lab Information System',
      desc: 'Automated pathology workflow including sample barcode generation, analyzer machine interfacing, and digital report dispatch.',
      features: [
        'Sample collection & barcode tracking',
        'Bi-directional lab analyzer integration',
        'Normal value reference validation',
        'Report delivery via SMS & WhatsApp',
      ],
      icon: Activity,
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
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 relative selection:bg-[#C82190]/20 selection:text-[#C82190] font-sans">
      
      {/* Sticky Top Navbar */}
      <Navbar onOpenContact={() => setContactModalOpen(true)} />

      <main className="pt-24 pb-20">

        {/* Back Link */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 pt-4">
          <button
            onClick={() => {
              if (onNavigate) {
                onNavigate('/');
              } else {
                window.history.pushState({}, '', '/');
                window.dispatchEvent(new Event('popstate'));
              }
            }}
            className="inline-flex items-center gap-2 font-semibold text-xs text-slate-600 hover:text-[#C82190] transition-colors cursor-pointer bg-white px-3.5 py-2 rounded-full border border-slate-200/90 shadow-sm hover:shadow"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to TinyWorks Home</span>
          </button>
        </div>

        {/* HERO SECTION - PROFESSIONAL ENTERPRISE HEALTHCARE BRANDING */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-2">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Headline & CareCloudX Branding */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-[#C82190] text-xs font-semibold uppercase tracking-widest shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C82190] animate-pulse" />
                <span>CARECLOUDX • ENTERPRISE HOSPITAL ERP</span>
              </div>

              {/* Logo & Headline */}
              <div className="flex items-center gap-4">
                <img
                  src="/images/carecloudx-logo.webp"
                  alt="CareCloudX Logo"
                  className="h-14 sm:h-20 md:h-24 w-auto object-contain shrink-0 drop-shadow-sm"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "http://tinyworksindia.com/logo/carecloudx/carecloudx-logo@2x.webp";
                  }}
                />
                <div className="border-l-2 border-slate-200 pl-4">
                  <h1 className="text-3xl sm:text-5xl font-normal tracking-[-0.04em] text-slate-900 leading-[0.98]">
                    CareCloud<span className="text-[#C82190]">X</span>
                  </h1>
                  <span className="text-xs font-mono font-medium uppercase tracking-wider text-slate-500 block">
                    Hospital Information System
                  </span>
                </div>
              </div>

              {/* Subtitle */}
              <p className="text-xl sm:text-2xl font-normal text-[#C82190] tracking-[-0.03em] leading-[1.05]">
                Intelligent Healthcare ERP — Streamlining Clinical, Operational, Financial & Administrative Workflows.
              </p>

              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
                CareCloudX is a next-generation hospital information system engineered for high stability, complete NABH compliance, and seamless multi-departmental coordination across OPD, IPD, Lab, Pharmacy, and Finance.
              </p>

              {/* Key Highlights Tags */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                <span className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-800 text-xs font-semibold shadow-sm flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C82190]" />
                  12 Integrated ERP Modules
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-800 text-xs font-semibold shadow-sm flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C82190]" />
                  NABH & HIPAA Compliant
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-800 text-xs font-semibold shadow-sm flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C82190]" />
                  24/7 Cloud Architecture
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => setContactModalOpen(true)}
                  className="px-8 py-4 bg-gradient-to-r from-[#4F16A9] via-[#C82190] to-[#FF6B2B] hover:opacity-95 text-white font-bold text-sm sm:text-base rounded-full shadow-lg shadow-purple-900/20 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-3 cursor-pointer"
                >
                  <span>Schedule Live ERP Demo</span>
                  <Calendar className="w-5 h-5 text-white" />
                </button>

                <a
                  href="#modules-list"
                  className="px-8 py-4 bg-white border-2 border-[#C82190] hover:bg-pink-50 text-[#C82190] font-bold text-sm sm:text-base rounded-full shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
                >
                  <span>Explore 12 Modules</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>

            </div>

            {/* Right Column: Executive Showcase Card */}
            <div className="lg:col-span-5">
              <div className="p-8 sm:p-10 bg-white border border-slate-200/90 rounded-[32px] shadow-[0_12px_40px_rgba(0,0,0,0.05)] space-y-6 relative overflow-hidden flex flex-col justify-between">
                
                {/* Top Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C82190] animate-pulse" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                      OFFICIAL PRODUCT SUITE
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold bg-pink-50 text-[#C82190] px-3 py-1 rounded-full border border-pink-200">
                    v2.4 Enterprise
                  </span>
                </div>

                {/* Main Logo Display */}
                <div className="my-2 py-8 px-6 bg-slate-50 border border-slate-200/80 rounded-2xl flex flex-col items-center justify-center text-center shadow-inner">
                  <img
                    src="/images/carecloudx-logo.webp"
                    alt="CareCloudX Official Logo"
                    className="w-48 sm:w-60 h-auto object-contain mb-4 drop-shadow-md"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "http://tinyworksindia.com/logo/carecloudx/carecloudx-logo@2x.webp";
                    }}
                  />
                  <h3 className="font-heading font-extrabold text-xl text-slate-900">
                    CareCloudX ERP
                  </h3>
                  <p className="text-xs text-slate-500 font-semibold mt-1">
                    TinyWorks Healthcare Operating System
                  </p>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-3 pt-2 text-center">
                  <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-2xl">
                    <span className="block font-mono text-xl font-extrabold text-[#C82190]">12</span>
                    <span className="block text-[10px] font-mono uppercase font-bold text-slate-500">Modules</span>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-2xl">
                    <span className="block font-mono text-xl font-extrabold text-[#4F16A9]">99.9%</span>
                    <span className="block text-[10px] font-mono uppercase font-bold text-slate-500">Uptime</span>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-2xl">
                    <span className="block font-mono text-xl font-extrabold text-[#C82190]">NABH</span>
                    <span className="block text-[10px] font-mono uppercase font-bold text-slate-500">Verified</span>
                  </div>
                </div>

                {/* Bottom Spec Sheet CTA */}
                <button
                  onClick={() => setContactModalOpen(true)}
                  className="w-full mt-4 py-3.5 bg-gradient-to-r from-[#4F16A9] via-[#C82190] to-[#FF6B2B] hover:opacity-95 text-white rounded-2xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md"
                >
                  <span>Request Full Architecture Spec</span>
                  <ChevronRight className="w-4 h-4 text-white" />
                </button>

              </div>
            </div>

          </div>
        </section>

        {/* 4 PILLARS SECTION */}
        <section className="py-16 bg-slate-50 border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C82190] block mb-2">
                ARCHITECTURAL FOUNDATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
                Why Choose CareCloudX?
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-normal">
                Engineered on four core architectural pillars designed for modern medical institutions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pillar, idx) => {
                const IconC = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 bg-white border border-slate-200/90 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-pink-50 text-[#C82190] border border-pink-100 flex items-center justify-center mb-5 shadow-sm group-hover:bg-gradient-to-r group-hover:from-[#4F16A9] group-hover:to-[#C82190] group-hover:text-white transition-all duration-300">
                        <IconC className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#C82190] transition-colors">{pillar.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">{pillar.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 12 INTEGRATED MODULES GRID SECTION */}
        <section id="modules-list" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-slate-200 gap-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C82190] block mb-1">
                  COMPLETE HEALTHCARE SUITE
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                  12 Integrated ERP Modules
                </h2>
              </div>
              <p className="text-sm text-slate-600 max-w-md font-normal leading-relaxed">
                A complete suite covering outpatient, inpatient, laboratory, pharmacy, billing, surgical, and financial workflows.
              </p>
            </div>

            {/* Grid of 12 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {modules.map((m) => {
                const IconC = m.icon;
                return (
                  <div
                    key={m.num}
                    className="p-8 bg-slate-50/70 border border-slate-200/90 rounded-[32px] flex flex-col justify-between shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden"
                  >
                    <div>
                      {/* Top Bar */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-mono text-3xl font-black bg-gradient-to-r from-[#4F16A9] to-[#C82190] bg-clip-text text-transparent">
                          {m.num}
                        </span>
                        <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-[#C82190] flex items-center justify-center shadow-sm group-hover:bg-gradient-to-r group-hover:from-[#4F16A9] group-hover:to-[#C82190] group-hover:text-white transition-all duration-300">
                          <IconC className="w-6 h-6" />
                        </div>
                      </div>

                      {/* Title & Category */}
                      <h3 className="text-2xl font-extrabold text-slate-900 mb-1 group-hover:text-[#C82190] transition-colors">
                        {m.title}
                      </h3>
                      
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C82190] bg-pink-50 px-3 py-1 rounded-full border border-pink-200 inline-block mb-3">
                        {m.category}
                      </span>

                      {m.tagline && (
                        <span className="text-xs font-semibold text-slate-700 block mb-3 italic">
                          "{m.tagline}"
                        </span>
                      )}

                      {/* Description */}
                      <p className="text-xs text-slate-600 leading-relaxed font-normal mb-6">
                        {m.desc}
                      </p>

                      {/* Capabilities checklist */}
                      <div className="space-y-2.5 pt-4 border-t border-slate-200 mb-6">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2">CORE CAPABILITIES</span>
                        {m.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2.5 text-xs font-medium text-slate-800">
                            <CheckCircle2 className="w-4 h-4 text-[#C82190] shrink-0 mt-0.5" />
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
                        } else {
                          setContactModalOpen(true);
                        }
                      }}
                      className={`w-full py-3.5 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md ${
                        m.isOPD
                          ? 'bg-gradient-to-r from-[#4F16A9] via-[#C82190] to-[#FF6B2B] hover:opacity-95 text-white'
                          : 'bg-slate-900 hover:bg-slate-800 text-white'
                      }`}
                    >
                      <span>{m.isOPD ? 'Explore Dedicated OPD Page' : 'Request Module Demo'}</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* BOTTOM CTA BANNER */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="p-10 sm:p-16 bg-gradient-to-br from-[#4F16A9] via-[#8B1C9B] to-[#C82190] text-white rounded-[32px] flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden border border-pink-400/30">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />

            <div className="text-center md:text-left max-w-2xl space-y-3 relative z-10">
              <span className="text-xs font-mono uppercase tracking-widest text-pink-200 block">
                HOSPITAL ERP DEMO
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                Ready to transform your healthcare facility?
              </h3>
              <p className="text-sm text-pink-50 font-normal leading-relaxed">
                Schedule a personalized walkthrough of CareCloudX with our hospital software specialists.
              </p>
            </div>

            <button
              onClick={() => setContactModalOpen(true)}
              className="px-8 py-4 bg-white hover:bg-pink-50 text-[#C82190] font-extrabold text-sm sm:text-base rounded-full shadow-lg hover:scale-105 transition-all shrink-0 flex items-center gap-2 cursor-pointer relative z-10"
            >
              <span>Schedule ERP Demo</span>
              <ArrowRight className="w-5 h-5 text-[#C82190]" />
            </button>
          </div>
        </section>

      </main>

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

export default CareCloudXPage;
