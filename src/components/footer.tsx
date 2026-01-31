import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-neutral-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Brand and Social */}
          <div className="flex flex-col">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="font-bold text-2xl font-headline tracking-wider text-white">
                LANDMARKLANE
              </span>
            </Link>
            <p className="text-sm text-neutral-400 mb-6 max-w-xs">
              Redefining luxury living with curated properties and unparalleled service.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:contents">
            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 font-headline">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link href="#" className="text-sm hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#" className="text-sm hover:text-white transition-colors">Properties</Link></li>
                <li><Link href="#" className="text-sm hover:text-white transition-colors">Services</Link></li>
                <li><Link href="tel:9528199631" className="text-sm hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="#" className="text-sm hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 font-headline">Our Services</h3>
              <ul className="space-y-3">
                <li><Link href="#" className="text-sm hover:text-white transition-colors">Property Sales</Link></li>
                <li><Link href="#" className="text-sm hover:text-white transition-colors">Property Rentals</Link></li>
                <li><Link href="#" className="text-sm hover:text-white transition-colors">Investment Consulting</Link></li>
                <li><Link href="#" className="text-sm hover:text-white transition-colors">Property Management</Link></li>
              </ul>
            </div>
          </div>


          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 font-headline">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 text-accent" />
                <span>123 Luxury Avenue, Suite 100, Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-accent" />
                <a href="tel:9528199631">9528199631</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-accent" />
                <span>contact@landmarklane.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-neutral-500">
          <p>&copy; {new Date().getFullYear()} LANDMARKLANE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
