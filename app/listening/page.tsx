"use client";

import { useRequireProfile } from "@/lib/useRequireProfile";
import ListeningSession from "@/components/ListeningSession";

export default function ListeningPage() {
  const { ready } = useRequireProfile();
  if (!ready) return null;

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-1">Аудирование</h1>
      <p className="text-zinc-500 mb-6">
        Как на экзамене: сначала вопрос, затем один прогон без повтора (§7). Озвучка идёт через синтез речи браузера
        (Web Speech API) — при его отсутствии текст показывается один раз вместо звука.
      </p>
      <ListeningSession />
    </div>
  );
}
