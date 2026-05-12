import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="sticky top-4 mx-4 sm:mx-6 md:max-w-[1200px] xl:mx-auto bg-white z-50 border-4 border-emerald-200 border-b-[6px] rounded-[2rem] shadow-lg mb-6 active:border-b-4 active:translate-y-[2px] transition-all">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-4 cursor-pointer group" onClick={() => navigate('/')}>
            <Logo size="md" className="group-hover:scale-110" />
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-emerald-600 leading-none tracking-tight" style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}>
                MadinGembira
              </h1>
              <p className="text-[10px] sm:text-xs font-bold tracking-widest text-amber-500 uppercase mt-1">
                Belajar & Bermain
              </p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-3">
            <button onClick={() => navigate('/')} className="px-6 py-2.5 border-4 border-emerald-400 rounded-full text-emerald-600 font-bold text-sm cursor-pointer hover:bg-emerald-50 transition-colors shadow-sm">
              Beranda
            </button>
          </div>

          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-emerald-600 hover:text-emerald-500 focus:outline-none p-2 bg-emerald-50 rounded-full"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t-4 border-emerald-100">
          <div className="px-4 py-4 flex flex-col gap-3">
            <button onClick={() => { navigate('/'); setIsOpen(false); }} className="w-full text-left px-4 py-3 rounded-2xl text-base font-bold text-emerald-600 bg-emerald-50 border-2 border-emerald-100">
              Beranda
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
