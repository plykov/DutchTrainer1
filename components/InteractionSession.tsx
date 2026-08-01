"use client";

import { useState } from "react";
import { useAppStore } from "@/lib/store";
import { INTERACTION_ITEMS } from "@/lib/content/interactionItems";
import { Grade } from "@/lib/fsrs";

export default function InteractionSession() {
  const review = useAppStore((s) => s.review);

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [startedAt, setStartedAt] = useState(() => Date.now());
  const [correctCount, setCorrectCount] = useState(0);
  const [done, setDone] = useState(false);

  const item = INTERACTION_ITEMS[index];
  const correct = selected === item?.correctIndex;

  if (done) {
    return (
      <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-8 text-center">
        <p className="text-lg font-medium mb-2">Все диалоги пройдены!</p>
        <p className="text-zinc-500">
          Правильно: {correctCount} / {INTERACTION_ITEMS.length}
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
          Начать заново
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
        <legend className="text-sm text-zinc-500 mb-2">Ваш ответ:</legend>
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
          <p className="font-medium mb-1">{correct ? "Уместный ответ!" : "Не самый удачный вариант."}</p>
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
            Проверить
          </button>
        ) : (
          <div className="flex gap-2">
            <button onClick={() => grade("again")} className="rounded-md bg-red-600 text-white px-3 py-2 text-sm">
              Снова
            </button>
            <button onClick={() => grade("hard")} className="rounded-md bg-amber-500 text-white px-3 py-2 text-sm">
              Трудно
            </button>
            <button onClick={() => grade("good")} className="rounded-md bg-emerald-600 text-white px-3 py-2 text-sm">
              Хорошо
            </button>
            <button onClick={() => grade("easy")} className="rounded-md bg-sky-600 text-white px-3 py-2 text-sm">
              Легко
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
