"use client";

import { useState } from "react";
import { useRequireProfile } from "@/lib/useRequireProfile";
import { useT } from "@/lib/i18n";
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
  const t = useT();
  const [item, setItem] = useState<ShortWriteItem | undefined>(() => randomItem());

  if (!ready) return null;
  if (!item) return <p>{t("writing_empty")}</p>;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-1 gap-4">
        <h1 className="text-2xl font-semibold">{t("nav_writing")}</h1>
        <button
          onClick={() => setItem((current) => randomItem(current?.id))}
          className="text-sm text-blue-600 underline shrink-0"
        >
          {t("writing_other_topic", { n: WRITE_ITEMS.length })}
        </button>
      </div>
      <p className="text-zinc-500 mb-6">{t("writing_intro")}</p>
      <WritingTask key={item.id} item={item} />
    </div>
  );
}
