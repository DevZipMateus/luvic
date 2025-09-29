import { Button } from '@/components/ui/button';
import { ChevronRight, Phone, Mail } from 'lucide-react';

const Hero = () => {
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

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-hero-gradient">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-hero-overlay"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main heading - H1 with company name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Luvic Comercial
          </h1>
          
          {/* Subtitle - H2 with company description */}
          <h2 className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            Levar soluções que agreguem valor aos nossos clientes, construindo parcerias sólidas baseadas em confiança e resultados
          </h2>

          {/* Slogan */}
          <p className="text-lg md:text-xl mb-12 text-white/80 italic animate-fade-in" style={{animationDelay: '0.4s'}}>
            "Compromisso em cada entrega, solução em cada detalhe"
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Button
              size="lg"
              onClick={() => scrollToSection('services')}
              className="bg-white/10 text-white border border-white/30 hover:bg-white hover:text-primary backdrop-blur-sm shadow-elegant group min-w-[200px]"
            >
              Nossos serviços
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <a
              href="https://wa.me/5519999523386"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-elegant min-w-[200px]"
              >
                <Phone className="mr-2 h-4 w-4" />
                Fale conosco
              </Button>
            </a>
          </div>

          {/* Contact info */}
          <div className="mt-16 flex flex-col sm:flex-row gap-8 justify-center items-center text-white/70 animate-fade-in" style={{animationDelay: '0.8s'}}>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>(19) 99952-3386</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>luvic.comercial@gmail.com.br</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;