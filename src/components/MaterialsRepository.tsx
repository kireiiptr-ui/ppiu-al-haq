import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Play, CheckSquare, Shield, Download, Check, Sparkles } from 'lucide-react';
import { MATERIAL_RESOURCES } from '../data';
import { MaterialResource } from '../types';

export default function MaterialsRepository() {
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const handleDownload = (resource: MaterialResource) => {
    setDownloadingId(resource.id);
    setTimeout(() => {
      setDownloadingId(null);
      setDownloadSuccess(resource.title);
      setTimeout(() => {
        setDownloadSuccess(null);
      }, 3000);
    }, 1500);
  };

  // Helper icons mapping
  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <FileText className="w-5 h-5 text-red-400" />;
      case 'video':
        return <Play className="w-5 h-5 text-indigo-400 fill-indigo-400/20" />;
      case 'checklist':
        return <CheckSquare className="w-5 h-5 text-emerald-400" />;
      default:
        return <Shield className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="materials" className="relative py-24 bg-gradient-to-b from-navy-dark to-navy-ultra overflow-hidden border-t border-slate-900">
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-gold/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1C2738]/50 border border-rose-gold/20 text-rose-gold text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-rose-gold" /> Repository Pembelajaran
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-white tracking-tight">
            Pusat Unduhan <span className="text-rose-gold italic font-normal">Materi Jamaah</span>
          </h2>
          <p className="text-slate-400 font-sans mt-3 text-sm">
            Unduh seluruh modul fiqih, video panduan, dan format formulir administratif penting untuk dipelajari di rumah.
          </p>
        </div>

        {/* DIGITAL RESOURCES LIST */}
        <div className="space-y-4">
          <h3 className="text-lg font-serif font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-1.5 h-5 bg-rose-gold rounded-full" /> Modul & Sumber Daya Digital
          </h3>

          {/* Notification Toast simulation */}
          <AnimatePresence>
            {downloadSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3 text-emerald-400 text-xs font-medium"
              >
                <Check className="w-4 h-4 flex-shrink-0" />
                <span>Materi <strong>{downloadSuccess}</strong> berhasil diunduh ke perangkat Anda!</span>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="grid grid-cols-1 gap-4">
            {MATERIAL_RESOURCES.map((res) => (
              <div 
                key={res.id}
                className="p-5 rounded-2xl bg-[#0D1021] border border-[#9A7E75]/20 hover:border-rose-gold/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-xl bg-[#1C2738] border border-white/5 group-hover:border-rose-gold/20 transition-colors flex-shrink-0">
                    {getResourceIcon(res.type)}
                  </div>
                  <div>
                    <h4 className="text-sm font-serif font-bold text-slate-100 group-hover:text-rose-gold transition-colors">{res.title}</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed max-w-md">{res.description}</p>
                    <span className="inline-block mt-2 text-[10px] font-mono font-bold text-rose-gold bg-[#9A7E75]/10 px-2 py-0.5 rounded border border-[#9A7E75]/20">
                      {res.sizeOrDuration}
                    </span>
                  </div>
                </div>

                <button
                  id={`btn-dl-res-${res.id}`}
                  onClick={() => handleDownload(res)}
                  disabled={downloadingId !== null}
                  className="sm:self-center px-4 py-2.5 rounded-lg bg-navy-dark border border-slate-700 group-hover:border-rose-gold/50 text-slate-300 hover:text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all w-full sm:w-auto cursor-pointer"
                >
                  {downloadingId === res.id ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-slate-400 border-t-white rounded-full animate-spin" />
                      <span>Mengunduh...</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5 text-rose-gold" />
                      <span>Unduh File</span>
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
