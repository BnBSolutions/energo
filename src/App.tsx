import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { I18nProvider } from "@/lib/i18n";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Spaces from "./pages/Spaces";
import SpaceDetail from "./pages/SpaceDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import roTranslations from "./locales/ro.json";
import enTranslations from "./locales/en.json";
import ruTranslations from "./locales/ru.json";

const queryClient = new QueryClient();

const translations = {
  ro: roTranslations,
  en: enTranslations,
  ru: ruTranslations,
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <I18nProvider translations={translations}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/spaces" element={<Spaces />} />
                <Route path="/spaces/:slug" element={<SpaceDetail />} />
                <Route path="/contact" element={<Contact />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </I18nProvider>
  </QueryClientProvider>
);

export default App;
