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
  {
    id: "lexam-16",
    transcript:
      "Let op: de bus naar het centrum rijdt vandaag niet van halte Marktplein, maar van halte Stationsplein, wegens wegwerkzaamheden.",
    question: {
      prompt: "Van welke halte vertrekt de bus vandaag?",
      options: ["Marktplein", "Stationsplein", "Er rijdt geen bus"],
      correctIndex: 1,
      explanationRu: "'rijdt vandaag niet van halte Marktplein, maar van halte Stationsplein' — сегодня отправление с другой остановки.",
    },
  },
  {
    id: "lexam-17",
    transcript:
      "Bij brand of een noodgeval belt u altijd 112. Voor een kapotte lantaarnpaal of een gat in de weg belt u het gewone nummer van de gemeente.",
    question: {
      prompt: "Welk nummer belt u voor een kapotte lantaarnpaal?",
      options: ["112", "Het gewone nummer van de gemeente", "De politie"],
      correctIndex: 1,
      explanationRu: "'Voor een kapotte lantaarnpaal ... belt u het gewone nummer van de gemeente' — для мелких проблем обычный номер мэрии.",
    },
  },
  {
    id: "lexam-18",
    transcript:
      "De griepprik wordt dit jaar gegeven vanaf half oktober. Mensen met een verhoogd risico ontvangen automatisch een uitnodiging per post.",
    question: {
      prompt: "Hoe ontvangen mensen een uitnodiging voor de griepprik?",
      options: ["Automatisch per post", "Ze moeten er zelf om vragen", "Via een app"],
      correctIndex: 0,
      explanationRu: "'ontvangen automatisch een uitnodiging per post' — приглашение приходит автоматически по почте.",
    },
  },
  {
    id: "lexam-19",
    transcript:
      "Vanaf volgende maand kunt u uw energierekening ook via de app bekijken. Papieren rekeningen blijven voorlopig ook beschikbaar.",
    question: {
      prompt: "Blijven papieren rekeningen beschikbaar?",
      options: ["Ja, voorlopig wel", "Nee, alleen de app", "Alleen voor nieuwe klanten"],
      correctIndex: 0,
      explanationRu: "'Papieren rekeningen blijven voorlopig ook beschikbaar' — бумажные счета пока остаются доступны.",
    },
  },
  {
    id: "lexam-20",
    transcript:
      "Om een rijbewijs te vernieuwen na uw vijfenzeventigste verjaardag heeft u een medische keuring nodig. Jongere aanvragers hebben dit niet nodig.",
    question: {
      prompt: "Wie heeft een medische keuring nodig?",
      options: ["Mensen ouder dan 75 jaar", "Iedereen", "Alleen nieuwe bestuurders"],
      correctIndex: 0,
      explanationRu: "'na uw vijfenzeventigste verjaardag heeft u een medische keuring nodig' — только для людей старше 75 лет.",
    },
  },
  {
    id: "lexam-21",
    transcript:
      "Wilt u grofvuil laten ophalen? Meld dit minstens twee werkdagen van tevoren online aan bij de gemeente. Zonder aanmelding wordt het niet meegenomen.",
    question: {
      prompt: "Wat moet u doen voordat grofvuil wordt opgehaald?",
      options: ["Online aanmelden, minstens twee werkdagen van tevoren", "Niets", "Contant betalen bij ophalen"],
      correctIndex: 0,
      explanationRu: "'Meld dit minstens twee werkdagen van tevoren online aan' — крупный мусор нужно заранее заказать онлайн.",
    },
  },
  {
    id: "lexam-22",
    transcript:
      "De cursus van volgende week gaat helaas niet door wegens ziekte van de docent. U ontvangt binnenkort een nieuwe datum.",
    question: {
      prompt: "Waarom gaat de cursus niet door?",
      options: ["Wegens ziekte van de docent", "Te weinig cursisten", "Het gebouw is dicht"],
      correctIndex: 0,
      explanationRu: "'wegens ziekte van de docent' — курс отменён из-за болезни преподавателя.",
    },
  },
  {
    id: "lexam-23",
    transcript:
      "Bij een betalingsachterstand ontvangt u eerst een vriendelijke herinnering. Reageert u niet, dan volgt een aanmaning met extra kosten.",
    question: {
      prompt: "Wat ontvangt u als eerste bij een betalingsachterstand?",
      options: ["Een vriendelijke herinnering", "Direct een aanmaning met kosten", "Een bezoek van de deurwaarder"],
      correctIndex: 0,
      explanationRu: "'ontvangt u eerst een vriendelijke herinnering' — сначала присылают мягкое напоминание.",
    },
  },
  {
    id: "lexam-24",
    transcript:
      "Nieuwe medewerkers krijgen de eerste maand een mentor. Na de proeftijd van twee maanden stopt deze begeleiding automatisch.",
    question: {
      prompt: "Wanneer stopt de begeleiding door de mentor?",
      options: ["Na de proeftijd", "Nooit", "Na één week"],
      correctIndex: 0,
      explanationRu: "'Na de proeftijd ... stopt deze begeleiding automatisch' — наставничество заканчивается вместе с испытательным сроком.",
    },
  },
  {
    id: "lexam-25",
    transcript:
      "Reist u met de ov-chipkaart? Vergeet niet uit te checken, anders wordt automatisch het hoogste bedrag van de kaart afgeschreven.",
    question: {
      prompt: "Wat gebeurt er als u vergeet uit te checken?",
      options: ["Het hoogste bedrag wordt afgeschreven", "Er wordt niets afgeschreven", "U krijgt een boete per post"],
      correctIndex: 0,
      explanationRu: "'wordt automatisch het hoogste bedrag ... afgeschreven' — при неотметке спишут максимальную сумму.",
    },
  },
  {
    id: "lexam-26",
    transcript:
      "Voor kleine reparaties, zoals een lekkende kraan, is de huurder verantwoordelijk. Grote reparaties zijn voor rekening van de verhuurder.",
    question: {
      prompt: "Wie is verantwoordelijk voor een lekkende kraan?",
      options: ["De huurder", "De verhuurder", "De gemeente"],
      correctIndex: 0,
      explanationRu: "'is de huurder verantwoordelijk' — за мелкий ремонт отвечает арендатор.",
    },
  },
  {
    id: "lexam-27",
    transcript:
      "Statiegeld op flessen kunt u terugkrijgen bij elke supermarkt met een inleverautomaat, niet alleen waar u de fles kocht.",
    question: {
      prompt: "Waar kunt u statiegeld terugkrijgen?",
      options: ["Bij elke supermarkt met een automaat", "Alleen waar u kocht", "Nergens"],
      correctIndex: 0,
      explanationRu: "'bij elke supermarkt met een inleverautomaat' — залог можно вернуть в любом магазине с автоматом.",
    },
  },
  {
    id: "lexam-28",
    transcript:
      "Ouders melden hun kind minstens tien weken voor de vierde verjaardag aan bij de basisschool van hun keuze.",
    question: {
      prompt: "Wanneer melden ouders hun kind aan?",
      options: ["Minstens tien weken voor de vierde verjaardag", "Op de vierde verjaardag zelf", "Er is geen deadline"],
      correctIndex: 0,
      explanationRu: "'minstens tien weken voor de vierde verjaardag' — запись минимум за десять недель.",
    },
  },
  {
    id: "lexam-29",
    transcript:
      "Bij ziekte meldt u zich vóór negen uur 's ochtends telefonisch ziek bij uw leidinggevende, niet per e-mail.",
    question: {
      prompt: "Hoe meldt u zich ziek?",
      options: ["Telefonisch, vóór negen uur", "Per e-mail", "Via een collega"],
      correctIndex: 0,
      explanationRu: "'telefonisch ziek ... niet per e-mail' — больничный только по телефону.",
    },
  },
  {
    id: "lexam-30",
    transcript:
      "Bezwaar tegen een besluit van de gemeente dient u binnen zes weken na de datum van het besluit schriftelijk in.",
    question: {
      prompt: "Binnen welke termijn dient u bezwaar in?",
      options: ["Zes weken", "Zes maanden", "Er is geen termijn"],
      correctIndex: 0,
      explanationRu: "'binnen zes weken na de datum van het besluit' — возражение в течение шести недель.",
    },
  },
  {
    id: "lexam-31",
    transcript:
      "Wie een laag inkomen heeft, kan bijzondere bijstand aanvragen voor onverwachte kosten, zoals een kapotte wasmachine.",
    question: {
      prompt: "Waarvoor is bijzondere bijstand bedoeld?",
      options: ["Onverwachte, noodzakelijke kosten", "Vakantiegeld", "Dagelijkse boodschappen"],
      correctIndex: 0,
      explanationRu: "'voor onverwachte kosten, zoals een kapotte wasmachine' — целевая помощь на непредвиденные расходы.",
    },
  },
  {
    id: "lexam-32",
    transcript:
      "Studenten die een cursus annuleren, krijgen hun geld terug als dit minstens twee weken voor de startdatum wordt doorgegeven.",
    question: {
      prompt: "Wanneer krijgt een student geld terug bij annulering?",
      options: ["Bij annulering minstens twee weken van tevoren", "Altijd", "Nooit"],
      correctIndex: 0,
      explanationRu: "'als dit minstens twee weken voor de startdatum wordt doorgegeven' — возврат при отмене минимум за две недели.",
    },
  },
  {
    id: "lexam-33",
    transcript:
      "Voor niet-spoedeisende zorg 's avonds en in het weekend belt u de huisartsenpost, niet de spoedeisende hulp van het ziekenhuis.",
    question: {
      prompt: "Wie belt u voor niet-spoedeisende zorg in het weekend?",
      options: ["De huisartsenpost", "De spoedeisende hulp", "De politie"],
      correctIndex: 0,
      explanationRu: "'belt u de huisartsenpost, niet de spoedeisende hulp' — для несрочной помощи звонить в дежурную практику.",
    },
  },
  {
    id: "lexam-34",
    transcript:
      "De zwemles voor kinderen begint deze week een half uur later dan normaal, om vijf uur in plaats van half vijf.",
    question: {
      prompt: "Hoe laat begint de zwemles deze week?",
      options: ["Om vijf uur", "Om half vijf", "Om zes uur"],
      correctIndex: 0,
      explanationRu: "'een half uur later ... om vijf uur in plaats van half vijf' — урок плавания начинается позже.",
    },
  },
  {
    id: "lexam-35",
    transcript:
      "Als uw pakket beschadigd aankomt, maakt u een foto en meldt u dit binnen 48 uur bij de klantenservice.",
    question: {
      prompt: "Wat moet u doen als een pakket beschadigd is?",
      options: ["Een foto maken en binnen 48 uur melden", "Het pakket weggooien", "Niets doen"],
      correctIndex: 0,
      explanationRu: "'maakt u een foto en meldt u dit binnen 48 uur' — сфотографировать и сообщить в течение 48 часов.",
    },
  },
  {
    id: "lexam-36",
    transcript:
      "Vanaf januari wordt het afvalophaalschema aangepast: gft wordt voortaan om de week opgehaald in plaats van elke week.",
    question: {
      prompt: "Wat verandert er aan het gft-schema?",
      options: ["Het wordt om de week opgehaald", "Het wordt vaker opgehaald", "Het stopt helemaal"],
      correctIndex: 0,
      explanationRu: "'gft wordt voortaan om de week opgehaald in plaats van elke week' — органические отходы будут забирать реже.",
    },
  },
  {
    id: "lexam-37",
    transcript:
      "Voor de inburgeringscursus kunt u een lening aanvragen bij DUO, die u later in termijnen terugbetaalt.",
    question: {
      prompt: "Bij wie kunt u een lening aanvragen voor de cursus?",
      options: ["DUO", "De gemeente", "De werkgever"],
      correctIndex: 0,
      explanationRu: "'een lening aanvragen bij DUO' — заём на курс интеграции оформляется через DUO.",
    },
  },
  {
    id: "lexam-38",
    transcript:
      "Het zwembad is deze week gesloten voor onderhoud. Vanaf maandag zijn de normale openingstijden weer van kracht.",
    question: {
      prompt: "Wanneer is het zwembad weer normaal open?",
      options: ["Vanaf maandag", "Nooit meer", "Over een maand"],
      correctIndex: 0,
      explanationRu: "'Vanaf maandag zijn de normale openingstijden weer van kracht' — с понедельника снова обычный график.",
    },
  },
  {
    id: "lexam-39",
    transcript:
      "Bij verlies van uw ov-chipkaart blokkeert u deze direct via de app, zodat niemand anders er nog gebruik van kan maken.",
    question: {
      prompt: "Wat doet u bij verlies van uw ov-chipkaart?",
      options: ["Deze direct blokkeren via de app", "Niets, ze wordt automatisch geblokkeerd", "Een nieuwe kopen zonder de oude te blokkeren"],
      correctIndex: 0,
      explanationRu: "'blokkeert u deze direct via de app' — потерянную карту нужно сразу заблокировать через приложение.",
    },
  },
  {
    id: "lexam-40",
    transcript:
      "Voor vragen over uw belastingaangifte kunt u een telefonische afspraak maken met de Belastingdienst, liefst buiten de drukke periode in maart.",
    question: {
      prompt: "Wanneer is het rustiger om te bellen met de Belastingdienst?",
      options: ["Buiten maart", "Alleen in maart", "Er is geen verschil"],
      correctIndex: 0,
      explanationRu: "'liefst buiten de drukke periode in maart' — лучше звонить не в загруженный март.",
    },
  },
];
