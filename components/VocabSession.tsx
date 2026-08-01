"use client";

import { useMemo, useState } from "react";
import { useAppStore } from "@/lib/store";
import { useT } from "@/lib/i18n";
import { buildVocabQueue, nounCardId } from "@/lib/vocabQueue";
import { Grade } from "@/lib/fsrs";
import NextExercise from "@/components/NextExercise";

export default function VocabSession() {
  const cards = useAppStore((s) => s.cards);
  const review = useAppStore((s) => s.review);
  const t = useT();

  const queue = useMemo(() => buildVocabQueue(cards).slice(0, 15), [cards]);
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [startedAt, setStartedAt] = useState(() => Date.now());

  const bundle = queue[index];

  if (!bundle) {
    return (
      <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-8 text-center">
        <p className="text-lg font-medium mb-2">{t("vocab_all_done")}</p>
        <p className="text-zinc-500">{t("vocab_new_later")}</p>
        <NextExercise currentHref="/vocab" />
      </div>
    );
  }

  function grade(g: Grade) {
    const latencyMs = Date.now() - startedAt;
    review({ itemId: `noun:${bundle.lemma}`, mode: "receptive" }, g, latencyMs);
    setIndex((i) => i + 1);
    setRevealed(false);
    setStartedAt(Date.now());
  }

  return (
    <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-6">
      <div className="flex items-center justify-between text-xs text-zinc-500 mb-4">
        <span>
          {index + 1} / {queue.length}
        </span>
        <span>{cards[nounCardId(bundle.lemma)] ? t("vocab_review") : t("vocab_new")}</span>
      </div>

      <div className="text-center py-8">
        <p className="text-3xl font-semibold">{bundle.lemma}</p>
        {!revealed && <p className="text-zinc-400 mt-2 text-sm">{t("vocab_recall_hint")}</p>}
      </div>

      {revealed && (
        <div className="rounded-md bg-zinc-100 dark:bg-zinc-900 p-4 text-sm space-y-1">
          <p>
            <strong>{t("vocab_article")}:</strong> {bundle.article} {bundle.lemma}
          </p>
          <p>
            <strong>{t("vocab_plural")}:</strong> {bundle.plural}
          </p>
          <p>
            <strong>{t("vocab_diminutive")}:</strong> {bundle.diminutive} / {bundle.diminutivePlural}
          </p>
          <p>
            <strong>{t("vocab_with_adj")}:</strong> {bundle.adjAgreement.indefinite} · {bundle.adjAgreement.definite}
          </p>
          <p>
            <strong>{t("vocab_collocations")}:</strong> {bundle.collocations.join(", ")}
          </p>
        </div>
      )}

      <div className="mt-6 flex justify-end gap-2">
        {!revealed ? (
          <button
            onClick={() => setRevealed(true)}
            className="rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium"
          >
            {t("action_show")}
          </button>
        ) : (
          <div className="flex gap-2">
            <button onClick={() => grade("again")} className="rounded-md bg-red-600 text-white px-3 py-2 text-sm">
              {t("grade_again")}
            </button>
            <button onClick={() => grade("hard")} className="rounded-md bg-amber-500 text-white px-3 py-2 text-sm">
              {t("grade_hard")}
            </button>
            <button onClick={() => grade("good")} className="rounded-md bg-emerald-600 text-white px-3 py-2 text-sm">
              {t("grade_good")}
            </button>
            <button onClick={() => grade("easy")} className="rounded-md bg-sky-600 text-white px-3 py-2 text-sm">
              {t("grade_easy")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
