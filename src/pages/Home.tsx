import React from 'react';
import Footer from '../components/Footer';
import BackgroundDecorations from '../components/BackgroundDecorations';
import { BookOpen, Book, Star, Smile, ArrowRight, Gamepad2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import Logo from '../components/Logo';

export default function Home() {
  const navigate = useNavigate();

  const features = [
    {
      id: 'iqro',
      title: 'Belajar Iqro',
      desc: 'Yuk pintar baca Al-Qur\'an!',
      icon: <BookOpen className="w-12 h-12" />,
      color: 'bg-emerald-400 text-white shadow-emerald-200',
      path: '/iqro',
      delay: 0.1
    },
    {
      id: 'doa',
      title: 'Hafalan Doa',
      desc: 'Doa sehari-hari anak sholeh',
      icon: <Star className="w-12 h-12" />,
      color: 'bg-amber-400 text-white shadow-amber-200',
      path: '/doa',
      delay: 0.2
    },
    {
      id: 'story',
      title: 'Kisah Nabi',
      desc: 'Cerita inspiratif Islami',
      icon: <Smile className="w-12 h-12" />,
      color: 'bg-sky-400 text-white shadow-sky-200',
      path: '/story',
      delay: 0.3
    },
    {
      id: 'interactive',
      title: 'Zona Bermain',
      desc: 'Belajar interaktif yang seru',
      icon: <Gamepad2 className="w-12 h-12" />,
      color: 'bg-purple-400 text-white shadow-purple-200',
      path: '/interactive',
      delay: 0.4
    },
    {
      id: 'juzamma',
      title: 'Juz Amma',
      desc: 'Baca surat pendek Juz 30',
      icon: <Book className="w-12 h-12" />,
      color: 'bg-teal-400 text-white shadow-teal-200',
      path: '/juz-amma',
      delay: 0.5
    },
    {
      id: 'tajwid',
      title: 'Belajar Tajwid',
      desc: 'Mengenal hukum bacaan Al-Qur\'an',
      icon: <BookOpen className="w-12 h-12" />,
      color: 'bg-rose-400 text-white shadow-rose-200',
      path: '/tajwid',
      delay: 0.6
    }
  ];

  return (
    <div className="min-h-screen bg-green-50 text-gray-800 font-sans flex flex-col justify-between overflow-x-hidden relative">
      <BackgroundDecorations />

      <main className="max-w-6xl mx-auto w-full px-4 sm:px-6 py-12 flex-grow flex flex-col items-center justify-center relative z-10">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="text-center mb-10 md:mb-16 relative z-10 bg-white/90 p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border-4 border-white shadow-sm w-[95%] sm:w-full max-w-2xl mx-auto flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="flex flex-col items-center justify-center bg-white px-4 md:px-8 py-5 md:py-6 rounded-[2rem] md:rounded-[3rem] shadow-md mb-4 md:mb-6 border-4 border-emerald-100 gap-2 md:gap-3 hover:scale-[1.02] transition-transform duration-300 w-[95%] sm:w-auto max-w-full">
             <div className="w-20 h-20 md:w-28 md:h-28 relative shrink-0">
               <Logo size="none" className="w-full h-full border-4 shadow-sm" />
             </div>
             <div className="flex flex-col items-center gap-1.5 w-full">
               <span className="text-2xl sm:text-3xl md:text-5xl text-emerald-500 font-black tracking-wider text-center break-words leading-none" style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}>MadinGembira</span>
               <span className="text-emerald-700 font-bold uppercase tracking-wide md:tracking-widest text-[10px] sm:text-xs md:text-sm bg-emerald-50 px-3 py-1 rounded-full text-center mt-1">Belajar & Bermain</span>
             </div>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-emerald-600 mb-3 md:mb-4 pt-2 tracking-tight drop-shadow-sm font-sans w-full text-center break-words px-2" style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}>
            Halo Teman-Teman! 👋
          </h1>
          <p className="text-sm sm:text-base md:text-xl text-emerald-800/80 font-medium leading-relaxed px-4 md:px-8 w-full text-center">
            Selamat datang di Portal Belajar MadinGembira. Mau belajar apa kita hari ini? Pilih menu di bawah ya!
          </p>
        </motion.div>

        {/* Feature Cards Flex Layout */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8 w-full max-w-5xl">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: feature.delay, type: 'spring', stiffness: 200, damping: 15 }}
              onClick={() => navigate(feature.path)}
              whileHover={{ y: -8, scale: 1.05, rotate: feature.id === 'doa' || feature.id === 'interactive' ? 2 : -2 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1.33rem)] p-6 lg:p-8 rounded-[2.5rem] shadow-xl hover:shadow-2xl cursor-pointer flex flex-col items-center text-center transition-all border-4 border-white ${feature.color}`}
            >
               <div className="bg-white/20 p-5 rounded-full mb-5 transform transition-transform hover:rotate-12">
                  {feature.icon}
               </div>
               <h2 className="text-xl lg:text-3xl font-black mb-3 tracking-wide leading-tight" style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}>{feature.title}</h2>
               <p className="text-white/90 font-medium text-sm lg:text-base mb-6 px-1 leading-snug">
                 {feature.desc}
               </p>
               
               <div className="mt-auto bg-white/20 px-6 py-2 rounded-full font-bold uppercase text-xs lg:text-sm tracking-wider flex items-center gap-2 group-hover:bg-white/30 transition-colors">
                  Mulai
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </div>
            </motion.div>
          ))}
        </div>

      </main>

      <Footer />
    </div>
  );
}
