"use client";

import { useRequireProfile } from "@/lib/useRequireProfile";
import { useAppStore } from "@/lib/store";
import { retentionTargetFor } from "@/lib/fsrs";
import { PRACTICE_ITEMS } from "@/lib/content/items";
import { NOUN_BUNDLES } from "@/lib/content/nouns";
import { SPEAKING_PROMPTS } from "@/lib/content/speakingPrompts";
import { LISTENING_ITEMS } from "@/lib/content/listeningItems";
import { knownLemmas } from "@/lib/coverage";
import Link from "next/link";

const SKILL_LABELS: Record<string, string> = {
  reading: "Чтение",
  listening: "Аудирование",
  writing: "Письмо",
  speaking: "Говорение",
  interaction: "Взаимодействие",
};

export default function DashboardPage() {
  const { profile, ready } = useRequireProfile();
  const grammarProgress = useAppStore((s) => s.grammarProgress);
  const cards = useAppStore((s) => s.cards);
  const reviewLog = useAppStore((s) => s.reviewLog);
  const streakDays = useAppStore((s) => s.streakDays);

  if (!ready || !profile) return null;

  const retention = retentionTargetFor(profile.examDate);
  const cardCount = Object.keys(cards).length;
  const targets = Object.values(grammarProgress);
  const graduated = targets.filter((t) => t.stage === "interleaved").length;
  const knownWordCount = knownLemmas(cards).size;

  // §6 readiness estimate: formative, gated on volume of recent unseen
  // review evidence — never shown as a raw-accuracy score.
  const readinessReady = reviewLog.length >= 40;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold mb-1">Обзор</h1>
        <p className="text-zinc-500">
          Трек: <strong>{profile.legalTrack}</strong> · Цель: <strong>{profile.targetLevel}</strong>
          {profile.examDate && (
            <>
              {" "}
              · Экзамен: <strong>{profile.examDate}</strong>
            </>
          )}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-4">
        <StatCard label="Серия" value={`${streakDays} дн.`} sub="Только за качественные повторения" />
        <StatCard label="Цель удержания FSRS" value={`${Math.round(retention * 100)}%`} sub={profile.examDate ? "Повышается за 6 недель до экзамена" : "Значение по умолчанию"} />
        <StatCard label="Карточки в системе" value={String(cardCount)} sub={`${graduated}/${targets.length || 0} грамм. целей смешаны`} />
        <StatCard
          label="Известные слова"
          value={`${knownWordCount}/${NOUN_BUNDLES.length}`}
          sub="Используется для порога чтения §4"
        />
      </div>

      <section>
        <h2 className="text-lg font-medium mb-3">Готовность к экзамену</h2>
        <div className="rounded-md border border-zinc-200 dark:border-zinc-800 p-4 text-sm">
          {readinessReady ? (
            <p>
              Формативная оценка (не официальный результат): на основе {reviewLog.length} последних повторений ваш
              прогресс стабилен. Продолжайте регулярную практику.
            </p>
          ) : (
            <p className="text-zinc-500">
              Недостаточно данных для оценки готовности. Нужно больше пройденных заданий во всех навыках
              ({reviewLog.length}/40). Точность ответов сама по себе не равна итоговому баллу экзамена.
            </p>
          )}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-medium mb-3">Прогресс по навыкам</h2>
        <div className="grid gap-2 sm:grid-cols-2">
          {Object.entries(SKILL_LABELS).map(([skill, label]) => {
            const total =
              PRACTICE_ITEMS.filter((i) => i.skill === skill).length +
              (skill === "speaking" ? SPEAKING_PROMPTS.length : 0) +
              (skill === "listening" ? LISTENING_ITEMS.length : 0);
            return (
              <div key={skill} className="rounded-md border border-zinc-200 dark:border-zinc-800 p-3 text-sm flex justify-between">
                <span>{label}</span>
                <span className="text-zinc-500">{total} заданий в банке</span>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-medium mb-3">Грамматические цели</h2>
        <div className="space-y-2">
          {targets.length === 0 && <p className="text-zinc-500 text-sm">Начните практику, чтобы увидеть прогресс.</p>}
          {targets.map((t) => (
            <div key={t.grammarTarget} className="flex items-center justify-between rounded-md border border-zinc-200 dark:border-zinc-800 p-3 text-sm">
              <span>{t.grammarTarget}</span>
              <span
                className={`px-2 py-0.5 rounded-full text-xs ${
                  t.stage === "blocked"
                    ? "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300"
                    : "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300"
                }`}
              >
                {t.stage === "blocked" ? `закрепление (${t.blockedReps})` : "смешанная практика"}
              </span>
            </div>
          ))}
        </div>
      </section>

      <div className="flex gap-3">
        <Link href="/practice" className="rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium">
          Начать практику
        </Link>
        <Link href="/write" className="rounded-md border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm font-medium">
          Задание на письмо
        </Link>
        <Link href="/vocab" className="rounded-md border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm font-medium">
          Словарь
        </Link>
        <Link href="/reading" className="rounded-md border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm font-medium">
          Чтение
        </Link>
        <Link href="/speaking" className="rounded-md border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm font-medium">
          Говорение
        </Link>
        <Link href="/listening" className="rounded-md border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm font-medium">
          Аудирование
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
