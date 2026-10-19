import React, { useState, useEffect } from 'react';
import { Compass, Menu, X, Phone, Globe, MessageCircle, HeartHandshake, ShieldAlert, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Modular component imports
import HeroSection from './components/HeroSection';
import ProfileSection from './components/ProfileSection';
import PackagesSection from './components/PackagesSection';
import ManasikSchedule from './components/ManasikSchedule';
import MaterialsRepository from './components/MaterialsRepository';
import DigitalBookSection from './components/DigitalBookSection';
import DepartureChecklist from './components/DepartureChecklist';
import SurveySection from './components/SurveySection';
import OrganigramSection from './components/OrganigramSection';
import DocumentationSection from './components/DocumentationSection';
import FooterSection from './components/FooterSection';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showFloatingAd, setShowFloatingAd] = useState(false);

  // Monitor scrolling to style navigation bar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Determine active section for nav highlighting
      const sections = ['home', 'profile', 'organigram', 'packages', 'manasik-schedule', 'digital-guide', 'documentation', 'survey'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Lazy show floating contact assist after 3 seconds
    const timer = setTimeout(() => {
      setShowFloatingAd(true);
    }, 3000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: 'home', label: 'Beranda' },
    { id: 'profile', label: 'Profil' },
    { id: 'organigram', label: 'Organigram' },
    { id: 'packages', label: 'Paket Umrah' },
    { id: 'manasik-schedule', label: 'Jadwal Manasik' },
    { id: 'digital-guide', label: 'Buku Digital' },
    { id: 'documentation', label: 'Galeri & Testimoni' },
    { id: 'survey', label: 'Kepuasan' }
  ];

  return (
    <div className="relative min-h-screen text-slate-100 bg-[#01071E] select-none antialiased selection:bg-rose-gold selection:text-navy-ultra">
      
      {/* 1. PREMIUM GLASSMORPHIC NAVIGATION HEADER */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#01071E]/95 backdrop-blur-md py-4 border-b border-[#9A7E75]/25 shadow-lg' 
            : 'bg-transparent py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Brand Brand */}
          <div 
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <img 
              src="/src/assets/images/alhaq_logo_1782659417959.jpg" 
              alt="Logo PPIU Al-Haq" 
              className="w-10 h-10 object-contain rounded-full border border-rose-gold/25 group-hover:scale-105 transition-transform duration-300" 
              referrerPolicy="no-referrer"
            />
            <div>
              <span className="text-lg font-serif font-bold text-white tracking-wide block leading-none">PPIU AL-HAQ</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-[10px] font-bold uppercase tracking-widest transition-colors relative py-1 cursor-pointer ${
                  activeSection === link.id
                    ? 'text-rose-gold font-bold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div 
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-rose-gold" 
                  />
                )}
              </button>
            ))}
          </div>

          {/* Call Center Button */}
          <div className="hidden lg:block">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl bg-[#0D1021] border border-[#9A7E75]/25 hover:border-rose-gold text-rose-gold hover:text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-rose-gold" />
              WhatsApp Center
            </a>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-[#0D1021] border border-white/5 text-slate-300 hover:text-white cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </nav>

      {/* 2. RESPONSIVE MOBILE NAVIGATION DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[73px] z-30 bg-[#0D1021] border-b border-[#9A7E75]/25 shadow-2xl p-6 flex flex-col gap-4 lg:hidden max-h-[80vh] overflow-y-auto"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-left py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeSection === link.id
                    ? 'bg-rose-gold text-navy-ultra font-bold'
                    : 'text-slate-300 hover:bg-[#1C2738]/50 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
            
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noreferrer"
              className="w-full py-3.5 rounded-xl bg-[#0D1021] text-center border border-[#9A7E75]/20 text-rose-gold font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-rose-gold" />
              WhatsApp Center (+62 812-3456-7890)
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. CORE LANDING PAGE SECTIONS */}
      <main className="relative z-10">
        <HeroSection onScrollToSection={scrollToSection} />
        <ProfileSection />
        <OrganigramSection />
        <PackagesSection />
        <ManasikSchedule />
        <MaterialsRepository />
        <DigitalBookSection />
        <DepartureChecklist />
        <DocumentationSection />
        <SurveySection />
      </main>

      {/* 4. PREMIUM FOOTER SECTION */}
      <FooterSection />

      {/* 5. FLOATING WHATSAPP CHAT ASSISTANT WITH BANNER */}
      <AnimatePresence>
        {showFloatingAd && (
          <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 max-w-sm font-sans">
            {/* Pop Greeting Banner */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 10 }}
              className="p-4 rounded-2xl bg-[#0D1021] border border-[#9A7E75]/25 shadow-2xl relative overflow-hidden hidden sm:block"
            >
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-rose-gold to-gold-accent" />
              <button 
                onClick={() => setShowFloatingAd(false)}
                className="absolute top-2.5 right-2.5 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <Compass className="w-5 h-5 text-rose-gold" />
                </div>
                <div className="space-y-1 pr-4">
                  <h4 className="text-xs font-bold text-white font-serif">Konsultan Layanan Al-Haq</h4>
                  <p className="text-[10px] text-slate-300 leading-relaxed font-sans text-justify">
                    Assalamualaikum! Apakah Anda ingin berkonsultasi perihal Manasik Digital atau Pendaftaran Rombongan Haji & Umrah 2026? Chat tim Al-Haq sekarang.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 mt-3 border-t border-[#9A7E75]/10">
                <span className="text-[9px] text-slate-500 font-mono font-bold tracking-wider uppercase">ONLINE RESPONSE FAST</span>
                <a
                  href="https://wa.me/6281234567890?text=Assalamualaikum%20PPIU%20Al-Haq,%20saya%20ingin%20konsultasi%20mengenai%20layanan%20manasik%20digital."
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-rose-gold text-navy-ultra font-bold text-[10px] uppercase tracking-wider flex items-center gap-1 hover:bg-white transition-colors"
                >
                  Hubungi Chat
                </a>
              </div>
            </motion.div>

            {/* Bubble Green button */}
            <motion.a
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              href="https://wa.me/6281234567890?text=Assalamualaikum%20PPIU%20Al-Haq,%20saya%20ingin%20tanya%20program%20ibadah."
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl flex items-center justify-center hover:scale-105 transition-all relative border border-emerald-500"
              title="Konsultasi WhatsApp"
            >
              {/* Notification ping badge */}
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border border-[#01071E] animate-pulse" />
              <MessageCircle className="w-6 h-6 fill-white" />
            </motion.a>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
