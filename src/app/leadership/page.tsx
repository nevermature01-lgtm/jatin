import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

const teamMembers = [
  {
    name: 'Manas Chadha',
    title: 'Founder & CEO',
    avatarId: 'avatar-1',
  },
  {
    name: 'Shashank Jha',
    title: 'Senior Sales Manager',
    avatarId: 'avatar-2',
  },
  {
    name: 'Kirti Kiran',
    title: 'HR & Management',
    avatarId: 'avatar-3',
  },
  {
    name: 'Ankit Kumar',
    title: 'Head of Operations',
    avatarId: 'avatar-4',
  },
];

export default function LeadershipPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-900 text-white">
      <Header />
      <main className="flex-1">
        <section
          className="bg-gradient-to-b from-gray-900 via-gray-900 to-blue-950"
          style={{ paddingTop: '180px', paddingBottom: '64px' }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline text-white mb-4">
                Our Leadership
              </h1>
              <p className="text-lg text-neutral-300">
                Meet the experienced team driving our success and shaping the future of real estate.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
              {teamMembers.map((member, index) => {
                const avatarImage = PlaceHolderImages.find(p => p.id === member.avatarId);
                const animationDirection = index % 2 === 0 ? '' : '[animation-direction:reverse]';
                
                return (
                  <div key={member.name} className="group flex flex-col items-center text-center p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-2xl hover:shadow-accent/10">
                    <div className="relative w-40 h-40 mb-6">
                        {/* Animated fluid border */}
                        <div className={cn(
                            "absolute -inset-8 bg-[radial-gradient(circle_at_20%_80%,#facc15,transparent_50%),radial-gradient(circle_at_80%_20%,#f59e0b,transparent_50%)] blur-2xl opacity-90 animate-bg-pan-smoke [background-size:400%_400%] rounded-full",
                            animationDirection
                        )} style={{ animationDuration: `${15 + index * 5}s` }} />

                        {/* Glass tube container (the visible border) */}
                        <div className="absolute inset-0 rounded-full border-2 border-white/10" />

                        {/* The actual image */}
                        <div className="relative h-full w-full rounded-full overflow-hidden">
                          {avatarImage && (
                            <Image
                              src={avatarImage.imageUrl}
                              alt={member.name}
                              fill
                              className="object-cover"
                              data-ai-hint={avatarImage.imageHint}
                              sizes="160px"
                            />
                          )}
                        </div>
                    </div>
                    <h3 className="text-xl font-headline text-white">{member.name}</h3>
                    <p className="text-accent">{member.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
