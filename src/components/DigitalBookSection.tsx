import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Search, Bookmark, Sun, Moon, ChevronLeft, ChevronRight, HelpCircle, Check, Sparkles, BookMarked, Eye } from 'lucide-react';
import { EBOOK_PAGES } from '../data';
import { EbookPage } from '../types';

export default function DigitalBookSection() {
  const [showReaderModal, setShowReaderModal] = useState(false);
  const [currentPageIdx, setCurrentPageIdx] = useState(0);
  const [isNightMode, setIsNightMode] = useState(true); // Default to gorgeous dark mode, matching theme
  const [searchTerm, setSearchTerm] = useState('');
  const [bookmarks, setBookmarks] = useState<number[]>([]); // Array of page numbers
  const [searchMatches, setSearchMatches] = useState<{ pageIdx: number, text: string }[]>([]);

  // Load bookmarks from local storage
  useEffect(() => {
    const saved = localStorage.getItem('alhaq_ebook_bookmarks');
    if (saved) {
      setBookmarks(JSON.parse(saved));
    }
  }, []);

  // Save current read progress
  useEffect(() => {
    localStorage.setItem('alhaq_ebook_last_page', String(currentPageIdx));
  }, [currentPageIdx]);

  const handleToggleBookmark = (pageNo: number) => {
    let updated;
    if (bookmarks.includes(pageNo)) {
      updated = bookmarks.filter(b => b !== pageNo);
    } else {
      updated = [...bookmarks, pageNo].sort((a, b) => a - b);
    }
    setBookmarks(updated);
    localStorage.setItem('alhaq_ebook_bookmarks', JSON.stringify(updated));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      setSearchMatches([]);
      return;
    }

    const matches: { pageIdx: number, text: string }[] = [];
    EBOOK_PAGES.forEach((page, pageIdx) => {
      // Search in title
      if (page.chapterTitle.toLowerCase().includes(searchTerm.toLowerCase())) {
        matches.push({ pageIdx, text: `Judul Bab: ${page.chapterTitle}` });
      }
      // Search in paragraphs
      page.paragraphs.forEach((p) => {
        if (p.toLowerCase().includes(searchTerm.toLowerCase())) {
          const previewText = p.length > 60 ? p.substring(0, 60) + '...' : p;
          matches.push({ pageIdx, text: `Hal. ${page.pageNumber} - ${previewText}` });
        }
      });
    });
    setSearchMatches(matches);
  };

  const currentPage = EBOOK_PAGES[currentPageIdx];
  const progressPercent = Math.round(((currentPageIdx + 1) / EBOOK_PAGES.length) * 100);

  return (
    <section id="digital-guide" className="relative py-24 bg-navy-ultra overflow-hidden border-t border-slate-900">
      
      {/* Abstract gold ornament graphic */}
      <div className="absolute -left-20 bottom-10 w-96 h-96 bg-gold-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1C2738]/50 border border-rose-gold/20 text-rose-gold text-xs font-semibold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5 text-rose-gold" /> Layanan Unggulan Digital
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-white tracking-tight">
            Digitalisasi <span className="text-rose-gold italic font-normal">Buku Bimbingan Manasik</span>
          </h2>
          <p className="text-slate-400 font-sans mt-3 text-sm">
            Akses langsung buku bimbingan terbitan resmi Al-Haq secara interaktif lewat web browser di mana saja, kapan saja tanpa perlu unduh file.
          </p>
        </div>

        {/* Bento Grid: Promotion Poster vs Inline Interactive Reader Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT: Promotion Poster (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-center p-6 sm:p-8 rounded-2xl bg-[#0D1021] border border-[#9A7E75]/20 hover:border-rose-gold/40 shadow-2xl relative overflow-hidden transition-all">
            <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-rose-gold via-gold-accent to-copper-brown" />
            
            {/* Book 3D Mockup Container */}
            <div className="flex justify-center mb-8 relative group">
              {/* Outer Glow */}
              <div className="absolute inset-y-0 w-48 bg-gold-accent/10 rounded-r-xl blur-xl pointer-events-none" />
              
              {/* 3D Book Shadow Effect */}
              <div className="relative w-48 sm:w-56 h-64 sm:h-72 rounded-r-xl overflow-hidden shadow-2xl border-l-[6px] border-l-slate-950 transition-transform duration-500 group-hover:scale-103 group-hover:rotate-1">
                <img
                  src="/src/assets/images/guide_cover_1782656983558.jpg"
                  alt="Panduan Praktis Haji & Umrah 2026 Cover"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Book Details */}
            <div className="text-center sm:text-left mb-6">
              <span className="text-[9px] uppercase font-mono font-bold tracking-widest text-rose-gold bg-[#9A7E75]/10 px-2.5 py-1 rounded border border-[#9A7E75]/20">
                Buku Bimbingan Utama
              </span>
              <h3 className="text-xl font-serif font-bold text-white mt-3">
                Panduan Praktis Haji dan Umrah 2026
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed font-sans">
                Buku rujukan wajib seluruh jemaah Al-Haq yang memuat kajian fiqih praktis berdasarkan Al-Qur'an dan As-Sunnah, peta perjalanan, tips kesehatan, dan doa-doa mustajabah.
              </p>
            </div>

            {/* Features list */}
            <div className="grid grid-cols-2 gap-3 mb-6 text-[10px] text-slate-300 border-t border-[#9A7E75]/10 pt-5 uppercase tracking-wide font-semibold">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-rose-gold/10 text-rose-gold flex items-center justify-center flex-shrink-0"><Check className="w-3.5 h-3.5 stroke-[2.5]" /></div>
                <span>Flipbook Interaktif</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-rose-gold/10 text-rose-gold flex items-center justify-center flex-shrink-0"><Check className="w-3.5 h-3.5 stroke-[2.5]" /></div>
                <span>Pencarian Kata Kunci</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-rose-gold/10 text-rose-gold flex items-center justify-center flex-shrink-0"><Check className="w-3.5 h-3.5 stroke-[2.5]" /></div>
                <span>Bookmark Halaman</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-rose-gold/10 text-rose-gold flex items-center justify-center flex-shrink-0"><Check className="w-3.5 h-3.5 stroke-[2.5]" /></div>
                <span>Day/Night Mode</span>
              </div>
            </div>

            <a
              id="btn-open-ebook"
              href="https://drive.google.com/file/d/1O6hOaZ1QvGXZ40xZmOQu591oPZAi0fTC/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl bg-rose-gold text-navy-ultra font-bold text-xs uppercase tracking-wider hover:bg-white shadow-lg transition-colors flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-rose-gold focus:ring-offset-2 focus:ring-offset-[#0D1021]"
            >
              <BookOpen className="w-4 h-4 fill-navy-ultra text-navy-ultra" />
              Mulai Membaca Buku Bimbingan Digital
            </a>
          </div>

          {/* RIGHT: Inline Reader Emulator (7 Columns) */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0D1021] border border-[#9A7E75]/20 shadow-2xl overflow-hidden flex flex-col h-[520px]">
            {/* Emulator Header */}
            <div className="bg-[#1C2738]/50 p-4 border-b border-[#9A7E75]/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="text-[10px] text-slate-400 font-mono ml-2">Al-Haq Web Reader e-Reader v2.0</span>
              </div>
              {/* Day/Night Mode Control */}
              <button
                id="btn-inline-theme-toggle"
                onClick={() => setIsNightMode(!isNightMode)}
                className="p-1.5 rounded-lg bg-navy-dark hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
                title={isNightMode ? 'Ubah ke Mode Siang' : 'Ubah ke Mode Malam'}
              >
                {isNightMode ? <Sun className="w-4 h-4 text-rose-gold" /> : <Moon className="w-4 h-4 text-slate-700" />}
              </button>
            </div>

            {/* Embedded Search & Chapter Select Bar */}
            <div className="p-3 bg-[#1C2738]/20 border-b border-[#9A7E75]/10 flex flex-col sm:flex-row gap-2">
              {/* Chapter Jump Dropdown */}
              <select
                value={currentPageIdx}
                onChange={(e) => {
                  setCurrentPageIdx(Number(e.target.value));
                  setSearchMatches([]);
                }}
                className="px-3 py-1.5 rounded bg-navy-ultra border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-rose-gold cursor-pointer"
              >
                {EBOOK_PAGES.map((page, idx) => (
                  <option key={idx} value={idx}>
                    Hal. {page.pageNumber} - {page.chapterTitle}
                  </option>
                ))}
              </select>

              {/* Keyword Search form */}
              <form onSubmit={handleSearch} className="flex-1 flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
                  <input
                    type="text"
                    placeholder="Cari kata kunci (cth: thawaf, ihram)..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-8 pr-2 py-1.5 rounded bg-navy-ultra border border-slate-800 text-white placeholder-slate-600 text-xs focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="px-3.5 py-1.5 rounded bg-rose-gold text-navy-ultra font-bold text-xs uppercase tracking-wider cursor-pointer"
                >
                  Cari
                </button>
              </form>
            </div>

            {/* Search Results Drawer */}
            {searchMatches.length > 0 && (
              <div className="bg-navy-ultra p-3 border-b border-slate-800/80 max-h-24 overflow-y-auto text-xs space-y-1">
                <p className="text-[10px] text-slate-400 uppercase font-mono font-bold">Hasil pencarian ({searchMatches.length}):</p>
                {searchMatches.map((match, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentPageIdx(match.pageIdx);
                      setSearchMatches([]);
                      setSearchTerm('');
                    }}
                    className="w-full text-left p-1 rounded hover:bg-slate-800 text-rose-gold text-[11px] block truncate transition-colors"
                  >
                    {match.text}
                  </button>
                ))}
              </div>
            )}

            {/* Simulated Paper Book Sheet */}
            <div className={`flex-1 p-6 sm:p-8 overflow-y-auto transition-colors duration-300 relative ${
              isNightMode 
                ? 'bg-[#0E1325] text-slate-200 border-none' 
                : 'bg-[#FDFBF7] text-[#263448] border-none'
            }`}>
              
              {/* Bookmark Flag ribbon */}
              {bookmarks.includes(currentPage.pageNumber) && (
                <div className="absolute top-0 right-6 w-5 h-8 bg-rose-gold flex items-center justify-center shadow-md">
                  <Bookmark className="w-3 h-3 text-navy-ultra fill-navy-ultra" />
                </div>
              )}

              {/* Book Header info */}
              <div className={`flex items-center justify-between border-b pb-3 mb-6 text-[9px] font-mono tracking-wider font-bold ${
                isNightMode ? 'border-slate-800 text-slate-500' : 'border-[#9A7E75]/20 text-[#9A7E75]/80'
              }`}>
                <span>PPIU AL-HAQ MANUAL</span>
                <span>BAB {currentPage.pageNumber}</span>
              </div>

              {/* Chapter Title */}
              <h4 className={`text-base sm:text-lg font-serif font-bold mb-4 ${
                isNightMode ? 'text-white' : 'text-[#263448]'
              }`}>
                {currentPage.chapterTitle}
              </h4>

              {/* Beautiful Arabic quote block if present */}
              {currentPage.arabicQuote && (
                <div className="text-center my-6 p-4 rounded-xl border border-rose-gold/20 bg-rose-gold/5 font-serif">
                  <p className="text-2xl sm:text-3xl text-gold-accent leading-loose text-center mb-2" dir="rtl">
                    {currentPage.arabicQuote}
                  </p>
                  <p className="text-xs sm:text-sm italic text-slate-400 mt-1 leading-relaxed">
                    &ldquo;{currentPage.arabicTranslation}&rdquo;
                  </p>
                </div>
              )}

              {/* Paragraphs body */}
              <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-justify font-sans">
                {currentPage.paragraphs.map((p, pIdx) => {
                  return (
                    <p key={pIdx} className={isNightMode ? 'text-slate-300' : 'text-slate-700'}>
                      {p}
                    </p>
                  );
                })}
              </div>

              {/* Reader Page Footer */}
              <div className="mt-8 text-center text-xs text-slate-500 font-mono">
                — Halaman {currentPage.pageNumber} dari {EBOOK_PAGES.length} —
              </div>
            </div>

            {/* Reader Controls Footer (Bookmark, Page back/next, progress) */}
            <div className="bg-navy-blue/50 p-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              
              {/* Bookmark Toggle */}
              <button
                id="btn-inline-bookmark"
                onClick={() => handleToggleBookmark(currentPage.pageNumber)}
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-gold-accent transition-colors cursor-pointer"
              >
                {bookmarks.includes(currentPage.pageNumber) ? (
                  <>
                    <BookMarked className="w-4 h-4 text-gold-accent fill-gold-accent" />
                    <span className="font-bold text-gold-accent">Tersimpan</span>
                  </>
                ) : (
                  <>
                    <Bookmark className="w-4 h-4 text-slate-400" />
                    <span>Bookmark Halaman</span>
                  </>
                )}
              </button>

              {/* Page Nav controls */}
              <div className="flex items-center gap-4">
                <button
                  id="btn-inline-prev-page"
                  disabled={currentPageIdx === 0}
                  onClick={() => setCurrentPageIdx(currentPageIdx - 1)}
                  className="p-1.5 rounded bg-navy-ultra border border-slate-800 text-slate-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono font-bold text-slate-300">
                  {currentPageIdx + 1} / {EBOOK_PAGES.length}
                </span>
                <button
                  id="btn-inline-next-page"
                  disabled={currentPageIdx === EBOOK_PAGES.length - 1}
                  onClick={() => setCurrentPageIdx(currentPageIdx + 1)}
                  className="p-1.5 rounded bg-navy-ultra border border-slate-800 text-slate-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Progress bar info */}
              <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
                <span>Progress:</span>
                <div className="w-16 bg-navy-ultra h-1.5 rounded-full overflow-hidden">
                  <div className="bg-rose-gold h-full" style={{ width: `${progressPercent}%` }} />
                </div>
                <span className="font-bold text-rose-gold">{progressPercent}%</span>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* FULL READER OVERLAY MODAL */}
      <AnimatePresence>
        {showReaderModal && (
          <div className="fixed inset-0 z-50 flex flex-col bg-navy-ultra">
            {/* Fullscreen Header */}
            <div className="bg-navy-dark p-4 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-gold-accent" />
                <div>
                  <h3 className="text-sm font-display font-bold text-white">Panduan Praktis Haji & Umrah 2026</h3>
                  <p className="text-[10px] text-slate-400">PPIU Al-Haq Digital Library Portal</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {/* Mode Selector */}
                <button
                  id="btn-modal-theme-toggle"
                  onClick={() => setIsNightMode(!isNightMode)}
                  className="p-2 rounded bg-navy-blue border border-slate-800 text-slate-300 hover:text-white cursor-pointer"
                >
                  {isNightMode ? <Sun className="w-4 h-4 text-gold-accent" /> : <Moon className="w-4 h-4" />}
                </button>

                {/* Close fullscreen */}
                <button
                  id="btn-close-ebook-modal"
                  onClick={() => setShowReaderModal(false)}
                  className="px-4 py-2 rounded-lg bg-rose-gold hover:brightness-110 text-navy-ultra font-bold text-xs cursor-pointer"
                >
                  Keluar Membaca
                </button>
              </div>
            </div>

            {/* Fullscreen Chapter Nav Drawer and Book Page */}
            <div className="flex-1 flex overflow-hidden">
              {/* Left sidebar: Chapters list & Bookmarks */}
              <div className="hidden md:block w-72 bg-navy-dark border-r border-slate-800 overflow-y-auto p-4 space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-rose-gold mb-3">Daftar Isi Buku</h4>
                  <div className="space-y-1">
                    {EBOOK_PAGES.map((page, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentPageIdx(idx)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-xs leading-relaxed transition-all block ${
                          currentPageIdx === idx
                            ? 'bg-rose-gold/10 text-rose-gold font-bold border border-rose-gold/20'
                            : 'text-slate-400 hover:bg-navy-blue hover:text-slate-200'
                        }`}
                      >
                        Hal. {page.pageNumber} — {page.chapterTitle}
                      </button>
                    ))}
                  </div>
                </div>

                {bookmarks.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-rose-gold mb-3 flex items-center gap-1.5">
                      <BookMarked className="w-3.5 h-3.5 text-gold-accent" /> Bookmark Anda
                    </h4>
                    <div className="space-y-1">
                      {bookmarks.map((bNo) => {
                        const pageIdx = EBOOK_PAGES.findIndex(p => p.pageNumber === bNo);
                        return (
                          <button
                            key={bNo}
                            onClick={() => setCurrentPageIdx(pageIdx)}
                            className="w-full text-left px-3 py-1.5 rounded-lg text-xs text-slate-400 hover:bg-navy-blue hover:text-slate-200 block truncate"
                          >
                            Halaman {bNo} — {EBOOK_PAGES[pageIdx]?.chapterTitle}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Main content view */}
              <div className={`flex-1 flex flex-col overflow-y-auto ${
                isNightMode ? 'bg-[#090D1A]' : 'bg-slate-50'
              }`}>
                <div className="flex-1 max-w-3xl mx-auto w-full p-6 sm:p-12 relative">
                  
                  {/* Paper Book container */}
                  <div className={`p-8 sm:p-12 rounded-2xl shadow-xl min-h-[500px] border transition-colors duration-300 relative ${
                    isNightMode 
                      ? 'bg-[#0E1325] text-slate-200 border-slate-900' 
                      : 'bg-white text-navy-ultra border-slate-200'
                  }`}>
                    {/* Bookmark decoration */}
                    {bookmarks.includes(currentPage.pageNumber) && (
                      <div className="absolute top-0 right-8 w-6 h-10 bg-gold-accent flex items-center justify-center shadow-lg">
                        <Bookmark className="w-4 h-4 text-navy-ultra fill-navy-ultra" />
                      </div>
                    )}

                    <div className={`flex items-center justify-between border-b pb-4 mb-8 text-[11px] font-mono tracking-wider font-bold ${
                      isNightMode ? 'border-slate-800 text-slate-500' : 'border-slate-200 text-slate-400'
                    }`}>
                      <span>PPIU AL-HAQ LECTURE PORTAL</span>
                      <span>HALAMAN {currentPage.pageNumber}</span>
                    </div>

                    <h2 className="text-2xl font-display font-bold mb-6">{currentPage.chapterTitle}</h2>

                    {currentPage.arabicQuote && (
                      <div className="text-center my-8 p-6 rounded-2xl border border-rose-gold/20 bg-rose-gold/5 font-serif max-w-2xl mx-auto">
                        <p className="text-3xl sm:text-4xl text-gold-accent leading-loose mb-3 text-center" dir="rtl">
                          {currentPage.arabicQuote}
                        </p>
                        <p className="text-sm italic text-slate-400 leading-relaxed">
                          &ldquo;{currentPage.arabicTranslation}&rdquo;
                        </p>
                      </div>
                    )}

                    <div className="space-y-6 text-sm sm:text-base leading-relaxed text-justify font-sans">
                      {currentPage.paragraphs.map((p, pIdx) => (
                        <p key={pIdx} className={isNightMode ? 'text-slate-300' : 'text-slate-700'}>
                          {p}
                        </p>
                      ))}
                    </div>

                    <div className="mt-12 text-center text-sm text-slate-500 font-mono">
                      — Halaman {currentPage.pageNumber} dari {EBOOK_PAGES.length} —
                    </div>
                  </div>

                </div>

                {/* Footer Controls in fullscreen */}
                <div className="bg-navy-dark p-6 border-t border-slate-800 flex items-center justify-between">
                  <button
                    id="btn-modal-prev-page"
                    disabled={currentPageIdx === 0}
                    onClick={() => setCurrentPageIdx(currentPageIdx - 1)}
                    className="px-5 py-2.5 rounded-lg bg-navy-blue border border-slate-800 text-slate-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" /> Sebelumnya
                  </button>

                  <span className="text-sm font-mono font-bold text-slate-300">
                    Halaman {currentPageIdx + 1} dari {EBOOK_PAGES.length} ({progressPercent}% Dibaca)
                  </span>

                  <button
                    id="btn-modal-next-page"
                    disabled={currentPageIdx === EBOOK_PAGES.length - 1}
                    onClick={() => setCurrentPageIdx(currentPageIdx + 1)}
                    className="px-5 py-2.5 rounded-lg bg-navy-blue border border-slate-800 text-slate-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 cursor-pointer"
                  >
                    Berikutnya <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
