import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bath, BedDouble, MapPin, Square } from 'lucide-react';
import { properties } from '@/lib/data';
import { Header } from '@/components/header';
import { HeroSlider } from '@/components/hero-slider';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="relative h-screen w-full">
          <HeroSlider />
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-headline font-normal drop-shadow-2xl animate-fade-in animate-slide-up-slow">
                Explore the World’s Finest Properties
              </h1>
              <p className="mt-4 max-w-3xl text-lg md:text-xl font-body drop-shadow-lg mx-auto animate-fade-in animate-slide-up-fast">
                Your new life of elegance and comfort awaits among our curated collection of luxury homes.
              </p>
            </div>
          </div>
        </section>

        <section id="properties" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-body text-secondary-foreground">
                  New Listings
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                  Featured Properties
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
                  Explore our hand-picked selection of the most exquisite properties available on the market.
                </p>
              </div>
            </div>
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
              {properties.map((property) => (
                <Card
                  key={property.id}
                  className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
                >
                  <CardHeader className="p-0">
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={property.image.imageUrl}
                        alt={property.image.description}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        data-ai-hint={property.image.imageHint}
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    <CardTitle className="font-headline text-2xl">{property.title}</CardTitle>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="mr-2 h-4 w-4" />
                      {property.address}
                    </div>
                    <div className="text-3xl font-bold text-primary">
                      ${property.price.toLocaleString()}
                    </div>
                    <div className="flex items-center space-x-6 text-muted-foreground border-t pt-4">
                      <div className="flex items-center">
                        <BedDouble className="mr-2 h-5 w-5 text-primary" />
                        <span>{property.beds} Beds</span>
                      </div>
                      <div className="flex items-center">
                        <Bath className="mr-2 h-5 w-5 text-primary" />
                        <span>{property.baths} Baths</span>
                      </div>
                      <div className="flex items-center">
                        <Square className="mr-2 h-5 w-5 text-primary" />
                        <span>{property.area.toLocaleString()} sqft</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button className="w-full">View Details</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-muted-foreground">&copy; 2024 LANDMARKLANE. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </footer>
      </main>
    </div>
  );
}
