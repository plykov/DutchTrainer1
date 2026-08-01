import { TargetLevel } from "../types";

export interface ReadingText {
  id: string;
  title: string;
  level: TargetLevel;
  topic: string;
  body: string;
}

// Seed texts built entirely from the closed-class function words and the
// noun bundles in lib/content/nouns.ts, so the §4 coverage gate has
// something real to compute against at this seed vocabulary size.
export const READING_TEXTS: ReadingText[] = [
  {
    id: "reading-huisarts",
    title: "Bij de huisarts",
    level: "A2",
    topic: "gezondheid",
    body:
      "Ik heb een afspraak bij de huisarts. Mijn afspraak is morgen. Ik ga naar de huisarts. De huisarts is bij de gemeente.",
  },
  {
    id: "reading-huis",
    title: "Mijn huis",
    level: "A2",
    topic: "wonen",
    body:
      "Ik heb een huis. Mijn huis is bij de gemeente. Ik heb ook een kind. Mijn kind is bij het huis.",
  },
  {
    id: "reading-werk",
    title: "Werk en opleiding",
    level: "B1",
    topic: "werk",
    body:
      "Ik heb een opleiding. Mijn opleiding is bij de gemeente. Ik heb ook een sollicitatie. Mijn sollicitatie is voor een verzekering. Ik wil een verzekering.",
  },
];
