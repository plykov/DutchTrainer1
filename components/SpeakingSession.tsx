"use client";

import { useEffect, useRef, useState } from "react";
import { useAppStore } from "@/lib/store";
import { useT } from "@/lib/i18n";
import { SPEAKING_PROMPTS } from "@/lib/content/speakingPrompts";
import { Grade } from "@/lib/fsrs";
import NextExercise from "@/components/NextExercise";

type RecState = "idle" | "recording" | "recorded" | "denied" | "unsupported";

export default function SpeakingSession() {
  const review = useAppStore((s) => s.review);
  const t = useT();

  const [index, setIndex] = useState(0);
  const [recState, setRecState] = useState<RecState>("idle");
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [startedAt, setStartedAt] = useState(() => Date.now());
  const [done, setDone] = useState(false);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);
  const audioUrlRef = useRef<string | null>(null);

  const prompt = SPEAKING_PROMPTS[index];

  useEffect(() => {
    return () => {
      if (audioUrlRef.current) URL.revokeObjectURL(audioUrlRef.current);
      streamRef.current?.getTracks().forEach((t) => t.stop());
    };
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
        const url = URL.createObjectURL(blob);
        audioUrlRef.current = url;
        setAudioUrl(url);
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
    if (audioUrlRef.current) URL.revokeObjectURL(audioUrlRef.current);
    audioUrlRef.current = null;
    setAudioUrl(null);
    setRecState("idle");
    setStartedAt(Date.now());
    if (index + 1 >= SPEAKING_PROMPTS.length) {
      setDone(true);
    } else {
      setIndex((i) => i + 1);
    }
  }

  if (done) {
    return (
      <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-8 text-center">
        <p className="text-lg font-medium mb-2">{t("sp_all_done")}</p>
        <NextExercise currentHref="/speaking" />
      </div>
    );
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

      <p className="text-xs text-zinc-400 rounded-md bg-zinc-100 dark:bg-zinc-900 p-3">{t("sp_privacy_note")}</p>

      {recState === "unsupported" && <p className="text-sm text-red-600">{t("sp_unsupported")}</p>}
      {recState === "denied" && <p className="text-sm text-red-600">{t("sp_denied")}</p>}

      <div className="flex items-center gap-3">
        {recState === "idle" && (
          <button onClick={startRecording} className="rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium">
            {t("sp_start_recording")}
          </button>
        )}
        {recState === "recording" && (
          <button onClick={stopRecording} className="rounded-md bg-red-600 text-white px-4 py-2 text-sm font-medium">
            {t("sp_stop_recording")}
          </button>
        )}
        {recState === "recorded" && audioUrl && (
          <audio controls src={audioUrl} className="max-w-full" />
        )}
      </div>

      {recState === "recorded" && (
        <div className="flex gap-2 pt-2">
          <button onClick={() => grade("again")} className="rounded-md bg-red-600 text-white px-3 py-2 text-sm">
            {t("sp_grade_bad")}
          </button>
          <button onClick={() => grade("hard")} className="rounded-md bg-amber-500 text-white px-3 py-2 text-sm">
            {t("sp_grade_medium")}
          </button>
          <button onClick={() => grade("good")} className="rounded-md bg-emerald-600 text-white px-3 py-2 text-sm">
            {t("grade_good")}
          </button>
          <button onClick={() => grade("easy")} className="rounded-md bg-sky-600 text-white px-3 py-2 text-sm">
            {t("sp_grade_excellent")}
          </button>
        </div>
      )}
    </div>
  );
}
