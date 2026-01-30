'use client';

import { LucideIcon } from 'lucide-react';

interface CircularTextProps {
  icon: LucideIcon;
  value: string;
  label: string;
  index: number;
}

export function CircularText({ icon: Icon, value, label, index }: CircularTextProps) {
  const uniqueId = `circle-path-${index}`;
  // Different animation durations for variety
  const animationDuration = 15 + index * 5;
  // Alternate animation direction
  const animationDirection = index % 2 === 0 ? 'normal' : 'reverse';

  return (
    <div className="relative w-40 h-40 sm:w-48 sm:h-48 flex items-center justify-center group">
      {/* The rotating text */}
      <div
        className="absolute inset-0 animate-spin text-neutral-400"
        style={{
          animationDuration: `${animationDuration}s`,
          animationDirection: animationDirection,
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
          <defs>
            <path
              id={uniqueId}
              d="M 50, 50 m -48, 0 a 48,48 0 1,1 96,0 a 48,48 0 1,1 -96,0"
              fill="none"
            />
          </defs>
          <text dy="-1" className="text-xs font-semibold uppercase tracking-wider fill-current">
            <textPath href={`#${uniqueId}`} startOffset="50%" textAnchor="middle">
              {label.split('').join(' ')}
            </textPath>
          </text>
        </svg>
      </div>

      {/* The static center content */}
      <div className="text-center transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-accent mx-auto mb-2 drop-shadow-[0_1px_2px_hsl(var(--accent)/0.7)]" />
        <p className="text-3xl sm:text-4xl font-headline text-white">{value}</p>
      </div>
    </div>
  );
}
