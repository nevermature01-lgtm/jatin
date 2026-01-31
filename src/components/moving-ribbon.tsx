'use client';

import React from 'react';

export function MovingRibbon() {
  // Repeating the content to ensure it's long enough for a seamless loop
  const text = 'LANDMARKLANE • ';
  const content = Array(30).fill(text).join('');

  return (
    <section className="w-full bg-gradient-to-r from-amber-400 to-amber-600 text-accent-foreground py-2 overflow-x-hidden">
      <div className="flex whitespace-nowrap">
        <div className="animate-marquee py-2">
          <span className="text-2xl font-headline tracking-wider">{content}</span>
        </div>
        <div className="animate-marquee py-2" aria-hidden="true">
          <span className="text-2xl font-headline tracking-wider">{content}</span>
        </div>
      </div>
    </section>
  );
}
