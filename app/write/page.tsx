"use client";

import { useState } from "react";
import { useRequireProfile } from "@/lib/useRequireProfile";
import { PRACTICE_ITEMS } from "@/lib/content/items";
import { ShortWriteItem } from "@/lib/types";
import WritingTask from "@/components/WritingTask";

const WRITE_ITEMS = PRACTICE_ITEMS.filter((i) => i.taskType === "short_write") as ShortWriteItem[];

function randomItem(excludeId?: string): ShortWriteItem | undefined {
  const pool = excludeId ? WRITE_ITEMS.filter((i) => i.id !== excludeId) : WRITE_ITEMS;
  const source = pool.length > 0 ? pool : WRITE_ITEMS;
  return source[Math.floor(Math.random() * source.length)];
}

export default function WritePage() {
  const { ready } = useRequireProfile();
  const [item, setItem] = useState<ShortWriteItem | undefined>(() => randomItem());

  if (!ready) return null;
  if (!item) return <p>Geen schrijftaken beschikbaar.</p>;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-1 gap-4">
        <h1 className="text-2xl font-semibold">Schrijven</h1>
        <button
          onClick={() => setItem((current) => randomItem(current?.id))}
          className="text-sm text-blue-600 underline shrink-0"
        >
          Ander onderwerp ({WRITE_ITEMS.length} beschikbaar)
        </button>
      </div>
      <p className="text-zinc-500 mb-6">
        Сначала проверяется, выполнено ли задание — грамматика оценивается только после этого (правило адекватности).
      </p>
      <WritingTask key={item.id} item={item} />
    </div>
  );
}
