import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, BookOpen, MessageSquare, Compass, Check, X, Phone, User, Users, ShieldAlert } from 'lucide-react';

interface HeroSectionProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function HeroSection({ onScrollToSection }: HeroSectionProps) {
  const [showConsultModal, setShowConsultModal] = useState(false);
  const [consultForm, setConsultForm] = useState({
    name: '',
    phone: '',
    packageInterest: 'Umrah Reguler Premium 2026',
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consultForm.name || !consultForm.phone) return;
    
    // Save to localStorage as a mock lead
    const existingLeads = JSON.parse(localStorage.getItem('alhaq_consult_leads') || '[]');
    existingLeads.push({
      ...consultForm,
      id: Date.now(),
      date: new Date().toISOString()
    });
    localStorage.setItem('alhaq_consult_leads', JSON.stringify(existingLeads));
    
    setIsSubmitted(true);
    setTimeout(() => {
      setShowConsultModal(false);
      setIsSubmitted(false);
      setConsultForm({ name: '', phone: '', packageInterest: 'Umrah Reguler Premium 2026', notes: '' });
    }, 2500);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-navy-ultra">
      {/* Background Image with elegant overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/kabah_hero_1782656965177.jpg"
          alt="Ka'bah Masjidil Haram Makkah"
          className="w-full h-full object-cover scale-105 animate-pulse-subtle brightness-75 contrast-125 saturate-[1.1]"
          referrerPolicy="no-referrer"
        />
        {/* Navy dark linear gradient overlay to fade into background, refined to make the image clearer */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-ultra/75 via-navy-ultra/35 to-navy-ultra" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-ultra/70 via-transparent to-navy-ultra/70" />
      </div>

      {/* Decorative Floating Islamic Geometry Elements */}
      <div className="absolute top-1/4 left-10 w-24 h-24 border border-rose-gold/20 rounded-full animate-float opacity-30 pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-36 h-36 border border-gold-accent/10 rounded-full animate-float opacity-20 pointer-events-none" style={{ animationDelay: '2s' }} />

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-blue/80 border border-rose-gold/40 text-rose-gold text-sm font-medium mb-8 backdrop-blur-sm shadow-lg"
        >
          <Compass className="w-4 h-4 text-gold-accent" />
          <span className="tracking-wide uppercase text-[11px] font-semibold">Jamaah Learning Center & Digital Manasik Platform</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white tracking-tight leading-tight max-w-5xl mx-auto mb-6 drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]"
        >
          Melayani Perjalanan Ibadah dengan{' '}
          <span className="text-rose-gold italic font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Amanah, Profesional
          </span>
          , dan Berorientasi pada Kenyamanan Jamaah
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm sm:text-base text-slate-100 font-sans max-w-3xl mx-auto mb-12 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
        >
          Transformasi Digital Layanan Haji dan Umrah untuk Pembelajaran, Informasi, dan Pendampingan Jamaah yang Lebih Baik.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 max-w-3xl mx-auto"
        >
          {/* Main Button: Consultation */}
          <button
            id="btn-hero-consult"
            onClick={() => setShowConsultModal(true)}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-rose-gold text-navy-ultra font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-white transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-navy-ultra" />
            Daftar Konsultasi Umrah
          </button>

          {/* Button 2: Schedule Manasik */}
          <button
            id="btn-hero-schedule"
            onClick={() => onScrollToSection('manasik-schedule')}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-transparent border border-white/20 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-rose-gold" />
            Lihat Jadwal Manasik
          </button>

          {/* Button 3: Ebook Access */}
          <button
            id="btn-hero-ebook"
            onClick={() => onScrollToSection('digital-guide')}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#2B384D]/30 border border-rose-gold/20 hover:border-gold-accent text-rose-gold hover:text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-rose-gold" />
            Akses Buku Bimbingan Digital
          </button>
        </motion.div>

        {/* Quick Stats Banner under hero content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-[#1C2738] border border-[#9A7E75]/20 backdrop-blur-md max-w-5xl mx-auto shadow-xl"
        >
          <div className="text-center p-2 border-r border-white/10 last:border-0 md:last:border-r-0 md:border-r">
            <p className="text-2xl sm:text-3xl font-serif font-bold text-rose-gold">5.500+</p>
            <p className="text-[9px] text-slate-400 mt-1 uppercase tracking-widest font-semibold">Jamaah Berangkat</p>
          </div>
          <div className="text-center p-2 border-none md:border-r border-white/10">
            <p className="text-2xl sm:text-3xl font-serif font-bold text-rose-gold">150+</p>
            <p className="text-[9px] text-slate-400 mt-1 uppercase tracking-widest font-semibold">Kelompok Rombongan</p>
          </div>
          <div className="text-center p-2 border-r border-white/10 last:border-0">
            <p className="text-2xl sm:text-3xl font-serif font-bold text-rose-gold">98%</p>
            <p className="text-[9px] text-slate-400 mt-1 uppercase tracking-widest font-semibold">Tingkat Kepuasan</p>
          </div>
          <div className="text-center p-2">
            <p className="text-2xl sm:text-3xl font-serif font-bold text-rose-gold">10 Tahun</p>
            <p className="text-[9px] text-slate-400 mt-1 uppercase tracking-widest font-semibold">Pengalaman Resmi</p>
          </div>
        </motion.div>
      </div>

      {/* Decorative border bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-rose-gold/40 to-transparent" />

      {/* Modal Konsultasi Umrah (Popup Modal) */}
      <AnimatePresence>
        {showConsultModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowConsultModal(false)}
              className="absolute inset-0 bg-navy-ultra/90 backdrop-blur-sm"
            />
            
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-md bg-navy-dark border border-rose-gold/30 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-rose-gold via-gold-accent to-copper-brown" />
              
              <button
                id="btn-close-modal"
                onClick={() => setShowConsultModal(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-full hover:bg-navy-blue/50 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-6">
                <Compass className="w-10 h-10 text-gold-accent mx-auto mb-2" />
                <h3 className="text-xl font-display font-bold text-white">Konsultasi Umrah PPIU Al-Haq</h3>
                <p className="text-xs text-slate-400 mt-1">Daftarkan diri Anda untuk sesi konsultasi tatap muka atau video call secara gratis.</p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-8 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center mb-4">
                    <Check className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Pendaftaran Berhasil!</h4>
                  <p className="text-xs text-slate-300 mt-2 px-4">
                    Terima kasih. Konsultan bimbingan Al-Haq akan segera menghubungi Anda melalui nomor WhatsApp dalam waktu maksimal 1x24 jam.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-1.5">
                      <User className="w-3 h-3 text-rose-gold" /> Nama Lengkap Sesuai Paspor
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Muhammad Saiful Haq"
                      value={consultForm.name}
                      onChange={(e) => setConsultForm({ ...consultForm, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-navy-blue/50 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-rose-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-1.5">
                      <Phone className="w-3 h-3 text-rose-gold" /> No. WhatsApp Aktif
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Contoh: +62 81234567890"
                      value={consultForm.phone}
                      onChange={(e) => setConsultForm({ ...consultForm, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-navy-blue/50 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-rose-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-1.5">
                      <Users className="w-3 h-3 text-rose-gold" /> Paket yang Diminati
                    </label>
                    <select
                      value={consultForm.packageInterest}
                      onChange={(e) => setConsultForm({ ...consultForm, packageInterest: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-navy-blue/50 border border-slate-700 text-white text-sm focus:outline-none focus:border-rose-gold cursor-pointer"
                    >
                      <option value="Umrah Reguler Premium 2026">Umrah Reguler Premium 2026 (6 Juni Manasik)</option>
                      <option value="Haji Khusus Furoda 2026">Haji Khusus Furoda 2026</option>
                      <option value="Umrah Lailatul Qadar Ramadhan">Umrah Lailatul Qadar Ramadhan</option>
                      <option value="Konsultasi Kustom Kelompok Swasta">Bimbingan Kustom Kelompok Swasta</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Catatan Pertanyaan Khusus (Opsional)
                    </label>
                    <textarea
                      placeholder="Contoh: Ingin sekamar berdua dengan istri, atau memerlukan kursi roda..."
                      rows={3}
                      value={consultForm.notes}
                      onChange={(e) => setConsultForm({ ...consultForm, notes: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-navy-blue/50 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-rose-gold resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      id="btn-submit-consult"
                      type="submit"
                      className="w-full py-3 rounded-lg bg-gradient-to-r from-rose-gold to-gold-accent text-navy-ultra font-semibold text-sm hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      Kirim Formulir Konsultasi
                    </button>
                  </div>

                  <p className="text-[10px] text-slate-400 text-center flex items-center justify-center gap-1 mt-2">
                    <ShieldAlert className="w-3 h-3 text-gold-accent" /> Data dilindungi enkripsi SSL Al-Haq Security.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
