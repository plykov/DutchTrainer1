"use client";

import { useRequireProfile } from "@/lib/useRequireProfile";
import { useAppStore } from "@/lib/store";
import { useT } from "@/lib/i18n";
import { retentionTargetFor } from "@/lib/fsrs";
import { PRACTICE_ITEMS } from "@/lib/content/items";
import { NOUN_BUNDLES } from "@/lib/content/nouns";
import { SPEAKING_PROMPTS } from "@/lib/content/speakingPrompts";
import { LISTENING_ITEMS } from "@/lib/content/listeningItems";
import { READING_TEXTS } from "@/lib/content/readingTexts";
import { INTERACTION_ITEMS } from "@/lib/content/interactionItems";
import { knownLemmas } from "@/lib/coverage";
import Link from "next/link";

const SKILL_LABEL_KEYS = {
  reading: "nav_reading",
  listening: "nav_listening",
  writing: "nav_writing",
  speaking: "nav_speaking",
  interaction: "nav_interaction",
} as const;

export default function DashboardPage() {
  const { profile, ready } = useRequireProfile();
  const grammarProgress = useAppStore((s) => s.grammarProgress);
  const cards = useAppStore((s) => s.cards);
  const reviewLog = useAppStore((s) => s.reviewLog);
  const streakDays = useAppStore((s) => s.streakDays);
  const t = useT();

  if (!ready || !profile) return null;

  const retention = retentionTargetFor(profile.examDate);
  const cardCount = Object.keys(cards).length;
  const targets = Object.values(grammarProgress);
  const graduated = targets.filter((tg) => tg.stage === "interleaved").length;
  const knownWordCount = knownLemmas(cards).size;

  // §6 readiness estimate: formative, gated on volume of recent unseen
  // review evidence — never shown as a raw-accuracy score.
  const readinessReady = reviewLog.length >= 40;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold mb-1">{t("dash_title")}</h1>
        <p className="text-zinc-500">
          {t("dash_track")}: <strong>{profile.legalTrack}</strong> · {t("dash_goal")}: <strong>{profile.targetLevel}</strong>
          {profile.examDate && (
            <>
              {" "}
              · {t("dash_exam")}: <strong>{profile.examDate}</strong>
            </>
          )}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-4">
        <StatCard label={t("dash_streak")} value={`${streakDays} ${t("dash_days_unit")}`} sub={t("dash_streak_sub")} />
        <StatCard
          label={t("dash_retention")}
          value={`${Math.round(retention * 100)}%`}
          sub={profile.examDate ? t("dash_retention_pre_exam") : t("dash_retention_default")}
        />
        <StatCard label={t("dash_cards")} value={String(cardCount)} sub={`${graduated}/${targets.length || 0}`} />
        <StatCard label={t("dash_known_words")} value={`${knownWordCount}/${NOUN_BUNDLES.length}`} sub={t("dash_known_words_sub")} />
      </div>

      <section>
        <h2 className="text-lg font-medium mb-3">{t("dash_readiness_title")}</h2>
        <div className="rounded-md border border-zinc-200 dark:border-zinc-800 p-4 text-sm">
          {readinessReady ? (
            <p>{t("dash_readiness_ready", { n: reviewLog.length })}</p>
          ) : (
            <p className="text-zinc-500">{t("dash_readiness_not_ready", { n: reviewLog.length })}</p>
          )}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-medium mb-3">{t("dash_skills_title")}</h2>
        <div className="grid gap-2 sm:grid-cols-2">
          {Object.entries(SKILL_LABEL_KEYS).map(([skill, labelKey]) => {
            const total =
              PRACTICE_ITEMS.filter((i) => i.skill === skill).length +
              (skill === "speaking" ? SPEAKING_PROMPTS.length : 0) +
              (skill === "listening" ? LISTENING_ITEMS.length : 0) +
              (skill === "reading" ? READING_TEXTS.length : 0) +
              (skill === "interaction" ? INTERACTION_ITEMS.length : 0);
            return (
              <div key={skill} className="rounded-md border border-zinc-200 dark:border-zinc-800 p-3 text-sm flex justify-between">
                <span>{t(labelKey)}</span>
                <span className="text-zinc-500">
                  {total} {t("dash_items_in_bank")}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-medium mb-3">{t("dash_grammar_title")}</h2>
        <div className="space-y-2">
          {targets.length === 0 && <p className="text-zinc-500 text-sm">{t("dash_grammar_empty")}</p>}
          {targets.map((tg) => (
            <div key={tg.grammarTarget} className="flex items-center justify-between rounded-md border border-zinc-200 dark:border-zinc-800 p-3 text-sm">
              <span>{tg.grammarTarget}</span>
              <span
                className={`px-2 py-0.5 rounded-full text-xs ${
                  tg.stage === "blocked"
                    ? "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300"
                    : "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300"
                }`}
              >
                {tg.stage === "blocked" ? `${t("dash_stage_blocked")} (${tg.blockedReps})` : t("dash_stage_interleaved")}
              </span>
            </div>
          ))}
        </div>
      </section>

      <div className="flex flex-wrap gap-3">
        <Link href="/practice" className="rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium">
          {t("dash_start_practice")}
        </Link>
        <Link href="/write" className="rounded-md border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm font-medium">
          {t("dash_write_task")}
        </Link>
        <Link href="/vocab" className="rounded-md border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm font-medium">
          {t("nav_vocab")}
        </Link>
        <Link href="/reading" className="rounded-md border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm font-medium">
          {t("nav_reading")}
        </Link>
        <Link href="/speaking" className="rounded-md border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm font-medium">
          {t("nav_speaking")}
        </Link>
        <Link href="/listening" className="rounded-md border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm font-medium">
          {t("nav_listening")}
        </Link>
        <Link href="/interaction" className="rounded-md border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm font-medium">
          {t("nav_interaction")}
        </Link>
      </div>
    </div>
  );
}

function StatCard({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="rounded-md border border-zinc-200 dark:border-zinc-800 p-4">
      <p className="text-xs text-zinc-500">{label}</p>
      <p className="text-2xl font-semibold">{value}</p>
      <p className="text-xs text-zinc-500 mt-1">{sub}</p>
    </div>
  );
}
