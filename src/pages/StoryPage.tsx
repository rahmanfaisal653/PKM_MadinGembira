import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Star, Calendar, MapPin, Smile, Sun, Cloud, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { KISAH_NABI, Nabi } from '../data/kisahNabi';
import BackgroundDecorations from '../components/BackgroundDecorations';

// helper for color map
const getColorClass = (color: string) => {
  const map: Record<string, string> = {
    emerald: 'bg-emerald-100 text-emerald-600 border-emerald-200 from-emerald-400 to-emerald-600 shadow-emerald-200',
    blue: 'bg-blue-100 text-blue-600 border-blue-200 from-blue-400 to-blue-600 shadow-blue-200',
    cyan: 'bg-cyan-100 text-cyan-600 border-cyan-200 from-cyan-400 to-cyan-600 shadow-cyan-200',
    orange: 'bg-orange-100 text-orange-600 border-orange-200 from-orange-400 to-orange-600 shadow-orange-200',
    stone: 'bg-stone-100 text-stone-600 border-stone-200 from-stone-400 to-stone-600 shadow-stone-200',
    red: 'bg-red-100 text-red-600 border-red-200 from-red-400 to-red-600 shadow-red-200',
    purple: 'bg-purple-100 text-purple-600 border-purple-200 from-purple-400 to-purple-600 shadow-purple-200',
    amber: 'bg-amber-100 text-amber-600 border-amber-200 from-amber-400 to-amber-600 shadow-amber-200',
    teal: 'bg-teal-100 text-teal-600 border-teal-200 from-teal-400 to-teal-600 shadow-teal-200',
    indigo: 'bg-indigo-100 text-indigo-600 border-indigo-200 from-indigo-400 to-indigo-600 shadow-indigo-200',
    sky: 'bg-sky-100 text-sky-600 border-sky-200 from-sky-400 to-sky-600 shadow-sky-200',
    fuchsia: 'bg-fuchsia-100 text-fuchsia-600 border-fuchsia-200 from-fuchsia-400 to-fuchsia-600 shadow-fuchsia-200',
    lime: 'bg-lime-100 text-lime-600 border-lime-200 from-lime-400 to-lime-600 shadow-lime-200',
    yellow: 'bg-yellow-100 text-yellow-600 border-yellow-200 from-yellow-400 to-yellow-600 shadow-yellow-200',
    rose: 'bg-rose-100 text-rose-600 border-rose-200 from-rose-400 to-rose-600 shadow-rose-200',
  };
  return map[color] || map['sky'];
};

export default function StoryPage() {
  const navigate = useNavigate();
  const [selectedStory, setSelectedStory] = useState<Nabi | null>(null);
  const [page, setPage] = useState(0);

  const openStory = (story: Nabi) => {
    setSelectedStory(story);
    setPage(0);
  };

  return (
    <div className="min-h-screen bg-sky-50 flex flex-col font-sans overflow-x-hidden relative">
      <BackgroundDecorations />

      <div className="bg-white border-b-4 border-sky-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 h-20 flex items-center justify-between">
          <button 
            onClick={() => {
              if (selectedStory) setSelectedStory(null);
              else navigate('/');
            }}
            className="flex items-center gap-2 text-sky-700 bg-sky-100 hover:bg-sky-200 hover:-translate-y-1 px-5 py-2.5 rounded-full font-bold transition-all shadow-sm border-b-4 border-sky-300 active:border-b-0 active:translate-y-1"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Kembali</span>
          </button>
          <div className="flex items-center gap-2 text-sky-500 font-black text-xl" style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}>
            <Smile className="w-7 h-7 text-sky-400" />
            <span>Kisah Nabi</span>
          </div>
        </div>
      </div>

      <main className="flex-grow max-w-5xl mx-auto w-full px-4 md:px-8 py-6 lg:py-10 relative z-10">
        
        {!selectedStory && (
          <div className="mb-10 text-center bg-white p-8 rounded-[2.5rem] border-4 border-sky-200 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100 rounded-bl-full -z-10"></div>
            <div className="inline-flex items-center justify-center bg-sky-100 p-4 rounded-full mb-4 border-4 border-sky-50">
               <BookOpen className="w-10 h-10 text-sky-500" />
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-sky-600 mb-4" style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}>Kisah Terbaik Para Nabi</h1>
            <p className="text-sky-800/70 font-bold text-lg md:text-xl">Mari mengenal sosok hebat manusia utusan Allah!</p>
          </div>
        )}

        {!selectedStory ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {KISAH_NABI.map((story, idx) => (
              <motion.div
                key={story.name || idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: (idx % 15) * 0.05, type: 'spring' }}
                whileHover={{ y: -8, scale: 1.02, rotate: idx % 2 === 0 ? 2 : -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openStory(story)}
                className="bg-white p-6 rounded-[2.5rem] border-4 border-sky-100 shadow-lg cursor-pointer transform transition-all group flex flex-col"
              >
                <div className={`w-full h-40 bg-gradient-to-br ${getColorClass(story.themeColor).split(' ').find(c => c.startsWith('from-'))} ${getColorClass(story.themeColor).split(' ').find(c => c.startsWith('to-'))} rounded-[1.5rem] overflow-hidden mb-6 border-4 border-white shadow-sm mx-auto relative flex items-center justify-center p-4`}>
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <BookOpen className="w-16 h-16 text-white opacity-80" />
                  <span className="absolute bottom-2 right-4 text-6xl font-arabic text-white/30 font-bold select-none">{story.name.charAt(0)}</span>
                </div>
                <h3 className="font-black text-3xl text-sky-800 mb-2 text-center" style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}>Nabi {story.name}</h3>
                <p className="text-xs text-sky-600 font-bold mb-4 flex justify-center items-center gap-1 bg-sky-50 py-1.5 px-3 rounded-full w-fit mx-auto">
                  <MapPin className="w-3 h-3" /> {story.tmp}
                </p>
                <p className="text-sm text-gray-500 text-center leading-relaxed font-medium mb-2 line-clamp-3">
                  {story.description.split('\n')[0]}
                </p>
                
                <div className="mt-auto pt-4 border-t-4 border-sky-50 text-center text-sky-500 font-bold text-sm md:text-base group-hover:text-sky-600 transition-colors">
                  Mulai Baca Kisahnya →
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            key={selectedStory.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', damping: 20 }}
            className="flex flex-col relative w-full items-center justify-center mt-4 md:mt-8"
          >
            <div className="w-full flex justify-between items-center mb-4 px-2">
              <button 
                onClick={() => {
                  setSelectedStory(null);
                  setPage(0);
                }}
                className="bg-rose-100 text-rose-600 hover:bg-rose-200 px-4 py-2 rounded-full font-bold flex items-center gap-2 transition-colors border-2 border-rose-200"
              >
                ← Tutup Buku
              </button>
            </div>

            {/* The Book Container */}
            <div className="relative w-full max-w-5xl bg-[#fdfaf6] rounded-[2rem] md:rounded-[3rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] border-8 border-[#8B5A2B] overflow-hidden flex flex-col md:flex-row min-h-[600px] mb-8">
              
              {/* Book Spine (Hidden on mobile) */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-12 -ml-6 bg-gradient-to-r from-transparent via-black/10 to-transparent z-20 pointer-events-none">
                 {/* Binding stitches */}
                 <div className="absolute top-12 left-1/2 w-4 h-1 bg-black/20 -translate-x-1/2"></div>
                 <div className="absolute top-1/4 left-1/2 w-4 h-1 bg-black/20 -translate-x-1/2"></div>
                 <div className="absolute top-2/4 left-1/2 w-4 h-1 bg-black/20 -translate-x-1/2"></div>
                 <div className="absolute top-3/4 left-1/2 w-4 h-1 bg-black/20 -translate-x-1/2"></div>
                 <div className="absolute bottom-12 left-1/2 w-4 h-1 bg-black/20 -translate-x-1/2"></div>
              </div>

              {/* Left Page (Or Single Page on Mobile) */}
              <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col relative z-10 border-b-2 md:border-b-0 md:border-r-2 border-gray-200 shadow-[inset_-20px_0_20px_-20px_rgba(0,0,0,0.05)]">
                 {page === 0 ? (
                   // Cover Page (Title and Info)
                   <div className="flex flex-col h-full items-center justify-center text-center">
                     <div className="w-24 h-24 bg-sky-100 rounded-full flex items-center justify-center border-4 border-sky-200 shadow-sm mb-6">
                       <Star className="w-12 h-12 text-sky-500 fill-sky-500" />
                     </div>
                     <h2 className="text-4xl md:text-5xl font-black text-sky-800 mb-6 leading-tight" style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}>
                       Kisah Nabi<br/>{selectedStory.name}
                     </h2>
                     <div className="bg-sky-50 border-4 border-sky-100 w-full rounded-3xl p-6 text-left space-y-4 shadow-inner">
                       <div className="flex items-center gap-3 border-b-2 border-sky-100 pb-2">
                         <MapPin className="w-6 h-6 text-sky-500" />
                         <div>
                           <p className="text-xs font-bold text-sky-500 uppercase">Diutus di</p>
                           <p className="font-bold text-sky-900">{selectedStory.tmp}</p>
                         </div>
                       </div>
                       <div className="flex items-center gap-3 border-b-2 border-sky-100 pb-2">
                         <Calendar className="w-6 h-6 text-amber-500" />
                         <div>
                           <p className="text-xs font-bold text-amber-500 uppercase">Usia</p>
                           <p className="font-bold text-sky-900">{selectedStory.usia} Tahun</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 ) : (
                   // Left Page Text
                   <div className="flex flex-col h-full relative">
                     <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
                       <BookOpen className="w-32 h-32" />
                     </div>
                     {(() => {
                        const paragraphs = selectedStory.description.split('\n').filter(p => p.trim());
                        const leftPara = paragraphs[(page - 1) * 2];
                        return (
                          <div className="prose prose-lg pt-4 md:pt-8 text-slate-800 leading-relaxed font-medium relative z-10">
                            {leftPara ? <p className="first-letter:text-6xl first-letter:font-black first-letter:text-sky-600 first-letter:mr-2 first-letter:float-left">{leftPara}</p> : null}
                          </div>
                        )
                     })()}
                   </div>
                 )}
                 <div className="mt-auto pt-6 text-left text-gray-400 font-bold border-t border-gray-200/50">Hal {page * 2 + 1}</div>
              </div>

              {/* Right Page (Illustration or 2nd Paragraph) */}
              <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col relative z-10 shadow-[inset_20px_0_20px_-20px_rgba(0,0,0,0.05)] bg-[#fdfaf6]">
                 {page === 0 ? (
                   // Illustration and Hikmah
                   <div className="flex flex-col h-full">
                     <div className={`w-full h-48 md:h-64 border-8 border-white rounded-[2rem] overflow-hidden shadow-lg mb-6 rotate-1 hover:rotate-0 transition-transform bg-gradient-to-br ${getColorClass(selectedStory.themeColor).split(' ').find(c => c.startsWith('from-'))} ${getColorClass(selectedStory.themeColor).split(' ').find(c => c.startsWith('to-'))} flex items-center justify-center relative`}>
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,theme(colors.white)_10%,transparent_100%)] bg-[length:20px_20px]"></div>
                        <Star className="absolute top-4 left-4 w-12 h-12 text-white/50 animate-pulse" />
                        <BookOpen className="w-24 h-24 text-white drop-shadow-xl" />
                        <span className="absolute bottom-[-10px] right-2 text-9xl font-arabic text-white/20 select-none">{selectedStory.name.charAt(0)}</span>
                     </div>
                     <div className="bg-pink-50 border-4 border-pink-200 p-5 rounded-3xl mt-auto shadow-sm relative">
                       <div className="absolute -top-5 -left-5 bg-pink-400 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md rotate-12">
                         <Heart className="w-5 h-5 fill-white" />
                       </div>
                       <h4 className="font-black text-pink-700 mb-2 ml-4">Hikmah Cerita:</h4>
                       <p className="text-pink-900 font-medium text-sm md:text-base leading-relaxed">{selectedStory.hikmah}</p>
                     </div>
                   </div>
                 ) : (
                   // Right Page Text
                   <div className="flex flex-col h-full relative">
                      {(() => {
                        const paragraphs = selectedStory.description.split('\n').filter(p => p.trim());
                        const rightPara = paragraphs[(page - 1) * 2 + 1];
                        return (
                          <div className="prose prose-lg pt-4 md:pt-8 text-slate-800 leading-relaxed font-medium relative z-10">
                            {rightPara ? <p>{rightPara}</p> : null}
                          </div>
                        )
                     })()}
                   </div>
                 )}
                 <div className="mt-auto pt-6 text-right text-gray-400 font-bold border-t border-gray-200/50">Hal {page * 2 + 2}</div>
              </div>
            </div>

            {/* Pagination Controls outside the book */}
            {(() => {
               const paragraphs = selectedStory.description.split('\n').filter(p => p.trim());
               const totalBookPages = Math.ceil(paragraphs.length / 2) + 1; // 1 cover page
               return (
                 <div className="flex justify-center items-center gap-4 w-full">
                   <button 
                     onClick={() => setPage(p => Math.max(0, p - 1))}
                     disabled={page === 0}
                     className="bg-amber-400 hover:bg-amber-500 text-amber-900 px-6 md:px-8 py-3 md:py-4 rounded-full font-black text-lg disabled:opacity-50 transition-colors shadow-lg border-b-4 border-amber-600 disabled:border-amber-400 disabled:translate-y-1 active:translate-y-1 active:border-b-0"
                   >
                     ← Balik Halaman
                   </button>
                   <span className="hidden md:block font-bold text-sky-800 bg-white px-4 py-2 rounded-full border-2 border-sky-200">
                     Lebar {page + 1}/{totalBookPages}
                   </span>
                   <button 
                     onClick={() => setPage(p => Math.min(totalBookPages - 1, p + 1))}
                     disabled={page >= totalBookPages - 1}
                     className="bg-sky-400 hover:bg-sky-500 text-sky-900 px-6 md:px-8 py-3 md:py-4 rounded-full font-black text-lg disabled:opacity-50 transition-colors shadow-lg border-b-4 border-sky-600 disabled:border-sky-400 disabled:translate-y-1 active:translate-y-1 active:border-b-0"
                   >
                     Halaman Lanjut →
                   </button>
                 </div>
               )
            })()}
          </motion.div>
        )}
      </main>
    </div>
  );
}
