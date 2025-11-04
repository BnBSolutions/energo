import { Hero } from '@/components/Hero';
import { KPIStrip } from '@/components/KPIStrip';
import { ServicesGrid } from '@/components/ServicesGrid';
import { WhyUs } from '@/components/WhyUs';
import { CTASection } from '@/components/CTASection';

const Home = () => {
  return (
    <>
      <Hero />
      <KPIStrip />
      <ServicesGrid />
      <WhyUs />
      <CTASection />
    </>
  );
};

export default Home;
