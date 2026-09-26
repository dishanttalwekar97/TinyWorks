import React from 'react';
import { Layers, ArrowUp, Mail, MapPin } from 'lucide-react';

export const Footer = ({ onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#f1f5f9] border-t border-slate-200 pt-16 pb-12 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200">
          
          {/* Company Brand Column */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-slate-900 p-[1px]">
                <div className="w-full h-full bg-slate-900 rounded-[11px] flex items-center justify-center">
                  <Layers className="w-4 h-4 text-sky-400" />
                </div>
              </div>
              <span className="font-heading font-bold text-xl text-slate-900 tracking-tight">
                TinyWorks <span className="text-sky-600 font-light">Infotech</span>
              </span>
            </a>

            <p className="text-sm text-slate-600 leading-relaxed max-w-sm mb-6">
              TinyWorks Infotech builds modern software, enterprise applications, healthcare solutions, cloud systems, and intelligent automation for growing businesses worldwide.
            </p>

            <div className="space-y-2 text-xs text-slate-600 font-mono">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-600 shrink-0" />
                <span>contact@tinyworks.infotech</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Enterprise Tech Hub, Solutions Division</span>
              </div>
            </div>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#hospital-erp" className="hover:text-sky-600 transition-colors">
                  Hospital ERP Suite
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-sky-600 transition-colors">
                  Business Process Automation
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-sky-600 transition-colors">
                  Custom Enterprise Software
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-sky-600 transition-colors">
                  Cloud Infrastructure Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#services" className="hover:text-sky-600 transition-colors">
                  Product Engineering
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-600 transition-colors">
                  Web &amp; Application Dev
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-600 transition-colors">
                  Mobile Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-600 transition-colors">
                  Cloud DevOps &amp; AI
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Contact & Navigation */}
          <div>
            <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs mb-6">
              <li>
                <a href="#why-us" className="hover:text-sky-600 transition-colors">
                  About TinyWorks
                </a>
              </li>
              <li>
                <a href="#technology" className="hover:text-sky-600 transition-colors">
                  Technology Stack
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-sky-600 transition-colors">
                  Development Process
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="text-sky-600 font-semibold hover:underline"
                >
                  Contact Technical Team →
                </button>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-sky-600 hover:border-slate-300 transition-all shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-sky-600 hover:border-slate-300 transition-all shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-sky-600 hover:border-slate-300 transition-all shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.89-.44 5.1-.28 1.2-.84 2.06-1.68 2.58-.84.52-2.02.78-3.54.78L12 20.46c-2.19 0-3.89-.16-5.1-.44-1.2-.28-2.06-.84-2.58-1.68-.52-.84-.78-2.02-.78-3.54L3.54 12c0-2.19.16-3.89.44-5.1.28-1.2.84-2.06 1.68-2.58.84-.52 2.02-.78 3.54-.78L12 3.54c2.19 0 3.89.16 5.1.44 1.2.28 2.06.84 2.58 1.68.52.84.78 2.02.78 3.54z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright & scroll to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} TinyWorks Infotech. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-700 hover:text-sky-600 transition-colors p-2 rounded-lg bg-white border border-slate-200 shadow-sm"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
