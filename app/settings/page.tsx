"use client";

import { useRequireProfile } from "@/lib/useRequireProfile";
import { useT } from "@/lib/i18n";
import FeedbackForm from "@/components/FeedbackForm";
import DeleteProgressButton from "@/components/DeleteProgressButton";

export default function SettingsPage() {
  const { profile, ready } = useRequireProfile();
  const t = useT();
  if (!ready || !profile) return null;

  return (
    <div className="max-w-xl mx-auto space-y-10">
      <div>
        <h1 className="text-2xl font-semibold mb-1">{t("settings_title")}</h1>
        <p className="text-zinc-500">{t("settings_intro")}</p>
      </div>

      <section>
        <h2 className="text-lg font-medium mb-3">{t("settings_profile_title")}</h2>
        <div className="rounded-md border border-zinc-200 dark:border-zinc-800 p-4 text-sm space-y-1">
          <p>
            {t("settings_track_label")}: <strong>{profile.legalTrack}</strong>
          </p>
          <p>
            {t("settings_goal_label")}: <strong>{profile.targetLevel}</strong>
          </p>
          <p>
            {t("settings_exam_label")}: <strong>{profile.examDate ?? t("settings_exam_unset")}</strong>
          </p>
          <p>
            {t("settings_lang_label")}: <strong>{profile.explanationLanguage}</strong>
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-medium mb-3">{t("settings_feedback_title")}</h2>
        <FeedbackForm />
      </section>

      <section>
        <h2 className="text-lg font-medium mb-3">{t("settings_data_title")}</h2>
        <p className="text-sm text-zinc-500 mb-3">{t("settings_data_note")}</p>
        <DeleteProgressButton />
      </section>
    </div>
  );
}
