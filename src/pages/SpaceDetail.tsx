import { useParams, Link, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useI18n } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Square, Euro, ChevronLeft, Building, Zap, Car, Shield } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import spacesData from '@/data/spaces.json';

const SpaceDetail = () => {
  const { slug } = useParams();
  const { language, t } = useI18n();
  const { toast } = useToast();
  const [space, setSpace] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '', consent: false });

  useEffect(() => {
    const found = spacesData.find(s => s.slug === slug);
    setSpace(found);
  }, [slug]);

  if (!space) {
    return <Navigate to="/spaces" />;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t('contact.success'),
      description: t('contact.success'),
    });
    setFormData({ name: '', email: '', phone: '', message: '', consent: false });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Breadcrumb */}
      <section className="py-6 border-b border-border">
        <div className="container mx-auto px-4">
          <Link to="/spaces" className="inline-flex items-center text-primary hover:underline">
            <ChevronLeft className="w-4 h-4 mr-1" />
            {t('spaces.title')}
          </Link>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Title & Badge */}
              <div className="mb-6 animate-fade-in">
                <div className="flex items-start justify-between mb-2">
                  <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
                    {space.title[language]}
                  </h1>
                  {space.available && (
                    <Badge className="bg-primary text-white">{t('spaces.available')}</Badge>
                  )}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{space.address}</span>
                </div>
              </div>

              {/* Gallery */}
              <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="aspect-video rounded-2xl overflow-hidden mb-4">
                  <img
                    src={space.images[selectedImage]}
                    alt={space.title[language]}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {space.images.map((img: string, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === idx ? 'border-primary' : 'border-transparent'
                      }`}
                    >
                      <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Description */}
              <Card className="mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    {t('space_detail.description')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {space.description[language]}
                  </p>
                </CardContent>
              </Card>

              {/* Amenities */}
              <Card className="mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    {t('space_detail.amenities')}
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {space.amenities.map((amenity: string, idx: number) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Shield className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-sm text-foreground">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Map */}
              <Card className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    {t('space_detail.location')}
                  </h2>
                  <div className="aspect-video rounded-lg bg-muted flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {t('space_detail.specifications')}
                  </h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Square className="w-4 h-4 text-primary" />
                        <span className="text-sm">{t('spaces.area')}</span>
                      </div>
                      <span className="font-semibold text-foreground">{space.area_m2} m²</span>
                    </div>

                    {space.floor !== undefined && (
                      <div className="flex items-center justify-between py-3 border-b border-border">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Building className="w-4 h-4 text-primary" />
                          <span className="text-sm">{t('space_detail.floor')}</span>
                        </div>
                        <span className="font-semibold text-foreground">{space.floor}</span>
                      </div>
                    )}

                    {space.electrical_kw && (
                      <div className="flex items-center justify-between py-3 border-b border-border">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Zap className="w-4 h-4 text-primary" />
                          <span className="text-sm">{t('space_detail.electrical')}</span>
                        </div>
                        <span className="font-semibold text-foreground">{space.electrical_kw} kW</span>
                      </div>
                    )}

                    {space.parking_spots && (
                      <div className="flex items-center justify-between py-3 border-b border-border">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Car className="w-4 h-4 text-primary" />
                          <span className="text-sm">{t('space_detail.parking')}</span>
                        </div>
                        <span className="font-semibold text-foreground">{space.parking_spots}</span>
                      </div>
                    )}

                    <div className="flex items-center justify-between py-3">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Euro className="w-4 h-4 text-primary" />
                        <span className="text-sm">{t('spaces.price')}</span>
                      </div>
                      <span className="font-bold text-xl text-primary">
                        {space.price_eur_month ? `€${space.price_eur_month}/luna` : t('spaces.on_request')}
                      </span>
                    </div>
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-gradient-primary">
                        {t('spaces.request_viewing')}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-background">
                      <DialogHeader>
                        <DialogTitle>{t('spaces.request_viewing')}</DialogTitle>
                      </DialogHeader>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <Label htmlFor="name">{t('contact.name')}</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">{t('contact.email')}</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">{t('contact.phone')}</Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="message">{t('contact.message')}</Label>
                          <Textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            rows={4}
                          />
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="consent"
                            checked={formData.consent}
                            onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
                            required
                          />
                          <Label htmlFor="consent" className="text-sm cursor-pointer">
                            {t('contact.consent')}
                          </Label>
                        </div>
                        <Button type="submit" className="w-full bg-gradient-primary">
                          {t('contact.send')}
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpaceDetail;
