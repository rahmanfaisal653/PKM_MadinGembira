import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundDecorations from '../components/BackgroundDecorations';
import { motion, AnimatePresence } from 'motion/react';
import { Loader2, AlertCircle, Book, Info, ArrowLeft } from 'lucide-react';

interface Verse {
  number: number;
  text: string;
  numberInSurah: number;
}

interface Chapter {
  number: number;
  englishName: string;
  name: string;
}

const parseTajweed = (text: string) => {
  return text.replace(/\[([^[\]]+)\[([^[\]]+)\]/g, (match, className, content) => {
    const baseClass = className.split(':')[0];
    return `<tajweed class="${baseClass}">${content}</tajweed>`;
  });
};

const toArabicNumber = (num: number) => {
  return num.toString().replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d as Extract<keyof string, "0"|"1"|"2"|"3"|"4"|"5"|"6"|"7"|"8"|"9">] ?? d);
};

export default function JuzAmmaPage() {
  const navigate = useNavigate();
  const [verses, setVerses] = useState<Verse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [chapterNumber, setChapterNumber] = useState(114);
  const [chapters, setChapters] = useState<Chapter[]>([]);

  // Fetch list of chapters (surahs)
  useEffect(() => {
    fetch('https://api.quranhub.com/v1/surah/')
      .then(res => res.json())
      .then(data => {
        // Filter for Juz Amma (Surah 78 to 114) and reverse to make it An-Nas to An-Naba
        const juzAmmaChapters = data.data.filter((chap: Chapter) => chap.number >= 78 && chap.number <= 114);
        setChapters(juzAmmaChapters.reverse());
      })
      .catch(err => {
        console.error("Failed to fetch chapters", err);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`https://api.quranhub.com/v1/surah/${chapterNumber}/quran-tajweed`)
      .then(res => res.json())
      .then(data => {
        if (data.data && data.data.ayahs) {
          setVerses(data.data.ayahs);
        } else {
          setError('Gagal memuat ayat.');
        }
      })
      .catch((err) => {
        setError('Terjadi kesalahan jaringan.');
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [chapterNumber]);

  return (
    <div className="min-h-screen bg-teal-50 text-gray-800 font-sans flex flex-col relative">
      <BackgroundDecorations />
      
      <div className="bg-white border-b-4 border-teal-200 sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-teal-600 bg-teal-50 hover:bg-teal-100 hover:-translate-y-1 px-4 py-2 rounded-full font-bold transition-all shadow-sm border-b-4 border-teal-200 active:border-b-0 active:translate-y-1"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Kembali</span>
          </button>
          <div className="flex items-center gap-2 text-teal-600 font-black text-xl md:text-2xl" style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}>
            <Book className="w-6 h-6 fill-teal-300" />
            <span>Baca Juz Amma</span>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        /* Tajweed Colors - Menggunakan garis bawah agar tidak mengubah warna teks/mencegah bug huruf putus */
        tajweed {
          color: inherit !important;
          text-decoration: underline;
          text-decoration-thickness: 3px;
          text-underline-offset: 12px;
          text-decoration-skip-ink: none;
        }
        @media (min-width: 640px) {
          tajweed {
            text-decoration-thickness: 4px;
            text-underline-offset: 16px;
          }
        }
        .h, .l, .s { text-decoration-color: #9CA3AF !important; } /* Gray: Tidak dibaca / Abu-abu */
        .n { text-decoration-color: #60A5FA !important; } /* Light Blue: Mad Thabii */
        .p, .m, .o { text-decoration-color: #1E3A8A !important; } /* Navy: Mad Wajib/Jaiz dsb */
        .q { text-decoration-color: #FF0000 !important; } /* Bright Red: Qalqalah */
        .c, .a { text-decoration-color: #A855F7 !important; } /* Purple: Ikhfa */
        .f, .w, .u, .d, .b { text-decoration-color: #22C55E !important; } /* Green: Idgham variants */
        .i { text-decoration-color: #FACC15 !important; } /* Yellow: Iqlab */
        .g { text-decoration-color: #F97316 !important; } /* Orange: Ghunnah */
        .end { color: #10B981 !important; font-size: 0.9em; margin-left: 0.5rem; text-decoration: none !important; display: inline; }
      `}} />

      <main className="flex-grow max-w-5xl mx-auto w-full px-4 py-8 md:px-8 flex flex-col items-center relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 w-full"
        >
          <div className="inline-flex items-center justify-center bg-teal-100 p-4 rounded-full text-teal-600 mb-6 border-4 border-teal-200 shadow-sm mx-auto flex">
            <Book className="w-10 h-10" />
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-teal-700 mb-4 tracking-tight drop-shadow-sm pb-4" style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}>
            Baca Juz Amma
          </h1>
          <p className="text-lg text-teal-800/80 font-medium max-w-2xl mx-auto">
            Baca surat-surat pendek dengan panduan tajwid berwarna.
          </p>
        </motion.div>

        {/* Legend / Info card */}
        <div className="bg-white rounded-3xl shadow-md border-2 border-teal-100 p-6 mb-8 w-full max-w-4xl cursor-default">
          <div className="flex items-center gap-2 mb-4 text-teal-800 font-bold text-lg">
            <Info className="w-6 h-6 text-teal-500" />
            <span>Keterangan Warna Tajwid:</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-medium">
            <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-[#1E3A8A]"></div> Wajib/Sorong</div>
            <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-[#60A5FA]"></div> Mad (Panjang)</div>
            <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-[#FF0000]"></div> Qalqalah (Memantul)</div>
            <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-[#F97316]"></div> Ghunnah (Dengung)</div>
            <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-[#22C55E]"></div> Idgham (Masuk)</div>
            <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-[#A855F7]"></div> Ikhfa (Samar)</div>
            <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-[#FACC15]"></div> Iqlab (Tukar)</div>
            <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-[#9CA3AF]"></div> Tidak Dibaca (Abu)</div>
          </div>
        </div>

        {/* Surah Selector */}
        <div className="w-full max-w-4xl mb-8 flex items-center justify-between bg-teal-50 p-4 rounded-2xl border-2 border-teal-200">
          <span className="font-bold text-teal-800 text-lg hidden sm:block">Pilih Surah:</span>
          <select 
            value={chapterNumber}
            onChange={(e) => setChapterNumber(Number(e.target.value))}
            className="w-full sm:w-auto p-3 rounded-xl border-2 border-teal-300 bg-white text-teal-900 font-bold focus:outline-none focus:ring-4 focus:ring-teal-200 cursor-pointer"
          >
            {chapters.length > 0 ? chapters.map(chap => (
              <option key={chap.number} value={chap.number}>
                {chap.number}. {chap.englishName} ({chap.name})
              </option>
            )) : <option value={114}>114. An-Nas</option>}
          </select>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center p-12">
            <Loader2 className="w-16 h-16 animate-spin text-teal-500 mb-4" />
            <p className="text-teal-700 font-medium">Memuat Ayat...</p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center bg-red-50 p-8 rounded-3xl border-4 border-red-200 text-center w-full max-w-4xl">
            <AlertCircle className="w-16 h-16 text-red-500 mb-4" />
            <p className="text-xl font-bold text-red-700">{error}</p>
          </div>
        ) : (
          <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl border-4 border-teal-100 overflow-hidden">
            <div className="p-4 sm:p-8 flex flex-col gap-8 w-full" dir="rtl">
              {verses.map((verse, idx) => (
                <div key={verse.number} className="relative group">
                  <div className="block text-right text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-arabic leading-[2] sm:leading-[1.8] md:leading-[1.8] text-gray-900 pb-4 sm:pb-6 border-b border-teal-50 last:border-0"
                       dangerouslySetInnerHTML={{ __html: parseTajweed(verse.text) + ' <span class="end">﴿' + toArabicNumber(verse.numberInSurah) + '﴾</span>' }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
