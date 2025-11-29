const WHATSAPP_NUMBER = '573104647152';
const WHATSAPP_MESSAGE = 'Hola Sussana! Me interesa saber más sobre tus servicios';

export const getWhatsAppUrl = (): string => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
};

