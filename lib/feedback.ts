export type FeedbackCategory = "bug" | "suggestion" | "general";

const CATEGORY_LABEL: Record<FeedbackCategory, string> = {
  bug: "Баг",
  suggestion: "Предложение",
  general: "Общий отзыв",
};

const REPO_OWNER = "plykov";
const REPO_NAME = "DutchTrainer1";
const FEEDBACK_EMAIL = "plykov@gmail.com";

// No backend on a static export, so feedback becomes a pre-filled GitHub
// issue on the (public) repo — no server needed, and it's visible to the
// app owner without any extra infrastructure.
export function buildFeedbackIssueUrl(opts: { category: FeedbackCategory; message: string; page?: string }): string {
  const title = `[Отзыв] ${CATEGORY_LABEL[opts.category]}: ${opts.message.slice(0, 60).trim()}`;
  const bodyLines = [
    `**Категория:** ${CATEGORY_LABEL[opts.category]}`,
    "",
    "**Сообщение:**",
    opts.message,
  ];
  if (opts.page) bodyLines.push("", `**Страница:** ${opts.page}`);
  bodyLines.push("", "---", "_Отправлено через форму обратной связи в приложении (/settings)._");

  const params = new URLSearchParams({
    title,
    body: bodyLines.join("\n"),
    labels: "feedback",
  });
  return `https://github.com/${REPO_OWNER}/${REPO_NAME}/issues/new?${params.toString()}`;
}

export function buildFeedbackMailtoUrl(opts: { category: FeedbackCategory; message: string; page?: string }): string {
  const subject = `[Отзыв] ${CATEGORY_LABEL[opts.category]}`;
  const bodyLines = [opts.message, "", opts.page ? `Страница: ${opts.page}` : ""].filter(Boolean);
  const params = new URLSearchParams({ subject, body: bodyLines.join("\n") });
  return `mailto:${FEEDBACK_EMAIL}?${params.toString()}`;
}
