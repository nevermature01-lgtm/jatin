import Image from 'next/image';
import { PlayCircle } from 'lucide-react';
import type { Property } from '@/lib/data';
import { formatInr } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

export function PropertyCard({ property }: { property: Property }) {
  return (
    <Card className="w-full overflow-hidden border-none shadow-none bg-transparent">
      <CardContent className="p-0">
        <div className="relative group aspect-[4/3] overflow-hidden rounded-lg">
          <Image
            src={property.image.imageUrl}
            alt={property.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={property.image.imageHint}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <PlayCircle className="w-16 h-16 text-white/80" />
          </div>
        </div>
        <div className="pt-4">
          <p className="text-lg font-bold text-neutral-900">{formatInr(property.price)}</p>
          <p className="text-base text-neutral-800 mt-1 truncate">{property.title}</p>
          <p className="text-sm text-neutral-600 truncate">{property.address}</p>
        </div>
      </CardContent>
    </Card>
  );
}
