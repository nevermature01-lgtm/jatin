'use client';

import Image from 'next/image';
import { Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Property } from '@/lib/data';
import { formatInr } from '@/lib/utils';

export function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="group w-full cursor-pointer">
        <div className="relative overflow-hidden rounded-md">
            <Image
                src={property.image.imageUrl}
                alt={property.title}
                width={600}
                height={400}
                className="h-[280px] w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                data-ai-hint={property.image.imageHint}
            />
            <div className="absolute right-3 top-3 z-10">
                <Button
                    variant="secondary"
                    size="icon"
                    className="h-8 w-8 rounded-full bg-white/90 text-foreground/70 backdrop-blur-sm transition-all hover:scale-110 hover:bg-white hover:text-foreground"
                >
                    <Heart className="h-4 w-4" />
                    <span className="sr-only">Add to wishlist</span>
                </Button>
            </div>
        </div>
        <div className="space-y-1 pt-4">
            <p className="text-lg font-bold text-gray-900">
                {formatInr(property.price)}
            </p>
            <h3 className="font-medium text-gray-700">
                {property.title}
            </h3>
            <p className="text-sm text-gray-500">
                {property.address}
            </p>
        </div>
    </div>
  );
}
