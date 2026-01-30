'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import React, { useCallback, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function HeroSlider() {
  const desktopImages = [
    { id: 'd1', src: '/desktop_1.jpg', alt: 'Modern villa with a pool', hint: 'modern villa' },
    { id: 'd2', src: '/desktop_2.jpg', alt: 'Downtown penthouse apartment', hint: 'luxury apartment' },
    { id: 'd3', src: '/desktop_3.jpg', alt: 'Beachfront property with ocean view', hint: 'beach house' },
  ];

  const mobileImages = [
    { id: 'm1', src: '/mob_1.jpg', alt: 'Modern villa with a pool', hint: 'modern villa' },
    { id: 'm2', src: '/mob_2.jpg', alt: 'Downtown penthouse apartment', hint: 'luxury apartment' },
    { id: 'm3', src: '/mob_3.jpg', alt: 'Beachfront property with ocean view', hint: 'beach house' },
  ].reverse();

  const heroImages = desktopImages.map((desktopImage, index) => ({
      desktop: desktopImage,
      mobile: mobileImages[index]
  }));

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
                {heroImages.map((images, index) => {
                    return (
                        <CarouselItem key={images.desktop.id}>
                            <div className="w-full h-screen relative">
                                {/* Desktop Image */}
                                <Image
                                    src={images.desktop.src}
                                    alt={images.desktop.alt}
                                    fill
                                    className="object-cover animate-zoom-in hidden md:block"
                                    priority={index === 0}
                                    data-ai-hint={images.desktop.hint}
                                    sizes="100vw"
                                />
                                {/* Mobile Image */}
                                <Image
                                    src={images.mobile.src}
                                    alt={images.mobile.alt}
                                    fill
                                    className="object-cover animate-zoom-in md:hidden"
                                    priority={false}
                                    data-ai-hint={images.mobile.hint}
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
