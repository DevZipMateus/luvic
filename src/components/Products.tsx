import produto1 from '@/assets/produto-1.jpg';
import produto2 from '@/assets/produto-2.jpg';
import produto3 from '@/assets/produto-3.jpg';

const Products = () => {
  const products = [
    {
      id: 1,
      image: produto1,
      alt: "Linguiças artesanais sendo preparadas com técnicas tradicionais"
    },
    {
      id: 2,
      image: produto2,
      alt: "Processo de produção de embutidos com qualidade premium"
    },
    {
      id: 3,
      image: produto3,
      alt: "Variedade de produtos cárneos e embutidos de alta qualidade"
    }
  ];

  return (
    <section id="products" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 text-foreground px-4">
          Alguns de nossos produtos
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-4 sm:px-0">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group relative overflow-hidden rounded-xl shadow-elegant hover-scale bg-card"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;