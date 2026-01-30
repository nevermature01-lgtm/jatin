'use client';

import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
}

export function StatCard({ icon: Icon, value, label }: StatCardProps) {
  return (
    <div className="group relative w-36 h-36 sm:w-48 sm:h-48 flex items-center justify-center text-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105">
      <div className="flex flex-col items-center justify-center">
        <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-accent mb-2 drop-shadow-[0_1px_2px_hsl(var(--accent)/0.7)]" />
        <p className="text-2xl sm:text-3xl font-headline text-white">{value}</p>
        <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-28 mx-auto">{label}</p>
      </div>
    </div>
  );
}
