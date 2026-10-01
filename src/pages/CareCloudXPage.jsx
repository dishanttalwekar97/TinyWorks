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
        'Appointment Scheduling — Easy booking & rescheduling with doctor calendars',
        'Doctor Management — Manage doctor calendars & availability slots',
        'Token Management — Smart queue & real-time token tracking',
        'Digital Prescriptions — Paperless e-prescription with templates',
        'OPD Billing Integration — Seamless billing and payment processing',
        'Visit History — Complete patient visit & consultation history',
        'Queue Management — Reduce waiting time & crowd control',
        'EMR Ready Consultations — Structured clinical data & notes',
      ],
      benefits: [
        'Reduce patient waiting time by up to 40%',
        'Improve doctor productivity & consultation speed',
        'Centralized patient information & visit history',
        'Integrated billing & payment processing',
        'Enhanced patient satisfaction & experience',
        'Data-driven operational decision making',
      ],
      workflow: [
        '1. Appointment Booking',
        '2. Token Generation',
        '3. Consultation',
        '4. e-Prescription & Advice',
        '5. Billing & Payment',
        '6. Visit Summary & Follow-up',
      ],
      testimonial: {
        quote: 'CareCloudX OPD has reduced our waiting time by 40% and improved patient satisfaction significantly.',
        author: 'Dr. Rahul Mehta',
        role: 'Medical Director',
      },
      icon: Stethoscope,
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
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
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
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-black hover:text-gray-600 transition-colors cursor-pointer border-b-2 border-black pb-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to TinyWorks Home</span>
          </button>
        </div>

        {/* HERO SECTION - EXECUTIVE BLACK & WHITE WITH CARECLOUDX LOGO */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-4 border-b border-black relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Headline & Official CareCloudX Logo Header */}
            <div className="lg:col-span-7">
              
              {/* Category & Status Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-white text-xs font-mono font-bold uppercase tracking-widest mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>CARECLOUDX</span>
                <span>•</span>
                <span>ENTERPRISE HOSPITAL ERP</span>
              </div>

              {/* Official CareCloudX Branding Header with Logo */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="/images/carecloudx-logo.webp"
                  alt="CareCloudX Logo"
                  className="h-14 sm:h-20 md:h-24 w-auto object-contain shrink-0"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "http://tinyworksindia.com/logo/carecloudx/carecloudx-logo@2x.webp";
                  }}
                />
                <div className="border-l-2 border-black pl-4">
                  <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black leading-tight">
                    CareCloudX
                  </h1>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-600 block">
                    Hospital Information System
                  </span>
                </div>
              </div>

              {/* Subtitle */}
              <p className="text-lg sm:text-2xl font-bold text-black mb-4 tracking-tight leading-snug">
                Intelligent Healthcare ERP — Streamlining Clinical, Operational, Financial & Administrative Workflows.
              </p>

              <p className="text-sm sm:text-base text-gray-700 font-normal leading-relaxed mb-8 max-w-2xl">
                Transforming Healthcare. Empowering Lives. CareCloudX is a next-generation hospital information system engineered for high stability, complete compliance, and seamless multi-departmental coordination across OPD, IPD, Lab, Pharmacy, and Finance.
              </p>

              {/* Key Highlights Pill Tags */}
              <div className="flex flex-wrap gap-2.5 mb-8">
                <span className="px-3 py-1 rounded-full bg-gray-100 border border-black text-black text-xs font-mono font-bold">
                  ✓ 12 Integrated ERP Modules
                </span>
                <span className="px-3 py-1 rounded-full bg-gray-100 border border-black text-black text-xs font-mono font-bold">
                  ✓ NABH & HIPAA Compliant
                </span>
                <span className="px-3 py-1 rounded-full bg-gray-100 border border-black text-black text-xs font-mono font-bold">
                  ✓ 24/7 Cloud Architecture
                </span>
              </div>

              {/* Hero Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setContactModalOpen(true)}
                  className="px-8 py-4 bg-black hover:bg-gray-800 text-white font-bold text-sm sm:text-base rounded-full shadow-xl hover:scale-[1.02] transition-all flex items-center gap-3 cursor-pointer"
                >
                  <span>Schedule Live Demo</span>
                  <Calendar className="w-5 h-5" />
                </button>

                <a
                  href="#modules-list"
                  className="px-8 py-4 bg-white border-2 border-black hover:bg-black hover:text-white text-black font-bold text-sm sm:text-base rounded-full transition-all flex items-center gap-2"
                >
                  <span>Explore 12 Modules</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>

            </div>

            {/* Right Column: Professional Executive CareCloudX Showcase Card */}
            <div className="lg:col-span-5">
              <div className="p-8 sm:p-10 bg-white border-2 border-black rounded-[32px] shadow-2xl relative overflow-hidden flex flex-col justify-between">
                
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-black" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-black">
                      OFFICIAL PRODUCT SUITE
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold bg-black text-white px-2.5 py-0.5 rounded-full">
                    v2.4
                  </span>
                </div>

                {/* Main Logo Display Card */}
                <div className="my-4 py-8 px-6 bg-gray-50 border border-black rounded-2xl flex flex-col items-center justify-center text-center shadow-inner">
                  <img
                    src="/images/carecloudx-logo.webp"
                    alt="CareCloudX Official Logo"
                    className="w-48 sm:w-60 h-auto object-contain mb-4 drop-shadow-md"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "http://tinyworksindia.com/logo/carecloudx/carecloudx-logo@2x.webp";
                    }}
                  />
                  <h3 className="font-heading font-extrabold text-xl text-black">
                    CareCloudX ERP
                  </h3>
                  <p className="text-xs text-gray-600 font-medium">
                    TinyWorks Healthcare Operating System
                  </p>
                </div>

                {/* Metrics Breakdown Grid */}
                <div className="grid grid-cols-3 gap-3 pt-4 text-center border-t border-gray-200 mt-4">
                  <div className="p-2.5 bg-gray-50 border border-black/20 rounded-xl">
                    <span className="block font-mono text-xl font-extrabold text-black">12</span>
                    <span className="block text-[10px] font-mono uppercase font-bold text-gray-600">Modules</span>
                  </div>
                  <div className="p-2.5 bg-gray-50 border border-black/20 rounded-xl">
                    <span className="block font-mono text-xl font-extrabold text-black">99.9%</span>
                    <span className="block text-[10px] font-mono uppercase font-bold text-gray-600">Uptime</span>
                  </div>
                  <div className="p-2.5 bg-gray-50 border border-black/20 rounded-xl">
                    <span className="block font-mono text-xl font-extrabold text-black">NABH</span>
                    <span className="block text-[10px] font-mono uppercase font-bold text-gray-600">Verified</span>
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <button
                  onClick={() => setContactModalOpen(true)}
                  className="w-full mt-6 py-3.5 bg-black hover:bg-gray-800 text-white rounded-2xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <span>Request Full Architecture Spec</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

              </div>
            </div>

          </div>
        </section>

        {/* 4 PILLARS SECTION - MINIMAL BLACK & WHITE */}
        <section className="py-16 bg-gray-50 border-b border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-black tracking-tight mb-2">
                Why Choose CareCloudX?
              </h2>
              <p className="text-sm sm:text-base text-gray-600 font-medium">
                Built on four core architectural pillars designed for modern medical institutions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pillar, idx) => {
                const IconC = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 bg-white border-2 border-black rounded-2xl shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center mb-4">
                        <IconC className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-black mb-2">{pillar.title}</h3>
                      <p className="text-xs text-gray-700 leading-relaxed font-normal">{pillar.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 12 INTEGRATED MODULES SECTION - BLACK & WHITE */}
        <section id="modules-list" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b-2 border-black gap-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-gray-500 block mb-1">
                  ENTERPRISE MODULES
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-black tracking-tight">
                  12 Integrated ERP Modules
                </h2>
              </div>
              <p className="text-sm text-gray-600 max-w-md font-medium">
                A complete suite covering outpatient, inpatient, laboratory, pharmacy, billing, surgical, and financial workflows.
              </p>
            </div>

            {/* Grid of 12 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map((m) => {
                const IconC = m.icon;
                return (
                  <div
                    key={m.num}
                    className="p-8 bg-white border-2 border-black rounded-3xl flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group"
                  >
                    <div>
                      {/* Top Bar */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-mono text-2xl font-extrabold text-black">
                          {m.num}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center">
                          <IconC className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Title & Category */}
                      <h3 className="text-xl font-bold text-black mb-1 group-hover:underline">
                        {m.title}
                      </h3>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-500 block mb-1">
                        {m.category}
                      </span>
                      {m.tagline && (
                        <span className="text-xs font-semibold text-emerald-600 block mb-4">
                          {m.tagline}
                        </span>
                      )}

                      {/* Description */}
                      <p className="text-xs text-gray-700 leading-relaxed font-normal mb-6">
                        {m.desc}
                      </p>

                      {/* Capabilities checklist */}
                      <div className="space-y-2 pt-4 border-t border-gray-200 mb-4">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-500 block mb-2">CORE CAPABILITIES</span>
                        {m.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs font-medium text-black">
                            <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Key Benefits */}
                      {m.benefits && (
                        <div className="pt-4 border-t border-gray-200 mb-4">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-500 block mb-2">KEY BENEFITS</span>
                          <div className="space-y-1.5">
                            {m.benefits.map((b, bIdx) => (
                              <div key={bIdx} className="flex items-center gap-2 text-xs text-gray-800 font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                                <span>{b}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Workflow Sequence */}
                      {m.workflow && (
                        <div className="pt-4 border-t border-gray-200 mb-4">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-500 block mb-2">WORKFLOW SEQUENCE</span>
                          <div className="flex flex-wrap gap-1.5">
                            {m.workflow.map((step, sIdx) => (
                              <span key={sIdx} className="text-[10px] font-semibold bg-gray-100 border border-gray-300 text-gray-900 px-2 py-0.5 rounded">
                                {step}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Client Testimonial */}
                      {m.testimonial && (
                        <div className="pt-4 border-t border-gray-200 mb-6">
                          <div className="p-3 bg-gray-50 border border-gray-300 rounded-xl text-xs">
                            <p className="italic text-gray-700 mb-1">"{m.testimonial.quote}"</p>
                            <span className="block font-bold text-black text-[11px]">— {m.testimonial.author}, {m.testimonial.role}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Footer Button */}
                    <button
                      onClick={() => {
                        if (m.title.toLowerCase().includes('opd')) {
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
                      className="w-full py-3 bg-black text-white hover:bg-gray-800 rounded-xl font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors mt-4"
                    >
                      <span>{m.title.toLowerCase().includes('opd') ? 'Explore Dedicated OPD Page' : 'Request Module Demo'}</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* BOTTOM CTA BANNER - BLACK & WHITE */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="p-10 sm:p-16 bg-black text-white rounded-[32px] flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="text-center md:text-left max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-gray-400 block mb-2">
                HOSPITAL ERP DEMO
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-3">
                Ready to transform your healthcare facility?
              </h3>
              <p className="text-sm text-gray-300 font-normal">
                Schedule a personalized walkthrough of CareCloudX with our hospital software specialists.
              </p>
            </div>

            <button
              onClick={() => setContactModalOpen(true)}
              className="px-8 py-4 bg-white hover:bg-gray-100 text-black font-extrabold text-sm sm:text-base rounded-full shadow-lg hover:scale-105 transition-all shrink-0 flex items-center gap-2 cursor-pointer"
            >
              <span>Schedule ERP Demo</span>
              <ArrowRight className="w-5 h-5 text-black" />
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
