'use client';

import Link from 'next/link';
import { properties } from '@/lib/data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PropertyCard } from './property-card';

export function FeaturedProperties() {
  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="container mx-auto">
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
        >
          <div className="mb-10 flex items-center justify-between">
            <h2 className="font-headline text-3xl tracking-tight text-gray-900 sm:text-4xl">
              Homes You’ll Love
            </h2>
            <div className="hidden items-center gap-4 sm:flex">
              <Link
                href="#"
                className="group text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
              >
                View all
                <span className="ml-1.5 inline-block transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
              <div className="flex gap-2">
                <CarouselPrevious className="relative h-9 w-9 -translate-y-0 translate-x-0 rounded-full border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50" />
                <CarouselNext className="relative h-9 w-9 -translate-y-0 translate-x-0 rounded-full border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50" />
              </div>
            </div>
          </div>

          <CarouselContent className="-ml-6">
            {properties.map((property) => (
              <CarouselItem
                key={property.id}
                className="basis-11/12 pl-6 sm:basis-1/2 md:basis-1/2 lg:basis-1/3"
              >
                <div className="rounded-lg p-1 transition-shadow duration-300 ease-out hover:shadow-xl hover:shadow-gray-200/80">
                    <PropertyCard property={property} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="mt-8 flex justify-center sm:hidden">
            <Link href="#" className="group text-sm font-medium text-gray-600 transition-colors hover:text-gray-900">
                View all
                <span className="ml-1.5 inline-block transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
          </div>

        </Carousel>
      </div>
    </section>
  );
}
