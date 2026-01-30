import { Award, Users, Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl sm:text-5xl font-headline text-foreground mb-4">
            Why Our Team Stands Out
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience, expertise, and dedication that sets us apart in the real estate industry.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center pt-6 bg-card hover:shadow-lg transition-shadow duration-300 ease-in-out">
              <CardHeader className="items-center p-0 pb-4">
                <div className="bg-accent/20 p-3 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-xl font-headline">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6 pt-2">
                <p className="text-muted-foreground text-base">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
