import { useState, useEffect } from 'react';
import { useI18n } from '@/lib/i18n';
import { SpaceCard } from '@/components/SpaceCard';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Search, SlidersHorizontal } from 'lucide-react';
import spacesData from '@/data/spaces.json';

const Spaces = () => {
  const { t } = useI18n();
  const [spaces, setSpaces] = useState(spacesData);
  const [filteredSpaces, setFilteredSpaces] = useState(spacesData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedZone, setSelectedZone] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [areaRange, setAreaRange] = useState([0, 2000]);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [availableOnly, setAvailableOnly] = useState(false);
  const [sortBy, setSortBy] = useState('relevance');

  const zones = ['all', ...new Set(spacesData.map(s => s.zone))];
  const types = ['all', 'office', 'warehouse', 'production', 'commercial'];

  useEffect(() => {
    let result = [...spaces];

    if (searchTerm) {
      result = result.filter(space => 
        Object.values(space.title).some(title => 
          title.toLowerCase().includes(searchTerm.toLowerCase())
        ) || space.zone.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedZone !== 'all') {
      result = result.filter(space => space.zone === selectedZone);
    }

    if (selectedType !== 'all') {
      result = result.filter(space => space.type === selectedType);
    }

    result = result.filter(space => 
      space.area_m2 >= areaRange[0] && space.area_m2 <= areaRange[1]
    );

    if (availableOnly) {
      result = result.filter(space => space.available);
    }

    // Sort
    if (sortBy === 'price_asc') {
      result.sort((a, b) => (a.price_eur_month || Infinity) - (b.price_eur_month || Infinity));
    } else if (sortBy === 'price_desc') {
      result.sort((a, b) => (b.price_eur_month || 0) - (a.price_eur_month || 0));
    } else if (sortBy === 'area_asc') {
      result.sort((a, b) => a.area_m2 - b.area_m2);
    } else if (sortBy === 'area_desc') {
      result.sort((a, b) => b.area_m2 - a.area_m2);
    }

    setFilteredSpaces(result);
  }, [searchTerm, selectedZone, selectedType, areaRange, priceRange, availableOnly, sortBy, spaces]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedZone('all');
    setSelectedType('all');
    setAreaRange([0, 2000]);
    setPriceRange([0, 10000]);
    setAvailableOnly(false);
    setSortBy('relevance');
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t('spaces.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('spaces.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl p-6 border border-border sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-foreground flex items-center gap-2">
                    <SlidersHorizontal className="w-5 h-5 text-primary" />
                    {t('spaces.filters')}
                  </h3>
                  <Button variant="ghost" size="sm" onClick={resetFilters}>
                    Reset
                  </Button>
                </div>

                <div className="space-y-6">
                  {/* Search */}
                  <div>
                    <Label>{t('nav.spaces')}</Label>
                    <div className="relative mt-2">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        placeholder="Caută..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  {/* Zone */}
                  <div>
                    <Label>{t('spaces.zone')}</Label>
                    <Select value={selectedZone} onValueChange={setSelectedZone}>
                      <SelectTrigger className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-popover">
                        {zones.map(zone => (
                          <SelectItem key={zone} value={zone}>
                            {zone === 'all' ? 'Toate' : zone}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Type */}
                  <div>
                    <Label>{t('spaces.type')}</Label>
                    <Select value={selectedType} onValueChange={setSelectedType}>
                      <SelectTrigger className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-popover">
                        {types.map(type => (
                          <SelectItem key={type} value={type}>
                            {type === 'all' ? 'Toate' : t(`spaces.${type}`)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Area Range */}
                  <div>
                    <Label>{t('spaces.area')}: {areaRange[0]} - {areaRange[1]} m²</Label>
                    <Slider
                      value={areaRange}
                      onValueChange={setAreaRange}
                      min={0}
                      max={2000}
                      step={50}
                      className="mt-4"
                    />
                  </div>

                  {/* Available Only */}
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="available"
                      checked={availableOnly}
                      onCheckedChange={(checked) => setAvailableOnly(checked as boolean)}
                    />
                    <Label htmlFor="available" className="cursor-pointer">
                      {t('spaces.available_now')}
                    </Label>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="lg:col-span-3">
              {/* Sort Bar */}
              <div className="flex items-center justify-between mb-6 animate-fade-in">
                <p className="text-muted-foreground">
                  {filteredSpaces.length} {t('spaces.results')}
                </p>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder={t('spaces.sort_by')} />
                  </SelectTrigger>
                  <SelectContent className="bg-popover">
                    <SelectItem value="relevance">{t('spaces.relevance')}</SelectItem>
                    <SelectItem value="price_asc">{t('spaces.price_asc')}</SelectItem>
                    <SelectItem value="price_desc">{t('spaces.price_desc')}</SelectItem>
                    <SelectItem value="area_asc">{t('spaces.area_asc')}</SelectItem>
                    <SelectItem value="area_desc">{t('spaces.area_desc')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Grid */}
              {filteredSpaces.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredSpaces.map((space, index) => (
                    <div
                      key={space.id}
                      className="animate-fade-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <SpaceCard space={space} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 animate-fade-in">
                  <p className="text-xl text-muted-foreground mb-4">{t('spaces.no_results')}</p>
                  <Button onClick={resetFilters}>{t('spaces.reset_filters')}</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Spaces;
