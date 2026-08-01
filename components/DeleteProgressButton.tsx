"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppStore } from "@/lib/store";
import { useT } from "@/lib/i18n";

export default function DeleteProgressButton() {
  const router = useRouter();
  const resetAll = useAppStore((s) => s.resetAll);
  const [confirming, setConfirming] = useState(false);
  const t = useT();

  function handleDelete() {
    resetAll();
    router.push("/onboarding");
  }

  if (!confirming) {
    return (
      <button
        onClick={() => setConfirming(true)}
        className="rounded-md border border-red-300 dark:border-red-800 text-red-600 px-4 py-2 text-sm font-medium hover:bg-red-50 dark:hover:bg-red-950"
      >
        {t("del_button")}
      </button>
    );
  }

  return (
    <div className="rounded-md border border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-950 p-4 space-y-3">
      <p className="text-sm text-red-900 dark:text-red-200">{t("del_warning")}</p>
      <div className="flex gap-2">
        <button onClick={handleDelete} className="rounded-md bg-red-600 text-white px-4 py-2 text-sm font-medium">
          {t("del_confirm")}
        </button>
        <button
          onClick={() => setConfirming(false)}
          className="rounded-md border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm font-medium"
        >
          {t("del_cancel")}
        </button>
      </div>
    </div>
  );
}
