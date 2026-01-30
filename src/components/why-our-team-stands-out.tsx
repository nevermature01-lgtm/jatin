import { Award, Users, Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedGridItem } from './animated-grid-item';
import { CircularTextLogo } from './circular-text-logo';

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
    <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 relative overflow-visible">
      <CircularTextLogo className="top-0 left-0 -mt-20 -ml-14 sm:-mt-11 sm:-ml-11" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
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
              <Card className="text-center h-full pt-6 bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105">
                <CardHeader className="items-center p-0 pb-4">
                  <div className="bg-accent/20 p-3 rounded-full mb-4">
                    <feature.icon className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl font-headline text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6 pt-2">
                  <p className="text-neutral-300 text-base">{feature.description}</p>
                </CardContent>
              </Card>
            </AnimatedGridItem>
          ))}
        </div>
      </div>
    </section>
  );
}
