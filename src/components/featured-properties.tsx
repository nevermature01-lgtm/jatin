'use client';

import Link from 'next/link';
import { properties } from '@/lib/data';
import { PropertyCard } from './property-card';
import ScrollStack, { ScrollStackItem } from './scroll-stack';

export function FeaturedProperties() {
  const featuredProperties = properties.slice(0, 4); // Using 4 properties for the stack

  return (
    <section className="relative w-full bg-white pb-16 pt-8 sm:pb-24 sm:pt-12">
      <div className="container mx-auto mb-10 flex items-center justify-between">
        <h2 className="font-headline text-3xl tracking-tight text-gray-900 sm:text-4xl">
          Homes You’ll Love
        </h2>
        <Link
          href="#"
          className="group text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
        >
          View all
          <span className="ml-1.5 inline-block transition-transform group-hover:translate-x-1">
            &rarr;
          </span>
        </Link>
      </div>

      <ScrollStack>
        {featuredProperties.map((property) => (
          <ScrollStackItem key={property.id} className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <div className="rounded-lg bg-card p-2 shadow-lg shadow-gray-200/50">
                <PropertyCard property={property} />
              </div>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </section>
  );
}
