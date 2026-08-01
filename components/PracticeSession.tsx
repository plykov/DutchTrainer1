"use client";

import { useMemo, useState } from "react";
import { useAppStore } from "@/lib/store";
import { buildQueue, QueueEntry } from "@/lib/queue";
import { Grade } from "@/lib/fsrs";
import { getErrorEntry } from "@/lib/errorTaxonomy";
import { ClozeItem, McItem, SentenceTransformItem } from "@/lib/types";

function normalize(s: string): string {
  return s.trim().toLowerCase().replace(/\s+/g, " ");
}

export default function PracticeSession() {
  const grammarProgress = useAppStore((s) => s.grammarProgress);
  const review = useAppStore((s) => s.review);

  const queue = useMemo(() => buildQueue(grammarProgress, { limit: 12 }), [grammarProgress]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [typed, setTyped] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [startedAt, setStartedAt] = useState(() => Date.now());
  const [sessionDone, setSessionDone] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const entry: QueueEntry | undefined = queue[index];

  if (!entry || sessionDone) {
    return (
      <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-8 text-center">
        <p className="text-lg font-medium mb-2">Сессия завершена!</p>
        <p className="text-zinc-500">
          Правильно: {correctCount} / {index}
        </p>
      </div>
    );
  }

  const item = entry.item;
  const mode = entry.mode;
  const stage = item.grammarTarget ? grammarProgress[item.grammarTarget]?.stage ?? "blocked" : null;

  function isCorrect(): boolean {
    if (item.taskType === "mc") return selected === (item as McItem).correctIndex;
    if (item.taskType === "cloze") {
      const c = item as ClozeItem;
      const variants = [c.answer, ...(c.acceptableVariants ?? [])].map(normalize);
      return variants.includes(normalize(typed));
    }
    if (item.taskType === "sentence_transform") {
      return normalize(typed) === normalize((item as SentenceTransformItem).answer);
    }
    return false;
  }

  function grade(g: Grade) {
    const latencyMs = Date.now() - startedAt;
    review({ itemId: item.id, mode }, g, latencyMs);
    if (g !== "again") setCorrectCount((c) => c + 1);

    if (index + 1 >= queue.length) {
      setSessionDone(true);
    } else {
      setIndex((i) => i + 1);
      setSelected(null);
      setTyped("");
      setRevealed(false);
      setStartedAt(Date.now());
    }
  }

  function reveal() {
    setRevealed(true);
  }

  const correct = revealed ? isCorrect() : null;
  const errorEntry = item.errorCodes[0] ? getErrorEntry(item.errorCodes[0]) : undefined;

  return (
    <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-6">
      <div className="flex items-center justify-between text-xs text-zinc-500 mb-4">
        <span>
          {index + 1} / {queue.length}
        </span>
        {stage && (
          <span
            className={`px-2 py-0.5 rounded-full ${
              stage === "blocked" ? "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300" : "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300"
            }`}
          >
            {stage === "blocked" ? "закрепление" : "смешанная практика"}
          </span>
        )}
      </div>

      {item.taskType === "mc" && (
        <McQuestion item={item as McItem} selected={selected} setSelected={setSelected} revealed={revealed} />
      )}
      {item.taskType === "cloze" && (
        <ClozeQuestion item={item as ClozeItem} typed={typed} setTyped={setTyped} revealed={revealed} />
      )}
      {item.taskType === "sentence_transform" && (
        <TransformQuestion item={item as SentenceTransformItem} typed={typed} setTyped={setTyped} revealed={revealed} />
      )}

      {revealed && (
        <div
          className={`mt-4 rounded-md p-4 text-sm ${
            correct
              ? "bg-emerald-50 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200"
              : "bg-red-50 text-red-900 dark:bg-red-950 dark:text-red-200"
          }`}
        >
          <p className="font-medium mb-1">{correct ? "Правильно!" : "Не совсем."}</p>
          <p>{"explanationRu" in item ? item.explanationRu : ""}</p>
          {errorEntry?.l1Note && (
            <p className="mt-2 text-xs opacity-80">
              <strong>Код ошибки {errorEntry.code}:</strong> {errorEntry.l1Note}
            </p>
          )}
        </div>
      )}

      <div className="mt-6 flex justify-end gap-2">
        {!revealed ? (
          <button
            onClick={reveal}
            disabled={item.taskType === "mc" ? selected === null : typed.trim() === ""}
            className="rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium disabled:opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
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

function McQuestion({
  item,
  selected,
  setSelected,
  revealed,
}: {
  item: McItem;
  selected: number | null;
  setSelected: (i: number) => void;
  revealed: boolean;
}) {
  return (
    <fieldset>
      <legend className="text-lg mb-4">{item.prompt}</legend>
      <div className="space-y-2">
        {item.options.map((opt, i) => (
          <label
            key={i}
            className={`flex items-center gap-2 rounded-md border p-3 text-sm cursor-pointer ${
              selected === i ? "border-blue-600 bg-blue-50 dark:bg-blue-950" : "border-zinc-300 dark:border-zinc-700"
            } ${revealed && i === item.correctIndex ? "border-emerald-600" : ""}`}
          >
            <input type="radio" name="mc" checked={selected === i} onChange={() => setSelected(i)} disabled={revealed} />
            {opt}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function ClozeQuestion({
  item,
  typed,
  setTyped,
  revealed,
}: {
  item: ClozeItem;
  typed: string;
  setTyped: (v: string) => void;
  revealed: boolean;
}) {
  return (
    <div>
      <p className="text-lg mb-4">{item.textWithBlank}</p>
      <input
        value={typed}
        onChange={(e) => setTyped(e.target.value)}
        disabled={revealed}
        className="w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2"
        placeholder="Ваш ответ"
      />
      {revealed && <p className="mt-2 text-sm text-zinc-500">Правильный ответ: {item.answer}</p>}
    </div>
  );
}

function TransformQuestion({
  item,
  typed,
  setTyped,
  revealed,
}: {
  item: SentenceTransformItem;
  typed: string;
  setTyped: (v: string) => void;
  revealed: boolean;
}) {
  return (
    <div>
      <p className="text-sm text-zinc-500 mb-1">{item.prompt}</p>
      <p className="text-lg mb-4">{item.source}</p>
      <input
        value={typed}
        onChange={(e) => setTyped(e.target.value)}
        disabled={revealed}
        className="w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2"
        placeholder="Ваш ответ"
      />
      {revealed && <p className="mt-2 text-sm text-zinc-500">Правильный ответ: {item.answer}</p>}
    </div>
  );
}
