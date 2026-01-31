import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { Award, Users, CalendarCheck, TrendingUp, Check } from 'lucide-react';
import { FaqSection } from '@/components/faq-section';
import { WhyOurTeamStandsOut } from '@/components/why-our-team-stands-out';


export default function AboutPage() {
    const stats = [
        { icon: Award, value: "15+", label: "Years of Excellence" },
        { icon: Users, value: "25,000+", label: "Satisfied Clients" },
        { icon: CalendarCheck, value: "2,500+", label: "Properties Delivered" },
        { icon: TrendingUp, value: "₹500+ Cr", label: "Property Value Handled" },
    ];

    const missions = [
        'Connecting people with perfect properties',
        'Delivering excellence in real estate.',
        'Empowering communities through exceptional spaces',
        'Creating value, trust, and satisfaction',
        'Redefining modern living with innovation',
    ];

  return (
    <div className="flex min-h-screen flex-col bg-gray-900 text-white">
      <Header />
      <main className="flex-1">
        <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-900 via-gray-900 to-blue-950 pt-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-headline text-white mb-6">
                            Built on Trust. Focused on Your Future.
                        </h2>
                        <div className="space-y-4 text-neutral-300">
                             <p>
                                At LANDMARKLANE, we redefine living spaces with innovative designs and unparalleled expertise. Our passion lies in creating homes that inspire. With a commitment to quality and customer satisfaction.
                            </p>
                            <p>
                                Every detail is crafted with precision, ensuring you find the perfect place to call home. From luxury properties to functional spaces, LANDMARKLANE brings dreams to life, one home at a time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-16 sm:py-24 bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <stat.icon className="h-10 w-10 text-primary mb-4" />
                            <p className="text-3xl sm:text-4xl font-bold text-white">{stat.value}</p>
                            <p className="text-sm text-neutral-400 mt-2">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="py-16 sm:py-24 bg-blue-950/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                     <div>
                        <h3 className="text-3xl font-headline text-white mb-6">Our Vision</h3>
                        <p className="text-base text-neutral-300">
                            To be the leading real estate brand, redefining modern living by creating spaces that inspire, empower, and elevate lifestyles.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-headline text-white mb-6">Our Mission</h3>
                        <ul className="space-y-3">
                            {missions.map((mission) => (
                            <li key={mission} className="flex items-start">
                                <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                                <span className="text-neutral-300">{mission}</span>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <WhyOurTeamStandsOut />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
