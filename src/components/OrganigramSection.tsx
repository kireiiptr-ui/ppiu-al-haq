import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Users, Briefcase, Award, ChevronDown, ChevronUp, MessageCircle, HelpCircle, Compass, X } from 'lucide-react';

interface Officer {
  role: string;
  name: string;
  desc: string;
  tasks: string[];
  avatarColor: string;
}

export default function OrganigramSection() {
  const [selectedOfficer, setSelectedOfficer] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  const officers: Record<string, Officer> = {
    komisaris: {
      role: 'KOMISARIS',
      name: 'Dr. H. Asep Iwan Setiawan, S.Sos.I., M.Ag.',
      desc: 'Penanggung jawab tertinggi pengawas syariah dan operasional PPIU Al-Haq. Memastikan seluruh layanan bimbingan manasik dan perjalan ibadah sesuai dengan regulasi Kemenag RI dan nilai-nilai fiqih Ahlussunnah wal Jama\'ah.',
      tasks: [
        'Mengawasi kesesuaian bimbingan ibadah dengan standar syariat.',
        'Mengevaluasi laporan tahunan direksi pelayanan jamaah.',
        'Memberikan nasihat strategis hubungan kelembagaan pemerintah.'
      ],
      avatarColor: 'bg-gradient-to-br from-amber-600 to-yellow-500'
    },
    direktur: {
      role: 'DIREKTUR PPIU',
      name: 'Saiful Haq',
      desc: 'Pemimpin eksekutif operasional Al-Haq.',
      tasks: [],
      avatarColor: 'bg-gradient-to-br from-rose-gold to-copper-brown'
    },
    wakil: {
      role: 'WAKIL KETUA',
      name: 'Reza Maulana',
      desc: 'Membantu Direktur dalam koordinasi taktis harian. Membawahi divisi administratif, kesekretariatan, bimbingan manasik, humas, serta logistik guna memastikan kesiapan operasional pra dan pasca keberangkatan.',
      tasks: [
        'Mengoordinasikan kesiapan teknis visa, koper, dan seragam.',
        'Memantau pelaksanaan simulasi praktik manasik luar ruangan.',
        'Menjaga komunikasi harian dengan para Kepala Divisi.'
      ],
      avatarColor: 'bg-gradient-to-br from-indigo-600 to-navy-slate'
    },
    sekretaris: {
      role: 'SEKRETARIS',
      name: 'Firyal Nurawaliya Wafda Al Ma\'arif',
      desc: 'Mengelola pusat administrasi, kearsipan jemaah, surat-menyurat resmi Kemenag, penjadwalan manasik, koordinasi asuransi, serta input data Sistem Informasi Pengawasan Terpadu Umrah dan Haji Khusus (Siskopatuh).',
      tasks: [
        'Menginput data visa dan manifest penerbangan ke Siskopatuh.',
        'Membagikan sertifikat kelulusan bimbingan manasik jemaah.',
        'Mengarsipkan berkas paspor, akta lahir, dan surat nikah.'
      ],
      avatarColor: 'bg-gradient-to-br from-slate-600 to-navy-gray'
    },
    bendahara: {
      role: 'BENDAHARA',
      name: 'Kireisha Rizqy Khaira Putri',
      desc: 'Mengelola arus keuangan perusahaan, rekonsiliasi pembayaran cicilan paket jamaah, pembayaran katering dan hotel Saudi, penukaran valuta asing Riyal, serta pelaporan pajak badan usaha secara akurat.',
      tasks: [
        'Memproses konfirmasi pelunasan paket umrah/haji jemaah.',
        'Menyediakan layanan penukaran uang Rupiah ke Riyal.',
        'Mengeluarkan anggaran belanja koper, syal, dan kain ihram.'
      ],
      avatarColor: 'bg-gradient-to-br from-emerald-600 to-teal-500'
    },
    manasik: {
      role: 'KEPALA DIVISI BIDANG MANASIK',
      name: 'Salwa Qolbunisa',
      desc: 'Merancang kurikulum bimbingan manasik teori dan simulasi praktik lapangan. Berkoordinasi dengan ustadz bersertifikat untuk bimbingan doa, pembagian buku saku digital, dan pendampingan spiritual selama di tanah suci.',
      tasks: [
        'Menjadwalkan pemateri manasik Pertemuan I & Pertemuan II.',
        'Menyiapkan sarana replika Ka\'bah untuk simulasi tawaf.',
        'Menyusun modul doa harian digital di portal belajar Al-Haq.'
      ],
      avatarColor: 'bg-gradient-to-br from-amber-600 to-rose-gold'
    },
    pelayanan: {
      role: 'KEPALA DIVISI PELAYANAN JAMA\'AH & ADMINISTRASI',
      name: 'khairil akbar djailani',
      desc: 'Mengawal kenyamanan layanan front-office, pendaftaran jamaah baru, penanganan kustom kamar hotel (quad/triple/double), koordinasi tim medis bandara, serta penanganan berkas asuransi perjalanan.',
      tasks: [
        'Melayani konsultasi paket jemaah baru di kantor pusat.',
        'Mengelompokkan rombongan bus dan kamar hotel di Makkah.',
        'Mendampingi kepengurusan visa keluarga/mahram.'
      ],
      avatarColor: 'bg-gradient-to-br from-cyan-600 to-navy-blue'
    },
    operasional: {
      role: 'KEPALA DIVISI OPERASIONAL, HUMAS & TRANSPORTASI',
      name: 'Hud Nur Muslim',
      desc: 'Mengamankan logistik transportasi darat (bus eksekutif Saptco di Arab Saudi), serah terima koper bagasi jemaah, penyediaan syal rombongan, serta hubungan eksternal dengan instansi bandara dan imigrasi.',
      tasks: [
        'Menangani logistik pengiriman koper jemaah H-3 keberangkatan.',
        'Memesan armada bus eksekutif jemputan bandara Jeddah.',
        'Membagikan seragam batik, tas kabin, dan name tag.'
      ],
      avatarColor: 'bg-gradient-to-br from-purple-600 to-navy-slate'
    }
  };

  return (
    <section id="organigram" className="relative py-24 bg-gradient-to-b from-navy-dark to-navy-ultra overflow-hidden border-t border-slate-900">
      
      {/* Background Soft Geometry */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1C2738]/50 border border-rose-gold/20 text-rose-gold text-xs font-semibold uppercase tracking-wider mb-4">
            <Users className="w-3.5 h-3.5 text-rose-gold" /> Struktur Kepengurusan
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-white tracking-tight">
            Organigram <span className="text-rose-gold italic font-normal">Manajemen PPIU Al-Haq</span>
          </h2>
          <p className="text-slate-400 font-sans mt-3 text-sm">
            Struktur organisasi formal yang berdedikasi tinggi, amanah, dan berpengalaman untuk menjamin keabsahan syar'i dan kelancaran fisik jamaah.
          </p>
        </div>

        {/* ORGANIGRAM TREE LAYOUT (RESPONSIVE) */}
        <div className="space-y-12 max-w-5xl mx-auto">
          
          {/* LEVEL 1: KOMISARIS (Advisor) */}
          <div className="flex justify-center">
            <div className="relative group text-center">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-yellow-500 via-rose-gold to-yellow-600 opacity-20 group-hover:opacity-55 blur-md transition-all duration-300" />
              <button
                onClick={() => setSelectedOfficer('komisaris')}
                className={`relative px-6 py-4 rounded-2xl border flex flex-col items-center justify-center min-w-80 cursor-pointer transition-all ${
                  selectedOfficer === 'komisaris' 
                    ? 'bg-[#0D1021] border-rose-gold shadow-xl text-white' 
                    : 'bg-[#0D1021]/60 border-[#9A7E75]/20 text-slate-300 hover:border-rose-gold/40'
                }`}
              >
                <span className="text-[9px] font-mono font-bold tracking-widest text-gold-accent flex items-center gap-1.5">
                  <Shield className="w-3 h-3 text-gold-accent" /> PENGAWAS SYARIAH & LOGISTIK
                </span>
                <span className="text-xs font-bold text-rose-gold uppercase mt-1">KOMISARIS</span>
                <span className="text-sm font-bold font-serif text-white mt-1">{officers.komisaris.name}</span>
              </button>
            </div>
          </div>

          {/* Vertical Connection Line */}
          <div className="flex justify-center my-3">
            <div className="w-[1.5px] h-12 bg-gradient-to-b from-rose-gold/60 to-rose-gold/10" />
          </div>

          {/* LEVEL 2: DIREKTUR */}
          <div className="flex justify-center">
            <div className="relative group text-center">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-rose-gold via-gold-accent to-copper-brown opacity-20 group-hover:opacity-50 blur-md transition-all duration-300" />
              <button
                onClick={() => setSelectedOfficer('direktur')}
                className={`relative px-6 py-4 rounded-2xl border flex flex-col items-center justify-center min-w-80 cursor-pointer transition-all ${
                  selectedOfficer === 'direktur' 
                    ? 'bg-[#0D1021] border-rose-gold shadow-xl text-white' 
                    : 'bg-[#0D1021]/60 border-[#9A7E75]/20 text-slate-300 hover:border-rose-gold/40'
                }`}
              >
                <span className="text-[9px] font-mono font-bold tracking-widest text-gold-accent flex items-center gap-1.5">
                  <Briefcase className="w-3 h-3 text-gold-accent" /> KEPALA EKSEKUTIF UTAMA
                </span>
                <span className="text-xs font-bold text-rose-gold uppercase mt-1">DIREKTUR PPIU</span>
                <span className="text-sm font-bold font-serif text-white mt-1">{officers.direktur.name}</span>
              </button>
            </div>
          </div>

          {/* Vertical Connection Line */}
          <div className="flex justify-center my-3">
            <div className="w-[1.5px] h-12 bg-gradient-to-b from-[#9A7E75]/40 to-[#9A7E75]/10" />
          </div>

          {/* LEVEL 3: WAKIL KETUA */}
          <div className="flex justify-center">
            <div className="relative group text-center">
              <button
                onClick={() => setSelectedOfficer('wakil')}
                className={`px-6 py-4 rounded-2xl border flex flex-col items-center justify-center min-w-80 cursor-pointer transition-all ${
                  selectedOfficer === 'wakil' 
                    ? 'bg-[#0D1021] border-rose-gold shadow-xl text-white' 
                    : 'bg-[#0D1021]/60 border-[#9A7E75]/20 text-slate-300 hover:border-rose-gold/40'
                }`}
              >
                <span className="text-[9px] font-mono font-bold tracking-widest text-slate-400 flex items-center gap-1.5">
                  <Award className="w-3 h-3 text-rose-gold" /> PENGENDALI OPERASIONAL
                </span>
                <span className="text-xs font-bold text-rose-gold uppercase mt-1">WAKIL KETUA</span>
                <span className="text-sm font-bold font-serif text-white mt-1">[{officers.wakil.name}]</span>
              </button>
            </div>
          </div>

          {/* Hierarchical split connectors: Level 3 to Level 4 */}
          <div className="hidden sm:block max-w-2xl mx-auto -my-6">
            <div className="w-[1.5px] h-6 bg-[#9A7E75]/20 mx-auto" />
            <div className="h-[1.5px] bg-gradient-to-r from-transparent via-[#9A7E75]/30 to-transparent max-w-lg mx-auto" />
            <div className="flex justify-between max-w-lg mx-auto">
              <div className="w-[1.5px] h-6 bg-[#9A7E75]/20" />
              <div className="w-[1.5px] h-6 bg-[#9A7E75]/20" />
            </div>
          </div>
          {/* Mobile vertical connector */}
          <div className="sm:hidden flex justify-center -my-6">
            <div className="w-[1.5px] h-6 bg-[#9A7E75]/20" />
          </div>

          {/* LEVEL 4: SEKRETARIS & BENDAHARA (Berdampingan) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto relative z-10">
            {/* Sekretaris */}
            <button
              onClick={() => setSelectedOfficer('sekretaris')}
              className={`p-4 rounded-2xl border flex flex-col items-center text-center transition-all cursor-pointer ${
                selectedOfficer === 'sekretaris'
                  ? 'bg-[#0D1021] border-rose-gold shadow-lg text-white'
                  : 'bg-[#0D1021]/60 border-[#9A7E75]/20 text-slate-300 hover:border-rose-gold/40'
              }`}
            >
              <span className="text-[9px] uppercase font-bold text-rose-gold">Administrasi</span>
              <span className="text-[11px] font-bold text-slate-400 mt-0.5">SEKRETARIS</span>
              <span className="text-xs font-bold font-serif text-white mt-2 block h-8 overflow-hidden line-clamp-2">
                [{officers.sekretaris.name}]
              </span>
            </button>

            {/* Bendahara */}
            <button
              onClick={() => setSelectedOfficer('bendahara')}
              className={`p-4 rounded-2xl border flex flex-col items-center text-center transition-all cursor-pointer ${
                selectedOfficer === 'bendahara'
                  ? 'bg-[#0D1021] border-rose-gold shadow-lg text-white'
                  : 'bg-[#0D1021]/60 border-[#9A7E75]/20 text-slate-300 hover:border-rose-gold/40'
              }`}
            >
              <span className="text-[9px] uppercase font-bold text-rose-gold">Keuangan</span>
              <span className="text-[11px] font-bold text-slate-400 mt-0.5">BENDAHARA</span>
              <span className="text-xs font-bold font-serif text-white mt-2 block h-8 overflow-hidden line-clamp-2">
                [{officers.bendahara.name}]
              </span>
            </button>
          </div>

          {/* Hierarchical split connectors: Level 4 to Level 5 */}
          <div className="hidden sm:block max-w-4xl mx-auto -my-6">
            <div className="flex justify-between max-w-lg mx-auto">
              <div className="w-[1.5px] h-6 bg-[#9A7E75]/20" />
              <div className="w-[1.5px] h-6 bg-[#9A7E75]/20" />
            </div>
            <div className="h-[1.5px] bg-gradient-to-r from-transparent via-[#9A7E75]/30 to-transparent max-w-2xl mx-auto" />
            <div className="flex justify-between max-w-2xl mx-auto">
              <div className="w-[1.5px] h-6 bg-[#9A7E75]/20" />
              <div className="w-[1.5px] h-6 bg-[#9A7E75]/20" />
              <div className="w-[1.5px] h-6 bg-[#9A7E75]/20" />
            </div>
          </div>
          {/* Mobile vertical connector */}
          <div className="sm:hidden flex justify-center -my-6">
            <div className="w-[1.5px] h-6 bg-[#9A7E75]/20" />
          </div>

          {/* LEVEL 5: KEPALA DIVISI (Di bawah Sekretaris & Bendahara) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto relative z-10">
            {/* Divisi Manasik */}
            <button
              onClick={() => setSelectedOfficer('manasik')}
              className={`p-4 rounded-2xl border flex flex-col items-center text-center transition-all cursor-pointer ${
                selectedOfficer === 'manasik'
                  ? 'bg-[#0D1021] border-rose-gold shadow-lg text-white'
                  : 'bg-[#0D1021]/60 border-[#9A7E75]/20 text-slate-300 hover:border-rose-gold/40'
              }`}
            >
              <span className="text-[9px] uppercase font-bold text-rose-gold">Pembelajaran</span>
              <span className="text-[11px] font-bold text-slate-400 mt-0.5">KADIV MANASIK</span>
              <span className="text-xs font-bold font-serif text-white mt-2 block h-8 overflow-hidden line-clamp-2">
                [{officers.manasik.name}]
              </span>
            </button>

            {/* Divisi Pelayanan */}
            <button
              onClick={() => setSelectedOfficer('pelayanan')}
              className={`p-4 rounded-2xl border flex flex-col items-center text-center transition-all cursor-pointer ${
                selectedOfficer === 'pelayanan'
                  ? 'bg-[#0D1021] border-rose-gold shadow-lg text-white'
                  : 'bg-[#0D1021]/60 border-[#9A7E75]/20 text-slate-300 hover:border-rose-gold/40'
              }`}
            >
              <span className="text-[9px] uppercase font-bold text-rose-gold">Pelayanan</span>
              <span className="text-[11px] font-bold text-slate-400 mt-0.5">KADIV PELAYANAN</span>
              <span className="text-xs font-bold font-serif text-white mt-2 block h-8 overflow-hidden line-clamp-2">
                [{officers.pelayanan.name}]
              </span>
            </button>

            {/* Divisi Operasional */}
            <button
              onClick={() => setSelectedOfficer('operasional')}
              className={`p-4 rounded-2xl border flex flex-col items-center text-center transition-all cursor-pointer ${
                selectedOfficer === 'operasional'
                  ? 'bg-[#0D1021] border-rose-gold shadow-lg text-white'
                  : 'bg-[#0D1021]/60 border-[#9A7E75]/20 text-slate-300 hover:border-rose-gold/40'
              }`}
            >
              <span className="text-[9px] uppercase font-bold text-rose-gold">Logistik</span>
              <span className="text-[11px] font-bold text-slate-400 mt-0.5">KADIV OPERASIONAL</span>
              <span className="text-xs font-bold font-serif text-white mt-2 block h-8 overflow-hidden line-clamp-2">
                [{officers.operasional.name}]
              </span>
            </button>
          </div>

        </div>

        {/* DETAILS OF SELECTED OFFICER PANEL (With nice exit/entrance motion) */}
        <div className="mt-12 max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {selectedOfficer && (
              <motion.div
                key={selectedOfficer}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-8 rounded-2xl bg-[#0D1021] border border-[#9A7E75]/20 relative overflow-hidden shadow-xl"
              >
                <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-48 h-48 bg-rose-gold/5 rounded-full blur-2xl pointer-events-none" />
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedOfficer(null)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors cursor-pointer p-1 z-10"
                  aria-label="Tutup detail"
                >
                  <X className="w-4 h-4" />
                </button>
                
                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                  {/* Monogram circular badge */}
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 text-white text-xl font-bold font-mono shadow-md ${
                    officers[selectedOfficer as keyof typeof officers].avatarColor
                  }`}>
                    {officers[selectedOfficer as keyof typeof officers].name.replace(/[\[\]]/g, '').substring(0, 2).toUpperCase()}
                  </div>

                  <div className="space-y-3 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div>
                        <span className="text-[9px] font-mono tracking-widest text-rose-gold font-bold uppercase">
                          {officers[selectedOfficer as keyof typeof officers].role}
                        </span>
                        <h3 className="text-lg font-serif font-bold text-white mt-0.5">
                          {officers[selectedOfficer as keyof typeof officers].name.replace(/[\[\]]/g, '')}
                        </h3>
                      </div>
                      <button
                        onClick={() => showToast(`Hubungi jalur konsultasi internal dengan ${officers[selectedOfficer as keyof typeof officers].name.replace(/[\[\]]/g, '')}. Harap hubungi WhatsApp Pusat Al-Haq.`)}
                        className="self-start sm:self-center text-xs text-rose-gold hover:text-white font-bold flex items-center gap-1.5 border border-[#9A7E75]/20 px-3 py-1.5 rounded-lg bg-rose-gold/5 hover:bg-rose-gold/20 transition-all cursor-pointer"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-rose-gold" /> Konsultasi Internal
                      </button>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans text-justify">
                      {officers[selectedOfficer as keyof typeof officers].desc}
                    </p>

                    {/* Duties list */}
                    {officers[selectedOfficer as keyof typeof officers].tasks.length > 0 && (
                      <div className="space-y-2 pt-3 border-t border-[#9A7E75]/10">
                        <p className="text-[9px] uppercase font-mono font-bold text-slate-400">Tanggung Jawab & Tupoksi Utama:</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          {officers[selectedOfficer as keyof typeof officers].tasks.map((task, idx) => (
                            <div key={idx} className="p-3 rounded-xl bg-[#1C2738]/60 text-[11px] text-slate-300 border border-[#9A7E75]/10 flex items-start gap-2">
                              <span className="text-rose-gold font-bold font-mono">{idx + 1}.</span>
                              <span className="leading-relaxed font-sans">{task}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Elegant Toast Alert */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 max-w-sm p-4 rounded-2xl bg-[#0D1021]/95 border border-rose-gold text-slate-100 shadow-2xl flex items-start gap-3 backdrop-blur-md"
          >
            <div className="p-1 rounded-full bg-rose-gold/15 text-rose-gold flex-shrink-0">
              <Compass className="w-4 h-4" />
            </div>
            <div className="flex-1 text-xs leading-normal font-sans">
              {toastMessage}
            </div>
            <button 
              onClick={() => setToastMessage(null)} 
              className="text-slate-400 hover:text-white p-0.5"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
