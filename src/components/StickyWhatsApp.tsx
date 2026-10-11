import { trackWhatsAppClick } from "@/lib/analytics";

export const PREFILLED_WA_MESSAGE =
  "Hi EventTribe, I would like to check availability and technical specs for an upcoming event in Hyderabad.";

export const WA_DIRECT_URL = `https://wa.me/919888102777?text=${encodeURIComponent(PREFILLED_WA_MESSAGE)}`;

export function StickyWhatsApp() {
  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 print:hidden"
    >
      <a
        href={WA_DIRECT_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick("sticky_floater")}
        className="group relative flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-[#04210f] shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-[#20bd5a] hover:shadow-[0_10px_30px_rgba(37,211,102,0.4)] focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
        </span>
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 fill-current"
          aria-hidden="true"
        >
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.45 0-2.87-.38-4.12-1.11l-.3-.17-3.08.81.82-3-.19-.31a8.2 8.2 0 0 1-1.25-4.46c0-4.54 3.7-8.24 8.24-8.24m4.53 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.3" />
        </svg>
        <span className="hidden sm:inline">Check Technical Availability</span>
      </a>
    </aside>
  );
}
