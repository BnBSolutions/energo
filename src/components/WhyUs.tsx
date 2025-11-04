import { useI18n } from '@/lib/i18n';
import { Shield, Zap, FileCheck, Map, Award } from 'lucide-react';

export const WhyUs = () => {
  const { t } = useI18n();

  const features = [
    { icon: Shield, key: 'safety', color: 'text-primary' },
    { icon: Zap, key: 'efficiency', color: 'text-accent' },
    { icon: FileCheck, key: 'sla', color: 'text-primary' },
    { icon: Map, key: 'coverage', color: 'text-accent' },
    { icon: Award, key: 'experience', color: 'text-primary' },
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t('why_us.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.key}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-background shadow-soft flex items-center justify-center mx-auto mb-4">
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {t(`why_us.${feature.key}`)}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t(`why_us.${feature.key}_desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
