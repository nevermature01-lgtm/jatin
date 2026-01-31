'use client';

import { useState, useMemo } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PropertyCard } from '@/components/property-card';
import { properties } from '@/lib/data';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search } from 'lucide-react';

export default function PropertiesPage() {
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('all');
  const [city, setCity] = useState('all');

  const cities = useMemo(() => ['all', ...Array.from(new Set(properties.map((p) => p.address.split(',')[0])))], []);

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      // Location filter (case-insensitive)
      const searchLower = location.toLowerCase();
      const matchesLocation =
        property.title.toLowerCase().includes(searchLower) ||
        property.address.toLowerCase().includes(searchLower);

      // Price filter
      const matchesPrice = (() => {
        if (priceRange === 'all') return true;
        // If price is a string (e.g., "₹1.40 Cr*"), we can't easily filter.
        // For now, we'll include it if it's not a number, which means it will pass the filter.
        if (typeof property.price !== 'number') return true;
        
        const [min, max] = priceRange.split('-').map(Number);
        
        if (max) {
          return property.price >= min && property.price <= max;
        }
        // Handle open-ended range (e.g., "20000000")
        return property.price >= min;
      })();

      // City filter
      const matchesCity = city === 'all' || property.address.split(',')[0] === city;

      return matchesLocation && matchesPrice && matchesCity;
    });
  }, [location, priceRange, city]);
  
  const priceRanges = [
    { value: 'all', label: 'Any Price' },
    { value: '0-5000000', label: 'Up to ₹50 Lacs' },
    { value: '5000000-10000000', label: '₹50 Lacs - ₹1 Cr' },
    { value: '10000000-20000000', label: '₹1 Cr - ₹2 Cr' },
    { value: '20000000', label: 'Over ₹2 Cr' },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white">
      <Header />
      <main className="flex-1 pt-36">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline text-white">
              Our Properties
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-300">
              Explore our exclusive collection of luxury properties and find your perfect investment.
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="sticky top-[130px] z-40 bg-gray-900/80 backdrop-blur-sm py-4 mb-8 rounded-lg">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-lg border border-white/10 bg-black/20">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400 pointer-events-none" />
                  <Input
                    type="text"
                    placeholder="Search by name, address..."
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-white/5 border-white/20 text-white pl-10 placeholder:text-neutral-400"
                  />
                </div>
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger className="w-full bg-white/5 border-white/20 text-white">
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 text-white border-gray-700">
                    {priceRanges.map((range) => (
                      <SelectItem key={range.value} value={range.value}>
                        {range.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={city} onValueChange={setCity}>
                  <SelectTrigger className="w-full bg-white/5 border-white/20 text-white">
                    <SelectValue placeholder="Filter by cities" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 text-white border-gray-700">
                    {cities.map((c) => (
                      <SelectItem key={c} value={c}>
                        {c === 'all' ? 'All Cities' : c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
          </div>


          {/* Property Grid */}
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
             <div className="text-center py-16">
                <p className="text-2xl font-headline text-neutral-300">No Properties Found</p>
                <p className="text-neutral-400 mt-2">Try adjusting your search filters to find what you're looking for.</p>
             </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
