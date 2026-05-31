import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Star, Calendar, MapPin, Heart, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { KISAH_NABI, Nabi } from '../data/kisahNabi';
import BackgroundDecorations from '../components/BackgroundDecorations';

const COLOR_MAP: Record<string, { bg: string; light: string; text: string; border: string; btn: string; btnBorder: string }> = {
  emerald: { bg: 'from-emerald-400 to-emerald-600', light: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', btn: 'bg-emerald-500 hover:bg-emerald-600', btnBorder: 'border-emerald-700' },
  blue:    { bg: 'from-blue-400 to-blue-600',       light: 'bg-blue-50',    text: 'text-blue-700',    border: 'border-blue-200',    btn: 'bg-blue-500 hover:bg-blue-600',       btnBorder: 'border-blue-700' },
  cyan:    { bg: 'from-cyan-400 to-cyan-600',       light: 'bg-cyan-50',    text: 'text-cyan-700',    border: 'border-cyan-200',    btn: 'bg-cyan-500 hover:bg-cyan-600',       btnBorder: 'border-cyan-700' },
  orange:  { bg: 'from-orange-400 to-orange-600',   light: 'bg-orange-50',  text: 'text-orange-700',  border: 'border-orange-200',  btn: 'bg-orange-500 hover:bg-orange-600',   btnBorder: 'border-orange-700' },
  stone:   { bg: 'from-stone-400 to-stone-600',     light: 'bg-stone-50',   text: 'text-stone-700',   border: 'border-stone-200',   btn: 'bg-stone-500 hover:bg-stone-600',     btnBorder: 'border-stone-700' },
  red:     { bg: 'from-red-400 to-red-600',         light: 'bg-red-50',     text: 'text-red-700',     border: 'border-red-200',     btn: 'bg-red-500 hover:bg-red-600',         btnBorder: 'border-red-700' },
  purple:  { bg: 'from-purple-400 to-purple-600',   light: 'bg-purple-50',  text: 'text-purple-700',  border: 'border-purple-200',  btn: 'bg-purple-500 hover:bg-purple-600',   btnBorder: 'border-purple-700' },
  amber:   { bg: 'from-amber-400 to-amber-600',     light: 'bg-amber-50',   text: 'text-amber-700',   border: 'border-amber-200',   btn: 'bg-amber-500 hover:bg-amber-600',     btnBorder: 'border-amber-700' },
  teal:    { bg: 'from-teal-400 to-teal-600',       light: 'bg-teal-50',    text: 'text-teal-700',    border: 'border-teal-200',    btn: 'bg-teal-500 hover:bg-teal-600',       btnBorder: 'border-teal-700' },
  indigo:  { bg: 'from-indigo-400 to-indigo-600',   light: 'bg-indigo-50',  text: 'text-indigo-700',  border: 'border-indigo-200',  btn: 'bg-indigo-500 hover:bg-indigo-600',   btnBorder: 'border-indigo-700' },
  sky:     { bg: 'from-sky-400 to-sky-600',         light: 'bg-sky-50',     text: 'text-sky-700',     border: 'border-sky-200',     btn: 'bg-sky-500 hover:bg-sky-600',         btnBorder: 'border-sky-700' },
  fuchsia: { bg: 'from-fuchsia-400 to-fuchsia-600', light: 'bg-fuchsia-50', text: 'text-fuchsia-700', border: 'border-fuchsia-200', btn: 'bg-fuchsia-500 hover:bg-fuchsia-600', btnBorder: 'border-fuchsia-700' },
  lime:    { bg: 'from-lime-400 to-lime-600',       light: 'bg-lime-50',    text: 'text-lime-700',    border: 'border-lime-200',    btn: 'bg-lime-500 hover:bg-lime-600',       btnBorder: 'border-lime-700' },
  yellow:  { bg: 'from-yellow-400 to-yellow-500',   light: 'bg-yellow-50',  text: 'text-yellow-700',  border: 'border-yellow-200',  btn: 'bg-yellow-400 hover:bg-yellow-500',   btnBorder: 'border-yellow-600' },
  rose:    { bg: 'from-rose-400 to-rose-600',       light: 'bg-rose-50',    text: 'text-rose-700',    border: 'border-rose-200',    btn: 'bg-rose-500 hover:bg-rose-600',       btnBorder: 'border-rose-700' },
};
const getColor = (c: string) => COLOR_MAP[c] ?? COLOR_MAP['sky'];

export default function StoryPage() {
  const navigate = useNavigate();
  const [selectedStory, setSelectedStory] = useState<Nabi | null>(null);
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const openStory = (story: Nabi) => {
    setSelectedStory(story);
    setPage(0);
  };

  const closeStory = () => {
    setSelectedStory(null);
    setPage(0);
  };

  const goNext = (total: number) => {
    setDirection(1);
    setPage(p => Math.min(total - 1, p + 1));
  };

  const goPrev = () => {
    setDirection(-1);
    setPage(p => Math.max(0, p - 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-indigo-50 flex flex-col font-sans overflow-x-hidden relative">
      <BackgroundDecorations />

      {/* Header */}
      <div className="bg-white/80 backdrop-blur border-b-4 border-sky-200 sticky top-0 z-30">
        <div className="max-w-5xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
          <button
            onClick={() => selectedStory ? closeStory() : navigate('/')}
            className="flex items-center gap-2 text-sky-700 bg-sky-100 hover:bg-sky-200 px-4 py-2 rounded-full font-bold transition-all shadow-sm border-b-4 border-sky-300 active:border-b-0 active:translate-y-0.5 text-sm md:text-base"
          >
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
            <span>{selectedStory ? 'Daftar Nabi' : 'Kembali'}</span>
          </button>
          <div className="flex items-center gap-2 text-sky-600 font-black text-lg md:text-xl" style={{ fontFamily: '"Nunito", "Comic Sans MS", sans-serif' }}>
            <BookOpen className="w-6 h-6 text-sky-400" />
            <span>Kisah Para Nabi</span>
          </div>
        </div>
      </div>

      <main className="flex-grow max-w-5xl mx-auto w-full px-4 md:px-8 py-6 relative z-10">

        {/* ── STORY LIST ── */}
        {!selectedStory && (
          <>
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow border-2 border-sky-100 mb-4">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span className="font-black text-sky-700 text-lg">25 Kisah Nabi &amp; Rasul</span>
                <Sparkles className="w-5 h-5 text-amber-400" />
              </div>
              <p className="text-sky-600 font-semibold text-base md:text-lg">Pilih nabi yang ingin kamu baca kisahnya!</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {KISAH_NABI.map((story, idx) => {
                const c = getColor(story.themeColor);
                return (
                  <motion.button
                    key={story.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (idx % 12) * 0.04, type: 'spring', stiffness: 200 }}
                    whileHover={{ y: -6, scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => openStory(story)}
                    className="bg-white rounded-3xl shadow-md border-2 border-gray-100 overflow-hidden flex flex-col text-left group focus:outline-none focus:ring-4 focus:ring-sky-300"
                  >
                    {/* Card illustration area */}
                    <div className={`w-full h-28 md:h-36 bg-gradient-to-br ${c.bg} flex items-center justify-center relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-white/10"></div>
                      <BookOpen className="w-12 h-12 md:w-16 md:h-16 text-white/90 drop-shadow" />
                      <span className="absolute bottom-1 right-3 text-5xl font-bold text-white/20 select-none leading-none">{story.name.charAt(0)}</span>
                    </div>
                    {/* Card info */}
                    <div className="p-3 md:p-4 flex flex-col gap-1 flex-grow">
                      <p className="font-black text-gray-800 text-base md:text-lg leading-tight" style={{ fontFamily: '"Nunito", "Comic Sans MS", sans-serif' }}>
                        Nabi {story.name}
                      </p>
                      <p className={`text-xs font-semibold ${c.text} flex items-center gap-1`}>
                        <MapPin className="w-3 h-3 shrink-0" />{story.tmp}
                      </p>
                      <p className={`mt-2 text-xs font-bold ${c.text} ${c.light} px-2 py-1 rounded-full w-fit`}>
                        Baca Kisah →
                      </p>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </>
        )}

        {/* ── STORY READER ── */}
        {selectedStory && (() => {
          const c = getColor(selectedStory.themeColor);
          const paragraphs = selectedStory.description.split('\n').filter(p => p.trim());
          const totalPages = paragraphs.length + 1; // 0 = cover, 1..n = paragraf

          return (
            <div className="flex flex-col items-center gap-6">

              {/* Progress bar */}
              <div className="w-full max-w-2xl">
                <div className="flex justify-between text-xs font-bold text-sky-500 mb-1">
                  <span>Halaman {page + 1} dari {totalPages}</span>
                  <span>{Math.round(((page + 1) / totalPages) * 100)}%</span>
                </div>
                <div className="w-full h-3 bg-white rounded-full border-2 border-sky-100 overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${c.bg} rounded-full`}
                    animate={{ width: `${((page + 1) / totalPages) * 100}%` }}
                    transition={{ type: 'spring', stiffness: 120 }}
                  />
                </div>
              </div>

              {/* Story card */}
              <div className="w-full max-w-2xl">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={page}
                    custom={direction}
                    initial={{ opacity: 0, x: direction * 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction * -60 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 28 }}
                    className="bg-white rounded-[2rem] shadow-xl border-2 border-gray-100 overflow-hidden"
                  >
                    {page === 0 ? (
                      /* ── COVER PAGE ── */
                      <div className="flex flex-col">
                        {/* Hero banner */}
                        <div className={`w-full h-52 md:h-72 bg-gradient-to-br ${c.bg} flex flex-col items-center justify-center relative overflow-hidden`}>
                          <div className="absolute inset-0 opacity-20"
                            style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }}
                          />
                          <motion.div
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                          >
                            <BookOpen className="w-20 h-20 md:w-28 md:h-28 text-white drop-shadow-xl" />
                          </motion.div>
                          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white/30 to-transparent" />
                        </div>

                        {/* Cover info */}
                        <div className="p-6 md:p-8 flex flex-col gap-5">
                          <div className="text-center">
                            <p className={`text-sm font-bold uppercase tracking-widest ${c.text} mb-1`}>Kisah Nabi</p>
                            <h2 className="text-4xl md:text-5xl font-black text-gray-800 leading-tight" style={{ fontFamily: '"Nunito", "Comic Sans MS", sans-serif' }}>
                              {selectedStory.name}
                            </h2>
                          </div>

                          <div className={`flex gap-3 ${c.light} rounded-2xl p-4 border-2 ${c.border}`}>
                            <div className="flex-1 flex items-center gap-2">
                              <MapPin className={`w-5 h-5 ${c.text} shrink-0`} />
                              <div>
                                <p className="text-xs text-gray-400 font-semibold">Diutus di</p>
                                <p className="font-black text-gray-700 text-sm md:text-base">{selectedStory.tmp}</p>
                              </div>
                            </div>
                            <div className="w-px bg-gray-200" />
                            <div className="flex-1 flex items-center gap-2">
                              <Calendar className="w-5 h-5 text-amber-500 shrink-0" />
                              <div>
                                <p className="text-xs text-gray-400 font-semibold">Usia</p>
                                <p className="font-black text-gray-700 text-sm md:text-base">{selectedStory.usia} Tahun</p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-pink-50 border-2 border-pink-200 rounded-2xl p-4 flex gap-3 items-start">
                            <Heart className="w-5 h-5 text-pink-500 fill-pink-400 shrink-0 mt-0.5" />
                            <div>
                              <p className="text-xs font-bold text-pink-500 uppercase tracking-wide mb-1">Hikmah Cerita</p>
                              <p className="text-gray-700 font-semibold text-sm md:text-base leading-relaxed">{selectedStory.hikmah}</p>
                            </div>
                          </div>

                          <div className="flex justify-center">
                            <div className="flex gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-300" />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* ── TEXT PAGE ── */
                      <div className="flex flex-col">
                        {/* Page header strip */}
                        <div className={`w-full px-6 py-3 bg-gradient-to-r ${c.bg} flex items-center justify-between`}>
                          <p className="text-white/80 text-xs font-bold uppercase tracking-widest">Nabi {selectedStory.name}</p>
                          <div className="flex gap-1">
                            {[...Array(3)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 text-white/60 fill-white/40" />
                            ))}
                          </div>
                        </div>

                        {/* Text content */}
                        <div className="px-6 md:px-10 py-6 md:py-8">
                          <p
                            className="text-gray-700 text-[1.1rem] md:text-[1.2rem] leading-[1.75] md:leading-[1.8] font-normal tracking-[0.01em] text-left mx-auto"
                            style={{
                              fontFamily: '"Nunito", "Segoe UI", system-ui, sans-serif',
                              wordSpacing: '0.04em',
                              maxWidth: '60ch',
                            }}
                          >
                            {paragraphs[page - 1]}
                          </p>
                        </div>

                        {/* Page footer */}
                        <div className={`mx-6 mb-6 pt-4 border-t-2 ${c.border} flex justify-between items-center`}>
                          <p className="text-xs text-gray-400 font-semibold">Halaman {page} dari {totalPages - 1}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation buttons */}
              <div className="w-full max-w-2xl flex items-center justify-between gap-3">
                <motion.button
                  whileTap={{ scale: 0.93 }}
                  onClick={goPrev}
                  disabled={page === 0}
                  className="flex items-center gap-2 bg-white border-2 border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed px-5 py-3 rounded-2xl font-bold text-base shadow transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span className="hidden sm:inline">Sebelumnya</span>
                </motion.button>

                {/* Dot indicators */}
                <div className="flex gap-1.5 flex-wrap justify-center max-w-[200px]">
                  {Array.from({ length: Math.min(totalPages, 10) }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => { setDirection(i > page ? 1 : -1); setPage(i); }}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${i === page ? `bg-gradient-to-br ${c.bg} scale-125` : 'bg-gray-200 hover:bg-gray-300'}`}
                    />
                  ))}
                  {totalPages > 10 && <span className="text-xs text-gray-400 font-bold self-center">+{totalPages - 10}</span>}
                </div>

                <motion.button
                  whileTap={{ scale: 0.93 }}
                  onClick={() => goNext(totalPages)}
                  disabled={page >= totalPages - 1}
                  className={`flex items-center gap-2 ${c.btn} text-white disabled:opacity-40 disabled:cursor-not-allowed px-5 py-3 rounded-2xl font-bold text-base shadow-lg border-b-4 ${c.btnBorder} active:border-b-0 active:translate-y-0.5 transition-all`}
                >
                  <span className="hidden sm:inline">Selanjutnya</span>
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>

            </div>
          );
        })()}
      </main>
    </div>
  );
}
