"use client";

import { useRequireProfile } from "@/lib/useRequireProfile";
import InteractionSession from "@/components/InteractionSession";

export default function InteractionPage() {
  const { ready } = useRequireProfile();
  if (!ready) return null;

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold mb-1">Взаимодействие</h1>
      <p className="text-zinc-500 mb-6">
        Диалоговый навык (interaction) отличается от монологического говорения: нужно уместно ответить внутри
        живого обмена репликами — попросить, уточнить, отказать, согласиться. Выбирайте самый естественный ответ
        для ситуации.
      </p>
      <InteractionSession />
    </div>
  );
}
