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

function parsePrice(price: string | number): number {
  if (typeof price === 'number') {
    return price;
  }
  // Remove currency symbols, commas, and asterisks
  const cleanedPrice = price.replace(/₹|\*|,/g, '').trim();
  const parts = cleanedPrice.split(' ');
  const value = parseFloat(parts[0]);

  if (parts.length > 1) {
    const unit = parts[1].toLowerCase();
    if (unit.startsWith('cr')) {
      return value * 10000000;
    }
    if (unit.startsWith('lakh')) {
      return value * 100000;
    }
  }

  return value;
}

export function TrendingSlider() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const sortedProperties = React.useMemo(() => {
    return [...properties].sort(
      (a, b) => parsePrice(a.price) - parsePrice(b.price)
    );
  }, []);

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
        <CarouselContent className="-ml-4 items-stretch">
          {sortedProperties.slice(0, 5).map((property) => (
            <CarouselItem key={property.id} className="pl-4 basis-full sm:basis-1/2 lg:basis-2/5">
              <PropertyCard property={property} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute -top-16 right-0 hidden sm:flex items-center gap-2">
            <CarouselPrevious className="relative -left-0 -top-0 translate-y-0 w-10 h-10 rounded-full bg-gray-800 border-gray-700 hover:bg-gray-700 text-white" />
            <CarouselNext className="relative -right-0 -top-0 translate-y-0 w-10 h-10 rounded-full bg-gray-800 border-gray-700 hover:bg-gray-700 text-white" />
        </div>
      </Carousel>
    </div>
  );
}
