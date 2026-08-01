"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { buildFeedbackIssueUrl, buildFeedbackMailtoUrl, FeedbackCategory } from "@/lib/feedback";

const CATEGORIES: { value: FeedbackCategory; label: string }[] = [
  { value: "bug", label: "Нашёл(а) баг" },
  { value: "suggestion", label: "Предложение" },
  { value: "general", label: "Общий отзыв" },
];

export default function FeedbackForm() {
  const pathname = usePathname();
  const [category, setCategory] = useState<FeedbackCategory>("general");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function submitViaGithub() {
    const url = buildFeedbackIssueUrl({ category, message, page: pathname ?? undefined });
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  function submitViaEmail() {
    const url = buildFeedbackMailtoUrl({ category, message, page: pathname ?? undefined });
    window.location.href = url;
    setSent(true);
  }

  return (
    <div className="space-y-4">
      <fieldset>
        <legend className="text-sm font-medium mb-2">Тип отзыва</legend>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c.value}
              type="button"
              onClick={() => setCategory(c.value)}
              aria-pressed={category === c.value}
              className={`px-3 py-1.5 rounded-full text-sm border ${
                category === c.value ? "bg-blue-600 text-white border-blue-600" : "border-zinc-300 dark:border-zinc-700"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </fieldset>

      <label className="block">
        <span className="text-sm font-medium">Ваше сообщение</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          placeholder="Опишите, что произошло или что вы предлагаете улучшить..."
          className="mt-2 w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2"
        />
      </label>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={submitViaGithub}
          disabled={message.trim().length === 0}
          className="rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium disabled:opacity-40"
        >
          Отправить как GitHub issue
        </button>
        <button
          onClick={submitViaEmail}
          disabled={message.trim().length === 0}
          className="rounded-md border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm font-medium disabled:opacity-40"
        >
          Отправить по почте
        </button>
      </div>

      <p className="text-xs text-zinc-400">
        В приложении нет сервера — «Отправить как GitHub issue» откроет новую вкладку с уже заполненной формой на
        github.com (нужен аккаунт GitHub, чтобы её отправить). «Отправить по почте» откроет ваш почтовый клиент.
        Текст нигде не сохраняется автоматически.
      </p>

      {sent && <p className="text-sm text-emerald-600">Открыто в новой вкладке / в почтовом клиенте — проверьте, что оно не заблокировано.</p>}
    </div>
  );
}
