'use client';

import React from 'react';

export function CircularTextLogo() {
  const text = '• LANDMARKLANE • LANDMARKLANE ';
  
  return (
    <div className="absolute top-0 right-0 w-36 h-36 -mt-10 -mr-4 sm:w-48 sm:h-48 sm:-mt-16 sm:-mr-8 block opacity-20 pointer-events-none">
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
                <text className="text-xs uppercase tracking-widest fill-current text-neutral-400">
                <textPath href="#circle">
                    {text}
                </textPath>
                </text>
            </svg>
        </div>
    </div>
  );
}
