"use client";

import { useRequireProfile } from "@/lib/useRequireProfile";
import SpeakingSession from "@/components/SpeakingSession";

export default function SpeakingPage() {
  const { ready } = useRequireProfile();
  if (!ready) return null;

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-1">Говорение</h1>
      <p className="text-zinc-500 mb-6">
        Elicited imitation: прочитайте предложение вслух, послушайте свою запись и оцените себя сами. Без
        автоматической оценки произношения — см. README о том, почему.
      </p>
      <SpeakingSession />
    </div>
  );
}
