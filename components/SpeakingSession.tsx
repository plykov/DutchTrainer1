"use client";

import { useEffect, useRef, useState } from "react";
import { useAppStore } from "@/lib/store";
import { SPEAKING_PROMPTS } from "@/lib/content/speakingPrompts";
import { Grade } from "@/lib/fsrs";

type RecState = "idle" | "recording" | "recorded" | "denied" | "unsupported";

export default function SpeakingSession() {
  const review = useAppStore((s) => s.review);

  const [index, setIndex] = useState(0);
  const [recState, setRecState] = useState<RecState>("idle");
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [startedAt, setStartedAt] = useState(() => Date.now());

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);

  const prompt = SPEAKING_PROMPTS[index];

  useEffect(() => {
    return () => {
      if (audioUrl) URL.revokeObjectURL(audioUrl);
      streamRef.current?.getTracks().forEach((t) => t.stop());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function startRecording() {
    if (typeof window === "undefined" || !navigator.mediaDevices || !window.MediaRecorder) {
      setRecState("unsupported");
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      chunksRef.current = [];
      const recorder = new MediaRecorder(stream);
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };
      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        setAudioUrl(URL.createObjectURL(blob));
        stream.getTracks().forEach((t) => t.stop());
        setRecState("recorded");
      };
      mediaRecorderRef.current = recorder;
      recorder.start();
      setRecState("recording");
    } catch {
      setRecState("denied");
    }
  }

  function stopRecording() {
    mediaRecorderRef.current?.stop();
  }

  function grade(g: Grade) {
    const latencyMs = Date.now() - startedAt;
    review({ itemId: `speaking:${prompt.id}`, mode: "productive" }, g, latencyMs);
    if (audioUrl) URL.revokeObjectURL(audioUrl);
    setAudioUrl(null);
    setRecState("idle");
    setStartedAt(Date.now());
    setIndex((i) => (i + 1) % SPEAKING_PROMPTS.length);
  }

  return (
    <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-6 space-y-4">
      <div className="flex items-center justify-between text-xs text-zinc-500">
        <span>
          {index + 1} / {SPEAKING_PROMPTS.length}
        </span>
        <span>{prompt.level}</span>
      </div>

      <p className="text-2xl font-medium">{prompt.text}</p>
      <p className="text-sm text-zinc-500">{prompt.focusHintRu}</p>

      <p className="text-xs text-zinc-400 rounded-md bg-zinc-100 dark:bg-zinc-900 p-3">
        Запись обрабатывается только в вашем браузере, никуда не отправляется и не сохраняется — она исчезает, как
        только вы оцените попытку или уйдёте со страницы (принцип минимальной обработки голосовых данных, §9). Здесь
        нет автоматической оценки произношения (ASR) — сравнивайте свою запись с текстом сами.
      </p>

      {recState === "unsupported" && (
        <p className="text-sm text-red-600">Ваш браузер не поддерживает запись звука.</p>
      )}
      {recState === "denied" && (
        <p className="text-sm text-red-600">Доступ к микрофону не разрешён. Проверьте разрешения браузера.</p>
      )}

      <div className="flex items-center gap-3">
        {recState === "idle" && (
          <button onClick={startRecording} className="rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium">
            Начать запись
          </button>
        )}
        {recState === "recording" && (
          <button onClick={stopRecording} className="rounded-md bg-red-600 text-white px-4 py-2 text-sm font-medium">
            Остановить запись
          </button>
        )}
        {recState === "recorded" && audioUrl && (
          <audio controls src={audioUrl} className="max-w-full" />
        )}
      </div>

      {recState === "recorded" && (
        <div className="flex gap-2 pt-2">
          <button onClick={() => grade("again")} className="rounded-md bg-red-600 text-white px-3 py-2 text-sm">
            Плохо получилось
          </button>
          <button onClick={() => grade("hard")} className="rounded-md bg-amber-500 text-white px-3 py-2 text-sm">
            Средне
          </button>
          <button onClick={() => grade("good")} className="rounded-md bg-emerald-600 text-white px-3 py-2 text-sm">
            Хорошо
          </button>
          <button onClick={() => grade("easy")} className="rounded-md bg-sky-600 text-white px-3 py-2 text-sm">
            Отлично
          </button>
        </div>
      )}
    </div>
  );
}
