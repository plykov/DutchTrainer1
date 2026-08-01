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
  {
    id: "reading-baan",
    title: "Een nieuwe baan",
    level: "A2",
    topic: "werk",
    body:
      "Ik heb een baan. Mijn baan is bij de gemeente. Ik wil ook een contract. Mijn contract is bij de gemeente.",
  },
  {
    id: "reading-salaris",
    title: "Salaris en contract",
    level: "B1",
    topic: "werk",
    body:
      "Ik heb een contract. Mijn salaris is voor de baan. Ik heb ook een woning. Mijn woning is in de buurt.",
  },
  {
    id: "reading-ziekenhuis",
    title: "Naar het ziekenhuis",
    level: "A2",
    topic: "gezondheid",
    body:
      "Ik ga naar het ziekenhuis. Mijn medicijn is in het ziekenhuis. Ik heb ook een afspraak bij het ziekenhuis.",
  },
  {
    id: "reading-school",
    title: "Naar school",
    level: "A2",
    topic: "onderwijs",
    body:
      "Mijn kind gaat naar school. De school is bij de gemeente. Ik heb ook een cursus. Mijn cursus is bij de school.",
  },
  {
    id: "reading-paspoort",
    title: "Documenten voor de gemeente",
    level: "B1",
    topic: "gemeente",
    body:
      "Ik heb een paspoort. Mijn paspoort is bij de gemeente. Ik heb ook een formulier. Mijn formulier is voor de gemeente.",
  },
  {
    id: "reading-brief",
    title: "Een brief van de gemeente",
    level: "A2",
    topic: "gemeente",
    body:
      "Ik heb een brief. Mijn brief is van de gemeente. De brief is voor mijn afspraak bij de huisarts.",
  },
  {
    id: "reading-sollicitatie",
    title: "Opleiding en sollicitatie",
    level: "B1",
    topic: "werk",
    body:
      "Ik heb een opleiding. Mijn opleiding is bij een cursus. Ik heb ook een sollicitatie. Mijn sollicitatie is voor een baan.",
  },
];
