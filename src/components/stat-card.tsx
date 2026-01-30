'use client';

import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
}

export function StatCard({ icon: Icon, value, label }: StatCardProps) {
  return (
    // The main container for positioning and sizing
    <div className="relative w-36 h-36 sm:w-48 sm:h-48">
      
      {/* Animated fluid border */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFD700_0%,transparent_50%)] blur-xl opacity-75" />
      </div>

      {/* Glass tube container (the visible border) */}
      <div className="absolute inset-0 rounded-2xl border-2 border-white/10" />

      {/* Transparent inside with content */}
      <div className="relative h-full w-full flex flex-col items-center justify-center bg-transparent rounded-2xl">
        <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-accent mb-2 drop-shadow-[0_1px_2px_hsl(var(--accent)/0.7)]" />
        <p className="text-2xl sm:text-3xl font-headline text-white">{value}</p>
        <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-28 mx-auto">{label}</p>
      </div>
    </div>
  );
}
