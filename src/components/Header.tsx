import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Serviços', href: '/#servicos' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contato', href: '/contato' },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('/#')) {
      // If we're not on the home page, navigate to home first
      if (location.pathname !== '/') {
        // Use React Router for navigation instead of window.location
        window.location.href = href;
        return;
      }
      
      const sectionId = href.substring(2);
      const element = document.getElementById(sectionId);
      if (element) {
        // Get header height for proper offset
        const headerHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" role="banner">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-heading text-2xl font-bold text-hero-title">
            Andréa Matias
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6" role="navigation" aria-label="Menu principal">
          {navigation.map((item) => (
            <div key={item.name}>
              {item.href.startsWith('/#') ? (
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-success transition-colors"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-success ${
                    location.pathname === item.href
                      ? 'text-success'
                      : 'text-muted-foreground'
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <Button 
            className="btn-primary"
            onClick={() => {
              scrollToSection('/#contato');
            }}
          >
            <Calendar className="w-4 h-4 mr-2" />
            Agendar
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur">
          <nav className="flex flex-col space-y-4 p-6">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.href.startsWith('/#') ? (
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-base font-medium text-muted-foreground hover:text-success transition-colors w-full text-left"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-base font-medium transition-colors hover:text-success block ${
                      location.pathname === item.href
                        ? 'text-success'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Button 
              className="btn-primary w-full"
              onClick={() => {
                setMobileMenuOpen(false);
                scrollToSection('/#contato');
              }}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Agendar Consulta
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;