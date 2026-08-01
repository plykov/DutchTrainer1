"use client";

import { useRequireProfile } from "@/lib/useRequireProfile";
import { PRACTICE_ITEMS } from "@/lib/content/items";
import { ShortWriteItem } from "@/lib/types";
import WritingTask from "@/components/WritingTask";

export default function WritePage() {
  const { ready } = useRequireProfile();
  if (!ready) return null;

  const item = PRACTICE_ITEMS.find((i) => i.taskType === "short_write") as ShortWriteItem | undefined;
  if (!item) return <p>Geen schrijftaken beschikbaar.</p>;

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold mb-1">Schrijven</h1>
      <p className="text-zinc-500 mb-6">
        Сначала проверяется, выполнено ли задание — грамматика оценивается только после этого (правило адекватности).
      </p>
      <WritingTask item={item} />
    </div>
  );
}
