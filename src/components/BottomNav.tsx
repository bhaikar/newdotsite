"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type NavItem = { label: string; href: string };

type Props = {
  items: NavItem[];
  logoText?: string;
  logoMark?: string;
  locale?: "es" | "en";
  onLocaleChange?: (locale: "es" | "en") => void;
};

export default function BottomNav({
  items,
  logoText = "Dev",
  logoMark = "Ops",
  locale = "es",
  onLocaleChange,
}: Props) {
  const pathname = usePathname();

  return (
    <div className="navbar">
      <Link className="navbar__logo" href="/" aria-label={`${logoText}${logoMark} — home`}>
        <span className="navbar__logoWord">{logoText}</span>
        <span className="navbar__logoMark" aria-hidden="true">
          <svg viewBox="0 0 44 40" width="34" height="31">
            <ellipse
              cx="22"
              cy="20"
              rx="21"
              ry="16"
              fill="currentColor"
              opacity="0.9"
            />
            <text
              x="22"
              y="27"
              textAnchor="middle"
              fontSize="15"
              fontWeight="700"
              fill="#03060f"
              fontFamily="inherit"
            >
              {logoMark}
            </text>
          </svg>
        </span>
      </Link>

      <nav className="navbar__nav" aria-label="Primary">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={
              "navbar__link" +
              (pathname === item.href ? " navbar__link--active" : "")
            }
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {onLocaleChange && (
        <div className="navbar__lang">
          {(["es", "en"] as const).map((code, i) => (
            <span key={code}>
              {i > 0 && <span className="navbar__langSep">/</span>}
              <button
                type="button"
                onClick={() => onLocaleChange(code)}
                className={
                  "navbar__langBtn" +
                  (locale === code ? " navbar__langBtn--active" : "")
                }
                aria-pressed={locale === code}
              >
                {code.toUpperCase()}
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
