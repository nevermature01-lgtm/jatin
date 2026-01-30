'use client';

import { properties } from '@/lib/data';
import { PropertyCard } from './property-card';
import ScrollStack from './scroll-stack';

export function FeaturedProperties() {
  return (
    <section className="w-full">
      <ScrollStack useWindowScroll={true}>
        {properties.slice(0, 4).map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </ScrollStack>
    </section>
  );
}
