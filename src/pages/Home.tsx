import { useEffect, useState } from 'react';
import { Hero } from '@/components/Hero';
import { KPIStrip } from '@/components/KPIStrip';
import { ServicesGrid } from '@/components/ServicesGrid';
import { WhyUs } from '@/components/WhyUs';
import { CTASection } from '@/components/CTASection';
import { SpaceCard } from '@/components/SpaceCard';
import { useI18n } from '@/lib/i18n';
import spacesData from '@/data/spaces.json';

const Home = () => {
  const { t } = useI18n();
  const [popularSpaces, setPopularSpaces] = useState<any[]>([]);

  useEffect(() => {
    const available = spacesData.filter((s) => s.available).slice(0, 3);
    setPopularSpaces(available);
  }, []);

  return (
    <>
      <Hero />
      <KPIStrip />
      <ServicesGrid />
      
      {/* Popular Spaces Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t('spaces.popular')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('spaces.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {popularSpaces.map((space, index) => (
              <div
                key={space.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <SpaceCard space={space} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyUs />
      <CTASection />
    </>
  );
};

export default Home;
