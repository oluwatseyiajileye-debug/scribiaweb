import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink, genericWhatsAppMessage } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  return (
    <a
      href={buildWhatsAppLink(genericWhatsAppMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with SCRIBIA on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] p-4 text-white shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5 hover:pr-5"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-60" />
      <MessageCircle className="h-6 w-6 fill-white text-[#25D366]" />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-xs sm:inline-block">
        Chat on WhatsApp
      </span>
    </a>
  );
}
