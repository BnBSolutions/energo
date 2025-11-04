import { useI18n } from '@/lib/i18n';
import { Calendar, Square, Briefcase, Users } from 'lucide-react';

export const KPIStrip = () => {
  const { t } = useI18n();

  const kpis = [
    { icon: Calendar, value: '20+', label: t('kpi.years') },
    { icon: Square, value: '150k', label: t('kpi.area') },
    { icon: Briefcase, value: '500+', label: t('kpi.projects') },
    { icon: Users, value: '200+', label: t('kpi.clients') },
  ];

  return (
    <section className="py-12 lg:py-16 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {kpis.map((kpi, index) => (
            <div
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <kpi.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-foreground mb-1">{kpi.value}</div>
              <div className="text-sm text-muted-foreground">{kpi.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
