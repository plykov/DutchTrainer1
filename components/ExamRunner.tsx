"use client";

import { useEffect, useMemo, useState } from "react";
import { McItem } from "@/lib/types";
import { useT } from "@/lib/i18n";
import { shuffleOptions } from "@/lib/shuffle";

// §7 — exam mode disables everything: single pass, no backtracking, no
// feedback until the run ends, hard countdown. This runs whatever MC item
// set it's given; the caller decides what "exam" that represents.
export default function ExamRunner({
  items: rawItems,
  onExit,
  passNote,
}: {
  items: McItem[];
  onExit: () => void;
  passNote?: string;
}) {
  const t = useT();
  // Shuffle once per run (not per render) so the correct answer's position
  // isn't memorizable/predictable from how the content was authored.
  const items = useMemo(
    () => rawItems.map((it) => ({ ...it, ...shuffleOptions(it.options, it.correctIndex) })),
    [rawItems]
  );
  const totalSeconds = useMemo(() => items.reduce((sum, i) => sum + (i.timeLimitS ?? 60), 0), [items]);
  const [secondsLeft, setSecondsLeft] = useState(totalSeconds);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(() => items.map(() => null));
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (finished) return;
    const interval = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          setFinished(true);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [finished]);

  const item = items[index];

  function select(optIndex: number) {
    setAnswers((a) => {
      const next = [...a];
      next[index] = optIndex;
      return next;
    });
  }

  function next() {
    if (index + 1 >= items.length) {
      setFinished(true);
    } else {
      setIndex((i) => i + 1);
    }
  }

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  if (finished) {
    const correct = answers.filter((a, i) => a === items[i].correctIndex).length;
    return (
      <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-6 space-y-4">
        <h3 className="text-lg font-medium">{t("exam_result_title")}</h3>
        <p className="text-2xl font-semibold">
          {correct} / {items.length}
        </p>
        {passNote && <p className="text-sm text-zinc-500">{passNote}</p>}
        <div className="space-y-2">
          {items.map((it, i) => (
            <div key={it.id} className="rounded-md border border-zinc-200 dark:border-zinc-800 p-3 text-sm">
              <p className="font-medium">{it.prompt}</p>
              <p className={answers[i] === it.correctIndex ? "text-emerald-600" : "text-red-600"}>
                {t("your_answer")}: {answers[i] !== null ? it.options[answers[i]!] : t("exam_no_answer")} ·{" "}
                {t("session_correct")}: {it.options[it.correctIndex]}
              </p>
              <p className="text-zinc-500 mt-1">{it.explanationRu}</p>
            </div>
          ))}
        </div>
        <button onClick={onExit} className="rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium">
          {t("action_return")}
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-6">
      <div className="flex items-center justify-between text-sm mb-4">
        <span className="text-zinc-500">
          {index + 1} / {items.length}
        </span>
        <span className="font-mono tabular-nums px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900">
          {minutes}:{seconds.toString().padStart(2, "0")}
        </span>
      </div>

      <fieldset>
        <legend className="text-lg mb-4 whitespace-pre-wrap">{item.prompt}</legend>
        <div className="space-y-2">
          {item.options.map((opt, i) => (
            <label
              key={i}
              className={`flex items-center gap-2 rounded-md border p-3 text-sm cursor-pointer ${
                answers[index] === i ? "border-blue-600 bg-blue-50 dark:bg-blue-950" : "border-zinc-300 dark:border-zinc-700"
              }`}
            >
              <input type="radio" name="exam-mc" checked={answers[index] === i} onChange={() => select(i)} />
              {opt}
            </label>
          ))}
        </div>
      </fieldset>

      <p className="text-xs text-zinc-400 mt-4">{t("exam_no_backtrack")}</p>

      <div className="mt-6 flex justify-end">
        <button onClick={next} className="rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium">
          {index + 1 >= items.length ? t("action_finish") : t("action_next")}
        </button>
      </div>
    </div>
  );
}
