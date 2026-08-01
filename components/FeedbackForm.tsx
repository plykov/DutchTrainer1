"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { useT } from "@/lib/i18n";
import { buildFeedbackIssueUrl, buildFeedbackMailtoUrl, FeedbackCategory } from "@/lib/feedback";

export default function FeedbackForm() {
  const pathname = usePathname();
  const t = useT();
  const [category, setCategory] = useState<FeedbackCategory>("general");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const CATEGORIES: { value: FeedbackCategory; labelKey: "fb_bug" | "fb_suggestion" | "fb_general" }[] = [
    { value: "bug", labelKey: "fb_bug" },
    { value: "suggestion", labelKey: "fb_suggestion" },
    { value: "general", labelKey: "fb_general" },
  ];

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
        <legend className="text-sm font-medium mb-2">{t("fb_type_legend")}</legend>
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
              {t(c.labelKey)}
            </button>
          ))}
        </div>
      </fieldset>

      <label className="block">
        <span className="text-sm font-medium">{t("fb_message_label")}</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          placeholder={t("fb_message_placeholder")}
          className="mt-2 w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2"
        />
      </label>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={submitViaGithub}
          disabled={message.trim().length === 0}
          className="rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium disabled:opacity-40"
        >
          {t("fb_submit_github")}
        </button>
        <button
          onClick={submitViaEmail}
          disabled={message.trim().length === 0}
          className="rounded-md border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm font-medium disabled:opacity-40"
        >
          {t("fb_submit_email")}
        </button>
      </div>

      <p className="text-xs text-zinc-400">{t("fb_note")}</p>

      {sent && <p className="text-sm text-emerald-600">{t("fb_sent")}</p>}
    </div>
  );
}
