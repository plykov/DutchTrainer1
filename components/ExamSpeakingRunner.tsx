"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { SPEAKING_EXAM_ITEMS } from "@/lib/content/speakingExamItems";
import { shuffleArray } from "@/lib/shuffle";
import { useT } from "@/lib/i18n";

type Phase = "requesting" | "denied" | "unsupported" | "ready" | "recording" | "done";

const READY_SECONDS = 2;

const supportsRecording =
  typeof window !== "undefined" && !!navigator.mediaDevices && !!window.MediaRecorder;

export default function ExamSpeakingRunner({ onExit }: { onExit: () => void }) {
  const t = useT();
  // The pool has more short/medium prompts than one run needs, so draw a
  // random 8 short + 8 medium per run — keeps the real 8/8 structure while
  // varying which prompts appear and in what order.
  const items = useMemo(() => {
    const short = shuffleArray(SPEAKING_EXAM_ITEMS.filter((it) => it.timeLimitS === 20)).slice(0, 8);
    const medium = shuffleArray(SPEAKING_EXAM_ITEMS.filter((it) => it.timeLimitS === 30)).slice(0, 8);
    return shuffleArray([...short, ...medium]);
  }, []);

  const [phase, setPhase] = useState<Phase>("requesting");
  const [index, setIndex] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(READY_SECONDS);
  const [recordings, setRecordings] = useState<(string | null)[]>(() => items.map(() => null));

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
      if (finishedIndex + 1 >= items.length) {
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
    setSecondsLeft(items[indexRef.current].timeLimitS);
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
    // startRecording/finishRecording close over `items`, which is fixed for
    // the component's lifetime (useMemo with no deps) — no actual staleness.
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          {phase === "unsupported" ? t("sp_unsupported") : t("sp_denied")}
        </p>
        <button onClick={onExit} className="rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium">
          {t("action_return")}
        </button>
      </div>
    );
  }

  if (phase === "requesting") {
    return (
      <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-6 text-sm text-zinc-500">
        {t("exam_speaking_requesting")}
      </div>
    );
  }

  if (phase === "done") {
    return (
      <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-6 space-y-4">
        <h3 className="text-lg font-medium">{t("exam_speaking_result")}</h3>
        <p className="text-sm text-zinc-500">{t("exam_speaking_summary", { n: items.length })}</p>
        <div className="rounded-md bg-zinc-100 dark:bg-zinc-900 p-3 text-xs text-zinc-600 dark:text-zinc-400">
          <p className="font-medium mb-1">{t("exam_speaking_rubric")}</p>
          <ul className="list-disc list-inside space-y-0.5">
            <li>Inhoud ({t("exam_speaking_content")}) — 39 / 103</li>
            <li>Woord- en zinsvorming ({t("exam_speaking_formation")}) — 33</li>
            <li>Woordenschat ({t("exam_speaking_vocabulary")}) — 12</li>
            <li>Uitspraak ({t("exam_speaking_pronunciation")}) — 9</li>
            <li>Woordkeus ({t("exam_speaking_word_choice")}) — 6</li>
            <li>Tempo ({t("exam_speaking_tempo")}) — 4</li>
          </ul>
          <p className="mt-1">{t("exam_speaking_pass")}</p>
        </div>
        <div className="space-y-3">
          {items.map((it, i) => (
            <div key={it.id} className="rounded-md border border-zinc-200 dark:border-zinc-800 p-3 text-sm space-y-1">
              <p className="font-medium">{it.text}</p>
              {recordings[i] && <audio controls src={recordings[i]!} className="max-w-full" />}
            </div>
          ))}
        </div>
        <button onClick={onExit} className="rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium">
          {t("action_return")}
        </button>
      </div>
    );
  }

  const item = items[index];

  return (
    <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-6 space-y-4">
      <div className="flex items-center justify-between text-xs text-zinc-500">
        <span>
          {index + 1} / {items.length}
        </span>
        <span className="font-mono tabular-nums px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900">
          {secondsLeft}{t("seconds_short")}
        </span>
      </div>

      <p className="text-xl font-medium">{item.text}</p>

      {phase === "ready" && <p className="text-sm text-zinc-500">{t("exam_speaking_ready", { n: secondsLeft })}</p>}
      {phase === "recording" && (
        <p className="text-sm text-red-600 flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-red-600 animate-pulse" aria-hidden="true" />{" "}
          {t("exam_speaking_recording")}
        </p>
      )}

      <p className="text-xs text-zinc-400">{t("exam_speaking_pace")}</p>
    </div>
  );
}
