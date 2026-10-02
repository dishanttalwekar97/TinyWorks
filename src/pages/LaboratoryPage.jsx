import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import {
  FlaskConical,
  TestTube,
  Activity,
  QrCode,
  FileCheck,
  Send,
  CreditCard,
  Layers,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Zap,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Calendar,
  Microscope,
  Dna,
  Cpu,
  AlertTriangle,
  FileText,
  Building2,
  Clock,
  Share2,
  BarChart2,
  Database,
  Check,
  Award
} from 'lucide-react';

export const LaboratoryPage = ({ onNavigate }) => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('hematology');
  const [activeStep, setActiveStep] = useState(0);

  const featuresSectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToFeatures = () => {
    if (featuresSectionRef.current) {
      featuresSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const lisFeatures = [
    {
      icon: FileText,
      title: 'Test Order Management',
      desc: 'Create and receive test orders seamlessly from OPD, IPD, Emergency, and walk-in patients with automatic billing synchronization.',
      points: [
        'Direct order fetching from OPD/IPD EMR',
        'Package & profile test bundling',
        'Priority & emergency (STAT) tagging',
      ]
    },
    {
      icon: QrCode,
      title: 'Sample Collection & Barcoding',
      desc: 'Generate unique barcode labels for tube vials, sample containers, and patient specimens to ensure zero mix-ups.',
      points: [
        'Unique sample barcode generation',
        'Phlebotomy collection status logs',
        'Specimen rejection & re-draw rules',
      ]
    },
    {
      icon: TestTube,
      title: 'Barcode Workflows & Accessioning',
      desc: 'Track specimens at every stage from collection desk to centrifuge, rack loading, and machine analyzer tray placement.',
      points: [
        'Chain-of-custody tracking',
        'Rack location & specimen storage',
        'Batch sample accessioning',
      ]
    },
    {
      icon: Cpu,
      title: 'Bi-directional Analyzer Integration',
      desc: 'Connect automatically with automated analyzers (Roche, Sysmex, Mindray, etc.) using HL7 and ASTM protocols for instant result sync.',
      points: [
        'Zero manual result data entry errors',
        'Bi-directional instrument communication',
        'Real-time machine flag capturing',
      ]
    },
    {
      icon: FileCheck,
      title: 'Result Entry & Multi-level Validation',
      desc: 'Structured entry screens with age/gender-specific normal reference range checks, Delta checks, and multi-tier lab sign-offs.',
      points: [
        'Automatic out-of-range color flagging',
        'Senior pathologist digital signature',
        'Delta check with historical patient values',
      ]
    },
    {
      icon: Send,
      title: 'Report Generation & Multi-channel Dispatch',
      desc: 'Generate beautiful, branded PDF lab reports with embedded QR codes for instant digital delivery to patients and doctors.',
      points: [
        'Instant SMS & WhatsApp PDF report links',
        'Patient portal & mobile app integration',
        'Automated doctor inbox dispatch',
      ]
    },
    {
      icon: CreditCard,
      title: 'Integrated Lab Billing & Tariff Engine',
      desc: 'Automatic charge capture upon order entry with support for cash, credit, panel/TPA insurance tariffs, and discount controls.',
      points: [
        'OPD/IPD charge master integration',
        'Credit hospital account billing',
        'TPA package rate reconciliation',
      ]
    },
    {
      icon: BarChart2,
      title: 'Quality Control (QC) & Analytics',
      desc: 'Monitor daily Levy-Jennings QC charts, Westgard rules compliance, Turnaround Time (TAT) analytics, and departmental revenue metrics.',
      points: [
        'Levy-Jennings & Westgard QC rules',
        'TAT bottleneck identification',
        'Pathology department revenue BI',
      ]
    }
  ];

  const workflowSteps = [
    {
      num: '01',
      title: 'Test Order Creation',
      desc: 'Orders generated directly by attending doctors from OPD/IPD or by reception staff for walk-in patients.',
      icon: FileText
    },
    {
      num: '02',
      title: 'Sample Collection & Barcoding',
      desc: 'Phlebotomist collects blood/urine sample, prints unique barcode label, and attaches it directly to specimen tube.',
      icon: QrCode
    },
    {
      num: '03',
      title: 'Accessioning & Storage',
      desc: 'Lab tech scans barcode to accept specimen, verifies sample integrity, and logs rack/centrifuge position.',
      icon: TestTube
    },
    {
      num: '04',
      title: 'Automated Analyzer Testing',
      desc: 'Sample placed on bi-directional analyzer. Instrument reads barcode, executes tests, and transmits values to CareCloudX.',
      icon: Cpu
    },
    {
      num: '05',
      title: 'Result Verification & Sign-off',
      desc: 'Pathologist reviews results, verifies flagged abnormal values against patient history, and digitally signs the report.',
      icon: FileCheck
    },
    {
      num: '06',
      title: 'Report Delivery & SMS/WhatsApp Dispatch',
      desc: 'Final PDF report is generated instantly and delivered via WhatsApp, SMS, EMR, and patient web portal.',
      icon: Send
    }
  ];

  const testCategories = {
    hematology: {
      name: 'Hematology',
      icon: Activity,
      desc: 'CBC, ESR, Hemoglobin, Platelet Count, Peripheral Smear & Blood Grouping.',
      tests: [
        { test: 'Complete Blood Count (CBC)', ref: '4.5 - 11.0 x10^3 / µL', tat: '30 mins', status: 'Automated' },
        { test: 'Hemoglobin (Hb)', ref: '12.0 - 16.0 g/dL', tat: '15 mins', status: 'Automated' },
        { test: 'Erythrocyte Sedimentation Rate (ESR)', ref: '0 - 20 mm/hr', tat: '45 mins', status: 'Semi-Auto' },
        { test: 'Peripheral Blood Smear', ref: 'Normal Morphology', tat: '60 mins', status: 'Manual Review' },
      ]
    },
    biochemistry: {
      name: 'Biochemistry',
      icon: FlaskConical,
      desc: 'Liver Function (LFT), Kidney Function (KFT), Lipid Profile, Blood Sugar (FBS/PPBS), HbA1c & Electrolytes.',
      tests: [
        { test: 'Fasting Blood Glucose (FBS)', ref: '70 - 99 mg/dL', tat: '20 mins', status: 'Automated' },
        { test: 'Glycated Hemoglobin (HbA1c)', ref: '< 5.7 %', tat: '30 mins', status: 'Automated' },
        { test: 'Serum Creatinine (KFT)', ref: '0.7 - 1.3 mg/dL', tat: '25 mins', status: 'Automated' },
        { test: 'Lipid Profile (Total Cholesterol)', ref: '< 200 mg/dL', tat: '35 mins', status: 'Automated' },
      ]
    },
    microbiology: {
      name: 'Microbiology & Serology',
      icon: Microscope,
      desc: 'Blood Culture, Urine Culture, Antibiotic Sensitivity, Widal, Typhidot, Dengue NS1 & HIV/HBsAg/HCV.',
      tests: [
        { test: 'Dengue NS1 Antigen', ref: 'Negative', tat: '45 mins', status: 'Rapid Kit' },
        { test: 'Urine Culture & Sensitivity', ref: 'No Growth', tat: '24-48 hrs', status: 'Incubation' },
        { test: 'Widal Agglutination Test', ref: '< 1:80 Titre', tat: '60 mins', status: 'Manual' },
        { test: 'HBsAg Surface Antigen', ref: 'Non-Reactive', tat: '40 mins', status: 'ELISA' },
      ]
    },
    histopathology: {
      name: 'Histopathology & Cytology',
      icon: Dna,
      desc: 'Biopsy tissue examination, Fine Needle Aspiration Cytology (FNAC), Pap Smear & Frozen Section.',
      tests: [
        { test: 'Biopsy Tissue Processing', ref: 'Benign / Malignant Eval', tat: '3 - 5 days', status: 'Histopath' },
        { test: 'FNAC Cytology Examination', ref: 'Adequate Cellularity', tat: '24 hrs', status: 'Microscopic' },
        { test: 'Cervical Pap Smear', ref: 'Negative for Intraepithelial Lesion', tat: '48 hrs', status: 'Cytology' },
      ]
    }
  };

  const benefits = [
    'Reduced turnaround time (TAT) by over 60%',
    '100% accurate & reliable barcode-matched test results',
    'Complete sample traceability from collection to archiving',
    'Automated multi-level result validations & panic value alerts',
    'Real-time lab performance insights & revenue dashboards',
    'Full NABH, NABL & ISO 15189 compliance audit readiness'
  ];

  const testifiers = [
    {
      quote: "CareCloudX LIS has significantly reduced our Turnaround Time (TAT) by over 50% and eliminated manual transcription errors across our central pathology lab. The bi-directional analyzer interfacing is flawless.",
      author: "Dr. Monika Sinha",
      role: "Head of Pathology & Diagnostics",
      facility: "Apex Super Speciality Hospital"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#C82190]/20 selection:text-[#C82190]">
      {/* Sticky Header Navbar */}
      <Navbar onOpenContact={() => setContactModalOpen(true)} />

      {/* Main Content Area */}
      <main className="pt-20 sm:pt-24 pb-12 sm:pb-20">

        {/* Top Back Navigation Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8 pt-2 sm:pt-4">
          <button
            onClick={() => {
              if (onNavigate) {
                onNavigate('/carecloudx');
              } else {
                window.history.pushState({}, '', '/carecloudx');
                window.dispatchEvent(new Event('popstate'));
              }
            }}
            className="inline-flex items-center gap-2 font-semibold text-[11px] sm:text-xs text-slate-600 hover:text-[#C82190] transition-colors cursor-pointer bg-white px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full border border-slate-200/90 shadow-sm hover:shadow"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to CareCloudX Modules</span>
          </button>
        </div>

        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 pt-2">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">

              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-[#C82190] text-[10px] sm:text-xs font-semibold uppercase tracking-wider shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C82190] animate-pulse shrink-0" />
                <span>CARECLOUDX • LABORATORY INFORMATION SYSTEM (LIS)</span>
              </div>

              {/* Title Header */}
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-3">
                  Laboratory <span className="text-[#C82190]">Information System</span>
                </h1>
                <p className="text-xl sm:text-2xl font-semibold text-[#C82190]">
                  Faster Diagnostics. Smarter Reporting.
                </p>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
                CareCloudX LIS automates your laboratory operations from test ordering to reporting with precision, complete barcode sample traceability, bi-directional machine integration, and instant PDF report dispatch via SMS and WhatsApp.
              </p>

              {/* Feature Highlights Pills */}
              <div className="flex flex-wrap gap-2 sm:gap-2.5 pt-1">
                <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-800 text-[11px] sm:text-xs font-semibold shadow-sm flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C82190] shrink-0" />
                  Barcode Sample Tracking
                </span>
                <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-800 text-[11px] sm:text-xs font-semibold shadow-sm flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C82190] shrink-0" />
                  Bi-directional Analyzer Sync
                </span>
                <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-800 text-[11px] sm:text-xs font-semibold shadow-sm flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C82190] shrink-0" />
                  WhatsApp & SMS Reports
                </span>
              </div>

              {/* Action Call to Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-3 sm:pt-4 w-full sm:w-auto">
                <button
                  onClick={() => setContactModalOpen(true)}
                  className="w-full sm:w-auto px-7 py-3.5 sm:py-4 bg-gradient-to-r from-[#4F16A9] via-[#C82190] to-[#FF6B2B] hover:opacity-95 text-white font-bold text-sm sm:text-base rounded-full shadow-lg shadow-purple-900/20 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <span>Schedule Live LIS Demo</span>
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0" />
                </button>

                <button
                  onClick={scrollToFeatures}
                  className="w-full sm:w-auto px-7 py-3.5 sm:py-4 bg-white border-2 border-[#C82190] hover:bg-pink-50 text-[#C82190] font-bold text-sm sm:text-base rounded-full shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore LIS Features</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                </button>
              </div>

            </div>

            {/* Hero Right Visual Showcase Card */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 bg-white border border-slate-200/90 rounded-3xl shadow-[0_16px_48px_rgba(0,0,0,0.06)] space-y-6 relative overflow-hidden">
                
                {/* Header inside Card */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 rounded-xl bg-pink-50 text-[#C82190]">
                      <FlaskConical className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-base">LIS Control Center</h3>
                      <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">Automated Pathology</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold uppercase rounded-full">
                    Live Interfaced
                  </span>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                    <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block mb-1">Avg Turnaround Time</span>
                    <div className="text-2xl font-black text-[#C82190]">65% <span className="text-xs font-semibold text-emerald-600">Faster</span></div>
                    <span className="text-[10px] text-slate-500 font-medium">From order to dispatch</span>
                  </div>
                  <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                    <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block mb-1">Sample Traceability</span>
                    <div className="text-2xl font-black text-slate-900">100%</div>
                    <span className="text-[10px] text-slate-500 font-medium">Barcode matched tubes</span>
                  </div>
                  <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                    <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block mb-1">Analyzer Interface</span>
                    <div className="text-xl font-bold text-slate-900 flex items-center gap-1.5">
                      <Cpu className="w-4 h-4 text-[#C82190]" />
                      HL7 / ASTM
                    </div>
                    <span className="text-[10px] text-slate-500 font-medium">Bi-directional sync</span>
                  </div>
                  <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                    <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block mb-1">Transcription Errors</span>
                    <div className="text-2xl font-black text-emerald-600">0%</div>
                    <span className="text-[10px] text-slate-500 font-medium">Direct machine sync</span>
                  </div>
                </div>

                {/* Live Sample Tracker Preview Widget */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                    <span className="flex items-center gap-1.5">
                      <QrCode className="w-4 h-4 text-[#C82190]" />
                      Specimen #LAB-9042-X (CBC Profile)
                    </span>
                    <span className="text-[10px] font-mono text-[#C82190]">VERIFIED</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-[#4F16A9] via-[#C82190] to-emerald-500 h-full w-full rounded-full" />
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-500 font-semibold">
                    <span>Order</span>
                    <span>Collected</span>
                    <span>Analyzed</span>
                    <span className="text-emerald-700 font-bold">Report Sent</span>
                  </div>
                </div>

                {/* CTA Card Footer */}
                <button
                  onClick={() => setContactModalOpen(true)}
                  className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Request Custom LIS Configuration</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

              </div>
            </div>

          </div>
        </section>

        {/* WORKFLOW STEP-BY-STEP TRACKER */}
        <section className="bg-white py-14 sm:py-20 border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C82190] bg-pink-50 px-3 py-1 rounded-full border border-pink-200 inline-block mb-3">
                END-TO-END PATHOLOGY LIFECYCLE
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Standardized 6-Step Laboratory Workflow
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-3">
                From electronic test order generation to final WhatsApp & PDF report dispatch — fully tracked with barcode chain-of-custody.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {workflowSteps.map((step, idx) => {
                const StepIcon = step.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-pink-300 hover:shadow-lg transition-all duration-200 group relative flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/90 text-[#C82190] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#C82190] group-hover:text-white transition-all shadow-sm">
                          <StepIcon className="w-6 h-6" />
                        </div>
                        <span className="text-2xl font-black font-mono text-slate-300 group-hover:text-[#C82190] transition-colors">
                          {step.num}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#C82190] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {step.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center text-[11px] font-bold text-[#C82190] gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Step {step.num} Verified</span>
                      <Check className="w-3.5 h-3.5" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CORE FEATURES GRID */}
        <section ref={featuresSectionRef} className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C82190] bg-pink-50 px-3 py-1 rounded-full border border-pink-200 inline-block mb-3">
              COMPLETE LIS FUNCTIONALITY
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              8 Core Modules Built for High-Volume Labs
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3">
              Designed for standalone diagnostic labs, hospital pathology departments, and multi-center diagnostic chains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lisFeatures.map((feat, idx) => {
              const FIcon = feat.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-white border border-slate-200/90 rounded-3xl hover:shadow-xl hover:border-pink-300 transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-pink-50 text-[#C82190] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#C82190] group-hover:text-white transition-all">
                      <FIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-extrabold text-slate-900 mb-2 group-hover:text-[#C82190] transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {feat.desc}
                    </p>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-slate-100">
                    {feat.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-1.5 text-[11px] font-medium text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C82190] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* INTERACTIVE TEST CATEGORIES & PARAMETER PREVIEW */}
        <section className="bg-slate-900 text-white py-16 sm:py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C82190]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-pink-400 bg-pink-950/60 px-3.5 py-1 rounded-full border border-pink-800 inline-block mb-3">
                DIAGNOSTIC TEST DEPARTMENTS
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Pre-loaded Reference Ranges & Profiles
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-2">
                CareCloudX comes pre-configured with standard reference ranges, test templates, and parameters across all diagnostic specialties.
              </p>
            </div>

            {/* Specialty Category Selector Tabs */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10">
              {Object.keys(testCategories).map((key) => {
                const cat = testCategories[key];
                const CIcon = cat.icon;
                const isSelected = activeTab === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`px-5 py-3 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#4F16A9] to-[#C82190] text-white shadow-lg shadow-pink-950/50 scale-105'
                        : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 border border-slate-700'
                    }`}
                  >
                    <CIcon className="w-4 h-4" />
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Specialty Detail Showcase Box */}
            <div className="bg-slate-800/90 border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-700 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span>{testCategories[activeTab].name} Test Panel</span>
                    <span className="text-xs font-mono bg-pink-900/50 text-pink-300 px-2.5 py-0.5 rounded-full border border-pink-700">
                      Standardized Parameters
                    </span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {testCategories[activeTab].desc}
                  </p>
                </div>
                <button
                  onClick={() => setContactModalOpen(true)}
                  className="px-4 py-2 bg-pink-600 hover:bg-pink-500 text-white font-bold text-xs rounded-xl self-start md:self-auto transition-colors cursor-pointer"
                >
                  Import Custom Test Master
                </button>
              </div>

              {/* Test Parameters Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-700 text-slate-400 font-mono uppercase text-[10px]">
                      <th className="py-3 px-4">Test Description</th>
                      <th className="py-3 px-4">Reference Normal Range</th>
                      <th className="py-3 px-4">Standard TAT</th>
                      <th className="py-3 px-4 text-right">Workflow Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/60 font-medium">
                    {testCategories[activeTab].tests.map((item, tIdx) => (
                      <tr key={tIdx} className="hover:bg-slate-700/30 transition-colors">
                        <td className="py-3.5 px-4 font-bold text-white flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" />
                          <span>{item.test}</span>
                        </td>
                        <td className="py-3.5 px-4 font-mono text-pink-200">{item.ref}</td>
                        <td className="py-3.5 px-4 text-slate-300 font-mono">{item.tat}</td>
                        <td className="py-3.5 px-4 text-right">
                          <span className="px-2.5 py-1 bg-emerald-950/80 border border-emerald-700 text-emerald-300 rounded-full font-mono text-[10px] font-bold">
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </section>

        {/* BENEFITS & IMPACT GRID */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden border border-purple-800/40">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-pink-400 bg-pink-950/60 px-3 py-1 rounded-full border border-pink-800 inline-block">
                  KEY CLINICAL & OPERATIONAL BENEFITS
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                  Why Leading Pathology Labs & Hospitals Choose CareCloudX LIS
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Eliminate bottlenecks, guarantee result accuracy, and deliver an elevated digital experience to patients and referring clinicians.
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => setContactModalOpen(true)}
                    className="px-6 py-3.5 bg-gradient-to-r from-[#4F16A9] via-[#C82190] to-[#FF6B2B] hover:opacity-95 text-white font-bold text-xs sm:text-sm rounded-full shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>Request Lab Software Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((b, idx) => (
                  <div key={idx} className="p-4 bg-slate-800/70 border border-slate-700/80 rounded-2xl flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-pink-500/20 text-pink-400 shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-200 leading-snug">
                      {b}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* TESTIMONIAL SECTION */}
        {testifiers.map((t, idx) => (
          <section key={idx} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
            <div className="p-8 sm:p-10 bg-pink-50/70 border border-pink-200 rounded-3xl text-center relative shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#C82190] text-white flex items-center justify-center mx-auto mb-4 text-xl font-serif">
                “
              </div>
              <p className="text-base sm:text-lg font-medium text-slate-800 italic leading-relaxed mb-6">
                "{t.quote}"
              </p>
              <div>
                <h4 className="font-extrabold text-slate-900 text-sm sm:text-base">{t.author}</h4>
                <p className="text-xs font-semibold text-[#C82190]">{t.role} • {t.facility}</p>
              </div>
            </div>
          </section>
        ))}

        {/* BOTTOM CALL TO ACTION BANNER */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-10 lg:p-16 bg-gradient-to-br from-[#4F16A9] via-[#8B1C9B] to-[#C82190] text-white rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 shadow-2xl relative overflow-hidden border border-pink-400/30">
            
            <div className="text-center md:text-left max-w-2xl space-y-2 sm:space-y-3 relative z-10">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-pink-200 block font-bold">
                PATHOLOGY LIS DEMO
              </span>
              <h3 className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                Transform your Laboratory Operations Today
              </h3>
              <p className="text-xs sm:text-sm text-pink-50 font-normal leading-relaxed">
                Connect with our diagnostic software experts for a live walkthrough of CareCloudX LIS tailored to your lab workflow.
              </p>
            </div>

            <button
              onClick={() => setContactModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-pink-50 text-[#C82190] font-extrabold text-xs sm:text-base rounded-full shadow-lg hover:scale-105 transition-all shrink-0 flex items-center justify-center gap-2 cursor-pointer relative z-10"
            >
              <span>Schedule LIS Walkthrough</span>
              <ArrowRight className="w-5 h-5 text-[#C82190] shrink-0" />
            </button>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer onOpenContact={() => setContactModalOpen(true)} />

      {/* Contact / Schedule Demo Modal */}
      {contactModalOpen && (
        <ContactModal
          isOpen={contactModalOpen}
          onClose={() => setContactModalOpen(false)}
        />
      )}
    </div>
  );
};

export default LaboratoryPage;
