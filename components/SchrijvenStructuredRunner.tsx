"use client";

import { useEffect, useState } from "react";
import { ZINSTAKEN_ITEMS } from "@/lib/content/zinstaken";
import { DEELSCHRIJFTAKEN_ITEMS } from "@/lib/content/deelschrijftaken";
import { WRITING_EXAM_ITEMS } from "@/lib/content/writingExamItems";
import WritingTask from "@/components/WritingTask";

// §7 — Schrijven's real structure: 8 zinstaken + 2 deelschrijftaken + 2
// korte schrijftaken, all offered on one screen with the candidate
// choosing their own order, under a single 100-minute clock. This runner
// sequences the three task types (order fixed here for simplicity) under
// one shared countdown that force-ends the session at zero, same as a real
// exam auto-submitting.
const KORTE_SCHRIJFTAKEN = WRITING_EXAM_ITEMS.slice(0, 2);
const TOTAL_SECONDS = ZINSTAKEN_ITEMS.length * 60 + DEELSCHRIJFTAKEN_ITEMS.length * 300 + KORTE_SCHRIJFTAKEN.length * 480;

type Stage = "zinstaken" | "deelschrijftaken" | "kort" | "result";

export default function SchrijvenStructuredRunner({ onExit }: { onExit: () => void }) {
  const [stage, setStage] = useState<Stage>("zinstaken");
  const [zinIndex, setZinIndex] = useState(0);
  const [zinAnswers, setZinAnswers] = useState<string[]>(() => ZINSTAKEN_ITEMS.map(() => ""));
  const [zinRevealed, setZinRevealed] = useState(false);

  const [deelIndex, setDeelIndex] = useState(0);
  const [deelAnswers, setDeelAnswers] = useState<Record<string, string>>({});
  const [deelRevealed, setDeelRevealed] = useState(false);

  const [kortIndex, setKortIndex] = useState(0);

  const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS);
  const [ended, setEnded] = useState(false);

  useEffect(() => {
    if (ended) return;
    const t = setTimeout(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          setEnded(true);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearTimeout(t);
  }, [ended, secondsLeft]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  if (ended || stage === "result") {
    return (
      <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-6 space-y-4">
        <h3 className="text-lg font-medium">
          {ended ? "Время вышло — сессия завершена автоматически" : "Schrijven завершён"}
        </h3>
        <p className="text-sm text-zinc-500">
          Демо структуры реального экзамена: 8 zinstaken + 2 deelschrijftaken + 2 korte schrijftaken, единый таймер
          100 минут (здесь — масштабированная демо-версия). Порядок заданий в реальном экзамене выбираете вы сами.
        </p>
        <button onClick={onExit} className="rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium">
          Вернуться
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-sm">
        <span className="text-zinc-500">
          {stage === "zinstaken" && `Zinstaken ${zinIndex + 1} / ${ZINSTAKEN_ITEMS.length}`}
          {stage === "deelschrijftaken" && `Deelschrijftaak ${deelIndex + 1} / ${DEELSCHRIJFTAKEN_ITEMS.length}`}
          {stage === "kort" && `Korte schrijftaak ${kortIndex + 1} / ${KORTE_SCHRIJFTAKEN.length}`}
        </span>
        <span className="font-mono tabular-nums px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900">
          {minutes}:{seconds.toString().padStart(2, "0")}
        </span>
      </div>

      {stage === "zinstaken" && (
        <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-6 space-y-4">
          <p className="text-lg">{ZINSTAKEN_ITEMS[zinIndex].prompt}</p>
          <input
            value={zinAnswers[zinIndex]}
            onChange={(e) =>
              setZinAnswers((a) => {
                const next = [...a];
                next[zinIndex] = e.target.value;
                return next;
              })
            }
            disabled={zinRevealed}
            className="w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2"
          />
          {zinRevealed && (
            <div className="rounded-md bg-zinc-100 dark:bg-zinc-900 p-3 text-sm space-y-1">
              <p>
                <strong>Пример ответа:</strong> {ZINSTAKEN_ITEMS[zinIndex].sampleAnswer}
              </p>
              <p className="text-zinc-500">{ZINSTAKEN_ITEMS[zinIndex].explanationRu}</p>
            </div>
          )}
          <div className="flex justify-end gap-2">
            {!zinRevealed ? (
              <button
                onClick={() => setZinRevealed(true)}
                disabled={!zinAnswers[zinIndex].trim()}
                className="rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium disabled:opacity-40"
              >
                Показать пример
              </button>
            ) : (
              <button
                onClick={() => {
                  setZinRevealed(false);
                  if (zinIndex + 1 >= ZINSTAKEN_ITEMS.length) setStage("deelschrijftaken");
                  else setZinIndex((i) => i + 1);
                }}
                className="rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium"
              >
                Далее
              </button>
            )}
          </div>
        </div>
      )}

      {stage === "deelschrijftaken" && (
        <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-6 space-y-4">
          <p className="text-sm text-zinc-500">{DEELSCHRIJFTAKEN_ITEMS[deelIndex].instructionRu}</p>
          <p className="text-lg">{DEELSCHRIJFTAKEN_ITEMS[deelIndex].taskPrompt}</p>
          <div className="space-y-3">
            {DEELSCHRIJFTAKEN_ITEMS[deelIndex].fields.map((f) => (
              <div key={f.id}>
                <label className="text-sm text-zinc-500 block mb-1">{f.label}</label>
                <input
                  value={deelAnswers[f.id] ?? ""}
                  onChange={(e) => setDeelAnswers((a) => ({ ...a, [f.id]: e.target.value }))}
                  disabled={deelRevealed}
                  className="w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2"
                />
                {deelRevealed && (
                  <p className="text-xs text-zinc-500 mt-1">Пример: {f.sampleAnswer}</p>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-end gap-2">
            {!deelRevealed ? (
              <button
                onClick={() => setDeelRevealed(true)}
                className="rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium"
              >
                Показать примеры
              </button>
            ) : (
              <button
                onClick={() => {
                  setDeelRevealed(false);
                  if (deelIndex + 1 >= DEELSCHRIJFTAKEN_ITEMS.length) setStage("kort");
                  else setDeelIndex((i) => i + 1);
                }}
                className="rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium"
              >
                Далее
              </button>
            )}
          </div>
        </div>
      )}

      {stage === "kort" && (
        <div className="space-y-4">
          <WritingTask key={KORTE_SCHRIJFTAKEN[kortIndex].id} item={KORTE_SCHRIJFTAKEN[kortIndex]} />
          <div className="flex justify-end">
            <button
              onClick={() => {
                if (kortIndex + 1 >= KORTE_SCHRIJFTAKEN.length) setStage("result");
                else setKortIndex((i) => i + 1);
              }}
              className="rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium"
            >
              {kortIndex + 1 >= KORTE_SCHRIJFTAKEN.length ? "Завершить Schrijven" : "Далее"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
