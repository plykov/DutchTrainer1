"use client";

import Link from "next/link";
import { useT } from "@/lib/i18n";
import { MODULE_LINKS } from "@/lib/moduleLinks";

// Shown on a session's completion screen so there's always a next step —
// without it, finishing a session was a dead end unless the learner knew
// to use the nav themselves.
export default function NextExercise({ currentHref }: { currentHref: string }) {
  const t = useT();
  const links = MODULE_LINKS.filter((m) => m.href !== currentHref);

  return (
    <div className="mt-6 pt-6 border-t border-zinc-200 dark:border-zinc-800 text-left">
      <p className="text-sm font-medium mb-3">{t("next_choose_title")}</p>
      <div className="flex flex-wrap gap-2">
        {links.map((m) => (
          <Link
            key={m.href}
            href={m.href}
            className="rounded-md border border-zinc-300 dark:border-zinc-700 px-3 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
          >
            {t(m.labelKey)}
          </Link>
        ))}
      </div>
    </div>
  );
}
