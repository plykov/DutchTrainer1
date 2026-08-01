"use client";

import { useRequireProfile } from "@/lib/useRequireProfile";
import ReadingRoom from "@/components/ReadingRoom";

export default function ReadingPage() {
  const { ready } = useRequireProfile();
  if (!ready) return null;

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold mb-1">Чтение</h1>
      <p className="text-zinc-500 mb-6">
        Текст открывается для свободного чтения только при известном покрытии слов ≥95% — это правило §4, самое
        важное правило по контенту в этом приложении.
      </p>
      <ReadingRoom />
    </div>
  );
}
