import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Beaker, 
  Cog, 
  Lightbulb, 
  UserCheck, 
  Zap,
  ShieldCheck,
  TrendingUp,
  Settings
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Beaker,
      title: 'Condimentos e aditivos funcionais',
      description: 'Fornecemos condimentos especializados e aditivos funcionais que proporcionam estabilidade, rendimento e sabor diferenciado aos alimentos.',
      features: ['Estabilidade do produto', 'Melhoria no rendimento', 'Padronização do sabor', 'Conservação natural']
    },
    {
      icon: Lightbulb,
      title: 'Aromas e sabores',
      description: 'Desenvolvemos e fornecemos aromas e sabores específicos para atender às demandas sensoriais do mercado alimentício.',
      features: ['Perfis sensoriais únicos', 'Aromas naturais', 'Sabores customizados', 'Consultoria sensorial']
    },
    {
      icon: Cog,
      title: 'Máquinas e equipamentos',
      description: 'Disponibilizamos máquinas e equipamentos específicos para otimizar processos produtivos, aumentando eficiência e reduzindo custos.',
      features: ['Equipamentos modernos', 'Otimização de processos', 'Redução de custos', 'Suporte técnico']
    },
    {
      icon: UserCheck,
      title: 'Consultoria técnica especializada',
      description: 'Nossa consultoria auxilia no desenvolvimento de formulações, adequação às normas regulatórias e busca por maior vida útil dos produtos.',
      features: ['Desenvolvimento de formulações', 'Adequação regulatória', 'Aumento da vida útil', 'Acompanhamento técnico']
    }
  ];

  const benefits = [
    { icon: ShieldCheck, title: 'Qualidade garantida', description: 'Produtos certificados e testados' },
    { icon: TrendingUp, title: 'Resultados comprovados', description: 'Aumento de produtividade e qualidade' },
    { icon: Settings, title: 'Suporte completo', description: 'Acompanhamento em todas as etapas' },
    { icon: Zap, title: 'Inovação constante', description: 'Soluções tecnológicas avançadas' }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Nossos serviços
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Oferecemos soluções completas para a indústria alimentícia, com foco especial 
            em embutidos e produtos cárneos, garantindo qualidade e inovação em cada projeto.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-glow transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground mb-3">Principais benefícios:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-secondary/30 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Por que escolher nossos serviços?
            </h3>
            <p className="text-muted-foreground text-lg">
              Diferenciais que fazem da Luvic Comercial a parceira ideal para seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{benefit.title}</h4>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://wa.me/5519999523386"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant">
                Solicite um orçamento
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;