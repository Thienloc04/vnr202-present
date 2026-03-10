import { HeroSection } from '@/components/hero-section';
import { FlipCardsSection } from '@/components/flip-cards-section';
import { TimelineSection } from '@/components/timeline-section';
import { WorldMapSection } from '@/components/world-map-section';
import { MagazineSection } from '@/components/magazine-section';
import { FooterSection } from '@/components/footer-section';

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <HeroSection />
      <FlipCardsSection />
      <TimelineSection />
      <WorldMapSection />
      <MagazineSection />
      <FooterSection />
    </main>
  );
}
