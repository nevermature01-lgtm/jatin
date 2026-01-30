'use client';

import React from 'react';

const RibbonContent = () => {
    const items = [
        'LANDMARKLANE', ' • ',
        'Dholera', ' • ',
        'Noida', ' • ',
        'Vrindavan', ' • ',
        'Agra', ' • ',
        'LANDMARKLANE', ' • ',
      ];
    return (
        <>
            {items.map((item, index) => (
                <span key={index} className="mx-4 text-2xl font-headline tracking-wider">
                    {item}
                </span>
            ))}
        </>
    )
}

export function MovingRibbon() {
  return (
    <section className="w-full bg-accent text-accent-foreground py-4 overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee">
            <div className="flex-shrink-0 flex items-center">
                <RibbonContent />
            </div>
            <div aria-hidden="true" className="flex-shrink-0 flex items-center">
                <RibbonContent />
            </div>
        </div>
    </section>
  );
}
