import { useI18n } from '@/lib/i18n';
import { Award, Target, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const { t } = useI18n();

  const certifications = [
    'ISO 9001:2015',
    'ISO 14001:2015',
    'ISO 45001:2018',
    'ISO 50001:2018',
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {t('about.history_title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.history_text')}
              </p>
            </div>
            <div className="aspect-video rounded-3xl bg-muted animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img
                src="/placeholder.svg"
                alt="Company history"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 aspect-video rounded-3xl bg-muted animate-fade-in">
              <img
                src="/placeholder.svg"
                alt="Our mission"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {t('about.mission_title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.mission_text')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('about.certifications_title')}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <Card
                key={cert}
                className="animate-fade-in hover:shadow-medium transition-all"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <p className="font-semibold text-foreground">{cert}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('about.team_title')}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {t('about.team_text')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
