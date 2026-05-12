import React from 'react';
import { motion } from 'motion/react';
import { Award, Users } from 'lucide-react';

export default function Teachers() {
  return (
    <section id="teachers" className="bento-card bg-amber-50 relative overflow-hidden border-none text-gray-800">
      <div className="relative w-full h-full flex flex-col">
        
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-xs font-bold text-amber-800 uppercase tracking-widest">Pengurus & Pengajar</h2>
        </div>

        <div className="flex flex-col gap-4 flex-grow justify-center">
          {/* Kepala Madrasah */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 bg-white/60 p-3 rounded-xl border border-amber-100 shadow-sm transition-colors hover:bg-white"
          >
            <div className="w-12 h-12 rounded-full bg-amber-200 border-2 border-white shadow-sm flex items-center justify-center flex-shrink-0 text-amber-800">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold">Ust. Wawan Setiawan</p>
              <p className="text-[10px] text-gray-500 font-medium">Kepala Madrasah / 0812-1444-0608</p>
            </div>
          </motion.div>

          {/* Komite Madrasah */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4 bg-white/60 p-3 rounded-xl border border-amber-100 shadow-sm transition-colors hover:bg-white"
          >
            <div className="w-12 h-12 rounded-full bg-amber-200 border-2 border-white shadow-sm flex items-center justify-center flex-shrink-0 text-amber-800">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold">H. Endang Sobandi</p>
              <p className="text-[10px] text-gray-500 font-medium">Komite Madrasah / 0815-6085-891</p>
            </div>
          </motion.div>
          
          {/* Mahasiswa Relawan */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 bg-white/60 p-3 rounded-xl border border-amber-100 shadow-sm transition-colors hover:bg-white"
          >
            <div className="w-12 h-12 rounded-full bg-amber-100 border-2 border-white shadow-sm flex items-center justify-center flex-shrink-0 text-amber-600">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold">Mahasiswa Relawan</p>
              <p className="text-[10px] text-gray-500 font-medium">Bimbel Laskar Pelangi</p>
            </div>
          </motion.div>
        </div>

        <div className="mt-6">
           <button className="w-full py-2.5 bg-amber-200 hover:bg-amber-300 transition-colors text-amber-900 font-bold rounded-lg text-xs">Lihat Semua Pengajar</button>
        </div>

      </div>
    </section>
  );
}
