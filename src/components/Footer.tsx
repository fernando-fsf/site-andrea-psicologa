import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white" role="contentinfo">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="font-heading text-2xl font-bold mb-4">
              Andréa Matias
            </h3>
            <p className="text-sm opacity-90 mb-6 max-w-md">
              Psicóloga especializada em Terapia Cognitivo-Comportamental (TCC), 
              oferecendo atendimento presencial em Nova Iguaçu e online para todo o Brasil.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/andreamatiaspsi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-brand-rose rounded-full flex items-center justify-center hover:bg-brand-lilac transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/andreamatiaspsi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-brand-rose rounded-full flex items-center justify-center hover:bg-brand-lilac transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-sm opacity-90 hover:opacity-100 hover:text-brand-green transition-colors"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link 
                  to="/sobre" 
                  className="text-sm opacity-90 hover:opacity-100 hover:text-brand-green transition-colors"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className="text-sm opacity-90 hover:opacity-100 hover:text-brand-green transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/contato" 
                  className="text-sm opacity-90 hover:opacity-100 hover:text-brand-green transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-brand-green flex-shrink-0" />
                <a 
                  href="mailto:contato@andreamatiaspsi.com"
                  className="text-sm opacity-90 hover:opacity-100 hover:text-brand-green transition-colors break-all md:break-normal"
                >
                  contato@andreamatiaspsi.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-brand-green flex-shrink-0" />
                <a 
                  href="https://wa.me/5521987654321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm opacity-90 hover:opacity-100 hover:text-brand-green transition-colors"
                >
                  (21) 98765-4321
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-brand-green flex-shrink-0" />
                <span className="text-sm opacity-90">
                  Nova Iguaçu, RJ
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-75">
            © {currentYear} Andréa Matias - Psicóloga CRP 05/56720. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;