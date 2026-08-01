"use client";

import { useState } from "react";
import { useRequireProfile } from "@/lib/useRequireProfile";
import ExamRunner from "@/components/ExamRunner";
import WritingTask from "@/components/WritingTask";
import { KNM_ITEMS } from "@/lib/content/knmItems";
import { PRACTICE_ITEMS } from "@/lib/content/items";
import { ShortWriteItem } from "@/lib/types";

const STAATSEXAMEN_P1 = [
  { skill: "Lezen", constraint: "110 мин, 6 текстов, ~36 вопросов MC [VERIFY]. Разрешён Van Dale Pocketwoordenboek NT2." },
  { skill: "Luisteren", constraint: "90 мин, ~40 вопросов, 5+ фрагментов (1–3 видео). Один прогон, без повтора. 25 сек на предварительное чтение вопроса." },
  { skill: "Schrijven", constraint: "100 мин. 8 zinstaken + 2 deelschrijftaken + 2 korte schrijftaken. Van Dale разрешён, проверка орфографии — нет." },
  { skill: "Spreken", constraint: "~25 мин. 8 коротких (20с) + 8 средних (30с) заданий, темп по сигналу, без возврата назад." },
];

type ActiveSim = "none" | "knm" | "schrijven";

export default function ExamPage() {
  const { ready } = useRequireProfile();
  const [active, setActive] = useState<ActiveSim>("none");

  if (!ready) return null;

  const writeItem = PRACTICE_ITEMS.find((i) => i.taskType === "short_write") as ShortWriteItem | undefined;

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

  if (active === "schrijven" && writeItem) {
    return (
      <div className="max-w-2xl mx-auto space-y-4">
        <button onClick={() => setActive("none")} className="text-sm text-zinc-500 underline">
          ← Выйти из симуляции
        </button>
        <WritingTask item={writeItem} examMode />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-semibold mb-1">Экзаменационные ограничения</h1>
        <p className="text-zinc-500">
          Ниже — ограничения по времени и формату из блуепринта, и две рабочие демо-симуляции механики экзамена
          (таймер, без возврата назад, без обратной связи до конца). Это не полноразмерные экзамены — банк заданий
          пока слишком мал для этого.
        </p>
      </div>

      <section className="flex flex-wrap gap-3">
        <button
          onClick={() => setActive("knm")}
          className="rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium"
        >
          Демо-симуляция KNM (6 вопросов)
        </button>
        {writeItem && (
          <button
            onClick={() => setActive("schrijven")}
            className="rounded-md border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm font-medium"
          >
            Демо-симуляция Schrijven (с таймером)
          </button>
        )}
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
