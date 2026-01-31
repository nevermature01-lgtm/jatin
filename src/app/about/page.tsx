import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { AboutUsSection } from '@/components/about-us-section';
import { WhyOurTeamStandsOut } from '@/components/why-our-team-stands-out';
import { FaqSection } from '@/components/faq-section';

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-900">
      <Header />
      <main className="flex-1 pt-32">
        <AboutUsSection />
        <WhyOurTeamStandsOut />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
