"use client";

import { useEffect } from "react";
import { useAppStore } from "@/lib/store";

export default function LanguageToggle() {
  const uiLang = useAppStore((s) => s.uiLang);
  const setUiLang = useAppStore((s) => s.setUiLang);

  useEffect(() => {
    document.documentElement.lang = uiLang;
  }, [uiLang]);

  return (
    <div className="flex items-center rounded-md border border-zinc-300 dark:border-zinc-700 text-xs overflow-hidden shrink-0">
      <button
        onClick={() => setUiLang("ru")}
        aria-label="Переключить интерфейс на русский"
        aria-pressed={uiLang === "ru"}
        className={`px-2 py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 ${
          uiLang === "ru" ? "bg-blue-600 text-white" : "text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800"
        }`}
      >
        RU
      </button>
      <button
        onClick={() => setUiLang("en")}
        aria-label="Switch interface to English"
        aria-pressed={uiLang === "en"}
        className={`px-2 py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 ${
          uiLang === "en" ? "bg-blue-600 text-white" : "text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800"
        }`}
      >
        EN
      </button>
    </div>
  );
}
