import { SITE } from "@/config/site";
import { memo } from "react";

// Brand-coloured hover states, matching the footer's existing icon style.
const HOVER: Record<string, string> = {
  Facebook: "hover:text-blue-600 hover:bg-blue-50",
  Instagram: "hover:text-pink-500 hover:bg-pink-50",
  LinkedIn: "hover:text-sky-700 hover:bg-sky-50",
};

const SocialLinks = memo(({ className = "" }: { className?: string }) => (
  <ul className={`flex flex-wrap items-center gap-3 ${className}`} aria-label="Social media">
    {SITE.socials.map(({ name, url, icon: Icon }) => (
      <li key={name}>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${SITE.name} on ${name}`}
          className={`flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-all duration-300 hover:scale-110 hover:border-transparent hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${HOVER[name] ?? "hover:bg-gray-50"}`}
        >
          <Icon className="text-lg" aria-hidden="true" />
        </a>
      </li>
    ))}
  </ul>
));

SocialLinks.displayName = "SocialLinks";

export default SocialLinks;
