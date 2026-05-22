import React, { useState } from 'react';
import Footer from '../components/Footer';
import BackgroundDecorations from '../components/BackgroundDecorations';
import { BookOpen, Book, Star, Smile, ArrowRight, Gamepad2, Heart, ShieldCheck, Sparkles, CheckCircle2, Menu, X, Home as HomeIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Logo from '../components/Logo';

export default function Home() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const features = [
    { id: 'iqro', title: 'Belajar Iqro', desc: 'Mulai dari huruf hijaiyah sampai latihan halaman Iqro 1-6.', icon: <BookOpen className="w-10 h-10 md:w-12 md:h-12" />, color: 'from-emerald-400 to-emerald-600 shadow-emerald-200', path: '/iqro', delay: 0.04 },
    { id: 'doa', title: 'Hafalan Doa', desc: 'Doa harian anak dengan Arab, latin, arti, dan keterangan.', icon: <Star className="w-10 h-10 md:w-12 md:h-12" />, color: 'from-amber-300 to-orange-400 shadow-amber-200', path: '/doa', delay: 0.08 },
    { id: 'story', title: 'Kisah Nabi', desc: 'Cerita 25 nabi dalam gaya buku bacaan yang ramah anak.', icon: <Smile className="w-10 h-10 md:w-12 md:h-12" />, color: 'from-sky-400 to-blue-500 shadow-sky-200', path: '/story', delay: 0.12 },
    { id: 'interactive', title: 'Zona Bermain', desc: 'Kuis doa, kisah nabi, dan tebak huruf hijaiyah.', icon: <Gamepad2 className="w-10 h-10 md:w-12 md:h-12" />, color: 'from-fuchsia-400 to-purple-500 shadow-purple-200', path: '/interactive', delay: 0.16 },
    { id: 'juzamma', title: 'Juz Amma', desc: 'Baca surat pendek Juz 30 dengan penanda warna tajwid.', icon: <Book className="w-10 h-10 md:w-12 md:h-12" />, color: 'from-teal-400 to-cyan-600 shadow-teal-200', path: '/juz-amma', delay: 0.2 },
    { id: 'tajwid', title: 'Belajar Tajwid', desc: 'Mengenal hukum bacaan dasar lewat contoh sederhana.', icon: <BookOpen className="w-10 h-10 md:w-12 md:h-12" />, color: 'from-rose-400 to-pink-500 shadow-rose-200', path: '/tajwid', delay: 0.24 }
  ];

  const highlights = [
    { icon: <Heart className="w-5 h-5" />, title: 'Ramah Anak', desc: 'Bahasa ringan, warna ceria, dan interaksi sederhana.' },
    { icon: <ShieldCheck className="w-5 h-5" />, title: 'Bernuansa Islami', desc: 'Berisi Iqro, doa, kisah nabi, tajwid, dan Juz Amma.' },
    { icon: <Sparkles className="w-5 h-5" />, title: 'Belajar Bertahap', desc: 'Anak bisa mulai dari pengenalan huruf hingga latihan membaca.' }
  ];

  const openMenu = () => {
    setShowMenu(true);
    setMobileNavOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const backToIntro = () => {
    setShowMenu(false);
    setMobileNavOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f4fff7] text-slate-800 font-sans flex flex-col justify-between overflow-x-hidden relative">
      <BackgroundDecorations />

      <header className="sticky top-0 z-50 px-3 pt-3 md:px-6 md:pt-5 pointer-events-none">
        <nav className="pointer-events-auto max-w-6xl mx-auto bg-white/90 backdrop-blur-xl border-4 border-white shadow-lg rounded-[1.5rem] md:rounded-[2rem] px-3 md:px-5 py-3">
          <div className="flex items-center justify-between gap-3">
            <button onClick={backToIntro} className="flex items-center gap-2 min-w-0 text-left">
              <Logo size="none" className="w-12 h-12 md:w-14 md:h-14 border-4 shadow-sm shrink-0" />
              <div className="min-w-0">
                <p className="text-xl md:text-2xl font-black text-emerald-600 leading-none truncate" style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}>MadinGembira</p>
                <p className="hidden sm:block text-[10px] md:text-xs font-black tracking-widest uppercase text-amber-500 mt-1">Belajar & Bermain Islami</p>
              </div>
            </button>

            <div className="hidden lg:flex items-center gap-2">
              <button onClick={backToIntro} className="rounded-full px-4 py-2 text-sm font-black bg-emerald-50 text-emerald-700 border-2 border-emerald-100 transition-all hover:-translate-y-0.5">
                Landing Page
              </button>
              <button onClick={openMenu} className="rounded-full px-4 py-2 text-sm font-black bg-amber-300 text-amber-950 border-b-4 border-amber-500 shadow-sm transition-all hover:-translate-y-0.5 active:border-b-0 active:translate-y-1">
                Masuk Menu
              </button>
            </div>

            <div className="hidden sm:flex lg:hidden items-center gap-2">
              <button onClick={showMenu ? backToIntro : openMenu} className="inline-flex items-center gap-2 bg-emerald-500 text-white px-5 py-3 rounded-full font-black border-b-4 border-emerald-700 shadow-sm active:border-b-0 active:translate-y-1 transition-all">
                {showMenu ? 'Intro' : 'Mulai'}
                {showMenu ? <HomeIcon className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </button>
            </div>

            <button onClick={() => setMobileNavOpen(v => !v)} className="sm:hidden w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 border-2 border-emerald-100 flex items-center justify-center" aria-label="Buka menu navigasi">
              {mobileNavOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          <AnimatePresence>
            {mobileNavOpen && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="sm:hidden overflow-hidden">
                <div className="grid grid-cols-2 gap-2 pt-3 mt-3 border-t-2 border-emerald-50">
                  <button onClick={backToIntro} className="flex items-center justify-center gap-2 rounded-2xl bg-emerald-50 text-emerald-700 py-3 font-black border-2 border-emerald-100">
                    <HomeIcon className="w-4 h-4" />
                    Intro
                  </button>
                  <button onClick={openMenu} className="flex items-center justify-center gap-2 rounded-2xl bg-amber-300 text-amber-950 py-3 font-black border-b-4 border-amber-500">
                    Menu
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto w-full px-4 sm:px-6 pt-8 md:pt-10 pb-10 md:pb-14 flex-grow relative z-10">
        <AnimatePresence mode="wait">
          {!showMenu ? (
            <motion.section
              key="landing"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ type: 'spring', damping: 20 }}
              className="min-h-[calc(100dvh-8rem)] md:min-h-[calc(100dvh-9rem)] flex items-center"
            >
              <div className="w-full grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-10 items-center">
                <div className="relative bg-white/95 rounded-[2rem] md:rounded-[3rem] border-4 border-white shadow-xl overflow-hidden p-6 sm:p-8 md:p-10">
                  <div className="absolute -top-24 -right-20 w-64 h-64 bg-emerald-100 rounded-full opacity-80" />
                  <div className="absolute -bottom-28 -left-20 w-72 h-72 bg-amber-100 rounded-full opacity-80" />
                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full font-black text-xs md:text-sm mb-5 border-2 border-emerald-100">
                      <CheckCircle2 className="w-4 h-4" />
                      Portal Belajar Islam Anak
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-emerald-700 tracking-tight leading-[0.98] mb-5" style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}>
                      Belajar agama jadi ringan, ceria, dan terarah.
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-slate-600 font-semibold leading-relaxed max-w-2xl mb-7">
                      MadinGembira adalah web pendamping belajar anak untuk mengenal huruf hijaiyah, membaca Iqro, menghafal doa harian, menyimak kisah nabi, memahami tajwid dasar, dan membaca Juz Amma.
                    </p>
                    <div className="grid sm:grid-cols-3 gap-3 mb-7">
                      {highlights.map((item) => (
                        <div key={item.title} className="bg-white/80 border-2 border-emerald-100 rounded-2xl p-4 shadow-sm">
                          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3">{item.icon}</div>
                          <h2 className="font-black text-emerald-700 text-sm md:text-base mb-1">{item.title}</h2>
                          <p className="text-xs md:text-sm text-slate-500 font-semibold leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                    <button onClick={openMenu} className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white px-9 py-4 rounded-full font-black text-lg shadow-xl border-b-4 border-emerald-700 active:border-b-0 active:translate-y-1 transition-all">
                      Mulai Masuk Menu
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="relative bg-gradient-to-br from-emerald-100 via-white to-amber-100 rounded-[2rem] md:rounded-[3rem] border-4 border-white shadow-2xl p-6 md:p-8 overflow-hidden">
                  <div className="absolute -right-16 -top-16 w-48 h-48 bg-white/60 rounded-full" />
                  <div className="relative z-10">
                    <Logo size="none" className="w-24 h-24 md:w-32 md:h-32 border-4 shadow-md mx-auto mb-5" />
                    <h2 className="text-3xl md:text-5xl font-black text-center text-emerald-700 mb-4" style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}>Satu web, banyak cara belajar</h2>
                    <p className="text-center text-slate-600 font-semibold leading-relaxed mb-6">
                      Landing page ini hanya menjelaskan webnya. Semua pilihan modul sengaja dipisah dan baru muncul setelah tombol mulai ditekan.
                    </p>
                    <div className="bg-white/80 rounded-[1.5rem] p-5 border-4 border-emerald-50 shadow-inner">
                      <p className="font-black text-emerald-700 mb-2">Catatan pendampingan</p>
                      <p className="text-sm font-semibold text-slate-600 leading-relaxed">Materi ini media bantu belajar. Bacaan Al-Qur'an, tajwid, dan pemahaman agama tetap paling baik didampingi guru ngaji atau orang tua.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          ) : (
            <motion.section
              key="menu"
              id="menu-belajar"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 18 }}
              transition={{ type: 'spring', damping: 20 }}
              className="min-h-[calc(100dvh-8rem)] md:min-h-[calc(100dvh-9rem)] flex items-center"
            >
              <div className="w-full bg-white/95 rounded-[2rem] md:rounded-[3rem] border-4 border-white shadow-xl p-5 sm:p-7 md:p-9">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-7 md:mb-9">
                  <div>
                    <span className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full font-black text-xs md:text-sm mb-3">
                      <Sparkles className="w-4 h-4" />
                      Pilih Modul
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-emerald-700 leading-tight" style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}>Mau belajar apa hari ini?</h2>
                    <p className="text-slate-500 font-semibold mt-2 max-w-2xl">Menu ini muncul setelah landing page, supaya anak masuk bertahap: kenal webnya dulu, baru pilih kegiatan.</p>
                  </div>
                  <button onClick={backToIntro} className="hidden md:inline-flex items-center justify-center gap-2 bg-emerald-50 text-emerald-700 px-5 py-3 rounded-full font-black border-2 border-emerald-100 hover:bg-emerald-100 transition-colors">
                    Kembali ke Landing
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                  {features.map((feature, idx) => (
                    <motion.button
                      key={feature.id}
                      onClick={() => navigate(feature.path)}
                      initial={{ opacity: 0, y: 22, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: feature.delay, type: 'spring', stiffness: 180, damping: 16 }}
                      whileHover={{ y: -6, scale: 1.02, rotate: idx % 2 === 0 ? -1 : 1 }}
                      whileTap={{ scale: 0.98 }}
                      className={`group min-h-44 md:min-h-56 bg-gradient-to-br ${feature.color} text-white rounded-[2rem] md:rounded-[2.5rem] p-5 md:p-7 shadow-xl border-4 border-white flex flex-col text-left overflow-hidden relative`}
                    >
                      <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/15 rounded-full" />
                      <div className="absolute -left-14 -bottom-14 w-36 h-36 bg-black/5 rounded-full" />
                      <div className="relative z-10 flex items-start justify-between gap-4 mb-5">
                        <div className="bg-white/20 p-4 rounded-[1.5rem] border-2 border-white/20 group-hover:rotate-6 transition-transform">{feature.icon}</div>
                        <div className="bg-white/20 rounded-full px-3 py-1 text-xs font-black uppercase tracking-wider">Modul {idx + 1}</div>
                      </div>
                      <div className="relative z-10 mt-auto">
                        <h3 className="text-2xl md:text-3xl font-black mb-3 leading-tight" style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}>{feature.title}</h3>
                        <p className="text-white/95 font-semibold text-sm md:text-base leading-relaxed mb-5">{feature.desc}</p>
                        <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-5 py-2 font-black text-sm uppercase tracking-wider">Buka <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></div>
                      </div>
                    </motion.button>
                  ))}
                </div>

                <button onClick={backToIntro} className="md:hidden w-full mt-6 bg-emerald-50 text-emerald-700 px-5 py-4 rounded-2xl font-black border-2 border-emerald-100">
                  Kembali ke Landing
                </button>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
