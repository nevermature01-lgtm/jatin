'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import React from 'react';

export function HeroSlider() {
  const heroImages = PlaceHolderImages.filter(img => 
    ['hero-background', 'property-1', 'property-3', 'property-5'].includes(img.id)
  );
  
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <div className="absolute inset-0 overflow-hidden">
        <Carousel
            className="w-full h-full"
            plugins={[plugin.current]}
            opts={{
                loop: true,
            }}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {heroImages.map((image, index) => (
                    <CarouselItem key={image.id}>
                        <div className="w-full h-screen relative">
                            <Image
                                src={image.imageUrl}
                                alt={image.description}
                                fill
                                className="object-cover animate-zoom-in"
                                priority={index === 0}
                                data-ai-hint={image.imageHint}
                                sizes="100vw"
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-8 top-1/2 -translate-y-1/2 z-10 text-white bg-black/30 hover:bg-black/50 border-white/30 hover:border-white/50" />
            <CarouselNext className="absolute right-8 top-1/2 -translate-y-1/2 z-10 text-white bg-black/30 hover:bg-black/50 border-white/30 hover:border-white/50" />
        </Carousel>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />
    </div>
  );
}
