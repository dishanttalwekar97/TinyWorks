import React, { useState } from 'react';
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

export const Home = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-200">

      {/* Main Sticky Glass Navigation */}
      <Navbar onOpenContact={() => setContactModalOpen(true)} />

      {/* Page Sections */}
      <main>
        <Hero onOpenContact={() => setContactModalOpen(true)} />
        <Stats />
        <Solutions />
        <Services onOpenContact={() => setContactModalOpen(true)} />
        <Industries />
        <WhyTinyWorks onOpenContact={() => setContactModalOpen(true)} />
        <Technology />
        <CTA onOpenContact={() => setContactModalOpen(true)} />
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

export default Home;
