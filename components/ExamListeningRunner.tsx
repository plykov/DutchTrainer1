"use client";

import { useEffect, useRef, useState } from "react";
import { LISTENING_EXAM_ITEMS } from "@/lib/content/listeningExamItems";

type Stage = "preread" | "playing" | "answer" | "result";

const PRE_READ_SECONDS = 25;
const WORDS_PER_SECOND_FLASH = 2.1;

const supportsTts = typeof window !== "undefined" && "speechSynthesis" in window;

export default function ExamListeningRunner({ onExit }: { onExit: () => void }) {
  const [index, setIndex] = useState(0);
  const [stage, setStage] = useState<Stage>("preread");
  const [preReadLeft, setPreReadLeft] = useState(PRE_READ_SECONDS);
  const [answers, setAnswers] = useState<(number | null)[]>(() => LISTENING_EXAM_ITEMS.map(() => null));
  const [selected, setSelected] = useState<number | null>(null);

  const flashTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const safetyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const item = LISTENING_EXAM_ITEMS[index];
  const playbackMode: "tts" | "flash" | null = stage === "playing" ? (supportsTts ? "tts" : "flash") : null;

  useEffect(() => {
    if (stage !== "preread" || preReadLeft <= 0) return;
    const t = setTimeout(() => {
      setPreReadLeft((s) => {
        if (s <= 1) {
          setStage("playing");
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearTimeout(t);
  }, [stage, preReadLeft]);

  useEffect(() => {
    if (stage !== "playing") return;
    const wordCount = item.transcript.split(/\s+/).filter(Boolean).length;

    if (supportsTts) {
      const utterance = new SpeechSynthesisUtterance(item.transcript);
      utterance.lang = "nl-NL";
      const advance = () => setStage((s) => (s === "playing" ? "answer" : s));
      utterance.onend = advance;
      utterance.onerror = advance;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
      safetyTimerRef.current = setTimeout(advance, (wordCount / 1.5) * 1000 + 4000);
    } else {
      flashTimerRef.current = setTimeout(() => setStage("answer"), (wordCount / WORDS_PER_SECOND_FLASH) * 1000);
    }

    return () => {
      if (flashTimerRef.current) clearTimeout(flashTimerRef.current);
      if (safetyTimerRef.current) clearTimeout(safetyTimerRef.current);
      if (supportsTts) window.speechSynthesis.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage]);

  function submit() {
    setAnswers((a) => {
      const next = [...a];
      next[index] = selected;
      return next;
    });
    if (index + 1 >= LISTENING_EXAM_ITEMS.length) {
      setStage("result");
    } else {
      setIndex((i) => i + 1);
      setSelected(null);
      setPreReadLeft(PRE_READ_SECONDS);
      setStage("preread");
    }
  }

  if (stage === "result") {
    const correctCount = answers.filter((a, i) => a === LISTENING_EXAM_ITEMS[i].question.correctIndex).length;
    return (
      <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-6 space-y-4">
        <h3 className="text-lg font-medium">Результат симуляции Luisteren</h3>
        <p className="text-2xl font-semibold">
          {correctCount} / {LISTENING_EXAM_ITEMS.length}
        </p>
        <p className="text-sm text-zinc-500">
          Демо из {LISTENING_EXAM_ITEMS.length} вопросов. Настоящий Luisteren: ~40 вопросов, 90 минут [VERIFY].
        </p>
        <div className="space-y-2">
          {LISTENING_EXAM_ITEMS.map((it, i) => (
            <div key={it.id} className="rounded-md border border-zinc-200 dark:border-zinc-800 p-3 text-sm">
              <p className="font-medium">{it.question.prompt}</p>
              <p className={answers[i] === it.question.correctIndex ? "text-emerald-600" : "text-red-600"}>
                Ваш ответ: {answers[i] !== null ? it.question.options[answers[i]!] : "нет ответа"} · Правильно:{" "}
                {it.question.options[it.question.correctIndex]}
              </p>
              <p className="text-zinc-500 mt-1">{it.question.explanationRu}</p>
            </div>
          ))}
        </div>
        <button onClick={onExit} className="rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium">
          Вернуться
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-6 space-y-4">
      <div className="flex items-center justify-between text-xs text-zinc-500">
        <span>
          {index + 1} / {LISTENING_EXAM_ITEMS.length}
        </span>
        <span>без возврата назад</span>
      </div>

      {stage === "preread" && (
        <div className="space-y-3">
          <p className="text-sm text-zinc-500">
            Прочитайте вопрос заранее. Прослушивание начнётся через <strong>{preReadLeft}</strong> сек.
          </p>
          <p className="text-lg font-medium">{item.question.prompt}</p>
          <ul className="text-sm text-zinc-500 list-disc list-inside">
            {item.question.options.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </div>
      )}

      {stage === "playing" && (
        <div className="space-y-3">
          <p className="text-lg font-medium">🔊 Прослушивание… (только один раз)</p>
          {playbackMode === "flash" && (
            <>
              <p className="text-xs text-amber-600">Синтез речи недоступен — текст показан один раз вместо звука.</p>
              <p className="text-lg leading-relaxed">{item.transcript}</p>
            </>
          )}
        </div>
      )}

      {stage === "answer" && (
        <fieldset>
          <legend className="text-lg mb-4">{item.question.prompt}</legend>
          <div className="space-y-2">
            {item.question.options.map((opt, i) => (
              <label
                key={i}
                className={`flex items-center gap-2 rounded-md border p-3 text-sm cursor-pointer ${
                  selected === i ? "border-blue-600 bg-blue-50 dark:bg-blue-950" : "border-zinc-300 dark:border-zinc-700"
                }`}
              >
                <input type="radio" name="listen-exam-mc" checked={selected === i} onChange={() => setSelected(i)} />
                {opt}
              </label>
            ))}
          </div>
          <button
            onClick={submit}
            disabled={selected === null}
            className="mt-4 rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium disabled:opacity-40"
          >
            {index + 1 >= LISTENING_EXAM_ITEMS.length ? "Завершить" : "Далее"}
          </button>
        </fieldset>
      )}
    </div>
  );
}
