"use client";

import { useRequireProfile } from "@/lib/useRequireProfile";
import { useT } from "@/lib/i18n";
import VocabSession from "@/components/VocabSession";

export default function VocabPage() {
  const { ready } = useRequireProfile();
  const t = useT();
  if (!ready) return null;

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-1">{t("nav_vocab")}</h1>
      <p className="text-zinc-500 mb-6">{t("vocab_intro")}</p>
      <VocabSession />
    </div>
  );
}
