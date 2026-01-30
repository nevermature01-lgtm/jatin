import Image from 'next/image';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Property } from '@/lib/data';
import { formatInr } from '@/lib/utils';
import { ScrollStackItem } from './scroll-stack';

export function PropertyCard({ property }: { property: Property }) {
  return (
    <ScrollStackItem itemClassName="bg-card">
      <div className="flex h-full flex-col">
        <div className="relative h-48 w-full overflow-hidden rounded-3xl">
          <Image
            src={property.image.imageUrl}
            alt={property.title}
            fill
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            data-ai-hint={property.image.imageHint}
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-3 right-3 h-10 w-10 rounded-full bg-white/80 backdrop-blur-sm transition-all hover:bg-white hover:scale-110"
            aria-label="Add to wishlist"
          >
            <Heart className="h-5 w-5 stroke-foreground" />
          </Button>
        </div>
        <div className="flex flex-col pt-6">
          <span className="text-2xl font-bold text-foreground">
            {formatInr(property.price)}
          </span>
          <h3 className="text-lg font-medium text-foreground">{property.title}</h3>
          <p className="text-base text-muted-foreground">{property.address}</p>
        </div>
      </div>
    </ScrollStackItem>
  );
}
