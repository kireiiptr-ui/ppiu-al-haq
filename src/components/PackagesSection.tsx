import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  Star, 
  Plane, 
  Hotel, 
  MapPin, 
  Compass, 
  ChevronRight, 
  X, 
  Calculator, 
  Users, 
  Gift, 
  Phone, 
  TrendingUp, 
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

interface Package {
  id: string;
  name: string;
  badge?: string;
  price: number;
  description: string;
  hotelMadinah: { name: string; distance: string; rating: number };
  hotelMakkah: { name: string; distance: string; rating: number };
  airline: string;
  airlineIcon: string;
  color: string;
  accentColor: string;
  bgGradient: string;
  features: string[];
  perks: string[];
}

const PACKAGES_DATA: Package[] = [
  {
    id: 'standar',
    name: 'Paket Standar',
    badge: 'S - Lengkap & Ekonomis',
    price: 29900000,
    description: 'Pilihan ekonomis dengan fasilitas dasar lengkap demi kekhusyukan ibadah secara optimal dan sesuai syar\'i.',
    hotelMadinah: { name: 'Mirage Al Salam / setaraf', distance: '± 150m dari Masjid Nabawi', rating: 3 },
    hotelMakkah: { name: 'Fajar Badee / setaraf', distance: '± 600m (dilengkapi layanan Bus Sholawat 24 Jam)', rating: 3 },
    airline: 'Lion Air / Air Asia / setaraf (Transit / Direct)',
    airlineIcon: '✈️',
    color: 'border-slate-800 hover:border-[#9A7E75]/35',
    accentColor: '#9A7E75',
    bgGradient: 'from-slate-900 to-[#0D1021]',
    features: [
      'Tiket PP Penerbangan Sesuai Program',
      'Hotel Nyaman & Fasilitas Sesuai Kelasnya',
      'Full Board Catering Menu Nusantara (Makan 3x Sehari)',
      'Perlengkapan Ibadah Dasar PPIU Al-Haq',
      'Muthawwif berpengalaman selama di tanah suci',
      'Asuransi perjalanan & kesehatan standar',
      'City Tour Makkah & Madinah Lengkap',
      'Rute Dasar Ibadah: Masjid Quba, Jabal Uhud, Kebun Kurma, Masjid Ji\'ranah'
    ],
    perks: [
      'Layanan Bus Sholawat 24 Jam gratis',
      'Air Zamzam 5 Liter (sesuai regulasi Saudi)',
      'City Tour Makkah & Madinah Lengkap',
      'Catering Menu Nusantara (Full Board)'
    ]
  },
  {
    id: 'medium',
    name: 'Paket Medium',
    badge: 'M - Hotel Lebih Dekat & Maskapai Full Service',
    price: 34900000,
    description: 'Kombinasi sempurna akomodasi hotel yang lebih dekat ke Masjidil Haram & Nabawi dengan penerbangan full-service serta perlengkapan premium.',
    hotelMadinah: { name: 'Saja Al Madinah / setaraf', distance: '± 80m dari Masjid Nabawi', rating: 4 },
    hotelMakkah: { name: 'Anjum Hotel / setaraf', distance: '± 250m dari Masjidil Haram', rating: 4 },
    airline: 'Saudia Airlines / Oman Air (Direct Flight)',
    airlineIcon: '✈️ Full Service',
    color: 'border-rose-gold/40 hover:border-rose-gold shadow-rose-gold/5',
    accentColor: '#C4A493',
    bgGradient: 'from-[#1C161E] to-[#0D1021]',
    features: [
      'Tiket PP Maskapai Penerbangan Full Service',
      'Hotel Lebih Dekat ke Pelataran Masjid (Bintang 4)',
      'Perlengkapan Ibadah Premium Eksklusif',
      'Makan 3x Sehari (Eating Three Times a Day)',
      'Muthawwif & Pembimbing Bersertifikasi Resmi',
      'Asuransi perjalanan & kesehatan lengkap',
      'City Tour Makkah & Madinah',
      'Kunjungan Museum Wahyu (Museum of Revelation) & Gua Hira (Cave of Hira)',
      'Rute Dasar Ibadah: Masjid Quba, Jabal Uhud, Kebun Kurma, Masjid Ji\'ranah'
    ],
    perks: [
      'Makan 3x Sehari (Eating Three Times a Day)',
      'City Tour Makkah & Madinah',
      'Kunjungan Museum Wahyu & Gua Hira',
      'Perlengkapan Ibadah Premium Lengkap'
    ]
  },
  {
    id: 'plus',
    name: 'Paket Plus',
    badge: 'P - Layanan VIP & Tambahan Kota Thaif',
    price: 42900000,
    description: 'Pengalaman ibadah super eksklusif dengan pelayanan VIP, hotel bintang 5 persis di pelataran utama, serta ziarah ekstra ke Kota Thaif.',
    hotelMadinah: { name: 'Pullman Zamzam Madinah / setaraf', distance: 'Pelataran Pintu Utama Masjid Nabawi', rating: 5 },
    hotelMakkah: { name: 'Swissôtel Makkah / setaraf', distance: 'Grand Tower Zamzam - Pelataran Masjidil Haram', rating: 5 },
    airline: 'Saudia Airlines / Emirates (Direct Flight VIP)',
    airlineIcon: '🌟 VIP Flight',
    color: 'border-yellow-500/30 hover:border-yellow-500/70 shadow-yellow-500/5',
    accentColor: '#D4AF37',
    bgGradient: 'from-[#1E1C16] to-[#0D1021]',
    features: [
      'Layanan VIP Sepanjang Perjalanan',
      'Hotel Premium Bintang 5 Sangat Dekat Pelataran Haram',
      'Transportasi Eksklusif Selama di Saudi',
      'Kereta Cepat Haramain (VIP Class Cabin)',
      'International Full Board Buffet (Prasmanan Internasional)',
      'Perlengkapan Premium Edisi Khusus Berlapis Bordir Emas',
      'Asuransi perjalanan VIP & Layanan Kesehatan Prioritas',
      'City Tour Makkah & Madinah + Kereta Gantung Thaif (Taif Cable Car)',
      'Pengalaman Eksklusif Plus: Ziarah Tambahan Kota Thaif, Kunjungan Museum Sejarah Islam, Pilihan Transit Tour Eksklusif'
    ],
    perks: [
      'Akses Lift Hotel Langsung ke Pelataran Masjid',
      'City Tour Makkah & Madinah + Kereta Gantung Thaif (Taif Cable Car)',
      'International Full Board Buffet',
      'Ziarah Tambahan Eksklusif ke Kota Sejuk Thaif',
      'Eksplorasi Edukatif Museum Sejarah Islam'
    ]
  }
];

export default function PackagesSection() {
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [calcPackage, setCalcPackage] = useState<string>('medium');
  const [paxCount, setPaxCount] = useState<number>(2);

  const activeCalcPack = PACKAGES_DATA.find(p => p.id === calcPackage) || PACKAGES_DATA[1];
  const totalPriceEstimate = activeCalcPack.price * paxCount;

  const formatIDR = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(num);
  };

  const generateWhatsAppURL = (packName: string, notes?: string) => {
    const text = `Assalamualaikum PPIU Al-Haq, saya ingin berkonsultasi mengenai pendaftaran *${packName}* untuk keberangkatan tahun 2026.${notes ? `\n\n${notes}` : ''}`;
    return `https://wa.me/6281234567890?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="packages" className="relative py-24 bg-[#01071E] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-gold/5 via-transparent to-transparent pointer-events-none" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1C2738]/50 border border-rose-gold/20 text-rose-gold text-xs font-semibold uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5 text-rose-gold" /> Pilihan Program Unggulan
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-white tracking-tight">
            Paket Keberangkatan <span className="text-rose-gold italic font-normal">Terbaik Kami</span>
          </h2>
          <p className="text-slate-400 font-sans mt-3 text-sm">
            Tersedia pilihan paket yang terencana matang untuk kenyamanan ibadah Anda sekeluarga, didampingi secara syar'i dan profesional oleh asatidzah berizin resmi.
          </p>
        </div>

        {/* Dynamic 3-Column Package Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 items-stretch">
          {PACKAGES_DATA.map((pack, idx) => {
            const isFeatured = pack.id === 'medium';
            return (
              <motion.div
                key={pack.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#F5D6C6] via-[#C4A493] to-[#8C6B61] border border-rose-gold/30 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(196,164,147,0.25)] overflow-hidden`}
              >
                {/* Visual Glow Top Line for Featured */}
                {isFeatured && (
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-white via-rose-gold to-white" />
                )}

                {/* Badge Indicator */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-[10px] uppercase font-mono font-bold text-slate-950 tracking-wider bg-black/10 px-2.5 py-1 rounded-full border border-black/5">
                      {pack.badge}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-slate-950 mt-3 flex items-center gap-2">
                      {pack.name}
                      {pack.id === 'plus' && <Star className="w-4 h-4 text-[#4a3025] fill-[#4a3025]" />}
                    </h3>
                  </div>
                  {isFeatured && (
                    <span className="text-[9px] uppercase font-mono font-bold text-white bg-navy-ultra px-2.5 py-1.5 rounded-lg shadow-md">
                      Pilihan Utama
                    </span>
                  )}
                </div>

                {/* Pricing Block */}
                <div className="mb-6">
                  <span className="text-3xl sm:text-4xl font-serif font-bold text-slate-950">
                    {formatIDR(pack.price).replace(',00', '')}
                  </span>
                  <span className="text-xs text-slate-900 font-sans ml-1 font-semibold">/ pax (Sekamar Berempat)</span>
                  <p className="text-xs text-slate-900 mt-2 font-sans leading-relaxed min-h-[40px] font-medium">
                    {pack.description}
                  </p>
                </div>

                {/* Key Accommodation Cards */}
                <div className="space-y-3.5 mb-8 flex-1">
                  <h4 className="text-[10px] uppercase font-mono font-bold text-slate-950 tracking-wider">Akomodasi & Transportasi</h4>
                  
                  {/* Madinah Hotel Card */}
                  <div className="p-3 rounded-2xl bg-white/40 border border-white/20 flex gap-3">
                    <Hotel className="w-4 h-4 text-[#4a3025] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-[10px] font-bold text-[#4a3025] uppercase tracking-wider font-mono">Madinah Hotel</p>
                      <p className="text-xs font-bold text-slate-950 mt-0.5 font-serif leading-tight">{pack.hotelMadinah.name}</p>
                      <p className="text-[10px] text-slate-900 mt-0.5 flex items-center gap-1 font-sans">
                        <MapPin className="w-3 h-3 text-slate-800 flex-shrink-0" /> {pack.hotelMadinah.distance}
                      </p>
                    </div>
                  </div>

                  {/* Makkah Hotel Card */}
                  <div className="p-3 rounded-2xl bg-white/40 border border-white/20 flex gap-3">
                    <Hotel className="w-4 h-4 text-[#4a3025] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-[10px] font-bold text-[#4a3025] uppercase tracking-wider font-mono">Makkah Hotel</p>
                      <p className="text-xs font-bold text-slate-950 mt-0.5 font-serif leading-tight">{pack.hotelMakkah.name}</p>
                      <p className="text-[10px] text-slate-900 mt-0.5 flex items-center gap-1 font-sans">
                        <MapPin className="w-3 h-3 text-slate-800 flex-shrink-0" /> {pack.hotelMakkah.distance}
                      </p>
                    </div>
                  </div>

                  {/* Airline details */}
                  <div className="p-3 rounded-2xl bg-white/40 border border-white/20 flex gap-3">
                    <Plane className="w-4 h-4 text-[#4a3025] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-[10px] font-bold text-[#4a3025] uppercase tracking-wider font-mono">Penerbangan</p>
                      <p className="text-xs text-slate-950 mt-0.5 font-sans leading-tight font-medium">{pack.airline}</p>
                    </div>
                  </div>
                </div>

                {/* Call to Actions */}
                <div className="space-y-2 pt-4 border-t border-black/10 mt-auto">
                  <button
                    onClick={() => setSelectedPackage(pack)}
                    className="w-full py-2.5 rounded-xl border border-black/10 hover:border-black text-slate-950 hover:text-black text-xs font-bold uppercase tracking-wider transition-all cursor-pointer bg-white/20 hover:bg-white/45"
                  >
                    Selengkapnya & Fasilitas
                  </button>
                  <a
                    href={generateWhatsAppURL(pack.name)}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 rounded-xl bg-navy-ultra hover:bg-slate-900 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Phone className="w-3.5 h-3.5 fill-white" />
                    Daftar via WhatsApp
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* INTERACTIVE COMPONENT: Family Cost Estimator Grid Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl bg-[#0D1021] border border-[#9A7E75]/20 p-6 sm:p-10 relative overflow-hidden shadow-2xl">
          <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-rose-gold/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1C2738]/50 border border-rose-gold/20 text-rose-gold text-xs font-semibold uppercase tracking-wider">
              <Calculator className="w-3.5 h-3.5 text-rose-gold" /> Simulasi Perkiraan Biaya Rombongan
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-light text-white leading-tight">
              Hitung Estimasi Anggaran <span className="text-rose-gold italic font-normal">Keluarga Anda</span>
            </h3>
            <p className="text-xs text-slate-400 font-sans max-w-xl leading-relaxed">
              Ingin berangkat bersama keluarga besar? Silakan tentukan jumlah rombongan jamaah Anda dan pilih paket keberangkatan untuk mengetahui perkiraan biaya total secara instan.
            </p>

            {/* Quick Controls inside visual grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 font-mono">Pilih Program Paket</label>
                <select
                  value={calcPackage}
                  onChange={(e) => setCalcPackage(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-[#1C2738]/40 border border-[#9A7E75]/20 text-white text-xs font-sans focus:outline-none focus:border-rose-gold cursor-pointer"
                >
                  {PACKAGES_DATA.map(p => (
                    <option key={p.id} value={p.id} className="bg-[#0D1021]">{p.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 font-mono">Jumlah Jamaah (Pax)</label>
                <div className="flex items-center">
                  <button
                    onClick={() => setPaxCount(Math.max(1, paxCount - 1))}
                    className="px-3 py-2.5 rounded-l-xl bg-[#1C2738]/60 border border-[#9A7E75]/20 text-white hover:bg-rose-gold hover:text-navy-ultra font-bold text-xs cursor-pointer transition-colors"
                  >
                    -
                  </button>
                  <div className="flex-1 text-center py-2 bg-[#1C2738]/30 border-y border-[#9A7E75]/20 text-white text-xs font-bold font-mono">
                    {paxCount} Orang
                  </div>
                  <button
                    onClick={() => setPaxCount(Math.min(25, paxCount + 1))}
                    className="px-3 py-2.5 rounded-r-xl bg-[#1C2738]/60 border border-[#9A7E75]/20 text-white hover:bg-rose-gold hover:text-navy-ultra font-bold text-xs cursor-pointer transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 p-6 rounded-2xl bg-[#1C2738]/30 border border-[#9A7E75]/15 text-center sm:text-left flex flex-col justify-between h-full relative">
            <div className="space-y-2">
              <span className="text-[9px] uppercase font-mono font-bold text-rose-gold tracking-widest block">Ringkasan Estimasi Anggaran</span>
              <div className="text-slate-300 text-[11px] font-sans flex justify-between border-b border-white/5 pb-2">
                <span>Rincian Program:</span>
                <span className="font-bold text-white font-serif">{activeCalcPack.name}</span>
              </div>
              <div className="text-slate-300 text-[11px] font-sans flex justify-between border-b border-white/5 pb-2">
                <span>Harga Satuan:</span>
                <span className="font-mono text-white">{formatIDR(activeCalcPack.price).replace(',00', '')}</span>
              </div>
              <div className="text-slate-300 text-[11px] font-sans flex justify-between border-b border-white/5 pb-2">
                <span>Jumlah Pax:</span>
                <span className="font-mono text-white font-bold">{paxCount} Orang</span>
              </div>
              
              {/* Grand Total representation */}
              <div className="pt-4 pb-2 text-center">
                <span className="text-[10px] text-slate-400 font-mono block uppercase">Total Perkiraan Biaya</span>
                <span className="text-2xl sm:text-3xl font-serif font-extrabold text-white block mt-1 tracking-tight">
                  {formatIDR(totalPriceEstimate).replace(',00', '')}
                </span>
                <span className="text-[10px] text-slate-500 font-sans block mt-1">Sudah termasuk asuransi & perlengkapan standar</span>
              </div>
            </div>

            <a
              href={generateWhatsAppURL(activeCalcPack.name, `Ingin mendaftarkan rombongan berjumlah *${paxCount} Orang* dengan program paket *${activeCalcPack.name}*. Mohon informasi promo rombongan jika ada.`)}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 mt-4 rounded-xl bg-rose-gold hover:bg-white text-navy-ultra font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              <Phone className="w-4 h-4 fill-navy-ultra" />
              Konsultasikan Rombongan Ini
            </a>
          </div>
        </div>

      </div>

      {/* DETAILED FEATURES DIALOG MODAL */}
      <AnimatePresence>
        {selectedPackage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPackage(null)}
              className="absolute inset-0 bg-[#01071E]/95 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-2xl bg-[#0D1021] border border-[#9A7E75]/25 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 font-sans"
            >
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-rose-gold to-gold-accent" />
              
              <button
                onClick={() => setSelectedPackage(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-full hover:bg-[#1C2738]/50 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <span className="text-[10px] uppercase font-mono font-bold text-rose-gold bg-rose-gold/10 px-2.5 py-1 rounded border border-rose-gold/20">
                  {selectedPackage.badge}
                </span>
                <h3 className="text-2xl font-serif font-bold text-white mt-3">{selectedPackage.name}</h3>
                <p className="text-xs text-slate-400 mt-1.5">{selectedPackage.description}</p>
                <div className="text-lg font-serif font-bold text-rose-gold mt-2">
                  Mulai {formatIDR(selectedPackage.price).replace(',00', '')} / pax
                </div>
              </div>

              {/* Facility Details Grid list */}
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-[10px] uppercase font-mono font-bold text-slate-400 tracking-wider mb-2.5 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-rose-gold" /> Layanan Utama & Rukun Keberangkatan
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedPackage.features.map((feature, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl bg-[#1C2738]/40 border border-white/5 flex gap-2.5 items-start">
                        <Check className="w-4 h-4 text-rose-gold flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-300 leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-[10px] uppercase font-mono font-bold text-slate-400 tracking-wider mb-2.5 flex items-center gap-1">
                    <Gift className="w-3.5 h-3.5 text-rose-gold" /> Keistimewaan & Perlengkapan Tambahan
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedPackage.perks.map((perk, idx) => (
                      <span key={idx} className="text-[10px] font-bold text-slate-300 bg-[#1C2738]/50 border border-[#9A7E75]/15 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                        <TrendingUp className="w-3 h-3 text-rose-gold" /> {perk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Airport Regulation Cautionary Footer */}
              <div className="flex gap-2.5 items-start p-3 rounded-xl bg-yellow-500/5 border border-yellow-500/15 text-[10px] text-slate-400 leading-normal mb-6">
                <AlertCircle className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                <span>Penting: Harga dapat berubah menyesuaikan kebijakan kenaikan visa Saudi, pajak kementerian, atau fluktuasi tiket maskapai. Konsultasikan langsung kepada admin Al-Haq untuk kepastian slot rombongan terbaru.</span>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setSelectedPackage(null)}
                  className="w-full sm:w-1/3 py-3 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-400 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Tutup
                </button>
                <a
                  href={generateWhatsAppURL(selectedPackage.name)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-2/3 py-3 rounded-xl bg-rose-gold hover:bg-white text-navy-ultra font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <Phone className="w-4 h-4 fill-navy-ultra" />
                  Hubungi Agen Penjualan
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
