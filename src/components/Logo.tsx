import React from 'react';
import { BookOpen } from 'lucide-react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'none';
}

export default function Logo({ className = "", size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-10 h-10 border-2',
    md: 'w-14 h-14 border-4',
    lg: 'w-20 h-20 border-4',
    xl: 'w-28 h-28 border-4',
    none: ''
  };

  return (
    <div className={`relative flex items-center justify-center bg-emerald-500 rounded-full border-amber-300 shadow-sm overflow-hidden transform hover:rotate-6 transition-transform shrink-0 ${size !== 'none' ? sizeClasses[size] : ''} ${className}`}>
      <BookOpen className="w-[45%] h-[45%] text-white relative z-10 mt-1" strokeWidth={2.5} />
    </div>
  );
}
