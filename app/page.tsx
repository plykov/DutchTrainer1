"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppStore, useHasHydrated } from "@/lib/store";
import { useT } from "@/lib/i18n";

export default function Home() {
  const t = useT();
  const router = useRouter();
  const profile = useAppStore((s) => s.profile);
  const hydrated = useHasHydrated();

  useEffect(() => {
    if (!hydrated) return;
    router.replace(profile ? "/dashboard" : "/onboarding");
  }, [hydrated, profile, router]);

  return (
    <div className="flex items-center justify-center py-24 text-zinc-500">
      {t("loading")}
    </div>
  );
}
