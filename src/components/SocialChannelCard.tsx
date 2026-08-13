import type { ReactNode } from "react";

interface SocialChannelCardProps {
  href: string;
  label: string;
  handle: string;
  meta: string;
  icon: ReactNode;
  iconBg: string;
  accent: string;
}

const SocialChannelCard = ({
  href,
  label,
  handle,
  meta,
  icon,
  iconBg,
  accent,
}: SocialChannelCardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center gap-4 rounded-2xl border border-slate-700/50 bg-slate-900/60 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-600 hover:bg-slate-800/70 sm:p-5"
      style={{ ["--card-accent" as string]: accent }}
    >
      {/* Icon */}
      <span
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
        style={{ background: iconBg }}
      >
        {icon}
      </span>

      {/* Content */}
      <span className="min-w-0 flex-1">
        {/* Label */}
        <span className="block truncate text-sm font-semibold text-slate-100">
          {label}
        </span>

        {/* Handle */}
        <span className="mt-1 block truncate font-mono text-xs text-slate-400">
          {handle}
        </span>

        {/* Meta */}
        <span className="mt-1 block truncate font-mono text-[11px] uppercase tracking-wider text-slate-500 transition-colors duration-300 group-hover:text-[var(--card-accent)]">
          {meta}
        </span>
      </span>

      {/* Arrow */}
      <svg
        className="h-4 w-4 shrink-0 text-slate-600 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--card-accent)]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 17 17 7" />
        <path d="M8 7h9v9" />
      </svg>

      {/* Hover border */}
      <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 shadow-[0_0_0_1px_var(--card-accent)] transition-opacity duration-300 group-hover:opacity-40" />
    </a>
  );
};

export default SocialChannelCard;