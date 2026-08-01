"use client";

import { useMemo, useState } from "react";
import { useAppStore } from "@/lib/store";
import { useT } from "@/lib/i18n";
import { INTERACTION_ITEMS } from "@/lib/content/interactionItems";
import { Grade } from "@/lib/fsrs";
import { shuffleOptions } from "@/lib/shuffle";

export default function InteractionSession() {
  const review = useAppStore((s) => s.review);
  const t = useT();

  // Shuffled once per mount so the correct response's position isn't
  // memorizable/predictable.
  const items = useMemo(
    () => INTERACTION_ITEMS.map((it) => ({ ...it, ...shuffleOptions(it.options, it.correctIndex) })),
    []
  );

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [startedAt, setStartedAt] = useState(() => Date.now());
  const [correctCount, setCorrectCount] = useState(0);
  const [done, setDone] = useState(false);

  const item = items[index];
  const correct = selected === item?.correctIndex;

  if (done) {
    return (
      <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-8 text-center">
        <p className="text-lg font-medium mb-2">{t("int_all_done")}</p>
        <p className="text-zinc-500">
          {t("session_correct")}: {correctCount} / {INTERACTION_ITEMS.length}
        </p>
        <button
          onClick={() => {
            setIndex(0);
            setDone(false);
            setSelected(null);
            setRevealed(false);
            setCorrectCount(0);
            setStartedAt(Date.now());
          }}
          className="mt-4 rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium"
        >
          {t("int_restart")}
        </button>
      </div>
    );
  }

  function grade(g: Grade) {
    const latencyMs = Date.now() - startedAt;
    review({ itemId: `interaction:${item.id}`, mode: "productive" }, g, latencyMs);
    if (g !== "again") setCorrectCount((c) => c + 1);

    if (index + 1 >= INTERACTION_ITEMS.length) {
      setDone(true);
    } else {
      setIndex((i) => i + 1);
      setSelected(null);
      setRevealed(false);
      setStartedAt(Date.now());
    }
  }

  return (
    <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-6 space-y-4">
      <div className="flex items-center justify-between text-xs text-zinc-500">
        <span>
          {index + 1} / {INTERACTION_ITEMS.length}
        </span>
        <span>{item.level}</span>
      </div>

      <p className="text-sm text-zinc-500 italic">{item.situationRu}</p>

      <div className="space-y-1">
        {item.dialogue.map((line, i) => (
          <p key={i} className="text-lg">
            {line}
          </p>
        ))}
      </div>

      <fieldset>
        <legend className="text-sm text-zinc-500 mb-2">{t("int_your_answer_legend")}</legend>
        <div className="space-y-2">
          {item.options.map((opt, i) => (
            <label
              key={i}
              className={`flex items-center gap-2 rounded-md border p-3 text-sm cursor-pointer ${
                selected === i ? "border-blue-600 bg-blue-50 dark:bg-blue-950" : "border-zinc-300 dark:border-zinc-700"
              } ${revealed && i === item.correctIndex ? "border-emerald-600" : ""}`}
            >
              <input
                type="radio"
                name="interaction-mc"
                checked={selected === i}
                onChange={() => setSelected(i)}
                disabled={revealed}
              />
              {opt}
            </label>
          ))}
        </div>
      </fieldset>

      {revealed && (
        <div
          className={`rounded-md p-4 text-sm ${
            correct
              ? "bg-emerald-50 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200"
              : "bg-red-50 text-red-900 dark:bg-red-950 dark:text-red-200"
          }`}
        >
          <p className="font-medium mb-1">{correct ? t("int_appropriate") : t("int_not_ideal")}</p>
          <p>{item.explanationRu}</p>
        </div>
      )}

      <div className="flex justify-end gap-2">
        {!revealed ? (
          <button
            onClick={() => setRevealed(true)}
            disabled={selected === null}
            className="rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium disabled:opacity-40"
          >
            {t("action_check")}
          </button>
        ) : (
          <div className="flex gap-2">
            <button onClick={() => grade("again")} className="rounded-md bg-red-600 text-white px-3 py-2 text-sm">
              {t("grade_again")}
            </button>
            <button onClick={() => grade("hard")} className="rounded-md bg-amber-500 text-white px-3 py-2 text-sm">
              {t("grade_hard")}
            </button>
            <button onClick={() => grade("good")} className="rounded-md bg-emerald-600 text-white px-3 py-2 text-sm">
              {t("grade_good")}
            </button>
            <button onClick={() => grade("easy")} className="rounded-md bg-sky-600 text-white px-3 py-2 text-sm">
              {t("grade_easy")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
