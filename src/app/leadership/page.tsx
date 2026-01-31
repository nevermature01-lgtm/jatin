import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

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
    title: 'Head of Marketing',
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
              {teamMembers.map((member) => {
                const avatarImage = PlaceHolderImages.find(p => p.id === member.avatarId);
                return (
                  <div key={member.name} className="flex flex-col items-center text-center">
                    <div className="relative h-40 w-40 mb-4 rounded-full overflow-hidden border-4 border-accent">
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
                    <h3 className="text-xl font-headline text-white">{member.name}</h3>
                    <p className="text-primary">{member.title}</p>
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
