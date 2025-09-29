import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Award, Handshake } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Foco em resultados',
      description: 'Comprometidos em entregar soluções que realmente fazem a diferença para nossos clientes.'
    },
    {
      icon: Users,
      title: 'Parceria sólida',
      description: 'Construímos relacionamentos duradouros baseados em confiança mútua e transparência.'
    },
    {
      icon: Award,
      title: 'Qualidade garantida',
      description: 'Produtos e serviços de alta qualidade que atendem aos mais rigorosos padrões da indústria.'
    },
    {
      icon: Handshake,
      title: 'Compromisso',
      description: 'Cada entrega é feita com dedicação e atenção aos detalhes que fazem a diferença.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Sobre a Luvic Comercial
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Quem somos
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                A Luvic Comercial é uma empresa especializada em fornecer soluções completas 
                para a indústria alimentícia, com foco especial no setor de embutidos e produtos cárneos.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Nossa missão é levar soluções que agreguem valor aos nossos clientes, 
                construindo parcerias sólidas baseadas em confiança e resultados. 
                Trabalhamos com dedicação para oferecer produtos e serviços que 
                garantem qualidade, padronização e inovação.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Com nossa expertise técnica e compromisso com a excelência, 
                acompanhamos nossos parceiros em cada etapa do processo, 
                garantindo o sucesso de seus projetos e produtos.
              </p>
            </div>

            <div className="relative">
              <Card className="shadow-elegant">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">15+</div>
                    <p className="text-muted-foreground mb-4">Anos de experiência</p>
                    
                    <div className="text-4xl font-bold text-accent mb-2">500+</div>
                    <p className="text-muted-foreground mb-4">Clientes atendidos</p>
                    
                    <div className="text-4xl font-bold text-primary mb-2">100%</div>
                    <p className="text-muted-foreground">Compromisso com qualidade</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-glow transition-all duration-300 group">
                <CardContent className="p-6">
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-semibold text-foreground mb-3">{value.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;