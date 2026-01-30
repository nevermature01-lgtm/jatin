'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/header';
import { HeroSlider } from '@/components/hero-slider';
import { useState } from 'react';
import { MovingRibbon } from '@/components/moving-ribbon';
import Stack from '@/components/stack';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const stackImages = [
    'https://picsum.photos/seed/1/500/500',
    'https://picsum.photos/seed/2/500/500',
    'https://picsum.photos/seed/3/500/500',
    'https://picsum.photos/seed/4/500/500',
  ];

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="relative w-full h-[95vh]">
          <HeroSlider onSlideChange={setCurrentSlide} />
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4">
            <div key={currentSlide}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-headline font-normal drop-shadow-2xl animate-fade-in animate-slide-up-slow">
                Explore the World’s Finest Properties
              </h1>
              <p className="mt-4 max-w-2xl text-base md:text-lg lg:text-xl font-body drop-shadow-lg mx-auto animate-fade-in animate-slide-up-fast">
                Your new life of elegance and comfort awaits among our curated collection of luxury homes.
              </p>
            </div>
            <Button asChild variant="outline" className="rounded-full font-body text-white transition-colors border-white/50 hover:bg-white/10 bg-black/20 backdrop-blur-sm md:hidden absolute bottom-40">
              <Link href="#">
                Contact us
              </Link>
            </Button>
          </div>
        </section>
        <MovingRibbon />
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline text-center mb-12">
              Quick check
            </h2>
            <div className="flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80">
                <Stack
                  randomRotation={true}
                  sendToBackOnClick={true}
                  cards={stackImages.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`card-${i + 1}`}
                      className="w-full h-full object-cover"
                      data-ai-hint="random image"
                    />
                  ))}
                  mobileClickOnly={true}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
