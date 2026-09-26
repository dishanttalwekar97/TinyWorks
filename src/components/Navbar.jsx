import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export const Navbar = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['home', 'solutions', 'services', 'industries', 'why-us'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Solutions', href: '#solutions', id: 'solutions' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Industries', href: '#industries', id: 'industries' },
    { name: 'About', href: '#why-us', id: 'why-us' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-4 bg-white/75 backdrop-blur-md border-b border-slate-200/60 shadow-sm shadow-slate-900/5'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo / Wordmark */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none"
            data-cursor="TinyWorks"
          >
            {/* Minimalist Tech Mark */}
            <div className="w-6 h-6 rounded-lg bg-[#071A3D] flex items-center justify-center relative overflow-hidden shrink-0">
              <div className="w-2 h-2 rounded-full bg-[#FF5A1F]" />
            </div>

            <span className="font-heading font-bold text-2xl tracking-tight text-[#071A3D]">
              TinyWorks
            </span>
          </a>

          {/* Center Navigation Links (Enterprise Spacing & Dark Text) */}
          <nav className="hidden md:flex items-center gap-9 lg:gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-colors ${
                  activeSection === link.id
                    ? 'text-[#FF5A1F]'
                    : 'text-[#101828] hover:text-[#FF5A1F]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onOpenContact}
              className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FF5A1F] hover:bg-[#E04B00] text-white text-xs sm:text-sm font-semibold transition-all shadow-md shadow-orange-500/20 hover:scale-[1.02]"
              data-cursor="Contact"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenContact}
              className="sm:hidden px-4 py-2 rounded-full bg-[#FF5A1F] text-white text-xs font-semibold"
            >
              Contact
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#071A3D] hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-xl border-b border-slate-200/80 px-6 py-6 transition-all animate-fade-in shadow-xl">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-base font-medium text-[#101828] hover:text-[#FF5A1F] border-b border-slate-100 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-[#667085] text-xs">→</span>
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 rounded-full bg-[#FF5A1F] text-white font-semibold text-sm flex items-center justify-center gap-2"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
