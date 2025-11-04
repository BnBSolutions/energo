import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useI18n } from '@/lib/i18n';
import { ArrowRight } from 'lucide-react';

export const CTASection = () => {
  const { t } = useI18n();

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-3xl p-8 lg:p-12 border border-primary/20 shadow-large">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t('cta.subtitle')}
          </p>
          <Button asChild size="lg" className="bg-gradient-primary text-white shadow-medium hover:shadow-large group">
            <Link to="/contact">
              {t('cta.button')}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
