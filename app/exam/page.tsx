"use client";

import { useState } from "react";
import { useRequireProfile } from "@/lib/useRequireProfile";
import ExamRunner from "@/components/ExamRunner";
import ExamListeningRunner from "@/components/ExamListeningRunner";
import ExamSpeakingRunner from "@/components/ExamSpeakingRunner";
import SchrijvenStructuredRunner from "@/components/SchrijvenStructuredRunner";
import WritingTask from "@/components/WritingTask";
import { KNM_ITEMS } from "@/lib/content/knmItems";
import { LEZEN_ITEMS } from "@/lib/content/lezenItems";
import { LISTENING_EXAM_ITEMS } from "@/lib/content/listeningExamItems";
import { PRACTICE_ITEMS } from "@/lib/content/items";
import { WRITING_EXAM_ITEMS } from "@/lib/content/writingExamItems";
import { ShortWriteItem } from "@/lib/types";
import { useT, useUiLang } from "@/lib/i18n";

type ActiveSim = "none" | "knm" | "lezen" | "luisteren" | "schrijven" | "schrijven-vrij" | "spreken";

// Russian noun agreement after a count: 1/21/31... -> singular, 2-4/22-24...
// -> "few", everything else (5-20, 25-30...) -> "many".
function ruQuestionCount(n: number): string {
  const mod100 = n % 100;
  const mod10 = n % 10;
  if (mod100 >= 11 && mod100 <= 14) return `${n} вопросов`;
  if (mod10 === 1) return `${n} вопрос`;
  if (mod10 >= 2 && mod10 <= 4) return `${n} вопроса`;
  return `${n} вопросов`;
}

export default function ExamPage() {
  const t = useT();
  const uiLang = useUiLang();
  const { ready } = useRequireProfile();
  const [active, setActive] = useState<ActiveSim>("none");
  const [schrijvenTaskId, setSchrijvenTaskId] = useState<string | null>(null);

  if (!ready) return null;

  const baseWriteItem = PRACTICE_ITEMS.find((i) => i.taskType === "short_write") as ShortWriteItem | undefined;
  const writeItems = baseWriteItem ? [baseWriteItem, ...WRITING_EXAM_ITEMS] : WRITING_EXAM_ITEMS;
  const selectedWriteItem = writeItems.find((i) => i.id === schrijvenTaskId);
  const questionCount = (n: number) => (uiLang === "ru" ? ruQuestionCount(n) : t("exam_question_count", { n }));
  const staatsexamenP1 = [
    { skill: "Lezen", constraint: t("exam_p1_lezen_constraint") },
    { skill: "Luisteren", constraint: t("exam_p1_listening_constraint") },
    { skill: "Schrijven", constraint: t("exam_p1_writing_constraint") },
    { skill: "Spreken", constraint: t("exam_p1_speaking_constraint") },
  ];

  if (active === "knm") {
    return (
      <div className="max-w-2xl mx-auto">
        <ExamRunner
          items={KNM_ITEMS}
          onExit={() => setActive("none")}
          passNote={t("exam_knm_pass_note")}
        />
      </div>
    );
  }

  if (active === "lezen") {
    return (
      <div className="max-w-2xl mx-auto">
        <ExamRunner
          items={LEZEN_ITEMS}
          onExit={() => setActive("none")}
          passNote={t("exam_lezen_pass_note")}
        />
      </div>
    );
  }

  if (active === "luisteren") {
    return (
      <div className="max-w-2xl mx-auto">
        <ExamListeningRunner onExit={() => setActive("none")} />
      </div>
    );
  }

  if (active === "spreken") {
    return (
      <div className="max-w-2xl mx-auto">
        <ExamSpeakingRunner onExit={() => setActive("none")} />
      </div>
    );
  }

  if (active === "schrijven") {
    return (
      <div className="max-w-2xl mx-auto">
        <SchrijvenStructuredRunner onExit={() => setActive("none")} />
      </div>
    );
  }

  if (active === "schrijven-vrij") {
    return (
      <div className="max-w-2xl mx-auto space-y-4">
        <button
          onClick={() => {
            if (selectedWriteItem) setSchrijvenTaskId(null);
            else setActive("none");
          }}
          className="text-sm text-zinc-500 underline"
        >
          ← {selectedWriteItem ? t("exam_choose_other") : t("exam_exit_simulation")}
        </button>
        {selectedWriteItem ? (
          <WritingTask item={selectedWriteItem} examMode />
        ) : (
          <div className="space-y-2">
            <p className="text-sm text-zinc-500">{t("exam_choose_writing", { n: writeItems.length })}</p>
            {writeItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setSchrijvenTaskId(item.id)}
                className="w-full text-left rounded-md border border-zinc-200 dark:border-zinc-800 p-3 text-sm hover:border-blue-600"
              >
                {item.taskPrompt}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-semibold mb-1">{t("exam_constraints_title")}</h1>
        <p className="text-zinc-500">{t("exam_constraints_intro")}</p>
      </div>

      <section className="flex flex-wrap gap-3">
        <button
          onClick={() => setActive("knm")}
          className="rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium"
        >
          {t("exam_demo_knm", { count: questionCount(KNM_ITEMS.length) })}
        </button>
        <button
          onClick={() => setActive("lezen")}
          className="rounded-md border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm font-medium"
        >
          {t("exam_demo_lezen", { count: questionCount(LEZEN_ITEMS.length) })}
        </button>
        <button
          onClick={() => setActive("luisteren")}
          className="rounded-md border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm font-medium"
        >
          {t("exam_demo_luisteren", { count: questionCount(LISTENING_EXAM_ITEMS.length) })}
        </button>
        <button
          onClick={() => setActive("schrijven")}
          className="rounded-md border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm font-medium"
        >
          {t("exam_demo_schrijven")}
        </button>
        <button
          onClick={() => setActive("schrijven-vrij")}
          className="rounded-md border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm font-medium"
        >
          {t("exam_free_schrijven", { n: writeItems.length })}
        </button>
        <button
          onClick={() => setActive("spreken")}
          className="rounded-md border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm font-medium"
        >
          {t("exam_demo_spreken")}
        </button>
      </section>

      <div className="rounded-md border border-amber-300 bg-amber-50 dark:bg-amber-950 dark:border-amber-800 p-4 text-sm">
        <p className="font-medium mb-1">{t("exam_knm_note_title")}</p>
        <p>{t("exam_knm_note")}</p>
      </div>

      <section>
        <h2 className="text-lg font-medium mb-3">{t("exam_p1_reference_title")}</h2>
        <p className="text-sm text-zinc-500 mb-3">{t("exam_p1_reference_intro")}</p>
        <div className="space-y-2 text-sm">
          {staatsexamenP1.map((row) => (
            <div key={row.skill} className="rounded-md border border-zinc-200 dark:border-zinc-800 p-3">
              <p className="font-medium">{row.skill}</p>
              <p className="text-zinc-500">{row.constraint}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-zinc-400 mt-2">{t("exam_verified_note")}</p>
      </section>

      <div className="rounded-md border border-zinc-200 dark:border-zinc-800 p-4 text-sm">
        <p className="font-medium mb-1">{t("exam_copyright_title")}</p>
        <p className="text-zinc-500">{t("exam_copyright_note")}</p>
      </div>
    </div>
  );
}
