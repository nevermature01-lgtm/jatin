import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

export type Property = {
  id: string;
  title: string;
  address: string;
  price: number;
  beds: number;
  baths: number;
  area: number; // in sqft
  image: ImagePlaceholder;
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
    id: '1',
    title: 'Modern Villa with Pool',
    address: '123 Luxury Lane, Beverly Hills, CA',
    price: 4500000,
    beds: 5,
    baths: 6,
    area: 5500,
    image: findImage('property-1'),
  },
  {
    id: '2',
    title: 'Cozy Suburban House',
    address: '456 Oak Street, Pleasantville, NY',
    price: 1200000,
    beds: 4,
    baths: 3,
    area: 3200,
    image: findImage('property-2'),
  },
  {
    id: '3',
    title: 'Bhutani 62 Avenue',
    address: 'Sector 62, Noida',
    price: 5000000,
    beds: 0,
    baths: 0,
    area: 1000,
    image: findImage('property-3'),
  },
  {
    id: '4',
    title: 'Spacious Family Home',
    address: '101 Garden Way, Greenwich, CT',
    price: 3200000,
    beds: 6,
    baths: 5,
    area: 6200,
    image: findImage('property-4'),
  },
  {
    id: '5',
    title: 'Beachfront Paradise',
    address: '21 Ocean Drive, Malibu, CA',
    price: 12500000,
    beds: 4,
    baths: 5,
    area: 4800,
    image: findImage('property-5'),
  },
  {
    id: '6',
    title: 'Secluded Rustic Cabin',
    address: '33 Forest Path, Aspen, CO',
    price: 2100000,
    beds: 3,
    baths: 2,
    area: 2500,
    image: findImage('property-6'),
  },
];
