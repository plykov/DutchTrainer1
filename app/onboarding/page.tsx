"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppStore } from "@/lib/store";
import { useT } from "@/lib/i18n";
import { LegalTrack, Skill, TargetLevel } from "@/lib/types";

const SKILLS: Skill[] = ["reading", "listening", "writing", "speaking", "interaction"];

const TRACK_OPTIONS: { v: LegalTrack; label: { ru: string; en: string } }[] = [
  {
    v: "wi2021_b1",
    label: { ru: "Wi2021 — маршрут B1 (по умолчанию для новых участников)", en: "Wi2021 — B1 route (default for new starters)" },
  },
  { v: "wi2013_a2", label: { ru: "Wi2013 — устаревшее законодательство, уровень A2", en: "Wi2013 — legacy law, A2 level" } },
  {
    v: "nt2_p1",
    label: { ru: "Staatsexamen NT2 Programma I напрямую (без inburgering)", en: "Staatsexamen NT2 Programma I directly (no inburgering)" },
  },
  { v: "self_study", label: { ru: "Самостоятельное изучение, без юридической привязки", en: "Self-study, no legal track" } },
];

const EXPL_LANG_OPTIONS: { v: "ru" | "nl" | "en"; label: string }[] = [
  { v: "ru", label: "Русский" },
  { v: "nl", label: "Nederlands" },
  { v: "en", label: "English" },
];

export default function OnboardingPage() {
  const router = useRouter();
  const setProfile = useAppStore((s) => s.setProfile);
  const setUiLang = useAppStore((s) => s.setUiLang);
  const t = useT();
  const lang = useAppStore((s) => s.uiLang);

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
    if (explanationLanguage === "en") setUiLang("en");
    router.push("/dashboard");
  }

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-1">{t("onb_title")} / Welkom</h1>
      <p className="text-zinc-500 mb-8">{t("onb_intro")}</p>

      <form onSubmit={handleSubmit} className="space-y-8">
        <fieldset>
          <legend className="font-medium mb-2">{t("onb_track_legend")}</legend>
          <p className="text-sm text-zinc-500 mb-3">{t("onb_track_note")}</p>
          <div className="space-y-2">
            {TRACK_OPTIONS.map((opt) => (
              <label key={opt.v} className="flex items-start gap-2 text-sm">
                <input
                  type="radio"
                  name="legalTrack"
                  className="mt-1"
                  checked={legalTrack === opt.v}
                  onChange={() => setLegalTrack(opt.v)}
                />
                {opt.label[lang]}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="font-medium mb-2">{t("onb_level_legend")}</legend>
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
          <span className="font-medium">{t("onb_examdate_label")}</span>
          <input
            type="date"
            value={examDate}
            onChange={(e) => setExamDate(e.target.value)}
            className="mt-2 block w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2"
          />
          <span className="text-xs text-zinc-500">{t("onb_examdate_note")}</span>
        </label>

        <fieldset>
          <legend className="font-medium mb-2">{t("onb_explang_legend")}</legend>
          <div className="flex gap-3">
            {EXPL_LANG_OPTIONS.map((opt) => (
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
          {t("onb_script_label")}
        </label>

        <label className="block">
          <span className="font-medium">{t("onb_minutes_label")}</span>
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
          {t("onb_submit")}
        </button>
      </form>
    </div>
  );
}
