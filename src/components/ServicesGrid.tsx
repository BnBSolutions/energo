import { useI18n } from '@/lib/i18n';
import { Zap, PenTool, Hammer, Wrench, FileSearch, MessageSquare } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

export const ServicesGrid = () => {
  const { t } = useI18n();

  const services = [
    {
      icon: Zap,
      key: 'energy_engineering',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: PenTool,
      key: 'design',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      icon: Hammer,
      key: 'execution',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Wrench,
      key: 'maintenance',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      icon: FileSearch,
      key: 'audit',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: MessageSquare,
      key: 'consulting',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={service.key}
              className="group hover:shadow-medium transition-all duration-300 cursor-pointer animate-fade-in hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className={`w-14 h-14 rounded-2xl ${service.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`w-7 h-7 ${service.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {t(`services.${service.key}`)}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {t(`services.${service.key}_desc`)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center text-primary hover:underline font-medium"
          >
            {t('nav.services')} →
          </Link>
        </div>
      </div>
    </section>
  );
};
