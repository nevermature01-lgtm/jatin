import { Award, Users, Briefcase } from 'lucide-react';
import { AnimatedGridItem } from './animated-grid-item';

const features = [
  {
    icon: Award,
    title: 'Proven Track Record',
    description: 'Combined 40+ years of experience in delivering exceptional real estate solutions across various sectors.',
  },
  {
    icon: Users,
    title: 'Client-Centric Approach',
    description: "Every decision is made with our clients' best interests in mind, ensuring satisfaction at every step.",
  },
  {
    icon: Briefcase,
    title: 'Industry Expertise',
    description: 'Deep knowledge of market trends, legal frameworks, and investment strategies for optimal results.',
  },
];

export function WhyOurTeamStandsOut() {
  return (
    <section className="py-16 sm:py-24 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
           <p className="text-sm font-semibold uppercase tracking-widest text-neutral-400 mb-4">
            OUR STRENGTHS
          </p>
          <h2 className="text-4xl sm:text-5xl font-headline text-white mb-4">
            Why Our Team Stands Out
          </h2>
          <p className="text-lg text-neutral-300">
            Experience, expertise, and dedication that sets us apart in the real estate industry.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedGridItem key={index} index={index}>
               <div className="h-full bg-white/5 p-8 rounded-lg border border-white/10 transition-all duration-300 hover:border-primary hover:bg-primary/10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/20 p-3 rounded-lg text-primary">
                        <feature.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-headline text-white">{feature.title}</h3>
                  </div>
                  <p className="text-neutral-300">{feature.description}</p>
              </div>
            </AnimatedGridItem>
          ))}
        </div>
      </div>
    </section>
  );
}
