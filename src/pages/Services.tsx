import { useI18n } from '@/lib/i18n';
import { Zap, PenTool, Hammer, Wrench, FileSearch, MessageSquare, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CTASection } from '@/components/CTASection';

const Services = () => {
  const { t } = useI18n();

  const services = [
    { icon: Zap, key: 'energy_engineering', color: 'text-primary', bgColor: 'bg-primary/10' },
    { icon: PenTool, key: 'design', color: 'text-accent', bgColor: 'bg-accent/10' },
    { icon: Hammer, key: 'execution', color: 'text-primary', bgColor: 'bg-primary/10' },
    { icon: Wrench, key: 'maintenance', color: 'text-accent', bgColor: 'bg-accent/10' },
    { icon: FileSearch, key: 'audit', color: 'text-primary', bgColor: 'bg-primary/10' },
    { icon: MessageSquare, key: 'consulting', color: 'text-accent', bgColor: 'bg-accent/10' },
  ];

  const process = [
    'Consultanță inițială și audit',
    'Proiectare tehnică detaliată',
    'Execuție și monitorizare',
    'Predare și service',
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t('services.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('services.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card
                key={service.key}
                className="group hover:shadow-medium transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-2xl ${service.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    {t(`services.${service.key}`)}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {t(`services.${service.key}_desc`)}
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/contact">{t('contact.title')}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Procesul Nostru în 4 Pași
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <Card
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                    {index + 1}
                  </div>
                  <p className="font-semibold text-foreground">{step}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Services;
