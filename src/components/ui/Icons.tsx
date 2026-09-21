import type { SVGProps } from "react";

/**
 * The house line-art car used wherever a listing has no photography yet.
 * Stroke colour is inherited, so it can sit on the dark hero panel and on
 * the sand card surface without a second asset.
 */
export function CarLineArt({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 12 440 148"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {/* road */}
      <path d="M6 118h428" opacity="0.55" />
      {/* silhouette */}
      <path d="M26 118V92l16-14 90-10 54-38h106l66 46 48 6 6 36" />
      {/* beltline */}
      <path d="M132 68h224" />
      {/* glasshouse */}
      <path d="M146 68l46-34h44v34z" />
      <path d="M250 34h38l48 34h-86z" />
      {/* wheels */}
      <circle cx="122" cy="118" r="26" />
      <circle cx="350" cy="118" r="26" />
      <circle cx="122" cy="118" r="9" fill="currentColor" stroke="none" opacity="0.32" />
      <circle cx="350" cy="118" r="9" fill="currentColor" stroke="none" opacity="0.32" />
    </svg>
  );
}

/**
 * Social glyphs. lucide-react dropped brand icons, so these are drawn here to
 * keep the footer on one icon language.
 */
export function InstagramIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M15.5 3h-2.2A4.3 4.3 0 0 0 9 7.3V10H6.5v3.4H9V21h3.4v-7.6h2.6l.5-3.4h-3.1V7.7c0-.7.4-1.1 1.1-1.1h2V3Z" />
    </svg>
  );
}

export function YouTubeIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="m10.3 9.4 4.6 2.6-4.6 2.6V9.4Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** WhatsApp glyph — lucide ships no brand icons. */
export function WhatsAppIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.86 9.86 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.67c2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.42 5.83c0 4.54-3.7 8.24-8.25 8.24a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.38c0-4.54 3.7-8.25 8.24-8.25Zm-3.1 4.1c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.05.14-1.16-.06-.1-.22-.16-.46-.28-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.03-.38-1.96-1.21-.72-.65-1.21-1.45-1.35-1.69-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.31-.74-1.79-.19-.47-.39-.4-.53-.41-.14-.01-.3-.01-.46-.01Z" />
    </svg>
  );
}
