import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { CheckSquare, AlertCircle, Check, ClipboardCheck, Sparkles } from 'lucide-react';

export default function DepartureChecklist() {
  const [activeChecklistCategory, setActiveChecklistCategory] = useState<string>('dokumen');
  
  // Interactive Departure Checklist State
  const [checklist, setChecklist] = useState({
    dokumen: [
      { id: 'doc-pass', text: 'Paspor Asli (Min. masa aktif 8 bulan, nama 2 suku kata)', checked: false },
      { id: 'doc-visa', text: 'Visa Umrah (Dicetak berwarna 2 rangkap)', checked: false },
      { id: 'doc-vacc', text: 'Buku Kuning / Sertifikat Vaksin Meningitis asli', checked: false },
      { id: 'doc-ktp', text: 'Fotokopi KTP, KK, dan Akta Kelahiran/Surat Nikah', checked: false },
      { id: 'doc-photo', text: 'Pasfoto cadangan ukuran 4x6 latar putih (4 lembar)', checked: false }
    ],
    koper: [
      { id: 'kop-ihram', text: 'Kain Ihram (Pria, min. 2 set) atau Mukena/Gamis Ihram (Wanita)', checked: false },
      { id: 'kop-batik', text: 'Baju Seragam Batik Resmi PPIU Al-Haq', checked: false },
      { id: 'kop-sandal', text: 'Sandal jepit santai & kantong sandal', checked: false },
      { id: 'kop-sun', text: 'Kacamata hitam, pelembab bibir (lip balm), sunscreen', checked: false },
      { id: 'kop-plug', text: 'Steker Listrik Kaki Tiga (Tipe G Arab Saudi)', checked: false }
    ],
    kesehatan: [
      { id: 'med-pres', text: 'Obat-obatan pribadi resep dokter (untuk penyakit komorbid)', checked: false },
      { id: 'med-flu', text: 'Obat penurun panas, flu, batuk, diare, dan vitamin C', checked: false },
      { id: 'med-moist', text: 'Petroleum jelly / pelembab sela paha mencegah lecet', checked: false },
      { id: 'med-mask', text: 'Masker medis cadangan (minimal 1 box)', checked: false }
    ]
  });

  // Load checklist from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('alhaq_departure_checklist');
    if (saved) {
      try {
        setChecklist(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse checklist", e);
      }
    }
  }, []);

  const handleToggleCheck = (category: 'dokumen' | 'koper' | 'kesehatan', id: string) => {
    const updatedCategory = checklist[category].map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    const updatedChecklist = {
      ...checklist,
      [category]: updatedCategory
    };
    setChecklist(updatedChecklist);
    localStorage.setItem('alhaq_departure_checklist', JSON.stringify(updatedChecklist));
  };

  // Calculate packed percentage
  const totalItems = [...checklist.dokumen, ...checklist.koper, ...checklist.kesehatan].length;
  const packedItems = [...checklist.dokumen, ...checklist.koper, ...checklist.kesehatan].filter(i => i.checked).length;
  const percentPacked = Math.round((packedItems / totalItems) * 100);

  return (
    <section id="departure-checklist" className="relative py-24 bg-[#090D1A] overflow-hidden border-t border-slate-900">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-gold/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1C2738]/50 border border-rose-gold/20 text-rose-gold text-xs font-semibold uppercase tracking-wider mb-4">
            <ClipboardCheck className="w-3.5 h-3.5 text-rose-gold" /> Persiapan Mandiri
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-light text-white tracking-tight">
            Checklist <span className="text-rose-gold italic font-normal">Kesiapan Keberangkatan</span>
          </h2>
          <p className="text-slate-400 font-sans mt-3 text-sm">
            Gunakan asisten checklist interaktif ini untuk memastikan seluruh dokumen, perlengkapan koper, dan kesehatan Anda telah siap 100% sebelum keberangkatan.
          </p>
        </div>

        {/* Interactive Checklist Console */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0D1021] border border-[#9A7E75]/20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-rose-gold via-gold-accent to-copper-brown" />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left side: Progress & Categories (5 Columns) */}
            <div className="md:col-span-5 space-y-6">
              {/* Checklist Progress Indicator */}
              <div className="p-5 rounded-xl bg-[#1C2738]/50 border border-[#9A7E75]/10 shadow-inner">
                <div className="flex items-center justify-between text-xs mb-2.5">
                  <span className="text-slate-300 font-medium">Status Kesiapan Koper</span>
                  <span className="text-rose-gold font-bold font-mono text-sm">{percentPacked}% Selesai</span>
                </div>
                <div className="w-full bg-[#0D1021] h-3 rounded-full overflow-hidden border border-white/5">
                  <div 
                    className="bg-gradient-to-r from-rose-gold via-gold-accent to-emerald-400 h-full transition-all duration-500"
                    style={{ width: `${percentPacked}%` }}
                  />
                </div>
                <div className="flex items-start gap-2 text-[10px] text-slate-400 mt-3 leading-relaxed">
                  <AlertCircle className="w-4 h-4 text-rose-gold flex-shrink-0 mt-0.5" />
                  <span>Centang seluruh poin di samping. Pastikan indikator mencapai <strong className="text-rose-gold">100%</strong> sebelum hari keberangkatan menuju bandara.</span>
                </div>
              </div>

              {/* Checklist Category Selector (Vertical on Desktop) */}
              <div className="flex flex-row md:flex-col gap-2 p-1.5 rounded-xl bg-navy-ultra/60 border border-white/5">
                {(['dokumen', 'koper', 'kesehatan'] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveChecklistCategory(cat)}
                    className={`flex-1 md:flex-initial py-3 px-4 rounded-lg font-bold capitalize transition-all text-xs text-center md:text-left flex items-center justify-center md:justify-between gap-2 cursor-pointer ${
                      activeChecklistCategory === cat
                        ? 'bg-rose-gold text-navy-ultra font-extrabold shadow-lg'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-[#1C2738]/30'
                    }`}
                  >
                    <span>
                      {cat === 'dokumen' ? '📑 Dokumen Utama' : cat === 'koper' ? '🧳 Koper Utama' : '🏥 Kesehatan & Obat'}
                    </span>
                    <span className={`hidden md:inline text-[10px] px-2 py-0.5 rounded font-mono ${
                      activeChecklistCategory === cat ? 'bg-navy-ultra/20 text-navy-ultra' : 'bg-navy-dark text-slate-500'
                    }`}>
                      {checklist[cat].filter(i => i.checked).length}/{checklist[cat].length}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right side: Interactive Checkboxes (7 Columns) */}
            <div className="md:col-span-7 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#9A7E75]/10">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-rose-gold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Daftar Perlengkapan ({activeChecklistCategory === 'dokumen' ? 'Dokumen' : activeChecklistCategory === 'koper' ? 'Koper Utama' : 'Kesehatan'})
                </h3>
                <span className="text-[10px] text-slate-500">Auto-Save ke Browser</span>
              </div>

              <div className="space-y-3 max-h-[320px] overflow-y-auto pr-1">
                {checklist[activeChecklistCategory as keyof typeof checklist].map((item) => (
                  <label 
                    key={item.id}
                    className={`flex items-start gap-3.5 p-3.5 rounded-xl border transition-all cursor-pointer text-xs select-none ${
                      item.checked 
                        ? 'bg-rose-gold/5 border-rose-gold/10 text-slate-400 line-through' 
                        : 'bg-[#1C2738]/30 border-white/5 text-slate-200 hover:bg-[#1C2738]/50 hover:border-rose-gold/25'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => handleToggleCheck(activeChecklistCategory as any, item.id)}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded-lg border flex items-center justify-center flex-shrink-0 transition-colors mt-0.5 ${
                      item.checked 
                        ? 'bg-rose-gold border-rose-gold text-navy-ultra shadow-inner' 
                        : 'border-slate-600 bg-navy-dark'
                    }`}>
                      {item.checked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <span className="leading-relaxed font-sans">{item.text}</span>
                  </label>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
