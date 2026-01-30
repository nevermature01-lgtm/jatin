'use client';

import { properties } from '@/lib/data';
import { useIsMobile } from '@/hooks/use-mobile';
import { PropertyCard } from './property-card';
import ScrollStack from './scroll-stack';

export function FeaturedProperties() {
  const isMobile = useIsMobile();
  const propertiesToShow = isMobile ? properties.slice(0, 3) : properties.slice(0, 4);

  return (
    <section className="w-full">
      <ScrollStack useWindowScroll={true} blurAmount={1.5}>
        {propertiesToShow.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </ScrollStack>
    </section>
  );
}
