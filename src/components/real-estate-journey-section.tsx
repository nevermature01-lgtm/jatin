'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Sparkles } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function RealEstateJourneySection() {
  const journeyBg = PlaceHolderImages.find((img) => img.id === 'journey-background');
  const avatar1 = PlaceHolderImages.find((img) => img.id === 'avatar-1');
  const avatar2 = PlaceHolderImages.find((img) => img.id === 'avatar-2');
  const avatar3 = PlaceHolderImages.find((img) => img.id === 'avatar-3');

  if (!journeyBg || !avatar1 || !avatar2 || !avatar3) {
      return null;
  }

  const avatars = [
    { src: avatar1.imageUrl, alt: 'Satisfied client 1', fallback: 'U1' },
    { src: avatar2.imageUrl, alt: 'Satisfied client 2', fallback: 'U2' },
    { src: avatar3.imageUrl, alt: 'Satisfied client 3', fallback: 'U3' },
  ];

  return (
    <section className="relative w-full h-[70vh] sm:h-[80vh] text-white">
      <div className="absolute inset-0">
        <Image
          src={journeyBg.imageUrl}
          alt={journeyBg.description}
          fill
          className="object-cover"
          data-ai-hint={journeyBg.imageHint}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center w-full text-center md:text-left">
          {/* Left Side */}
          <div className="flex flex-col items-center md:items-start gap-6 mt-12 md:mt-0">
            <p className="text-sm font-bold tracking-widest uppercase">
              Discover More
            </p>
            <h2 className="text-5xl md:text-6xl font-headline font-normal">
              Your Real Estate{' '}
              <em className="font-serif italic">Journey Starts Here</em>
            </h2>
            <div className="flex items-center">
              <div className="flex -space-x-4">
                {avatars.map((avatar, index) => (
                  <Avatar key={index} className="border-2 border-background">
                    <AvatarImage src={avatar.src} alt={avatar.alt} />
                    <AvatarFallback>{avatar.fallback}</AvatarFallback>
                  </Avatar>
                ))}
                <Avatar className="border-2 border-background bg-primary">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                        <Sparkles className="w-5 h-5" />
                    </AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center md:items-start gap-8 md:pl-16">
            <p className="text-lg text-neutral-200 max-w-md">
              Begin your property search now and access exclusive listings,
              expert advice, and personalized recommendations for your perfect
              match
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-neutral-900 hover:bg-neutral-200 rounded-sm px-6 py-6 text-base">
                <Link href="#">
                  Contact Us &gt;
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/80 text-white hover:bg-white/10 bg-black/20 backdrop-blur-sm rounded-sm px-6 py-6 text-base">
                <Link href="#">
                  View Listings &gt;
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
