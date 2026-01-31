import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

export type Property = {
  id: string;
  title: string;
  address: string;
  price: number | string;
  beds: number;
  baths: number;
  area: number; // in sqft
  image: ImagePlaceholder;
  tags?: string[];
  description?: string;
  bedsDisplay?: string;
  bathsDisplay?: string;
  areaDisplay?: string;
  amenities?: string[];
};

const findImage = (id: string) => {
    const image = PlaceHolderImages.find((img) => img.id === id);
    if (!image) {
        throw new Error(`Image with id ${id} not found`);
    }
    return image;
}

export const properties: Property[] = [
  {
    id: '9',
    title: 'HOABL Vrindavan Global',
    address: 'Vrindavan, Mathura',
    price: '₹1.40 Cr*',
    beds: 2,
    baths: 2,
    area: 1200,
    description: 'Premium residential apartments in the holy city of Vrindavan with modern amenities and spiritual ambiance.',
    bedsDisplay: '2-3 BHK',
    bathsDisplay: '2-3 Baths',
    areaDisplay: '1200-1800 sq ft',
    image: findImage('property-9'),
    tags: ['Residential', 'Pre-Launch', 'Swimming Pool', 'Gym', 'Security', '+3 more'],
    amenities: ['Swimming Pool', 'Gym', 'Security'],
  },
  {
    id: '8',
    title: 'Dholera Smart City Plots',
    address: 'Dholera, Gujarat',
    price: '₹25 Lakh*',
    beds: 0,
    baths: 0,
    area: 1000,
    description: "Investment opportunity in India's first planned smart city with excellent growth potential.",
    areaDisplay: '1000-5000 sq ft',
    image: findImage('property-8'),
    tags: ['Land', 'Investment', 'Smart City', 'DMICDC Infrastructure', '+3 more'],
  },
  {
    id: '7',
    title: 'Bhutani Cyberthum',
    address: 'Noida',
    price: '₹2.5 Cr*',
    beds: 0,
    baths: 0,
    area: 500,
    description: 'Ultra-modern commercial spaces in the heart of Noida with world-class infrastructure.',
    bedsDisplay: 'Office Space',
    bathsDisplay: 'Common',
    areaDisplay: '500-2000 sq ft',
    image: findImage('property-7'),
    tags: ['Office Space', 'High-speed Elevators', 'Central AC', 'Power Backup', '+3 more'],
    amenities: ['High-speed Elevators', 'Central AC', 'Power Backup'],
  },
  {
    id: '1',
    title: 'Bhutani Cyberpark',
    address: 'Noida',
    price: '₹3.2 Cr*',
    beds: 0,
    baths: 0,
    area: 0,
    description: 'State-of-the-art IT park designed for modern businesses with cutting-edge facilities.',
    bedsDisplay: 'Office Space',
    bathsDisplay: 'Common',
    areaDisplay: '800-3000 sq ft',
    image: findImage('property-1'),
    tags: ['Office Space', 'IT Infrastructure', 'Conference Rooms', 'Cafeteria', '+3 more'],
    amenities: ['IT Infrastructure', 'Conference Rooms', 'Cafeteria'],
  },
  {
    id: '2',
    title: 'Retail Shop- Spectrum Metro Phase 1',
    address: 'Noida, Sector 75',
    price: '₹37.5 Lacs*',
    beds: 0,
    baths: 0,
    area: 0,
    image: findImage('property-2'),
    tags: ['Retail', 'Ready To Move'],
  },
  {
    id: '3',
    title: 'Retail Shop- Bhutani 62 Avenue',
    address: 'Noida, Sector 62',
    price: '₹35 Lacs*',
    beds: 0,
    baths: 0,
    area: 1000,
    image: findImage('property-3'),
    tags: ['Retail', 'Under Construction'],
  },
  {
    id: '4',
    title: 'Bhutani Avenue 133',
    address: 'Noida, Sector 133',
    price: '₹34.84 Lacs*',
    beds: 0,
    baths: 0,
    area: 0,
    image: findImage('property-4'),
    tags: ['Retail', 'Under Construction'],
  },
  {
    id: '5',
    title: 'Office Space- Bhutani Cyberthum',
    address: 'Noida, Sector 14 0A',
    price: '₹45.1 Lacs*',
    beds: 0,
    baths: 0,
    area: 0,
    image: findImage('property-5'),
    tags: ['Office', 'Under Construction'],
  }
];
