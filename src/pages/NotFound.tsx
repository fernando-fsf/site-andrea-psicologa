import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary/20 mb-4">404</h1>
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
            Página não encontrada
          </h2>
          <p className="text-body-large text-muted-foreground mb-8">
            Oops! A página que você está procurando não existe ou foi movida.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button className="btn-primary w-full" asChild>
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              Voltar para a Página Inicial
            </Link>
          </Button>
          
          <Button variant="outline" className="w-full" onClick={() => window.history.back()}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar à Página Anterior
          </Button>
        </div>
        
        <div className="mt-8 pt-8 border-t">
          <p className="text-sm text-muted-foreground">
            Se você acredita que isso é um erro, entre em contato conosco:
          </p>
          <Button variant="link" className="text-success" asChild>
            <a href="mailto:contato@andreamatiaspsi.com">
              contato@andreamatiaspsi.com
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
