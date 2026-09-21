import { site } from "@/data/site";
import { WhatsAppIcon } from "@/components/ui/Icons";

/** Persistent chat affordance, matching the reference's bottom-right bubble. */
export function WhatsAppFab() {
  return (
    <a
      href={site.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-forest text-white shadow-float transition-transform duration-200 hover:scale-105 hover:bg-forest-700 sm:bottom-7 sm:right-7 sm:h-[60px] sm:w-[60px]"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
