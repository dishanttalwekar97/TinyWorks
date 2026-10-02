import React from 'react';
import {
  ArrowUp,
  Mail,
  MapPin,
  Phone
} from 'lucide-react';

export const Footer = ({ onOpenContact, onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e, path) => {
    e.preventDefault();

    if (path.startsWith('#')) {
      const isCareCloud = window.location.pathname.toLowerCase().includes('carecloudx');
      const targetId = path.substring(1);

      if (isCareCloud) {
        if (onNavigate) {
          onNavigate('/');
        } else {
          window.history.pushState({}, '', '/');
          window.dispatchEvent(new Event('popstate'));
        }
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 150);
      } else {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    } else {
      if (onNavigate) {
        onNavigate(path);
      } else {
        window.history.pushState({}, '', path);
        window.dispatchEvent(new Event('popstate'));
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white text-slate-900 border-t border-slate-200/80 pt-16 md:pt-20 font-sans selection:bg-[#C82190]/20 selection:text-[#C82190]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TOP SECTION: BRAND ON LEFT, NAVIGATION COLUMNS ON RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pb-16 border-b border-slate-200/80">

          {/* LEFT BRAND COLUMN (Col-span 5) */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="inline-flex items-center gap-3 group focus:outline-none cursor-pointer"
            >
              <img
                src="/images/tinyworks-logo.webp"
                alt="TinyWorks Logo"
                className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/images/tinyworks-logo.png";
                }}
              />
              <span className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-[-0.04em] leading-none group-hover:text-[#C82190] transition-colors">
                TinyWorks <span className="text-[#C82190] font-light">Infotech</span>
              </span>
            </a>

            <p className="text-sm text-slate-600 leading-relaxed max-w-md font-normal">
              TinyWorks Infotech builds modern software, enterprise applications, CareCloudX healthcare ERP, cloud systems, and intelligent automation for growing businesses worldwide.
            </p>

            <div className="space-y-2.5 text-xs text-slate-600 font-sans pt-1">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C82190] shrink-0" />
                <a href="mailto:info@tinyworksinfotech.com" className="hover:underline font-semibold text-slate-800">
                  info@tinyworksinfotech.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C82190] shrink-0" />
                <a href="tel:+919518746067" className="hover:underline font-semibold text-slate-800">
                  +91 95187 46067
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C82190] shrink-0 mt-0.5" />
                <span className="leading-normal font-medium">
                  L/26, 128 LIG Colony, New Somwari Peth, Tukdoji Square, Nagpur 440024, India
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT NAVIGATION COLUMNS (Col-span 7) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 text-sm">

            {/* Column 1: Product */}
            <div className="space-y-4">
              <h4 className="font-heading font-semibold text-slate-400 text-xs tracking-wider uppercase">
                Product
              </h4>
              <ul className="space-y-3 font-medium text-slate-900 text-sm">
                <li>
                  <a
                    href="/carecloudx"
                    onClick={(e) => handleLinkClick(e, '/carecloudx')}
                    className="hover:text-[#C82190] transition-colors block"
                  >
                    CareCloudX ERP
                  </a>
                </li>
                <li>
                  <a
                    href="/carecloudx/opd management"
                    onClick={(e) => handleLinkClick(e, '/carecloudx/opd management')}
                    className="hover:text-[#C82190] transition-colors block"
                  >
                    OPD Management
                  </a>
                </li>
                <li>
                  <a
                    href="#solutions"
                    onClick={(e) => handleLinkClick(e, '#solutions')}
                    className="hover:text-[#C82190] transition-colors block"
                  >
                    Enterprise Work
                  </a>
                </li>
                <li>
                  <a
                    href="#solutions"
                    onClick={(e) => handleLinkClick(e, '#solutions')}
                    className="hover:text-[#C82190] transition-colors block"
                  >
                    Cloud & AI Systems
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Company */}
            <div className="space-y-4">
              <h4 className="font-heading font-semibold text-slate-400 text-xs tracking-wider uppercase">
                Company
              </h4>
              <ul className="space-y-3 font-medium text-slate-900 text-sm">
                <li>
                  <a
                    href="#why-us"
                    onClick={(e) => handleLinkClick(e, '#why-us')}
                    className="hover:text-[#C82190] transition-colors block"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#technology"
                    onClick={(e) => handleLinkClick(e, '#technology')}
                    className="hover:text-[#C82190] transition-colors block"
                  >
                    Tech Stack
                  </a>
                </li>
                <li>
                  <a
                    href="#process"
                    onClick={(e) => handleLinkClick(e, '#process')}
                    className="hover:text-[#C82190] transition-colors block"
                  >
                    Development Process
                  </a>
                </li>
                <li>
                  <button
                    onClick={onOpenContact}
                    className="hover:text-[#C82190] transition-colors cursor-pointer text-left font-medium block"
                  >
                    Contact us
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Terms & Policies */}
            <div className="space-y-4 col-span-2 sm:col-span-1">
              <h4 className="font-heading font-semibold text-slate-400 text-xs tracking-wider uppercase">
                Terms & Policies
              </h4>
              <ul className="space-y-3 font-medium text-slate-900 text-sm">
                <li>
                  <button
                    onClick={onOpenContact}
                    className="hover:text-[#C82190] transition-colors cursor-pointer text-left block"
                  >
                    Terms of Service
                  </button>
                </li>
                <li>
                  <button
                    onClick={onOpenContact}
                    className="hover:text-[#C82190] transition-colors cursor-pointer text-left block"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={onOpenContact}
                    className="hover:text-[#C82190] transition-colors cursor-pointer text-left block"
                  >
                    Cookie Policy
                  </button>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* MIDDLE ROW: COPYRIGHT ON LEFT, SOCIAL ICONS + BACK TO TOP ON RIGHT */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-slate-600 border-b border-slate-200/80">
          <div>
            © {new Date().getFullYear()} TinyWorks Infotech Pvt. Ltd. All rights reserved.
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://www.instagram.com/tinyworksinfotech/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-slate-700 hover:text-[#C82190] transition-colors p-1"
            >
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/tiny-works-infotech"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-slate-700 hover:text-[#C82190] transition-colors p-1"
            >
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="X (Twitter)"
              className="text-slate-700 hover:text-[#C82190] transition-colors p-1"
            >
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-slate-700 hover:text-[#C82190] transition-colors p-1"
            >
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
              </svg>
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-[#C82190] transition-colors ml-2 cursor-pointer font-sans"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* GIANT SIGNATURE FOOTER BRANDING - FULL WIDTH & EXPANDED SCALE */}
      <div className="pt-6 sm:pt-8 md:pt-10 pb-4 sm:pb-6 text-center select-none overflow-hidden w-full px-2 sm:px-4">
        <h2 className="font-heading font-black text-[13vw] sm:text-[14.5vw] md:text-[15.5vw] lg:text-[16.5vw] leading-[0.85] tracking-[-0.05em] text-slate-900 block w-full whitespace-nowrap">
          TinyWorks
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
