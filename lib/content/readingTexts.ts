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
];
