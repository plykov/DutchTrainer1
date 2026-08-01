"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppStore } from "@/lib/store";
import { LegalTrack, Skill, TargetLevel } from "@/lib/types";

const SKILLS: Skill[] = ["reading", "listening", "writing", "speaking", "interaction"];

export default function OnboardingPage() {
  const router = useRouter();
  const setProfile = useAppStore((s) => s.setProfile);

  const [legalTrack, setLegalTrack] = useState<LegalTrack>("wi2021_b1");
  const [targetLevel, setTargetLevel] = useState<TargetLevel>("B1");
  const [examDate, setExamDate] = useState("");
  const [explanationLanguage, setExplanationLanguage] = useState<"ru" | "nl" | "en">("ru");
  const [scriptSupport, setScriptSupport] = useState(true);
  const [weeklyMinutes, setWeeklyMinutes] = useState(180);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setProfile({
      legalTrack,
      targetLevel,
      examDate: examDate || null,
      l1: "ru",
      explanationLanguage,
      scriptSupport,
      baseline: Object.fromEntries(SKILLS.map((s) => [s, 0])) as Record<Skill, number>,
      weeklyMinutes,
      onboardedAt: new Date().toISOString(),
    });
    router.push("/dashboard");
  }

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-1">Welkom / Добро пожаловать</h1>
      <p className="text-zinc-500 mb-8">
        Расскажите немного о себе — это определит вашу учебную программу и экзаменационный трек.
      </p>

      <form onSubmit={handleSubmit} className="space-y-8">
        <fieldset>
          <legend className="font-medium mb-2">По какому закону/PIP вы проходите интеграцию?</legend>
          <p className="text-sm text-zinc-500 mb-3">
            Не угадывайте по уровню — уточните у консультанта, если не уверены. Новые участники (Wi2021) по
            умолчанию идут по треку B1; понижение до A2 требует документального подтверждения часов обучения.
          </p>
          <div className="space-y-2">
            {(
              [
                { v: "wi2021_b1", label: "Wi2021 — маршрут B1 (по умолчанию для новых участников)" },
                { v: "wi2013_a2", label: "Wi2013 — устаревшее законодательство, уровень A2" },
                { v: "nt2_p1", label: "Staatsexamen NT2 Programma I напрямую (без inburgering)" },
                { v: "self_study", label: "Самостоятельное изучение, без юридической привязки" },
              ] as { v: LegalTrack; label: string }[]
            ).map((opt) => (
              <label key={opt.v} className="flex items-start gap-2 text-sm">
                <input
                  type="radio"
                  name="legalTrack"
                  className="mt-1"
                  checked={legalTrack === opt.v}
                  onChange={() => setLegalTrack(opt.v)}
                />
                {opt.label}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="font-medium mb-2">Целевой уровень</legend>
          <div className="flex gap-3">
            {(["A2", "B1"] as TargetLevel[]).map((lvl) => (
              <button
                type="button"
                key={lvl}
                onClick={() => setTargetLevel(lvl)}
                aria-pressed={targetLevel === lvl}
                className={`px-4 py-2 rounded-md border text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 ${
                  targetLevel === lvl
                    ? "bg-blue-600 text-white border-blue-600"
                    : "border-zinc-300 dark:border-zinc-700"
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </fieldset>

        <label className="block">
          <span className="font-medium">Дата экзамена (необязательно)</span>
          <input
            type="date"
            value={examDate}
            onChange={(e) => setExamDate(e.target.value)}
            className="mt-2 block w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2"
          />
          <span className="text-xs text-zinc-500">
            В последние 6 недель перед экзаменом цель удержания в памяти повышается до 95%.
          </span>
        </label>

        <fieldset>
          <legend className="font-medium mb-2">Язык объяснений</legend>
          <div className="flex gap-3">
            {(
              [
                { v: "ru", label: "Русский" },
                { v: "nl", label: "Nederlands" },
                { v: "en", label: "English" },
              ] as { v: "ru" | "nl" | "en"; label: string }[]
            ).map((opt) => (
              <button
                type="button"
                key={opt.v}
                onClick={() => setExplanationLanguage(opt.v)}
                aria-pressed={explanationLanguage === opt.v}
                className={`px-4 py-2 rounded-md border text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 ${
                  explanationLanguage === opt.v
                    ? "bg-blue-600 text-white border-blue-600"
                    : "border-zinc-300 dark:border-zinc-700"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </fieldset>

        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={scriptSupport} onChange={(e) => setScriptSupport(e.target.checked)} />
          Показывать интерфейс на кириллице там, где это возможно
        </label>

        <label className="block">
          <span className="font-medium">Сколько минут в неделю вы можете заниматься?</span>
          <input
            type="number"
            min={30}
            step={15}
            value={weeklyMinutes}
            onChange={(e) => setWeeklyMinutes(Number(e.target.value))}
            className="mt-2 block w-40 rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2"
          />
        </label>

        <button
          type="submit"
          className="w-full rounded-md bg-blue-600 text-white py-3 font-medium hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Начать / Beginnen
        </button>
      </form>
    </div>
  );
}
