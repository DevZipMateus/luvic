import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Clock, 
  Award, 
  Users, 
  Headphones, 
  CheckCircle,
  Star,
  ThumbsUp,
  Zap
} from 'lucide-react';

const WhyChoose = () => {
  const reasons = [
    {
      icon: Award,
      title: 'Expertise comprovada',
      description: 'Anos de experiência no mercado alimentício com foco em embutidos e produtos cárneos.',
      stats: '15+ anos de mercado'
    },
    {
      icon: Users,
      title: 'Parceria personalizada',
      description: 'Desenvolvimento de soluções específicas para cada cliente e suas necessidades únicas.',
      stats: 'Atendimento 1:1'
    },
    {
      icon: CheckCircle,
      title: 'Qualidade garantida',
      description: 'Produtos certificados que atendem aos mais rigorosos padrões da indústria alimentícia.',
      stats: '100% de qualidade'
    },
    {
      icon: Headphones,
      title: 'Suporte técnico completo',
      description: 'Acompanhamento próximo em todas as etapas, da consultoria à implementação das soluções.',
      stats: 'Suporte 24/7'
    },
    {
      icon: Zap,
      title: 'Inovação constante',
      description: 'Sempre atualizados com as últimas tecnologias e tendências do mercado alimentício.',
      stats: 'Tecnologia de ponta'
    },
    {
      icon: Clock,
      title: 'Agilidade na entrega',
      description: 'Processos otimizados que garantem prazos cumpridos e entregas pontuais.',
      stats: 'Entregas rápidas'
    }
  ];

  const testimonialHighlights = [
    {
      icon: Star,
      metric: '98%',
      description: 'Satisfação dos clientes'
    },
    {
      icon: ThumbsUp,
      metric: '500+',
      description: 'Projetos concluídos'
    },
    {
      icon: Users,
      metric: '200+',
      description: 'Empresas parceiras'
    }
  ];

  return (
    <section id="why-choose" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6 px-4">
            Por que escolher a Luvic Comercial?
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 sm:mb-8"></div>
          <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto px-4">
            Descubra os diferenciais que tornam a Luvic Comercial a parceira ideal 
            para o crescimento e sucesso do seu negócio na indústria alimentícia.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {reasons.map((reason, index) => (
            <Card key={index} className="hover:shadow-glow transition-all duration-300 group border-0 shadow-elegant">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 sm:p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                    <reason.icon className="h-5 sm:h-6 w-5 sm:w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">{reason.title}</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm mb-2 sm:mb-3 leading-relaxed">{reason.description}</p>
                    <span className="text-primary font-medium text-xs sm:text-sm">{reason.stats}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonial Highlights */}
        <div className="bg-hero-gradient rounded-2xl p-6 sm:p-8 md:p-12 text-center text-white mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 px-4">
            Resultados que comprovam nossa excelência
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {testimonialHighlights.map((highlight, index) => (
              <div key={index} className="group">
                <div className="p-3 sm:p-4 bg-white/10 rounded-full w-fit mx-auto mb-3 sm:mb-4 group-hover:bg-white/20 transition-colors duration-300">
                  <highlight.icon className="h-6 sm:h-8 w-6 sm:w-8 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold mb-2">{highlight.metric}</div>
                <p className="text-white/80 text-sm sm:text-base">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto shadow-elegant">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 px-4">
                Pronto para ser nosso próximo parceiro de sucesso?
              </h3>
              <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base px-4">
                Entre em contato conosco e descubra como podemos ajudar sua empresa 
                a alcançar novos patamares de qualidade e eficiência.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <a
                  href="https://wa.me/5519999523386"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant w-full sm:w-auto sm:min-w-[200px]">
                    Falar com especialista
                  </Button>
                </a>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      const headerHeight = 80;
                      const elementPosition = element.offsetTop - headerHeight;
                      window.scrollTo({
                        top: elementPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className="w-full sm:w-auto sm:min-w-[200px] border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Ver informações de contato
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;