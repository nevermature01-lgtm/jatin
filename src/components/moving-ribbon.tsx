'use client';

import React from 'react';

const RibbonContent = () => {
    const items = [
        'Luxury Villas', ' • ', 'Penthouse Collection', ' • ', 'Waterfront Estates', ' • ', 'Private Islands', ' • ', 'Equestrian Properties', ' • ', 'Historic Manors', ' • ', 'Urban Lofts', ' • ', 'Mountain Retreats', ' • ',
        'Refine until it feels editorial, luxury, and premium', ' • ',
        'Luxury Villas', ' • ', 'Penthouse Collection', ' • ', 'Waterfront Estates', ' • ', 'Private Islands', ' • ', 'Equestrian Properties', ' • ', 'Historic Manors', ' • ', 'Urban Lofts', ' • ', 'Mountain Retreats', ' • ',
        'Refine until it feels editorial, luxury, and premium', ' • ',
        'Luxury Villas', ' • ', 'Penthouse Collection', ' • ', 'Waterfront Estates', ' • ', 'Private Islands', ' • ', 'Equestrian Properties', ' • ', 'Historic Manors', ' • ', 'Urban Lofts', ' • ', 'Mountain Retreats', ' • ',
        'Refine until it feels editorial, luxury, and premium', ' • ',
        'Luxury Villas', ' • ', 'Penthouse Collection', ' • ', 'Waterfront Estates', ' • ', 'Private Islands', ' • ', 'Equestrian Properties', ' • ', 'Historic Manors', ' • ', 'Urban Lofts', ' • ', 'Mountain Retreats', ' • ',
        'Refine until it feels editorial, luxury, and premium', ' • ',
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
    <section className="w-screen bg-gradient-to-r from-amber-400 to-amber-600 text-accent-foreground py-2 overflow-hidden whitespace-nowrap">
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
