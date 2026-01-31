'use client';

import * as React from 'react';
import { properties } from '@/lib/data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PropertyCard } from '@/components/property-card';
import Autoplay from 'embla-carousel-autoplay';

export function TrendingSlider() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <div className="relative">
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {properties.slice(0, 5).map((property) => (
            <CarouselItem key={property.id} className="pl-4 basis-full sm:basis-2/3 md:basis-1/2 lg:basis-2/5">
              <PropertyCard property={property} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute -top-16 right-0 hidden items-center gap-2 md:flex">
            <CarouselPrevious className="relative -left-0 -top-0 translate-y-0 w-10 h-10 rounded-full bg-gray-800 border-gray-700 hover:bg-gray-700 text-white" />
            <CarouselNext className="relative -right-0 -top-0 translate-y-0 w-10 h-10 rounded-full bg-gray-800 border-gray-700 hover:bg-gray-700 text-white" />
        </div>
      </Carousel>
    </div>
  );
}
