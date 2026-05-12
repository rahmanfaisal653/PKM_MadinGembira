import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Search, Filter } from 'lucide-react';
import { motion } from 'motion/react';
import BackgroundDecorations from '../components/BackgroundDecorations';
import { KID_FRIENDLY_KEYWORDS, EXCLUDED_KEYWORDS, ALWAYS_ALLOWED_IDS, EXCLUDED_IDS } from '../lib/constants';

interface Doa {
  id: string;
  doa: string;
  ayat: string;
  latin: string;
  artinya: string;
  tentang?: string;
  kategori?: string;
}

const CATEGORIES = [
  "Semua",
  "Tidur & Bangun",
  "Makan & Minum",
  "Kehidupan Rumah",
  "Ibadah & Shalat",
  "Keluarga & Orang Tua",
  "Belajar",
  "Perlindungan & Keselamatan"
];

function determineCategory(name: string, group: string): string {
  const lower = name.toLowerCase() + " " + group.toLowerCase();
  
  if (lower.includes('tidur') || lower.includes('bangun')) return "Tidur & Bangun";
  if (lower.includes('makan') || lower.includes('minum')) return "Makan & Minum";
  if (lower.includes('rumah') || lower.includes('kamar mandi') || lower.includes('pakaian')) return "Kehidupan Rumah";
  if (lower.includes('wudhu') || lower.includes('shalat') || lower.includes('masjid')) return "Ibadah & Shalat";
  if (lower.includes('orang tua') || lower.includes('keluarga')) return "Keluarga & Orang Tua";
  if (lower.includes('ilmu') || lower.includes('belajar')) return "Belajar";
  if (lower.includes('kendaraan') || lower.includes('hujan') || lower.includes('lindung') || lower.includes('buruk')) return "Perlindungan & Keselamatan";
  
  return "Sehari-hari";
}

export default function DoaPage() {
  const navigate = useNavigate();
  const [doas, setDoas] = useState<Doa[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('Semua');

  useEffect(() => {
    fetch('https://equran.id/api/doa')
      .then(res => res.json())
      .then(data => {
        const mappedDoas = (data.data || [])
          .filter((item: any) => {
            const nama = item.nama.toLowerCase();
            const grup = item.grup.toLowerCase();
            
            if (EXCLUDED_IDS.includes(item.id)) return false;
            if (ALWAYS_ALLOWED_IDS.includes(item.id)) return true;
            if (EXCLUDED_KEYWORDS.some(kw => nama.includes(kw) || grup.includes(kw))) return false;
            return KID_FRIENDLY_KEYWORDS.some(kw => nama.includes(kw) || grup.includes(kw));
          })
          .map((item: any) => ({
            id: item.id.toString(),
            doa: item.nama.replace(/Nabil\s+Ibrahim/ig, 'Nabi Ibrahim'),
            ayat: item.ar,
            latin: item.tr,
            artinya: item.idn,
            tentang: item.tentang,
            kategori: determineCategory(item.nama, item.grup)
          }));

        setDoas(mappedDoas);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const filteredDoas = doas.filter(doa => {
    const matchSearch = doa.doa.toLowerCase().includes(search.toLowerCase());
    const matchCategory = activeCategory === 'Semua' || doa.kategori === activeCategory;
    return matchSearch && matchCategory;
  });

  return (
    <div className="min-h-screen bg-amber-50 flex flex-col font-sans overflow-x-hidden relative">
      <BackgroundDecorations />
      
      <div className="bg-white border-b-4 border-amber-200 sticky top-0 z-20">
        <div className="max-w-4xl mx-auto px-4 h-20 flex items-center justify-between">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-amber-700 bg-amber-100 hover:bg-amber-200 hover:-translate-y-1 px-4 py-2 rounded-full font-bold transition-all shadow-sm border-b-4 border-amber-300 active:border-b-0 active:translate-y-1"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Kembali</span>
          </button>
          <div className="flex items-center gap-2 text-amber-500 font-black text-xl" style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}>
            <Star className="w-6 h-6 fill-amber-400" />
            <span>Hafalan Doa</span>
          </div>
        </div>
      </div>

      <main className="flex-grow max-w-4xl mx-auto w-full p-4 md:p-6 lg:py-8 relative z-10">
        <div className="mb-10 text-center bg-white p-6 md:p-8 rounded-[2rem] border-4 border-amber-200 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-100 rounded-bl-full -z-10 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-pink-100 rounded-tr-full -z-10 opacity-50"></div>
          
          <h1 className="text-3xl md:text-5xl font-black text-amber-600 mb-3" style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}>Doa Anak Saleh</h1>
          <p className="text-amber-800/70 font-medium text-lg">Yuk hafalkan doa-doa ini setiap hari!</p>
          
          <div className="mt-8 relative max-w-xl mx-auto mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-amber-400" />
            <input 
              type="text" 
              placeholder="Cari doa favoritmu..." 
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-14 pr-6 py-4 rounded-full border-4 border-amber-200 bg-amber-50 focus:outline-none focus:ring-4 focus:ring-amber-300 focus:border-amber-400 transition-all font-bold text-amber-900 placeholder:text-amber-400/70 text-lg shadow-inner"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 md:px-4 py-2 rounded-full font-bold transition-all border-2 text-xs md:text-sm ${activeCategory === cat ? 'bg-amber-400 text-white border-amber-500 shadow-md' : 'bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-bounce flex flex-col items-center">
              <Star className="w-16 h-16 text-amber-400 fill-amber-400 mb-4" />
              <p className="font-bold text-amber-600 text-lg">Memuat doa-doa...</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-6 md:gap-8">
            {filteredDoas.map((doa, idx) => (
              <motion.div 
                key={doa.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: idx * 0.05 > 1 ? 0 : idx * 0.05, type: 'spring' }}
              >
                <div 
                  id={`doa-card-${doa.id}`}
                  className="bg-white p-5 md:p-8 rounded-[2rem] border-4 border-amber-200 border-b-8 shadow-lg hover:shadow-xl transition-all relative overflow-hidden flex flex-col group bg-white/50"
                >
                  <div className="flex items-center justify-between gap-3 mb-6 border-b-2 border-amber-100 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-400 text-white font-black text-lg rounded-full flex items-center justify-center border-2 border-amber-200 shadow-sm shrink-0">
                        <Star className="w-5 h-5 md:w-6 md:h-6 fill-white" />
                      </div>
                      <h3 className="font-black text-xl md:text-2xl lg:text-3xl text-amber-800 leading-snug" style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}>
                        {doa.doa}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="bg-amber-50/80 p-4 sm:p-6 md:p-8 rounded-3xl border-2 border-amber-100 mb-6 flex-grow relative flex items-center justify-center min-h-[140px] shadow-inner">
                    <p className="text-center text-3xl md:text-4xl lg:text-5xl font-arabic leading-[1.8] md:leading-[1.8] text-amber-900 px-2 py-4" dir="rtl">
                      {doa.ayat}
                    </p>
                    
                    <div className="absolute top-2 left-2 text-amber-200 opacity-50">❀</div>
                    <div className="absolute top-2 right-2 text-amber-200 opacity-50">❀</div>
                    <div className="absolute bottom-2 left-2 text-amber-200 opacity-50">❀</div>
                    <div className="absolute bottom-2 right-2 text-amber-200 opacity-50">❀</div>
                  </div>
                  
                  <div className="space-y-4 md:space-y-5 bg-blue-50/50 p-6 md:p-8 rounded-3xl text-sm md:text-base border-2 border-blue-100">
                    <div>
                      <span className="text-amber-600 font-extrabold uppercase tracking-widest block mb-2 text-xs md:text-sm">BACAAN LATIN</span>
                      <p className="text-amber-900 font-bold italic text-base md:text-lg">{doa.latin}</p>
                    </div>
                    <div className="pt-3 border-t-2 border-blue-100 border-dashed">
                      <span className="text-sky-600 font-extrabold uppercase tracking-widest block mb-2 text-xs md:text-sm">ARTINYA</span>
                      <p className="text-slate-700 font-semibold text-base md:text-lg leading-relaxed">{doa.artinya}</p>
                    </div>
                    {doa.tentang && (
                      <div className="pt-3 border-t-2 border-blue-100 border-dashed mt-3">
                        <span className="text-emerald-600 font-extrabold uppercase tracking-widest block mb-2 text-xs md:text-sm">KETERANGAN</span>
                        <p className="text-slate-600 font-medium text-sm md:text-base leading-relaxed bg-white/60 p-4 rounded-xl border border-emerald-50 italic">{doa.tentang}</p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
            
            {filteredDoas.length === 0 && (
              <div className="text-center py-20 bg-white rounded-[2rem] border-4 border-amber-200 border-dashed col-span-full">
                <p className="font-bold text-amber-500 text-xl">Wah, doanya belum ketemu nih.</p>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
