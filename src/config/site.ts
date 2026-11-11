import type { IconType } from "react-icons";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// Single source of truth for business contact details.
// Update values here only - pages, footer and metadata read from this file.
// (index.html JSON-LD is static HTML, so keep it in sync by hand: see the
// "telephone", "contactPoint", "sameAs" and "address" fields.)

export interface SitePhone {
  label: string;
  /** Human-readable form shown on the page. */
  display: string;
  /** E.164 number used for tel: links. */
  tel: string;
  /** Whether this number is reachable on WhatsApp. */
  whatsapp?: boolean;
}

export interface SiteSocial {
  name: string;
  url: string;
  icon: IconType;
}

export const SITE = {
  name: "Shree Shanthi Enterprises",
  url: "https://shreeshanthienterprises.com",
  email: "shreeshanthienterprises@gmail.com",
  phones: [
    { label: "Primary", display: "+91 73300 09993", tel: "+917330009993", whatsapp: true },
    // Call only - not on WhatsApp unless the owner says so.
    { label: "Secondary", display: "+91 98889 33397", tel: "+919888933397" },
  ] as SitePhone[],
  address: {
    street: "Rajendra Nagar",
    locality: "Hyderabad",
    region: "Telangana",
    postalCode: "500005",
    country: "IN",
    line1: "Rajendra Nagar, Hyderabad",
    line2: "Ranga Reddy 500005",
  },
  socials: [
    // TODO: this is a Facebook share/redirect link. Replace it with the
    // canonical page URL (https://www.facebook.com/<page>) once known.
    { name: "Facebook", url: "https://www.facebook.com/share/1DGomGCj2k/", icon: FaFacebookF },
    { name: "Instagram", url: "https://www.instagram.com/shreeshanthienterprises/", icon: FaInstagram },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/shree-shanthi-enterprises-security-services/",
      icon: FaLinkedinIn,
    },
  ] as SiteSocial[],
} as const;

export const PRIMARY_PHONE = SITE.phones[0];

export const telHref = (phone: SitePhone) => `tel:${phone.tel}`;

/** wa.me link for the first WhatsApp-enabled number (digits only, no "+"). */
const whatsappPhone = SITE.phones.find((p) => p.whatsapp) ?? PRIMARY_PHONE;
export const WHATSAPP_URL = `https://wa.me/${whatsappPhone.tel.replace(/\D/g, "")}`;
export const WHATSAPP_LABEL = `WhatsApp ${whatsappPhone.display}`;

/** Pre-filled first message for the floating WhatsApp chat button. */
export const WHATSAPP_MESSAGE = `Hi ${SITE.name}, I'd like to enquire about your services.`;

/** wa.me link with an optional pre-filled message. */
export const whatsappLink = (text?: string) =>
  text ? `${WHATSAPP_URL}?text=${encodeURIComponent(text)}` : WHATSAPP_URL;
