import { SITE, WHATSAPP_URL, telHref } from "@/config/site";
import { Phone } from "lucide-react";
import { memo } from "react";
import { FaWhatsapp } from "react-icons/fa";

// Lists every business phone as a tel: link. Numbers flagged `whatsapp` also get a
// WhatsApp action. Used by the contact page and the footer.
const PhoneLinks = memo(({ className = "", textClass = "text-lg" }: { className?: string; textClass?: string }) => (
  <ul className={`space-y-2 ${className}`}>
    {SITE.phones.map((phone) => (
      <li key={phone.tel} className={`flex flex-wrap items-center gap-x-4 gap-y-1 ${textClass}`}>
        <a
          href={telHref(phone)}
          aria-label={`Call ${SITE.name} (${phone.label}) on ${phone.display}`}
          className="inline-flex min-h-[44px] items-center gap-3 rounded-md text-foreground transition-colors hover:text-[#184FA1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          <Phone className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
          <span>{phone.display}</span>
        </a>
        {phone.whatsapp && (
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Chat with ${SITE.name} on WhatsApp`}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-md text-sm font-semibold text-green-700 transition-colors hover:text-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
          >
            <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
            WhatsApp
          </a>
        )}
      </li>
    ))}
  </ul>
));

PhoneLinks.displayName = "PhoneLinks";

export default PhoneLinks;
