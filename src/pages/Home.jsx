import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Solutions from '../components/Solutions';
import Services from '../components/Services';
import Industries from '../components/Industries';
import WhyTinyWorks from '../components/WhyTinyWorks';
import Technology from '../components/Technology';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';

export const Home = ({ onNavigate }) => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  useEffect(() => {
    document.title = 'TinyWorks Infotech | Software, Healthcare & Enterprise Solutions';
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 relative selection:bg-[#C82190]/20 selection:text-[#C82190]">

      {/* Main Sticky Glass Navigation */}
      <Navbar onOpenContact={() => setContactModalOpen(true)} onNavigate={onNavigate} />

      {/* Page Sections */}
      <main>
        <Hero onOpenContact={() => setContactModalOpen(true)} />
        <Stats />
        <Solutions onNavigate={onNavigate} />
        <Services onOpenContact={() => setContactModalOpen(true)} />
        <Industries />
        <WhyTinyWorks onOpenContact={() => setContactModalOpen(true)} />
        <Technology />
        <CTA onOpenContact={() => setContactModalOpen(true)} />
      </main>

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

export default Home;
