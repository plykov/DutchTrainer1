import { TargetLevel } from "../types";

export interface ListeningQuestion {
  prompt: string;
  options: string[];
  correctIndex: number;
  explanationRu: string;
  explanationEn?: string;
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
      explanationEn: "The message said: 'verzet naar vrijdag om tien uur' - reception moved to Friday.",
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
      explanationEn: "The key word 'eerst' (first) is to make an online appointment at City Hall.",
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
      explanationEn: "“Nodigen u uit voor een gesprek” is an interview.",
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
      explanationEn: "'open tot zes uur vanavond' is open until six p.m.",
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
      explanationEn: "'op maandag komt de monteur langs' - the master will come on Monday.",
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
      explanationEn: "'de les begint om negen uur, niet om tien uur' - the time changed by nine hours.",
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
      explanationEn: "'omdat u meer stroom heeft gebruikt' - the score is higher due to greater electricity consumption.",
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
      explanationEn: "'Neem het drie keer per dag in' - take three times a day",
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
      explanationEn: "'Uw contract loopt over twee maanden af' - contract ends in two months",
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
      explanationEn: "'met uw oude pas en een pasfoto' - bring an old map and a photo.",
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
      explanationEn: "'De huur ... gaat ... iets omhoog' - rents will go up a bit.",
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
      explanationEn: "'is helaas geannuleerd' - revoked.",
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
      explanationEn: "'een polis en uw inkomen nodig' - you need a policy and income data to apply for insurance.",
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
      explanationEn: "\"Iedereen is welkom, ook kinderen\" is a meeting for all residents of the district.",
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
      explanationEn: "\"verzet naar maandag om negen uur\" - the reception is postponed to the specified day and time.",
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
      explanationEn: "\"verzet naar dinsdag om tien uur\" - the reception is postponed to the specified day and time.",
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
      explanationEn: "\"verzet naar woensdag om elf uur\" - the reception is postponed to the specified day and time.",
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
      explanationEn: "\"verzet naar donderdag om twaalf uur\" - the reception is postponed to the specified day and time.",
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
      explanationEn: "\"verzet naar vrijdag om één uur\" - the reception is postponed to the specified day and time.",
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
      explanationEn: "\"verzet naar zaterdag om twee uur\" - the reception is postponed to the specified day and time.",
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
      explanationEn: "\"verzet naar zondag om drie uur\" - the reception is postponed to the specified day and time.",
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
      explanationEn: "\"verzet naar volgende maandag om vier uur\" - the reception is postponed to the specified day and time.",
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
      explanationEn: "\"verzet naar volgende dinsdag om half tien\" - the reception is postponed to the specified day and time.",
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
      explanationEn: "\"verzet naar volgende woensdag om half elf\" - the reception is postponed to the specified day and time.",
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
      explanationEn: "'Neemt u een geldig identiteitsbewijs mee' - you need to take a valid ID card for a meeting.",
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
      explanationEn: "'Neemt u een geldig identiteitsbewijs mee' - you need to take a valid ID card for a meeting.",
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
      explanationEn: "'Neemt u een geldig identiteitsbewijs mee' - you need to take a valid ID card for a meeting.",
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
      explanationEn: "'Neemt u een geldig identiteitsbewijs mee' - you need to take a valid ID card for a meeting.",
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
      explanationEn: "'Neemt u een geldig identiteitsbewijs mee' - you need to take a valid ID card for a meeting.",
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
      explanationEn: "'Neemt u een geldig identiteitsbewijs mee' - you need to take a valid ID card for a meeting.",
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
      explanationEn: "'Neemt u een geldig identiteitsbewijs mee' - you need to take a valid ID card for a meeting.",
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
      explanationEn: "'Neemt u een geldig identiteitsbewijs mee' - you need to take a valid ID card for a meeting.",
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
      explanationEn: "'Neemt u een geldig identiteitsbewijs mee' - you need to take a valid ID card for a meeting.",
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
      explanationEn: "'Neemt u een geldig identiteitsbewijs mee' - you need to take a valid ID card for a meeting.",
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
      explanationEn: "'kunnen worden opgehaald tot negen uur vanmiddag' - medicines can be picked up before the specified time today.",
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
      explanationEn: "'kunnen worden opgehaald tot tien uur vanmiddag' - medicines can be picked up before the specified time today.",
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
      explanationEn: "'kunnen worden opgehaald tot elf uur vanmiddag' - medicines can be picked up before the specified time today.",
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
      explanationEn: "'kunnen worden opgehaald tot twaalf uur vanmiddag' - medicines can be picked up before the specified time today.",
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
      explanationEn: "'kunnen worden opgehaald tot één uur vanmiddag' - medicines can be picked up before the specified time today.",
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
      explanationEn: "'kunnen worden opgehaald tot twee uur vanmiddag' - medicines can be picked up before the specified time today.",
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
      explanationEn: "'kunnen worden opgehaald tot drie uur vanmiddag' - medicines can be picked up before the specified time today.",
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
      explanationEn: "'kunnen worden opgehaald tot vier uur vanmiddag' - medicines can be picked up before the specified time today.",
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
      explanationEn: "'kunnen worden opgehaald tot half tien vanmiddag' - medicines can be picked up before the specified time today.",
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
      explanationEn: "'kunnen worden opgehaald tot half elf vanmiddag' - medicines can be picked up before the specified time today.",
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
      explanationEn: "'bevestigd voor maandag om negen uur' - the interview is confirmed on the specified day and time.",
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
      explanationEn: "'bevestigd voor dinsdag om tien uur' - the interview is confirmed on the specified day and time.",
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
      explanationEn: "'bevestigd voor woensdag om elf uur' - interview confirmed for the specified day and time.",
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
      explanationEn: "'bevestigd voor donderdag om twaalf uur' - interview confirmed for the specified day and time.",
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
      explanationEn: "'bevestigd voor vrijdag om één uur' - interview confirmed for the specified day and time.",
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
      explanationEn: "'bevestigd voor zaterdag om twee uur' - interview confirmed for the specified day and time.",
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
      explanationEn: "'bevestigd voor zondag om drie uur' - the interview is confirmed on the specified day and time.",
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
      explanationEn: "'bevestigd voor volgende maandag om vier uur' - interview confirmed on the specified day and time.",
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
      explanationEn: "'bevestigd voor volgende dinsdag om half tien' - the interview is confirmed on the specified day and time.",
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
      explanationEn: "'bevestigd voor volgende woensdag om half elf' - interview confirmed at the specified date and time.",
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
      explanationEn: "'komt langs op maandag tussen negen en twaalf uur' - the master will arrive on the specified day between 9 and 12.",
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
      explanationEn: "'komt langs op dinsdag tussen negen en twaalf uur' - the master will arrive on the specified day between 9 and 12.",
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
      explanationEn: "'komt langs op woensdag tussen negen en twaalf uur' - the master will arrive on the specified day between 9 and 12.",
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
      explanationEn: "'komt langs op donderdag tussen negen en twaalf uur' - the master will arrive on the specified day between 9 and 12.",
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
      explanationEn: "'komt langs op vrijdag tussen negen en twaalf uur' - the master will arrive on the specified day between 9 and 12.",
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
      explanationEn: "'komt langs op zaterdag tussen negen en twaalf uur' - the master will arrive on the specified day between 9 and 12.",
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
      explanationEn: "'komt langs op zondag tussen negen en twaalf uur' - the master will arrive on the specified day between 9 and 12.",
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
      explanationEn: "'komt langs op volgende maandag tussen negen en twaalf uur' - the master will arrive on the specified day between 9 and 12.",
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
      explanationEn: "'komt langs op volgende dinsdag tussen negen en twaalf uur' - the master will arrive on the specified day between 9 and 12.",
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
      explanationEn: "'komt langs op volgende woensdag tussen negen en twaalf uur' - the master will arrive on the specified day between 9 and 12.",
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
      explanationEn: "'rijdt vandaag niet' - the bus does not run at the specified time today, the next one will depart half an hour later.",
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
      explanationEn: "'rijdt vandaag niet' - the bus does not run at the specified time today, the next one will depart half an hour later.",
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
      explanationEn: "'rijdt vandaag niet' - the bus does not run at the specified time today, the next one will depart half an hour later.",
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
      explanationEn: "'rijdt vandaag niet' - the bus does not run at the specified time today, the next one will depart half an hour later.",
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
      explanationEn: "'rijdt vandaag niet' - the bus does not run at the specified time today, the next one will depart half an hour later.",
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
      explanationEn: "'rijdt vandaag niet' - the bus does not run at the specified time today, the next one will depart half an hour later.",
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
      explanationEn: "'rijdt vandaag niet' - the bus does not run at the specified time today, the next one will depart half an hour later.",
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
      explanationEn: "'rijdt vandaag niet' - the bus does not run at the specified time today, the next one will depart half an hour later.",
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
      explanationEn: "'rijdt vandaag niet' - the bus does not run at the specified time today, the next one will depart half an hour later.",
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
      explanationEn: "'rijdt vandaag niet' - the bus does not run at the specified time today, the next one will depart half an hour later.",
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
      explanationEn: "\"verschuift naar negen uur\" - only the time of the lesson changes, the study remains the same.",
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
      explanationEn: "\"verschuift naar tien uur\" - only the lesson time changes, the study remains the same.",
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
      explanationEn: "\"verschuift naar elf uur\" - only the time of the lesson changes, the study remains the same.",
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
      explanationEn: "'verschuift naar twaalf uur' - only the lesson time changes, the study remains the same.",
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
      explanationEn: "\"verschuift naar éen uur\" - only the time of the lesson changes, the study remains the same.",
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
      explanationEn: "\"verschuift naar twee uur\" - only the lesson time changes, the study remains the same.",
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
      explanationEn: "\"verschuift naar drie uur\" - only the lesson time changes, the study remains the same.",
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
      explanationEn: "\"verschuift naar vier uur\" - only the lesson time changes, the study remains the same.",
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
      explanationEn: "\"verschuift naar half tien\" - only the lesson time changes, the study remains the same.",
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
      explanationEn: "\"verschuift naar half elf\" - only the lesson time changes, the study remains the same.",
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
      explanationEn: "'anders volgen extra kosten' means that extra charges will apply if payment is late.",
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
      explanationEn: "'anders volgen extra kosten' means that extra charges will apply if payment is late.",
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
      explanationEn: "'anders volgen extra kosten' means that extra charges will apply if payment is late.",
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
      explanationEn: "'anders volgen extra kosten' means that extra charges will apply if payment is late.",
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
      explanationEn: "'anders volgen extra kosten' means that extra charges will apply if payment is late.",
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
      explanationEn: "'anders volgen extra kosten' means that extra charges will apply if payment is late.",
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
      explanationEn: "'anders volgen extra kosten' means that extra charges will apply if payment is late.",
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
      explanationEn: "'anders volgen extra kosten' means that extra charges will apply if payment is late.",
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
      explanationEn: "'anders volgen extra kosten' means that extra charges will apply if payment is late.",
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
      explanationEn: "'anders volgen extra kosten' means that extra charges will apply if payment is late.",
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
      explanationEn: "'ophalen bij het afhaalpunt tot en met maandag' - you can pick up the parcel at the point of issue before the specified day inclusive.",
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
      explanationEn: "'ophalen bij het afhaalpunt tot en met dinsdag' - you can pick up the parcel at the point of issue before the specified day inclusive.",
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
      explanationEn: "'ophalen bij het afhaalpunt tot en met woensdag' - you can pick up the parcel at the point of issue until the specified day inclusive.",
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
      explanationEn: "'ophalen bij het afhaalpunt tot en met donderdag' - you can pick up the parcel at the point of issue before the specified day inclusive.",
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
      explanationEn: "'ophalen bij het afhaalpunt tot en met vrijdag' - you can pick up the parcel at the point of issue before the specified day inclusive.",
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
      explanationEn: "'ophalen bij het afhaalpunt tot en met zaterdag' - you can pick up the parcel at the point of issue until the specified day inclusive.",
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
      explanationEn: "'ophalen bij het afhaalpunt tot en met zondag' - you can pick up the parcel at the point of issue before the specified day inclusive.",
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
      explanationEn: "'ophalen bij het afhaalpunt tot en met volgende maandag' - you can pick up the parcel at the point of issue before the specified day inclusive.",
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
      explanationEn: "'ophalen bij het afhaalpunt tot en met volgende dinsdag' - you can pick up the parcel at the point of issue before the specified day inclusive.",
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
      explanationEn: "'ophalen bij het afhaalpunt tot en met volgende woensdag' - you can pick up the parcel at the point of issue before the specified day inclusive.",
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
      explanationEn: "'omdat de zaal deze week bezet is' - the meeting was postponed because the hall is busy this week.",
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
      explanationEn: "'omdat de zaal deze week bezet is' - the meeting was postponed because the hall is busy this week.",
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
      explanationEn: "'omdat de zaal deze week bezet is' - the meeting was postponed because the hall is busy this week.",
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
      explanationEn: "'omdat de zaal deze week bezet is' - the meeting was postponed because the hall is busy this week.",
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
      explanationEn: "'omdat de zaal deze week bezet is' - the meeting was postponed because the hall is busy this week.",
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
      explanationEn: "'omdat de zaal deze week bezet is' - the meeting was postponed because the hall is busy this week.",
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
      explanationEn: "'omdat de zaal deze week bezet is' - the meeting was postponed because the hall is busy this week.",
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
      explanationEn: "'omdat de zaal deze week bezet is' - the meeting was postponed because the hall is busy this week.",
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
      explanationEn: "'omdat de zaal deze week bezet is' - the meeting was postponed because the hall is busy this week.",
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
      explanationEn: "'omdat de zaal deze week bezet is' - the meeting was postponed because the hall is busy this week.",
    },
  },
  {
    id: "listen-gen3-1",
    level: "A2",
    topic: "afspraak_verzetten",
    transcript:
      "Met de tandartspraktijk. Uw afspraak van vrijdag kan helaas niet doorgaan, de tandarts is ziek. Wilt u ons terugbellen voor een nieuwe datum?",
    question: {
      prompt: "Waarom gaat de afspraak van vrijdag niet door?",
      options: ["De tandarts is ziek", "De praktijk is verhuisd", "U heeft afgezegd"],
      correctIndex: 0,
      explanationRu: "'de tandarts is ziek' — приём отменён, потому что заболел сам стоматолог.",
      explanationEn: "'de tandarts is ziek' is cancelled because the dentist is sick.",
    },
  },
  {
    id: "listen-gen3-2",
    level: "B1",
    topic: "gemeente",
    transcript:
      "Uw rijbewijs verloopt over drie maanden. U kunt het verlengen bij de gemeente, maar wacht niet te lang want de aanvraag duurt ongeveer vijf weken.",
    question: {
      prompt: "Hoe lang duurt de aanvraag ongeveer?",
      options: ["Vijf dagen", "Vijf weken", "Vijf maanden"],
      correctIndex: 1,
      explanationRu: "'de aanvraag duurt ongeveer vijf weken' — оформление занимает около пяти недель.",
      explanationEn: "'de aanvraag duurt ongeveer vijf weken' - the design takes about five weeks.",
    },
  },
  {
    id: "listen-gen3-3",
    level: "A2",
    topic: "gezondheid",
    transcript:
      "Beste patiënt, dit jaar kunt u weer een gratis griepprik krijgen bij de huisarts. Maak hiervoor een afspraak vóór half november.",
    question: {
      prompt: "Wat moet u vóór half november doen?",
      options: ["Een afspraak maken voor de griepprik", "De prik zelf kopen", "Naar het ziekenhuis gaan"],
      correctIndex: 0,
      explanationRu: "'Maak hiervoor een afspraak vóór half november' — записаться на прививку от гриппа нужно до середины ноября.",
      explanationEn: "'Maak hiervoor een afspraak vór half november' - sign up for the flu shot before mid-November",
    },
  },
  {
    id: "listen-gen3-4",
    level: "B1",
    topic: "wonen",
    transcript:
      "Beste bewoners, in de kelder van het gebouw is een waterlekkage ontdekt. De loodgieter komt vanmiddag langs, houd de gang daarom vrij van spullen.",
    question: {
      prompt: "Wat wordt er van de bewoners gevraagd?",
      options: ["De gang vrijhouden van spullen", "Het gebouw verlaten", "Zelf het water opruimen"],
      correctIndex: 0,
      explanationRu: "'houd de gang daarom vrij van spullen' — просят освободить коридор от вещей для слесаря.",
      explanationEn: "'houd de gang daarom vrij van spullen' - asked to clear the corridor of things for the locksmith.",
    },
  },
  {
    id: "listen-gen3-5",
    level: "A2",
    topic: "werk",
    transcript:
      "Goedemorgen, ik voel me niet goed en kan vandaag niet komen werken. Kunt u dit doorgeven aan mijn collega's? Ik hoop morgen weer beter te zijn.",
    question: {
      prompt: "Wat wil de spreker doorgeven?",
      options: ["Dat hij op vakantie gaat", "Dat hij zich ziek meldt", "Dat hij later komt"],
      correctIndex: 1,
      explanationRu: "'ik voel me niet goed en kan vandaag niet komen werken' — это сообщение о болезни (больничный).",
      explanationEn: "'ik voel me niet goed en kan vandaag niet komen werken' is a message of illness.",
    },
  },
  {
    id: "listen-gen3-6",
    level: "B1",
    topic: "belasting",
    transcript:
      "Vergeet niet dat u vóór 1 mei uw belastingaangifte moet indienen. Doet u dit online, dan krijgt u meestal binnen enkele weken bericht.",
    question: {
      prompt: "Vóór welke datum moet de aangifte binnen zijn?",
      options: ["1 januari", "1 mei", "1 december"],
      correctIndex: 1,
      explanationRu: "'vóór 1 mei uw belastingaangifte moet indienen' — декларацию нужно подать до 1 мая.",
      explanationEn: "'vór 1 mei uw belastingaangifte moet indien' - the declaration must be filed before May 1.",
    },
  },
  {
    id: "listen-gen3-7",
    level: "A2",
    topic: "vervoer",
    transcript:
      "Attentie reizigers, de trein naar Utrecht heeft ongeveer tien minuten vertraging door werkzaamheden aan het spoor.",
    question: {
      prompt: "Waarom heeft de trein vertraging?",
      options: ["Door werkzaamheden aan het spoor", "Door een storm", "Door een staking"],
      correctIndex: 0,
      explanationRu: "'door werkzaamheden aan het spoor' — задержка вызвана ремонтными работами на путях.",
      explanationEn: "'door werkzaamheden aan het spoor' - delay caused by repair work on tracks",
    },
  },
  {
    id: "listen-gen3-8",
    level: "B1",
    topic: "onderwijs",
    transcript:
      "Voor het inburgeringsexamen kunt u zich inschrijven via de website. Let op: u mag het onderdeel spreken pas doen nadat u voor lezen bent geslaagd.",
    question: {
      prompt: "Wanneer mag u het onderdeel spreken doen?",
      options: ["Pas na het slagen voor lezen", "Op elk moment", "Alleen op zaterdag"],
      correctIndex: 0,
      explanationRu: "'pas nadat u voor lezen bent geslaagd' — часть «говорение» доступна только после сдачи «чтения».",
      explanationEn: "'pas nadat u voor lezen bent geslaagd' - part of the 'speaking' is available only after passing the 'reading'.",
    },
  },
  {
    id: "listen-gen3-9",
    level: "A2",
    topic: "buurt",
    transcript:
      "Aanstaande zaterdag organiseert de buurt een opschoondag. Verzamelen om tien uur bij het buurthuis, handschoenen worden uitgedeeld.",
    question: {
      prompt: "Wat krijgen de deelnemers uitgedeeld?",
      options: ["Handschoenen", "Vuilniszakken", "Fietsen"],
      correctIndex: 0,
      explanationRu: "'handschoenen worden uitgedeeld' — участникам раздают перчатки для уборки.",
      explanationEn: "Handschoen worden uitgedeeld – participants are given gloves to clean.",
    },
  },
  {
    id: "listen-gen3-10",
    level: "B1",
    topic: "post",
    transcript:
      "U heeft een aangetekende brief gemist. Deze ligt nu klaar op het postkantoor. Neem een geldig legitimatiebewijs mee als u de brief ophaalt.",
    question: {
      prompt: "Wat moet u meenemen om de brief op te halen?",
      options: ["Een geldig legitimatiebewijs", "Het oude poststuk", "Contant geld"],
      correctIndex: 0,
      explanationRu: "'Neem een geldig legitimatiebewijs mee' — для получения письма нужно удостоверение личности.",
      explanationEn: "'Neem een geldig legitimatiebewijs mee' - an ID card is required to receive a letter.",
    },
  },
  {
    id: "listen-gen3-11",
    level: "A2",
    topic: "apotheek",
    transcript:
      "Voor een herhaalrecept hoeft u niet meer naar de huisarts. Bel de apotheek en zij regelen het recept meestal binnen twee werkdagen.",
    question: {
      prompt: "Binnen hoeveel werkdagen wordt het herhaalrecept meestal geregeld?",
      options: ["Eén werkdag", "Twee werkdagen", "Een week"],
      correctIndex: 1,
      explanationRu: "'meestal binnen twee werkdagen' — повторный рецепт обычно оформляют за два рабочих дня.",
      explanationEn: "'meestal binnen twee werkdagen' - a repeated recipe is usually drawn up in two working days.",
    },
  },
  {
    id: "listen-gen3-12",
    level: "B1",
    topic: "energie",
    transcript:
      "Beste klant, wilt u vóór eind van de maand uw meterstanden doorgeven via onze app? Zo voorkomt u een te hoge schatting op uw jaarafrekening.",
    question: {
      prompt: "Wat voorkomt u door de meterstanden door te geven?",
      options: ["Een te hoge schatting op de jaarafrekening", "Een boete", "Afsluiting van gas"],
      correctIndex: 0,
      explanationRu: "'voorkomt u een te hoge schatting' — вовремя переданные показания счётчика предотвращают завышенный расчёт.",
      explanationEn: "'voorkomt u een te hoge schatting' - Timely transmitted meter readings prevent overestimation.",
    },
  },
  {
    id: "listen-gen3-13",
    level: "A2",
    topic: "kinderopvang",
    transcript:
      "Helaas staat uw kind nog op de wachtlijst voor de kinderopvang. Wij verwachten in september een plek vrij te hebben.",
    question: {
      prompt: "Wanneer verwacht de kinderopvang een plek vrij te hebben?",
      options: ["In september", "Volgend jaar", "Deze week"],
      correctIndex: 0,
      explanationRu: "'in september een plek vrij te hebben' — место ожидается свободным в сентябре.",
      explanationEn: "'in september een plek vrij te hebben' - the venue is expected to be vacant on Sept.",
    },
  },
  {
    id: "listen-gen3-14",
    level: "B1",
    topic: "sport",
    transcript:
      "De zwemles voor beginners op donderdagmiddag is helaas vol. U kunt zich wel inschrijven voor de groep op zaterdagochtend.",
    question: {
      prompt: "Waarom kan de luisteraar niet op donderdag beginnen?",
      options: ["Die groep is vol", "Die groep is afgeschaft", "Het zwembad is dicht"],
      correctIndex: 0,
      explanationRu: "'is helaas vol' — группа по четвергам заполнена, предлагают субботу.",
      explanationEn: "'is helaas vol' - Thursday group full, offer Saturday",
    },
  },
  {
    id: "listen-gen3-15",
    level: "A2",
    topic: "bibliotheek",
    transcript:
      "Het boek dat u had aangevraagd, ligt klaar bij de balie van de bibliotheek. U kunt het ophalen tot en met zaterdag.",
    question: {
      prompt: "Tot wanneer kunt u het boek ophalen?",
      options: ["Tot en met zaterdag", "Alleen vandaag", "Tot en met maandag"],
      correctIndex: 0,
      explanationRu: "'ophalen tot en met zaterdag' — книгу можно забрать включительно до субботы.",
      explanationEn: "'ophalen tot en met zaterdag' is a book that can be picked up until Saturday.",
    },
  },
  {
    id: "listen-gen3-16",
    level: "B1",
    topic: "verzekering",
    transcript:
      "U kunt uw zorgverzekering elk jaar vóór 1 januari wijzigen. Zeg de oude polis op tijd op, anders loopt deze automatisch door.",
    question: {
      prompt: "Wat gebeurt er als u de oude polis niet op tijd opzegt?",
      options: ["Die loopt automatisch door", "Die stopt automatisch", "U krijgt een boete"],
      correctIndex: 0,
      explanationRu: "'anders loopt deze automatisch door' — без своевременного отказа старый полис продлевается автоматически.",
      explanationEn: "Anders loopt deze automatisch door - without timely refusal, the old policy is renewed automatically.",
    },
  },
  {
    id: "listen-gen3-17",
    level: "A2",
    topic: "belasting",
    transcript:
      "Om huurtoeslag aan te vragen, heeft u uw inkomen en het huurcontract nodig. U vraagt de toeslag aan via de Belastingdienst.",
    question: {
      prompt: "Wat heeft u nodig voor de aanvraag van huurtoeslag?",
      options: ["Inkomen en huurcontract", "Alleen een paspoort", "Een medische verklaring"],
      correctIndex: 0,
      explanationRu: "'uw inkomen en het huurcontract nodig' — для заявки на жилищную субсидию нужны доход и договор аренды.",
      explanationEn: "'uw inkomen en het huurcontract nodig' - an income and lease agreement are required to apply for a housing subsidy.",
    },
  },
  {
    id: "listen-gen3-18",
    level: "B1",
    topic: "afval",
    transcript:
      "Beste bewoners, grofvuil wordt deze maand niet op de gebruikelijke dag opgehaald, maar een dag later, vanwege een feestdag.",
    question: {
      prompt: "Waarom wordt het grofvuil deze maand later opgehaald?",
      options: ["Vanwege een feestdag", "Vanwege slecht weer", "Vanwege een staking"],
      correctIndex: 0,
      explanationRu: "'vanwege een feestdag' — вывоз крупногабаритного мусора сдвинут из-за праздничного дня.",
      explanationEn: "'vanwege een feestdag' - the removal of bulky garbage shifted due to the holiday day.",
    },
  },
  {
    id: "listen-gen3-19",
    level: "A2",
    topic: "parkeren",
    transcript:
      "Voor een parkeervergunning voor bewoners kunt u online een aanvraag doen bij de gemeente. De vergunning is een jaar geldig.",
    question: {
      prompt: "Hoe lang is de parkeervergunning geldig?",
      options: ["Een maand", "Een jaar", "Vijf jaar"],
      correctIndex: 1,
      explanationRu: "'De vergunning is een jaar geldig' — разрешение на парковку действует один год.",
      explanationEn: "'De vergunning is een jaar geldig' is a one-year parking permit.",
    },
  },
  {
    id: "listen-gen3-20",
    level: "B1",
    topic: "fiets",
    transcript:
      "Goedemiddag, u spreekt met de politie. Wij hebben uw gestolen fiets gevonden. U kunt hem ophalen bij het bureau, neem uw fietssleutel mee.",
    question: {
      prompt: "Wat moet u meenemen om de fiets op te halen?",
      options: ["De fietssleutel", "Een aankoopbon", "Een verzekeringspapier"],
      correctIndex: 0,
      explanationRu: "'neem uw fietssleutel mee' — для получения велосипеда нужно взять ключ от него.",
      explanationEn: "'neem uw fietssleutel mee' - to get a bicycle you need to take the key to it.",
    },
  },
  {
    id: "listen-gen3-21",
    level: "A2",
    topic: "dierenarts",
    transcript:
      "Uw hond is aan een vaccinatie toe. U kunt hiervoor terecht bij de dierenarts, zonder afspraak, elke ochtend tussen negen en tien uur.",
    question: {
      prompt: "Wanneer kunt u zonder afspraak terecht?",
      options: ["Elke ochtend tussen negen en tien uur", "Alleen op vrijdag", "In het weekend"],
      correctIndex: 0,
      explanationRu: "'zonder afspraak, elke ochtend tussen negen en tien uur' — можно прийти без записи по утрам в это время.",
      explanationEn: "'zonder afspraak, elke ochtend tussen negen en tien uur' - you can come without a record in the morning at this time.",
    },
  },
  {
    id: "listen-gen3-22",
    level: "B1",
    topic: "wonen",
    transcript:
      "Beste bewoner, wij hebben een klacht ontvangen over geluidsoverlast in uw woning na tien uur 's avonds. Wij vragen u hier rekening mee te houden.",
    question: {
      prompt: "Waarover gaat de klacht?",
      options: ["Geluidsoverlast na tien uur 's avonds", "Een lekkage", "Een vuilnisprobleem"],
      correctIndex: 0,
      explanationRu: "'een klacht ... over geluidsoverlast ... na tien uur' — жалоба на шум после десяти вечера.",
      explanationEn: "'een klacht ... over geluidsoverlast ... na tien uur' is a noise complaint after ten p.m.",
    },
  },
  {
    id: "listen-gen3-23",
    level: "A2",
    topic: "werk",
    transcript:
      "Uw loonstrook van deze maand staat vanaf vandaag klaar in uw online account. Controleer of alle gegevens kloppen.",
    question: {
      prompt: "Waar staat de loonstrook klaar?",
      options: ["In het online account", "Op papier thuis", "Bij de manager"],
      correctIndex: 0,
      explanationRu: "'staat vanaf vandaag klaar in uw online account' — расчётный лист доступен в личном кабинете онлайн.",
      explanationEn: "'staat vanaf vandaag klaar in uw online account' is available online.",
    },
  },
  {
    id: "listen-gen3-24",
    level: "B1",
    topic: "geld",
    transcript:
      "Met een spaarrekening bij ons krijgt u dit jaar een iets hogere rente. Het geld opnemen kan altijd, zonder extra kosten.",
    question: {
      prompt: "Wat is er mogelijk met het spaargeld?",
      options: ["Het altijd zonder kosten opnemen", "Het alleen na een jaar opnemen", "Het niet opnemen"],
      correctIndex: 0,
      explanationRu: "'Het geld opnemen kan altijd, zonder extra kosten' — снять деньги можно в любое время без дополнительных затрат.",
      explanationEn: "'Het geld opnemen kan altijd, zonder extra kosten' - you can withdraw money at any time at no additional cost.",
    },
  },
  {
    id: "listen-gen3-25",
    level: "A2",
    topic: "vervoer",
    transcript:
      "Let op: uw ov-chipkaart is bijna verlopen. Vraag op tijd een nieuwe kaart aan, zodat u kunt blijven reizen.",
    question: {
      prompt: "Wat moet u op tijd doen?",
      options: ["Een nieuwe ov-chipkaart aanvragen", "Geld overmaken", "Een boete betalen"],
      correctIndex: 0,
      explanationRu: "'Vraag op tijd een nieuwe kaart aan' — нужно вовремя заказать новую транспортную карту.",
      explanationEn: "'Vraag op tijd een nieuwe kaart aan' - you need to order a new transport card on time.",
    },
  },
  {
    id: "listen-gen3-26",
    level: "B1",
    topic: "onderwijs",
    transcript:
      "Wij nodigen u uit voor een oudergesprek over de resultaten van uw kind. Het gesprek duurt ongeveer twintig minuten.",
    question: {
      prompt: "Hoe lang duurt het oudergesprek ongeveer?",
      options: ["Twintig minuten", "Een uur", "Vijf minuten"],
      correctIndex: 0,
      explanationRu: "'Het gesprek duurt ongeveer twintig minuten' — беседа с родителями длится примерно двадцать минут.",
      explanationEn: "\"Het gesprek duurt ongeveer twintig minuten\" - a conversation with parents lasts about twenty minutes.",
    },
  },
  {
    id: "listen-gen3-27",
    level: "A2",
    topic: "buurt",
    transcript:
      "De buurtpreventiegroep zoekt nieuwe vrijwilligers. Wilt u meedoen, meld u dan aan bij de coördinator via de telefoon.",
    question: {
      prompt: "Hoe kunt u zich aanmelden voor de buurtpreventiegroep?",
      options: ["Via de telefoon bij de coördinator", "Via een brief", "Alleen persoonlijk"],
      correctIndex: 0,
      explanationRu: "'meld u dan aan bij de coördinator via de telefoon' — записаться можно по телефону у координатора.",
      explanationEn: "'meld u dan aan bij de coördinator via de telefoon' - you can call the coordinator.",
    },
  },
  {
    id: "listen-gen3-28",
    level: "B1",
    topic: "post",
    transcript:
      "Uw pakket is bezorgd bij de buren op nummer twaalf, omdat u niet thuis was. U kunt het daar ophalen.",
    question: {
      prompt: "Waar is het pakket bezorgd?",
      options: ["Bij de buren op nummer twaalf", "Op het postkantoor", "Terug naar de afzender"],
      correctIndex: 0,
      explanationRu: "'bezorgd bij de buren op nummer twaalf' — посылку оставили у соседей в доме номер 12.",
      explanationEn: "'bezorgd bij de buren op nummer twaalf' - parcel left at the neighbours' house number 12.",
    },
  },
  {
    id: "listen-gen3-29",
    level: "A2",
    topic: "apotheek",
    transcript:
      "Onze apotheek is tijdens de zomervakantie twee weken gesloten. Voor spoedmedicijnen kunt u terecht bij de dienstapotheek in het centrum.",
    question: {
      prompt: "Waar kunt u terecht voor spoedmedicijnen tijdens de sluiting?",
      options: ["Bij de dienstapotheek in het centrum", "Bij de huisarts", "Nergens"],
      correctIndex: 0,
      explanationRu: "'terecht bij de dienstapotheek in het centrum' — в это время работает дежурная аптека в центре.",
      explanationEn: "'terecht bij de dienstapotheek in het centrum' is the time when the on-duty pharmacy in the centre operates.",
    },
  },
  {
    id: "listen-gen3-30",
    level: "B1",
    topic: "energie",
    transcript:
      "Overweegt u over te stappen naar een andere energieleverancier? Vergelijk eerst de prijzen, want overstappen kan vaak zonder opzegtermijn.",
    question: {
      prompt: "Wat kan er vaak zonder opzegtermijn?",
      options: ["Overstappen naar een andere leverancier", "De meterstand doorgeven", "Een storing melden"],
      correctIndex: 0,
      explanationRu: "'overstappen kan vaak zonder opzegtermijn' — сменить поставщика энергии часто можно без срока уведомления.",
      explanationEn: "'overstappen kan vaak zonder opzegtermijn' - change of energy supplier is often possible without notice.",
    },
  },
  {
    id: "listen-gen3-31",
    level: "A2",
    topic: "kinderopvang",
    transcript:
      "De ouderbijdrage voor de peuterspeelzaal is afhankelijk van uw inkomen. Vul het formulier in en stuur het samen met uw loonstrook op.",
    question: {
      prompt: "Waarvan is de ouderbijdrage afhankelijk?",
      options: ["Van het inkomen", "Van de leeftijd van het kind", "Van het aantal kinderen"],
      correctIndex: 0,
      explanationRu: "'afhankelijk van uw inkomen' — родительский взнос зависит от дохода семьи.",
      explanationEn: "'afhankelijk van uw inkomen' - Parental contribution depends on family income.",
    },
  },
  {
    id: "listen-gen3-32",
    level: "B1",
    topic: "sport",
    transcript:
      "Bij de sportschool kunt u een contract van drie maanden opzeggen met één maand opzegtermijn. Stuur uw opzegging schriftelijk.",
    question: {
      prompt: "Hoe moet u het contract opzeggen?",
      options: ["Schriftelijk", "Alleen telefonisch", "Via een app"],
      correctIndex: 0,
      explanationRu: "'Stuur uw opzegging schriftelijk' — отказ от контракта нужно оформить письменно.",
      explanationEn: "‘Stuur uw opzegging schriftelijk’ – a contract waiver must be written.",
    },
  },
  {
    id: "listen-gen3-33",
    level: "A2",
    topic: "bibliotheek",
    transcript:
      "U heeft een boek te laat ingeleverd bij de bibliotheek. De boete is dertig cent per dag, met een maximum van tien euro.",
    question: {
      prompt: "Hoeveel is de boete per dag?",
      options: ["Dertig cent", "Een euro", "Tien euro"],
      correctIndex: 0,
      explanationRu: "'De boete is dertig cent per dag' — штраф за просрочку составляет тридцать центов в день.",
      explanationEn: "'De boete is dertig cent per dag' - the penalty for delay is thirty cents a day.",
    },
  },
  {
    id: "listen-gen3-34",
    level: "B1",
    topic: "verzekering",
    transcript:
      "Om schade aan uw auto te melden bij de verzekering, heeft u foto's van de schade en het kenteken van de andere auto nodig.",
    question: {
      prompt: "Wat heeft u nodig om de schade te melden?",
      options: ["Foto's en het kenteken van de andere auto", "Alleen een politieverslag", "Een nieuw rijbewijs"],
      correctIndex: 0,
      explanationRu: "'foto's van de schade en het kenteken ... nodig' — для заявки о повреждении нужны фото и номер другой машины.",
      explanationEn: "'foto's van de schade en het kenteken ... nodig' - a photo and license plate of another car are required to claim damage.",
    },
  },
  {
    id: "listen-gen3-35",
    level: "A2",
    topic: "belasting",
    transcript:
      "De definitieve aanslag van de belasting komt meestal binnen drie maanden na uw aangifte. Bewaar de brief goed.",
    question: {
      prompt: "Wanneer komt de definitieve aanslag meestal?",
      options: ["Binnen drie maanden na de aangifte", "Binnen een week", "Na een jaar"],
      correctIndex: 0,
      explanationRu: "'meestal binnen drie maanden na uw aangifte' — окончательное решение по налогу приходит обычно в течение трёх месяцев.",
      explanationEn: "\"meestal binnen drie maanden na uw aangifte\" - the final decision on the tax usually comes within three months.",
    },
  },
  {
    id: "listen-gen3-36",
    level: "B1",
    topic: "afval",
    transcript:
      "Beste bewoners, de glasbak op de hoek van de straat is vol. Gebruikt u tijdelijk de glasbak bij het winkelcentrum.",
    question: {
      prompt: "Wat is het probleem met de glasbak op de hoek?",
      options: ["Die is vol", "Die is kapot", "Die is verwijderd"],
      correctIndex: 0,
      explanationRu: "'de glasbak op de hoek van de straat is vol' — контейнер для стекла на углу переполнен.",
      explanationEn: "'de glasbak op de hoek van de straat is vol' - the glass container on the corner is crowded.",
    },
  },
  {
    id: "listen-gen3-37",
    level: "A2",
    topic: "parkeren",
    transcript:
      "U heeft een parkeerboete gekregen omdat uw vergunning niet zichtbaar achter de voorruit lag. Bezwaar maken kan binnen zes weken.",
    question: {
      prompt: "Binnen hoeveel weken kunt u bezwaar maken?",
      options: ["Twee weken", "Zes weken", "Zes maanden"],
      correctIndex: 1,
      explanationRu: "'Bezwaar maken kan binnen zes weken' — обжаловать штраф можно в течение шести недель.",
      explanationEn: "'Bezwaar maken kan binnen zes weken' - the fine can be appealed within six weeks.",
    },
  },
  {
    id: "listen-gen3-38",
    level: "B1",
    topic: "fiets",
    transcript:
      "De fietsenstalling bij het station is deze week gratis vanwege werkzaamheden aan de betaalautomaten.",
    question: {
      prompt: "Waarom is de fietsenstalling deze week gratis?",
      options: ["Vanwege werkzaamheden aan de betaalautomaten", "Vanwege een feestdag", "De stalling is nieuw"],
      correctIndex: 0,
      explanationRu: "'vanwege werkzaamheden aan de betaalautomaten' — стоянка бесплатна из-за ремонта платёжных автоматов.",
      explanationEn: "'vanwege werkzaamheden aan de betaalautomaten' - parking is free due to the repair of payment machines.",
    },
  },
  {
    id: "listen-gen3-39",
    level: "A2",
    topic: "dierenarts",
    transcript:
      "Het spreekuur van de dierenarts van vandaag is verzet naar drie uur, want er was een spoedgeval.",
    question: {
      prompt: "Waarom is het spreekuur verzet?",
      options: ["Er was een spoedgeval", "De dierenarts is met vakantie", "De praktijk is verhuisd"],
      correctIndex: 0,
      explanationRu: "'want er was een spoedgeval' — приём перенесли из-за срочного случая.",
      explanationEn: "'want er was een spoedgeval' was postponed due to an emergency.",
    },
  },
  {
    id: "listen-gen3-40",
    level: "B1",
    topic: "wonen",
    transcript:
      "De cv-ketel in uw woning krijgt dit jaar het jaarlijkse onderhoud. De monteur belt u om een geschikte datum af te spreken.",
    question: {
      prompt: "Wie belt om een datum af te spreken?",
      options: ["De monteur", "De verhuurder", "De buurman"],
      correctIndex: 0,
      explanationRu: "'De monteur belt u om een geschikte datum af te spreken' — мастер сам позвонит, чтобы согласовать дату.",
      explanationEn: "'De monteur belt u om een geschikte datum af te spreken' - the master himself will call to agree on the date.",
    },
  },
  {
    id: "listen-gen3-41",
    level: "A2",
    topic: "werk",
    transcript:
      "Deze maand heeft u zes uur overgewerkt. Deze uren worden automatisch bij uw volgende salaris opgeteld.",
    question: {
      prompt: "Wat gebeurt er met de overuren?",
      options: ["Ze worden bij het volgende salaris opgeteld", "Ze vervallen", "Ze worden vrije dagen"],
      correctIndex: 0,
      explanationRu: "'worden automatisch bij uw volgende salaris opgeteld' — переработанные часы добавят к следующей зарплате.",
      explanationEn: "'worden automatisch bij uw volgende salaris opgeteld' - recycled watches will be added to the next paycheck.",
    },
  },
  {
    id: "listen-gen3-42",
    level: "B1",
    topic: "geld",
    transcript:
      "Wij zien dat u regelmatig rood staat op uw rekening. Wilt u langskomen voor een gesprek over uw financiën?",
    question: {
      prompt: "Waarover gaat het voorgestelde gesprek?",
      options: ["Over de financiën van de klant", "Over een nieuwe pas", "Over een verhuizing"],
      correctIndex: 0,
      explanationRu: "'een gesprek over uw financiën' — банк предлагает обсудить финансовое положение клиента.",
      explanationEn: "'een gesprek over uw financien' - the bank offers to discuss the financial situation of the client.",
    },
  },
  {
    id: "listen-gen3-43",
    level: "A2",
    topic: "vervoer",
    transcript:
      "De fietsroute langs de rivier is deze week omgeleid vanwege wegwerkzaamheden. Volg de gele borden.",
    question: {
      prompt: "Wat moet fietsers volgen tijdens de omleiding?",
      options: ["De gele borden", "De blauwe lijnen", "Hun navigatie-app"],
      correctIndex: 0,
      explanationRu: "'Volg de gele borden' — во время объезда нужно следовать жёлтым указателям.",
      explanationEn: "\"Volg de gele borden\" - during the detour you need to follow the yellow signs.",
    },
  },
  {
    id: "listen-gen3-44",
    level: "B1",
    topic: "onderwijs",
    transcript:
      "Het rapport van uw kind kan vanaf donderdag worden opgehaald op school, tussen half vier en vijf uur.",
    question: {
      prompt: "Wanneer kan het rapport worden opgehaald?",
      options: ["Vanaf donderdag tussen half vier en vijf uur", "Alleen op vrijdagochtend", "Elke dag"],
      correctIndex: 0,
      explanationRu: "'vanaf donderdag ... tussen half vier en vijf uur' — табель можно забрать с четверга в указанное время.",
      explanationEn: "'vanaf donderdag ... tussen half vier en vijf uur' - the card can be picked up from Thursday at the specified time.",
    },
  },
  {
    id: "listen-gen3-45",
    level: "A2",
    topic: "buurt",
    transcript:
      "Op zaterdag is er een straatfeest in onze straat. Iedereen mag iets lekkers meenemen om te delen.",
    question: {
      prompt: "Wat wordt er van de bewoners gevraagd voor het straatfeest?",
      options: ["Iets lekkers meenemen om te delen", "Geld betalen voor een kaartje", "Zich van tevoren aanmelden"],
      correctIndex: 0,
      explanationRu: "'Iedereen mag iets lekkers meenemen om te delen' — каждый может принести что-то вкусное для общего стола.",
      explanationEn: "'Iedereen mag iets lekkers meenemen om te delen' - anyone can bring something tasty to the common table.",
    },
  },
  {
    id: "listen-gen3-46",
    level: "B1",
    topic: "post",
    transcript:
      "Bij verhuizing moet u binnen vijf dagen uw nieuwe adres doorgeven aan de gemeente, anders krijgt u geen post meer bezorgd.",
    question: {
      prompt: "Binnen hoeveel dagen moet u het nieuwe adres doorgeven?",
      options: ["Binnen vijf dagen", "Binnen een maand", "Binnen een jaar"],
      correctIndex: 0,
      explanationRu: "'binnen vijf dagen uw nieuwe adres doorgeven' — новый адрес нужно сообщить в течение пяти дней.",
      explanationEn: "'binnen vijf dagen uw nieuwe adres doorgeven' - a new address must be reported within five days.",
    },
  },
  {
    id: "listen-gen3-47",
    level: "A2",
    topic: "apotheek",
    transcript:
      "Buiten de openingstijden kunt u 's nachts terecht bij de dienstapotheek. Het adres staat op onze website.",
    question: {
      prompt: "Waar staat het adres van de dienstapotheek?",
      options: ["Op de website", "Op de deur van de apotheek", "In de krant"],
      correctIndex: 0,
      explanationRu: "'Het adres staat op onze website' — адрес дежурной аптеки указан на сайте.",
      explanationEn: "'Het adres staat op onze website' - the address of the on-duty pharmacy is listed on the website.",
    },
  },
  {
    id: "listen-gen3-48",
    level: "B1",
    topic: "energie",
    transcript:
      "Met subsidie voor zonnepanelen kunt u een deel van de kosten terugkrijgen. Dien uw aanvraag in vóór het einde van het jaar.",
    question: {
      prompt: "Wanneer moet u de aanvraag indienen?",
      options: ["Vóór het einde van het jaar", "Binnen een week", "Alleen in de zomer"],
      correctIndex: 0,
      explanationRu: "'Dien uw aanvraag in vóór het einde van het jaar' — заявку на субсидию нужно подать до конца года.",
      explanationEn: "'Dien uw aanvraag in vór het einde van het jaar' - the application for the grant must be submitted before the end of the year.",
    },
  },
  {
    id: "listen-gen3-49",
    level: "A2",
    topic: "sport",
    transcript:
      "De hardloopcursus voor beginners start volgende maand. Trainingen zijn op dinsdag- en donderdagavond in het park.",
    question: {
      prompt: "Op welke dagen zijn de trainingen?",
      options: ["Dinsdag en donderdag", "Maandag en woensdag", "Alleen zaterdag"],
      correctIndex: 0,
      explanationRu: "'op dinsdag- en donderdagavond' — тренировки проходят по вторникам и четвергам.",
      explanationEn: "'op dinsdag- en donderdagavond' - training sessions are held on Tuesdays and Thursdays.",
    },
  },
  {
    id: "listen-gen3-50",
    level: "B1",
    topic: "bibliotheek",
    transcript:
      "Voor kinderen tot achttien jaar is een lidmaatschap van de bibliotheek helemaal gratis. Voor volwassenen betaalt u een jaarlijks bedrag.",
    question: {
      prompt: "Voor wie is het lidmaatschap gratis?",
      options: ["Voor kinderen tot achttien jaar", "Voor iedereen", "Voor gepensioneerden"],
      correctIndex: 0,
      explanationRu: "'Voor kinderen tot achttien jaar is een lidmaatschap ... gratis' — для детей до 18 лет членство бесплатное.",
      explanationEn: "Voor kinderen tot achttien jaar is een lidmaatschap ... gratis - for children under 18 years of age membership is free.",
    },
  },
  {
    id: "listen-gen3-51",
    level: "A2",
    topic: "verzekering",
    transcript:
      "Een aansprakelijkheidsverzekering dekt schade die u per ongeluk bij een ander veroorzaakt, bijvoorbeeld een gebroken raam.",
    question: {
      prompt: "Wat dekt een aansprakelijkheidsverzekering?",
      options: ["Schade die u per ongeluk bij een ander veroorzaakt", "Schade aan uw eigen huis", "Diefstal van uw fiets"],
      correctIndex: 0,
      explanationRu: "'dekt schade die u per ongeluk bij een ander veroorzaakt' — страхование ответственности покрывает случайный вред, причинённый другим.",
      explanationEn: "'dekt schade die u per ongeluk bij een ander veroorzaakt' - liability insurance covers accidental harm caused to others.",
    },
  },
  {
    id: "listen-gen3-52",
    level: "B1",
    topic: "belasting",
    transcript:
      "Als zzp'er moet u ieder kwartaal btw-aangifte doen, ook als u dat kwartaal niets heeft verdiend.",
    question: {
      prompt: "Wanneer moet een zzp'er btw-aangifte doen?",
      options: ["Ieder kwartaal", "Alleen als er winst is", "Eén keer per jaar"],
      correctIndex: 0,
      explanationRu: "'moet u ieder kwartaal btw-aangifte doen' — декларацию по НДС подают каждый квартал, даже без дохода.",
      explanationEn: "'moet u ieder kwartaal btw-aangifte doen' - VAT returns are filed every quarter, even without income.",
    },
  },
  {
    id: "listen-gen3-53",
    level: "A2",
    topic: "afval",
    transcript:
      "Na de feestdagen kunt u uw kerstboom gratis inleveren bij het inzamelpunt in het park, tot en met 15 januari.",
    question: {
      prompt: "Tot wanneer kunt u de kerstboom inleveren?",
      options: ["Tot en met 15 januari", "Tot en met 1 januari", "Het hele jaar"],
      correctIndex: 0,
      explanationRu: "'tot en met 15 januari' — рождественскую ёлку можно сдать до 15 января включительно.",
      explanationEn: "'Tot en met 15 januari' - Christmas tree can be rented until January 15 inclusive.",
    },
  },
  {
    id: "listen-gen3-54",
    level: "B1",
    topic: "parkeren",
    transcript:
      "Er komt een nieuwe laadpaal voor elektrische auto's in onze straat. De werkzaamheden duren ongeveer een week.",
    question: {
      prompt: "Hoe lang duren de werkzaamheden ongeveer?",
      options: ["Ongeveer een week", "Ongeveer een dag", "Ongeveer een maand"],
      correctIndex: 0,
      explanationRu: "'De werkzaamheden duren ongeveer een week' — установка займёт примерно неделю.",
      explanationEn: "'De werkzaamheden duren ongeveer een week' - installation will take about a week.",
    },
  },
  {
    id: "listen-gen3-55",
    level: "A2",
    topic: "wonen",
    transcript:
      "Volgende week wordt de buitenkant van het gebouw geschilderd. De steigers blijven ongeveer tien dagen staan.",
    question: {
      prompt: "Hoe lang blijven de steigers ongeveer staan?",
      options: ["Ongeveer tien dagen", "Ongeveer twee dagen", "Een maand"],
      correctIndex: 0,
      explanationRu: "'De steigers blijven ongeveer tien dagen staan' — леса простоят примерно десять дней.",
      explanationEn: "\"De steigers blijven ongeveer tien dagen staan\" - the forests stand for about ten days.",
    },
  },
  {
    id: "listen-gen3-56",
    level: "B1",
    topic: "gemeente",
    transcript:
      "Vanaf volgend jaar gaat de hondenbelasting iets omhoog. Eigenaren ontvangen hierover binnenkort een brief van de gemeente.",
    question: {
      prompt: "Wat gaat er volgend jaar gebeuren met de hondenbelasting?",
      options: ["Ze gaat iets omhoog", "Ze wordt afgeschaft", "Ze blijft gelijk"],
      correctIndex: 0,
      explanationRu: "'gaat de hondenbelasting iets omhoog' — налог на собак немного повысится.",
      explanationEn: "'gaat de hondenbelasting iets omhoog' - dog tax will rise slightly",
    },
  },
  {
    id: "listen-gen3-57",
    level: "A2",
    topic: "gezondheid",
    transcript:
      "Uw huisarts heeft u doorverwezen naar de fysiotherapeut. Neem de verwijsbrief mee naar de eerste afspraak.",
    question: {
      prompt: "Wat moet u meenemen naar de eerste afspraak?",
      options: ["De verwijsbrief", "Een röntgenfoto", "Uw verzekeringspas alleen"],
      correctIndex: 0,
      explanationRu: "'Neem de verwijsbrief mee' — на первый приём нужно взять направление от врача.",
      explanationEn: "'Neem de verwijsbrief mee' - for the first appointment you need to take a referral from a doctor.",
    },
  },
  {
    id: "listen-gen3-58",
    level: "B1",
    topic: "buurt",
    transcript:
      "De speeltuin in het park wordt volgende maand vernieuwd. Tot die tijd is een deel van het park afgesloten.",
    question: {
      prompt: "Wat gebeurt er met een deel van het park tot de vernieuwing klaar is?",
      options: ["Het is afgesloten", "Het wordt gratis toegankelijk", "Het blijft precies hetzelfde"],
      correctIndex: 0,
      explanationRu: "'is een deel van het park afgesloten' — часть парка закрыта до завершения обновления.",
      explanationEn: "'is een deel van het park afgesloten' - part of the park is closed until renovation is completed.",
    },
  },
  {
    id: "listen-gen3-59",
    level: "A2",
    topic: "stembureau",
    transcript:
      "Op woensdag zijn de gemeenteraadsverkiezingen. De stembureaus zijn open van half acht 's ochtends tot negen uur 's avonds.",
    question: {
      prompt: "Hoe laat gaan de stembureaus open?",
      options: ["Half acht 's ochtends", "Negen uur 's ochtends", "Tien uur 's ochtends"],
      correctIndex: 0,
      explanationRu: "'open van half acht 's ochtends' — избирательные участки открываются в семь тридцать утра.",
      explanationEn: "'open van half acht's ochtends' - polling stations open at seven thirty in the morning.",
    },
  },
  {
    id: "listen-gen3-60",
    level: "B1",
    topic: "DigiD",
    transcript:
      "Bent u uw DigiD-wachtwoord vergeten? U kunt dit eenvoudig resetten via de app, met een geldig identiteitsbewijs bij de hand.",
    question: {
      prompt: "Wat heeft u nodig om het wachtwoord te resetten?",
      options: ["Een geldig identiteitsbewijs", "Een nieuwe simkaart", "Een pincode van de bank"],
      correctIndex: 0,
      explanationRu: "'met een geldig identiteitsbewijs bij de hand' — для сброса пароля нужно удостоверение личности.",
      explanationEn: "'met een geldig identiteitsbewijs bij de hand' - an ID card is required to reset the password.",
    },
  },
  {
    id: "listen-gen3-61",
    level: "A2",
    topic: "werk",
    transcript:
      "Vanuit het UWV: u moet elke maand minstens vier keer solliciteren om uw uitkering te behouden.",
    question: {
      prompt: "Hoeveel keer per maand moet u minstens solliciteren?",
      options: ["Vier keer", "Eén keer", "Tien keer"],
      correctIndex: 0,
      explanationRu: "'minstens vier keer solliciteren' — для сохранения пособия нужно откликаться минимум четыре раза в месяц.",
      explanationEn: "'minstens vier keer solliciteren' - you need to respond at least four times a month to save the allowance.",
    },
  },
  {
    id: "listen-gen3-62",
    level: "B1",
    topic: "gezondheid",
    transcript:
      "Het consultatiebureau nodigt u uit voor de controle van uw baby van zes maanden. Neem het groeiboekje mee.",
    question: {
      prompt: "Wat moet u meenemen naar het consultatiebureau?",
      options: ["Het groeiboekje", "Een geboorteakte", "Een medicijnlijst"],
      correctIndex: 0,
      explanationRu: "'Neem het groeiboekje mee' — на приём в консультационном бюро нужно взять книжку роста ребёнка.",
      explanationEn: "'Neem het groeiboekje mee' - you need to take a child's growth book to the consulting office.",
    },
  },
  {
    id: "listen-gen3-63",
    level: "A2",
    topic: "wonen",
    transcript:
      "De brandweer controleert deze week gratis de rookmelders in de flat. Bent u niet thuis, dan komen zij een andere dag terug.",
    question: {
      prompt: "Wat controleert de brandweer deze week?",
      options: ["De rookmelders", "De verwarming", "De brievenbussen"],
      correctIndex: 0,
      explanationRu: "'controleert ... gratis de rookmelders' — пожарная служба бесплатно проверяет дымовые извещатели.",
      explanationEn: "'controleert ... gratis de rookmelders' - the fire service checks smoke detectors free of charge.",
    },
  },
  {
    id: "listen-gen3-64",
    level: "B1",
    topic: "politie",
    transcript:
      "Voor het doen van aangifte van diefstal kunt u online een formulier invullen of langsgaan bij het politiebureau.",
    question: {
      prompt: "Hoe kunt u aangifte doen van diefstal?",
      options: ["Online of bij het politiebureau", "Alleen telefonisch", "Alleen via de post"],
      correctIndex: 0,
      explanationRu: "'online een formulier invullen of langsgaan bij het politiebureau' — заявление можно подать онлайн или лично.",
      explanationEn: "'Online een formulier invullen of langsgaan bij het politiebureau' - application can be made online or in person.",
    },
  },
  {
    id: "listen-gen3-65",
    level: "A2",
    topic: "buurt",
    transcript:
      "Dit weekend is de toegang tot het museum gratis voor alle inwoners van de gemeente. Neem een legitimatiebewijs mee.",
    question: {
      prompt: "Voor wie is de toegang dit weekend gratis?",
      options: ["Voor alle inwoners van de gemeente", "Alleen voor kinderen", "Alleen voor studenten"],
      correctIndex: 0,
      explanationRu: "'gratis voor alle inwoners van de gemeente' — вход бесплатный для всех жителей муниципалитета.",
      explanationEn: "Gratis voor alle inwoners van de gemeente is free of charge for all residents of the municipality.",
    },
  },
  {
    id: "listen-gen3-66",
    level: "B1",
    topic: "sport",
    transcript:
      "De openingstijden van het zwembad veranderen vanaf volgende week. Het bad gaat een uur eerder dicht, om acht uur 's avonds.",
    question: {
      prompt: "Hoe laat gaat het zwembad vanaf volgende week dicht?",
      options: ["Om acht uur 's avonds", "Om negen uur 's avonds", "Om zeven uur 's avonds"],
      correctIndex: 0,
      explanationRu: "'gaat een uur eerder dicht, om acht uur 's avonds' — бассейн будет закрываться на час раньше, в восемь вечера.",
      explanationEn: "'gaat een uur eerder dicht, om acht uur's avonds' - the pool will close an hour earlier, at eight in the evening.",
    },
  },
  {
    id: "listen-gen3-67",
    level: "A2",
    topic: "vervoer",
    transcript:
      "Vanaf maandag rijdt bus lijn 5 een andere route vanwege wegwerkzaamheden. Kijk op de website voor de nieuwe haltes.",
    question: {
      prompt: "Waarom rijdt lijn 5 een andere route?",
      options: ["Vanwege wegwerkzaamheden", "Vanwege een ongeluk", "Vanwege minder reizigers"],
      correctIndex: 0,
      explanationRu: "'vanwege wegwerkzaamheden' — маршрут изменён из-за дорожных работ.",
      explanationEn: "'vanwege wegwerkzaamheden' - the route changed due to road works",
    },
  },
  {
    id: "listen-gen3-68",
    level: "B1",
    topic: "kinderopvang",
    transcript:
      "Vanaf augustus wordt de kinderopvangtoeslag berekend op basis van uw meest recente inkomen. Controleer uw gegevens in de app.",
    question: {
      prompt: "Waarop wordt de toeslag vanaf augustus berekend?",
      options: ["Op het meest recente inkomen", "Op het aantal kinderen", "Op de woonplaats"],
      correctIndex: 0,
      explanationRu: "'berekend op basis van uw meest recente inkomen' — субсидия рассчитывается по последнему доходу.",
      explanationEn: "'berekend op basis van uw meest recente inkomen' - the subsidy is calculated on the latest income.",
    },
  },
  {
    id: "listen-gen3-69",
    level: "A2",
    topic: "telefoon",
    transcript:
      "Wilt u uw telefoonabonnement opzeggen? Dat kan schriftelijk, met een opzegtermijn van één maand.",
    question: {
      prompt: "Hoe lang is de opzegtermijn?",
      options: ["Eén maand", "Eén week", "Zes maanden"],
      correctIndex: 0,
      explanationRu: "'met een opzegtermijn van één maand' — срок уведомления при расторжении договора — один месяц.",
      explanationEn: "'met een opzegtermijn van één maand' - notice period on termination of the contract is one month.",
    },
  },
  {
    id: "listen-gen3-70",
    level: "B1",
    topic: "internet",
    transcript:
      "Er is momenteel een storing in het internet in uw wijk. Onze monteurs werken eraan, de storing wordt vanavond verholpen.",
    question: {
      prompt: "Wanneer wordt de storing naar verwachting verholpen?",
      options: ["Vanavond", "Morgenvroeg", "Volgende week"],
      correctIndex: 0,
      explanationRu: "'de storing wordt vanavond verholpen' — сбой планируют устранить сегодня вечером.",
      explanationEn: "'de storing wordt vanavond verholpen' is scheduled to be fixed tonight",
    },
  },
  {
    id: "listen-gen3-71",
    level: "A2",
    topic: "wonen",
    transcript:
      "De sleuteloverdracht van uw nieuwe woning is gepland op de eerste van de maand om elf uur bij de makelaar.",
    question: {
      prompt: "Waar vindt de sleuteloverdracht plaats?",
      options: ["Bij de makelaar", "Bij de gemeente", "Bij de bank"],
      correctIndex: 0,
      explanationRu: "'de sleuteloverdracht ... bij de makelaar' — передача ключей состоится у риелтора.",
      explanationEn: "'de sleuteloverdracht ... bij de makelaar' - the transfer of keys will take place at the realtor.",
    },
  },
  {
    id: "listen-gen3-72",
    level: "B1",
    topic: "onderwijs",
    transcript:
      "Aanstaande vakantie zijn de scholen twee weken dicht. Let op: de kinderopvang blijft wel gewoon open.",
    question: {
      prompt: "Wat blijft tijdens de vakantie gewoon open?",
      options: ["De kinderopvang", "De school", "De bibliotheek voor kinderen"],
      correctIndex: 0,
      explanationRu: "'de kinderopvang blijft wel gewoon open' — детский сад продолжает работать, в отличие от школы.",
      explanationEn: "'de kinderopvang blijft wel gewoon open' means that childcare remains open even though the school is closed.",
    },
  },
  {
    id: "listen-gen3-73",
    level: "A2",
    topic: "vervoer",
    transcript:
      "Voor uw vlucht van morgenochtend wordt geadviseerd twee uur van tevoren op het vliegveld aanwezig te zijn.",
    question: {
      prompt: "Hoeveel uur van tevoren moet u aanwezig zijn?",
      options: ["Twee uur", "Een half uur", "Vier uur"],
      correctIndex: 0,
      explanationRu: "'twee uur van tevoren op het vliegveld aanwezig te zijn' — в аэропорт советуют приезжать за два часа.",
      explanationEn: "'twee uur van tevoren op het vliegveld aanwezig te zijn' - the airport is advised to arrive two hours in advance.",
    },
  },
  {
    id: "listen-gen3-74",
    level: "B1",
    topic: "gemeente",
    transcript:
      "Voor het gemeentearchief kunt u een afspraak maken als u oude documenten wilt inzien, bijvoorbeeld een geboorteakte.",
    question: {
      prompt: "Waarvoor kunt u een afspraak maken bij het gemeentearchief?",
      options: ["Om oude documenten in te zien", "Om een paspoort aan te vragen", "Om belasting te betalen"],
      correctIndex: 0,
      explanationRu: "'een afspraak maken als u oude documenten wilt inzien' — записаться нужно для просмотра старых документов, например свидетельства о рождении.",
      explanationEn: "'een afspraak maken als u oude documenten wilt inzien' - sign up to view old documents, such as birth certificates.",
    },
  },
  {
    id: "listen-gen3-75",
    level: "A2",
    topic: "kapper",
    transcript:
      "Onze kapperszaak is verhuisd naar het adres naast de bakker. De openingstijden blijven precies hetzelfde.",
    question: {
      prompt: "Wat is er veranderd bij de kapperszaak?",
      options: ["Het adres", "De openingstijden", "De prijzen"],
      correctIndex: 0,
      explanationRu: "'is verhuisd naar het adres naast de bakker' — изменился именно адрес парикмахерской, время работы прежнее.",
      explanationEn: "'is verhuisd naar het adres naast de bakker' - it was the address of the barbershop that changed.",
    },
  },
  {
    id: "listen-gen3-76",
    level: "B1",
    topic: "telefoon",
    transcript:
      "Uw nieuwe simkaart is onderweg en komt binnen twee werkdagen aan. Uw oude kaart blijft tot die tijd actief.",
    question: {
      prompt: "Tot wanneer blijft de oude simkaart actief?",
      options: ["Tot de nieuwe kaart aankomt", "Vanaf vandaag niet meer", "Nog een maand"],
      correctIndex: 0,
      explanationRu: "'Uw oude kaart blijft tot die tijd actief' — старая сим-карта работает, пока не придёт новая.",
      explanationEn: "'Uw oude kaart blijft tot die tijd actief' - the old SIM card works until a new one arrives.",
    },
  },
  {
    id: "listen-gen3-77",
    level: "A2",
    topic: "internet",
    transcript:
      "De monteur komt uw modem vervangen op dinsdag tussen twaalf en twee uur. Zorg dat er iemand thuis is.",
    question: {
      prompt: "Wat wordt er van u gevraagd op dinsdag?",
      options: ["Dat er iemand thuis is", "Dat u het modem zelf koopt", "Dat u naar de winkel gaat"],
      correctIndex: 0,
      explanationRu: "'Zorg dat er iemand thuis is' — просят обеспечить присутствие кого-то дома для замены модема.",
      explanationEn: "'Zorg dat er iemand thuis is' is asked to ensure the presence of someone at home to replace the modem.",
    },
  },
  {
    id: "listen-gen3-78",
    level: "B1",
    topic: "geld",
    transcript:
      "Uw pinpas verloopt aan het einde van deze maand. De nieuwe pas wordt automatisch naar uw huisadres gestuurd.",
    question: {
      prompt: "Waarnaartoe wordt de nieuwe pas gestuurd?",
      options: ["Naar uw huisadres", "Naar de bank zelf", "U moet hem ophalen"],
      correctIndex: 0,
      explanationRu: "'wordt automatisch naar uw huisadres gestuurd' — новая карта автоматически придёт на домашний адрес.",
      explanationEn: "'wordt automatisch naar uw huisadres gestuurd' - a new card will automatically arrive at your home address.",
    },
  },
  {
    id: "listen-gen3-79",
    level: "A2",
    topic: "onderwijs",
    transcript:
      "De schoolbibliotheek is elke woensdagmiddag open voor leerlingen. U kunt daar gratis boeken lenen.",
    question: {
      prompt: "Wat kunnen leerlingen op woensdagmiddag doen?",
      options: ["Gratis boeken lenen", "Examens maken", "Sporten"],
      correctIndex: 0,
      explanationRu: "'U kunt daar gratis boeken lenen' — в школьной библиотеке можно бесплатно брать книги.",
      explanationEn: "'U kunt daar gratis boeken lenen' - books are available for free in the school library.",
    },
  },
  {
    id: "listen-gen3-80",
    level: "B1",
    topic: "buurt",
    transcript:
      "Vanwege een lekkage in de hoofdleiding is het water in enkele straten vanmiddag tijdelijk afgesloten.",
    question: {
      prompt: "Waarom is het water tijdelijk afgesloten?",
      options: ["Vanwege een lekkage in de hoofdleiding", "Vanwege onderhoud aan de weg", "Vanwege vorst"],
      correctIndex: 0,
      explanationRu: "'Vanwege een lekkage in de hoofdleiding' — воду отключили из-за протечки в главном трубопроводе.",
      explanationEn: "'Vanwege een lekkage in de hoofdleiding' - water cut off due to leakage in the main pipeline",
    },
  },
  {
    id: "listen-gen3-81",
    level: "A2",
    topic: "gemeente",
    transcript:
      "Voor het aanvragen van een uittreksel uit de basisregistratie kunt u terecht bij de balie of het online doen.",
    question: {
      prompt: "Hoe kunt u een uittreksel aanvragen?",
      options: ["Bij de balie of online", "Alleen telefonisch", "Alleen per post"],
      correctIndex: 0,
      explanationRu: "'bij de balie of het online doen' — выписку можно заказать в окошке или онлайн.",
      explanationEn: "'bij de balie of het online doen' - an extract can be ordered in the window or online.",
    },
  },
  {
    id: "listen-gen3-82",
    level: "B1",
    topic: "werk",
    transcript:
      "Uw proeftijd van twee maanden loopt volgende week af. Uw leidinggevende plant een gesprek om de samenwerking te bespreken.",
    question: {
      prompt: "Wanneer loopt de proeftijd af?",
      options: ["Volgende week", "Over een jaar", "Morgen"],
      correctIndex: 0,
      explanationRu: "'Uw proeftijd van twee maanden loopt volgende week af' — испытательный срок заканчивается на следующей неделе.",
      explanationEn: "'Uw proeftijd van twee maanden loopt volgende week af' - probation ends next week.",
    },
  },
  {
    id: "listen-gen3-83",
    level: "A2",
    topic: "gezondheid",
    transcript:
      "Voor het bloedonderzoek hoeft u niet nuchter te zijn. U kunt gewoon ontbijten voordat u naar het laboratorium gaat.",
    question: {
      prompt: "Wat moet u weten over het bloedonderzoek?",
      options: ["U hoeft niet nuchter te zijn", "U mag niet eten", "U moet water drinken"],
      correctIndex: 0,
      explanationRu: "'hoeft u niet nuchter te zijn' — перед анализом крови можно завтракать, голодание не требуется.",
      explanationEn: "'hoeft u niet nuchter te zijn' - breakfast is allowed before the blood test, no fasting is required.",
    },
  },
  {
    id: "listen-gen3-84",
    level: "B1",
    topic: "vervoer",
    transcript:
      "Door een technisch mankement rijdt de metro vanavond niet verder dan het centraal station. Er zijn pendelbussen ingezet.",
    question: {
      prompt: "Wat is er ingezet vanwege het mankement?",
      options: ["Pendelbussen", "Extra treinen", "Taxi's voor iedereen"],
      correctIndex: 0,
      explanationRu: "'Er zijn pendelbussen ingezet' — вместо метро запустили автобусы-шаттлы.",
      explanationEn: "'Er zijn pendelbussen ingezet' - shuttle buses were launched instead of the metro.",
    },
  },
  {
    id: "listen-gen3-85",
    level: "A2",
    topic: "kinderopvang",
    transcript:
      "Op de eerste dag bij de kinderopvang mag u uw kind een half uur langer brengen, zodat het rustig kan wennen.",
    question: {
      prompt: "Waarom mag u het kind een half uur langer brengen?",
      options: ["Zodat het rustig kan wennen", "Omdat de opvang later opengaat", "Omdat er te veel kinderen zijn"],
      correctIndex: 0,
      explanationRu: "'zodat het rustig kan wennen' — дополнительное время дают, чтобы ребёнок спокойно привык к садику.",
      explanationEn: "'zodat het rustig kan wennen' means that the child is given time to settle into childcare gradually.",
    },
  },
  {
    id: "listen-gen3-86",
    level: "B1",
    topic: "belasting",
    transcript:
      "Heeft u bezwaar tegen de WOZ-waarde van uw woning? U kunt binnen zes weken na de brief bezwaar indienen bij de gemeente.",
    question: {
      prompt: "Binnen hoeveel weken kunt u bezwaar indienen?",
      options: ["Zes weken", "Twee weken", "Twaalf weken"],
      correctIndex: 0,
      explanationRu: "'binnen zes weken na de brief bezwaar indienen' — возразить против кадастровой оценки можно в течение шести недель после письма.",
      explanationEn: "'binnen zes weken na de brief bezwaar indienen' - you can object to the cadastral valuation within six weeks of the letter.",
    },
  },
];
