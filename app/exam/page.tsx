"use client";

import { useState } from "react";
import { useRequireProfile } from "@/lib/useRequireProfile";
import ExamRunner from "@/components/ExamRunner";
import ExamListeningRunner from "@/components/ExamListeningRunner";
import ExamSpeakingRunner from "@/components/ExamSpeakingRunner";
import WritingTask from "@/components/WritingTask";
import { KNM_ITEMS } from "@/lib/content/knmItems";
import { LEZEN_ITEMS } from "@/lib/content/lezenItems";
import { PRACTICE_ITEMS } from "@/lib/content/items";
import { WRITING_EXAM_ITEMS } from "@/lib/content/writingExamItems";
import { ShortWriteItem } from "@/lib/types";

const STAATSEXAMEN_P1 = [
  { skill: "Lezen", constraint: "110 мин, 6 текстов, ~36 вопросов MC [VERIFY]. Разрешён Van Dale Pocketwoordenboek NT2." },
  { skill: "Luisteren", constraint: "90 мин, ~40 вопросов, 5+ фрагментов (1–3 видео). Один прогон, без повтора. 25 сек на предварительное чтение вопроса." },
  { skill: "Schrijven", constraint: "100 мин. 8 zinstaken + 2 deelschrijftaken + 2 korte schrijftaken. Van Dale разрешён, проверка орфографии — нет." },
  { skill: "Spreken", constraint: "~25 мин. 8 коротких (20с) + 8 средних (30с) заданий, темп по сигналу, без возврата назад." },
];

type ActiveSim = "none" | "knm" | "lezen" | "luisteren" | "schrijven" | "spreken";

export default function ExamPage() {
  const { ready } = useRequireProfile();
  const [active, setActive] = useState<ActiveSim>("none");
  const [schrijvenTaskId, setSchrijvenTaskId] = useState<string | null>(null);

  if (!ready) return null;

  const baseWriteItem = PRACTICE_ITEMS.find((i) => i.taskType === "short_write") as ShortWriteItem | undefined;
  const writeItems = baseWriteItem ? [baseWriteItem, ...WRITING_EXAM_ITEMS] : WRITING_EXAM_ITEMS;
  const selectedWriteItem = writeItems.find((i) => i.id === schrijvenTaskId);

  if (active === "knm") {
    return (
      <div className="max-w-2xl mx-auto">
        <ExamRunner
          items={KNM_ITEMS}
          onExit={() => setActive("none")}
          passNote="Демо из 6 вопросов. Настоящий KNM: 40 вопросов, порог 28/40, 45 минут [VERIFY]."
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
          passNote="Демо из 15 вопросов. Настоящий Lezen: ~36 вопросов, 110 минут, 6 текстов [VERIFY]."
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
      <div className="max-w-2xl mx-auto space-y-4">
        <button
          onClick={() => {
            if (selectedWriteItem) setSchrijvenTaskId(null);
            else setActive("none");
          }}
          className="text-sm text-zinc-500 underline"
        >
          ← {selectedWriteItem ? "Выбрать другое задание" : "Выйти из симуляции"}
        </button>
        {selectedWriteItem ? (
          <WritingTask item={selectedWriteItem} examMode />
        ) : (
          <div className="space-y-2">
            <p className="text-sm text-zinc-500">Выберите задание ({writeItems.length} доступно):</p>
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
        <h1 className="text-2xl font-semibold mb-1">Экзаменационные ограничения</h1>
        <p className="text-zinc-500">
          Ниже — ограничения по времени и формату из блуепринта, и пять рабочих демо-симуляций механики экзамена по
          каждому разделу — KNM, Lezen, Luisteren, Schrijven, Spreken (таймер, без возврата назад, без обратной связи
          до конца, где применимо). Это не полноразмерные экзамены — банк заданий пока слишком мал для этого.
        </p>
      </div>

      <section className="flex flex-wrap gap-3">
        <button
          onClick={() => setActive("knm")}
          className="rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium"
        >
          Демо-симуляция KNM (21 вопрос)
        </button>
        <button
          onClick={() => setActive("lezen")}
          className="rounded-md border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm font-medium"
        >
          Демо-симуляция Lezen (15 вопросов)
        </button>
        <button
          onClick={() => setActive("luisteren")}
          className="rounded-md border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm font-medium"
        >
          Демо-симуляция Luisteren (15 вопросов)
        </button>
        <button
          onClick={() => setActive("schrijven")}
          className="rounded-md border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm font-medium"
        >
          Демо-симуляция Schrijven ({writeItems.length} заданий, с таймером)
        </button>
        <button
          onClick={() => setActive("spreken")}
          className="rounded-md border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm font-medium"
        >
          Демо-симуляция Spreken (15 заданий, темп по сигналу)
        </button>
      </section>

      <div className="rounded-md border border-amber-300 bg-amber-50 dark:bg-amber-950 dark:border-amber-800 p-4 text-sm">
        <p className="font-medium mb-1">Важно про KNM</p>
        <p>
          Модуль KNM пересобран с 1 июля 2025 года: 40 вопросов, 45 минут, порог — 28/40, обновлённые eindtermen
          (усилен акцент на самоопределении женщин и знаниях о Холокосте). Старые материалы KNM больше не
          соответствуют экзамену.
        </p>
      </div>

      <section>
        <h2 className="text-lg font-medium mb-3">Staatsexamen NT2 Programma I</h2>
        <div className="space-y-2 text-sm">
          {STAATSEXAMEN_P1.map((row) => (
            <div key={row.skill} className="rounded-md border border-zinc-200 dark:border-zinc-800 p-3">
              <p className="font-medium">{row.skill}</p>
              <p className="text-zinc-500">{row.constraint}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-zinc-400 mt-2">
          Цифры отмечены [VERIFY] в исходном скоупе и требуют подтверждения на staatsexamensnt2.nl перед публикацией
          боевого контента.
        </p>
      </section>

      <div className="rounded-md border border-zinc-200 dark:border-zinc-800 p-4 text-sm">
        <p className="font-medium mb-1">Официальные материалы защищены законом</p>
        <p className="text-zinc-500">
          Все задания в этом приложении — авторские, смоделированные по открытому блуепринту, а не скопированные
          вопросы. Обязательно один раз потренируйтесь в реальной среде FACET (oefenexamensnt2.nl) — она плохо
          работает на телефоне, используйте компьютер.
        </p>
      </div>
    </div>
  );
}
