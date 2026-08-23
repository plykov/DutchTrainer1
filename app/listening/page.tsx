"use client";

import { useRequireProfile } from "@/lib/useRequireProfile";
import { useT } from "@/lib/i18n";
import ListeningSession from "@/components/ListeningSession";

export default function ListeningPage() {
  const { ready } = useRequireProfile();
  const t = useT();
  if (!ready) return null;

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-1">{t("nav_listening")}</h1>
      <p className="text-zinc-500 mb-6">{t("listening_intro")}</p>
      <ListeningSession />
    </div>
  );
}
