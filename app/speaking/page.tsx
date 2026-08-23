"use client";

import { useRequireProfile } from "@/lib/useRequireProfile";
import { useT } from "@/lib/i18n";
import SpeakingSession from "@/components/SpeakingSession";

export default function SpeakingPage() {
  const { ready } = useRequireProfile();
  const t = useT();
  if (!ready) return null;

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-1">{t("nav_speaking")}</h1>
      <p className="text-zinc-500 mb-6">{t("speaking_intro")}</p>
      <SpeakingSession />
    </div>
  );
}
