import { Home, Building2, Landmark, UserCog, SearchCheck, Tag } from 'lucide-react';
import { ServiceCard } from './service-card';
import { AnimatedGridItem } from './animated-grid-item';

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
    <section className="py-16 sm:py-24 bg-amber-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-neutral-500 mb-4">
                OUR SERVICES
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-headline text-neutral-800 mb-12">
                Expert Services for <em className="italic">Every</em>
                <br />
                Real Estate <em className="italic">Journey</em>
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-neutral-300">
          {services.map((service, index) => (
            <AnimatedGridItem
              key={service.title}
              index={index}
              className={`group p-6 sm:p-8 border-b border-neutral-300 transition-all duration-300 ease-in-out md:hover:shadow-xl md:hover:bg-card
                ${ index % 3 !== 2 ? 'md:border-r md:border-neutral-300' : '' } 
                ${ index >= services.length - 3 ? 'md:border-b-0' : '' }`}
            >
              <ServiceCard {...service} />
            </AnimatedGridItem>
          ))}
        </div>
      </div>
    </section>
  );
}
