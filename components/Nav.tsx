"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppStore } from "@/lib/store";
import { useT } from "@/lib/i18n";
import LanguageToggle from "@/components/LanguageToggle";

const LINKS = [
  { href: "/dashboard", nl: "Overzicht" },
  { href: "/practice", nl: "Oefenen" },
  { href: "/vocab", nl: "Woordenschat" },
  { href: "/reading", nl: "Lezen" },
  { href: "/listening", nl: "Luisteren" },
  { href: "/write", nl: "Schrijven" },
  { href: "/speaking", nl: "Spreken" },
  { href: "/interaction", nl: "Interactie" },
  { href: "/exam", nl: "Examensimulatie" },
];

export default function Nav() {
  const pathname = usePathname();
  const profile = useAppStore((s) => s.profile);
  const streakDays = useAppStore((s) => s.streakDays);
  const t = useT();

  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur sticky top-0 z-40">
      <nav
        aria-label="Hoofdnavigatie"
        className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4"
      >
        <Link href="/" className="font-semibold tracking-tight shrink-0">
          NL·A2/B1
        </Link>
        {profile && (
          <ul className="flex items-center gap-1 text-sm overflow-x-auto">
            {LINKS.map((l) => {
              const active = pathname?.startsWith(l.href);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={active ? "page" : undefined}
                    className={`px-3 py-2 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 ${
                      active
                        ? "bg-blue-600 text-white"
                        : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                    }`}
                  >
                    {l.nl}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
        <div className="flex items-center gap-3 shrink-0">
          {profile && (
            <div className="text-sm text-zinc-500 flex items-center gap-1" aria-live="polite">
              <span aria-hidden="true">🔥</span>
              <span>{streakDays}</span>
            </div>
          )}
          <LanguageToggle />
          {profile && (
            <Link
              href="/settings"
              aria-label={t("nav_settings")}
              aria-current={pathname?.startsWith("/settings") ? "page" : undefined}
              className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 rounded-md p-1"
            >
              ⚙️
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
