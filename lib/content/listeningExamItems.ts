export interface ListeningExamQuestion {
  prompt: string;
  options: string[];
  correctIndex: number;
  explanationRu: string;
}

export interface ListeningExamItem {
  id: string;
  transcript: string;
  question: ListeningExamQuestion;
}

// §7 — Luisteren exam demo: original transcripts, distinct from the
// /listening practice pool, run under strict exam pacing (no early-start
// button, forced pre-read, single play, no replay) via ExamListeningRunner.
// 15-item mechanism demo, not the full ~40-question / 90-minute run.
export const LISTENING_EXAM_ITEMS: ListeningExamItem[] = [
  {
    id: "lexam-1",
    transcript:
      "Welkom bij de gemeente. Voor paspoorten en identiteitskaarten toetst u één, voor uittreksels toetst u twee, voor overige vragen toetst u drie.",
    question: {
      prompt: "Welk cijfer toetst u voor een uittreksel?",
      options: ["Eén", "Twee", "Drie"],
      correctIndex: 1,
      explanationRu: "'voor uittreksels toetst u twee' — для выписок нажимаете два.",
    },
  },
  {
    id: "lexam-2",
    transcript:
      "Uw pakket is niet afgeleverd omdat er niemand thuis was. U kunt het ophalen bij het afhaalpunt aan de Marktstraat, tot uiterlijk volgende week vrijdag.",
    question: {
      prompt: "Waarom is het pakket niet afgeleverd?",
      options: ["Niemand was thuis", "Het adres was fout", "Het pakket was kapot"],
      correctIndex: 0,
      explanationRu: "'omdat er niemand thuis was' — потому что дома никого не было.",
    },
  },
  {
    id: "lexam-3",
    transcript:
      "De trein naar Utrecht vertrekt vandaag van spoor 5 in plaats van spoor 3, vanwege werkzaamheden aan het spoor.",
    question: {
      prompt: "Van welk spoor vertrekt de trein vandaag?",
      options: ["Spoor 3", "Spoor 5", "Spoor 7"],
      correctIndex: 1,
      explanationRu: "'vertrekt vandaag van spoor 5' — сегодня отправление с пятой платформы.",
    },
  },
  {
    id: "lexam-4",
    transcript:
      "Bedankt voor uw telefoontje. Onze openingstijden zijn van maandag tot en met vrijdag, van negen tot vijf uur. In het weekend zijn wij gesloten.",
    question: {
      prompt: "Wanneer is de instantie gesloten?",
      options: ["In het weekend", "Op maandag", "Nooit"],
      correctIndex: 0,
      explanationRu: "'In het weekend zijn wij gesloten' — по выходным закрыто.",
    },
  },
  {
    id: "lexam-5",
    transcript:
      "Voor deze cursus heeft u geen voorkennis nodig. Wel wordt gevraagd om elke week het huiswerk te maken en op tijd aanwezig te zijn.",
    question: {
      prompt: "Wat wordt er wél van de cursist gevraagd?",
      options: ["Voorkennis van het onderwerp", "Elke week huiswerk maken", "Een diploma meenemen"],
      correctIndex: 1,
      explanationRu: "'gevraagd om elke week het huiswerk te maken' — просят каждую неделю делать домашнее задание.",
    },
  },
  {
    id: "lexam-6",
    transcript:
      "Let op: door een technische storing kunnen wij vandaag geen betalingen per pin verwerken. Contant betalen is wel mogelijk.",
    question: {
      prompt: "Hoe kunt u vandaag wel betalen?",
      options: ["Contant", "Alleen met pin", "Helemaal niet"],
      correctIndex: 0,
      explanationRu: "'Contant betalen is wel mogelijk' — можно оплатить наличными.",
    },
  },
  {
    id: "lexam-7",
    transcript:
      "De huisarts is vandaag afwezig wegens ziekte. Voor spoedgevallen kunt u terecht bij de collega-praktijk twee straten verderop.",
    question: {
      prompt: "Waarom is de huisarts afwezig?",
      options: ["Wegens ziekte", "Wegens vakantie", "Wegens een vergadering"],
      correctIndex: 0,
      explanationRu: "'is vandaag afwezig wegens ziekte' — отсутствует по болезни.",
    },
  },
  {
    id: "lexam-8",
    transcript:
      "Uw sollicitatie is helaas niet doorgegaan naar de volgende ronde. We wensen u veel succes bij uw verdere zoektocht.",
    question: {
      prompt: "Wat is het resultaat van de sollicitatie?",
      options: ["Afgewezen", "Aangenomen", "Uitgesteld"],
      correctIndex: 0,
      explanationRu: "'is helaas niet doorgegaan naar de volgende ronde' — отказ, кандидат не прошёл дальше.",
    },
  },
  {
    id: "lexam-9",
    transcript:
      "Vergeet niet: morgen om acht uur 's ochtends wordt het water in het hele gebouw voor twee uur afgesloten voor onderhoud.",
    question: {
      prompt: "Hoe lang wordt het water afgesloten?",
      options: ["Twee uur", "De hele dag", "Tien minuten"],
      correctIndex: 0,
      explanationRu: "'wordt het water ... voor twee uur afgesloten' — воду отключат на два часа.",
    },
  },
  {
    id: "lexam-10",
    transcript:
      "Uw aanvraag is ontvangen en wordt binnen zes weken beoordeeld. U ontvangt hierover per post bericht.",
    question: {
      prompt: "Hoe ontvangt u bericht over de beoordeling?",
      options: ["Per post", "Per telefoon", "U moet zelf bellen"],
      correctIndex: 0,
      explanationRu: "'U ontvangt hierover per post bericht' — ответ придёт по почте.",
    },
  },
  {
    id: "lexam-11",
    transcript:
      "De bibliotheek is vandaag eerder dicht, om vier uur in plaats van acht uur, vanwege een personeelsbijeenkomst.",
    question: {
      prompt: "Hoe laat sluit de bibliotheek vandaag?",
      options: ["Om vier uur", "Om acht uur", "Om zes uur"],
      correctIndex: 0,
      explanationRu: "'eerder dicht, om vier uur' — сегодня закрывается раньше, в четыре часа.",
    },
  },
  {
    id: "lexam-12",
    transcript:
      "Voordat u het formulier opstuurt, controleert u of alle velden zijn ingevuld en of uw handtekening eronder staat.",
    question: {
      prompt: "Wat moet u controleren voor het opsturen?",
      options: ["Alle velden en de handtekening", "Alleen de datum", "Niets, het is niet nodig"],
      correctIndex: 0,
      explanationRu: "'controleert u of alle velden zijn ingevuld en of uw handtekening eronder staat' — проверьте поля и подпись.",
    },
  },
  {
    id: "lexam-13",
    transcript:
      "De verzekering dekt schade aan uw woning, maar niet aan uw auto. Voor autoschade heeft u een aparte polis nodig.",
    question: {
      prompt: "Wat dekt deze verzekering niet?",
      options: ["Schade aan de auto", "Schade aan de woning", "Alles"],
      correctIndex: 0,
      explanationRu: "'niet aan uw auto' — страховка не покрывает ущерб автомобилю.",
    },
  },
  {
    id: "lexam-14",
    transcript:
      "Wij zoeken vrijwilligers voor de voedselbank op zaterdagochtend. Ervaring is niet nodig, een enthousiaste houding wel.",
    question: {
      prompt: "Wat wordt er van de vrijwilligers gevraagd?",
      options: ["Een enthousiaste houding", "Werkervaring", "Een diploma"],
      correctIndex: 0,
      explanationRu: "'een enthousiaste houding wel' — нужен только энтузиазм, а не опыт.",
    },
  },
  {
    id: "lexam-15",
    transcript:
      "Uw huurcontract wordt automatisch verlengd, tenzij u minstens één maand van tevoren schriftelijk opzegt.",
    question: {
      prompt: "Wat gebeurt er als u niets doet?",
      options: ["Het contract wordt automatisch verlengd", "Het contract stopt automatisch", "U moet opnieuw solliciteren"],
      correctIndex: 0,
      explanationRu: "'wordt automatisch verlengd, tenzij u ... opzegt' — контракт продлевается автоматически, если не отменить письменно.",
    },
  },
];
