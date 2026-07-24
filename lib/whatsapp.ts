import { siteConfig } from "@/data/site";

export function buildWhatsAppLink(message: string, number: string = siteConfig.whatsappNumber) {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${number}?text=${encoded}`;
}

export const genericWhatsAppMessage =
  "Hello SCRIBIA Writing Services, I'd like to enquire about your services.";
