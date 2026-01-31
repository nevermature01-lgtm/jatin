import Image from 'next/image';
import type { Property } from '@/lib/data';
import { formatInr } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BedDouble, Bath, Ruler, Waves, Dumbbell, Shield, ArrowUpDown, AirVent, Zap, MapPin, Network, Presentation, Coffee, Store, TramFront, PenTool, Building2, Building, Club, Sparkles } from 'lucide-react';

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
          {property.tags && (
            <div className="absolute top-2 left-2 flex flex-wrap gap-2">
              {property.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold text-white bg-black/40 backdrop-blur-sm rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="pt-4">
          <p className="text-lg font-bold text-white">{typeof property.price === 'string' ? property.price : formatInr(property.price)}</p>
          <p className="text-base text-neutral-200 mt-1">{property.title}</p>
          <p className="flex items-center gap-2 text-sm text-neutral-400 mt-1">
            <MapPin className="h-4 w-4" />
            <span>{property.address}</span>
          </p>

          {property.description && (
            <p className="text-sm text-neutral-300 mt-2">{property.description}</p>
          )}

          <div className="mt-3 flex items-center flex-wrap gap-x-4 gap-y-2 text-sm text-neutral-300">
            {(property.beds > 0 || property.bedsDisplay) && (
              <div className="flex items-center gap-2">
                <BedDouble className="h-4 w-4" />
                <span>{property.bedsDisplay || `${property.beds} BHK`}</span>
              </div>
            )}
            {(property.baths > 0 || property.bathsDisplay) && (
              <div className="flex items-center gap-2">
                <Bath className="h-4 w-4" />
                <span>{property.bathsDisplay || `${property.baths} Baths`}</span>
              </div>
            )}
            {(property.area > 0 || property.areaDisplay) && (
              <div className="flex items-center gap-2">
                <Ruler className="h-4 w-4" />
                <span>{property.areaDisplay || `${property.area} sq ft`}</span>
              </div>
            )}
          </div>
          
          {property.amenities && property.amenities.length > 0 && (
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
              {property.amenities.includes('Swimming Pool') && (
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <Waves className="h-4 w-4 text-accent"/>
                  <span>Swimming Pool</span>
                </div>
              )}
              {property.amenities.includes('Gym') && (
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <Dumbbell className="h-4 w-4 text-accent"/>
                  <span>Gym</span>
                </div>
              )}
              {property.amenities.includes('Security') && (
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <Shield className="h-4 w-4 text-accent"/>
                  <span>Security</span>
                </div>
              )}
               {property.amenities.includes('High-speed Elevators') && (
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <ArrowUpDown className="h-4 w-4 text-accent"/>
                  <span>High-speed Elevators</span>
                </div>
              )}
              {property.amenities.includes('Central AC') && (
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <AirVent className="h-4 w-4 text-accent"/>
                  <span>Central AC</span>
                </div>
              )}
              {property.amenities.includes('Power Backup') && (
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <Zap className="h-4 w-4 text-accent"/>
                  <span>Power Backup</span>
                </div>
              )}
              {property.amenities.includes('IT Infrastructure') && (
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <Network className="h-4 w-4 text-accent"/>
                  <span>IT Infrastructure</span>
                </div>
              )}
              {property.amenities.includes('Conference Rooms') && (
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <Presentation className="h-4 w-4 text-accent"/>
                  <span>Conference Rooms</span>
                </div>
              )}
              {property.amenities.includes('Cafeteria') && (
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <Coffee className="h-4 w-4 text-accent"/>
                  <span>Cafeteria</span>
                </div>
              )}
              {property.amenities.includes('Metro Connectivity') && (
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <TramFront className="h-4 w-4 text-accent"/>
                  <span>Metro Connectivity</span>
                </div>
              )}
              {property.amenities.includes('Food Court') && (
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <Coffee className="h-4 w-4 text-accent"/>
                  <span>Food Court</span>
                </div>
              )}
              {property.amenities.includes('Retail Outlets') && (
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <Store className="h-4 w-4 text-accent"/>
                  <span>Retail Outlets</span>
                </div>
              )}
              {property.amenities.includes('Modern Design') && (
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <PenTool className="h-4 w-4 text-accent"/>
                  <span>Modern Design</span>
                </div>
              )}
              {property.amenities.includes('Office Spaces') && (
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <Building2 className="h-4 w-4 text-accent"/>
                  <span>Office Spaces</span>
                </div>
              )}
              {property.amenities.includes('Smart City') && (
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <Building className="h-4 w-4 text-accent"/>
                  <span>Smart City</span>
                </div>
              )}
              {property.amenities.includes('DMICDC Infrastructure') && (
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <Network className="h-4 w-4 text-accent"/>
                  <span>DMICDC Infrastructure</span>
                </div>
              )}
              {property.amenities.includes('Clubhouse') && (
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <Club className="h-4 w-4 text-accent"/>
                  <span>Clubhouse</span>
                </div>
              )}
              {property.amenities.includes('Beach Access') && (
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <Waves className="h-4 w-4 text-accent"/>
                  <span>Beach Access</span>
                </div>
              )}
              {property.amenities.includes('Spa') && (
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <Sparkles className="h-4 w-4 text-accent"/>
                  <span>Spa</span>
                </div>
              )}
            </div>
          )}

          <Button asChild variant="outline" className="mt-4 w-full rounded-md font-body text-white transition-colors border-white/30 hover:bg-white/10 bg-black/20 backdrop-blur-sm">
            <Link href="#">
              View Details
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
