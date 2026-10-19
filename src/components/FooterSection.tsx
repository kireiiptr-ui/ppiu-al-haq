import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Globe, Instagram, Youtube, Compass, ArrowRight, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

export default function FooterSection() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [simOrigin, setSimOrigin] = useState('');
  const [simResult, setSimResult] = useState<string | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setIsSubscribed(false);
      setNewsletterEmail('');
    }, 3000);
  };

  const handleSimRoute = (e: React.FormEvent) => {
    e.preventDefault();
    if (!simOrigin.trim()) return;

    // Simulate route calculation
    const minutes = Math.floor(Math.random() * 25) + 10;
    setSimResult(`Rute dari "${simOrigin}" menuju Kantor Pusat Al-Haq di Jl. Aha Nasution No. 125 diperkirakan ${minutes} menit berkendara via Jalan Soekarno-Hatta.`);
  };

  return (
    <footer className="relative bg-[#01071E] text-slate-300 pt-20 pb-8 border-t border-slate-900 overflow-hidden">
      
      {/* Absolute gold decorative pattern overlay */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-rose-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top: Newsletter Subscribe or Quick Ask bar */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0D1021] border border-[#9A7E75]/20 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 relative shadow-xl">
          <div className="absolute top-0 right-0 left-0 h-0.5 bg-gradient-to-r from-rose-gold to-gold-accent" />
          
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-base font-serif font-bold text-white flex items-center justify-center md:justify-start gap-1.5">
              <Compass className="w-4 h-4 text-rose-gold" /> Langganan Buletin Informasi Haji & Umrah
            </h3>
            <p className="text-xs text-slate-400 max-w-md font-sans">Dapatkan kabar reguler, update regulasi visa Saudi, dan tanggal terbang rombongan langsung di email Anda.</p>
          </div>

          <div className="w-full md:w-auto flex-shrink-0 font-sans">
            {isSubscribed ? (
              <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-4 py-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4" />
                <span>Terima kasih! Email Anda telah ditambahkan ke database Al-Haq.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 w-full sm:max-w-md md:w-80">
                <input
                  type="email"
                  required
                  placeholder="Ketik email aktif Anda..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-lg bg-[#1C2738]/30 border border-white/5 text-white placeholder-slate-500 text-xs focus:outline-none"
                />
                <button
                  id="btn-subscribe-newsletter"
                  type="submit"
                  className="px-4 py-2.5 rounded-lg bg-rose-gold hover:bg-white text-navy-ultra font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1 cursor-pointer"
                >
                  Daftar
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Middle: 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          
          {/* Column 1: Corporate Profile */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img 
                src="/src/assets/images/alhaq_logo_1782659417959.jpg" 
                alt="Logo PPIU Al-Haq" 
                className="w-8 h-8 object-contain rounded-full border border-rose-gold/25" 
                referrerPolicy="no-referrer"
              />
              <span className="text-lg font-serif font-bold text-white tracking-wide">PPIU Al-Haq</span>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed text-justify font-sans">
              <strong>PPIU Al-Haq</strong> adalah Penyelenggara Perjalanan Ibadah Umrah (PPIU) resmi berizin Kementerian Agama RI No. XXX. Berpengalaman lebih dari 10 tahun mendampingi jamaah di tanah suci.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="https://instagram.com/alhaqtravel" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-[#0D1021] border border-[#9A7E75]/20 text-rose-gold hover:text-white hover:border-rose-gold transition-all" title="Instagram Al-Haq">
                <Instagram className="w-4 h-4 text-rose-gold" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-[#0D1021] border border-[#9A7E75]/20 text-rose-gold hover:text-white hover:border-rose-gold transition-all" title="YouTube Al-Haq">
                <Youtube className="w-4 h-4 text-rose-gold" />
              </a>
            </div>
          </div>

          {/* Column 2: Digital Services Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-serif font-bold tracking-wide text-white border-b border-[#9A7E75]/10 pb-2">Layanan Digital</h4>
            <ul className="space-y-2 text-xs text-slate-400 font-sans">
              <li>
                <a href="#packages" className="hover:text-rose-gold flex items-center gap-1.5 transition-colors">
                  <ArrowRight className="w-3 h-3 text-rose-gold" /> Paket Keberangkatan Umrah
                </a>
              </li>
              <li>
                <a href="#manasik-schedule" className="hover:text-rose-gold flex items-center gap-1.5 transition-colors">
                  <ArrowRight className="w-3 h-3 text-rose-gold" /> Jadwal Manasik Terjadwal
                </a>
              </li>
              <li>
                <a href="#materials" className="hover:text-rose-gold flex items-center gap-1.5 transition-colors">
                  <ArrowRight className="w-3 h-3 text-rose-gold" /> Repository Modul Belajar
                </a>
              </li>
              <li>
                <a href="#digital-guide" className="hover:text-rose-gold flex items-center gap-1.5 transition-colors">
                  <ArrowRight className="w-3 h-3 text-rose-gold" /> Buku Bimbingan Flipbook
                </a>
              </li>
              <li>
                <a href="#sosialisasi-digital" className="hover:text-rose-gold flex items-center gap-1.5 transition-colors">
                  <ArrowRight className="w-3 h-3 text-rose-gold" /> Galeri Reels & Infografis
                </a>
              </li>
              <li>
                <a href="#survey" className="hover:text-rose-gold flex items-center gap-1.5 transition-colors">
                  <ArrowRight className="w-3 h-3 text-rose-gold" /> Survei Kepuasan Elektronik
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contacts Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-serif font-bold tracking-wide text-white border-b border-[#9A7E75]/10 pb-2">Informasi Kontak</h4>
            <ul className="space-y-3.5 text-xs text-slate-400 font-sans">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-rose-gold flex-shrink-0 mt-0.5" />
                <span>Kantor Pusat: Jl. Aha Nasution No. 125, Bandung, Jawa Barat</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-rose-gold flex-shrink-0" />
                <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">WhatsApp: +62 812-3456-7890</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-rose-gold flex-shrink-0" />
                <a href="mailto:info@ppiualhaq.co.id" className="hover:text-white transition-colors">Email: info@ppiualhaq.co.id</a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-rose-gold flex-shrink-0" />
                <a href="https://www.ppiualhaq.co.id" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Web: www.ppiualhaq.co.id</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Location Map & Simulated Router */}
          <div className="space-y-4 font-sans">
            <h4 className="text-sm font-serif font-bold tracking-wide text-white border-b border-[#9A7E75]/10 pb-2">Peta & Navigasi Kantor</h4>
            
            {/* Visual Location Frame representation */}
            <div className="h-28 rounded-2xl bg-[#0D1021] border border-[#9A7E75]/20 relative overflow-hidden flex flex-col justify-end p-2.5">
              {/* Background representation map grids */}
              <div className="absolute inset-0 bg-slate-900/50 flex items-center justify-center pointer-events-none">
                <div className="w-full h-full opacity-20 bg-[radial-gradient(#9a7e75_1px,transparent_1px)] [background-size:16px_16px]" />
                {/* Pin center indicator */}
                <div className="absolute w-3 h-3 bg-red-500 rounded-full animate-ping" />
                <MapPin className="absolute w-5 h-5 text-red-500 fill-red-500" />
              </div>
              <span className="relative z-10 text-[10px] font-mono font-bold bg-[#01071E]/90 text-slate-300 p-1.5 rounded-lg text-center truncate border border-[#9A7E75]/10">
                Jl. Aha Nasution No. 125, Bandung
              </span>
            </div>

            {/* Interactive Simulated route calculator */}
            <form onSubmit={handleSimRoute} className="space-y-2 text-xs">
              <label className="block text-[10px] text-slate-400">Hitung Jarak ke Al-Haq (Bandung Area):</label>
              <div className="flex gap-1">
                <input
                  type="text"
                  placeholder="Ketik lokasi Anda (cth: Dago)..."
                  value={simOrigin}
                  onChange={(e) => setSimOrigin(e.target.value)}
                  className="flex-1 px-2.5 py-1.5 rounded-lg bg-[#1C2738]/30 border border-white/5 text-white text-[11px] focus:outline-none focus:border-rose-gold"
                />
                <button
                  type="submit"
                  className="px-2 py-1.5 rounded-lg bg-[#01071E] hover:bg-[#1C2738] border border-slate-700 text-[10px] text-rose-gold font-bold uppercase tracking-wider cursor-pointer"
                >
                  Hitung
                </button>
              </div>
              {simResult && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-[10px] text-rose-gold leading-relaxed mt-1"
                >
                  {simResult}
                </motion.p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Line: Legality credit */}
        <div className="border-t border-slate-800/80 pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center text-[11px] text-slate-500 font-mono">
          <p>© 2026 PPIU Al-Haq. Seluruh Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="flex items-center gap-4">
            <span>Izin PPIU No. XXX</span>
            <span>•</span>
            <a href="#home" className="hover:text-slate-300">Kembali ke Atas</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
