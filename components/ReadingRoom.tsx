"use client";

import { useMemo, useState } from "react";
import { useAppStore } from "@/lib/store";
import { computeCoverage, knownLemmas, tokenize } from "@/lib/coverage";
import { READING_TEXTS } from "@/lib/content/readingTexts";
import { NOUN_BUNDLES } from "@/lib/content/nouns";
import { useT } from "@/lib/i18n";
import type { I18nKey } from "@/lib/i18n";
import Link from "next/link";

const MODE_LABEL_KEY: Record<string, I18nKey> = {
  intensive: "reading_mode_intensive",
  extensive: "reading_mode_extensive",
  confidence: "reading_mode_confidence",
};

const MODE_COLOR: Record<string, string> = {
  intensive: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
  extensive: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
  confidence: "bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300",
};

export default function ReadingRoom() {
  const t = useT();
  const cards = useAppStore((s) => s.cards);
  const known = useMemo(() => knownLemmas(cards), [cards]);
  const [textId, setTextId] = useState(READING_TEXTS[0].id);

  const text = READING_TEXTS.find((t) => t.id === textId)!;
  const result = useMemo(() => computeCoverage(text.body, known), [text, known]);

  const lemmaByForm = useMemo(() => {
    const map = new Map<string, string>();
    for (const b of NOUN_BUNDLES) {
      for (const form of [b.lemma, b.plural, b.diminutive, b.diminutivePlural]) map.set(form.toLowerCase(), b.lemma);
    }
    return map;
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {READING_TEXTS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTextId(t.id)}
            className={`px-3 py-1.5 rounded-full text-sm border ${
              t.id === textId ? "bg-blue-600 text-white border-blue-600" : "border-zinc-300 dark:border-zinc-700"
            }`}
          >
            {t.title} ({t.level})
          </button>
        ))}
      </div>

      <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium">{text.title}</h2>
          <span className={`px-2 py-0.5 rounded-full text-xs ${MODE_COLOR[result.mode]}`}>
            {t("reading_known_coverage", { n: Math.round(result.coverage * 100) })}
          </span>
        </div>

        <p className="text-sm text-zinc-500 mb-4">{t(MODE_LABEL_KEY[result.mode])}</p>

        <p className="text-lg leading-relaxed">
          {tokenize(text.body).length > 0 &&
            text.body.split(/(\s+)/).map((chunk, i) => {
              const clean = chunk.toLowerCase().replace(/[^\p{L}]/gu, "");
              if (!clean || /\s+/.test(chunk)) return <span key={i}>{chunk}</span>;
              const isUnknown = result.unknownTokens.includes(clean);
              if (result.mode === "intensive" && isUnknown) {
                const lemma = lemmaByForm.get(clean);
                return (
                  <span
                    key={i}
                    className="underline decoration-dotted decoration-amber-500 cursor-help"
                    title={lemma ? t("reading_unknown_word_lemma", { lemma }) : t("reading_unknown_word")}
                  >
                    {chunk}
                  </span>
                );
              }
              return <span key={i}>{chunk}</span>;
            })}
        </p>

        {result.mode === "intensive" && (
          <div className="mt-4 rounded-md bg-amber-50 dark:bg-amber-950 p-3 text-sm text-amber-900 dark:text-amber-200">
            {t("reading_below_gate")} {" "}
            <Link href="/vocab" className="underline">
              {t("reading_vocab_link")}
            </Link>
            .
          </div>
        )}
      </div>
    </div>
  );
}
