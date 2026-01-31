import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Mail, MapPin, Phone } from 'lucide-react';

type TeamMember = {
  name: string;
  title: string;
  avatarId: string;
  address?: string;
  phone?: string;
  email?: string;
};

const teamMembers: TeamMember[] = [
  {
    name: 'Manas Chadha',
    title: 'CEO & Founder',
    avatarId: 'avatar-3',
    address: 'NX-ONE Tech Zone 4, Greater Noida, Uttar Pradesh 201318, India',
    phone: '+91 9528199631',
    email: 'info@landmarklaneestates.co.in',
  },
  {
    name: 'SHASHANK JHA',
    title: 'Senior Sales Manager',
    avatarId: 'avatar-3',
    address: 'NX-ONE Tech Zone 4, Greater Noida, Uttar Pradesh 201318, India',
    phone: '+91 82670 10190',
    email: 'info@landmarklaneestates.co.in',
  },
  {
    name: 'KIRTI KIRAN',
    title: 'HR & Management',
    avatarId: 'avatar-3',
    address: 'NX-ONE Tech Zone 4, Greater Noida, Uttar Pradesh 201318, India',
    phone: '+91 82173 08250',
    email: 'info@landmarklaneestates.co.in',
  },
  {
    name: 'Ankit Kumar',
    title: 'Head of Operations',
    avatarId: 'avatar-3',
    address: 'NX-ONE Tech Zone 4, Greater Noida, Uttar Pradesh 201318, India',
    phone: '+91 82173 08250',
    email: 'info@landmarklaneestates.co.in',
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
                  <div key={member.name} className="group flex flex-col items-center text-center p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-2xl hover:shadow-accent/10">
                    <div className="relative w-40 h-40 mb-6">
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
                    {member.address && member.phone && member.email && (
                      <div className="mt-4 text-left space-y-2 text-sm text-neutral-300">
                        <p className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 mt-1 text-accent flex-shrink-0" />
                          <span>{member.address}</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-accent" />
                          <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="hover:text-white">{member.phone}</a>
                        </p>
                        <p className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-accent" />
                          <a href={`mailto:${member.email}`} className="hover:text-white">{member.email}</a>
                        </p>
                      </div>
                    )}
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
