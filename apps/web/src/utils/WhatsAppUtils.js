
const WHATSAPP_NUMBER = '5521993071529';

export const getWhatsAppLink = (message) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

export const getProductQuoteLink = (productName) => {
  const message = `Olá, tenho interesse em alugar a ${productName}. Gostaria de mais informações.`;
  return getWhatsAppLink(message);
};

export const getGeneralQuoteLink = () => {
  const message = 'Olá, gostaria de solicitar um orçamento para equipamentos hospitalares domiciliares.';
  return getWhatsAppLink(message);
};

export const getContactLink = () => {
  const message = 'Olá, Poderia me ajudar ?';
  return getWhatsAppLink(message);
};

export { WHATSAPP_NUMBER };
