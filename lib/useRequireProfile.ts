"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppStore, useHasHydrated } from "./store";

/** Redirects to /onboarding if no learner profile exists yet (§2). */
export function useRequireProfile() {
  const router = useRouter();
  const profile = useAppStore((s) => s.profile);
  const hydrated = useHasHydrated();

  useEffect(() => {
    if (hydrated && !profile) router.replace("/onboarding");
  }, [hydrated, profile, router]);

  return { profile, ready: hydrated && !!profile };
}
