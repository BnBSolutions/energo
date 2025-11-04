import { useI18n } from '@/lib/i18n';

export const ClientsSection = () => {
  const { t } = useI18n();

  const clients = [
    {
      name: "McDonald's",
      description: "Restaurante McDonalds Chișinău",
      logo: "/energo/images/clients/mcdonalds-logo.png?v=2"
    },
    {
      name: "Kellers",
      description: "Kellers Moldova Brewery",
      logo: "/energo/images/clients/kellers-logo.png?v=2"
    },
    {
      name: "Termoelectrica",
      description: "Furnizor de energie electrică și termică",
      logo: "/energo/images/clients/termoelectrica-logo.jpg?v=2"
    },
    {
      name: "Farmacia Familiei",
      description: "Rețea de farmacii din Republica Moldova",
      logo: "/energo/images/clients/farmacia-familiei-logo.png?v=2"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
      <div className="text-center mb-12 animate-none md:animate-fade-in">
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
            className="bg-background rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-soft hover:shadow-medium transition-all duration-300 animate-none md:animate-fade-in group"
          >
              <div className="w-full h-24 mb-4 flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <h3 className="font-semibold text-foreground mb-1 text-sm">{client.name}</h3>
              <p className="text-xs text-muted-foreground">{client.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
