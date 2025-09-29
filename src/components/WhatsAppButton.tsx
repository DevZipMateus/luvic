import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = "Olá! Vi o site da Luvic Comercial e gostaria de mais informações sobre os serviços oferecidos.";
    const whatsappUrl = `https://wa.me/5519999523386?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        size="lg"
        className="bg-green-500 hover:bg-green-600 text-white shadow-2xl rounded-full p-4 h-14 w-14 group"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
      </Button>
    </div>
  );
};

export default WhatsAppButton;