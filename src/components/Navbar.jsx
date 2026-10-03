import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';

export const Navbar = ({ onOpenContact, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [careCloudOpen, setCareCloudOpen] = useState(false);
  const [mobileModulesOpen, setMobileModulesOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const dropdownRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setCareCloudOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

  const navigateTo = (path) => {
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.history.pushState({}, '', path);
      window.dispatchEvent(new Event('popstate'));
    }
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const isCareCloud = window.location.pathname.toLowerCase().includes('carecloudx');

    if (href === '#carecloudx' || href === '/carecloudx') {
      navigateTo('/carecloudx');
      setCareCloudOpen(false);
      setMobileMenuOpen(false);
      window.scrollTo(0, 0);
      return;
    }

    const targetId = href.startsWith('#') ? href.substring(1) : '';

    if (isCareCloud) {
      navigateTo('/' + href);
      setMobileMenuOpen(false);
      setTimeout(() => {
        if (targetId) {
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 150);
    } else {
      if (href.startsWith('#')) {
        setMobileMenuOpen(false);
        if (targetId) {
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else {
        navigateTo(href);
        setMobileMenuOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleModuleClick = (e, item) => {
    e.preventDefault();
    setCareCloudOpen(false);
    setMobileMenuOpen(false);

    let target = '/carecloudx';
    const lower = item.toLowerCase();
    if (lower.includes('opd')) {
      target = '/carecloudx/opd management';
    } else if (lower.includes('ipd')) {
      target = '/carecloudx/ipd management';
    } else if (lower.includes('laboratory') || lower.includes('lis')) {
      target = '/carecloudx/laboratory';
    } else if (lower.includes('radiology') || lower.includes('ris')) {
      target = '/carecloudx/radiology';
    } else if (lower.includes('pharmacy')) {
      target = '/carecloudx/pharmacy';
    } else if (lower.includes('billing')) {
      target = '/carecloudx/billing';
    } else if (lower.includes('registration')) {
      target = '/carecloudx/registration';
    } else if (lower.includes('inventory') || lower.includes('stores')) {
      target = '/carecloudx/inventory';
    } else if (lower.includes('hr') || lower.includes('payroll')) {
      target = '/carecloudx/hr';
    } else if (lower.includes('theatre') || lower.includes('operation') || lower.includes('ot')) {
      target = '/carecloudx/operation-theatre';
    } else if (lower.includes('finance') || lower.includes('accounts')) {
      target = '/carecloudx/finance';
    } else if (lower.includes('analytics') || lower.includes('reports')) {
      target = '/carecloudx/analytics';
    }

    navigateTo(target);
    window.scrollTo(0, 0);
  };

  const moduleItems = [
    'OPD Management',
    'IPD Management',
    'Laboratory (LIS)',
    'Radiology (RIS)',
    'Pharmacy',
    'Billing & Insurance',
    'Patient Registration',
    'Operation Theatre',
    'Inventory & Stores',
    'HR & Payroll',
    'Finance & Accounts',
    'Analytics & Reports',
  ];

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'CareCloudX', href: '/carecloudx', id: 'carecloudx', hasDropdown: true },
    { name: 'Solutions', href: '#solutions', id: 'solutions' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Industries', href: '#industries', id: 'industries' },
    { name: 'About', href: '#why-us', id: 'why-us' },
  ];

  const isCareCloudPage = window.location.pathname.toLowerCase().includes('carecloudx');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'py-3 bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-md text-slate-900'
        : 'py-3.5 bg-white/95 backdrop-blur-xl border-b border-slate-200/60 shadow-sm text-slate-900'
        }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between gap-2 w-full">

          {/* Brand Logo & Company Name */}
          <a
            href="/"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-1.5 sm:gap-2.5 group focus:outline-none cursor-pointer shrink-0"
            data-cursor="TinyWorks"
          >
            <img
              src="/images/tinyworks-logo.webp"
              alt="TinyWorks Logo"
              className="h-7 sm:h-9 md:h-10 w-auto object-contain transition-transform group-hover:scale-105"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/images/tinyworks-logo.png";
              }}
            />
            <span className="font-heading font-semibold text-sm sm:text-2xl tracking-tight transition-colors leading-none text-slate-900 group-hover:text-[#C82190]">
              TinyWorks
            </span>
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div key={link.name} className="relative group/dropdown" ref={dropdownRef}>
                    <button
                      onClick={(e) => handleNavClick(e, '/carecloudx')}
                      onMouseEnter={() => setCareCloudOpen(true)}
                      className={`inline-flex items-center gap-1 text-sm font-medium tracking-wide transition-colors py-1 cursor-pointer ${isCareCloudPage
                        ? 'text-[#C82190]'
                        : 'text-slate-800 hover:text-[#C82190]'
                        }`}
                    >
                      <span>CareCloudX</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${careCloudOpen
                          ? 'rotate-180 text-[#C82190]'
                          : 'text-slate-500'
                          }`}
                      />
                    </button>

                    {/* Clean Light Vertical Dropdown List */}
                    {careCloudOpen && (
                      <div
                        onMouseLeave={() => setCareCloudOpen(false)}
                        className="absolute top-full left-0 mt-2 w-64 bg-white/85 backdrop-blur-xl border border-slate-200/80 rounded-2xl py-2.5 shadow-2xl shadow-slate-900/10 z-50 animate-in fade-in duration-150 text-slate-800"
                      >
                        {moduleItems.map((item, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => handleModuleClick(e, item)}
                            className="w-full text-left px-5 py-2 text-xs sm:text-sm font-medium text-slate-700 hover:text-[#C82190] hover:bg-slate-50 transition-colors cursor-pointer block"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = activeSection === link.id && !isCareCloudPage;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-medium tracking-wide transition-colors ${isActive
                    ? 'text-[#C82190]'
                    : 'text-slate-800 hover:text-[#C82190]'
                    }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onOpenContact}
              className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#4F16A9] via-[#C82190] to-[#FF6B2B] hover:opacity-95 text-white text-xs sm:text-sm font-semibold transition-all shadow-lg shadow-purple-900/20 hover:scale-[1.02] cursor-pointer"
              data-cursor="Contact"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button + Get in Touch Side-by-Side */}
          <div className="flex md:hidden items-center gap-1.5 shrink-0 ml-auto">
            <button
              onClick={onOpenContact}
              className="px-2.5 py-1.5 rounded-full bg-gradient-to-r from-[#4F16A9] via-[#C82190] to-[#FF6B2B] text-white text-[11px] font-bold cursor-pointer shadow-md shrink-0 whitespace-nowrap"
            >
              Get in Touch
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-xl border border-slate-200 bg-white text-slate-900 hover:bg-slate-100 shadow-sm cursor-pointer transition-colors shrink-0"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#C82190]" /> : <Menu className="w-5 h-5 text-slate-900" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-xl border-b border-slate-200/80 px-6 py-6 transition-all animate-fade-in shadow-2xl max-h-[85vh] overflow-y-auto text-slate-900">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div key={link.name} className="border-b border-slate-100 pb-2">
                    <div className="w-full py-2.5 text-base font-bold text-[#C82190] flex items-center justify-between cursor-pointer">
                      <button
                        onClick={(e) => handleNavClick(e, '/carecloudx')}
                        className="text-left font-bold text-[#C82190]"
                      >
                        CareCloudX
                      </button>
                      <ChevronDown
                        onClick={() => setMobileModulesOpen(!mobileModulesOpen)}
                        className={`w-4 h-4 transition-transform ${mobileModulesOpen ? 'rotate-180' : ''}`}
                      />
                    </div>

                    {mobileModulesOpen && (
                      <div className="flex flex-col gap-1 pl-3 py-2 bg-slate-50 rounded-xl my-1 border border-slate-100 text-slate-800">
                        {moduleItems.map((item, idx) => (
                          <div
                            key={idx}
                            onClick={(e) => handleModuleClick(e, item)}
                            className="py-1.5 px-2 text-xs font-semibold text-slate-700 hover:text-[#C82190] cursor-pointer"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="py-2.5 text-base font-semibold text-slate-800 hover:text-[#C82190] border-b border-slate-100 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-slate-400 text-xs">→</span>
                </a>
              );
            })}

            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 rounded-full bg-gradient-to-r from-[#4F16A9] via-[#C82190] to-[#FF6B2B] hover:opacity-95 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-purple-900/20 cursor-pointer"
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
