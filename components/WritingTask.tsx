"use client";

import { useEffect, useState } from "react";
import { ShortWriteItem } from "@/lib/types";
import { checkAdequacy, detectErrors, DetectedError } from "@/lib/writingCheck";
import { getErrorEntry } from "@/lib/errorTaxonomy";
import NextExercise from "@/components/NextExercise";

type Stage = "writing" | "adequacy_fail" | "detect" | "hint" | "reveal" | "repair";

export default function WritingTask({ item, examMode = false }: { item: ShortWriteItem; examMode?: boolean }) {
  const [text, setText] = useState("");
  const [stage, setStage] = useState<Stage>("writing");
  const [missing, setMissing] = useState<string[]>([]);
  const [errors, setErrors] = useState<DetectedError[]>([]);
  const [activeErrorIdx, setActiveErrorIdx] = useState(0);
  const [repairText, setRepairText] = useState("");
  const [secondsLeft, setSecondsLeft] = useState(item.timeLimitS ?? 600);
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    if (!examMode || stage !== "writing") return;
    const t = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          setExpired(true);
          clearInterval(t);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [examMode, stage]);

  useEffect(() => {
    if (expired && stage === "writing") submit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expired]);

  function submit() {
    const adequacy = checkAdequacy(text, item.requirements, item.responseMinLen);
    if (!adequacy.passed) {
      // §6 adequacy gate: a 0-on-adequacy response cannot score on grammar.
      // Grammar feedback is suppressed entirely until this passes.
      setMissing(adequacy.missing);
      setStage("adequacy_fail");
      return;
    }
    const detected = detectErrors(text);
    setErrors(detected);
    setActiveErrorIdx(0);
    setStage(detected.length > 0 ? "hint" : "detect");
  }

  const currentError = errors[activeErrorIdx];

  return (
    <div className="space-y-4">
      <div className="rounded-md border border-zinc-200 dark:border-zinc-800 p-4">
        <div className="flex items-center justify-between mb-2">
          <p className="font-medium">{item.taskPrompt}</p>
          {examMode && stage === "writing" && (
            <span className="font-mono tabular-nums text-xs px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 shrink-0 ml-2">
              {Math.floor(secondsLeft / 60)}:{(secondsLeft % 60).toString().padStart(2, "0")}
            </span>
          )}
        </div>
        <ul className="text-xs text-zinc-500 list-disc list-inside">
          {item.requirements.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </div>

      {expired && stage === "writing" && (
        <p className="text-sm text-red-600">Время вышло — ответ отправлен автоматически, как на настоящем экзамене.</p>
      )}

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={expired || (stage !== "writing" && stage !== "adequacy_fail")}
        rows={8}
        className="w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2"
        placeholder="Schrijf hier je antwoord…"
      />

      {stage === "writing" && (
        <button
          onClick={submit}
          disabled={text.trim().length === 0}
          className="rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium disabled:opacity-40"
        >
          Проверить
        </button>
      )}

      {stage === "adequacy_fail" && (
        <div className="rounded-md bg-red-50 dark:bg-red-950 p-4 text-sm text-red-900 dark:text-red-200">
          <p className="font-medium mb-1">Сначала выполните задание — грамматика проверяется только после этого.</p>
          <p className="mb-2">Не хватает:</p>
          <ul className="list-disc list-inside">
            {missing.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
          <button onClick={() => setStage("writing")} className="mt-3 text-sm underline">
            Исправить ответ
          </button>
        </div>
      )}

      {stage === "detect" && (
        <div className="rounded-md bg-emerald-50 dark:bg-emerald-950 p-4 text-sm text-emerald-900 dark:text-emerald-200">
          Задание выполнено, явных ошибок из отслеживаемых категорий не найдено. Отличная работа!
        </div>
      )}

      {stage === "detect" && !examMode && <NextExercise currentHref="/write" />}

      {stage === "hint" && currentError && (
        <div className="rounded-md bg-amber-50 dark:bg-amber-950 p-4 text-sm text-amber-900 dark:text-amber-200 space-y-2">
          <p className="font-medium">
            Найден фрагмент: <span className="font-mono">&quot;{currentError.span}&quot;</span>
          </p>
          <p>{currentError.hintRu}</p>
          <p className="text-xs opacity-80">Попробуйте исправить самостоятельно, прежде чем смотреть ответ.</p>
          <button onClick={() => setStage("reveal")} className="text-sm underline">
            Показать разбор
          </button>
        </div>
      )}

      {stage === "reveal" && currentError && (
        <div className="rounded-md bg-zinc-100 dark:bg-zinc-900 p-4 text-sm space-y-2">
          <p>
            <strong>Код ошибки:</strong> {currentError.code}
          </p>
          <p>{getErrorEntry(currentError.code)?.l1Note}</p>
          <button onClick={() => setStage("repair")} className="text-sm underline">
            Далее: напишите новое предложение с этой конструкцией
          </button>
        </div>
      )}

      {stage === "repair" && (
        <div className="space-y-2">
          <label className="block text-sm font-medium">
            Напишите новое предложение, используя ту же конструкцию правильно:
          </label>
          <input
            value={repairText}
            onChange={(e) => setRepairText(e.target.value)}
            className="w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2"
          />
          <button
            onClick={() => {
              if (activeErrorIdx + 1 < errors.length) {
                setActiveErrorIdx((i) => i + 1);
                setRepairText("");
                setStage("hint");
              } else {
                setStage("detect");
              }
            }}
            disabled={repairText.trim().length === 0}
            className="rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium disabled:opacity-40"
          >
            {activeErrorIdx + 1 < errors.length ? "Следующая ошибка" : "Готово"}
          </button>
        </div>
      )}
    </div>
  );
}
