'use client';

import { cn } from '@/lib/utils';
import React from 'react';

export function CircularTextLogo({ className }: { className?: string }) {
  const text = '• LANDMARKLANE • LANDMARKLANE ';
  
  return (
    <div className={cn("absolute w-36 h-36 sm:w-48 sm:h-48 block pointer-events-none", className)}>
        <div className="relative w-full h-full animate-spin-slow">
            <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                <path
                    id="circle"
                    fill="none"
                    d="
                    M 50, 50
                    m -37, 0
                    a 37,37 0 1,1 74,0
                    a 37,37 0 1,1 -74,0"
                />
                </defs>
                <text className="text-xs uppercase tracking-widest fill-current text-accent">
                <textPath href="#circle">
                    {text}
                </textPath>
                </text>
            </svg>
        </div>
    </div>
  );
}
