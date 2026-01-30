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
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Bath, BedDouble, MapPin, Search, Square } from 'lucide-react';
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
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4 animate-fade-in">
            <div className="animate-slide-up-slow">
              <h1 className="text-5xl md:text-7xl font-bold font-headline drop-shadow-2xl">
                Explore the World’s Finest Properties
              </h1>
              <p className="mt-4 max-w-3xl text-lg md:text-xl font-body drop-shadow-lg">
                Your new life of elegance and comfort awaits among our curated collection of luxury homes.
              </p>
            </div>

            <form className="mt-12 w-full max-w-4xl rounded-full bg-black/30 p-2 shadow-2xl backdrop-blur-md animate-slide-up-fast border border-white/20">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="relative w-full md:flex-1 flex items-center">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70 pointer-events-none" />
                        <Input
                        id="location"
                        placeholder="City, Region, Country"
                        className="h-14 bg-transparent border-none text-white placeholder:text-white/70 focus-visible:ring-0 focus-visible:ring-offset-0 pl-12 text-base w-full"
                        />
                    </div>
                    
                    <div className="w-full h-px md:h-8 md:w-px bg-white/20 my-2 md:my-0" />

                    <div className="w-full md:w-auto">
                        <Select>
                            <SelectTrigger className="h-14 w-full md:w-48 bg-transparent border-none text-white/70 focus:ring-0 focus:ring-offset-0 text-base justify-start px-4">
                                <SelectValue placeholder="Any Price" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1m">$0 - $1,000,000</SelectItem>
                                <SelectItem value="3m">$1,000,000 - $3,000,000</SelectItem>
                                <SelectItem value="5m">$3,000,000 - $5,000,000</SelectItem>
                                <SelectItem value="10m">$5,000,000 - $10,000,000</SelectItem>
                                <SelectItem value="10m+">$10,000,000+</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    
                    <div className="w-full h-px md:h-8 md:w-px bg-white/20 my-2 md:my-0" />
                    
                    <div className="w-full md:w-auto">
                        <Select>
                            <SelectTrigger className="h-14 w-full md:w-36 bg-transparent border-none text-white/70 focus:ring-0 focus:ring-offset-0 text-base justify-start px-4">
                                <SelectValue placeholder="Any Beds" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1">1+</SelectItem>
                                <SelectItem value="2">2+</SelectItem>
                                <SelectItem value="3">3+</SelectItem>
                                <SelectItem value="4">4+</SelectItem>
                                <SelectItem value="5">5+</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    
                    <div className="w-full md:w-auto p-1 md:p-0 md:pr-1">
                        <Button type="submit" className="w-full md:w-auto h-12 rounded-full text-base bg-primary hover:bg-primary/90 px-6">
                            <Search className="mr-2 h-4 w-4" />
                            Search
                        </Button>
                    </div>
                </div>
            </form>
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
          <p className="text-xs text-muted-foreground">&copy; 2024 LuxeEstate. All rights reserved.</p>
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
