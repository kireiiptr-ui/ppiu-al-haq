import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, FileSpreadsheet, QrCode, ClipboardCheck, Sparkles, AlertCircle, HeartHandshake, CheckCircle2 } from 'lucide-react';

export default function SurveySection() {
  const [userRating, setUserRating] = useState<number>(5);
  const [userComment, setUserComment] = useState<string>('');
  const [userGroup, setUserGroup] = useState<string>('Kelompok Al-Mumin');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSurveySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userComment) return;

    // Save mock feedback to local storage
    const savedFeedback = JSON.parse(localStorage.getItem('alhaq_user_surveys') || '[]');
    savedFeedback.push({
      rating: userRating,
      comment: userComment,
      group: userGroup,
      date: new Date().toISOString()
    });
    localStorage.setItem('alhaq_user_surveys', JSON.stringify(savedFeedback));

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setUserComment('');
      setUserRating(5);
    }, 4000);
  };

  const satisfactionMetrics = [
    { title: 'Bimbingan Manasik (Ustadz)', score: '4.9', percent: 98 },
    { title: 'Akomodasi Hotel Bintang 5', score: '4.7', percent: 94 },
    { title: 'Katering & Konsumsi Menu Nusantara', score: '4.8', percent: 96 },
    { title: 'Akurasi Transportasi & Jadwal Terbang', score: '4.8', percent: 96 }
  ];

  return (
    <section id="survey" className="relative py-24 bg-navy-dark overflow-hidden border-t border-slate-900">
      
      {/* Background soft glowing blur */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-gold-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1C2738]/50 border border-rose-gold/20 text-rose-gold text-xs font-semibold uppercase tracking-wider mb-4">
            <ClipboardCheck className="w-3.5 h-3.5 text-rose-gold" /> Evaluasi Mutu Layanan
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-white tracking-tight">
            Survei <span className="text-rose-gold italic font-normal">Kepuasan Jamaah Al-Haq</span>
          </h2>
          <p className="text-slate-400 font-sans mt-3 text-sm">
            Seluruh masukan dan evaluasi Anda adalah amanah penting yang kami gunakan secara berkelanjutan untuk meningkatkan mutu pelayanan keberangkatan berikutnya.
          </p>
        </div>

        {/* Layout: Left Satisfaction Stats, Right Feedback form + QR code */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: Satisfaction Statistics & Ratings (7 Columns) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#0D1021] border border-[#9A7E75]/20 flex flex-col justify-between shadow-xl">
            <div>
              {/* Huge Rating Score */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b border-[#9A7E75]/10 pb-6 mb-6">
                {/* Glowing Circular Progress indicator */}
                <div className="relative w-32 h-32 flex items-center justify-center flex-shrink-0">
                  <svg className="w-full h-full -rotate-90">
                    <circle cx="64" cy="64" r="54" className="stroke-[#1C2738] stroke-[10] fill-none" />
                    <circle 
                      cx="64" 
                      cy="64" 
                      r="54" 
                      className="stroke-rose-gold stroke-[10] fill-none"
                      strokeDasharray={339}
                      strokeDashoffset={339 - (339 * 96) / 100}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-serif font-bold text-white">4.8</span>
                    <span className="text-[9px] uppercase font-mono font-bold text-rose-gold tracking-wider">dari 5.0</span>
                  </div>
                </div>

                <div className="text-center sm:text-left space-y-2">
                  <div className="flex items-center justify-center sm:justify-start gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-5 h-5 text-rose-gold fill-rose-gold" />
                    ))}
                  </div>
                  <h3 className="text-lg font-serif font-bold text-white">Skor Kepuasan Indeks Sangat Tinggi</h3>
                  <p className="text-xs text-slate-300 leading-relaxed max-w-md font-sans">
                    Hasil ini diperoleh secara independen berdasarkan penilaian berkala dari total <strong>1.250 Responden</strong> jamaah alumni PPIU Al-Haq keberangkatan 2024–2026.
                  </p>
                </div>
              </div>

              {/* Sub Metrics List */}
              <div className="space-y-4">
                <h4 className="text-[10px] uppercase font-mono font-bold text-slate-400 tracking-wider">Metrik Evaluasi Per-Kategori</h4>
                {satisfactionMetrics.map((met, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-sans">
                      <span className="text-slate-300 font-medium">{met.title}</span>
                      <span className="text-rose-gold font-bold font-mono">{met.score} / 5.0</span>
                    </div>
                    <div className="w-full bg-[#1C2738]/50 h-2 rounded-full overflow-hidden border border-white/5">
                      <div 
                        className="bg-gradient-to-r from-rose-gold to-gold-accent h-full" 
                        style={{ width: `${met.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#9A7E75]/10 flex items-center gap-2 text-xs text-slate-400">
              <AlertCircle className="w-4 h-4 text-rose-gold flex-shrink-0" />
              <span>Tim audit internal Al-Haq merangkum laporan ini setiap akhir triwulan.</span>
            </div>
          </div>

          {/* RIGHT: QR Code and Google Forms Button (5 Columns) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#0D1021] border border-[#9A7E75]/20 relative overflow-hidden flex flex-col justify-between shadow-xl">
            <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-rose-gold to-gold-accent" />
            
            <div className="mb-6 text-center sm:text-left">
              <h3 className="text-base font-serif font-bold text-white flex items-center justify-center sm:justify-start gap-2">
                <QrCode className="w-5 h-5 text-rose-gold" /> Isi Lembar Survei Anda
              </h3>
              <p className="text-xs text-slate-400 mt-1">Isi kuisioner resmi untuk membantu evaluasi rombongan bimbingan Anda.</p>
            </div>

            {/* QR Code and Instructions Flexbox */}
            <div className="flex flex-col sm:flex-row items-center gap-6 p-4 rounded-xl bg-[#1C2738]/30 border border-white/5 mb-6">
              
              {/* Clickable and Accessible QR Code */}
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSf-1cDgnccRdHCowmawBvR0_cN2SLjtL0HBZK60JEQKQuD7-Q/viewform" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-28 h-28 bg-white p-2 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-rose-gold/20 hover:ring-2 hover:ring-rose-gold focus:outline-none focus:ring-2 focus:ring-rose-gold focus:ring-offset-2 focus:ring-offset-[#0D1021] cursor-pointer"
                aria-label="Scan atau klik QR Code ini untuk membuka Lembar Formulir Evaluasi Digital Al-Haq"
                title="Klik untuk membuka lembar survei di tab baru"
              >
                <img 
                  src="/src/assets/images/survey_qr_1782662077046.jpg" 
                  alt="QR Code survei kepuasan bimbingan umrah Al-Haq" 
                  className="w-full h-full object-contain rounded-lg"
                  referrerPolicy="no-referrer"
                />
              </a>

              <div className="text-center sm:text-left space-y-1">
                <p className="text-xs font-bold text-slate-100">Scan / Klik QR Code</p>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Arahkan kamera smartphone Anda ke QR code ini, atau <strong className="text-rose-gold">klik langsung pada QR code</strong> untuk membuka lembar formulir evaluasi digital bimbingan Al-Haq.
                </p>
              </div>

            </div>

            {/* Simulated quick feedback in-browser form to keep page highly interactive */}
            <div className="space-y-4">
              {isSubmitted ? (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/40 text-center text-xs text-emerald-400 flex flex-col items-center gap-2">
                  <CheckCircle2 className="w-6 h-6" />
                  <span>Terima kasih! Penilaian Anda sangat berharga bagi peningkatan mutu bimbingan PPIU Al-Haq.</span>
                </div>
              ) : (
                <form onSubmit={handleSurveySubmit} className="space-y-3 font-sans">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <label className="block text-slate-400 mb-1 font-medium">Rombongan Anda</label>
                      <select 
                        value={userGroup}
                        onChange={(e) => setUserGroup(e.target.value)}
                        className="w-full px-2.5 py-2 rounded-lg bg-[#1C2738]/30 border border-white/5 text-white focus:outline-none focus:border-rose-gold cursor-pointer"
                      >
                        <option value="Kelompok Ar-Rahman">Kelompok Ar-Rahman</option>
                        <option value="Kelompok Al-Mumin">Kelompok Al-Mumin</option>
                        <option value="Kelompok Al-Muhaimin">Kelompok Al-Muhaimin</option>
                        <option value="Kelompok Al-Aziz">Kelompok Al-Aziz</option>
                        <option value="Kelompok Al-Jabar">Kelompok Al-Jabar</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-slate-400 mb-1 font-medium">Rating Anda</label>
                      <div className="flex items-center gap-1.5 h-9">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setUserRating(star)}
                            className="text-rose-gold hover:scale-110 transition-transform cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-gold rounded-sm p-0.5"
                            aria-label={`Beri penilaian ${star} bintang dari 5`}
                          >
                            <Star className={`w-4 h-4 ${star <= userRating ? 'fill-rose-gold text-rose-gold' : 'text-slate-600'}`} />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <textarea
                      required
                      placeholder="Tulis kritik, saran, atau pujian perihal akomodasi, katering, atau ustadz pendamping selama umrah..."
                      rows={2}
                      value={userComment}
                      onChange={(e) => setUserComment(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-[#1C2738]/30 border border-white/5 text-white placeholder-slate-600 text-xs resize-none focus:outline-none focus:border-rose-gold"
                    />
                  </div>

                  <button
                    id="btn-submit-quick-survey"
                    type="submit"
                    className="w-full py-2.5 rounded-lg bg-navy-dark border border-slate-700 hover:border-rose-gold/50 text-slate-300 hover:text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Kirim Ulasan Instan
                  </button>
                </form>
              )}

              {/* Main Survey Action Button linking to external form */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf-1cDgnccRdHCowmawBvR0_cN2SLjtL0HBZK60JEQKQuD7-Q/viewform"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 rounded-xl bg-rose-gold text-navy-ultra font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-white transition-colors flex items-center justify-center gap-2 mt-4"
              >
                <FileSpreadsheet className="w-4 h-4 fill-navy-ultra text-navy-ultra" />
                Isi Survei Kepuasan Utama (Google Forms)
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
