import { Home, Building2, Landmark, UserCog, SearchCheck, Tag } from 'lucide-react';
import { ServiceCard } from './service-card';
import { AnimatedGridItem } from './animated-grid-item';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const services = [
  {
    icon: Home,
    title: 'Property Sales',
    description: 'Helping you buy or sell properties with expert guidance and seamless transactions',
  },
  {
    icon: Building2,
    title: 'Property Rentals',
    description: "Connecting you to the perfect rental, whether you're looking for an apartment or a villa",
  },
  {
    icon: Landmark,
    title: 'Investment Consulting',
    description: 'Professional advice and opportunities to maximize returns on real estate',
  },
  {
    icon: UserCog,
    title: 'Property Management',
    description: 'Full-service property management, ensuring your investments are well-maintained',
  },
  {
    icon: SearchCheck,
    title: 'Market Analysis',
    description: 'In-depth market analysis and research to guide your real estate decisions',
  },
  {
    icon: Tag,
    title: 'Valuation Services',
    description: 'Accurate property valuation services to help you make informed when buying or selling',
  },
];

export function ServicesSection() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-neutral-400 mb-4">
                OUR SERVICES
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-headline text-white mb-12">
                Expert Services for <em className="italic">Every</em>
                <br />
                Real Estate <em className="italic">Journey</em>
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-r border-white/20">
          {services.map((service, index) => (
            <AnimatedGridItem
              key={service.title}
              index={index}
              className={`group p-6 sm:p-8 border-b border-white/20 transition-all duration-300 ease-in-out md:hover:shadow-xl md:hover:bg-accent/20
                ${ index % 3 !== 2 ? 'md:border-r md:border-white/20' : '' }`}
            >
              <ServiceCard {...service} />
            </AnimatedGridItem>
          ))}
        </div>

        <div className="mt-16 rounded-lg bg-white/5 p-8 md:p-12 border border-white/10 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <h2 className="text-4xl font-headline text-white text-center md:text-left">
                    Ready to Find Your<br />Dream Property?
                </h2>
                <Button asChild variant="outline" className="border-white/80 text-white hover:bg-white/10 rounded-sm px-8 py-6 text-base">
                    <Link href="#">
                        Explore Listings &gt;
                    </Link>
                </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
