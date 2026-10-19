import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, UserCheck, CheckCircle, Search, ChevronRight, Download, Filter } from 'lucide-react';
import { MANASIK_SCHEDULES } from '../data';
import { ScheduleItem } from '../types';

export default function ManasikSchedule() {
  const [activeTab, setActiveTab] = useState<number>(0); // 0 = Pertemuan I, 1 = Pertemuan II
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [completedSessions, setCompletedSessions] = useState<number[]>([]);

  // Load completed sessions from local storage
  useEffect(() => {
    const saved = localStorage.getItem('alhaq_completed_sessions');
    if (saved) {
      setCompletedSessions(JSON.parse(saved));
    }
  }, []);

  const toggleSessionComplete = (id: number, meetingIdx: number) => {
    const sessionId = meetingIdx * 100 + id; // Unique ID
    let updated;
    if (completedSessions.includes(sessionId)) {
      updated = completedSessions.filter(item => item !== sessionId);
    } else {
      updated = [...completedSessions, sessionId];
    }
    setCompletedSessions(updated);
    localStorage.setItem('alhaq_completed_sessions', JSON.stringify(updated));
  };

  const currentMeeting = MANASIK_SCHEDULES[activeTab];

  // Filter items based on search term
  const filteredItems = currentMeeting.items.filter((item: ScheduleItem) => {
    const matchSearch = 
      item.sesiKegiatan.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.topikDetail.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.pjNarasumber.toLowerCase().includes(searchTerm.toLowerCase());
    return matchSearch;
  });

  // Calculate progress for current meeting
  const currentMeetingSessionIds = currentMeeting.items.map(item => activeTab * 100 + item.no);
  const completedCurrentMeetingCount = currentMeetingSessionIds.filter(id => completedSessions.includes(id)).length;
  const progressPercent = Math.round((completedCurrentMeetingCount / currentMeeting.items.length) * 100);

  return (
    <section id="manasik-schedule" className="relative py-24 bg-navy-ultra overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-gold/5 via-transparent to-transparent pointer-events-none" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1C2738]/50 border border-rose-gold/20 text-rose-gold text-xs font-semibold uppercase tracking-wider mb-4">
            <Calendar className="w-3.5 h-3.5 text-rose-gold" /> Agenda Manasik Aktual
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-white tracking-tight">
            Jadwal Bimbingan <span className="text-rose-gold italic font-normal">Manasik Umrah</span>
          </h2>
          <p className="text-slate-400 font-sans mt-3 text-sm">
            Halaman interaktif bimbingan manasik teori dan simulasi praktik lapangan langsung. Selesaikan bimbingan secara mandiri.
          </p>
        </div>

        {/* Tab Selector & Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Tabs */}
          <div className="flex p-1 bg-[#0D1021] rounded-xl border border-[#9A7E75]/20 w-full md:w-auto">
            {MANASIK_SCHEDULES.map((meeting, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveTab(idx);
                  setSearchTerm('');
                }}
                className={`flex-1 md:flex-none px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === idx
                    ? 'bg-rose-gold text-navy-ultra shadow-lg font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {meeting.title} ({meeting.date.split(',')[1]?.trim() || meeting.date})
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Cari sesi manasik..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0D1021] border border-[#9A7E75]/20 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-rose-gold"
            />
          </div>
        </div>

        {/* Dynamic Learning Progress Card */}
        <div className="p-4 rounded-xl bg-[#0D1021]/50 border border-[#9A7E75]/15 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-slate-200">Progress Pembelajaran Manasik Anda ({currentMeeting.title})</h4>
            <p className="text-xs text-slate-400 mt-0.5">Tandai setiap sesi yang telah Anda ikuti untuk memantau pemahaman.</p>
          </div>
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="flex-1 sm:w-40 bg-[#1C2738] h-2 rounded-full overflow-hidden border border-white/5">
              <div 
                className="bg-gradient-to-r from-rose-gold to-gold-accent h-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="text-xs font-mono font-bold text-rose-gold whitespace-nowrap">{completedCurrentMeetingCount} / {currentMeeting.items.length} Sesi ({progressPercent}%)</span>
          </div>
        </div>

        {/* GOLD GRADIENT BUBBLE CONTAINER */}
        <div className="bg-gradient-to-br from-[#F5D6C6] via-[#C4A493] to-[#8C6B61] rounded-2xl border border-rose-gold/30 shadow-[0_20px_50px_rgba(196,164,147,0.25)] overflow-hidden p-6 sm:p-8 text-slate-950">
          
          {/* Table Header inside gold background */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-black/10 pb-6 mb-6 gap-3">
            <div>
              <h3 className="text-xl font-serif font-bold text-slate-950 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-navy-ultra rounded-full" />
                {currentMeeting.title} — {currentMeeting.date}
              </h3>
              <p className="text-xs text-slate-900 mt-1 flex items-center gap-1 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#4a3025]" />
                Lokasi Bimbingan: <strong className="text-slate-950 font-bold">{currentMeeting.items[0]?.tempat || 'Pusat Al-Haq'}</strong>
              </p>
            </div>
            
            <div className="text-[10px] font-bold text-white font-sans uppercase bg-navy-ultra px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-rose-gold" />
              Sesi Wajib Jamaah
            </div>
          </div>

          {/* Table for Large Screens / Flex List for Mobile */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-black/15 text-slate-950 font-display text-xs font-extrabold uppercase tracking-wider text-left">
                  <th className="py-3 px-4 w-12 text-center">No.</th>
                  <th className="py-3 px-4 w-32">Waktu</th>
                  <th className="py-3 px-4 w-48">Sesi Kegiatan</th>
                  <th className="py-3 px-4">Topik / Detail Pembahasan</th>
                  <th className="py-3 px-4 w-40">PJ / Narasumber</th>
                  <th className="py-3 px-4 w-28 text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.map((item, idx) => {
                  const isDone = completedSessions.includes(activeTab * 100 + item.no);
                  return (
                    <tr 
                      key={idx} 
                      className={`border-b border-black/5 hover:bg-white/15 transition-all text-sm text-slate-900 ${
                        isDone ? 'bg-black/5 text-slate-700 line-through decoration-black/20' : ''
                      }`}
                    >
                      <td className="py-4 px-4 font-mono font-bold text-center text-slate-950">{item.no}</td>
                      <td className="py-4 px-4 font-semibold text-slate-950">
                        <span className="inline-flex items-center gap-1 text-[13px]">
                          <Clock className="w-3.5 h-3.5 text-[#4a3025]" /> {item.waktu}
                        </span>
                      </td>
                      <td className="py-4 px-4 font-extrabold text-slate-950">
                        {item.sesiKegiatan}
                      </td>
                      <td className="py-4 px-4 text-xs sm:text-sm leading-relaxed text-slate-900 font-medium">
                        {item.topikDetail || "-"}
                      </td>
                      <td className="py-4 px-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-navy-ultra/10 border border-navy-ultra/15 text-navy-ultra font-bold text-xs">
                          <UserCheck className="w-3 h-3 text-navy-ultra" /> {item.pjNarasumber}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <button
                          id={`btn-complete-session-${activeTab}-${item.no}`}
                          onClick={() => toggleSessionComplete(item.no, activeTab)}
                          className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                            isDone 
                              ? 'bg-emerald-600 border-emerald-700 text-white' 
                              : 'bg-white border-[#4a3025]/40 text-[#4a3025] hover:bg-white'
                          }`}
                          title={isDone ? 'Tandai belum selesai' : 'Tandai selesai'}
                        >
                          <CheckCircle className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })}

                {filteredItems.length === 0 && (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-slate-950 font-sans font-bold">
                      Tidak ditemukan agenda manasik yang cocok dengan pencarian Anda.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Mobile responsive schedule list */}
          <div className="lg:hidden space-y-4">
            {filteredItems.map((item, idx) => {
              const isDone = completedSessions.includes(activeTab * 100 + item.no);
              return (
                <div 
                  key={idx} 
                  className={`p-4 rounded-xl border transition-all ${
                    isDone 
                      ? 'bg-emerald-600/15 border-emerald-500/20 opacity-80 line-through decoration-black/20' 
                      : 'bg-white/40 border-white/35 backdrop-blur-sm shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-6 h-6 rounded-full bg-navy-ultra text-white font-mono font-bold text-xs flex items-center justify-center">
                      {item.no}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#4a3025] flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {item.waktu}
                    </span>
                    <button
                      id={`btn-complete-session-mob-${activeTab}-${item.no}`}
                      onClick={() => toggleSessionComplete(item.no, activeTab)}
                      className={`p-1 rounded-md border cursor-pointer ${
                        isDone 
                          ? 'bg-emerald-600 border-emerald-700 text-white' 
                          : 'bg-white/80 border-[#4a3025]/40 text-[#4a3025]'
                      }`}
                    >
                      <CheckCircle className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <h4 className="text-sm font-bold text-slate-950 mb-1">{item.sesiKegiatan}</h4>
                  
                  <p className="text-xs text-slate-900 font-medium leading-relaxed mb-3">
                    {item.topikDetail || "-"}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-black/10 text-[11px] text-slate-900">
                    <span className="flex items-center gap-1 font-semibold">
                      <MapPin className="w-3 h-3 text-[#4a3025]" /> {item.tempat}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-navy-ultra/10 text-navy-ultra font-bold">
                      PJ: {item.pjNarasumber}
                    </span>
                  </div>
                </div>
              );
            })}

            {filteredItems.length === 0 && (
              <div className="py-8 text-center text-slate-950 font-bold text-xs">
                Tidak ditemukan agenda manasik yang cocok dengan pencarian Anda.
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
