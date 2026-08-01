"use client";

import { useRequireProfile } from "@/lib/useRequireProfile";
import FeedbackForm from "@/components/FeedbackForm";
import DeleteProgressButton from "@/components/DeleteProgressButton";

export default function SettingsPage() {
  const { profile, ready } = useRequireProfile();
  if (!ready || !profile) return null;

  return (
    <div className="max-w-xl mx-auto space-y-10">
      <div>
        <h1 className="text-2xl font-semibold mb-1">Настройки</h1>
        <p className="text-zinc-500">Профиль, обратная связь и управление данными.</p>
      </div>

      <section>
        <h2 className="text-lg font-medium mb-3">Профиль</h2>
        <div className="rounded-md border border-zinc-200 dark:border-zinc-800 p-4 text-sm space-y-1">
          <p>
            Трек: <strong>{profile.legalTrack}</strong>
          </p>
          <p>
            Цель: <strong>{profile.targetLevel}</strong>
          </p>
          <p>
            Экзамен: <strong>{profile.examDate ?? "не указана"}</strong>
          </p>
          <p>
            Язык объяснений: <strong>{profile.explanationLanguage}</strong>
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-medium mb-3">Обратная связь для тестировщиков</h2>
        <FeedbackForm />
      </section>

      <section>
        <h2 className="text-lg font-medium mb-3">Данные</h2>
        <p className="text-sm text-zinc-500 mb-3">
          Все данные хранятся только в этом браузере (localStorage) — ничего не отправляется на сервер, кроме того,
          что вы сами явно отправите через форму обратной связи выше.
        </p>
        <DeleteProgressButton />
      </section>
    </div>
  );
}
