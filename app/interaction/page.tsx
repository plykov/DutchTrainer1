"use client";

import { useRequireProfile } from "@/lib/useRequireProfile";
import { useT } from "@/lib/i18n";
import InteractionSession from "@/components/InteractionSession";

export default function InteractionPage() {
  const { ready } = useRequireProfile();
  const t = useT();
  if (!ready) return null;

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold mb-1">{t("nav_interaction")}</h1>
      <p className="text-zinc-500 mb-6">{t("interaction_intro")}</p>
      <InteractionSession />
    </div>
  );
}
