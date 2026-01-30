'use client';

import { properties } from '@/lib/data';
import { PropertyCard } from './property-card';
import ScrollStack, { ScrollStackItem } from './scroll-stack';

export function FeaturedProperties() {
  const featuredProperties = properties.slice(0, 4); // Using 4 properties for the stack

  return (
    <section className="relative w-full bg-white pb-16 pt-8 sm:pb-24 sm:pt-12">
      <div className="container mx-auto">
        <ScrollStack useWindowScroll={true}>
          {featuredProperties.map((property) => (
            <ScrollStackItem key={property.id} itemClassName="max-w-3xl mx-auto">
              <PropertyCard property={property} />
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}
