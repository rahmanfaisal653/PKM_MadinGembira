import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Heart, Volume2, Sparkles, Book, Smile, CheckCircle, XCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import BackgroundDecorations from '../components/BackgroundDecorations';
import { KISAH_NABI } from '../data/kisahNabi';
import { HIJAIYAH_LETTERS, KID_FRIENDLY_KEYWORDS, EXCLUDED_KEYWORDS, ALWAYS_ALLOWED_IDS, EXCLUDED_IDS } from '../lib/constants';

// Helper to shuffle array
function shuffleArray<T>(array: T[]): T[] {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

function generateKisahKuis() {
  const kuisInfo = KISAH_NABI.map(nabi => {
    // Get the first sentence of description and hide the name
    let firstSentence = nabi.description.split('.')[0] + '.';
    // Hide the name
    let hiddenSentence = firstSentence
        .replace(new RegExp(`Nabi ${nabi.name}`, 'gi'), 'Nabi [...]')
        .replace(new RegExp(nabi.name, 'gi'), '[...]');
    
    // Pick 3 random other names for name quiz
    const others = KISAH_NABI.map(n => `Nabi ${n.name}`).filter(n => n !== `Nabi ${nabi.name}`);
    const randomOthers = shuffleArray(others).slice(0, 3);

    // Question 1: Who is this?
    const q1 = {
      pertanyaan: `Nabi siapakah yang dimaksud? \n"${hiddenSentence}"`,
      jawabanBenar: `Nabi ${nabi.name}`,
      opsi: [ `Nabi ${nabi.name}`, ...randomOthers ]
    };

    // Question 2: Where was he born (tmp)?
    const otherPlaces = KISAH_NABI.map(n => n.tmp).filter(t => t !== nabi.tmp && t !== 'Banyak sumber berbeda');
    // Ensure unique options
    const uniqueOtherPlaces = Array.from(new Set(otherPlaces));
    const randomPlaces = shuffleArray(uniqueOtherPlaces).slice(0, 3);
    
    const q2 = {
      pertanyaan: `Di manakah tempat dakwah/lahir Nabi ${nabi.name} AS berdasarkan kisah?`,
      jawabanBenar: nabi.tmp,
      opsi: [ nabi.tmp, ...randomPlaces ]
    };

    return [q1, q2];
  });

  return kuisInfo.flat();
}
const KISAH_KUIs = shuffleArray(generateKisahKuis());

function generateIqroTebak() {
  return HIJAIYAH_LETTERS.map(item => {
    const others = HIJAIYAH_LETTERS.filter(h => h.name !== item.name).map(h => h.name);
    const randomOthers = shuffleArray(others).slice(0, 3);
    return {
      huruf: item.letter,
      bacaanBenar: item.name,
      opsi: [item.name, ...randomOthers]
    }
  });
}
const IQRO_TEBAK = shuffleArray(generateIqroTebak());

export default function InteractiveZonePage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'doa' | 'kisah' | 'iqro'>('doa');
  const [doaData, setDoaData] = useState<any[]>([]);
  const [loadingDoa, setLoadingDoa] = useState(true);
  const [doaError, setDoaError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://equran.id/api/doa')
      .then(res => res.json())
      .then(data => {
        const mapped = (data.data || [])
          .filter((item: any) => {
            const nama = item.nama.toLowerCase();
            const grup = item.grup.toLowerCase();
            
            if (EXCLUDED_IDS.includes(item.id)) return false;
            if (ALWAYS_ALLOWED_IDS.includes(item.id)) return true;
            if (EXCLUDED_KEYWORDS.some(kw => nama.includes(kw) || grup.includes(kw))) return false;
            return KID_FRIENDLY_KEYWORDS.some(kw => nama.includes(kw) || grup.includes(kw));
          })
          .map((item: any) => ({
            title: item.nama.replace(/Nabil\s+Ibrahim/ig, 'Nabi Ibrahim'),
            ayat: item.ar,
            artinya: item.idn
          }));
        setDoaData(mapped.length > 0 ? mapped : [
          { title: "Gagal Memuat", ayat: "Maaf, doa tidak ditemukan.", artinya: "Silakan periksa koneksi internet atau ulangi kembali." }
        ]);
        setLoadingDoa(false);
      })
      .catch(err => {
        console.error(err);
        setDoaError(err.message || 'Gagal memuat API');
        setDoaData([
          { title: "Gagal Memuat", ayat: "Maaf, gagal menyambung ke server.", artinya: "Silakan periksa koneksi internet atau ulangi kembali." }
        ]);
        setLoadingDoa(false);
      });
  }, []);

  return (
    <div className="min-h-[100dvh] bg-[#FDF4FF] font-sans flex flex-col relative overflow-x-hidden md:overflow-hidden">
      <BackgroundDecorations />

      <div className="bg-white border-b-4 border-purple-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-1 md:gap-2 text-purple-700 bg-purple-100 hover:bg-purple-200 hover:-translate-y-1 px-3 md:px-4 py-1.5 md:py-2 rounded-full font-bold transition-all shadow-sm border-b-4 border-purple-300 active:border-b-0 active:translate-y-1 text-sm md:text-base"
          >
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
            <span>Kembali</span>
          </button>
          <div className="flex items-center gap-2 text-purple-500 font-black text-lg md:text-2xl pt-1" style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}>
            <Heart className="w-5 h-5 md:w-6 md:h-6 fill-pink-400 text-pink-400" />
            <span>Zona Bermain</span>
          </div>
        </div>
      </div>

      <main className="flex-grow w-full max-w-4xl mx-auto p-4 md:p-6 relative z-10 flex flex-col shrink-0 justify-center py-6 md:py-10 min-h-[calc(100dvh-4rem)] md:min-h-[calc(100dvh-5rem)]">
        {/* Tab Navigation */}
        <div className="flex justify-center bg-white p-2 sm:p-3 rounded-2xl md:rounded-3xl shadow-lg border-2 sm:border-4 border-purple-100 mb-6 md:mb-8 mx-auto w-full md:w-auto gap-1 sm:gap-2 z-20 relative shrink-0">
          <TabButton 
            active={activeTab === 'doa'} 
            onClick={() => setActiveTab('doa')} 
            icon={<Star className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />} 
            label="Doa" 
            color="bg-amber-400" 
          />
          <TabButton 
            active={activeTab === 'kisah'} 
            onClick={() => setActiveTab('kisah')} 
            icon={<Smile className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />} 
            label="Kisah" 
            color="bg-sky-400" 
          />
          <TabButton 
            active={activeTab === 'iqro'} 
            onClick={() => setActiveTab('iqro')} 
            icon={<Book className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />} 
            label="Iqro" 
            color="bg-emerald-400" 
          />
        </div>

        <div className="flex-grow flex flex-col items-center justify-center relative w-full h-full pb-8 md:pb-0">
          <AnimatePresence mode="wait">
            {activeTab === 'doa' && (
              <div key="doa" className="w-full flex justify-center">
                {loadingDoa ? (
                  <div className="flex justify-center flex-col items-center py-20 text-purple-400 font-bold animate-pulse text-xl">
                    <Star className="w-10 h-10 mb-4 animate-spin-slow" />
                    Memuat data Doa...
                  </div>
                ) : (
                  <InteractiveDoa doaList={doaData} />
                )}
              </div>
            )}
            {activeTab === 'kisah' && <div key="kisah" className="w-full flex justify-center"><InteractiveKisah /></div>}
            {activeTab === 'iqro' && <div key="iqro" className="w-full flex justify-center"><InteractiveIqro /></div>}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

function TabButton({ active, onClick, icon, label, color }: any) {
  return (
    <button
      onClick={onClick}
      className={`flex md:flex-row flex-col items-center gap-1 md:gap-2 px-3 md:px-6 py-2 md:py-3 rounded-2xl md:rounded-full font-bold transition-all text-xs md:text-base flex-1 md:flex-none ${
        active ? `${color} text-white shadow-md transform md:scale-105` : 'text-gray-500 hover:bg-gray-100'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

function useShuffleBag<T>(items: T[]) {
  const [bag, setBag] = useState<T[]>(() => shuffleArray(items));
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (items && items.length > 0) {
      setBag(shuffleArray(items));
      setCurrentIndex(0);
    }
  }, [items]);

  const next = () => {
    if (currentIndex >= bag.length - 1) {
      let newBag = shuffleArray(items);
      if (newBag[0] === bag[bag.length - 1] && items.length > 1) {
         const temp = newBag[0];
         newBag[0] = newBag[1];
         newBag[1] = temp;
      }
      setBag(newBag);
      setCurrentIndex(0);
    } else {
      setCurrentIndex(c => c + 1);
    }
  };

  return { currentItem: bag[currentIndex], next };
}

// 1. KARTU DOA (Memory Flip Card Style)
function InteractiveDoa({ doaList }: { doaList: any[] }) {
  const { currentItem: card, next } = useShuffleBag(doaList.length > 0 ? doaList : [{ title: 'Loading...', ayat: '', artinya: '' }]);
  const [flipped, setFlipped] = useState(false);

  const nextCard = () => {
    setFlipped(false);
    setTimeout(() => {
      next();
    }, 150);
  };

  if (!card) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-lg mx-auto flex flex-col items-center"
    >
      <div className="w-full h-[28rem] md:h-[32rem] cursor-pointer group" style={{ perspective: '1200px' }} onClick={() => setFlipped(!flipped)}>
        <motion.div 
          animate={{ rotateY: flipped ? 180 : 0 }} 
          transition={{ duration: 0.6, type: 'spring' }}
          className="w-full h-full relative"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Front */}
          <div className="absolute inset-0 bg-amber-100 border-4 border-amber-300 rounded-[2rem] shadow-xl flex flex-col items-center justify-center p-6 md:p-8 text-center group-hover:scale-[1.02] transition-transform" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
            <Star className="w-14 h-14 md:w-16 md:h-16 text-amber-500 fill-amber-300 mb-6" />
            <h2 className="text-xl md:text-3xl font-black text-amber-700 leading-snug" style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}>{card.title}</h2>
            <div className="mt-8 text-amber-600 font-bold bg-amber-200/50 px-5 py-2.5 rounded-full text-xs md:text-sm flex items-center gap-2">
              <Star className="w-4 h-4" />
              Sentuh untuk membalik
            </div>
          </div>
          
          {/* Back */}
          <div className="absolute inset-0 bg-amber-50 border-4 border-amber-300 rounded-[2rem] shadow-xl flex flex-col p-4 md:p-8 overflow-hidden group-hover:scale-[1.02] transition-transform" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
            <div className="flex-grow overflow-y-auto pr-1 md:pr-2 flex flex-col justify-start custom-scrollbar relative">
              <h3 className="text-base md:text-lg font-bold text-amber-600 border-b-2 border-amber-200 pb-2 mb-3 flex justify-between items-center shrink-0 sticky top-0 bg-amber-50 z-10 pt-1">
                <span className="truncate pr-2">{card.title}</span>
                <Star className="w-5 h-5 text-amber-400 fill-amber-300 shrink-0" />
              </h3>
              <p className="text-xl sm:text-2xl md:text-4xl text-gray-800 font-arabic leading-[2] sm:leading-[1.8] md:leading-relaxed text-right shrink-0 my-3" dir="rtl">{card.ayat}</p>
              <div className="bg-amber-100/80 p-3 md:p-4 rounded-xl w-full border border-amber-200 mt-auto shrink-0 mb-1">
                <p className="text-amber-800 font-semibold text-[11px] sm:text-xs md:text-base leading-relaxed">{card.artinya}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="mt-8 flex gap-4 w-full justify-center min-h-[60px]">
        {flipped && (
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className="px-8 py-3 bg-amber-500 text-white font-bold rounded-full border-b-4 border-amber-600 hover:bg-amber-400 hover:border-amber-500 transition-all shadow-sm active:border-b-0 active:translate-y-1 text-lg z-10" 
            onClick={(e) => { e.stopPropagation(); nextCard(); }}
          >
            Lanjut Doa Lain
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}

// 2. KUIS KISAH
function InteractiveKisah() {
  const { currentItem: kuis, next } = useShuffleBag(KISAH_KUIs);
  const [selected, setSelected] = useState<string | null>(null);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);

  useEffect(() => {
    setShuffledOptions(shuffleArray(kuis.opsi));
  }, [kuis]);
  
  const handleSelect = (op: string) => {
    if(selected) return;
    setSelected(op);
  };

  const nextKuis = () => {
    setSelected(null);
    next();
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-xl mx-auto flex flex-col items-center bg-white p-6 md:p-8 rounded-[3rem] border-4 border-sky-200 shadow-xl"
    >
      <div className="w-16 h-16 bg-sky-100 text-sky-500 rounded-full flex items-center justify-center border-4 border-sky-300 mb-4 shrink-0">
        <Star className="w-8 h-8 fill-sky-300" />
      </div>

      <h2 className="text-lg md:text-xl font-medium text-sky-800 text-center mb-6 leading-relaxed whitespace-pre-wrap">
        {kuis.pertanyaan}
      </h2>

      <div className="w-full flex flex-col gap-3">
        {shuffledOptions.map(op => {
          let stateClass = "bg-sky-50 text-sky-700 border-sky-200 hover:bg-sky-100 hover:border-sky-300 relative";
          if (selected) {
            if (op === kuis.jawabanBenar) stateClass = "bg-emerald-500 text-white border-emerald-600 relative";
            else if (op === selected) stateClass = "bg-rose-500 text-white border-rose-600 relative";
            else stateClass = "bg-gray-100 text-gray-500 border-gray-200 opacity-60 relative";
          }
          return (
            <button 
              key={op}
              onClick={() => handleSelect(op)}
              className={`w-full py-4 px-6 rounded-2xl border-4 font-semibold text-base md:text-lg text-left transition-all ${stateClass} flex justify-between items-center z-10 overflow-hidden`}
            >
              <span>{op}</span>
              {selected && op === kuis.jawabanBenar && <CheckCircle className="w-6 h-6" />}
              {selected && op === selected && op !== kuis.jawabanBenar && <XCircle className="w-6 h-6" />}
            </button>
          )
        })}
      </div>

      {selected && (
        <motion.button 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="mt-8 px-10 py-4 bg-sky-500 text-white font-black text-xl rounded-full border-b-4 border-sky-700 hover:bg-sky-400 hover:border-sky-600 transition-all shadow-lg active:translate-y-1 active:border-b-0"
          onClick={nextKuis}
        >
          Kuis Selanjutnya!
        </motion.button>
      )}
    </motion.div>
  );
}

// 3. TEBAK IQRO
function InteractiveIqro() {
  const { currentItem: tebak, next } = useShuffleBag(IQRO_TEBAK);
  const [selected, setSelected] = useState<string | null>(null);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);

  useEffect(() => {
    setShuffledOptions(shuffleArray(tebak.opsi));
  }, [tebak]);
  
  const handleSelect = (op: string) => {
    if(selected) return;
    setSelected(op);
  };

  const nextTebak = () => {
    setSelected(null);
    next();
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-lg mx-auto flex flex-col items-center bg-white p-6 md:p-8 rounded-[3rem] border-4 border-emerald-200 shadow-xl"
    >
      <div className="bg-emerald-500 w-full h-40 md:h-48 rounded-[2rem] border-4 border-emerald-600 flex items-center justify-center mb-6 relative overflow-hidden shadow-inner flex-col">
        <Sparkles className="absolute text-emerald-300 w-full h-full opacity-30" />
        <span className="text-amber-300 font-bold mb-2">Huruf apakah ini?</span>
        <h1 className="text-7xl md:text-8xl font-arabic text-white drop-shadow-md z-10">{tebak.huruf}</h1>
      </div>

      <div className="grid grid-cols-2 gap-3 w-full">
        {shuffledOptions.map(op => {
          let stateClass = "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100 hover:border-emerald-300 hover:-translate-y-1 shadow-sm";
          if (selected) {
            if (op === tebak.bacaanBenar) stateClass = "bg-emerald-500 text-white border-emerald-600 shadow-none";
            else if (op === selected) stateClass = "bg-rose-500 text-white border-rose-600 shadow-none";
            else stateClass = "bg-gray-100 text-gray-400 border-gray-200 opacity-50 shadow-none";
          }
          return (
            <button 
              key={op}
              onClick={() => handleSelect(op)}
              className={`py-4 md:py-6 rounded-2xl border-4 font-black text-xl md:text-2xl transition-all flex flex-col items-center justify-center gap-2 ${stateClass} relative overflow-hidden z-10`}
            >
              <span>{op}</span>
              {selected && op === tebak.bacaanBenar && <CheckCircle className="w-5 h-5 absolute ml-[70%]" />}
              {selected && op === selected && op !== tebak.bacaanBenar && <XCircle className="w-5 h-5 absolute ml-[70%]" />}
            </button>
          )
        })}
      </div>

      {selected && (
        <motion.button 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="mt-8 px-10 py-4 bg-emerald-500 text-white font-black text-xl rounded-full border-b-4 border-emerald-700 hover:bg-emerald-400 hover:border-emerald-600 transition-all shadow-lg active:translate-y-1 active:border-b-0 w-full"
          onClick={nextTebak}
        >
          Hebat! Lanjut!
        </motion.button>
      )}
    </motion.div>
  );
}
