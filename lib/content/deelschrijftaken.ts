export interface DeelSchrijfTaakField {
  id: string;
  label: string;
  sampleAnswer: string;
}

export interface DeelSchrijfTaakItem {
  id: string;
  instructionRu: string;
  taskPrompt: string;
  fields: DeelSchrijfTaakField[];
}

// §7 — Schrijven deelschrijftaken: fill in a short message, complete a
// text, or fill in a form — worth 4-8 points each in the real exam. Each
// field is self-checked against a sample answer, same no-auto-grading
// approach as the rest of Schrijven here.
export const DEELSCHRIJFTAKEN_ITEMS: DeelSchrijfTaakItem[] = [
  {
    id: "deel-1",
    instructionRu: "Заполните форму записи в мэрию своими данными.",
    taskPrompt: "Vul het inschrijfformulier bij de gemeente in.",
    fields: [
      { id: "naam", label: "Naam", sampleAnswer: "Anna Ivanova" },
      { id: "adres", label: "Adres", sampleAnswer: "Kerkstraat 12, Utrecht" },
      { id: "reden", label: "Reden van uw bezoek", sampleAnswer: "Ik wil mij inschrijven op mijn nieuwe adres." },
      { id: "datum", label: "Datum", sampleAnswer: "3 augustus 2026" },
    ],
  },
  {
    id: "deel-2",
    instructionRu: "Дополните короткое сообщение недостающими частями.",
    taskPrompt:
      "Vul het bericht aan de huisartsenpraktijk aan: 'Beste, ik kan helaas niet komen naar mijn afspraak op ___. Kunt u mij een ___ datum geven? Met vriendelijke groet, ___.'",
    fields: [
      { id: "datum", label: "Welke datum kunt u niet?", sampleAnswer: "donderdag 6 augustus" },
      { id: "nieuwedatum", label: "Wat voor datum vraagt u?", sampleAnswer: "andere" },
      { id: "naam", label: "Uw naam voor de ondertekening", sampleAnswer: "Anna Ivanova" },
    ],
  },
  {
    id: "deel-3",
    instructionRu: "Заполните formulier voor het aanvragen van een bibliotheekpas.",
    taskPrompt: "Vul het aanvraagformulier voor een bibliotheekpas in.",
    fields: [
      { id: "naam", label: "Naam", sampleAnswer: "Anna Ivanova" },
      { id: "geboortedatum", label: "Geboortedatum", sampleAnswer: "14-03-1990" },
      { id: "adres", label: "Adres", sampleAnswer: "Molenstraat 8, Utrecht" },
      { id: "email", label: "E-mailadres", sampleAnswer: "anna.ivanova@email.nl" },
    ],
  },
  {
    id: "deel-4",
    instructionRu: "Дополните короткое сообщение коллеге по работе.",
    taskPrompt:
      "Vul het bericht aan uw collega aan: 'Beste, ik ben vandaag ___ en kom daarom later op kantoor. Ik ben er rond ___. Groetjes, ___.'",
    fields: [
      { id: "reden", label: "Waarom komt u later?", sampleAnswer: "naar de tandarts" },
      { id: "tijd", label: "Hoe laat bent u er ongeveer?", sampleAnswer: "11 uur" },
      { id: "naam", label: "Uw naam voor de ondertekening", sampleAnswer: "Anna Ivanova" },
    ],
  },
  {
    id: "deel-5",
    instructionRu: "Заполните форму запроса на изменение адреса.",
    taskPrompt: "Vul het formulier voor een adreswijziging in.",
    fields: [
      { id: "oudadres", label: "Oud adres", sampleAnswer: "Kerkstraat 12, Utrecht" },
      { id: "nieuwadres", label: "Nieuw adres", sampleAnswer: "Molenstraat 8, Utrecht" },
      { id: "datum", label: "Datum van verhuizing", sampleAnswer: "1 september 2026" },
    ],
  },
  {
    id: "deel-6",
    instructionRu: "Дополните текст объявления о продаже.",
    taskPrompt:
      "Vul de advertentie aan: 'Te koop: een ___ in goede staat. Prijs: ___. Contact opnemen via ___.'",
    fields: [
      { id: "product", label: "Wat verkoopt u?", sampleAnswer: "fiets" },
      { id: "prijs", label: "Voor welke prijs?", sampleAnswer: "80 euro" },
      { id: "contact", label: "Hoe kan men contact opnemen?", sampleAnswer: "telefoon of e-mail" },
    ],
  },
  {
    id: "deel-7",
    instructionRu: "Заполните форму записи ребёнка в детский сад.",
    taskPrompt: "Vul het inschrijfformulier voor de kinderopvang in.",
    fields: [
      { id: "naamkind", label: "Naam van het kind", sampleAnswer: "Sofia Ivanova" },
      { id: "geboortedatum", label: "Geboortedatum van het kind", sampleAnswer: "20-06-2023" },
      { id: "dagen", label: "Gewenste opvangdagen", sampleAnswer: "maandag, woensdag, vrijdag" },
      { id: "naamouder", label: "Naam van de ouder", sampleAnswer: "Anna Ivanova" },
    ],
  },
  {
    id: "deel-8",
    instructionRu: "Дополните короткое сообщение соседу.",
    taskPrompt:
      "Vul het briefje aan de buurman aan: 'Beste buurman, sorry voor het lawaai gisteravond, wij hadden ___. Het gebeurt niet weer. Groetjes, ___.'",
    fields: [
      { id: "reden", label: "Waarom was er lawaai?", sampleAnswer: "een verjaardagsfeestje" },
      { id: "naam", label: "Uw naam voor de ondertekening", sampleAnswer: "Anna Ivanova" },
    ],
  },
  {
    id: "deel-9",
    instructionRu: "Заполните форму записи на курс нидерландского.",
    taskPrompt: "Vul het inschrijfformulier voor de taalcursus in.",
    fields: [
      { id: "naam", label: "Naam", sampleAnswer: "Anna Ivanova" },
      { id: "niveau", label: "Huidig taalniveau", sampleAnswer: "A2" },
      { id: "dagen", label: "Beschikbare dagen", sampleAnswer: "dinsdag en donderdagavond" },
      { id: "telefoon", label: "Telefoonnummer", sampleAnswer: "06-12345678" },
    ],
  },
  {
    id: "deel-10",
    instructionRu: "Дополните текст короткого письма в жилищную корпорацию.",
    taskPrompt:
      "Vul de brief aan de woningcorporatie aan: 'Beste, in mijn woning is ___ kapot. Kunt u dit zo snel mogelijk laten repareren? Met vriendelijke groet, ___.'",
    fields: [
      { id: "probleem", label: "Wat is er kapot?", sampleAnswer: "de verwarming" },
      { id: "naam", label: "Uw naam voor de ondertekening", sampleAnswer: "Anna Ivanova" },
    ],
  },
];
