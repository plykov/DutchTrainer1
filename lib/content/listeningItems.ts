import { TargetLevel } from "../types";

export interface ListeningQuestion {
  prompt: string;
  options: string[];
  correctIndex: number;
  explanationRu: string;
}

export interface ListeningItem {
  id: string;
  transcript: string;
  level: TargetLevel;
  topic: string;
  question: ListeningQuestion;
}

// §7 — Luisteren: single listen, no replay, 25s to pre-read the question
// before playback starts. Original transcripts, not exam material.
export const LISTENING_ITEMS: ListeningItem[] = [
  {
    id: "listen-1",
    level: "A2",
    topic: "afspraak_verzetten",
    transcript:
      "Goedemiddag, u spreekt met de huisartsenpraktijk. Uw afspraak van morgen is verzet naar vrijdag om tien uur. Belt u ons als dat niet uitkomt.",
    question: {
      prompt: "Naar welke dag is de afspraak verzet?",
      options: ["Naar morgen", "Naar vrijdag", "Naar maandag"],
      correctIndex: 1,
      explanationRu: "В сообщении сказано: 'verzet naar vrijdag om tien uur' — приём перенесён на пятницу.",
    },
  },
  {
    id: "listen-2",
    level: "A2",
    topic: "gemeente",
    transcript:
      "Voor het aanvragen van een nieuw paspoort moet u eerst online een afspraak maken bij de gemeente. Neem uw oude paspoort en een pasfoto mee.",
    question: {
      prompt: "Wat moet u eerst doen om een nieuw paspoort aan te vragen?",
      options: ["Een pasfoto laten maken", "Online een afspraak maken", "Naar de huisarts gaan"],
      correctIndex: 1,
      explanationRu: "Ключевое слово 'eerst' (сначала) — сначала нужно записаться онлайн на приём в мэрии.",
    },
  },
  {
    id: "listen-3",
    level: "B1",
    topic: "werk",
    transcript:
      "Bedankt voor uw sollicitatie. We hebben uw cv ontvangen en nodigen u uit voor een gesprek volgende week dinsdag om twee uur op ons kantoor.",
    question: {
      prompt: "Waarvoor wordt de luisteraar uitgenodigd?",
      options: ["Voor een cursus", "Voor een gesprek", "Voor een medische controle"],
      correctIndex: 1,
      explanationRu: "'nodigen u uit voor een gesprek' — приглашают на собеседование.",
    },
  },
  {
    id: "listen-4",
    level: "B1",
    topic: "gezondheid",
    transcript:
      "U kunt uw medicijnen ophalen bij de apotheek naast het ziekenhuis. De apotheek is open tot zes uur vanavond, dus kom op tijd.",
    question: {
      prompt: "Tot hoe laat is de apotheek vanavond open?",
      options: ["Tot vier uur", "Tot zes uur", "Tot acht uur"],
      correctIndex: 1,
      explanationRu: "'open tot zes uur vanavond' — открыто до шести часов вечера.",
    },
  },
  {
    id: "listen-5",
    level: "A2",
    topic: "wonen",
    transcript:
      "Beste bewoner, op maandag komt de monteur langs om de verwarming te controleren. Bent u er niet, bel dan naar het kantoor om een nieuwe afspraak te maken.",
    question: {
      prompt: "Wanneer komt de monteur?",
      options: ["Op maandag", "Op vrijdag", "Vandaag"],
      correctIndex: 0,
      explanationRu: "'op maandag komt de monteur langs' — мастер придёт в понедельник.",
    },
  },
  {
    id: "listen-6",
    level: "A2",
    topic: "onderwijs",
    transcript:
      "De Nederlandse les begint om negen uur, niet om tien uur zoals vorige week. Kom op tijd, want de deur gaat om vijf over negen dicht.",
    question: {
      prompt: "Hoe laat begint de les deze week?",
      options: ["Om negen uur", "Om tien uur", "Om elf uur"],
      correctIndex: 0,
      explanationRu: "'de les begint om negen uur, niet om tien uur' — время изменилось на девять часов.",
    },
  },
  {
    id: "listen-7",
    level: "B1",
    topic: "geld",
    transcript:
      "Uw rekening van deze maand is hoger dan normaal, omdat u meer stroom heeft gebruikt. Betaal het bedrag voor de vijftiende, anders krijgt u een herinnering.",
    question: {
      prompt: "Waarom is de rekening hoger dan normaal?",
      options: ["Meer stroom gebruikt", "Een fout van het bedrijf", "Een nieuwe woning"],
      correctIndex: 0,
      explanationRu: "'omdat u meer stroom heeft gebruikt' — счёт выше из-за большего потребления электроэнергии.",
    },
  },
  {
    id: "listen-8",
    level: "A2",
    topic: "gezondheid",
    transcript:
      "Uw recept is klaar bij de apotheek. U kunt het medicijn ophalen met uw pas. Neem het drie keer per dag in, na het eten.",
    question: {
      prompt: "Hoe vaak per dag moet u het medicijn innemen?",
      options: ["Een keer", "Twee keer", "Drie keer"],
      correctIndex: 2,
      explanationRu: "'Neem het drie keer per dag in' — принимать три раза в день.",
    },
  },
  {
    id: "listen-9",
    level: "B1",
    topic: "werk",
    transcript:
      "Uw contract loopt over twee maanden af. Als u wilt verlengen, moet u dat voor het einde van deze maand aan uw werkgever laten weten.",
    question: {
      prompt: "Wanneer loopt het contract af?",
      options: ["Over twee weken", "Over twee maanden", "Volgend jaar"],
      correctIndex: 1,
      explanationRu: "'Uw contract loopt over twee maanden af' — контракт заканчивается через два месяца.",
    },
  },
  {
    id: "listen-10",
    level: "A2",
    topic: "gemeente",
    transcript:
      "Voor een nieuwe pas moet u langskomen bij de gemeente met uw oude pas en een pasfoto. De balie is open van negen tot vier uur.",
    question: {
      prompt: "Wat moet u meenemen naar de gemeente?",
      options: ["Alleen een pasfoto", "De oude pas en een pasfoto", "Niets"],
      correctIndex: 1,
      explanationRu: "'met uw oude pas en een pasfoto' — нужно принести старую карту и фото.",
    },
  },
  {
    id: "listen-11",
    level: "B1",
    topic: "wonen",
    transcript:
      "De huur voor uw woning gaat volgend jaar iets omhoog. U krijgt binnenkort een brief met het nieuwe bedrag en de datum.",
    question: {
      prompt: "Wat gebeurt er met de huur volgend jaar?",
      options: ["Ze gaat omlaag", "Ze blijft gelijk", "Ze gaat omhoog"],
      correctIndex: 2,
      explanationRu: "'De huur ... gaat ... iets omhoog' — арендная плата немного повысится.",
    },
  },
  {
    id: "listen-12",
    level: "A2",
    topic: "afspraak_verzetten",
    transcript:
      "Uw afspraak bij de tandarts van donderdag is helaas geannuleerd. We bellen u volgende week om een nieuwe datum af te spreken.",
    question: {
      prompt: "Wat is er gebeurd met de afspraak van donderdag?",
      options: ["Ze is verzet naar vrijdag", "Ze is geannuleerd", "Ze blijft hetzelfde"],
      correctIndex: 1,
      explanationRu: "'is helaas geannuleerd' — приём отменён.",
    },
  },
  {
    id: "listen-13",
    level: "B1",
    topic: "geld",
    transcript:
      "Om een verzekering af te sluiten, heeft u een polis en uw inkomen nodig. U kunt alles online invullen op onze website.",
    question: {
      prompt: "Wat heeft u nodig om een verzekering af te sluiten?",
      options: ["Een polis en uw inkomen", "Alleen een adres", "Een nieuw paspoort"],
      correctIndex: 0,
      explanationRu: "'een polis en uw inkomen nodig' — для оформления страховки нужны полис и данные о доходе.",
    },
  },
  {
    id: "listen-14",
    level: "A2",
    topic: "buurt",
    transcript:
      "Volgende week is er een bijeenkomst voor de hele buurt in het buurthuis. Iedereen is welkom, ook kinderen.",
    question: {
      prompt: "Voor wie is de bijeenkomst?",
      options: ["Alleen volwassenen", "Voor de hele buurt", "Alleen voor kinderen"],
      correctIndex: 1,
      explanationRu: "'Iedereen is welkom, ook kinderen' — собрание для всех жителей района.",
    },
  },

  // --- +100 batch: templated across 10 civic-life scenarios (appointment
  // reschedules, municipality notices, pharmacy/work/housing/transport/
  // school/money/post/neighborhood announcements), varying day/time/name
  // slots for genuine variety while keeping each sentence frame vetted.
  {
    id: "listen-gen-1",
    level: "B1",
    topic: "afspraak_verzetten",
    transcript:
      "Goedemiddag, met de praktijk van dokter Jansen. Uw afspraak is verzet naar maandag om negen uur. Belt u ons als dat niet uitkomt.",
    question: {
      prompt: "Naar wanneer is de afspraak verzet?",
      options: ["Naar maandag om negen uur", "Naar morgen om negen uur", "De afspraak is geannuleerd"],
      correctIndex: 0,
      explanationRu: "'verzet naar maandag om negen uur' — приём перенесён на указанные день и время.",
    },
  },
  {
    id: "listen-gen-2",
    level: "A2",
    topic: "afspraak_verzetten",
    transcript:
      "Goedemiddag, met de praktijk van dokter de Vries. Uw afspraak is verzet naar dinsdag om tien uur. Belt u ons als dat niet uitkomt.",
    question: {
      prompt: "Naar wanneer is de afspraak verzet?",
      options: ["Naar dinsdag om tien uur", "Naar morgen om negen uur", "De afspraak is geannuleerd"],
      correctIndex: 0,
      explanationRu: "'verzet naar dinsdag om tien uur' — приём перенесён на указанные день и время.",
    },
  },
  {
    id: "listen-gen-3",
    level: "A2",
    topic: "afspraak_verzetten",
    transcript:
      "Goedemiddag, met de praktijk van dokter Bakker. Uw afspraak is verzet naar woensdag om elf uur. Belt u ons als dat niet uitkomt.",
    question: {
      prompt: "Naar wanneer is de afspraak verzet?",
      options: ["Naar woensdag om elf uur", "Naar morgen om negen uur", "De afspraak is geannuleerd"],
      correctIndex: 0,
      explanationRu: "'verzet naar woensdag om elf uur' — приём перенесён на указанные день и время.",
    },
  },
  {
    id: "listen-gen-4",
    level: "B1",
    topic: "afspraak_verzetten",
    transcript:
      "Goedemiddag, met de praktijk van dokter Visser. Uw afspraak is verzet naar donderdag om twaalf uur. Belt u ons als dat niet uitkomt.",
    question: {
      prompt: "Naar wanneer is de afspraak verzet?",
      options: ["Naar donderdag om twaalf uur", "Naar morgen om negen uur", "De afspraak is geannuleerd"],
      correctIndex: 0,
      explanationRu: "'verzet naar donderdag om twaalf uur' — приём перенесён на указанные день и время.",
    },
  },
  {
    id: "listen-gen-5",
    level: "A2",
    topic: "afspraak_verzetten",
    transcript:
      "Goedemiddag, met de praktijk van dokter Smit. Uw afspraak is verzet naar vrijdag om één uur. Belt u ons als dat niet uitkomt.",
    question: {
      prompt: "Naar wanneer is de afspraak verzet?",
      options: ["Naar vrijdag om één uur", "Naar morgen om negen uur", "De afspraak is geannuleerd"],
      correctIndex: 0,
      explanationRu: "'verzet naar vrijdag om één uur' — приём перенесён на указанные день и время.",
    },
  },
  {
    id: "listen-gen-6",
    level: "A2",
    topic: "afspraak_verzetten",
    transcript:
      "Goedemiddag, met de praktijk van dokter Meijer. Uw afspraak is verzet naar zaterdag om twee uur. Belt u ons als dat niet uitkomt.",
    question: {
      prompt: "Naar wanneer is de afspraak verzet?",
      options: ["Naar zaterdag om twee uur", "Naar morgen om negen uur", "De afspraak is geannuleerd"],
      correctIndex: 0,
      explanationRu: "'verzet naar zaterdag om twee uur' — приём перенесён на указанные день и время.",
    },
  },
  {
    id: "listen-gen-7",
    level: "B1",
    topic: "afspraak_verzetten",
    transcript:
      "Goedemiddag, met de praktijk van dokter de Boer. Uw afspraak is verzet naar zondag om drie uur. Belt u ons als dat niet uitkomt.",
    question: {
      prompt: "Naar wanneer is de afspraak verzet?",
      options: ["Naar zondag om drie uur", "Naar morgen om negen uur", "De afspraak is geannuleerd"],
      correctIndex: 0,
      explanationRu: "'verzet naar zondag om drie uur' — приём перенесён на указанные день и время.",
    },
  },
  {
    id: "listen-gen-8",
    level: "A2",
    topic: "afspraak_verzetten",
    transcript:
      "Goedemiddag, met de praktijk van dokter Mulder. Uw afspraak is verzet naar volgende maandag om vier uur. Belt u ons als dat niet uitkomt.",
    question: {
      prompt: "Naar wanneer is de afspraak verzet?",
      options: ["Naar volgende maandag om vier uur", "Naar morgen om negen uur", "De afspraak is geannuleerd"],
      correctIndex: 0,
      explanationRu: "'verzet naar volgende maandag om vier uur' — приём перенесён на указанные день и время.",
    },
  },
  {
    id: "listen-gen-9",
    level: "A2",
    topic: "afspraak_verzetten",
    transcript:
      "Goedemiddag, met de praktijk van dokter de Groot. Uw afspraak is verzet naar volgende dinsdag om half tien. Belt u ons als dat niet uitkomt.",
    question: {
      prompt: "Naar wanneer is de afspraak verzet?",
      options: ["Naar volgende dinsdag om half tien", "Naar morgen om negen uur", "De afspraak is geannuleerd"],
      correctIndex: 0,
      explanationRu: "'verzet naar volgende dinsdag om half tien' — приём перенесён на указанные день и время.",
    },
  },
  {
    id: "listen-gen-10",
    level: "B1",
    topic: "afspraak_verzetten",
    transcript:
      "Goedemiddag, met de praktijk van dokter Bos. Uw afspraak is verzet naar volgende woensdag om half elf. Belt u ons als dat niet uitkomt.",
    question: {
      prompt: "Naar wanneer is de afspraak verzet?",
      options: ["Naar volgende woensdag om half elf", "Naar morgen om negen uur", "De afspraak is geannuleerd"],
      correctIndex: 0,
      explanationRu: "'verzet naar volgende woensdag om half elf' — приём перенесён на указанные день и время.",
    },
  },
  {
    id: "listen-gen-11",
    level: "B1",
    topic: "gemeente",
    transcript:
      "U spreekt de gemeente. Uw afspraak voor het inschrijven staat gepland op maandag om negen uur. Neemt u een geldig identiteitsbewijs mee.",
    question: {
      prompt: "Wat moet u meenemen naar de afspraak?",
      options: ["Een geldig identiteitsbewijs", "Een bankpas", "Niets"],
      correctIndex: 0,
      explanationRu: "'Neemt u een geldig identiteitsbewijs mee' — на встречу нужно взять действительное удостоверение личности.",
    },
  },
  {
    id: "listen-gen-12",
    level: "A2",
    topic: "gemeente",
    transcript:
      "U spreekt de gemeente. Uw afspraak voor het inschrijven staat gepland op dinsdag om tien uur. Neemt u een geldig identiteitsbewijs mee.",
    question: {
      prompt: "Wat moet u meenemen naar de afspraak?",
      options: ["Een geldig identiteitsbewijs", "Een bankpas", "Niets"],
      correctIndex: 0,
      explanationRu: "'Neemt u een geldig identiteitsbewijs mee' — на встречу нужно взять действительное удостоверение личности.",
    },
  },
  {
    id: "listen-gen-13",
    level: "A2",
    topic: "gemeente",
    transcript:
      "U spreekt de gemeente. Uw afspraak voor het inschrijven staat gepland op woensdag om elf uur. Neemt u een geldig identiteitsbewijs mee.",
    question: {
      prompt: "Wat moet u meenemen naar de afspraak?",
      options: ["Een geldig identiteitsbewijs", "Een bankpas", "Niets"],
      correctIndex: 0,
      explanationRu: "'Neemt u een geldig identiteitsbewijs mee' — на встречу нужно взять действительное удостоверение личности.",
    },
  },
  {
    id: "listen-gen-14",
    level: "B1",
    topic: "gemeente",
    transcript:
      "U spreekt de gemeente. Uw afspraak voor het inschrijven staat gepland op donderdag om twaalf uur. Neemt u een geldig identiteitsbewijs mee.",
    question: {
      prompt: "Wat moet u meenemen naar de afspraak?",
      options: ["Een geldig identiteitsbewijs", "Een bankpas", "Niets"],
      correctIndex: 0,
      explanationRu: "'Neemt u een geldig identiteitsbewijs mee' — на встречу нужно взять действительное удостоверение личности.",
    },
  },
  {
    id: "listen-gen-15",
    level: "A2",
    topic: "gemeente",
    transcript:
      "U spreekt de gemeente. Uw afspraak voor het inschrijven staat gepland op vrijdag om één uur. Neemt u een geldig identiteitsbewijs mee.",
    question: {
      prompt: "Wat moet u meenemen naar de afspraak?",
      options: ["Een geldig identiteitsbewijs", "Een bankpas", "Niets"],
      correctIndex: 0,
      explanationRu: "'Neemt u een geldig identiteitsbewijs mee' — на встречу нужно взять действительное удостоверение личности.",
    },
  },
  {
    id: "listen-gen-16",
    level: "A2",
    topic: "gemeente",
    transcript:
      "U spreekt de gemeente. Uw afspraak voor het inschrijven staat gepland op zaterdag om twee uur. Neemt u een geldig identiteitsbewijs mee.",
    question: {
      prompt: "Wat moet u meenemen naar de afspraak?",
      options: ["Een geldig identiteitsbewijs", "Een bankpas", "Niets"],
      correctIndex: 0,
      explanationRu: "'Neemt u een geldig identiteitsbewijs mee' — на встречу нужно взять действительное удостоверение личности.",
    },
  },
  {
    id: "listen-gen-17",
    level: "B1",
    topic: "gemeente",
    transcript:
      "U spreekt de gemeente. Uw afspraak voor het inschrijven staat gepland op zondag om drie uur. Neemt u een geldig identiteitsbewijs mee.",
    question: {
      prompt: "Wat moet u meenemen naar de afspraak?",
      options: ["Een geldig identiteitsbewijs", "Een bankpas", "Niets"],
      correctIndex: 0,
      explanationRu: "'Neemt u een geldig identiteitsbewijs mee' — на встречу нужно взять действительное удостоверение личности.",
    },
  },
  {
    id: "listen-gen-18",
    level: "A2",
    topic: "gemeente",
    transcript:
      "U spreekt de gemeente. Uw afspraak voor het inschrijven staat gepland op volgende maandag om vier uur. Neemt u een geldig identiteitsbewijs mee.",
    question: {
      prompt: "Wat moet u meenemen naar de afspraak?",
      options: ["Een geldig identiteitsbewijs", "Een bankpas", "Niets"],
      correctIndex: 0,
      explanationRu: "'Neemt u een geldig identiteitsbewijs mee' — на встречу нужно взять действительное удостоверение личности.",
    },
  },
  {
    id: "listen-gen-19",
    level: "A2",
    topic: "gemeente",
    transcript:
      "U spreekt de gemeente. Uw afspraak voor het inschrijven staat gepland op volgende dinsdag om half tien. Neemt u een geldig identiteitsbewijs mee.",
    question: {
      prompt: "Wat moet u meenemen naar de afspraak?",
      options: ["Een geldig identiteitsbewijs", "Een bankpas", "Niets"],
      correctIndex: 0,
      explanationRu: "'Neemt u een geldig identiteitsbewijs mee' — на встречу нужно взять действительное удостоверение личности.",
    },
  },
  {
    id: "listen-gen-20",
    level: "B1",
    topic: "gemeente",
    transcript:
      "U spreekt de gemeente. Uw afspraak voor het inschrijven staat gepland op volgende woensdag om half elf. Neemt u een geldig identiteitsbewijs mee.",
    question: {
      prompt: "Wat moet u meenemen naar de afspraak?",
      options: ["Een geldig identiteitsbewijs", "Een bankpas", "Niets"],
      correctIndex: 0,
      explanationRu: "'Neemt u een geldig identiteitsbewijs mee' — на встречу нужно взять действительное удостоверение личности.",
    },
  },
  {
    id: "listen-gen-21",
    level: "B1",
    topic: "gezondheid",
    transcript:
      "Dit is een bericht van de apotheek. Uw medicijnen liggen klaar en kunnen worden opgehaald tot negen uur vanmiddag.",
    question: {
      prompt: "Tot hoe laat kunt u de medicijnen ophalen?",
      options: ["Tot negen uur vanmiddag", "Alleen 's ochtends vroeg", "De hele week"],
      correctIndex: 0,
      explanationRu: "'kunnen worden opgehaald tot negen uur vanmiddag' — лекарства можно забрать до указанного времени сегодня.",
    },
  },
  {
    id: "listen-gen-22",
    level: "A2",
    topic: "gezondheid",
    transcript:
      "Dit is een bericht van de apotheek. Uw medicijnen liggen klaar en kunnen worden opgehaald tot tien uur vanmiddag.",
    question: {
      prompt: "Tot hoe laat kunt u de medicijnen ophalen?",
      options: ["Tot tien uur vanmiddag", "Alleen 's ochtends vroeg", "De hele week"],
      correctIndex: 0,
      explanationRu: "'kunnen worden opgehaald tot tien uur vanmiddag' — лекарства можно забрать до указанного времени сегодня.",
    },
  },
  {
    id: "listen-gen-23",
    level: "A2",
    topic: "gezondheid",
    transcript:
      "Dit is een bericht van de apotheek. Uw medicijnen liggen klaar en kunnen worden opgehaald tot elf uur vanmiddag.",
    question: {
      prompt: "Tot hoe laat kunt u de medicijnen ophalen?",
      options: ["Tot elf uur vanmiddag", "Alleen 's ochtends vroeg", "De hele week"],
      correctIndex: 0,
      explanationRu: "'kunnen worden opgehaald tot elf uur vanmiddag' — лекарства можно забрать до указанного времени сегодня.",
    },
  },
  {
    id: "listen-gen-24",
    level: "B1",
    topic: "gezondheid",
    transcript:
      "Dit is een bericht van de apotheek. Uw medicijnen liggen klaar en kunnen worden opgehaald tot twaalf uur vanmiddag.",
    question: {
      prompt: "Tot hoe laat kunt u de medicijnen ophalen?",
      options: ["Tot twaalf uur vanmiddag", "Alleen 's ochtends vroeg", "De hele week"],
      correctIndex: 0,
      explanationRu: "'kunnen worden opgehaald tot twaalf uur vanmiddag' — лекарства можно забрать до указанного времени сегодня.",
    },
  },
  {
    id: "listen-gen-25",
    level: "A2",
    topic: "gezondheid",
    transcript:
      "Dit is een bericht van de apotheek. Uw medicijnen liggen klaar en kunnen worden opgehaald tot één uur vanmiddag.",
    question: {
      prompt: "Tot hoe laat kunt u de medicijnen ophalen?",
      options: ["Tot één uur vanmiddag", "Alleen 's ochtends vroeg", "De hele week"],
      correctIndex: 0,
      explanationRu: "'kunnen worden opgehaald tot één uur vanmiddag' — лекарства можно забрать до указанного времени сегодня.",
    },
  },
  {
    id: "listen-gen-26",
    level: "A2",
    topic: "gezondheid",
    transcript:
      "Dit is een bericht van de apotheek. Uw medicijnen liggen klaar en kunnen worden opgehaald tot twee uur vanmiddag.",
    question: {
      prompt: "Tot hoe laat kunt u de medicijnen ophalen?",
      options: ["Tot twee uur vanmiddag", "Alleen 's ochtends vroeg", "De hele week"],
      correctIndex: 0,
      explanationRu: "'kunnen worden opgehaald tot twee uur vanmiddag' — лекарства можно забрать до указанного времени сегодня.",
    },
  },
  {
    id: "listen-gen-27",
    level: "B1",
    topic: "gezondheid",
    transcript:
      "Dit is een bericht van de apotheek. Uw medicijnen liggen klaar en kunnen worden opgehaald tot drie uur vanmiddag.",
    question: {
      prompt: "Tot hoe laat kunt u de medicijnen ophalen?",
      options: ["Tot drie uur vanmiddag", "Alleen 's ochtends vroeg", "De hele week"],
      correctIndex: 0,
      explanationRu: "'kunnen worden opgehaald tot drie uur vanmiddag' — лекарства можно забрать до указанного времени сегодня.",
    },
  },
  {
    id: "listen-gen-28",
    level: "A2",
    topic: "gezondheid",
    transcript:
      "Dit is een bericht van de apotheek. Uw medicijnen liggen klaar en kunnen worden opgehaald tot vier uur vanmiddag.",
    question: {
      prompt: "Tot hoe laat kunt u de medicijnen ophalen?",
      options: ["Tot vier uur vanmiddag", "Alleen 's ochtends vroeg", "De hele week"],
      correctIndex: 0,
      explanationRu: "'kunnen worden opgehaald tot vier uur vanmiddag' — лекарства можно забрать до указанного времени сегодня.",
    },
  },
  {
    id: "listen-gen-29",
    level: "A2",
    topic: "gezondheid",
    transcript:
      "Dit is een bericht van de apotheek. Uw medicijnen liggen klaar en kunnen worden opgehaald tot half tien vanmiddag.",
    question: {
      prompt: "Tot hoe laat kunt u de medicijnen ophalen?",
      options: ["Tot half tien vanmiddag", "Alleen 's ochtends vroeg", "De hele week"],
      correctIndex: 0,
      explanationRu: "'kunnen worden opgehaald tot half tien vanmiddag' — лекарства можно забрать до указанного времени сегодня.",
    },
  },
  {
    id: "listen-gen-30",
    level: "B1",
    topic: "gezondheid",
    transcript:
      "Dit is een bericht van de apotheek. Uw medicijnen liggen klaar en kunnen worden opgehaald tot half elf vanmiddag.",
    question: {
      prompt: "Tot hoe laat kunt u de medicijnen ophalen?",
      options: ["Tot half elf vanmiddag", "Alleen 's ochtends vroeg", "De hele week"],
      correctIndex: 0,
      explanationRu: "'kunnen worden opgehaald tot half elf vanmiddag' — лекарства можно забрать до указанного времени сегодня.",
    },
  },
  {
    id: "listen-gen-31",
    level: "B1",
    topic: "werk",
    transcript:
      "Beste kandidaat, uw sollicitatiegesprek is bevestigd voor maandag om negen uur op ons kantoor. Komt u tien minuten van tevoren.",
    question: {
      prompt: "Wanneer is het sollicitatiegesprek?",
      options: ["Maandag om negen uur", "Volgende maand", "Vandaag"],
      correctIndex: 0,
      explanationRu: "'bevestigd voor maandag om negen uur' — собеседование подтверждено на указанный день и время.",
    },
  },
  {
    id: "listen-gen-32",
    level: "A2",
    topic: "werk",
    transcript:
      "Beste kandidaat, uw sollicitatiegesprek is bevestigd voor dinsdag om tien uur op ons kantoor. Komt u tien minuten van tevoren.",
    question: {
      prompt: "Wanneer is het sollicitatiegesprek?",
      options: ["Dinsdag om tien uur", "Volgende maand", "Vandaag"],
      correctIndex: 0,
      explanationRu: "'bevestigd voor dinsdag om tien uur' — собеседование подтверждено на указанный день и время.",
    },
  },
  {
    id: "listen-gen-33",
    level: "A2",
    topic: "werk",
    transcript:
      "Beste kandidaat, uw sollicitatiegesprek is bevestigd voor woensdag om elf uur op ons kantoor. Komt u tien minuten van tevoren.",
    question: {
      prompt: "Wanneer is het sollicitatiegesprek?",
      options: ["Woensdag om elf uur", "Volgende maand", "Vandaag"],
      correctIndex: 0,
      explanationRu: "'bevestigd voor woensdag om elf uur' — собеседование подтверждено на указанный день и время.",
    },
  },
  {
    id: "listen-gen-34",
    level: "B1",
    topic: "werk",
    transcript:
      "Beste kandidaat, uw sollicitatiegesprek is bevestigd voor donderdag om twaalf uur op ons kantoor. Komt u tien minuten van tevoren.",
    question: {
      prompt: "Wanneer is het sollicitatiegesprek?",
      options: ["Donderdag om twaalf uur", "Volgende maand", "Vandaag"],
      correctIndex: 0,
      explanationRu: "'bevestigd voor donderdag om twaalf uur' — собеседование подтверждено на указанный день и время.",
    },
  },
  {
    id: "listen-gen-35",
    level: "A2",
    topic: "werk",
    transcript:
      "Beste kandidaat, uw sollicitatiegesprek is bevestigd voor vrijdag om één uur op ons kantoor. Komt u tien minuten van tevoren.",
    question: {
      prompt: "Wanneer is het sollicitatiegesprek?",
      options: ["Vrijdag om één uur", "Volgende maand", "Vandaag"],
      correctIndex: 0,
      explanationRu: "'bevestigd voor vrijdag om één uur' — собеседование подтверждено на указанный день и время.",
    },
  },
  {
    id: "listen-gen-36",
    level: "A2",
    topic: "werk",
    transcript:
      "Beste kandidaat, uw sollicitatiegesprek is bevestigd voor zaterdag om twee uur op ons kantoor. Komt u tien minuten van tevoren.",
    question: {
      prompt: "Wanneer is het sollicitatiegesprek?",
      options: ["Zaterdag om twee uur", "Volgende maand", "Vandaag"],
      correctIndex: 0,
      explanationRu: "'bevestigd voor zaterdag om twee uur' — собеседование подтверждено на указанный день и время.",
    },
  },
  {
    id: "listen-gen-37",
    level: "B1",
    topic: "werk",
    transcript:
      "Beste kandidaat, uw sollicitatiegesprek is bevestigd voor zondag om drie uur op ons kantoor. Komt u tien minuten van tevoren.",
    question: {
      prompt: "Wanneer is het sollicitatiegesprek?",
      options: ["Zondag om drie uur", "Volgende maand", "Vandaag"],
      correctIndex: 0,
      explanationRu: "'bevestigd voor zondag om drie uur' — собеседование подтверждено на указанный день и время.",
    },
  },
  {
    id: "listen-gen-38",
    level: "A2",
    topic: "werk",
    transcript:
      "Beste kandidaat, uw sollicitatiegesprek is bevestigd voor volgende maandag om vier uur op ons kantoor. Komt u tien minuten van tevoren.",
    question: {
      prompt: "Wanneer is het sollicitatiegesprek?",
      options: ["Volgende maandag om vier uur", "Volgende maand", "Vandaag"],
      correctIndex: 0,
      explanationRu: "'bevestigd voor volgende maandag om vier uur' — собеседование подтверждено на указанный день и время.",
    },
  },
  {
    id: "listen-gen-39",
    level: "A2",
    topic: "werk",
    transcript:
      "Beste kandidaat, uw sollicitatiegesprek is bevestigd voor volgende dinsdag om half tien op ons kantoor. Komt u tien minuten van tevoren.",
    question: {
      prompt: "Wanneer is het sollicitatiegesprek?",
      options: ["Volgende dinsdag om half tien", "Volgende maand", "Vandaag"],
      correctIndex: 0,
      explanationRu: "'bevestigd voor volgende dinsdag om half tien' — собеседование подтверждено на указанный день и время.",
    },
  },
  {
    id: "listen-gen-40",
    level: "B1",
    topic: "werk",
    transcript:
      "Beste kandidaat, uw sollicitatiegesprek is bevestigd voor volgende woensdag om half elf op ons kantoor. Komt u tien minuten van tevoren.",
    question: {
      prompt: "Wanneer is het sollicitatiegesprek?",
      options: ["Volgende woensdag om half elf", "Volgende maand", "Vandaag"],
      correctIndex: 0,
      explanationRu: "'bevestigd voor volgende woensdag om half elf' — собеседование подтверждено на указанный день и время.",
    },
  },
  {
    id: "listen-gen-41",
    level: "B1",
    topic: "wonen",
    transcript:
      "Bericht van de woningcorporatie: de monteur komt langs op maandag tussen negen en twaalf uur om de verwarming te repareren.",
    question: {
      prompt: "Wanneer komt de monteur langs?",
      options: ["Op maandag tussen negen en twaalf uur", "Vandaag om vijf uur", "Hij komt niet meer"],
      correctIndex: 0,
      explanationRu: "'komt langs op maandag tussen negen en twaalf uur' — мастер приедет в указанный день в промежутке между 9 и 12.",
    },
  },
  {
    id: "listen-gen-42",
    level: "A2",
    topic: "wonen",
    transcript:
      "Bericht van de woningcorporatie: de monteur komt langs op dinsdag tussen negen en twaalf uur om de verwarming te repareren.",
    question: {
      prompt: "Wanneer komt de monteur langs?",
      options: ["Op dinsdag tussen negen en twaalf uur", "Vandaag om vijf uur", "Hij komt niet meer"],
      correctIndex: 0,
      explanationRu: "'komt langs op dinsdag tussen negen en twaalf uur' — мастер приедет в указанный день в промежутке между 9 и 12.",
    },
  },
  {
    id: "listen-gen-43",
    level: "A2",
    topic: "wonen",
    transcript:
      "Bericht van de woningcorporatie: de monteur komt langs op woensdag tussen negen en twaalf uur om de verwarming te repareren.",
    question: {
      prompt: "Wanneer komt de monteur langs?",
      options: ["Op woensdag tussen negen en twaalf uur", "Vandaag om vijf uur", "Hij komt niet meer"],
      correctIndex: 0,
      explanationRu: "'komt langs op woensdag tussen negen en twaalf uur' — мастер приедет в указанный день в промежутке между 9 и 12.",
    },
  },
  {
    id: "listen-gen-44",
    level: "B1",
    topic: "wonen",
    transcript:
      "Bericht van de woningcorporatie: de monteur komt langs op donderdag tussen negen en twaalf uur om de verwarming te repareren.",
    question: {
      prompt: "Wanneer komt de monteur langs?",
      options: ["Op donderdag tussen negen en twaalf uur", "Vandaag om vijf uur", "Hij komt niet meer"],
      correctIndex: 0,
      explanationRu: "'komt langs op donderdag tussen negen en twaalf uur' — мастер приедет в указанный день в промежутке между 9 и 12.",
    },
  },
  {
    id: "listen-gen-45",
    level: "A2",
    topic: "wonen",
    transcript:
      "Bericht van de woningcorporatie: de monteur komt langs op vrijdag tussen negen en twaalf uur om de verwarming te repareren.",
    question: {
      prompt: "Wanneer komt de monteur langs?",
      options: ["Op vrijdag tussen negen en twaalf uur", "Vandaag om vijf uur", "Hij komt niet meer"],
      correctIndex: 0,
      explanationRu: "'komt langs op vrijdag tussen negen en twaalf uur' — мастер приедет в указанный день в промежутке между 9 и 12.",
    },
  },
  {
    id: "listen-gen-46",
    level: "A2",
    topic: "wonen",
    transcript:
      "Bericht van de woningcorporatie: de monteur komt langs op zaterdag tussen negen en twaalf uur om de verwarming te repareren.",
    question: {
      prompt: "Wanneer komt de monteur langs?",
      options: ["Op zaterdag tussen negen en twaalf uur", "Vandaag om vijf uur", "Hij komt niet meer"],
      correctIndex: 0,
      explanationRu: "'komt langs op zaterdag tussen negen en twaalf uur' — мастер приедет в указанный день в промежутке между 9 и 12.",
    },
  },
  {
    id: "listen-gen-47",
    level: "B1",
    topic: "wonen",
    transcript:
      "Bericht van de woningcorporatie: de monteur komt langs op zondag tussen negen en twaalf uur om de verwarming te repareren.",
    question: {
      prompt: "Wanneer komt de monteur langs?",
      options: ["Op zondag tussen negen en twaalf uur", "Vandaag om vijf uur", "Hij komt niet meer"],
      correctIndex: 0,
      explanationRu: "'komt langs op zondag tussen negen en twaalf uur' — мастер приедет в указанный день в промежутке между 9 и 12.",
    },
  },
  {
    id: "listen-gen-48",
    level: "A2",
    topic: "wonen",
    transcript:
      "Bericht van de woningcorporatie: de monteur komt langs op volgende maandag tussen negen en twaalf uur om de verwarming te repareren.",
    question: {
      prompt: "Wanneer komt de monteur langs?",
      options: ["Op volgende maandag tussen negen en twaalf uur", "Vandaag om vijf uur", "Hij komt niet meer"],
      correctIndex: 0,
      explanationRu: "'komt langs op volgende maandag tussen negen en twaalf uur' — мастер приедет в указанный день в промежутке между 9 и 12.",
    },
  },
  {
    id: "listen-gen-49",
    level: "A2",
    topic: "wonen",
    transcript:
      "Bericht van de woningcorporatie: de monteur komt langs op volgende dinsdag tussen negen en twaalf uur om de verwarming te repareren.",
    question: {
      prompt: "Wanneer komt de monteur langs?",
      options: ["Op volgende dinsdag tussen negen en twaalf uur", "Vandaag om vijf uur", "Hij komt niet meer"],
      correctIndex: 0,
      explanationRu: "'komt langs op volgende dinsdag tussen negen en twaalf uur' — мастер приедет в указанный день в промежутке между 9 и 12.",
    },
  },
  {
    id: "listen-gen-50",
    level: "B1",
    topic: "wonen",
    transcript:
      "Bericht van de woningcorporatie: de monteur komt langs op volgende woensdag tussen negen en twaalf uur om de verwarming te repareren.",
    question: {
      prompt: "Wanneer komt de monteur langs?",
      options: ["Op volgende woensdag tussen negen en twaalf uur", "Vandaag om vijf uur", "Hij komt niet meer"],
      correctIndex: 0,
      explanationRu: "'komt langs op volgende woensdag tussen negen en twaalf uur' — мастер приедет в указанный день в промежутке между 9 и 12.",
    },
  },
  {
    id: "listen-gen-51",
    level: "B1",
    topic: "vervoer",
    transcript:
      "Attentie reizigers: de bus van negen uur naar het centrum rijdt vandaag niet. De eerstvolgende bus vertrekt een half uur later.",
    question: {
      prompt: "Wat is er met de bus van die tijd?",
      options: ["Die rijdt vandaag niet", "Die is te vroeg", "Die is dubbel zo vol"],
      correctIndex: 0,
      explanationRu: "'rijdt vandaag niet' — автобус в указанное время сегодня не ходит, следующий отправится на полчаса позже.",
    },
  },
  {
    id: "listen-gen-52",
    level: "A2",
    topic: "vervoer",
    transcript:
      "Attentie reizigers: de bus van tien uur naar het centrum rijdt vandaag niet. De eerstvolgende bus vertrekt een half uur later.",
    question: {
      prompt: "Wat is er met de bus van die tijd?",
      options: ["Die rijdt vandaag niet", "Die is te vroeg", "Die is dubbel zo vol"],
      correctIndex: 0,
      explanationRu: "'rijdt vandaag niet' — автобус в указанное время сегодня не ходит, следующий отправится на полчаса позже.",
    },
  },
  {
    id: "listen-gen-53",
    level: "A2",
    topic: "vervoer",
    transcript:
      "Attentie reizigers: de bus van elf uur naar het centrum rijdt vandaag niet. De eerstvolgende bus vertrekt een half uur later.",
    question: {
      prompt: "Wat is er met de bus van die tijd?",
      options: ["Die rijdt vandaag niet", "Die is te vroeg", "Die is dubbel zo vol"],
      correctIndex: 0,
      explanationRu: "'rijdt vandaag niet' — автобус в указанное время сегодня не ходит, следующий отправится на полчаса позже.",
    },
  },
  {
    id: "listen-gen-54",
    level: "B1",
    topic: "vervoer",
    transcript:
      "Attentie reizigers: de bus van twaalf uur naar het centrum rijdt vandaag niet. De eerstvolgende bus vertrekt een half uur later.",
    question: {
      prompt: "Wat is er met de bus van die tijd?",
      options: ["Die rijdt vandaag niet", "Die is te vroeg", "Die is dubbel zo vol"],
      correctIndex: 0,
      explanationRu: "'rijdt vandaag niet' — автобус в указанное время сегодня не ходит, следующий отправится на полчаса позже.",
    },
  },
  {
    id: "listen-gen-55",
    level: "A2",
    topic: "vervoer",
    transcript:
      "Attentie reizigers: de bus van één uur naar het centrum rijdt vandaag niet. De eerstvolgende bus vertrekt een half uur later.",
    question: {
      prompt: "Wat is er met de bus van die tijd?",
      options: ["Die rijdt vandaag niet", "Die is te vroeg", "Die is dubbel zo vol"],
      correctIndex: 0,
      explanationRu: "'rijdt vandaag niet' — автобус в указанное время сегодня не ходит, следующий отправится на полчаса позже.",
    },
  },
  {
    id: "listen-gen-56",
    level: "A2",
    topic: "vervoer",
    transcript:
      "Attentie reizigers: de bus van twee uur naar het centrum rijdt vandaag niet. De eerstvolgende bus vertrekt een half uur later.",
    question: {
      prompt: "Wat is er met de bus van die tijd?",
      options: ["Die rijdt vandaag niet", "Die is te vroeg", "Die is dubbel zo vol"],
      correctIndex: 0,
      explanationRu: "'rijdt vandaag niet' — автобус в указанное время сегодня не ходит, следующий отправится на полчаса позже.",
    },
  },
  {
    id: "listen-gen-57",
    level: "B1",
    topic: "vervoer",
    transcript:
      "Attentie reizigers: de bus van drie uur naar het centrum rijdt vandaag niet. De eerstvolgende bus vertrekt een half uur later.",
    question: {
      prompt: "Wat is er met de bus van die tijd?",
      options: ["Die rijdt vandaag niet", "Die is te vroeg", "Die is dubbel zo vol"],
      correctIndex: 0,
      explanationRu: "'rijdt vandaag niet' — автобус в указанное время сегодня не ходит, следующий отправится на полчаса позже.",
    },
  },
  {
    id: "listen-gen-58",
    level: "A2",
    topic: "vervoer",
    transcript:
      "Attentie reizigers: de bus van vier uur naar het centrum rijdt vandaag niet. De eerstvolgende bus vertrekt een half uur later.",
    question: {
      prompt: "Wat is er met de bus van die tijd?",
      options: ["Die rijdt vandaag niet", "Die is te vroeg", "Die is dubbel zo vol"],
      correctIndex: 0,
      explanationRu: "'rijdt vandaag niet' — автобус в указанное время сегодня не ходит, следующий отправится на полчаса позже.",
    },
  },
  {
    id: "listen-gen-59",
    level: "A2",
    topic: "vervoer",
    transcript:
      "Attentie reizigers: de bus van half tien naar het centrum rijdt vandaag niet. De eerstvolgende bus vertrekt een half uur later.",
    question: {
      prompt: "Wat is er met de bus van die tijd?",
      options: ["Die rijdt vandaag niet", "Die is te vroeg", "Die is dubbel zo vol"],
      correctIndex: 0,
      explanationRu: "'rijdt vandaag niet' — автобус в указанное время сегодня не ходит, следующий отправится на полчаса позже.",
    },
  },
  {
    id: "listen-gen-60",
    level: "B1",
    topic: "vervoer",
    transcript:
      "Attentie reizigers: de bus van half elf naar het centrum rijdt vandaag niet. De eerstvolgende bus vertrekt een half uur later.",
    question: {
      prompt: "Wat is er met de bus van die tijd?",
      options: ["Die rijdt vandaag niet", "Die is te vroeg", "Die is dubbel zo vol"],
      correctIndex: 0,
      explanationRu: "'rijdt vandaag niet' — автобус в указанное время сегодня не ходит, следующий отправится на полчаса позже.",
    },
  },
  {
    id: "listen-gen-61",
    level: "B1",
    topic: "onderwijs",
    transcript:
      "Bericht van de taalschool: de les van maandag verschuift naar negen uur in plaats van de gebruikelijke tijd. Het lokaal blijft hetzelfde.",
    question: {
      prompt: "Wat verandert er aan de les?",
      options: ["Alleen het tijdstip", "Alleen het lokaal", "De les gaat niet door"],
      correctIndex: 0,
      explanationRu: "'verschuift naar negen uur' — меняется только время урока, кабинет остаётся тем же.",
    },
  },
  {
    id: "listen-gen-62",
    level: "A2",
    topic: "onderwijs",
    transcript:
      "Bericht van de taalschool: de les van dinsdag verschuift naar tien uur in plaats van de gebruikelijke tijd. Het lokaal blijft hetzelfde.",
    question: {
      prompt: "Wat verandert er aan de les?",
      options: ["Alleen het tijdstip", "Alleen het lokaal", "De les gaat niet door"],
      correctIndex: 0,
      explanationRu: "'verschuift naar tien uur' — меняется только время урока, кабинет остаётся тем же.",
    },
  },
  {
    id: "listen-gen-63",
    level: "A2",
    topic: "onderwijs",
    transcript:
      "Bericht van de taalschool: de les van woensdag verschuift naar elf uur in plaats van de gebruikelijke tijd. Het lokaal blijft hetzelfde.",
    question: {
      prompt: "Wat verandert er aan de les?",
      options: ["Alleen het tijdstip", "Alleen het lokaal", "De les gaat niet door"],
      correctIndex: 0,
      explanationRu: "'verschuift naar elf uur' — меняется только время урока, кабинет остаётся тем же.",
    },
  },
  {
    id: "listen-gen-64",
    level: "B1",
    topic: "onderwijs",
    transcript:
      "Bericht van de taalschool: de les van donderdag verschuift naar twaalf uur in plaats van de gebruikelijke tijd. Het lokaal blijft hetzelfde.",
    question: {
      prompt: "Wat verandert er aan de les?",
      options: ["Alleen het tijdstip", "Alleen het lokaal", "De les gaat niet door"],
      correctIndex: 0,
      explanationRu: "'verschuift naar twaalf uur' — меняется только время урока, кабинет остаётся тем же.",
    },
  },
  {
    id: "listen-gen-65",
    level: "A2",
    topic: "onderwijs",
    transcript:
      "Bericht van de taalschool: de les van vrijdag verschuift naar één uur in plaats van de gebruikelijke tijd. Het lokaal blijft hetzelfde.",
    question: {
      prompt: "Wat verandert er aan de les?",
      options: ["Alleen het tijdstip", "Alleen het lokaal", "De les gaat niet door"],
      correctIndex: 0,
      explanationRu: "'verschuift naar één uur' — меняется только время урока, кабинет остаётся тем же.",
    },
  },
  {
    id: "listen-gen-66",
    level: "A2",
    topic: "onderwijs",
    transcript:
      "Bericht van de taalschool: de les van zaterdag verschuift naar twee uur in plaats van de gebruikelijke tijd. Het lokaal blijft hetzelfde.",
    question: {
      prompt: "Wat verandert er aan de les?",
      options: ["Alleen het tijdstip", "Alleen het lokaal", "De les gaat niet door"],
      correctIndex: 0,
      explanationRu: "'verschuift naar twee uur' — меняется только время урока, кабинет остаётся тем же.",
    },
  },
  {
    id: "listen-gen-67",
    level: "B1",
    topic: "onderwijs",
    transcript:
      "Bericht van de taalschool: de les van zondag verschuift naar drie uur in plaats van de gebruikelijke tijd. Het lokaal blijft hetzelfde.",
    question: {
      prompt: "Wat verandert er aan de les?",
      options: ["Alleen het tijdstip", "Alleen het lokaal", "De les gaat niet door"],
      correctIndex: 0,
      explanationRu: "'verschuift naar drie uur' — меняется только время урока, кабинет остаётся тем же.",
    },
  },
  {
    id: "listen-gen-68",
    level: "A2",
    topic: "onderwijs",
    transcript:
      "Bericht van de taalschool: de les van volgende maandag verschuift naar vier uur in plaats van de gebruikelijke tijd. Het lokaal blijft hetzelfde.",
    question: {
      prompt: "Wat verandert er aan de les?",
      options: ["Alleen het tijdstip", "Alleen het lokaal", "De les gaat niet door"],
      correctIndex: 0,
      explanationRu: "'verschuift naar vier uur' — меняется только время урока, кабинет остаётся тем же.",
    },
  },
  {
    id: "listen-gen-69",
    level: "A2",
    topic: "onderwijs",
    transcript:
      "Bericht van de taalschool: de les van volgende dinsdag verschuift naar half tien in plaats van de gebruikelijke tijd. Het lokaal blijft hetzelfde.",
    question: {
      prompt: "Wat verandert er aan de les?",
      options: ["Alleen het tijdstip", "Alleen het lokaal", "De les gaat niet door"],
      correctIndex: 0,
      explanationRu: "'verschuift naar half tien' — меняется только время урока, кабинет остаётся тем же.",
    },
  },
  {
    id: "listen-gen-70",
    level: "B1",
    topic: "onderwijs",
    transcript:
      "Bericht van de taalschool: de les van volgende woensdag verschuift naar half elf in plaats van de gebruikelijke tijd. Het lokaal blijft hetzelfde.",
    question: {
      prompt: "Wat verandert er aan de les?",
      options: ["Alleen het tijdstip", "Alleen het lokaal", "De les gaat niet door"],
      correctIndex: 0,
      explanationRu: "'verschuift naar half elf' — меняется только время урока, кабинет остаётся тем же.",
    },
  },
  {
    id: "listen-gen-71",
    level: "B1",
    topic: "geld",
    transcript:
      "Herinnering van de bank: uw rekening moet uiterlijk maandag betaald zijn, anders volgen extra kosten.",
    question: {
      prompt: "Wat gebeurt er als u niet op tijd betaalt?",
      options: ["Er volgen extra kosten", "Uw rekening wordt kwijtgescholden", "Er gebeurt niets"],
      correctIndex: 0,
      explanationRu: "'anders volgen extra kosten' — при просрочке начисляются дополнительные расходы.",
    },
  },
  {
    id: "listen-gen-72",
    level: "A2",
    topic: "geld",
    transcript:
      "Herinnering van de bank: uw rekening moet uiterlijk dinsdag betaald zijn, anders volgen extra kosten.",
    question: {
      prompt: "Wat gebeurt er als u niet op tijd betaalt?",
      options: ["Er volgen extra kosten", "Uw rekening wordt kwijtgescholden", "Er gebeurt niets"],
      correctIndex: 0,
      explanationRu: "'anders volgen extra kosten' — при просрочке начисляются дополнительные расходы.",
    },
  },
  {
    id: "listen-gen-73",
    level: "A2",
    topic: "geld",
    transcript:
      "Herinnering van de bank: uw rekening moet uiterlijk woensdag betaald zijn, anders volgen extra kosten.",
    question: {
      prompt: "Wat gebeurt er als u niet op tijd betaalt?",
      options: ["Er volgen extra kosten", "Uw rekening wordt kwijtgescholden", "Er gebeurt niets"],
      correctIndex: 0,
      explanationRu: "'anders volgen extra kosten' — при просрочке начисляются дополнительные расходы.",
    },
  },
  {
    id: "listen-gen-74",
    level: "B1",
    topic: "geld",
    transcript:
      "Herinnering van de bank: uw rekening moet uiterlijk donderdag betaald zijn, anders volgen extra kosten.",
    question: {
      prompt: "Wat gebeurt er als u niet op tijd betaalt?",
      options: ["Er volgen extra kosten", "Uw rekening wordt kwijtgescholden", "Er gebeurt niets"],
      correctIndex: 0,
      explanationRu: "'anders volgen extra kosten' — при просрочке начисляются дополнительные расходы.",
    },
  },
  {
    id: "listen-gen-75",
    level: "A2",
    topic: "geld",
    transcript:
      "Herinnering van de bank: uw rekening moet uiterlijk vrijdag betaald zijn, anders volgen extra kosten.",
    question: {
      prompt: "Wat gebeurt er als u niet op tijd betaalt?",
      options: ["Er volgen extra kosten", "Uw rekening wordt kwijtgescholden", "Er gebeurt niets"],
      correctIndex: 0,
      explanationRu: "'anders volgen extra kosten' — при просрочке начисляются дополнительные расходы.",
    },
  },
  {
    id: "listen-gen-76",
    level: "A2",
    topic: "geld",
    transcript:
      "Herinnering van de bank: uw rekening moet uiterlijk zaterdag betaald zijn, anders volgen extra kosten.",
    question: {
      prompt: "Wat gebeurt er als u niet op tijd betaalt?",
      options: ["Er volgen extra kosten", "Uw rekening wordt kwijtgescholden", "Er gebeurt niets"],
      correctIndex: 0,
      explanationRu: "'anders volgen extra kosten' — при просрочке начисляются дополнительные расходы.",
    },
  },
  {
    id: "listen-gen-77",
    level: "B1",
    topic: "geld",
    transcript:
      "Herinnering van de bank: uw rekening moet uiterlijk zondag betaald zijn, anders volgen extra kosten.",
    question: {
      prompt: "Wat gebeurt er als u niet op tijd betaalt?",
      options: ["Er volgen extra kosten", "Uw rekening wordt kwijtgescholden", "Er gebeurt niets"],
      correctIndex: 0,
      explanationRu: "'anders volgen extra kosten' — при просрочке начисляются дополнительные расходы.",
    },
  },
  {
    id: "listen-gen-78",
    level: "A2",
    topic: "geld",
    transcript:
      "Herinnering van de bank: uw rekening moet uiterlijk volgende maandag betaald zijn, anders volgen extra kosten.",
    question: {
      prompt: "Wat gebeurt er als u niet op tijd betaalt?",
      options: ["Er volgen extra kosten", "Uw rekening wordt kwijtgescholden", "Er gebeurt niets"],
      correctIndex: 0,
      explanationRu: "'anders volgen extra kosten' — при просрочке начисляются дополнительные расходы.",
    },
  },
  {
    id: "listen-gen-79",
    level: "A2",
    topic: "geld",
    transcript:
      "Herinnering van de bank: uw rekening moet uiterlijk volgende dinsdag betaald zijn, anders volgen extra kosten.",
    question: {
      prompt: "Wat gebeurt er als u niet op tijd betaalt?",
      options: ["Er volgen extra kosten", "Uw rekening wordt kwijtgescholden", "Er gebeurt niets"],
      correctIndex: 0,
      explanationRu: "'anders volgen extra kosten' — при просрочке начисляются дополнительные расходы.",
    },
  },
  {
    id: "listen-gen-80",
    level: "B1",
    topic: "geld",
    transcript:
      "Herinnering van de bank: uw rekening moet uiterlijk volgende woensdag betaald zijn, anders volgen extra kosten.",
    question: {
      prompt: "Wat gebeurt er als u niet op tijd betaalt?",
      options: ["Er volgen extra kosten", "Uw rekening wordt kwijtgescholden", "Er gebeurt niets"],
      correctIndex: 0,
      explanationRu: "'anders volgen extra kosten' — при просрочке начисляются дополнительные расходы.",
    },
  },
  {
    id: "listen-gen-81",
    level: "B1",
    topic: "post",
    transcript:
      "Bericht van PostNL: uw pakket kon niet worden bezorgd. U kunt het ophalen bij het afhaalpunt tot en met maandag.",
    question: {
      prompt: "Tot wanneer kunt u het pakket ophalen?",
      options: ["Tot en met maandag", "Er is geen deadline", "Alleen vandaag"],
      correctIndex: 0,
      explanationRu: "'ophalen bij het afhaalpunt tot en met maandag' — забрать посылку можно в пункте выдачи до указанного дня включительно.",
    },
  },
  {
    id: "listen-gen-82",
    level: "A2",
    topic: "post",
    transcript:
      "Bericht van PostNL: uw pakket kon niet worden bezorgd. U kunt het ophalen bij het afhaalpunt tot en met dinsdag.",
    question: {
      prompt: "Tot wanneer kunt u het pakket ophalen?",
      options: ["Tot en met dinsdag", "Er is geen deadline", "Alleen vandaag"],
      correctIndex: 0,
      explanationRu: "'ophalen bij het afhaalpunt tot en met dinsdag' — забрать посылку можно в пункте выдачи до указанного дня включительно.",
    },
  },
  {
    id: "listen-gen-83",
    level: "A2",
    topic: "post",
    transcript:
      "Bericht van PostNL: uw pakket kon niet worden bezorgd. U kunt het ophalen bij het afhaalpunt tot en met woensdag.",
    question: {
      prompt: "Tot wanneer kunt u het pakket ophalen?",
      options: ["Tot en met woensdag", "Er is geen deadline", "Alleen vandaag"],
      correctIndex: 0,
      explanationRu: "'ophalen bij het afhaalpunt tot en met woensdag' — забрать посылку можно в пункте выдачи до указанного дня включительно.",
    },
  },
  {
    id: "listen-gen-84",
    level: "B1",
    topic: "post",
    transcript:
      "Bericht van PostNL: uw pakket kon niet worden bezorgd. U kunt het ophalen bij het afhaalpunt tot en met donderdag.",
    question: {
      prompt: "Tot wanneer kunt u het pakket ophalen?",
      options: ["Tot en met donderdag", "Er is geen deadline", "Alleen vandaag"],
      correctIndex: 0,
      explanationRu: "'ophalen bij het afhaalpunt tot en met donderdag' — забрать посылку можно в пункте выдачи до указанного дня включительно.",
    },
  },
  {
    id: "listen-gen-85",
    level: "A2",
    topic: "post",
    transcript:
      "Bericht van PostNL: uw pakket kon niet worden bezorgd. U kunt het ophalen bij het afhaalpunt tot en met vrijdag.",
    question: {
      prompt: "Tot wanneer kunt u het pakket ophalen?",
      options: ["Tot en met vrijdag", "Er is geen deadline", "Alleen vandaag"],
      correctIndex: 0,
      explanationRu: "'ophalen bij het afhaalpunt tot en met vrijdag' — забрать посылку можно в пункте выдачи до указанного дня включительно.",
    },
  },
  {
    id: "listen-gen-86",
    level: "A2",
    topic: "post",
    transcript:
      "Bericht van PostNL: uw pakket kon niet worden bezorgd. U kunt het ophalen bij het afhaalpunt tot en met zaterdag.",
    question: {
      prompt: "Tot wanneer kunt u het pakket ophalen?",
      options: ["Tot en met zaterdag", "Er is geen deadline", "Alleen vandaag"],
      correctIndex: 0,
      explanationRu: "'ophalen bij het afhaalpunt tot en met zaterdag' — забрать посылку можно в пункте выдачи до указанного дня включительно.",
    },
  },
  {
    id: "listen-gen-87",
    level: "B1",
    topic: "post",
    transcript:
      "Bericht van PostNL: uw pakket kon niet worden bezorgd. U kunt het ophalen bij het afhaalpunt tot en met zondag.",
    question: {
      prompt: "Tot wanneer kunt u het pakket ophalen?",
      options: ["Tot en met zondag", "Er is geen deadline", "Alleen vandaag"],
      correctIndex: 0,
      explanationRu: "'ophalen bij het afhaalpunt tot en met zondag' — забрать посылку можно в пункте выдачи до указанного дня включительно.",
    },
  },
  {
    id: "listen-gen-88",
    level: "A2",
    topic: "post",
    transcript:
      "Bericht van PostNL: uw pakket kon niet worden bezorgd. U kunt het ophalen bij het afhaalpunt tot en met volgende maandag.",
    question: {
      prompt: "Tot wanneer kunt u het pakket ophalen?",
      options: ["Tot en met volgende maandag", "Er is geen deadline", "Alleen vandaag"],
      correctIndex: 0,
      explanationRu: "'ophalen bij het afhaalpunt tot en met volgende maandag' — забрать посылку можно в пункте выдачи до указанного дня включительно.",
    },
  },
  {
    id: "listen-gen-89",
    level: "A2",
    topic: "post",
    transcript:
      "Bericht van PostNL: uw pakket kon niet worden bezorgd. U kunt het ophalen bij het afhaalpunt tot en met volgende dinsdag.",
    question: {
      prompt: "Tot wanneer kunt u het pakket ophalen?",
      options: ["Tot en met volgende dinsdag", "Er is geen deadline", "Alleen vandaag"],
      correctIndex: 0,
      explanationRu: "'ophalen bij het afhaalpunt tot en met volgende dinsdag' — забрать посылку можно в пункте выдачи до указанного дня включительно.",
    },
  },
  {
    id: "listen-gen-90",
    level: "B1",
    topic: "post",
    transcript:
      "Bericht van PostNL: uw pakket kon niet worden bezorgd. U kunt het ophalen bij het afhaalpunt tot en met volgende woensdag.",
    question: {
      prompt: "Tot wanneer kunt u het pakket ophalen?",
      options: ["Tot en met volgende woensdag", "Er is geen deadline", "Alleen vandaag"],
      correctIndex: 0,
      explanationRu: "'ophalen bij het afhaalpunt tot en met volgende woensdag' — забрать посылку можно в пункте выдачи до указанного дня включительно.",
    },
  },
  {
    id: "listen-gen-91",
    level: "B1",
    topic: "buurt",
    transcript:
      "Bericht van het buurthuis: de buurtbijeenkomst is verplaatst naar maandag om negen uur, omdat de zaal deze week bezet is.",
    question: {
      prompt: "Waarom is de bijeenkomst verplaatst?",
      options: ["De zaal is deze week bezet", "Er zijn te weinig mensen", "Het buurthuis is dicht"],
      correctIndex: 0,
      explanationRu: "'omdat de zaal deze week bezet is' — встречу перенесли, потому что зал занят на этой неделе.",
    },
  },
  {
    id: "listen-gen-92",
    level: "A2",
    topic: "buurt",
    transcript:
      "Bericht van het buurthuis: de buurtbijeenkomst is verplaatst naar dinsdag om tien uur, omdat de zaal deze week bezet is.",
    question: {
      prompt: "Waarom is de bijeenkomst verplaatst?",
      options: ["De zaal is deze week bezet", "Er zijn te weinig mensen", "Het buurthuis is dicht"],
      correctIndex: 0,
      explanationRu: "'omdat de zaal deze week bezet is' — встречу перенесли, потому что зал занят на этой неделе.",
    },
  },
  {
    id: "listen-gen-93",
    level: "A2",
    topic: "buurt",
    transcript:
      "Bericht van het buurthuis: de buurtbijeenkomst is verplaatst naar woensdag om elf uur, omdat de zaal deze week bezet is.",
    question: {
      prompt: "Waarom is de bijeenkomst verplaatst?",
      options: ["De zaal is deze week bezet", "Er zijn te weinig mensen", "Het buurthuis is dicht"],
      correctIndex: 0,
      explanationRu: "'omdat de zaal deze week bezet is' — встречу перенесли, потому что зал занят на этой неделе.",
    },
  },
  {
    id: "listen-gen-94",
    level: "B1",
    topic: "buurt",
    transcript:
      "Bericht van het buurthuis: de buurtbijeenkomst is verplaatst naar donderdag om twaalf uur, omdat de zaal deze week bezet is.",
    question: {
      prompt: "Waarom is de bijeenkomst verplaatst?",
      options: ["De zaal is deze week bezet", "Er zijn te weinig mensen", "Het buurthuis is dicht"],
      correctIndex: 0,
      explanationRu: "'omdat de zaal deze week bezet is' — встречу перенесли, потому что зал занят на этой неделе.",
    },
  },
  {
    id: "listen-gen-95",
    level: "A2",
    topic: "buurt",
    transcript:
      "Bericht van het buurthuis: de buurtbijeenkomst is verplaatst naar vrijdag om één uur, omdat de zaal deze week bezet is.",
    question: {
      prompt: "Waarom is de bijeenkomst verplaatst?",
      options: ["De zaal is deze week bezet", "Er zijn te weinig mensen", "Het buurthuis is dicht"],
      correctIndex: 0,
      explanationRu: "'omdat de zaal deze week bezet is' — встречу перенесли, потому что зал занят на этой неделе.",
    },
  },
  {
    id: "listen-gen-96",
    level: "A2",
    topic: "buurt",
    transcript:
      "Bericht van het buurthuis: de buurtbijeenkomst is verplaatst naar zaterdag om twee uur, omdat de zaal deze week bezet is.",
    question: {
      prompt: "Waarom is de bijeenkomst verplaatst?",
      options: ["De zaal is deze week bezet", "Er zijn te weinig mensen", "Het buurthuis is dicht"],
      correctIndex: 0,
      explanationRu: "'omdat de zaal deze week bezet is' — встречу перенесли, потому что зал занят на этой неделе.",
    },
  },
  {
    id: "listen-gen-97",
    level: "B1",
    topic: "buurt",
    transcript:
      "Bericht van het buurthuis: de buurtbijeenkomst is verplaatst naar zondag om drie uur, omdat de zaal deze week bezet is.",
    question: {
      prompt: "Waarom is de bijeenkomst verplaatst?",
      options: ["De zaal is deze week bezet", "Er zijn te weinig mensen", "Het buurthuis is dicht"],
      correctIndex: 0,
      explanationRu: "'omdat de zaal deze week bezet is' — встречу перенесли, потому что зал занят на этой неделе.",
    },
  },
  {
    id: "listen-gen-98",
    level: "A2",
    topic: "buurt",
    transcript:
      "Bericht van het buurthuis: de buurtbijeenkomst is verplaatst naar volgende maandag om vier uur, omdat de zaal deze week bezet is.",
    question: {
      prompt: "Waarom is de bijeenkomst verplaatst?",
      options: ["De zaal is deze week bezet", "Er zijn te weinig mensen", "Het buurthuis is dicht"],
      correctIndex: 0,
      explanationRu: "'omdat de zaal deze week bezet is' — встречу перенесли, потому что зал занят на этой неделе.",
    },
  },
  {
    id: "listen-gen-99",
    level: "A2",
    topic: "buurt",
    transcript:
      "Bericht van het buurthuis: de buurtbijeenkomst is verplaatst naar volgende dinsdag om half tien, omdat de zaal deze week bezet is.",
    question: {
      prompt: "Waarom is de bijeenkomst verplaatst?",
      options: ["De zaal is deze week bezet", "Er zijn te weinig mensen", "Het buurthuis is dicht"],
      correctIndex: 0,
      explanationRu: "'omdat de zaal deze week bezet is' — встречу перенесли, потому что зал занят на этой неделе.",
    },
  },
  {
    id: "listen-gen-100",
    level: "B1",
    topic: "buurt",
    transcript:
      "Bericht van het buurthuis: de buurtbijeenkomst is verplaatst naar volgende woensdag om half elf, omdat de zaal deze week bezet is.",
    question: {
      prompt: "Waarom is de bijeenkomst verplaatst?",
      options: ["De zaal is deze week bezet", "Er zijn te weinig mensen", "Het buurthuis is dicht"],
      correctIndex: 0,
      explanationRu: "'omdat de zaal deze week bezet is' — встречу перенесли, потому что зал занят на этой неделе.",
    },
  },
];
