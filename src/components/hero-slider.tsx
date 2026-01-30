'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import React, { useCallback, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function HeroSlider() {
  const heroImages = PlaceHolderImages.filter(img => 
    ['property-1', 'property-3', 'property-5'].includes(img.id)
  );
  
  const reversedHeroImages = [...heroImages].reverse();

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const onDotButtonClick = useCallback((index: number) => {
    api?.scrollTo(index);
  }, [api]);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="absolute inset-0 overflow-hidden">
        <Carousel
            setApi={setApi}
            className="w-full h-full"
            plugins={[plugin.current]}
            opts={{
                loop: true,
            }}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {heroImages.map((image, index) => {
                    const mobileImage = reversedHeroImages[index];
                    return (
                        <CarouselItem key={image.id}>
                            <div className="w-full h-screen relative">
                                {/* Desktop Image */}
                                <Image
                                    src={image.imageUrl}
                                    alt={image.description}
                                    fill
                                    className="object-cover animate-zoom-in hidden md:block"
                                    priority={index === 0}
                                    data-ai-hint={image.imageHint}
                                    sizes="100vw"
                                />
                                {/* Mobile Image */}
                                <Image
                                    src={mobileImage.mobileImageUrl || mobileImage.imageUrl}
                                    alt={mobileImage.description}
                                    fill
                                    className="object-cover animate-zoom-in md:hidden"
                                    priority={index === 0}
                                    data-ai-hint={mobileImage.imageHint}
                                    sizes="100vw"
                                />
                            </div>
                        </CarouselItem>
                    );
                })}
            </CarouselContent>
        </Carousel>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
            {Array.from({ length: count }).map((_, index) => (
                <button
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={cn(
                    'h-1 w-8 bg-white/50 transition-all',
                    current === index ? 'bg-white' : 'bg-white/50'
                )}
                />
            ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />
    </div>
  );
}
