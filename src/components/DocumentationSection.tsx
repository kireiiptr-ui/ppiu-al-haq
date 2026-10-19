import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, Sparkles, Filter, Check, Eye, Quote, Star, MessageSquare, Compass, X,
  Plane, Users, MapPin, Award, Video, Heart, BookOpen, ExternalLink, Link2, Copy, CheckCircle2
} from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';
import { TestimonialItem } from '../types';

interface MemoryBubble {
  id: string;
  title: string;
  category: 'keberangkatan' | 'manasik' | 'pembinaan' | 'kantor' | 'tanah_suci';
  iconName: 'plane' | 'compass' | 'users' | 'mapPin' | 'heart' | 'award' | 'bookOpen' | 'video';
  url: string;
  description: string;
  sizeClass: string;
}

const memoryBubbles: MemoryBubble[] = [
  {
    id: "b-1",
    title: "Ka'bah",
    category: "tanah_suci",
    iconName: "mapPin",
    url: "https://drive.google.com/file/d/1rfknIjni-lWEbmeQqHl9X352Ih6WuKY6/view?usp=drive_link",
    description: "Klip dokumentasi suasana syahdu Ka'bah di Masjidil Haram bersama jamaah Al-Haq.",
    sizeClass: "w-32 h-32 sm:w-36 sm:h-36"
  },
  {
    id: "b-2",
    title: "POV Keberangkatan",
    category: "keberangkatan",
    iconName: "plane",
    url: "https://drive.google.com/file/d/1tC5GrjFBRc5uwPKgdJfYMfiBq4pLuAMV/view?usp=drive_link",
    description: "Rekaman dokumentasi POV (Point Of View) persiapan dan pelepasan resmi jamaah Al-Haq.",
    sizeClass: "w-32 h-32 sm:w-36 sm:h-36"
  },
  {
    id: "b-3",
    title: "Proses Bimbingan Manasik",
    category: "manasik",
    iconName: "compass",
    url: "https://drive.google.com/file/d/1-8Comwfhf_HGZ1LvR5lVHuXYkLkfYePa/view?usp=drive_link",
    description: "Video proses bimbingan manasik praktis dan intensif secara komprehensif bagi para jamaah.",
    sizeClass: "w-32 h-32 sm:w-36 sm:h-36"
  }
];

export default function DocumentationSection() {
  const [activeCategory, setActiveCategory] = useState<string>('semua');
  const [selectedReview, setSelectedReview] = useState<TestimonialItem | null>(null);
  
  // Interactive bubble-link generator states
  const [selectedBubble, setSelectedBubble] = useState<MemoryBubble>(memoryBubbles[0]);
  const [generatedBubble, setGeneratedBubble] = useState<MemoryBubble>(memoryBubbles[0]);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  // Handle active bubble click & link generation
  const handleBubbleClick = (bubble: MemoryBubble) => {
    setSelectedBubble(bubble);
    setIsGenerating(true);
    setCopied(false);
    setTimeout(() => {
      setGeneratedBubble(bubble);
      setIsGenerating(false);
    }, 400);
  };

  const handleCopyLink = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Categories list
  const categories = [
    { id: 'semua', label: 'Semua Galeri' },
    { id: 'tanah_suci', label: 'Baitullah Makkah' },
    { id: 'keberangkatan', label: 'Keberangkatan' },
    { id: 'manasik', label: 'Bimbingan Manasik' }
  ];

  // Filter gallery items
  const filteredBubbles = memoryBubbles.filter((bubble) => {
    if (activeCategory === 'semua') return true;
    return bubble.category === activeCategory;
  });

  const getBubbleIcon = (iconName: string) => {
    switch (iconName) {
      case 'plane': return <Plane className="w-7 h-7 sm:w-8 sm:h-8 text-rose-gold group-hover:scale-110 transition-transform" />;
      case 'compass': return <Compass className="w-7 h-7 sm:w-8 sm:h-8 text-rose-gold group-hover:scale-110 transition-transform" />;
      case 'users': return <Users className="w-7 h-7 sm:w-8 sm:h-8 text-rose-gold group-hover:scale-110 transition-transform" />;
      case 'mapPin': return <MapPin className="w-7 h-7 sm:w-8 sm:h-8 text-rose-gold group-hover:scale-110 transition-transform" />;
      case 'heart': return <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-rose-gold group-hover:scale-110 transition-transform" />;
      case 'award': return <Award className="w-7 h-7 sm:w-8 sm:h-8 text-rose-gold group-hover:scale-110 transition-transform" />;
      case 'bookOpen': return <BookOpen className="w-7 h-7 sm:w-8 sm:h-8 text-rose-gold group-hover:scale-110 transition-transform" />;
      case 'video': return <Video className="w-7 h-7 sm:w-8 sm:h-8 text-rose-gold group-hover:scale-110 transition-transform" />;
      default: return <Compass className="w-7 h-7 sm:w-8 sm:h-8 text-rose-gold group-hover:scale-110 transition-transform" />;
    }
  };

  return (
    <section id="documentation" className="relative py-24 bg-[#01071E] overflow-hidden border-t border-slate-900">
      
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-rose-gold/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1C2738]/50 border border-rose-gold/20 text-rose-gold text-xs font-semibold uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5 text-rose-gold" /> Dokumentasi Kegiatan & Testimoni
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-white tracking-tight">
            Klip <span className="text-rose-gold italic font-normal">Kenangan & Ulasan Jamaah</span>
          </h2>
          <p className="text-slate-400 font-sans mt-3 text-sm">
            Klik bubble kenangan interaktif di bawah untuk memunculkan dan menghasilkan link dokumentasi resmi perjalanan ibadah Al-Haq.
          </p>
        </div>

        {/* 1. INTERACTIVE BUBBLES AREA */}
        <div className="space-y-10 mb-24">
          
          {/* Category Filter buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4.5 py-2 rounded-2xl text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-rose-gold text-navy-ultra font-bold shadow-md'
                    : 'bg-[#0D1021]/60 text-slate-400 border border-[#9A7E75]/20 hover:text-white hover:border-rose-gold/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Interactive layout: left column bubbles cloud, right column generated link details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Bubble Cloud Field (7 columns) */}
            <div className="lg:col-span-7 flex flex-wrap items-center justify-center gap-5 p-6 rounded-3xl bg-[#0D1021]/30 border border-white/5 min-h-[360px] relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-gold/5 via-transparent to-transparent pointer-events-none" />
              
              <AnimatePresence mode="popLayout">
                {filteredBubbles.map((bubble, index) => {
                  const isSelected = selectedBubble.id === bubble.id;
                  return (
                    <motion.div
                      key={bubble.id}
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      onClick={() => handleBubbleClick(bubble)}
                      whileHover={{ scale: 1.1, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      className={`group relative ${bubble.sizeClass} rounded-full flex flex-col items-center justify-center p-3 text-center transition-all duration-300 shadow-xl cursor-pointer overflow-hidden ${
                        isSelected
                          ? 'ring-4 ring-rose-gold ring-offset-4 ring-offset-navy-ultra bg-gradient-to-br from-rose-gold/40 via-rose-gold/25 to-[#0D1021] border-rose-gold scale-105 shadow-xl shadow-rose-gold/30'
                          : 'bg-gradient-to-br from-rose-gold/20 via-rose-gold/10 to-[#0D1021]/80 border border-rose-gold/40 hover:from-rose-gold/35 hover:via-rose-gold/20 hover:border-rose-gold/70 shadow-lg shadow-rose-gold/5 hover:shadow-rose-gold/15'
                      }`}
                    >
                      {/* Floating slow animation wrapper */}
                      <motion.div
                        animate={{ y: [0, -4, 0] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut",
                          delay: index * 0.2
                        }}
                        className="flex flex-col items-center justify-center"
                      >
                        {getBubbleIcon(bubble.iconName)}
                        <span className="text-[10px] sm:text-xs font-bold mt-1.5 font-sans leading-tight text-white group-hover:text-rose-gold transition-colors truncate max-w-[95%]">
                          {bubble.title}
                        </span>
                      </motion.div>

                      {/* Sparkle background dots for active */}
                      {isSelected && (
                        <div className="absolute inset-0 bg-rose-gold/5 animate-pulse pointer-events-none" />
                      )}
                    </motion.div>
                  );
                })}
              </AnimatePresence>

              {filteredBubbles.length === 0 && (
                <p className="text-slate-500 text-xs font-sans">Tidak ada bubble untuk kategori ini.</p>
              )}
            </div>

            {/* Link Generation & Live Details Panel (5 columns) */}
            <div className="lg:col-span-5">
              <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0D1021] to-[#01071E] border border-rose-gold/30 shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-gold to-gold-accent" />
                
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-rose-gold animate-pulse" />
                  <span className="text-[10px] uppercase font-mono font-bold text-rose-gold tracking-widest">
                    Pusat Link Dokumentasi
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  {isGenerating ? (
                    <motion.div
                      key="loader"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="py-16 flex flex-col items-center justify-center text-center space-y-3"
                    >
                      <div className="w-10 h-10 rounded-full border-2 border-rose-gold border-t-transparent animate-spin" />
                      <p className="text-xs text-slate-400 font-mono">Menghasilkan tautan resmi...</p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="details"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-5"
                    >
                      <div>
                        <span className="inline-block text-[9px] uppercase font-mono font-bold text-navy-ultra bg-rose-gold px-2.5 py-0.5 rounded">
                          {generatedBubble.category.replace('_', ' ')}
                        </span>
                        <h3 className="text-lg font-serif font-bold text-white mt-2 leading-snug">
                          {generatedBubble.title}
                        </h3>
                        <p className="text-xs text-slate-400 mt-2 font-sans leading-relaxed">
                          {generatedBubble.description}
                        </p>
                      </div>

                      {/* Generated Address Block */}
                      <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1.5">
                        <span className="text-[9px] font-mono uppercase text-slate-500 block font-bold tracking-wider">Tautan Berhasil Dihasilkan:</span>
                        <div className="flex items-center justify-between gap-2 bg-[#01071E] px-3 py-2 rounded-lg border border-white/10 overflow-hidden">
                          <span className="text-[11px] text-rose-gold font-mono truncate select-all">
                            {generatedBubble.url}
                          </span>
                          <button
                            onClick={() => handleCopyLink(generatedBubble.url)}
                            className="flex-shrink-0 p-1 text-slate-400 hover:text-white transition-colors cursor-pointer hover:bg-white/5 rounded"
                            title="Salin Link"
                          >
                            {copied ? (
                              <Check className="w-4 h-4 text-emerald-400" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Call to Actions */}
                      <div className="space-y-2 pt-2">
                        <a
                          href={generatedBubble.url}
                          target="_blank"
                          rel="noreferrer"
                          className="w-full py-3 px-4 rounded-xl bg-rose-gold hover:bg-white text-navy-ultra font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg"
                        >
                          <ExternalLink className="w-4 h-4" /> Buka Link Dokumentasi
                        </a>
                        <p className="text-[10px] text-slate-500 font-sans text-center">
                          *Link akan mengarah ke video, album, atau siaran interaktif resmi PPIU Al-Haq.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>

        </div>

        {/* 2. PILGRIMS TESTIMONIAL CARDS (AL-HAQ) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-xl font-serif font-light text-white flex items-center justify-center gap-2">
              <Quote className="w-5 h-5 text-rose-gold fill-rose-gold/20" /> Ulasan <span className="text-rose-gold italic font-normal">Jujur Alumni Jamaah</span>
            </h3>
            <p className="text-xs text-slate-400 mt-1 font-sans">Ulasan otentik pelayanan dari alumni jamaah Al-Haq.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS_DATA.map((rev) => (
              <div
                key={rev.id}
                onClick={() => setSelectedReview(rev)}
                className="p-6 rounded-2xl bg-[#0D1021] border border-[#9A7E75]/20 hover:border-rose-gold/40 cursor-pointer flex flex-col justify-between group shadow-md transition-all"
              >
                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 text-rose-gold fill-rose-gold" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic font-sans text-justify">
                    &ldquo;{rev.review}&rdquo;
                  </p>
                </div>

                {/* Profile info bottom */}
                <div className="mt-6 pt-4 border-t border-[#9A7E75]/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Circle Avatar monogram */}
                    <div className="w-10 h-10 rounded-full bg-rose-gold/10 border border-[#9A7E75]/30 flex items-center justify-center text-xs font-bold text-rose-gold">
                      {rev.name.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-100 group-hover:text-rose-gold transition-colors font-sans">{rev.name}</p>
                      <p className="text-[10px] text-slate-400 mt-0.5 font-sans">{rev.age} Tahun • {rev.origin}</p>
                    </div>
                  </div>

                  <span className="text-[9px] uppercase font-mono font-bold text-rose-gold bg-rose-gold/10 border border-rose-gold/20 px-2.5 py-0.5 rounded-lg">
                    {rev.package.split(' ')[0]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* TESTIMONIAL VIDEO INTERVIEW MODAL */}
      <AnimatePresence>
        {selectedReview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedReview(null)}
              className="absolute inset-0 bg-[#01071E]/95 backdrop-blur-sm"
            />

            {/* Video Box container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-md bg-[#0D1021] border border-[#9A7E75]/20 rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-8 font-sans"
            >
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-rose-gold to-gold-accent" />
              
              <button
                id="btn-close-review-modal"
                onClick={() => setSelectedReview(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-full hover:bg-[#1C2738]/50 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-full bg-rose-gold/10 border border-[#9A7E75]/30 flex items-center justify-center text-xl font-bold text-rose-gold mx-auto mb-3">
                  {selectedReview.name.substring(0, 2).toUpperCase()}
                </div>
                <h3 className="text-lg font-serif font-bold text-white">{selectedReview.name}</h3>
                <p className="text-xs text-slate-400 mt-0.5">{selectedReview.age} Tahun • {selectedReview.origin}</p>
                <span className="inline-block mt-2 text-[10px] font-mono font-bold text-rose-gold bg-rose-gold/10 border border-rose-gold/20 px-2.5 py-0.5 rounded-lg">
                  {selectedReview.package}
                </span>
              </div>

              {/* YouTube Simulated video review player */}
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-black relative mb-6 border border-[#9A7E75]/10">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Testimonial Video"
                  className="w-full h-full border-0"
                  allowFullScreen
                />
                <div className="absolute inset-0 bg-black/20 pointer-events-none flex items-center justify-center">
                  <span className="text-[10px] font-mono font-bold bg-black/60 text-rose-gold px-2 py-1 rounded border border-rose-gold/20">
                    AL-HAQ INTERVIEW REVIEWS
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs uppercase font-mono font-bold text-slate-400 tracking-wider">Kesaksian Lengkap:</p>
                <div className="p-4 rounded-xl bg-[#1C2738]/30 border border-white/5 text-xs text-slate-300 leading-relaxed text-justify italic">
                  &ldquo;{selectedReview.review} Seluruh akomodasi dikoordinasikan dengan baik oleh Al-Haq. Kamar hotel bersih, dekat dengan gerbang utama Masjidil Haram dan Masjid Nabawi, dan makanan prasmanan selalu hangat.&rdquo;
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
