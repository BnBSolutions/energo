import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const { t } = useI18n();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="mb-4 text-6xl font-bold text-foreground">404</h1>
        <p className="mb-8 text-xl text-muted-foreground">Oops! Page not found</p>
        <Button asChild className="bg-gradient-primary">
          <Link to="/">{t('nav.home')}</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
