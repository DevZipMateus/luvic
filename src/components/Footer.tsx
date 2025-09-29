import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import luvicLogo from '@/assets/luvic-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const quickLinks = [
    { label: 'Início', id: 'hero' },
    { label: 'Sobre nós', id: 'about' },
    { label: 'Serviços', id: 'services' },
    { label: 'Por que escolher', id: 'why-choose' },
    { label: 'Contato', id: 'contact' }
  ];

  const services = [
    'Condimentos e aditivos',
    'Aromas e sabores',
    'Máquinas e equipamentos',
    'Consultoria técnica'
  ];

  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-4 sm:space-y-6 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3">
              <img 
                src={luvicLogo} 
                alt="Luvic Comercial Logo" 
                className="h-10 sm:h-12 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Soluções completas para a indústria alimentícia, com foco em embutidos 
              e produtos cárneos. Compromisso em cada entrega, solução em cada detalhe.
            </p>
            <div className="space-y-2">
              <p className="text-xs sm:text-sm text-gray-400">CNPJ: 46.993.004/0001-19</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Links rápidos</h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-left text-sm sm:text-base"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Nossos serviços</h3>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 text-sm sm:text-base">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Contato</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-4 sm:h-5 w-4 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <a 
                    href="https://wa.me/5519999523386"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                  >
                    (19) 99952-3386
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-4 sm:h-5 w-4 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <a 
                    href="mailto:luvic.comercial@gmail.com.br"
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-xs sm:text-sm break-all"
                  >
                    luvic.comercial@gmail.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-4 sm:h-5 w-4 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    Rua Silvinos Matos, 114<br />
                    Centro, João Neiva
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-4 sm:h-5 w-4 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    Segunda a Sexta<br />
                    8:00 - 17:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 sm:space-y-4 md:space-y-0">
            <div className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              © {currentYear} Luvic Comercial. Todos os direitos reservados.
            </div>
            <div className="text-gray-400 text-xs sm:text-sm text-center md:text-right">
              Desenvolvido com dedicação e qualidade
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;