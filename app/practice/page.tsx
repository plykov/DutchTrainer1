"use client";

import { useRequireProfile } from "@/lib/useRequireProfile";
import PracticeSession from "@/components/PracticeSession";

export default function PracticePage() {
  const { ready } = useRequireProfile();
  if (!ready) return null;

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold mb-1">Oefenen</h1>
      <p className="text-zinc-500 mb-6">
        Новая грамматика сначала отрабатывается изолированно, затем смешивается со похожими темами.
      </p>
      <PracticeSession />
    </div>
  );
}
