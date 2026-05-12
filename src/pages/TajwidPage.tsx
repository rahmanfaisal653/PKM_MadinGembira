import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundDecorations from '../components/BackgroundDecorations';
import { motion } from 'motion/react';
import { BookOpen, Info, Lightbulb, Star, ArrowLeft } from 'lucide-react';

const tajwidRules = [
  {
    title: 'Ghunnah (Dengung)',
    color: '#F97316',
    desc: 'Dibaca dengung yang ditahan selama 2 harakat (ketukan). Terjadi pada huruf Mim bertasydid (مّ) dan Nun bertasydid (نّ).',
    arabic: 'اِنَّ ، عَمَّ',
    latin: 'Inna, Amma'
  },
  {
    title: 'Qalqalah (Memantul)',
    color: '#FF0000',
    desc: 'Suara yang memantul ketika huruf qalqalah berharakat sukun atau wakaf. Hurufnya: Qaf (ق), Tha (ط), Ba (ب), Jim (ج), Dal (د).',
    arabic: 'اَحَدٌ ، لَقَدْ ، خَلَقْنَا',
    latin: 'Ahadun, Laqad, Khalaqna'
  },
  {
    title: 'Ikhfa (Samar)',
    color: '#A855F7',
    desc: 'Membaca Nun mati atau Tanwin secara samar-samar antara Idzhar dan Idgham, disertai dengung.',
    arabic: 'مِنْ تَحْتِهَا ، اَنْفُسَكُمْ',
    latin: 'Min Tahtiha, Anfusakum'
  },
  {
    title: 'Iqlab (Tukar)',
    color: '#FACC15',
    desc: 'Mengganti suara Nun mati atau Tanwin menjadi suara Mim (م) ketika bertemu huruf Ba (ب).',
    arabic: 'مِنْۢ بَعْدِ ، لَيُنْۢبَذَنَّ',
    latin: 'Mim Ba\'di, Layumbadzanna'
  },
  {
    title: 'Mad Thabii (Panjang)',
    color: '#60A5FA',
    desc: 'Bacaan panjang alami sepanjang 2 harakat. Terjadi jika ada Alif setelah fathah, Wawu sukun setelah dhommah, atau Ya sukun setelah kasroh.',
    arabic: 'قَالَ ، يَقُوْلُ ، قِيْلَ',
    latin: 'Qaala, Yaquulu, Qiila'
  },
  {
    title: 'Mad Wajib / Sorong',
    color: '#1E3A8A',
    desc: 'Bacaan panjang yang lebih dari 2 harakat (biasanya 4-5 harakat). Sering terjadi pada pertemuan huruf Mad dengan Hamzah.',
    arabic: 'جَآءَ ، السَّمَآءِ ، سُوْٓءَ',
    latin: 'Jaaa-a, As-samaaa-i, Suuu-a'
  },
  {
    title: 'Idgham (Masuk)',
    color: '#22C55E',
    desc: 'Memasukkan suara Nun mati atau Tanwin ke huruf berikutnya. Ada Idgham Bighunnah (dengan dengung) dan Bilaghunnah (tanpa dengung).',
    arabic: 'مَنْ يَّعْمَلُ ، مِنْ رَّبِّهِمْ',
    latin: 'May-ya\'mal, Mir-rabbihim'
  },
  {
    title: 'Tidak Dibaca / Abu-abu',
    color: '#9CA3AF',
    desc: 'Huruf yang tertulis namun tidak dibaca suaranya karena hukum tertentu (seperti Alif Lam Syamsiyah atau huruf tambahan).',
    arabic: 'وَاللّٰهُ ، الصَّلٰوةُ',
    latin: 'Wallahu, Ash-shalaatu'
  }
];

export default function TajwidPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-rose-50 text-gray-800 font-sans flex flex-col relative">
      <BackgroundDecorations />
      
      <div className="bg-white border-b-4 border-rose-200 sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-rose-600 bg-rose-50 hover:bg-rose-100 hover:-translate-y-1 px-4 py-2 rounded-full font-bold transition-all shadow-sm border-b-4 border-rose-200 active:border-b-0 active:translate-y-1"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Kembali</span>
          </button>
          <div className="flex items-center gap-2 text-rose-600 font-black text-xl md:text-2xl" style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}>
            <Lightbulb className="w-6 h-6 fill-rose-300" />
            <span>Belajar Tajwid</span>
          </div>
        </div>
      </div>

      <main className="flex-grow max-w-6xl mx-auto w-full px-4 py-8 md:px-8 flex flex-col items-center relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 w-full"
        >
          <div className="inline-flex items-center justify-center bg-rose-100 p-4 rounded-full text-rose-600 mb-6 border-4 border-rose-200 shadow-sm mx-auto">
            <Lightbulb className="w-10 h-10" />
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-rose-700 mb-4 tracking-tight drop-shadow-sm pb-2" style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}>
            Belajar Tajwid
          </h1>
          <p className="text-lg text-rose-800/80 font-medium max-w-2xl mx-auto">
            Yuk kenali hukum-hukum bacaan Al-Qur'an agar bacaan kita semakin bagus dan benar!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {tajwidRules.map((rule, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[2rem] p-6 shadow-md border-2 border-rose-50 hover:shadow-lg transition-shadow overflow-hidden relative group"
            >
              <div 
                className="absolute top-0 left-0 w-3 h-full" 
                style={{ backgroundColor: rule.color }}
              />
              <div className="flex flex-col sm:flex-row items-start gap-4 ml-2">
                <div 
                  className="p-3 rounded-2xl flex-shrink-0"
                  style={{ backgroundColor: `${rule.color}15`, color: rule.color }}
                >
                  <Star className="w-6 h-6 fill-current" />
                </div>
                <div className="flex-grow w-full">
                  <h2 className="text-xl font-bold mb-2 flex items-center gap-4" style={{ color: rule.color }}>
                    {rule.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {rule.desc}
                  </p>
                  <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 shadow-inner">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-3">CONTOH BACAAN:</span>
                    <div className="flex flex-col items-end gap-3">
                      <span className="text-4xl md:text-5xl font-arabic font-bold text-gray-800 leading-normal" dir="rtl">{rule.arabic}</span>
                      <span className="text-xl md:text-2xl font-bold text-gray-500 self-start border-l-4 border-rose-200 pl-4 mt-2">
                        {rule.latin}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 bg-rose-600 text-white p-8 rounded-[3rem] text-center w-full shadow-xl border-4 border-rose-400 relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-black mb-4" style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}>
              Sudah Paham Belum?
            </h2>
            <p className="text-rose-50 mb-6 font-medium max-w-xl mx-auto">
              Kalau sudah paham, yuk kita latihan baca Juz Amma dan perhatikan warna-warna tajwidnya!
            </p>
            <a 
              href="#/juz-amma" 
              className="inline-flex items-center gap-2 bg-white text-rose-700 px-8 py-3 rounded-full font-black hover:bg-rose-50 transition-colors shadow-lg"
            >
              <BookOpen className="w-5 h-5" />
              Latihan Baca Juz Amma
            </a>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-rose-700/20 pointer-events-none"></div>
        </motion.div>

      </main>
    </div>
  );
}
