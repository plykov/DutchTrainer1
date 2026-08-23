"use client";

import { useRequireProfile } from "@/lib/useRequireProfile";
import { useT } from "@/lib/i18n";
import ReadingRoom from "@/components/ReadingRoom";

export default function ReadingPage() {
  const { ready } = useRequireProfile();
  const t = useT();
  if (!ready) return null;

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold mb-1">{t("nav_reading")}</h1>
      <p className="text-zinc-500 mb-6">{t("reading_intro")}</p>
      <ReadingRoom />
    </div>
  );
}
