"use client";

import { useEffect, useRef, useState } from "react";
import { SPEAKING_EXAM_ITEMS } from "@/lib/content/speakingExamItems";

type Phase = "requesting" | "denied" | "unsupported" | "ready" | "recording" | "done";

const READY_SECONDS = 2;

const supportsRecording =
  typeof window !== "undefined" && !!navigator.mediaDevices && !!window.MediaRecorder;

export default function ExamSpeakingRunner({ onExit }: { onExit: () => void }) {
  const [phase, setPhase] = useState<Phase>("requesting");
  const [index, setIndex] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(READY_SECONDS);
  const [recordings, setRecordings] = useState<(string | null)[]>(() => SPEAKING_EXAM_ITEMS.map(() => null));

  const streamRef = useRef<MediaStream | null>(null);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const indexRef = useRef(0);
  const recordingsRef = useRef<(string | null)[]>(recordings);

  useEffect(() => {
    recordingsRef.current = recordings;
  }, [recordings]);

  useEffect(() => {
    let cancelled = false;
    if (!supportsRecording) {
      Promise.resolve().then(() => {
        if (!cancelled) setPhase("unsupported");
      });
      return () => {
        cancelled = true;
      };
    }
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        if (cancelled) {
          stream.getTracks().forEach((t) => t.stop());
          return;
        }
        streamRef.current = stream;
        setPhase("ready");
      })
      .catch(() => setPhase("denied"));
    return () => {
      cancelled = true;
      streamRef.current?.getTracks().forEach((t) => t.stop());
      recorderRef.current?.stop();
    };
  }, []);

  function startRecording() {
    const stream = streamRef.current;
    if (!stream) return;
    chunksRef.current = [];
    const recorder = new MediaRecorder(stream);
    recorder.ondataavailable = (e) => {
      if (e.data.size > 0) chunksRef.current.push(e.data);
    };
    recorder.onstop = () => {
      const blob = new Blob(chunksRef.current, { type: "audio/webm" });
      const url = URL.createObjectURL(blob);
      const finishedIndex = indexRef.current;
      setRecordings((r) => {
        const next = [...r];
        next[finishedIndex] = url;
        return next;
      });
      if (finishedIndex + 1 >= SPEAKING_EXAM_ITEMS.length) {
        setPhase("done");
      } else {
        indexRef.current = finishedIndex + 1;
        setIndex(finishedIndex + 1);
        setSecondsLeft(READY_SECONDS);
        setPhase("ready");
      }
    };
    recorderRef.current = recorder;
    recorder.start();
    setSecondsLeft(SPEAKING_EXAM_ITEMS[indexRef.current].timeLimitS);
    setPhase("recording");
  }

  function finishRecording() {
    recorderRef.current?.stop();
  }

  useEffect(() => {
    if ((phase !== "ready" && phase !== "recording") || secondsLeft <= 0) return;
    const t = setTimeout(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          if (phase === "ready") startRecording();
          else finishRecording();
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearTimeout(t);
  }, [phase, secondsLeft]);

  useEffect(() => {
    return () => {
      recordingsRef.current.forEach((url) => url && URL.revokeObjectURL(url));
    };
  }, []);

  if (phase === "unsupported" || phase === "denied") {
    return (
      <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-6 space-y-4">
        <p className="text-red-600 text-sm">
          {phase === "unsupported" ? "Ваш браузер не поддерживает запись звука." : "Доступ к микрофону не разрешён."}
        </p>
        <button onClick={onExit} className="rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium">
          Вернуться
        </button>
      </div>
    );
  }

  if (phase === "requesting") {
    return <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-6 text-sm text-zinc-500">Запрос доступа к микрофону…</div>;
  }

  if (phase === "done") {
    return (
      <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-6 space-y-4">
        <h3 className="text-lg font-medium">Результат симуляции Spreken</h3>
        <p className="text-sm text-zinc-500">
          Демо из {SPEAKING_EXAM_ITEMS.length} заданий (8 коротких по 20с + 8 средних по 30с — как на настоящем
          экзамене). Без автоматической оценки произношения — прослушайте свои записи и сравните с текстом
          самостоятельно.
        </p>
        <div className="rounded-md bg-zinc-100 dark:bg-zinc-900 p-3 text-xs text-zinc-600 dark:text-zinc-400">
          <p className="font-medium mb-1">По каким критериям оценивают Spreken на реальном экзамене (Cito):</p>
          <ul className="list-disc list-inside space-y-0.5">
            <li>Inhoud (содержание ответа) — 39 из 103 баллов</li>
            <li>Woord- en zinsvorming (построение слов/предложений) — 33 балла</li>
            <li>Woordenschat (словарный запас) — 12 баллов</li>
            <li>Uitspraak (произношение) — 9 баллов</li>
            <li>Woordkeus (выбор слов) — 6 баллов</li>
            <li>Tempo (темп речи) — 4 балла</li>
          </ul>
          <p className="mt-1">Проходной балл — 66 из 103 (без учёта обязательных условий).</p>
        </div>
        <div className="space-y-3">
          {SPEAKING_EXAM_ITEMS.map((it, i) => (
            <div key={it.id} className="rounded-md border border-zinc-200 dark:border-zinc-800 p-3 text-sm space-y-1">
              <p className="font-medium">{it.text}</p>
              {recordings[i] && <audio controls src={recordings[i]!} className="max-w-full" />}
            </div>
          ))}
        </div>
        <button onClick={onExit} className="rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium">
          Вернуться
        </button>
      </div>
    );
  }

  const item = SPEAKING_EXAM_ITEMS[index];

  return (
    <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-6 space-y-4">
      <div className="flex items-center justify-between text-xs text-zinc-500">
        <span>
          {index + 1} / {SPEAKING_EXAM_ITEMS.length}
        </span>
        <span className="font-mono tabular-nums px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900">{secondsLeft}с</span>
      </div>

      <p className="text-xl font-medium">{item.text}</p>

      {phase === "ready" && <p className="text-sm text-zinc-500">Приготовьтесь, запись начнётся через {secondsLeft} сек…</p>}
      {phase === "recording" && (
        <p className="text-sm text-red-600 flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-red-600 animate-pulse" aria-hidden="true" /> Идёт
          запись — говорите сейчас
        </p>
      )}

      <p className="text-xs text-zinc-400">Темп задаётся автоматически, без возврата назад — как на настоящем экзамене.</p>
    </div>
  );
}
