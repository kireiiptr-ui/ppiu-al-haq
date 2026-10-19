import { motion } from 'motion/react';
import { ShieldCheck, Award, HeartHandshake, Eye, Bookmark, ScrollText, CheckCircle2 } from 'lucide-react';

export default function ProfileSection() {
  const missions = [
    "Menyelenggarakan pelayanan umrah secara profesional dan transparan.",
    "Memberikan bimbingan manasik yang edukatif, sistematis, dan mudah dipahami jamaah.",
    "Mengutamakan kenyamanan, keamanan, dan kepuasan jemaah.",
    "Membina jemaah agar mampu melaksanakan ibadah sesuai Al-Qur'an dan Sunnah.",
    "Mengembangkan SDM yang kompeten dan berakhlakul karimah.",
    "Menjalin kerja sama yang baik dengan instansi pemerintah dan mitra pelayanan ibadah."
  ];

  const stats = [
    {
      value: "5.500+",
      label: "Jamaah Berangkat",
      desc: "Dipercayakan oleh ribuan jamaah dari seluruh pelosok Nusantara.",
      icon: HeartHandshake,
      color: "from-rose-gold to-copper-brown"
    },
    {
      value: "150+",
      label: "Kelompok Keberangkatan",
      desc: "Rombongan terbang terjadwal reguler, terencana dan amanah.",
      icon: Award,
      color: "from-gold-accent to-rose-gold"
    },
    {
      value: "98%",
      label: "Kepuasan Jamaah",
      desc: "Rating bintang lima berdasarkan evaluasi kepulangan jamaah.",
      icon: ShieldCheck,
      color: "from-rose-gold via-gold-accent to-gold-light"
    },
    {
      value: "10+ Tahun",
      label: "Pengalaman Kerja",
      desc: "Kredibilitas matang mengelola akomodasi, katering, dan rute.",
      icon: ScrollText,
      color: "from-copper-brown to-navy-slate"
    }
  ];

  return (
    <section id="profile" className="relative py-24 bg-gradient-to-b from-navy-ultra to-navy-dark overflow-hidden">
      {/* Decorative Gold Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Profile Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1C2738]/50 border border-rose-gold/20 text-rose-gold text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-rose-gold" /> Penyelenggara Resmi Berizin Kemenag RI
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-serif font-light text-white tracking-tight"
          >
            Mengenal Lebih Dekat{' '}
            <span className="text-rose-gold italic font-normal">
              PPIU Al-Haq
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 font-sans mt-4 text-sm sm:text-base leading-relaxed"
          >
            PPIU Al-Haq merupakan penyelenggara perjalanan ibadah haji dan umrah terpercaya yang telah berpengalaman lebih dari 10 tahun, memberangkatkan lebih dari 5.500 jamaah secara sukses, amanah, dan penuh kekeluargaan.
          </motion.p>
        </div>

        {/* Corporate Identity: Visi, Misi & Izin Resmi */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          
          {/* Left Column: Izin & Visi (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col justify-between p-8 rounded-2xl bg-[#0D1021] border border-[#9A7E75]/20 hover:border-rose-gold/40 transition-all shadow-xl"
          >
            {/* Legalitas */}
            <div className="mb-8">
              <h3 className="text-xs font-bold text-rose-gold uppercase tracking-widest mb-3 flex items-center gap-2">
                <ScrollText className="w-4 h-4" /> Kredibilitas & Legalitas
              </h3>
              <div className="p-4 rounded-xl bg-[#1C2738] border border-white/5">
                <p className="text-white text-sm font-bold">PPIU Al-Haq</p>
                <p className="text-slate-400 text-[11px] mt-0.5">Penyelenggara Perjalanan Ibadah Umrah Resmi</p>
                
                <div className="mt-3 pt-3 border-t border-white/5 grid grid-cols-2 gap-2 text-left">
                  <div>
                    <p className="text-[9px] uppercase font-bold text-rose-gold tracking-wider">Izin Resmi PPIU</p>
                    <p className="text-xs font-mono font-bold text-slate-200 mt-0.5">No. XXX</p>
                  </div>
                  <div>
                    <p className="text-[9px] uppercase font-bold text-rose-gold tracking-wider">Kementerian Agama</p>
                    <p className="text-xs text-slate-200 font-bold mt-0.5">Terdaftar Aktif</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visi */}
            <div>
              <h3 className="text-xs font-bold text-rose-gold uppercase tracking-widest mb-3 flex items-center gap-2">
                <Eye className="w-4 h-4" /> Visi Perusahaan
              </h3>
              <div className="p-5 rounded-xl bg-[#FDFBF7] border border-[#9A7E75]/30 relative overflow-hidden text-[#263448] shadow-md">
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-[#9A7E75]/10 rounded-full blur-xl pointer-events-none" />
                <p className="text-[#263448] text-xs sm:text-sm italic font-serif leading-relaxed relative z-10">
                  &ldquo;Menjadi lembaga penyelenggara perjalanan ibadah umrah yang profesional, amanah, terpercaya, dan berorientasi pada pelayanan ibadah yang nyaman sesuai tuntunan syariat Islam.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Misi (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 p-8 rounded-2xl bg-[#0D1021] border border-[#9A7E75]/20 hover:border-rose-gold/40 transition-all shadow-xl"
          >
            <h3 className="text-xs font-bold text-rose-gold uppercase tracking-widest mb-6 flex items-center gap-2">
              <Bookmark className="w-4 h-4 text-rose-gold" /> Misi Strategis Al-Haq
            </h3>
            
            <div className="space-y-3.5">
              {missions.map((misi, idx) => (
                <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#1C2738]/40 hover:bg-[#1C2738]/80 transition-all border border-white/5">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#9A7E75]/10 border border-[#9A7E75]/30 flex items-center justify-center text-xs text-rose-gold font-serif italic font-bold mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{misi}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Statistic Visual Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative p-6 rounded-2xl bg-[#0D1021] border border-[#9A7E75]/20 hover:border-rose-gold/50 group transition-all duration-300 overflow-hidden shadow-lg"
              >
                {/* Background decorative path overlay */}
                <div className="absolute right-0 bottom-0 translate-x-4 translate-y-4 w-24 h-24 bg-gradient-to-br from-rose-gold/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-[#1C2738] border border-white/5 group-hover:border-rose-gold/40 transition-colors">
                    <IconComponent className="w-5 h-5 text-rose-gold" />
                  </div>
                  <span className="text-[9px] font-mono tracking-widest text-slate-500 font-bold uppercase">AL-HAQ STATS</span>
                </div>

                <h4 className="text-3xl font-serif font-bold text-white tracking-tight">
                  {stat.value}
                </h4>
                
                <p className="text-xs font-bold text-rose-gold mt-1 uppercase tracking-wider">
                  {stat.label}
                </p>
                
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {stat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
