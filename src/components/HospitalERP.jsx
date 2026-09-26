import React, { useRef, useState } from 'react';
import { useGsap } from '../hooks/useGsap';
import { gsap } from '../utils/animations';
import {
  Users,
  BedDouble,
  Pill,
  TestTube,
  FileSpreadsheet,
  Receipt,
  CircleDollarSign,
  UserCheck,
  Package,
} from 'lucide-react';

export const HospitalERP = ({ onOpenContact }) => {
  const sectionRef = useRef(null);
  const dashboardRef = useRef(null);

  const [activeModule, setActiveModule] = useState('opd');

  useGsap(() => {
    if (!dashboardRef.current) return;

    gsap.fromTo(
      dashboardRef.current,
      { scale: 0.94, opacity: 0, y: 40 },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  const modules = [
    { id: 'opd', name: 'OPD Management', icon: Users, badge: 'Outpatient', stat: '340+ Daily Tokens', desc: 'Digital queue management, doctor appointment scheduling, EMR case history, and prescription generation.' },
    { id: 'ipd', name: 'IPD & Bed Tracking', icon: BedDouble, badge: 'Inpatient', stat: '94% Bed Occupancy', desc: 'Real-time bed matrix, admission workflow, nursing notes, discharge summaries, and round tracking.' },
    { id: 'pharmacy', name: 'Pharmacy & Stock', icon: Pill, badge: 'Medication', stat: 'Auto-Batch Alert', desc: 'Barcode medicine sales, expiry date alerts, supplier PO automation, and drug interaction safety checks.' },
    { id: 'laboratory', name: 'Laboratory LIMS', icon: TestTube, badge: 'Diagnostics', stat: '1,200 Sample Tests', desc: 'Sample barcode tracking, automated machine interface, pathologist digital sign-off, and SMS report dispatch.' },
    { id: 'radiology', name: 'Radiology & RIS', icon: FileSpreadsheet, badge: 'Imaging', stat: 'PACS Integrated', desc: 'DICOM imaging viewing, technician study assignment, radiologist reporting templates, and audit logs.' },
    { id: 'billing', name: 'Centralized Billing', icon: Receipt, badge: 'Finance', stat: 'Instant TPA', desc: 'Unified OPD/IPD billing, TPA insurance claim settlement, cashless pre-authorization, and discount controls.' },
    { id: 'finance', name: 'Financial Ledgers', icon: CircleDollarSign, badge: 'Accounting', stat: 'Real-time Audit', desc: 'GST-compliant double-entry accounting, daily collection reconciliation, vendor payouts, and balance sheets.' },
    { id: 'hr', name: 'HR & Payroll', icon: UserCheck, badge: 'Staff', stat: 'Roster Active', desc: 'Biometric attendance integration, duty roster planner, doctor commission distribution, and salary slips.' },
    { id: 'inventory', name: 'Inventory & Stock', icon: Package, badge: 'Supply Chain', stat: 'Min Stock Triggers', desc: 'Department wise stock requisitions, central store indenting, gate pass entry, and vendor evaluation metrics.' },
  ];

  const currentModData = modules.find((m) => m.id === activeModule) || modules[0];

  return (
    <section id="hospital-erp" ref={sectionRef} className="py-24 relative z-20 bg-[#F2F2F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl font-medium text-[#1D1D1F] tracking-tight mb-4">
            A smarter way to manage healthcare operations.
          </h2>
          <p className="text-[#86868B] text-base font-normal">
            Unified clinical workflows, administrative operations, billing, inventory, and diagnostics in a single platform.
          </p>
        </div>

        {/* Main Dashboard Card (#1C1C1E, text #F5F5F7, subtitle #86868B) */}
        <div ref={dashboardRef} className="apple-card-dark p-6 sm:p-10">
          
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#2C2C2E]">
            <span className="text-xs font-mono text-[#86868B]">
              TinyWorks ERP Core v4.8
            </span>
            <span className="text-xs font-mono text-[#86868B]">
              99.9% Uptime
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono text-[#86868B] block mb-2">
                  MODULE VIEW — {currentModData.badge.toUpperCase()}
                </span>
                <h3 className="font-heading text-3xl font-medium text-[#F5F5F7] mb-3">
                  {currentModData.name}
                </h3>
                <p className="text-[#86868B] text-sm leading-relaxed mb-6">
                  {currentModData.desc}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#2C2C2E]">
                <div>
                  <span className="text-[10px] text-[#86868B] block">METRIC</span>
                  <span className="text-sm font-medium text-[#F5F5F7]">{currentModData.stat}</span>
                </div>
                <button
                  onClick={onOpenContact}
                  className="px-5 py-2.5 rounded-full bg-[#F5F5F7] hover:bg-white text-[#1C1C1E] text-xs font-medium transition-all"
                >
                  Schedule ERP Demo →
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#2C2C2E]/60 rounded-2xl p-6 flex flex-col justify-center">
              <span className="text-[11px] font-mono text-[#86868B] mb-4 block">WORKFLOW STATE</span>
              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-[#1C1C1E] text-[#F5F5F7] flex justify-between">
                  <span>OPD Patient Token</span>
                  <span className="text-[#86868B]">Active</span>
                </div>
                <div className="p-3 rounded-xl bg-[#1C1C1E] text-[#F5F5F7] flex justify-between">
                  <span>Doctor EMR Prescription</span>
                  <span className="text-[#86868B]">Dispensed</span>
                </div>
                <div className="p-3 rounded-xl bg-[#1C1C1E] text-[#F5F5F7] flex justify-between">
                  <span>Central Billing</span>
                  <span className="text-[#86868B]">Reconciled</span>
                </div>
              </div>
            </div>
          </div>

          {/* Module Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-3">
            {modules.map((mod) => {
              const isSelected = mod.id === activeModule;
              return (
                <button
                  key={mod.id}
                  onClick={() => setActiveModule(mod.id)}
                  className={`p-3 rounded-xl text-xs text-center transition-all ${
                    isSelected
                      ? 'bg-[#F5F5F7] text-[#1C1C1E] font-medium'
                      : 'bg-[#2C2C2E] text-[#86868B] hover:text-[#F5F5F7]'
                  }`}
                >
                  {mod.name.split(' ')[0]}
                </button>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default HospitalERP;
