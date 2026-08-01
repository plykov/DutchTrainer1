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
];
