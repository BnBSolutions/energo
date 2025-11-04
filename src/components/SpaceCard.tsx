import { Link } from 'react-router-dom';
import { MapPin, Square, Euro } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useI18n } from '@/lib/i18n';

interface Space {
  id: string;
  slug: string;
  title: Record<string, string>;
  zone: string;
  type: string;
  area_m2: number;
  price_eur_month: number | null;
  available: boolean;
  images: string[];
}

interface SpaceCardProps {
  space: Space;
}

export const SpaceCard = ({ space }: SpaceCardProps) => {
  const { language, t } = useI18n();

  return (
    <Card className="group hover:shadow-medium transition-all duration-300 overflow-hidden">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={space.images[0]}
          alt={space.title[language]}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 flex gap-2">
          {space.available && (
            <Badge className="bg-primary/90 text-white">{t('spaces.available')}</Badge>
          )}
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
          {space.title[language]}
        </h3>
        
        <div className="space-y-2 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span>{space.zone}</span>
          </div>
          <div className="flex items-center gap-2">
            <Square className="w-4 h-4 text-primary" />
            <span>{space.area_m2} m²</span>
          </div>
          <div className="flex items-center gap-2">
            <Euro className="w-4 h-4 text-primary" />
            <span className="font-semibold text-foreground">
              {space.price_eur_month ? `€${space.price_eur_month}/${t('spaces.per_month').replace('€/', '')}` : t('spaces.on_request')}
            </span>
          </div>
        </div>

        <Button asChild className="w-full" variant="outline">
          <Link to={`/spaces/${space.slug}`}>{t('spaces.view_details')}</Link>
        </Button>
      </CardContent>
    </Card>
  );
};
