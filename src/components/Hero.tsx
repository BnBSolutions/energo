import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useI18n } from '@/lib/i18n';
import { ArrowRight, Zap } from 'lucide-react';
import heroBackground from '@/assets/hero-industrial-bg.jpg';

export const Hero = () => {
  const { t } = useI18n();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Industrial facility" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/75 to-background/70" />
      </div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">20+ {t('kpi.years')}</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight">
            {t('hero.title')}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-primary text-white shadow-medium hover:shadow-large transition-all group">
              <Link to="/spaces">
                {t('hero.cta_spaces')}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="backdrop-blur-sm bg-background/50">
              <Link to="/contact">{t('hero.cta_contact')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
