'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/header';
import { HeroSlider } from '@/components/hero-slider';
import { useState } from 'react';
import { MovingRibbon } from '@/components/moving-ribbon';
import Stack from '@/components/stack';
import Image from 'next/image';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const stackImages = [
    { src: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=800&auto=format&fit=crop", hint: "modern house" },
    { src: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=800&auto=format&fit=crop", hint: "suburban home" },
    { src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop", hint: "luxury villa" },
    { src: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=800&auto=format&fit=crop", hint: "modern architecture" }
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
        <section className="py-16 sm:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-headline text-foreground">Find Your Perfect Escape</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Flick through our exclusive collection of properties. Your dream home is just a swipe away.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <Stack
                  randomRotation={true}
                  sendToBackOnClick={true}
                  cards={stackImages.map((image, i) => (
                    <Image
                      key={i}
                      src={image.src}
                      alt={`card-${i + 1}`}
                      fill
                      className="object-cover"
                      data-ai-hint={image.hint}
                      sizes="(max-width: 768px) 16rem, (max-width: 1024px) 20rem, 24rem"
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
