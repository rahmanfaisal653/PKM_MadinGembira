import React from 'react';
import { NavLink } from 'react-router-dom';
import { Book, BookOpen, Gamepad2, Home, Smile, Star } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', path: '/', icon: Home },
  { label: 'Iqro', path: '/iqro', icon: BookOpen },
  { label: 'Doa', path: '/doa', icon: Star },
  { label: 'Kisah', path: '/story', icon: Smile },
  { label: 'Main', path: '/interactive', icon: Gamepad2 },
  { label: 'Juz', path: '/juz-amma', icon: Book },
  { label: 'Tajwid', path: '/tajwid', icon: BookOpen },
];

export default function MobileBottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-[9998] sm:hidden px-3 pb-3 pointer-events-none" aria-label="Navigasi bawah mobile">
      <div className="pointer-events-auto mx-auto max-w-md rounded-[1.5rem] border-4 border-white bg-white/95 p-2 shadow-[0_-10px_30px_-18px_rgba(0,0,0,0.45)] backdrop-blur-xl">
        <div className="flex gap-1 overflow-x-auto hide-scrollbar">
          {NAV_ITEMS.map(({ label, path, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                `flex min-w-[4.25rem] flex-col items-center justify-center gap-1 rounded-2xl px-2 py-2 text-[10px] font-black transition-all ${
                  isActive
                    ? 'bg-emerald-500 text-white shadow-md'
                    : 'text-emerald-700 hover:bg-emerald-50'
                }`
              }
            >
              <Icon className="h-5 w-5" />
              <span>{label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
