import { useI18n } from '@/lib/i18n';

export const ClientsSection = () => {
  const { t } = useI18n();

  const clients = [
    {
      name: "McDonald's",
      description: "Restaurante McDonalds Chișinău",
      logo: "🍔"
    },
    {
      name: "Kellers",
      description: "Kellers Moldova Brewery",
      logo: "🍺"
    },
    {
      name: "Termoelectrica",
      description: "Furnizor de energie electrică și termică",
      logo: "⚡"
    },
    {
      name: "Farmacia Familiei",
      description: "Rețea de farmacii din Republica Moldova",
      logo: "💊"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t('clients.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('clients.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="bg-background rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4">{client.logo}</div>
              <h3 className="font-semibold text-foreground mb-2">{client.name}</h3>
              <p className="text-xs text-muted-foreground">{client.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
