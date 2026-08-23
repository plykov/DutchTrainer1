"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { LISTENING_ITEMS } from "@/lib/content/listeningItems";
import { shuffleOptions } from "@/lib/shuffle";
import { useT } from "@/lib/i18n";
import NextExercise from "@/components/NextExercise";

type Stage = "preread" | "playing" | "answer" | "result";

const PRE_READ_SECONDS = 25;
const WORDS_PER_SECOND_FLASH = 2.1; // reading-aloud pace for the no-TTS fallback

// Whether TTS is available never changes during the component's life, so
// this is a plain value, not state — avoids syncing it via an effect.
const supportsTts = typeof window !== "undefined" && "speechSynthesis" in window;

export default function ListeningSession() {
  const t = useT();
  // Shuffled once per mount so the correct answer's position isn't
  // memorizable/predictable.
  const items = useMemo(
    () =>
      LISTENING_ITEMS.map((it) => ({
        ...it,
        question: { ...it.question, ...shuffleOptions(it.question.options, it.question.correctIndex) },
      })),
    []
  );

  const [index, setIndex] = useState(0);
  const [stage, setStage] = useState<Stage>("preread");
  const [preReadLeft, setPreReadLeft] = useState(PRE_READ_SECONDS);
  const [selected, setSelected] = useState<number | null>(null);
  const [done, setDone] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const flashTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const safetyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const item = items[index];
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
      // Safety net: some browsers never fire onend reliably.
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

  const correct = useMemo(() => selected === item.question.correctIndex, [selected, item]);

  function submit() {
    setStage("result");
  }

  function next() {
    if (correct) setCorrectCount((c) => c + 1);
    if (index + 1 >= items.length) {
      setDone(true);
      return;
    }
    setIndex((i) => i + 1);
    setStage("preread");
    setPreReadLeft(PRE_READ_SECONDS);
    setSelected(null);
  }

  if (done) {
    return (
      <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-8 text-center">
        <p className="text-lg font-medium mb-2">{t("session_done")}</p>
        <p className="text-zinc-500">{t("listening_score", { correct: correctCount, total: items.length })}</p>
        <NextExercise currentHref="/listening" />
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-6 space-y-4">
      <div className="flex items-center justify-between text-xs text-zinc-500">
        <span>
          {index + 1} / {items.length}
        </span>
        <span>{item.level}</span>
      </div>

      {stage === "preread" && (
        <div className="space-y-3">
          <p className="text-sm text-zinc-500">{t("listening_preread", { n: preReadLeft })}</p>
          <p className="text-lg font-medium">{item.question.prompt}</p>
          <ul className="text-sm text-zinc-500 list-disc list-inside">
            {item.question.options.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
          <button onClick={() => setStage("playing")} className="text-sm underline text-blue-600">
            {t("listening_start_now")}
          </button>
        </div>
      )}

      {stage === "playing" && (
        <div className="space-y-3">
          <p className="text-lg font-medium">{t("listening_playing")}</p>
          {playbackMode === "flash" && (
            <>
              <p className="text-xs text-amber-600">{t("listening_flash_fallback")}</p>
              <p className="text-lg leading-relaxed">{item.transcript}</p>
            </>
          )}
          {playbackMode === "tts" && (
            <p className="text-xs text-zinc-400">{t("listening_tts_missing_voice")}</p>
          )}
        </div>
      )}

      {(stage === "answer" || stage === "result") && (
        <fieldset>
          <legend className="text-lg mb-4">{item.question.prompt}</legend>
          <div className="space-y-2">
            {item.question.options.map((opt, i) => (
              <label
                key={i}
                className={`flex items-center gap-2 rounded-md border p-3 text-sm cursor-pointer ${
                  selected === i ? "border-blue-600 bg-blue-50 dark:bg-blue-950" : "border-zinc-300 dark:border-zinc-700"
                } ${stage === "result" && i === item.question.correctIndex ? "border-emerald-600" : ""}`}
              >
                <input
                  type="radio"
                  name="listen-mc"
                  checked={selected === i}
                  onChange={() => setSelected(i)}
                  disabled={stage === "result"}
                />
                {opt}
              </label>
            ))}
          </div>
        </fieldset>
      )}

      {stage === "answer" && (
        <button
          onClick={submit}
          disabled={selected === null}
          className="rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium disabled:opacity-40"
        >
          {t("listening_answer")}
        </button>
      )}

      {stage === "result" && (
        <div
          className={`rounded-md p-4 text-sm ${
            correct
              ? "bg-emerald-50 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200"
              : "bg-red-50 text-red-900 dark:bg-red-950 dark:text-red-200"
          }`}
        >
          <p className="font-medium mb-1">{correct ? t("answer_correct") : t("answer_incorrect")}</p>
          <p>{item.question.explanationRu}</p>
          <button onClick={next} className="mt-3 rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium">
            {t("listening_next")}
          </button>
        </div>
      )}
    </div>
  );
}
