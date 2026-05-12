import React from 'react';
import { Star, Smile } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-emerald-500 text-white py-10 mt-auto rounded-t-[3rem] border-t-8 border-emerald-400 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-4 bg-white/20"></div>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Star className="w-6 h-6 text-amber-300" />
          <h3 className="font-black text-2xl tracking-wider" style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}>MadinGembira</h3>
          <Smile className="w-6 h-6 text-amber-300" />
        </div>
        
        <p className="text-emerald-100 font-medium mb-6 text-sm max-w-md mx-auto">
          Belajar agama itu seru dan menyenangkan! Mari bersama-sama menjadi anak sholeh.
        </p>

        <div className="flex justify-center gap-4 text-emerald-100 text-xs font-bold font-sans opacity-80 uppercase tracking-wider">
           <span>Taman Belajar Islami</span>
           <span>•</span>
           <span>Bandung</span>
        </div>
      </div>
    </footer>
  );
}
