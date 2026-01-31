'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/header';
import { HeroSlider } from '@/components/hero-slider';
import { useState } from 'react';
import { MovingRibbon } from '@/components/moving-ribbon';
import { TrendingSlider } from '@/components/trending-slider';
import { ServicesSection } from '@/components/services-section';
import { AboutUsSection } from '@/components/about-us-section';
import { WhyOurTeamStandsOut } from '@/components/why-our-team-stands-out';
import { RealEstateJourneySection } from '@/components/real-estate-journey-section';
import { FaqSection } from '@/components/faq-section';
import { Footer } from '@/components/footer';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="relative w-screen h-[95vh] overflow-x-hidden">
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
        <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-1">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-headline text-white mb-6">
                  Trending
                </h2>
                <p className="text-base text-neutral-300 mb-8 max-w-sm">
                  Discover the Property that are capturing attention in the market.
                </p>
                <Button size="lg" className="bg-white text-neutral-900 hover:bg-neutral-200 rounded-full px-8 py-6 text-base">
                  See all
                </Button>
              </div>
              <div className="lg:col-span-2">
                <TrendingSlider />
              </div>
            </div>
          </div>
        </section>
        <ServicesSection />
        <AboutUsSection />
        <WhyOurTeamStandsOut />
        <RealEstateJourneySection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
