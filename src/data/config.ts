// GEAR Configuration
// Replace these values with real data before going live

/**
 * WhatsApp contact URL
 * Format: https://wa.me/55XXXXXXXXXXX?text=Your+message
 * Replace with the official GEAR WhatsApp number
 */
export const WHATSAPP_NUMBER = '5500000000000'; // TODO: Replace with official GEAR WhatsApp number
export const WHATSAPP_MESSAGE = 'Olá! Gostaria de conversar sobre um projeto com a GEAR.';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

/**
 * Company info
 */
export const COMPANY = {
  name: 'GEAR',
  fullName: 'GEAR Tecnologia',
  description: 'Empresa brasileira de tecnologia que transforma problemas de negócio em soluções digitais.',
  // TODO: Add real contact info when available
  // email: 'contato@gear.com.br',
  // phone: '',
  // address: '',
  // cnpj: '',
  // instagram: '',
  // linkedin: '',
};
