"use client";

import { useRequireProfile } from "@/lib/useRequireProfile";
import VocabSession from "@/components/VocabSession";

export default function VocabPage() {
  const { ready } = useRequireProfile();
  if (!ready) return null;

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-1">Словарь</h1>
      <p className="text-zinc-500 mb-6">
        Каждое существительное хранится вместе с артиклем, множественным числом и словосочетаниями — никогда как
        отдельный перевод.
      </p>
      <VocabSession />
    </div>
  );
}
