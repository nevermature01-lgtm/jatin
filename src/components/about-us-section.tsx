'use client';

import { Check, Award, Users, CalendarCheck, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AnimatedGridItem } from './animated-grid-item';
import { StatCard } from './stat-card';
import { CircularTextLogo } from './circular-text-logo';

export function AboutUsSection() {
  const stats = [
    {
      icon: Award,
      value: "15+",
      label: "Years of Excellence",
    },
    {
      icon: Users,
      value: "25,000+",
      label: "Satisfied Clients",
    },
    {
      icon: CalendarCheck,
      value: "2,500+",
      label: "Properties Delivered",
    },
    {
      icon: TrendingUp,
      value: "₹500+ Cr",
      label: "Property Value Handled",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 relative">
      <CircularTextLogo className="top-0 right-0 -mt-11 -mr-11 sm:-mt-14 sm:-mr-14" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-neutral-400 mb-4">
              ABOUT US
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-headline text-white mb-8">
              Where Trust Meets Real Estate Expertise
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-base text-neutral-300 mb-10">
              <p>
                At LANDMARKLANE, we redefine living spaces with innovative designs and unparalleled expertise. Our passion lies in creating homes that inspire. With a commitment to quality and customer satisfaction.
              </p>
              <p>
                Every detail is crafted with precision, ensuring you find the perfect place to call home. From luxury properties to functional spaces, LANDMARKLANE brings dreams to life, one home at a time.
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-headline text-white mb-4">Our Vision</h3>
              <p className="text-base text-neutral-300">
                To be the leading real estate brand, redefining modern living by creating spaces that inspire, empower, and elevate lifestyles.
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-headline text-white mb-4">Our Mission</h3>
              <ul className="space-y-3">
                {[
                  'Connecting people with perfect properties',
                  'Delivering excellence in real estate.',
                  'Empowering communities through exceptional spaces',
                  'Creating value, trust, and satisfaction',
                  'Redefining modern living with innovation',
                ].map((mission) => (
                  <li key={mission} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-neutral-300">{mission}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-y-16 gap-x-8 items-center justify-items-center lg:pt-10">
            {stats.map((stat, index) => (
              <AnimatedGridItem key={index} index={index}>
                <StatCard
                  icon={stat.icon}
                  value={stat.value}
                  label={stat.label}
                  index={index}
                />
              </AnimatedGridItem>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-lg bg-white/5 p-8 md:p-12 border border-white/10 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <h2 className="text-4xl font-headline text-white text-center md:text-left">
                    Start Your Property<br />Search Now!
                </h2>
                <Button asChild variant="outline" className="border-white/80 text-white hover:bg-white/10 bg-black/20 backdrop-blur-sm rounded-sm px-8 py-6 text-base">
                    <Link href="tel:9528199631">
                        Contact Us &gt;
                    </Link>
                </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
