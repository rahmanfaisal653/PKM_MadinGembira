import React from 'react';
import { Sun, Cloud, Star, Music, Heart, Sparkles, Pencil, Moon, Palette, Smile } from 'lucide-react';

const DECORATIONS = [
  { p: 'top-10 left-[2%] md:left-[5%]', c: 'text-amber-300 opacity-20', I: Sun, s: 'w-24 h-24 stroke-[1.5] animate-[spin_10s_linear_infinite]' },
  { p: 'top-1/4 left-[3%] md:left-[8%]', c: 'text-emerald-300 opacity-20', I: Star, s: 'w-10 h-10 stroke-[2] animate-bounce' },
  { p: 'top-1/2 left-[2%] md:left-[5%]', c: 'text-indigo-300 opacity-20', I: Moon, s: 'w-16 h-16 stroke-[1.5] rotate-[20deg]' },
  { p: 'bottom-[30%] left-[4%] md:left-[10%]', c: 'text-orange-300 opacity-20', I: Smile, s: 'w-16 h-16 stroke-[1.5] rotate-[10deg] animate-pulse' },
  { p: 'bottom-10 left-[2%] md:left-[6%]', c: 'text-rose-300 opacity-20', I: Heart, s: 'w-14 h-14 stroke-[1.5] rotate-12 animate-[bounce_4s_infinite]' },
  { p: 'top-20 right-[2%] md:right-[5%]', c: 'text-sky-200 opacity-20', I: Cloud, s: 'w-32 h-32 stroke-[1.5] animate-pulse' },
  { p: 'top-[40%] right-[3%] md:right-[8%]', c: 'text-purple-300 opacity-20', I: Music, s: 'w-14 h-14 stroke-[1.5] -rotate-12 animate-[pulse_3s_ease-in-out_infinite]' },
  { p: 'top-[60%] right-[2%] md:right-[5%]', c: 'text-amber-400 opacity-20', I: Pencil, s: 'w-16 h-16 stroke-[1.5] -rotate-45' },
  { p: 'bottom-[20%] right-[4%] md:right-[10%]', c: 'text-fuchsia-300 opacity-20', I: Palette, s: 'w-16 h-16 stroke-[1.5] -rotate-[15deg]' },
  { p: 'bottom-5 right-[2%] md:right-[5%]', c: 'text-sky-300 opacity-20', I: Sparkles, s: 'w-20 h-20 stroke-[1.5] animate-[spin_5s_linear_infinite]' },
  { p: 'top-[15%] left-[30%]', c: 'text-emerald-200 opacity-10 md:opacity-20', I: Cloud, s: 'w-24 h-24 stroke-[1.5] animate-[bounce_6s_infinite]' },
  { p: 'top-[35%] right-[25%]', c: 'text-amber-200 opacity-10 md:opacity-20', I: Star, s: 'w-12 h-12 stroke-[2] animate-pulse' },
  { p: 'bottom-[40%] left-[25%]', c: 'text-rose-200 opacity-10 md:opacity-20', I: Heart, s: 'w-20 h-20 stroke-[1.5] animate-[bounce_5s_infinite]' },
  { p: 'bottom-[15%] right-[30%]', c: 'text-sky-200 opacity-10 md:opacity-20', I: Sun, s: 'w-28 h-28 stroke-[1.5] animate-[spin_15s_linear_infinite]' },
  { p: 'top-[50%] left-[45%] transform -translate-x-1/2 -translate-y-1/2', c: 'text-purple-200 opacity-10 md:opacity-20', I: Sparkles, s: 'w-32 h-32 stroke-[1] animate-pulse' }
];

export default function BackgroundDecorations() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {DECORATIONS.map((d, i) => (
        <div key={i} className={`absolute ${d.p} ${d.c}`}>
          <d.I className={d.s} />
        </div>
      ))}
    </div>
  );
}
