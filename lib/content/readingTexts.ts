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
  {
    id: "reading-sleutel",
    title: "De sleutel van het huis",
    level: "A2",
    topic: "wonen",
    body: "Ik heb een sleutel. Mijn sleutel is van het huis. Ik heb ook een sleutel van de gemeente.",
  },
  {
    id: "reading-dokter",
    title: "Bij de dokter",
    level: "A2",
    topic: "gezondheid",
    body:
      "Ik ga naar de dokter. Mijn dokter is bij de gemeente. Ik heb ook een recept. Mijn recept is van de dokter.",
  },
  {
    id: "reading-tandarts",
    title: "Bij de tandarts",
    level: "A2",
    topic: "gezondheid",
    body: "Ik heb een afspraak bij de tandarts. Mijn afspraak is morgen. Ik ga naar de tandarts.",
  },
  {
    id: "reading-pas",
    title: "Mijn pas",
    level: "A2",
    topic: "gemeente",
    body:
      "Ik heb een pas. Mijn pas is van de gemeente. Ik heb ook een paspoort. Mijn paspoort is bij de gemeente.",
  },
  {
    id: "reading-inkomen",
    title: "Inkomen en salaris",
    level: "B1",
    topic: "werk",
    body: "Ik heb een inkomen. Mijn inkomen is van mijn baan. Ik heb ook een salaris. Mijn salaris is bij de baan.",
  },
  {
    id: "reading-adres",
    title: "Mijn adres",
    level: "A2",
    topic: "wonen",
    body: "Ik heb een adres. Mijn adres is bij de gemeente. Ik heb ook een woning. Mijn woning is bij het adres.",
  },
  {
    id: "reading-les",
    title: "Nederlandse les",
    level: "A2",
    topic: "onderwijs",
    body: "Ik heb een les. Mijn les is bij de school. Ik heb ook een cursus. Mijn cursus is bij de les.",
  },
  {
    id: "reading-rekening",
    title: "Een hoge rekening",
    level: "B1",
    topic: "geld",
    body:
      "Ik heb een rekening. Mijn rekening is voor de woning. Ik heb ook een contract. Mijn contract is voor de rekening.",
  },
  {
    id: "reading-polis",
    title: "Een polis afsluiten",
    level: "B1",
    topic: "geld",
    body:
      "Ik heb een polis. Mijn polis is voor de verzekering. Ik heb ook een contract. Mijn contract is voor de polis.",
  },
  {
    id: "reading-ziekenhuis-2",
    title: "Ziekenhuis en medicijn",
    level: "A2",
    topic: "gezondheid",
    body:
      "Ik ga naar het ziekenhuis. Mijn medicijn is van de dokter. Ik heb ook een recept. Mijn recept is voor het medicijn.",
  },

  // --- +100 batch: mechanically generated from lib/content/nouns.ts so every
  // token is guaranteed coverage-gate-valid (closed-class function words or
  // a known noun form) -- see lib/coverage.ts. Semantically loose in places
  // (e.g. "Ik moet naar het formulier gaan"), consistent with the seed
  // texts above, which have the same constraint.
  {
    id: "reading-gen-wonen-1",
    title: "Wonen (1)",
    level: "A2",
    topic: "wonen",
    body:
      "Ik heb een huis. Mijn huis is bij de gemeente. Ik heb ook een sleutel. Mijn sleutel is bij het huis.",
  },
  {
    id: "reading-gen-wonen-2",
    title: "Wonen (2)",
    level: "A2",
    topic: "wonen",
    body:
      "Ik heb een sleutel en een adres. Ik wil ook een tuin. Mijn sleutel en mijn adres zijn bij de gemeente.",
  },
  {
    id: "reading-gen-wonen-3",
    title: "Wonen (3)",
    level: "A2",
    topic: "wonen",
    body:
      "Ik heb twee adressen. Mijn adressen zijn bij de tuin. Ik wil drie adressen.",
  },
  {
    id: "reading-gen-wonen-4",
    title: "Wonen (4)",
    level: "A2",
    topic: "wonen",
    body:
      "Ik moet naar de tuin gaan. Ik kan niet naar de trap gaan. Ik ga morgen naar de tuin.",
  },
  {
    id: "reading-gen-wonen-5",
    title: "Wonen (5)",
    level: "A2",
    topic: "wonen",
    body:
      "Ik heb een trap. Mijn trap is bij de gemeente. Ik heb ook een muur. Mijn muur is bij de trap.",
  },
  {
    id: "reading-gen-wonen-6",
    title: "Wonen (6)",
    level: "A2",
    topic: "wonen",
    body:
      "Ik heb een muur en een dak. Ik wil ook een vloer. Mijn muur en mijn dak zijn bij de gemeente.",
  },
  {
    id: "reading-gen-wonen-7",
    title: "Wonen (7)",
    level: "A2",
    topic: "wonen",
    body:
      "Ik heb twee daken. Mijn daken zijn bij de vloer. Ik wil drie daken.",
  },
  {
    id: "reading-gen-wonen-8",
    title: "Wonen (8)",
    level: "B1",
    topic: "wonen",
    body:
      "Ik moet naar de vloer gaan. Ik kan niet naar het plafond gaan. Ik ga morgen naar de vloer.",
  },
  {
    id: "reading-gen-wonen-9",
    title: "Wonen (9)",
    level: "B1",
    topic: "wonen",
    body:
      "Ik heb een plafond. Mijn plafond is bij de gemeente. Ik heb ook een gordijn. Mijn gordijn is bij het plafond.",
  },
  {
    id: "reading-gen-wonen-10",
    title: "Wonen (10)",
    level: "B1",
    topic: "wonen",
    body:
      "Ik heb een gordijn en een balkon. Ik wil ook een huis. Mijn gordijn en mijn balkon zijn bij de gemeente.",
  },
  {
    id: "reading-gen-gezondheid-1",
    title: "Gezondheid (11)",
    level: "A2",
    topic: "gezondheid",
    body:
      "Ik heb een huisarts. Mijn huisarts is bij de gemeente. Ik heb ook een dokter. Mijn dokter is bij de huisarts.",
  },
  {
    id: "reading-gen-gezondheid-2",
    title: "Gezondheid (12)",
    level: "A2",
    topic: "gezondheid",
    body:
      "Ik ga naar de dokter. De dokter is bij de gemeente. Ik wil ook naar de tandarts gaan.",
  },
  {
    id: "reading-gen-gezondheid-3",
    title: "Gezondheid (13)",
    level: "A2",
    topic: "gezondheid",
    body:
      "Ik heb twee tandartsen. Mijn tandartsen zijn bij het ziekenhuis. Ik wil drie tandartsen.",
  },
  {
    id: "reading-gen-gezondheid-4",
    title: "Gezondheid (14)",
    level: "A2",
    topic: "gezondheid",
    body:
      "Ik moet naar het ziekenhuis gaan. Ik kan niet naar het medicijn gaan. Ik ga morgen naar het ziekenhuis.",
  },
  {
    id: "reading-gen-gezondheid-5",
    title: "Gezondheid (15)",
    level: "A2",
    topic: "gezondheid",
    body:
      "Ik heb een medicijn. Mijn medicijn is bij de gemeente. Ik heb ook een recept. Mijn recept is bij het medicijn.",
  },
  {
    id: "reading-gen-gezondheid-6",
    title: "Gezondheid (16)",
    level: "A2",
    topic: "gezondheid",
    body:
      "Ik heb een recept en een pijn. Ik wil ook een verband. Mijn recept en mijn pijn zijn bij de gemeente.",
  },
  {
    id: "reading-gen-gezondheid-7",
    title: "Gezondheid (17)",
    level: "A2",
    topic: "gezondheid",
    body:
      "Ik heb twee pijnen. Mijn pijnen zijn bij het verband. Ik wil drie pijnen.",
  },
  {
    id: "reading-gen-gezondheid-8",
    title: "Gezondheid (18)",
    level: "B1",
    topic: "gezondheid",
    body:
      "Ik moet naar het verband gaan. Ik kan niet naar de apotheek gaan. Ik ga morgen naar het verband.",
  },
  {
    id: "reading-gen-gezondheid-9",
    title: "Gezondheid (19)",
    level: "B1",
    topic: "gezondheid",
    body:
      "Ik heb een apotheek. Mijn apotheek is bij de gemeente. Ik heb ook een polis. Mijn polis is bij de apotheek.",
  },
  {
    id: "reading-gen-gezondheid-10",
    title: "Gezondheid (20)",
    level: "B1",
    topic: "gezondheid",
    body:
      "Ik heb een polis en een huisarts. Ik wil ook een dokter. Mijn polis en mijn huisarts zijn bij de gemeente.",
  },
  {
    id: "reading-gen-werk-1",
    title: "Werk (21)",
    level: "B1",
    topic: "werk",
    body:
      "Ik heb een baan. Mijn baan is bij de gemeente. Ik heb ook een contract. Mijn contract is bij de baan.",
  },
  {
    id: "reading-gen-werk-2",
    title: "Werk (22)",
    level: "B1",
    topic: "werk",
    body:
      "Ik heb een contract en een salaris. Ik wil ook een sollicitatie. Mijn contract en mijn salaris zijn bij de gemeente.",
  },
  {
    id: "reading-gen-werk-3",
    title: "Werk (23)",
    level: "B1",
    topic: "werk",
    body:
      "Ik heb twee salarissen. Mijn salarissen zijn bij de sollicitatie. Ik wil drie salarissen.",
  },
  {
    id: "reading-gen-werk-4",
    title: "Werk (24)",
    level: "B1",
    topic: "werk",
    body:
      "Ik moet naar de sollicitatie gaan. Ik kan niet naar de loonstrook gaan. Ik ga morgen naar de sollicitatie.",
  },
  {
    id: "reading-gen-werk-5",
    title: "Werk (25)",
    level: "B1",
    topic: "werk",
    body:
      "Ik heb een loonstrook. Mijn loonstrook is bij de gemeente. Ik heb ook een dienstverband. Mijn dienstverband is bij de loonstrook.",
  },
  {
    id: "reading-gen-werk-6",
    title: "Werk (26)",
    level: "B1",
    topic: "werk",
    body:
      "Ik heb een dienstverband en een proeftijd. Ik wil ook een baas. Mijn dienstverband en mijn proeftijd zijn bij de gemeente.",
  },
  {
    id: "reading-gen-werk-7",
    title: "Werk (27)",
    level: "B1",
    topic: "werk",
    body:
      "Ik heb twee proeftijden. Mijn proeftijden zijn bij de baas. Ik wil drie proeftijden.",
  },
  {
    id: "reading-gen-werk-8",
    title: "Werk (28)",
    level: "A2",
    topic: "werk",
    body:
      "Ik moet naar de baas gaan. Ik kan niet naar het kantoor gaan. Ik ga morgen naar de baas.",
  },
  {
    id: "reading-gen-werk-9",
    title: "Werk (29)",
    level: "B1",
    topic: "werk",
    body:
      "Ik heb een kantoor. Mijn kantoor is bij de gemeente. Ik heb ook een vergadering. Mijn vergadering is bij het kantoor.",
  },
  {
    id: "reading-gen-werk-10",
    title: "Werk (30)",
    level: "B1",
    topic: "werk",
    body:
      "Ik heb een vergadering en een baan. Ik wil ook een contract. Mijn vergadering en mijn baan zijn bij de gemeente.",
  },
  {
    id: "reading-gen-gemeente-1",
    title: "Bij de gemeente (31)",
    level: "A2",
    topic: "gemeente",
    body:
      "Ik heb een gemeente. Mijn gemeente is bij de gemeente. Ik heb ook een pas. Mijn pas is bij de gemeente.",
  },
  {
    id: "reading-gen-gemeente-2",
    title: "Bij de gemeente (32)",
    level: "A2",
    topic: "gemeente",
    body:
      "Ik heb een pas en een paspoort. Ik wil ook een formulier. Mijn pas en mijn paspoort zijn bij de gemeente.",
  },
  {
    id: "reading-gen-gemeente-3",
    title: "Bij de gemeente (33)",
    level: "B1",
    topic: "gemeente",
    body:
      "Ik heb twee paspoorten. Mijn paspoorten zijn bij het formulier. Ik wil drie paspoorten.",
  },
  {
    id: "reading-gen-gemeente-4",
    title: "Bij de gemeente (34)",
    level: "B1",
    topic: "gemeente",
    body:
      "Ik moet naar het formulier gaan. Ik kan niet naar de handtekening gaan. Ik ga morgen naar het formulier.",
  },
  {
    id: "reading-gen-gemeente-5",
    title: "Bij de gemeente (35)",
    level: "B1",
    topic: "gemeente",
    body:
      "Ik heb een handtekening. Mijn handtekening is bij de gemeente. Ik heb ook een vergunning. Mijn vergunning is bij de handtekening.",
  },
  {
    id: "reading-gen-gemeente-6",
    title: "Bij de gemeente (36)",
    level: "B1",
    topic: "gemeente",
    body:
      "Ik heb een vergunning en een uitkering. Ik wil ook een brief. Mijn vergunning en mijn uitkering zijn bij de gemeente.",
  },
  {
    id: "reading-gen-gemeente-7",
    title: "Bij de gemeente (37)",
    level: "B1",
    topic: "gemeente",
    body:
      "Ik heb twee uitkeringen. Mijn uitkeringen zijn bij de brief. Ik wil drie uitkeringen.",
  },
  {
    id: "reading-gen-gemeente-8",
    title: "Bij de gemeente (38)",
    level: "A2",
    topic: "gemeente",
    body:
      "Ik moet naar de brief gaan. Ik kan niet naar de gemeente gaan. Ik ga morgen naar de brief.",
  },
  {
    id: "reading-gen-gemeente-9",
    title: "Bij de gemeente (39)",
    level: "A2",
    topic: "gemeente",
    body:
      "Ik heb een gemeente. Mijn gemeente is bij de gemeente. Ik heb ook een pas. Mijn pas is bij de gemeente.",
  },
  {
    id: "reading-gen-gemeente-10",
    title: "Bij de gemeente (40)",
    level: "A2",
    topic: "gemeente",
    body:
      "Ik heb een pas en een paspoort. Ik wil ook een formulier. Mijn pas en mijn paspoort zijn bij de gemeente.",
  },
  {
    id: "reading-gen-onderwijs-1",
    title: "Onderwijs (41)",
    level: "A2",
    topic: "onderwijs",
    body:
      "Ik heb een school. Mijn school is bij de gemeente. Ik heb ook een les. Mijn les is bij de school.",
  },
  {
    id: "reading-gen-onderwijs-2",
    title: "Onderwijs (42)",
    level: "B1",
    topic: "onderwijs",
    body:
      "Ik heb een les en een opleiding. Ik wil ook een cursus. Mijn les en mijn opleiding zijn bij de gemeente.",
  },
  {
    id: "reading-gen-onderwijs-3",
    title: "Onderwijs (43)",
    level: "B1",
    topic: "onderwijs",
    body:
      "Ik heb twee opleidingen. Mijn opleidingen zijn bij de cursus. Ik wil drie opleidingen.",
  },
  {
    id: "reading-gen-onderwijs-4",
    title: "Onderwijs (44)",
    level: "A2",
    topic: "onderwijs",
    body:
      "Ik moet naar de cursus gaan. Ik kan niet naar de klas gaan. Ik ga morgen naar de cursus.",
  },
  {
    id: "reading-gen-onderwijs-5",
    title: "Onderwijs (45)",
    level: "A2",
    topic: "onderwijs",
    body:
      "Ik heb een klas. Mijn klas is bij de gemeente. Ik heb ook een school. Mijn school is bij de klas.",
  },
  {
    id: "reading-gen-onderwijs-6",
    title: "Onderwijs (46)",
    level: "A2",
    topic: "onderwijs",
    body:
      "Ik heb een school en een les. Ik wil ook een opleiding. Mijn school en mijn les zijn bij de gemeente.",
  },
  {
    id: "reading-gen-onderwijs-7",
    title: "Onderwijs (47)",
    level: "B1",
    topic: "onderwijs",
    body:
      "Ik heb twee lessen. Mijn lessen zijn bij de opleiding. Ik wil drie lessen.",
  },
  {
    id: "reading-gen-onderwijs-8",
    title: "Onderwijs (48)",
    level: "B1",
    topic: "onderwijs",
    body:
      "Ik moet naar de opleiding gaan. Ik kan niet naar de cursus gaan. Ik ga morgen naar de opleiding.",
  },
  {
    id: "reading-gen-onderwijs-9",
    title: "Onderwijs (49)",
    level: "A2",
    topic: "onderwijs",
    body:
      "Ik heb een cursus. Mijn cursus is bij de gemeente. Ik heb ook een klas. Mijn klas is bij de cursus.",
  },
  {
    id: "reading-gen-onderwijs-10",
    title: "Onderwijs (50)",
    level: "A2",
    topic: "onderwijs",
    body:
      "Ik heb een klas en een school. Ik wil ook een les. Mijn klas en mijn school zijn bij de gemeente.",
  },
  {
    id: "reading-gen-geld-1",
    title: "Geld (51)",
    level: "B1",
    topic: "geld",
    body:
      "Ik heb een rekening. Mijn rekening is bij de gemeente. Ik heb ook een korting. Mijn korting is bij de rekening.",
  },
  {
    id: "reading-gen-geld-2",
    title: "Geld (52)",
    level: "B1",
    topic: "geld",
    body:
      "Ik heb een korting en een bon. Ik wil ook een prijs. Mijn korting en mijn bon zijn bij de gemeente.",
  },
  {
    id: "reading-gen-geld-3",
    title: "Geld (53)",
    level: "A2",
    topic: "geld",
    body:
      "Ik heb twee bonnen. Mijn bonnen zijn bij de prijs. Ik wil drie bonnen.",
  },
  {
    id: "reading-gen-geld-4",
    title: "Geld (54)",
    level: "B1",
    topic: "geld",
    body:
      "Ik moet naar de prijs gaan. Ik kan niet naar de premie gaan. Ik ga morgen naar de prijs.",
  },
  {
    id: "reading-gen-geld-5",
    title: "Geld (55)",
    level: "B1",
    topic: "geld",
    body:
      "Ik heb een premie. Mijn premie is bij de gemeente. Ik heb ook een rekening. Mijn rekening is bij de premie.",
  },
  {
    id: "reading-gen-geld-6",
    title: "Geld (56)",
    level: "B1",
    topic: "geld",
    body:
      "Ik heb een rekening en een korting. Ik wil ook een bon. Mijn rekening en mijn korting zijn bij de gemeente.",
  },
  {
    id: "reading-gen-geld-7",
    title: "Geld (57)",
    level: "B1",
    topic: "geld",
    body:
      "Ik heb twee kortingen. Mijn kortingen zijn bij de bon. Ik wil drie kortingen.",
  },
  {
    id: "reading-gen-geld-8",
    title: "Geld (58)",
    level: "A2",
    topic: "geld",
    body:
      "Ik moet naar de bon gaan. Ik kan niet naar de prijs gaan. Ik ga morgen naar de bon.",
  },
  {
    id: "reading-gen-geld-9",
    title: "Geld (59)",
    level: "B1",
    topic: "geld",
    body:
      "Ik heb een prijs. Mijn prijs is bij de gemeente. Ik heb ook een premie. Mijn premie is bij de prijs.",
  },
  {
    id: "reading-gen-geld-10",
    title: "Geld (60)",
    level: "B1",
    topic: "geld",
    body:
      "Ik heb een premie en een rekening. Ik wil ook een korting. Mijn premie en mijn rekening zijn bij de gemeente.",
  },
  {
    id: "reading-gen-familie-1",
    title: "Familie (61)",
    level: "A2",
    topic: "familie",
    body:
      "Ik heb een broer. Mijn broer is bij de gemeente. Ik heb ook een zus. Mijn zus is bij de broer.",
  },
  {
    id: "reading-gen-familie-2",
    title: "Familie (62)",
    level: "A2",
    topic: "familie",
    body:
      "Ik heb een zus en een ouder. Ik wil ook een dochter. Mijn zus en mijn ouder zijn bij de gemeente.",
  },
  {
    id: "reading-gen-familie-3",
    title: "Familie (63)",
    level: "A2",
    topic: "familie",
    body:
      "Ik heb twee ouders. Mijn ouders zijn bij de dochter. Ik wil drie ouders.",
  },
  {
    id: "reading-gen-familie-4",
    title: "Familie (64)",
    level: "A2",
    topic: "familie",
    body:
      "Ik moet naar de dochter gaan. Ik kan niet naar de zoon gaan. Ik ga morgen naar de dochter.",
  },
  {
    id: "reading-gen-familie-5",
    title: "Familie (65)",
    level: "A2",
    topic: "familie",
    body:
      "Ik heb een zoon. Mijn zoon is bij de gemeente. Ik heb ook een oma. Mijn oma is bij de zoon.",
  },
  {
    id: "reading-gen-familie-6",
    title: "Familie (66)",
    level: "A2",
    topic: "familie",
    body:
      "Ik heb een oma en een opa. Ik wil ook een neef. Mijn oma en mijn opa zijn bij de gemeente.",
  },
  {
    id: "reading-gen-familie-7",
    title: "Familie (67)",
    level: "B1",
    topic: "familie",
    body:
      "Ik heb een opa. Mijn opa is bij de gemeente. Ik heb ook een neef. Mijn neef is bij de opa.",
  },
  {
    id: "reading-gen-familie-8",
    title: "Familie (68)",
    level: "B1",
    topic: "familie",
    body:
      "Ik moet naar de neef gaan. Ik kan niet naar de nicht gaan. Ik ga morgen naar de neef.",
  },
  {
    id: "reading-gen-familie-9",
    title: "Familie (69)",
    level: "B1",
    topic: "familie",
    body:
      "Ik heb een nicht. Mijn nicht is bij de gemeente. Ik heb ook een buurvrouw. Mijn buurvrouw is bij de nicht.",
  },
  {
    id: "reading-gen-familie-10",
    title: "Familie (70)",
    level: "A2",
    topic: "familie",
    body:
      "Ik heb een buurvrouw en een vriend. Ik wil ook een broer. Mijn buurvrouw en mijn vriend zijn bij de gemeente.",
  },
  {
    id: "reading-gen-eten-1",
    title: "Boodschappen (71)",
    level: "A2",
    topic: "eten",
    body:
      "Ik heb een brood. Mijn brood is bij de gemeente. Ik heb ook een kaas. Mijn kaas is bij het brood.",
  },
  {
    id: "reading-gen-eten-2",
    title: "Boodschappen (72)",
    level: "A2",
    topic: "eten",
    body:
      "Ik heb een kaas en een appel. Ik wil ook een groente. Mijn kaas en mijn appel zijn bij de gemeente.",
  },
  {
    id: "reading-gen-eten-3",
    title: "Boodschappen (73)",
    level: "A2",
    topic: "eten",
    body:
      "Ik heb twee appels. Mijn appels zijn bij de groente. Ik wil drie appels.",
  },
  {
    id: "reading-gen-eten-4",
    title: "Boodschappen (74)",
    level: "A2",
    topic: "eten",
    body:
      "Ik moet naar de groente gaan. Ik kan niet naar de winkel gaan. Ik ga morgen naar de groente.",
  },
  {
    id: "reading-gen-eten-5",
    title: "Boodschappen (75)",
    level: "A2",
    topic: "eten",
    body:
      "Ik heb een winkel. Mijn winkel is bij de gemeente. Ik heb ook een markt. Mijn markt is bij de winkel.",
  },
  {
    id: "reading-gen-eten-6",
    title: "Boodschappen (76)",
    level: "A2",
    topic: "eten",
    body:
      "Ik heb een markt en een boodschappentas. Ik wil ook een brood. Mijn markt en mijn boodschappentas zijn bij de gemeente.",
  },
  {
    id: "reading-gen-eten-7",
    title: "Boodschappen (77)",
    level: "A2",
    topic: "eten",
    body:
      "Ik heb twee boodschappentassen. Mijn boodschappentassen zijn bij het brood. Ik wil drie boodschappentassen.",
  },
  {
    id: "reading-gen-eten-8",
    title: "Boodschappen (78)",
    level: "A2",
    topic: "eten",
    body:
      "Ik moet naar het brood gaan. Ik kan niet naar de kaas gaan. Ik ga morgen naar het brood.",
  },
  {
    id: "reading-gen-eten-9",
    title: "Boodschappen (79)",
    level: "A2",
    topic: "eten",
    body:
      "Ik heb een kaas. Mijn kaas is bij de gemeente. Ik heb ook een appel. Mijn appel is bij de kaas.",
  },
  {
    id: "reading-gen-eten-10",
    title: "Boodschappen (80)",
    level: "A2",
    topic: "eten",
    body:
      "Ik heb een appel en een groente. Ik wil ook een winkel. Mijn appel en mijn groente zijn bij de gemeente.",
  },
  {
    id: "reading-gen-kleding-1",
    title: "Kleding (81)",
    level: "A2",
    topic: "kleding",
    body:
      "Ik heb een jas. Mijn jas is bij de gemeente. Ik heb ook een broek. Mijn broek is bij de jas.",
  },
  {
    id: "reading-gen-kleding-2",
    title: "Kleding (82)",
    level: "A2",
    topic: "kleding",
    body:
      "Ik heb een broek en een schoen. Ik wil ook een trui. Mijn broek en mijn schoen zijn bij de gemeente.",
  },
  {
    id: "reading-gen-kleding-3",
    title: "Kleding (83)",
    level: "A2",
    topic: "kleding",
    body:
      "Ik heb twee schoenen. Mijn schoenen zijn bij de trui. Ik wil drie schoenen.",
  },
  {
    id: "reading-gen-kleding-4",
    title: "Kleding (84)",
    level: "A2",
    topic: "kleding",
    body:
      "Ik moet naar de trui gaan. Ik kan niet naar de muts gaan. Ik ga morgen naar de trui.",
  },
  {
    id: "reading-gen-kleding-5",
    title: "Kleding (85)",
    level: "A2",
    topic: "kleding",
    body:
      "Ik heb een muts. Mijn muts is bij de gemeente. Ik heb ook een sjaal. Mijn sjaal is bij de muts.",
  },
  {
    id: "reading-gen-kleding-6",
    title: "Kleding (86)",
    level: "A2",
    topic: "kleding",
    body:
      "Ik heb een sjaal en een handschoen. Ik wil ook een hoed. Mijn sjaal en mijn handschoen zijn bij de gemeente.",
  },
  {
    id: "reading-gen-kleding-7",
    title: "Kleding (87)",
    level: "A2",
    topic: "kleding",
    body:
      "Ik heb twee handschoenen. Mijn handschoenen zijn bij de hoed. Ik wil drie handschoenen.",
  },
  {
    id: "reading-gen-kleding-8",
    title: "Kleding (88)",
    level: "A2",
    topic: "kleding",
    body:
      "Ik moet naar de hoed gaan. Ik kan niet naar de riem gaan. Ik ga morgen naar de hoed.",
  },
  {
    id: "reading-gen-kleding-9",
    title: "Kleding (89)",
    level: "A2",
    topic: "kleding",
    body:
      "Ik heb een riem. Mijn riem is bij de gemeente. Ik heb ook een knoop. Mijn knoop is bij de riem.",
  },
  {
    id: "reading-gen-kleding-10",
    title: "Kleding (90)",
    level: "A2",
    topic: "kleding",
    body:
      "Ik heb een knoop en een jas. Ik wil ook een broek. Mijn knoop en mijn jas zijn bij de gemeente.",
  },
  {
    id: "reading-gen-vervoer-1",
    title: "Onderweg (91)",
    level: "A2",
    topic: "vervoer",
    body:
      "Ik heb een fiets. Mijn fiets is bij de gemeente. Ik heb ook een trein. Mijn trein is bij de fiets.",
  },
  {
    id: "reading-gen-vervoer-2",
    title: "Onderweg (92)",
    level: "A2",
    topic: "vervoer",
    body:
      "Ik heb een trein en een bus. Ik wil ook een vlucht. Mijn trein en mijn bus zijn bij de gemeente.",
  },
  {
    id: "reading-gen-vervoer-3",
    title: "Onderweg (93)",
    level: "B1",
    topic: "vervoer",
    body:
      "Ik heb twee bussen. Mijn bussen zijn bij de vlucht. Ik wil drie bussen.",
  },
  {
    id: "reading-gen-vervoer-4",
    title: "Onderweg (94)",
    level: "B1",
    topic: "vervoer",
    body:
      "Ik moet naar de vlucht gaan. Ik kan niet naar de weg gaan. Ik ga morgen naar de vlucht.",
  },
  {
    id: "reading-gen-vervoer-5",
    title: "Onderweg (95)",
    level: "A2",
    topic: "vervoer",
    body:
      "Ik heb een weg. Mijn weg is bij de gemeente. Ik heb ook een straat. Mijn straat is bij de weg.",
  },
  {
    id: "reading-gen-vervoer-6",
    title: "Onderweg (96)",
    level: "A2",
    topic: "vervoer",
    body:
      "Ik heb een straat en een brug. Ik wil ook een station. Mijn straat en mijn brug zijn bij de gemeente.",
  },
  {
    id: "reading-gen-vervoer-7",
    title: "Onderweg (97)",
    level: "A2",
    topic: "vervoer",
    body:
      "Ik ga naar de brug. De brug is bij de gemeente. Ik wil ook naar het station gaan.",
  },
  {
    id: "reading-gen-vervoer-8",
    title: "Onderweg (98)",
    level: "A2",
    topic: "vervoer",
    body:
      "Ik moet naar het station gaan. Ik kan niet naar de kaart gaan. Ik ga morgen naar het station.",
  },
  {
    id: "reading-gen-vervoer-9",
    title: "Onderweg (99)",
    level: "B1",
    topic: "vervoer",
    body:
      "Ik heb een kaart. Mijn kaart is bij de gemeente. Ik heb ook een rijbewijs. Mijn rijbewijs is bij de kaart.",
  },
  {
    id: "reading-gen-vervoer-10",
    title: "Onderweg (100)",
    level: "B1",
    topic: "vervoer",
    body:
      "Ik heb een rijbewijs en een fiets. Ik wil ook een trein. Mijn rijbewijs en mijn fiets zijn bij de gemeente.",
  },

  // --- +80 batch (120 -> 200), 8 new topics x 10 items, generated by
  // the same coverage-safe templating approach as the reading-gen-*
  // batch above, now drawing on the much larger 5,000-lemma noun bank.
  {
    id: "reading-gen2-sport-1",
    title: "Sport (121)",
    level: "A2",
    topic: "sport",
    body:
      "Ik heb een sport. Mijn sport is bij de gemeente. Ik heb ook een wedstrijd. Mijn wedstrijd is bij de sport.",
  },
  {
    id: "reading-gen2-sport-2",
    title: "Sport (122)",
    level: "A2",
    topic: "sport",
    body:
      "Ik heb een wedstrijd en een trainer. Ik wil ook een bal. Mijn wedstrijd en mijn trainer zijn bij de gemeente.",
  },
  {
    id: "reading-gen2-sport-3",
    title: "Sport (123)",
    level: "A2",
    topic: "sport",
    body:
      "Ik heb twee trainers. Mijn trainers zijn bij de bal. Ik wil drie trainers.",
  },
  {
    id: "reading-gen2-sport-4",
    title: "Sport (124)",
    level: "A2",
    topic: "sport",
    body:
      "Ik moet naar de bal gaan. Ik kan niet naar het veld gaan. Ik ga morgen naar de bal.",
  },
  {
    id: "reading-gen2-sport-5",
    title: "Sport (125)",
    level: "A2",
    topic: "sport",
    body:
      "Ik heb een veld. Mijn veld is bij de gemeente. Ik heb ook een team. Mijn team is bij het veld.",
  },
  {
    id: "reading-gen2-sport-6",
    title: "Sport (126)",
    level: "A2",
    topic: "sport",
    body:
      "Ik heb een team. Mijn team is bij de gemeente. Ik heb ook een zaal. Mijn zaal is bij het team.",
  },
  {
    id: "reading-gen2-sport-7",
    title: "Sport (127)",
    level: "B1",
    topic: "sport",
    body:
      "Ik heb een zaal en een sport. Ik wil ook een wedstrijd. Mijn zaal en mijn sport zijn bij de gemeente.",
  },
  {
    id: "reading-gen2-sport-8",
    title: "Sport (128)",
    level: "B1",
    topic: "sport",
    body:
      "Ik heb twee sporten. Mijn sporten zijn bij de wedstrijd. Ik wil drie sporten.",
  },
  {
    id: "reading-gen2-sport-9",
    title: "Sport (129)",
    level: "B1",
    topic: "sport",
    body:
      "Ik moet naar de wedstrijd gaan. Ik kan niet naar de trainer gaan. Ik ga morgen naar de wedstrijd.",
  },
  {
    id: "reading-gen2-sport-10",
    title: "Sport (130)",
    level: "B1",
    topic: "sport",
    body:
      "Ik heb een trainer. Mijn trainer is bij de gemeente. Ik heb ook een bal. Mijn bal is bij de trainer.",
  },
  {
    id: "reading-gen2-natuur-1",
    title: "In de natuur (131)",
    level: "A2",
    topic: "natuur",
    body:
      "Ik heb een boom. Mijn boom is bij de gemeente. Ik heb ook een bos. Mijn bos is bij de boom.",
  },
  {
    id: "reading-gen2-natuur-2",
    title: "In de natuur (132)",
    level: "A2",
    topic: "natuur",
    body:
      "Ik heb een bos en een dier. Ik wil ook een berg. Mijn bos en mijn dier zijn bij de gemeente.",
  },
  {
    id: "reading-gen2-natuur-3",
    title: "In de natuur (133)",
    level: "A2",
    topic: "natuur",
    body:
      "Ik heb twee dieren. Mijn dieren zijn bij de berg. Ik wil drie dieren.",
  },
  {
    id: "reading-gen2-natuur-4",
    title: "In de natuur (134)",
    level: "A2",
    topic: "natuur",
    body:
      "Ik moet naar de berg gaan. Ik kan niet naar het park gaan. Ik ga morgen naar de berg.",
  },
  {
    id: "reading-gen2-natuur-5",
    title: "In de natuur (135)",
    level: "A2",
    topic: "natuur",
    body:
      "Ik heb een park. Mijn park is bij de gemeente. Ik heb ook een rivier. Mijn rivier is bij het park.",
  },
  {
    id: "reading-gen2-natuur-6",
    title: "In de natuur (136)",
    level: "A2",
    topic: "natuur",
    body:
      "Ik heb een rivier. Mijn rivier is bij de gemeente. Ik heb ook een zee. Mijn zee is bij de rivier.",
  },
  {
    id: "reading-gen2-natuur-7",
    title: "In de natuur (137)",
    level: "B1",
    topic: "natuur",
    body:
      "Ik heb een zee en een boom. Ik wil ook een bos. Mijn zee en mijn boom zijn bij de gemeente.",
  },
  {
    id: "reading-gen2-natuur-8",
    title: "In de natuur (138)",
    level: "B1",
    topic: "natuur",
    body:
      "Ik heb twee bomen. Mijn bomen zijn bij het bos. Ik wil drie bomen.",
  },
  {
    id: "reading-gen2-natuur-9",
    title: "In de natuur (139)",
    level: "B1",
    topic: "natuur",
    body:
      "Ik moet naar het bos gaan. Ik kan niet naar het dier gaan. Ik ga morgen naar het bos.",
  },
  {
    id: "reading-gen2-natuur-10",
    title: "In de natuur (140)",
    level: "B1",
    topic: "natuur",
    body:
      "Ik heb een dier. Mijn dier is bij de gemeente. Ik heb ook een berg. Mijn berg is bij het dier.",
  },
  {
    id: "reading-gen2-technologie-1",
    title: "Techniek (141)",
    level: "A2",
    topic: "technologie",
    body:
      "Ik heb een computer. Mijn computer is bij de gemeente. Ik heb ook een telefoon. Mijn telefoon is bij de computer.",
  },
  {
    id: "reading-gen2-technologie-2",
    title: "Techniek (142)",
    level: "A2",
    topic: "technologie",
    body:
      "Ik heb een telefoon en een app. Ik wil ook een batterij. Mijn telefoon en mijn app zijn bij de gemeente.",
  },
  {
    id: "reading-gen2-technologie-3",
    title: "Techniek (143)",
    level: "A2",
    topic: "technologie",
    body:
      "Ik heb twee apps. Mijn apps zijn bij de batterij. Ik wil drie apps.",
  },
  {
    id: "reading-gen2-technologie-4",
    title: "Techniek (144)",
    level: "A2",
    topic: "technologie",
    body:
      "Ik moet naar de batterij gaan. Ik kan niet naar de foto gaan. Ik ga morgen naar de batterij.",
  },
  {
    id: "reading-gen2-technologie-5",
    title: "Techniek (145)",
    level: "A2",
    topic: "technologie",
    body:
      "Ik heb een foto. Mijn foto is bij de gemeente. Ik heb ook een printer. Mijn printer is bij de foto.",
  },
  {
    id: "reading-gen2-technologie-6",
    title: "Techniek (146)",
    level: "A2",
    topic: "technologie",
    body:
      "Ik heb een printer. Mijn printer is bij de gemeente. Ik heb ook een scherm. Mijn scherm is bij de printer.",
  },
  {
    id: "reading-gen2-technologie-7",
    title: "Techniek (147)",
    level: "B1",
    topic: "technologie",
    body:
      "Ik heb een scherm en een computer. Ik wil ook een telefoon. Mijn scherm en mijn computer zijn bij de gemeente.",
  },
  {
    id: "reading-gen2-technologie-8",
    title: "Techniek (148)",
    level: "B1",
    topic: "technologie",
    body:
      "Ik heb twee computers. Mijn computers zijn bij de telefoon. Ik wil drie computers.",
  },
  {
    id: "reading-gen2-technologie-9",
    title: "Techniek (149)",
    level: "B1",
    topic: "technologie",
    body:
      "Ik moet naar de telefoon gaan. Ik kan niet naar de app gaan. Ik ga morgen naar de telefoon.",
  },
  {
    id: "reading-gen2-technologie-10",
    title: "Techniek (150)",
    level: "B1",
    topic: "technologie",
    body:
      "Ik heb een app. Mijn app is bij de gemeente. Ik heb ook een batterij. Mijn batterij is bij de app.",
  },
  {
    id: "reading-gen2-veiligheid-1",
    title: "Veiligheid (151)",
    level: "A2",
    topic: "veiligheid",
    body:
      "Ik heb een brand. Mijn brand is bij de gemeente. Ik heb ook een alarm. Mijn alarm is bij de brand.",
  },
  {
    id: "reading-gen2-veiligheid-2",
    title: "Veiligheid (152)",
    level: "A2",
    topic: "veiligheid",
    body:
      "Ik heb een alarm en een sleutel. Ik wil ook een deur. Mijn alarm en mijn sleutel zijn bij de gemeente.",
  },
  {
    id: "reading-gen2-veiligheid-3",
    title: "Veiligheid (153)",
    level: "A2",
    topic: "veiligheid",
    body:
      "Ik heb twee sleutels. Mijn sleutels zijn bij de deur. Ik wil drie sleutels.",
  },
  {
    id: "reading-gen2-veiligheid-4",
    title: "Veiligheid (154)",
    level: "A2",
    topic: "veiligheid",
    body:
      "Ik moet naar de deur gaan. Ik kan niet naar de agent gaan. Ik ga morgen naar de deur.",
  },
  {
    id: "reading-gen2-veiligheid-5",
    title: "Veiligheid (155)",
    level: "A2",
    topic: "veiligheid",
    body:
      "Ik heb een agent. Mijn agent is bij de gemeente. Ik heb ook een politieauto. Mijn politieauto is bij de agent.",
  },
  {
    id: "reading-gen2-veiligheid-6",
    title: "Veiligheid (156)",
    level: "A2",
    topic: "veiligheid",
    body:
      "Ik heb een politieauto. Mijn politieauto is bij de gemeente. Ik heb ook een code. Mijn code is bij de politieauto.",
  },
  {
    id: "reading-gen2-veiligheid-7",
    title: "Veiligheid (157)",
    level: "B1",
    topic: "veiligheid",
    body:
      "Ik heb een code en een brand. Ik wil ook een alarm. Mijn code en mijn brand zijn bij de gemeente.",
  },
  {
    id: "reading-gen2-veiligheid-8",
    title: "Veiligheid (158)",
    level: "B1",
    topic: "veiligheid",
    body:
      "Ik heb twee branden. Mijn branden zijn bij het alarm. Ik wil drie branden.",
  },
  {
    id: "reading-gen2-veiligheid-9",
    title: "Veiligheid (159)",
    level: "B1",
    topic: "veiligheid",
    body:
      "Ik moet naar het alarm gaan. Ik kan niet naar de sleutel gaan. Ik ga morgen naar het alarm.",
  },
  {
    id: "reading-gen2-veiligheid-10",
    title: "Veiligheid (160)",
    level: "B1",
    topic: "veiligheid",
    body:
      "Ik heb een sleutel. Mijn sleutel is bij de gemeente. Ik heb ook een deur. Mijn deur is bij de sleutel.",
  },
  {
    id: "reading-gen2-dieren-1",
    title: "Dieren (161)",
    level: "A2",
    topic: "dieren",
    body:
      "Ik heb een hond. Mijn hond is bij de gemeente. Ik heb ook een kat. Mijn kat is bij de hond.",
  },
  {
    id: "reading-gen2-dieren-2",
    title: "Dieren (162)",
    level: "A2",
    topic: "dieren",
    body:
      "Ik heb een kat en een vogel. Ik wil ook een paard. Mijn kat en mijn vogel zijn bij de gemeente.",
  },
  {
    id: "reading-gen2-dieren-3",
    title: "Dieren (163)",
    level: "A2",
    topic: "dieren",
    body:
      "Ik heb twee vogels. Mijn vogels zijn bij het paard. Ik wil drie vogels.",
  },
  {
    id: "reading-gen2-dieren-4",
    title: "Dieren (164)",
    level: "A2",
    topic: "dieren",
    body:
      "Ik moet naar het paard gaan. Ik kan niet naar de koe gaan. Ik ga morgen naar het paard.",
  },
  {
    id: "reading-gen2-dieren-5",
    title: "Dieren (165)",
    level: "A2",
    topic: "dieren",
    body:
      "Ik heb een koe. Mijn koe is bij de gemeente. Ik heb ook een vis. Mijn vis is bij de koe.",
  },
  {
    id: "reading-gen2-dieren-6",
    title: "Dieren (166)",
    level: "A2",
    topic: "dieren",
    body:
      "Ik heb een vis. Mijn vis is bij de gemeente. Ik heb ook een konijn. Mijn konijn is bij de vis.",
  },
  {
    id: "reading-gen2-dieren-7",
    title: "Dieren (167)",
    level: "B1",
    topic: "dieren",
    body:
      "Ik heb een konijn en een hond. Ik wil ook een kat. Mijn konijn en mijn hond zijn bij de gemeente.",
  },
  {
    id: "reading-gen2-dieren-8",
    title: "Dieren (168)",
    level: "B1",
    topic: "dieren",
    body:
      "Ik heb twee honden. Mijn honden zijn bij de kat. Ik wil drie honden.",
  },
  {
    id: "reading-gen2-dieren-9",
    title: "Dieren (169)",
    level: "B1",
    topic: "dieren",
    body:
      "Ik moet naar de kat gaan. Ik kan niet naar de vogel gaan. Ik ga morgen naar de kat.",
  },
  {
    id: "reading-gen2-dieren-10",
    title: "Dieren (170)",
    level: "B1",
    topic: "dieren",
    body:
      "Ik heb een vogel. Mijn vogel is bij de gemeente. Ik heb ook een paard. Mijn paard is bij de vogel.",
  },
  {
    id: "reading-gen2-reizen-1",
    title: "Op reis (171)",
    level: "A2",
    topic: "reizen",
    body:
      "Ik heb een vakantie. Mijn vakantie is bij de gemeente. Ik heb ook een hotel. Mijn hotel is bij de vakantie.",
  },
  {
    id: "reading-gen2-reizen-2",
    title: "Op reis (172)",
    level: "A2",
    topic: "reizen",
    body:
      "Ik heb een hotel en een koffer. Ik wil ook een vliegtuig. Mijn hotel en mijn koffer zijn bij de gemeente.",
  },
  {
    id: "reading-gen2-reizen-3",
    title: "Op reis (173)",
    level: "A2",
    topic: "reizen",
    body:
      "Ik heb twee koffers. Mijn koffers zijn bij het vliegtuig. Ik wil drie koffers.",
  },
  {
    id: "reading-gen2-reizen-4",
    title: "Op reis (174)",
    level: "A2",
    topic: "reizen",
    body:
      "Ik moet naar het vliegtuig gaan. Ik kan niet naar het paspoort gaan. Ik ga morgen naar het vliegtuig.",
  },
  {
    id: "reading-gen2-reizen-5",
    title: "Op reis (175)",
    level: "A2",
    topic: "reizen",
    body:
      "Ik heb een paspoort. Mijn paspoort is bij de gemeente. Ik heb ook een reis. Mijn reis is bij het paspoort.",
  },
  {
    id: "reading-gen2-reizen-6",
    title: "Op reis (176)",
    level: "A2",
    topic: "reizen",
    body:
      "Ik heb een reis. Mijn reis is bij de gemeente. Ik heb ook een toerist. Mijn toerist is bij de reis.",
  },
  {
    id: "reading-gen2-reizen-7",
    title: "Op reis (177)",
    level: "B1",
    topic: "reizen",
    body:
      "Ik heb een toerist en een vakantie. Ik wil ook een hotel. Mijn toerist en mijn vakantie zijn bij de gemeente.",
  },
  {
    id: "reading-gen2-reizen-8",
    title: "Op reis (178)",
    level: "B1",
    topic: "reizen",
    body:
      "Ik heb twee vakanties. Mijn vakanties zijn bij het hotel. Ik wil drie vakanties.",
  },
  {
    id: "reading-gen2-reizen-9",
    title: "Op reis (179)",
    level: "B1",
    topic: "reizen",
    body:
      "Ik moet naar het hotel gaan. Ik kan niet naar de koffer gaan. Ik ga morgen naar het hotel.",
  },
  {
    id: "reading-gen2-reizen-10",
    title: "Op reis (180)",
    level: "B1",
    topic: "reizen",
    body:
      "Ik heb een koffer. Mijn koffer is bij de gemeente. Ik heb ook een vliegtuig. Mijn vliegtuig is bij de koffer.",
  },
  {
    id: "reading-gen2-vrije_tijd-1",
    title: "Vrije tijd (181)",
    level: "A2",
    topic: "vrije_tijd",
    body:
      "Ik heb een film. Mijn film is bij de gemeente. Ik heb ook een boek. Mijn boek is bij de film.",
  },
  {
    id: "reading-gen2-vrije_tijd-2",
    title: "Vrije tijd (182)",
    level: "A2",
    topic: "vrije_tijd",
    body:
      "Ik heb een boek en een spel. Ik wil ook een feest. Mijn boek en mijn spel zijn bij de gemeente.",
  },
  {
    id: "reading-gen2-vrije_tijd-3",
    title: "Vrije tijd (183)",
    level: "A2",
    topic: "vrije_tijd",
    body:
      "Ik heb twee spellen. Mijn spellen zijn bij het feest. Ik wil drie spellen.",
  },
  {
    id: "reading-gen2-vrije_tijd-4",
    title: "Vrije tijd (184)",
    level: "A2",
    topic: "vrije_tijd",
    body:
      "Ik moet naar het feest gaan. Ik kan niet naar de bioscoop gaan. Ik ga morgen naar het feest.",
  },
  {
    id: "reading-gen2-vrije_tijd-5",
    title: "Vrije tijd (185)",
    level: "A2",
    topic: "vrije_tijd",
    body:
      "Ik heb een bioscoop. Mijn bioscoop is bij de gemeente. Ik heb ook een museum. Mijn museum is bij de bioscoop.",
  },
  {
    id: "reading-gen2-vrije_tijd-6",
    title: "Vrije tijd (186)",
    level: "A2",
    topic: "vrije_tijd",
    body:
      "Ik heb een museum. Mijn museum is bij de gemeente. Ik heb ook een cursus. Mijn cursus is bij het museum.",
  },
  {
    id: "reading-gen2-vrije_tijd-7",
    title: "Vrije tijd (187)",
    level: "B1",
    topic: "vrije_tijd",
    body:
      "Ik heb een cursus en een film. Ik wil ook een boek. Mijn cursus en mijn film zijn bij de gemeente.",
  },
  {
    id: "reading-gen2-vrije_tijd-8",
    title: "Vrije tijd (188)",
    level: "B1",
    topic: "vrije_tijd",
    body:
      "Ik heb twee films. Mijn films zijn bij het boek. Ik wil drie films.",
  },
  {
    id: "reading-gen2-vrije_tijd-9",
    title: "Vrije tijd (189)",
    level: "B1",
    topic: "vrije_tijd",
    body:
      "Ik moet naar het boek gaan. Ik kan niet naar het spel gaan. Ik ga morgen naar het boek.",
  },
  {
    id: "reading-gen2-vrije_tijd-10",
    title: "Vrije tijd (190)",
    level: "B1",
    topic: "vrije_tijd",
    body:
      "Ik heb een spel. Mijn spel is bij de gemeente. Ik heb ook een feest. Mijn feest is bij het spel.",
  },
  {
    id: "reading-gen2-gezondheidszorg-1",
    title: "Bij de zorg (191)",
    level: "A2",
    topic: "gezondheidszorg",
    body:
      "Ik heb een dokter. Mijn dokter is bij de gemeente. Ik heb ook een ziekenhuis. Mijn ziekenhuis is bij de dokter.",
  },
  {
    id: "reading-gen2-gezondheidszorg-2",
    title: "Bij de zorg (192)",
    level: "A2",
    topic: "gezondheidszorg",
    body:
      "Ik heb een ziekenhuis en een medicijn. Ik wil ook een recept. Mijn ziekenhuis en mijn medicijn zijn bij de gemeente.",
  },
  {
    id: "reading-gen2-gezondheidszorg-3",
    title: "Bij de zorg (193)",
    level: "A2",
    topic: "gezondheidszorg",
    body:
      "Ik heb twee medicijnen. Mijn medicijnen zijn bij het recept. Ik wil drie medicijnen.",
  },
  {
    id: "reading-gen2-gezondheidszorg-4",
    title: "Bij de zorg (194)",
    level: "A2",
    topic: "gezondheidszorg",
    body:
      "Ik moet naar het recept gaan. Ik kan niet naar de pijn gaan. Ik ga morgen naar het recept.",
  },
  {
    id: "reading-gen2-gezondheidszorg-5",
    title: "Bij de zorg (195)",
    level: "A2",
    topic: "gezondheidszorg",
    body:
      "Ik heb een pijn. Mijn pijn is bij de gemeente. Ik heb ook een verpleegster. Mijn verpleegster is bij de pijn.",
  },
  {
    id: "reading-gen2-gezondheidszorg-6",
    title: "Bij de zorg (196)",
    level: "A2",
    topic: "gezondheidszorg",
    body:
      "Ik heb een verpleegster. Mijn verpleegster is bij de gemeente. Ik heb ook een apotheek. Mijn apotheek is bij de verpleegster.",
  },
  {
    id: "reading-gen2-gezondheidszorg-7",
    title: "Bij de zorg (197)",
    level: "B1",
    topic: "gezondheidszorg",
    body:
      "Ik heb een apotheek en een dokter. Ik wil ook een ziekenhuis. Mijn apotheek en mijn dokter zijn bij de gemeente.",
  },
  {
    id: "reading-gen2-gezondheidszorg-8",
    title: "Bij de zorg (198)",
    level: "B1",
    topic: "gezondheidszorg",
    body:
      "Ik heb twee dokters. Mijn dokters zijn bij het ziekenhuis. Ik wil drie dokters.",
  },
  {
    id: "reading-gen2-gezondheidszorg-9",
    title: "Bij de zorg (199)",
    level: "B1",
    topic: "gezondheidszorg",
    body:
      "Ik moet naar het ziekenhuis gaan. Ik kan niet naar het medicijn gaan. Ik ga morgen naar het ziekenhuis.",
  },
  {
    id: "reading-gen2-gezondheidszorg-10",
    title: "Bij de zorg (200)",
    level: "B1",
    topic: "gezondheidszorg",
    body:
      "Ik heb een medicijn. Mijn medicijn is bij de gemeente. Ik heb ook een recept. Mijn recept is bij het medicijn.",
  },
];
