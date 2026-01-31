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
    beds: 0,
    baths: 0,
    area: 0,
    image: findImage('property-9'),
    tags: ['Residential', 'Pre-Launch'],
  },
  {
    id: '8',
    title: 'Premium Land Plots- Dholera SIR',
    address: 'Dholera, Gujarat',
    price: '₹10 Lacs*',
    beds: 0,
    baths: 0,
    area: 0,
    image: findImage('property-8'),
    tags: ['Land', 'Ready To Book'],
  },
  {
    id: '7',
    title: 'Retail Shop- Bhutani Cyberthum',
    address: 'Noida, Sector 140A',
    price: '₹35.18 Lacs*',
    beds: 0,
    baths: 0,
    area: 0,
    image: findImage('property-7'),
    tags: ['Retail', 'Under Construction'],
  },
  {
    id: '1',
    title: 'Bhutani Cyberpark-Office Space',
    address: 'Noida, Sector 62',
    price: '₹68 Lacs*',
    beds: 0,
    baths: 0,
    area: 0,
    image: findImage('property-1'),
    tags: ['Office', 'Ready To Move'],
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
