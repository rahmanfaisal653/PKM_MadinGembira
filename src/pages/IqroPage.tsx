import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Sparkles, Smile, Search, Bookmark, ChevronLeft, ChevronRight, Save, Star, PlayCircle, Music, Star as StarIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { IQRO_DATA, IqroItem } from '../data/iqroData';
import BackgroundDecorations from '../components/BackgroundDecorations';
import { HIJAIYAH_LETTERS } from '../lib/constants';

export default function IqroPage() {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'hijaiyah' | 'iqro'>('hijaiyah');
  const [jilid, setJilid] = useState('1');
  const [page, setPage] = useState(1);
  const [searchPage, setSearchPage] = useState('');
  const [bookmarkSaved, setBookmarkSaved] = useState(false);
  const [bookmark, setBookmark] = useState<{ jilid: string, page: number } | null>(null);
  const [showBookmarkModal, setShowBookmarkModal] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('iqro_bookmark');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.jilid && parsed.page) {
          setBookmark({ jilid: String(parsed.jilid), page: Number(parsed.page) });
        }
      } catch (e) {}
    }
  }, []);

  const handleSaveBookmark = () => {
    const newBookmark = { jilid, page };
    localStorage.setItem('iqro_bookmark', JSON.stringify(newBookmark));
    setBookmark(newBookmark);
    setBookmarkSaved(true);
    setTimeout(() => setBookmarkSaved(false), 2000);
  };

  const openBookmark = () => {
    if (bookmark) {
      setShowBookmarkModal(true);
    } else {
      alert("Belum ada bookmark yang tersimpan, yuk tandai halaman dulu!");
    }
  };

  const goToBookmark = () => {
    if (bookmark) {
      setJilid(bookmark.jilid);
      setPage(bookmark.page);
      setShowBookmarkModal(false);
      setTimeout(() => {
        window.scrollTo({ top: 300, behavior: 'smooth' });
      }, 100);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const p = parseInt(searchPage);
    if (!isNaN(p) && p >= 1 && p <= 20) {
      setPage(p);
      setSearchPage('');
    } else {
      alert("Halaman tidak ditemukan. Jilid Iqro memiliki halaman 1-20.");
    }
  };

  const nextPage = () => {
    if (page < 20) setPage(p => p + 1);
  };

  const prevPage = () => {
    if (page > 1) setPage(p => p - 1);
  };

  const currentPageData = IQRO_DATA.find(d => d.jilid === jilid && d.halaman === page);
  const isBookmarked = bookmark?.jilid === jilid && bookmark?.page === page;

  return (
    <div className="min-h-screen bg-emerald-50 flex flex-col font-sans overflow-x-hidden relative">
      <BackgroundDecorations />
      
      <div className="bg-white border-b-4 border-emerald-200 sticky top-0 z-30">
        <div className="max-w-4xl mx-auto px-4 h-20 flex items-center justify-between">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-emerald-700 bg-emerald-100 hover:bg-emerald-200 px-4 py-2 hover:-translate-y-1 rounded-full font-bold transition-all shadow-sm border-b-4 border-emerald-300 active:border-b-0 active:translate-y-1"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden md:inline">Beranda</span>
          </button>
          
          <div className="flex items-center gap-2 overflow-x-auto py-2 px-1 pb-3 scroll-smooth">
            <button
              onClick={() => setViewMode('hijaiyah')}
              className={`px-4 h-10 shrink-0 rounded-full font-bold text-sm transition-all flex items-center justify-center border-4 ${
                viewMode === 'hijaiyah'
                  ? 'bg-purple-400 text-white border-purple-500 shadow-md scale-105'
                  : 'bg-purple-50 text-purple-600 border-purple-100 hover:bg-purple-100'
              }`}
            >
              Hijaiyah
            </button>
            <div className="w-px h-6 bg-emerald-200 mx-1"></div>
            {['1','2','3','4','5','6'].map(j => (
              <button
                key={j}
                onClick={() => { setViewMode('iqro'); setJilid(j); setPage(1); }}
                className={`w-10 h-10 shrink-0 rounded-full font-black text-lg transition-all flex items-center justify-center border-4 ${
                  viewMode === 'iqro' && jilid === j
                    ? 'bg-emerald-400 text-white border-emerald-500 shadow-md scale-110'
                    : 'bg-emerald-50 text-emerald-600 border-emerald-200 border-b-4 hover:bg-emerald-100 hover:-translate-y-1 active:translate-y-0 active:border-b-4'
                }`}
              >
                {j}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="flex-grow max-w-5xl mx-auto w-full p-4 md:p-6 lg:py-8 relative z-10 flex flex-col items-center">
        
        {viewMode === 'hijaiyah' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full flex flex-col items-center"
          >
            <div className="text-center mb-8 px-4 relative">
              <div className="absolute top-0 right-[20%] text-amber-300 opacity-60">
                <StarIcon className="w-12 h-12 stroke-[2] animate-bounce" />
              </div>
              <div className="inline-flex items-center justify-center bg-purple-100 p-4 rounded-full text-purple-600 mb-4 border-4 border-purple-200 shadow-sm mx-auto">
                <Sparkles className="w-10 h-10 animate-pulse" />
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-purple-700 mb-3 tracking-tight drop-shadow-sm relative z-10" style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}>
                Mengenal Huruf Hijaiyah
              </h1>
              <p className="text-lg text-purple-800/80 font-medium">Ayo kita belajar membaca huruf Al-Qur'an!</p>
            </div>

            <div className="bg-white rounded-[3rem] shadow-2xl border-[6px] border-purple-200 p-6 md:p-10 w-full mb-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-bl-full -z-10 opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-100 rounded-tr-full -z-10 opacity-50"></div>
              
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6" dir="rtl">
                {HIJAIYAH_LETTERS.map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.1, rotate: [-2, 2, -2, 0] }}
                    whileTap={{ scale: 0.95 }}
                    className={`aspect-square rounded-2xl md:rounded-3xl flex flex-col items-center justify-center p-2 md:p-3 text-white shadow-lg cursor-pointer transform transition-transform ${item.color} border-b-4 md:border-b-8 active:border-b-0 active:translate-y-2 relative`}
                  >
                    <span className="text-4xl sm:text-5xl md:text-6xl font-arabic font-bold drop-shadow-md pb-1">{item.letter}</span>
                    <span className="bg-white/30 px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs sm:text-sm md:text-base font-bold tracking-wide backdrop-blur-sm mt-1 md:mt-2" dir="ltr">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <button
              onClick={() => { setViewMode('iqro'); setJilid('1'); setPage(1); }}
              className="group flex items-center gap-3 bg-emerald-400 hover:bg-emerald-500 text-white px-8 py-4 rounded-full font-black text-xl md:text-2xl transition-all border-4 border-emerald-500 hover:border-emerald-600 shadow-xl hover:shadow-2xl hover:-translate-y-2"
            >
              <BookOpen className="w-8 h-8 group-hover:rotate-12 transition-transform" />
              <span>Mulai Belajar Iqro</span>
              <ArrowLeft className="w-8 h-8 rotate-180 group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        )}

        {viewMode === 'iqro' && (
          <>
            {/* Helper Toolbar */}
        <div className="w-full flex-wrap flex justify-between items-center bg-white p-4 rounded-[1.5rem] border-4 border-emerald-100 mb-6 gap-4 shadow-sm relative z-20">
          <form onSubmit={handleSearch} className="flex gap-2 w-full md:w-auto relative z-20">
            <div className="relative flex-1 min-w-[160px]">
              <Search className="w-4 h-4 text-emerald-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="number" 
                value={searchPage}
                onChange={e => setSearchPage(e.target.value)}
                placeholder="Hal. (1-20)"
                className="w-full bg-emerald-50 border-2 border-emerald-200 rounded-full pl-9 pr-3 py-2 text-sm font-bold text-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 z-20 relative pointer-events-auto placeholder:text-emerald-500/60"
                min="1" max="20"
              />
            </div>
            <button type="submit" className="bg-emerald-400 text-white px-4 py-2 rounded-full text-sm font-bold shadow-sm relative z-20 pointer-events-auto whitespace-nowrap">Cari</button>
          </form>

          <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto mt-4 md:mt-0 z-20 pointer-events-auto">
            <button 
              onClick={openBookmark}
              className="flex items-center gap-2 bg-emerald-100 hover:bg-emerald-200 text-emerald-700 px-3 md:px-4 py-2 rounded-full font-bold transition-all border-2 border-emerald-200 justify-center flex-1 text-sm md:text-base"
            >
              <Bookmark className="w-5 h-5" />
              <span>Buka Bookmark</span>
            </button>
            <button 
              onClick={handleSaveBookmark}
              className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-full font-bold transition-all border-2 justify-center flex-1 text-sm md:text-base ${
                isBookmarked 
                  ? 'bg-amber-400 text-white border-amber-500 shadow-inner' 
                  : 'bg-amber-100 hover:bg-amber-200 text-amber-600 border-amber-200 shadow-sm'
              }`}
            >
              {bookmarkSaved ? <Save className="w-5 h-5" /> : (
                <Star className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
              )}
              <span>{isBookmarked && !bookmarkSaved ? 'Ditandai' : bookmarkSaved ? 'Tersimpan!' : 'Tandai'}</span>
            </button>
          </div>
        </div>

        {/* Book Container */}
        <div className="w-full relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${jilid}-${page}`}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="w-full rounded-2xl shadow-2xl overflow-hidden"
              style={{ background: '#FFFEF5', border: '2px solid #d4c9a0' }}
            >
              {/* Book header — mirip header halaman Iqro asli */}
              <div className="flex items-center justify-between px-6 md:px-10 py-3 border-b-2" style={{ borderColor: '#d4c9a0', background: '#F5F0DC' }}>
                <span className="font-black text-sm md:text-base tracking-widest uppercase" style={{ color: '#5a4a1a', fontFamily: 'Nunito, sans-serif' }}>
                  IQRO&apos; {jilid}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-xs md:text-sm font-bold" style={{ color: '#8a7a3a' }}>Halaman</span>
                  <span className="w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center font-black text-sm md:text-base" style={{ background: '#5a4a1a', color: '#FFFEF5' }}>
                    {page}
                  </span>
                </div>
              </div>

              {/* Content area */}
              <div className="px-4 md:px-10 py-6 md:py-8 min-h-[55vh] flex flex-col justify-center">
                {currentPageData && (
                  <div className="w-full flex flex-col gap-0" dir="rtl">
                    {currentPageData.content.split('\n\n').filter(r => r.trim()).map((row, idx, arr) => (
                      <div
                        key={idx}
                        className="flex justify-around items-center w-full py-3 md:py-4"
                        style={{ borderBottom: idx < arr.length - 1 ? '1px solid #e8e0c0' : 'none' }}
                      >
                        {row.split('      ').map((word, wIdx) => (
                          <span
                            key={wIdx}
                            className="flex-1 text-center"
                            style={{
                              fontFamily: '"Amiri", "Traditional Arabic", serif',
                              fontSize: 'clamp(1.6rem, 4vw, 2.8rem)',
                              lineHeight: '1.6',
                              color: '#1a1a1a',
                              fontWeight: 700,
                              letterSpacing: '0.02em',
                            }}
                          >
                            {word}
                          </span>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Book footer */}
              <div className="flex items-center justify-between px-6 md:px-10 py-3 border-t-2" style={{ borderColor: '#d4c9a0', background: '#F5F0DC' }}>
                {/* Progress dots */}
                <div className="flex gap-1">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setPage(i + 1)}
                      className="rounded-full transition-all"
                      style={{
                        width: i + 1 === page ? '20px' : '8px',
                        height: '8px',
                        background: i + 1 === page ? '#5a4a1a' : i + 1 < page ? '#a89050' : '#d4c9a0',
                      }}
                    />
                  ))}
                </div>
                <span className="text-xs font-bold" style={{ color: '#8a7a3a' }}>{page} / 20</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Side navigation arrows — desktop */}
          <button
            onClick={prevPage}
            disabled={page === 1}
            className="absolute top-1/2 -translate-y-1/2 -left-5 md:-left-14 hidden sm:flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full shadow-lg transition-all disabled:opacity-0"
            style={{ background: '#5a4a1a', color: '#FFFEF5' }}
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={nextPage}
            disabled={page === 20}
            className="absolute top-1/2 -translate-y-1/2 -right-5 md:-right-14 hidden sm:flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full shadow-lg transition-all disabled:opacity-0"
            style={{ background: '#5a4a1a', color: '#FFFEF5' }}
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Mobile navigation */}
        <div className="mt-5 flex gap-3 sm:hidden w-full pb-4">
          <button onClick={prevPage} disabled={page === 1} className="flex-1 py-3 rounded-2xl font-bold text-sm border-2 disabled:opacity-40 transition-all" style={{ background: '#F5F0DC', color: '#5a4a1a', borderColor: '#d4c9a0' }}>← Sebelumnya</button>
          <button onClick={nextPage} disabled={page === 20} className="flex-1 py-3 rounded-2xl font-bold text-sm border-2 disabled:opacity-40 transition-all" style={{ background: '#5a4a1a', color: '#FFFEF5', borderColor: '#3a2a0a' }}>Berikutnya →</button>
        </div>
          </>
        )}
      </main>

      {/* Bookmark Modal */}
      <AnimatePresence>
        {showBookmarkModal && bookmark && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-emerald-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white p-6 md:p-8 rounded-[2rem] border-4 border-emerald-300 shadow-2xl max-w-sm w-full relative"
            >
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-amber-400 p-4 rounded-full border-4 border-white shadow-lg">
                <Bookmark className="w-8 h-8 text-white fill-white" />
              </div>
              <div className="text-center mt-8">
                <h3 className="text-2xl font-black text-emerald-800 mb-2">Bookmark Kamu</h3>
                <p className="text-emerald-600 font-bold mb-6">Kamu menyimpan tanda baca di halaman ini:</p>
                <div className="bg-emerald-50 p-4 rounded-2xl border-2 border-emerald-100 flex flex-col gap-2 mb-6 shadow-inner">
                  <div className="flex justify-between items-center text-lg font-bold text-emerald-700">
                    <span>Jilid:</span>
                    <span className="bg-white px-4 py-1 rounded-full border-2 border-emerald-200">{bookmark.jilid}</span>
                  </div>
                  <div className="flex justify-between items-center text-lg font-bold text-emerald-700">
                    <span>Halaman:</span>
                    <span className="bg-white px-4 py-1 rounded-full border-2 border-emerald-200">{bookmark.page}</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button 
                    onClick={() => setShowBookmarkModal(false)}
                    className="flex-1 py-3 rounded-full font-bold bg-gray-100 hover:bg-gray-200 text-gray-700 transition"
                  >
                    Batal
                  </button>
                  <button 
                    onClick={goToBookmark}
                    className="flex-1 py-3 rounded-full font-bold bg-emerald-500 hover:bg-emerald-600 text-white transition shadow-md"
                  >
                    Buka
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
