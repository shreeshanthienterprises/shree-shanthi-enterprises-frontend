import { PRIMARY_PHONE, SITE, WHATSAPP_MESSAGE, whatsappLink } from "@/config/site";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const DISMISSED_KEY = "sse-wa-greeting-dismissed";
const GREETING_DELAY_MS = 4000;

// sessionStorage can throw (private mode, blocked storage) - never let that break the page.
const wasDismissed = () => {
  try {
    return sessionStorage.getItem(DISMISSED_KEY) === "1";
  } catch {
    return false;
  }
};
const rememberDismissed = () => {
  try {
    sessionStorage.setItem(DISMISSED_KEY, "1");
  } catch {
    /* ignore */
  }
};

// Floating WhatsApp chat button for the primary number only. Opens WhatsApp with a
// pre-filled message; shows a dismissible greeting once per browser session.
const WhatsAppFloat = () => {
  const [greeting, setGreeting] = useState(false);
  const href = whatsappLink(WHATSAPP_MESSAGE);

  useEffect(() => {
    if (wasDismissed()) return;
    const timer = setTimeout(() => setGreeting(true), GREETING_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setGreeting(false);
    rememberDismissed();
  };

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {greeting && (
          <motion.div
            role="dialog"
            aria-label="Chat on WhatsApp"
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="relative w-[min(18rem,calc(100vw-2rem))] rounded-2xl bg-white p-4 pr-10 shadow-2xl ring-1 ring-black/5"
          >
            <button
              type="button"
              onClick={dismiss}
              aria-label="Close chat prompt"
              className="absolute right-1 top-1 flex h-11 w-11 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
            <p className="text-sm font-semibold text-gray-900">{SITE.name}</p>
            <p className="mt-1 text-sm text-gray-600">
              Hi! 👋 Need security, cleaning or pest control? Chat with us on WhatsApp.
            </p>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={dismiss}
              className="mt-3 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#25D366] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#1ebe5a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
            >
              <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
              Start chat
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with ${SITE.name} on WhatsApp (${PRIMARY_PHONE.display})`}
        onClick={dismiss}
        className="group relative flex h-14 items-center overflow-hidden rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:bg-[#1ebe5a] hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-300"
      >
        {/* Label slides out on hover / keyboard focus (hidden on touch-only widths to stay compact) */}
        <span className="hidden max-w-0 whitespace-nowrap pl-0 text-sm font-semibold opacity-0 transition-all duration-300 group-hover:max-w-[10rem] group-hover:pl-5 group-hover:opacity-100 group-focus-visible:max-w-[10rem] group-focus-visible:pl-5 group-focus-visible:opacity-100 sm:inline">
          Chat with us
        </span>
        <span className="relative flex h-14 w-14 shrink-0 items-center justify-center">
          <span className="absolute inline-flex h-9 w-9 animate-ping rounded-full bg-white/40 motion-reduce:hidden" aria-hidden="true" />
          <FaWhatsapp className="relative h-8 w-8" aria-hidden="true" />
        </span>
      </a>
    </div>
  );
};

export default WhatsAppFloat;
