import { McItem } from "../types";

// §7 — Staatsexamen NT2 P1 Lezen: 110 min / 6 texts / 36 MC items, per
// staatsexamensnt2.nl (checked August 2026: "Bij de 6 teksten moet u 36
// vragen beantwoorden"). Original short passages modelled on the public
// blueprint, not reproductions of secure material. This is a 56-item
// mechanism demo (single pass, countdown, no feedback until the run ends
// via ExamRunner) — larger than the real 36-question run for extra
// practice volume, with question order shuffled per run on top of each
// item's MC option order.
function lezenItem(overrides: Omit<McItem, keyof ReturnType<typeof base>> & Partial<ReturnType<typeof base>>): McItem {
  return { ...base(), ...overrides } as McItem;
}

function base() {
  return {
    examTrack: "staatsexamen_p1" as const,
    cefrLevel: "B1" as const,
    skill: "reading" as const,
    taskType: "mc" as const,
    register: "neutral" as const,
    regionVariant: "netherlandic" as const,
    targetLemmas: [],
    errorCodes: [],
    l1ContrastFlag: false,
    singleListen: false,
    allowedTools: "dictionary" as const,
    timeLimitS: 183, // ~110 min / 36 items
    responseMinLen: null,
    difficultyTheta: 0,
  };
}

export const LEZEN_ITEMS: McItem[] = [
  lezenItem({
    id: "lezen-1",
    topic: "gemeente",
    prompt:
      "Beste bewoner,\n\nVanaf 1 september is de gemeentebalie alleen op afspraak open. U kunt online een afspraak maken via de website. Zonder afspraak kunt u niet geholpen worden.\n\nVraag: Wat moet u doen voordat u naar de gemeentebalie gaat?",
    options: ["Online een afspraak maken", "Gewoon langskomen", "Bellen naar de politie"],
    correctIndex: 0,
    explanationRu: "Текст явно говорит: с 1 сентября без предварительной онлайн-записи попасть на приём нельзя.",
    explanationEn: "The text clearly says: from September 1 without a preliminary online entry to the reception is impossible.",
  }),
  lezenItem({
    id: "lezen-2",
    topic: "gezondheid",
    prompt:
      "De huisartsenpraktijk is deze week gesloten wegens een studiedag. Voor spoedgevallen kunt u bellen naar de huisartsenpost. Voor niet-spoedeisende zaken kunt u volgende week weer terecht.\n\nVraag: Wat kunt u doen bij een spoedgeval deze week?",
    options: ["Bellen naar de huisartsenpost", "Wachten tot volgende week", "Naar de gemeente gaan"],
    correctIndex: 0,
    explanationRu: "Для срочных случаев указан отдельный номер — huisartsenpost, а не ожидание до следующей недели.",
    explanationEn: "For urgent cases, a separate number is given - huisartsenpost, rather than waiting until next week.",
  }),
  lezenItem({
    id: "lezen-3",
    topic: "werk",
    prompt:
      "Wij zoeken een collega voor de ochtenddienst, van 7 tot 12 uur. Ervaring is niet vereist, wel goede beheersing van het Nederlands. Reageren kan tot vrijdag.\n\nVraag: Is werkervaring vereist voor deze baan?",
    options: ["Nee, ervaring is niet vereist", "Ja, minimaal twee jaar ervaring", "Alleen ervaring in de zorg"],
    correctIndex: 0,
    explanationRu: "В объявлении прямо сказано: 'Ervaring is niet vereist' — опыт не требуется.",
    explanationEn: "The ad clearly states, 'Ervaring is niet vereist' - no experience required.",
  }),
  lezenItem({
    id: "lezen-4",
    topic: "wonen",
    prompt:
      "Let op: vanaf maandag wordt er in het hele gebouw aan de leidingen gewerkt. Het water kan tussen 9 en 15 uur worden afgesloten. Vul op tijd genoeg water af.\n\nVraag: Wat wordt er in het gebouw gedaan?",
    options: ["Er wordt aan de leidingen gewerkt", "Het gebouw wordt geverfd", "Er komt een nieuwe lift"],
    correctIndex: 0,
    explanationRu: "'aan de leidingen gewerkt' — идут работы по трубам/коммуникациям.",
    explanationEn: "'aan de leidingen gewerkt' - works on pipes/communications are underway.",
  }),
  lezenItem({
    id: "lezen-5",
    topic: "onderwijs",
    prompt:
      "De cursus Nederlands B1 start over twee weken. Er zijn nog vijf plaatsen vrij. Inschrijven kan via de website van de gemeente, tot en met komende vrijdag.\n\nVraag: Tot wanneer kun je je inschrijven voor de cursus?",
    options: ["Tot en met vrijdag", "Tot het einde van de maand", "Er is geen deadline"],
    correctIndex: 0,
    explanationRu: "'Inschrijven kan ... tot en met komende vrijdag' — запись открыта до пятницы включительно.",
    explanationEn: "'Inschrijven kan ... tot en met komende vrijdag' - recording open until Friday inclusive.",
  }),
  lezenItem({
    id: "lezen-6",
    topic: "geld",
    prompt:
      "Uw energierekening wordt voortaan maandelijks geïncasseerd in plaats van per kwartaal. Dit verandert niets aan het totale jaarbedrag, alleen de betaalfrequentie.\n\nVraag: Wat verandert er precies?",
    options: ["Alleen hoe vaak u betaalt", "Het totale jaarbedrag stijgt", "U hoeft niet meer te betalen"],
    correctIndex: 0,
    explanationRu: "'Dit verandert niets aan het totale jaarbedrag, alleen de betaalfrequentie' — меняется только частота платежей.",
    explanationEn: "\"Dit verandert niets aan het totale jaarbedrag, alleen de betaalfrequentie\" - only the frequency of payments changes.",
  }),
  lezenItem({
    id: "lezen-7",
    topic: "buurt",
    prompt:
      "Op zaterdag organiseert de buurtvereniging een opruimdag. Iedereen die wil helpen, verzamelt om 10 uur bij het buurthuis. Handschoenen worden uitgedeeld.\n\nVraag: Waar verzamelen de deelnemers?",
    options: ["Bij het buurthuis", "Bij de gemeente", "Bij het ziekenhuis"],
    correctIndex: 0,
    explanationRu: "'verzamelt om 10 uur bij het buurthuis' — сбор у общественного дома района.",
    explanationEn: "'verzamelt om 10 uur bij het buurthuis' - gathering at the community house of the district.",
  }),
  lezenItem({
    id: "lezen-8",
    topic: "documenten",
    prompt:
      "Om een uittreksel uit het bevolkingsregister aan te vragen, heeft u een geldig identiteitsbewijs nodig. Dit kan zowel online als aan de balie van de gemeente.\n\nVraag: Wat heeft u nodig om een uittreksel aan te vragen?",
    options: ["Een geldig identiteitsbewijs", "Een medische verklaring", "Een werkgeversverklaring"],
    correctIndex: 0,
    explanationRu: "'heeft u een geldig identiteitsbewijs nodig' — нужен действительный документ, удостоверяющий личность.",
    explanationEn: "'heeft u een geldig identiteitsbewijs nodig' - you need a valid identity document.",
  }),
  lezenItem({
    id: "lezen-9",
    topic: "gezondheid",
    prompt:
      "Het ziekenhuis vraagt patiënten om vijftien minuten voor de afspraak aanwezig te zijn, in verband met de inschrijving bij de balie.\n\nVraag: Hoeveel eerder moet je aanwezig zijn?",
    options: ["Vijftien minuten", "Een uur", "Vijf minuten"],
    correctIndex: 0,
    explanationRu: "'vijftien minuten voor de afspraak aanwezig te zijn' — прийти на пятнадцать минут раньше.",
    explanationEn: "'vijftien minuten voor de afspraak aanwezig te zijn' - arrive fifteen minutes early.",
  }),
  lezenItem({
    id: "lezen-10",
    topic: "werk",
    prompt:
      "Vanwege een reorganisatie verandert het rooster per 1 oktober. Medewerkers ontvangen hun nieuwe rooster uiterlijk twee weken van tevoren.\n\nVraag: Wanneer ontvangen medewerkers hun nieuwe rooster ten laatste?",
    options: ["Twee weken van tevoren", "Op de dag zelf", "Een maand van tevoren"],
    correctIndex: 0,
    explanationRu: "'ontvangen hun nieuwe rooster uiterlijk twee weken van tevoren' — не позднее чем за две недели.",
    explanationEn: "'ontvangen hun nieuwe rooster uiterlijk twee weken van tevoren' - no later than two weeks in advance.",
  }),
  lezenItem({
    id: "lezen-11",
    topic: "wonen",
    prompt:
      "De huurverhoging voor dit jaar bedraagt maximaal 3 procent, zoals landelijk vastgesteld. Verhuurders die meer vragen, overtreden de regels.\n\nVraag: Wat is het maximale huurverhogingspercentage dit jaar?",
    options: ["3 procent", "10 procent", "Er is geen maximum"],
    correctIndex: 0,
    explanationRu: "'maximaal 3 procent' — максимум три процента повышения аренды.",
    explanationEn: "'maximaal 3 procent' - a maximum of three percent rent increase",
  }),
  lezenItem({
    id: "lezen-12",
    topic: "onderwijs",
    prompt:
      "Kinderen tussen 5 en 16 jaar zijn in Nederland leerplichtig. Daarna geldt tot 18 jaar de kwalificatieplicht, tenzij ze al een startkwalificatie hebben.\n\nVraag: Tot welke leeftijd geldt de leerplicht?",
    options: ["16 jaar", "18 jaar", "21 jaar"],
    correctIndex: 0,
    explanationRu: "'leerplichtig' до 16 лет, затем частичная kwalificatieplicht — до 18, если нет базовой квалификации.",
    explanationEn: "'leerplichtig' up to 16 years, then partial kwalificatieplicht - up to 18 if there is no basic qualification.",
  }),
  lezenItem({
    id: "lezen-13",
    topic: "geld",
    prompt:
      "Als u recht heeft op zorgtoeslag, wordt deze automatisch maandelijks op uw rekening gestort door de Belastingdienst, mits u zich op tijd heeft aangemeld.\n\nVraag: Wie stort de zorgtoeslag?",
    options: ["De Belastingdienst", "De gemeente", "Uw werkgever"],
    correctIndex: 0,
    explanationRu: "'wordt ... gestort door de Belastingdienst' — пособие на медстраховку выплачивает налоговая служба.",
    explanationEn: "Wordt ... gestort door de Belastingdienst - Medicare benefits are paid by the IRS.",
  }),
  lezenItem({
    id: "lezen-14",
    topic: "dagelijks_leven",
    prompt:
      "De supermarkt is op nationale feestdagen gesloten, behalve op Koningsdag, wanneer de openingstijden beperkt zijn tot 10 tot 17 uur.\n\nVraag: Wat geldt er voor Koningsdag?",
    options: ["Beperkte openingstijden, van 10 tot 17 uur", "Volledig gesloten", "Normale openingstijden"],
    correctIndex: 0,
    explanationRu: "'behalve op Koningsdag, wanneer de openingstijden beperkt zijn' — в День короля магазин работает по сокращённому графику.",
    explanationEn: "'behalve op Koningsdag, wanneer de openingstijden beperkt zijn' - on King's Day, the shop operates on a reduced schedule.",
  }),
  lezenItem({
    id: "lezen-15",
    topic: "documenten",
    prompt:
      "Formulieren die u per post opstuurt naar de gemeente, moeten binnen twee weken na verzending worden bevestigd met een ontvangstbewijs. Ontvangt u niets, neem dan telefonisch contact op.\n\nVraag: Wat moet u doen als u geen ontvangstbewijs krijgt?",
    options: ["Telefonisch contact opnemen", "Niets doen", "Het formulier weggooien"],
    correctIndex: 0,
    explanationRu: "'Ontvangt u niets, neem dan telefonisch contact op' — если подтверждение не пришло, нужно позвонить.",
    explanationEn: "'Ontvangt u niets, neem dan telefonisch contact op' - if confirmation has not come, call.",
  }),
  lezenItem({
    id: "lezen-16",
    topic: "vervoer",
    prompt:
      "Vanaf 1 september geldt op deze lijn een nieuwe dienstregeling: bussen rijden 's ochtends elke tien minuten in plaats van elke twintig minuten.\n\nVraag: Wat verandert er in de dienstregeling?",
    options: ["Bussen rijden vaker 's ochtends", "Bussen rijden minder vaak", "Er rijden geen bussen meer"],
    correctIndex: 0,
    explanationRu: "'elke tien minuten in plaats van elke twintig minuten' — автобусы теперь ходят чаще.",
    explanationEn: "'elke tien minuten in plaats van elke twintig minuten' - buses now run more frequently",
  }),
  lezenItem({
    id: "lezen-17",
    topic: "veiligheid",
    prompt:
      "Bij brand belt u 112. Voor niet-spoedeisende meldingen, zoals een kapotte straatlantaarn, kunt u de gemeente bellen op het gewone nummer.\n\nVraag: Welk nummer belt u bij een kapotte straatlantaarn?",
    options: ["Het gewone nummer van de gemeente", "112", "De politie"],
    correctIndex: 0,
    explanationRu: "'Voor niet-spoedeisende meldingen ... kunt u de gemeente bellen op het gewone nummer' — для несрочных случаев обычный номер мэрии.",
    explanationEn: "'Voor niet-spoedeisende meldingen ... kunt u de gemeente bellen op het gewone nummer' - for non-urgent cases the usual number of the City Hall.",
  }),
  lezenItem({
    id: "lezen-18",
    topic: "vrije_tijd",
    prompt:
      "De bibliotheek biedt gratis toegang tot internet en computers. Een lidmaatschap is niet nodig om hiervan gebruik te maken, wel om boeken te lenen.\n\nVraag: Waarvoor heeft u geen lidmaatschap nodig?",
    options: ["Internet en computers gebruiken", "Boeken lenen", "Beide"],
    correctIndex: 0,
    explanationRu: "'Een lidmaatschap is niet nodig om hiervan gebruik te maken' — членство не нужно для интернета/компьютеров, но нужно для книг.",
    explanationEn: "Een lidmaatschap is niet nodig om hiervan gebruik te maken - membership is not required for the Internet/computers, but is required for books.",
  }),
  lezenItem({
    id: "lezen-19",
    topic: "werk",
    prompt:
      "Nieuwe medewerkers krijgen de eerste maand een mentor toegewezen die helpt bij vragen over het werk. Na de proeftijd stopt deze begeleiding automatisch.\n\nVraag: Hoe lang duurt de begeleiding door een mentor?",
    options: ["Tot het einde van de proeftijd", "Voor altijd", "Eén week"],
    correctIndex: 0,
    explanationRu: "'Na de proeftijd stopt deze begeleiding automatisch' — наставничество заканчивается вместе с испытательным сроком.",
    explanationEn: "'Na de proeftijd stopt deze begeleiding automatisch' - mentorship ends with probation.",
  }),
  lezenItem({
    id: "lezen-20",
    topic: "gezondheid",
    prompt:
      "Griepprikken worden dit jaar vanaf half oktober gegeven bij de huisartsenpraktijk. Patiënten met een verhoogd risico krijgen automatisch een uitnodiging.\n\nVraag: Wie krijgt automatisch een uitnodiging voor de griepprik?",
    options: ["Patiënten met een verhoogd risico", "Alle patiënten", "Alleen kinderen"],
    correctIndex: 0,
    explanationRu: "'Patiënten met een verhoogd risico krijgen automatisch een uitnodiging' — приглашение автоматически только для группы риска.",
    explanationEn: "'Patiënten met een verhoogd risico krijgen automatisch een uitnodiging' - invitation automatically only for the risk group.",
  }),
  lezenItem({
    id: "lezen-21",
    topic: "wonen",
    prompt:
      "Bewoners die willen verhuizen, moeten dit minstens één maand van tevoren schriftelijk melden bij de woningcorporatie.\n\nVraag: Hoe moet een verhuizing worden gemeld?",
    options: ["Schriftelijk, minstens een maand van tevoren", "Telefonisch, op de dag zelf", "Dat hoeft niet gemeld te worden"],
    correctIndex: 0,
    explanationRu: "'schriftelijk melden ... minstens één maand van tevoren' — уведомление в письменном виде минимум за месяц.",
    explanationEn: "'schriftelijk melden ... minstens één maand van tevoren' - notice in writing at least one month in advance.",
  }),
  lezenItem({
    id: "lezen-22",
    topic: "documenten",
    prompt:
      "Een verlopen identiteitsbewijs kan nog tot vijf jaar na de vervaldatum gebruikt worden als bewijs van identiteit bij een aanvraag voor een nieuw document, maar niet om te reizen.\n\nVraag: Waarvoor kan een verlopen identiteitsbewijs nog gebruikt worden?",
    options: ["Als bewijs van identiteit bij een aanvraag", "Om te reizen", "Nergens meer voor"],
    correctIndex: 0,
    explanationRu: "'nog ... gebruikt worden als bewijs van identiteit bij een aanvraag ... maar niet om te reizen' — можно для подтверждения личности, но не для поездок.",
    explanationEn: "'nog ... gebruikt worden als bewijs van identiteit bij een aanvraag ... maar niet om te reizen' - may be for identification, but not for travel.",
  }),
  lezenItem({
    id: "lezen-23",
    topic: "onderwijs",
    prompt:
      "Studenten die een cursus willen annuleren, krijgen hun geld terug als de annulering minstens twee weken voor de startdatum wordt doorgegeven.\n\nVraag: Wanneer krijgt een student zijn geld terug?",
    options: ["Bij annulering minstens twee weken van tevoren", "Altijd, ongeacht de datum", "Nooit"],
    correctIndex: 0,
    explanationRu: "'als de annulering minstens twee weken voor de startdatum wordt doorgegeven' — возврат денег только при отмене минимум за две недели.",
    explanationEn: "'als de annulering minstens twee weken voor de startdatum wordt doorgegeven' is a refund only if cancelled at least two weeks in advance.",
  }),
  lezenItem({
    id: "lezen-24",
    topic: "geld",
    prompt:
      "Bij een betalingsachterstand stuurt de instantie eerst een herinnering, daarna een aanmaning met extra kosten, en pas daarna een incassobureau.\n\nVraag: Wat gebeurt er eerst bij een betalingsachterstand?",
    options: ["U krijgt een herinnering", "Een incassobureau neemt contact op", "U krijgt direct een boete"],
    correctIndex: 0,
    explanationRu: "'stuurt de instantie eerst een herinnering' — сначала присылают напоминание, потом уже требование с расходами.",
    explanationEn: "\"stuurt de instantie eerst een herinnering\" - first send a reminder, then a demand with expenses.",
  }),
  lezenItem({
    id: "lezen-25",
    topic: "buurt",
    prompt:
      "De gemeente plaatst nieuwe afvalcontainers in de straat. Bewoners kunnen hun oude sleutel blijven gebruiken; er is geen nieuwe pas nodig.\n\nVraag: Hebben bewoners een nieuwe pas nodig voor de nieuwe containers?",
    options: ["Nee, de oude sleutel blijft werken", "Ja, iedereen krijgt een nieuwe pas", "Ja, maar alleen kinderen"],
    correctIndex: 0,
    explanationRu: "'er is geen nieuwe pas nodig' — старый ключ продолжает работать.",
    explanationEn: "'er is geen nieuwe pas nodig' - the old key keeps working.",
  }),
  lezenItem({
    id: "lezen-26",
    topic: "gezondheid",
    prompt:
      "Bij lichte klachten kunt u eerst de zelfzorgwijzer online raadplegen voordat u een afspraak maakt bij de huisarts. Dit bespaart vaak een bezoek.\n\nVraag: Wat kunt u doen voordat u een afspraak maakt?",
    options: ["De zelfzorgwijzer online raadplegen", "Direct naar het ziekenhuis gaan", "Niets, u moet altijd bellen"],
    correctIndex: 0,
    explanationRu: "'eerst de zelfzorgwijzer online raadplegen' — сначала можно посмотреть онлайн-справочник по самопомощи.",
    explanationEn: "'eerst de zelfzorgwijzer online raadplegen' - first look at the online self-help guide.",
  }),
  lezenItem({
    id: "lezen-27",
    topic: "werk",
    prompt:
      "Overuren worden alleen uitbetaald als ze vooraf zijn goedgekeurd door de leidinggevende. Niet-goedgekeurde overuren worden niet vergoed.\n\nVraag: Wanneer worden overuren uitbetaald?",
    options: ["Alleen als ze vooraf zijn goedgekeurd", "Altijd automatisch", "Nooit"],
    correctIndex: 0,
    explanationRu: "'alleen ... als ze vooraf zijn goedgekeurd door de leidinggevende' — переработки оплачиваются только с предварительного одобрения.",
    explanationEn: "'alleen ... als ze vooraf zijn goedgekeurd door de leidinggevende' - recycling is paid only with prior approval.",
  }),
  lezenItem({
    id: "lezen-28",
    topic: "wonen",
    prompt:
      "Kleine reparaties, zoals een lekkende kraan, zijn voor rekening van de huurder. Grote reparaties, zoals een kapotte cv-ketel, zijn voor de verhuurder.\n\nVraag: Voor wiens rekening is een kapotte cv-ketel?",
    options: ["De verhuurder", "De huurder", "De gemeente"],
    correctIndex: 0,
    explanationRu: "'Grote reparaties ... zijn voor de verhuurder' — крупный ремонт (например, котёл) оплачивает хозяин жилья.",
    explanationEn: "'Grote reparaties ... zijn voor de verhuurder' - major repairs (for example, a boiler) are paid by the owner of the house.",
  }),
  lezenItem({
    id: "lezen-29",
    topic: "documenten",
    prompt:
      "Voor het aanvragen van een rijbewijs heeft u een geldige medische keuring nodig als u ouder bent dan 75 jaar. Jongere aanvragers hebben dit niet nodig.\n\nVraag: Wie heeft een medische keuring nodig voor een rijbewijs?",
    options: ["Aanvragers ouder dan 75 jaar", "Alle aanvragers", "Alleen aanvragers onder de 18"],
    correctIndex: 0,
    explanationRu: "'als u ouder bent dan 75 jaar' — медосмотр требуется только для заявителей старше 75 лет.",
    explanationEn: "'als u ouder bent dan 75 jaar' - medical examination is required only for applicants over 75 years of age.",
  }),
  lezenItem({
    id: "lezen-30",
    topic: "dagelijks_leven",
    prompt:
      "Statiegeld op plastic flessen kunt u terugkrijgen bij elke supermarkt met een inleverautomaat, ongeacht waar u de fles gekocht heeft.\n\nVraag: Waar kunt u statiegeld terugkrijgen?",
    options: ["Bij elke supermarkt met een inleverautomaat", "Alleen waar u de fles kocht", "Nergens"],
    correctIndex: 0,
    explanationRu: "'bij elke supermarkt met een inleverautomaat, ongeacht waar u de fles gekocht heeft' — залог можно вернуть в любом магазине с автоматом.",
    explanationEn: "'bij elke supermarkt met een inleverautomaat, ongeacht waar u de fles gekocht heeft' - deposit can be returned at any store with a vending machine.",
  }),
  lezenItem({
    id: "lezen-31",
    topic: "onderwijs",
    prompt:
      "Ouders die hun kind willen aanmelden bij een basisschool, moeten dit minstens tien weken voor de vierde verjaardag van het kind doen.\n\nVraag: Wanneer moeten ouders hun kind uiterlijk aanmelden?",
    options: ["Minstens tien weken voor de vierde verjaardag", "Op de dag van de vierde verjaardag", "Er is geen deadline"],
    correctIndex: 0,
    explanationRu: "'minstens tien weken voor de vierde verjaardag van het kind' — запись минимум за десять недель до четырёхлетия.",
    explanationEn: "'minstens tien weken voor de vierde verjaardag van het kind' is a record at least ten weeks before the four-year anniversary.",
  }),
  lezenItem({
    id: "lezen-32",
    topic: "geld",
    prompt:
      "Wie een laag inkomen heeft, kan bij de gemeente bijzondere bijstand aanvragen voor onverwachte, noodzakelijke kosten, zoals een kapotte wasmachine.\n\nVraag: Waarvoor is bijzondere bijstand bedoeld?",
    options: ["Onverwachte, noodzakelijke kosten", "Vakantiegeld", "Dagelijkse boodschappen"],
    correctIndex: 0,
    explanationRu: "'bijzondere bijstand ... voor onverwachte, noodzakelijke kosten' — целевая помощь на непредвиденные необходимые расходы.",
    explanationEn: "'bijzondere bijstand ... voor onverwachte, noodzakelijke kosten' - targeted assistance for unforeseen necessary expenses.",
  }),
  lezenItem({
    id: "lezen-33",
    topic: "gemeente",
    prompt:
      "Bezwaar tegen een besluit van de gemeente moet binnen zes weken na de datum van het besluit schriftelijk worden ingediend.\n\nVraag: Binnen welke termijn moet u bezwaar indienen?",
    options: ["Binnen zes weken", "Binnen zes maanden", "Er is geen termijn"],
    correctIndex: 0,
    explanationRu: "'binnen zes weken na de datum van het besluit' — возражение нужно подать в течение шести недель.",
    explanationEn: "'binnen zes weken na de datum van het besluit' - an objection must be filed within six weeks.",
  }),
  lezenItem({
    id: "lezen-34",
    topic: "vervoer",
    prompt:
      "Reist u met een ov-chipkaart, check dan altijd in en uit. Vergeet u uit te checken, dan wordt automatisch het hoogste bedrag afgeschreven.\n\nVraag: Wat gebeurt er als u vergeet uit te checken?",
    options: ["Het hoogste bedrag wordt afgeschreven", "U krijgt geld terug", "Er gebeurt niets"],
    correctIndex: 0,
    explanationRu: "'wordt automatisch het hoogste bedrag afgeschreven' — при неотметке спишут максимальную сумму.",
    explanationEn: "'wordt automatisch het hoogste bedrag afgeschreven' - the maximum amount will be written off if not marked.",
  }),
  lezenItem({
    id: "lezen-35",
    topic: "buurt",
    prompt:
      "Grofvuil kunt u gratis laten ophalen door de gemeente, maar u moet dit minstens twee werkdagen van tevoren online aanmelden.\n\nVraag: Wat moet u doen voordat grofvuil wordt opgehaald?",
    options: ["Het minstens twee werkdagen van tevoren aanmelden", "Niets, het wordt automatisch opgehaald", "Ervoor betalen"],
    correctIndex: 0,
    explanationRu: "'minstens twee werkdagen van tevoren online aanmelden' — крупногабаритный мусор нужно заранее заказать онлайн.",
    explanationEn: "'minstens twee werkdagen van tevoren online aanmelden' - bulky garbage must be ordered online in advance.",
  }),
  lezenItem({
    id: "lezen-36",
    topic: "werk",
    prompt:
      "Bij ziekte meldt u zich vóór negen uur 's ochtends telefonisch ziek bij uw leidinggevende, niet per e-mail of app.\n\nVraag: Hoe moet u zich ziekmelden?",
    options: ["Telefonisch, vóór negen uur", "Per e-mail, wanneer u wilt", "Via een app"],
    correctIndex: 0,
    explanationRu: "'telefonisch ziek bij uw leidinggevende, niet per e-mail of app' — больничный сообщают только по телефону, не письмом/приложением.",
    explanationEn: "'telefonisch ziek bij uw leidinggevende, niet per e-mail of app' - the sick person is reported only by phone, not by letter/application.",
  }),
  lezenItem({
    id: "lezen-37",
    topic: "verzekering",
    prompt:
      "Uw zorgverzekering dekt standaard geen fysiotherapie. Hiervoor kunt u een aanvullende verzekering afsluiten.\n\nVraag: Wat moet u doen als u fysiotherapie vergoed wilt krijgen?",
    options: ["Een aanvullende verzekering afsluiten", "Niets, dit wordt altijd vergoed", "Contant betalen bij de gemeente"],
    correctIndex: 0,
    explanationRu: "Физиотерапия не входит в базовую страховку — нужна дополнительная (aanvullende) страховка.",
    explanationEn: "Physical therapy is not included in the basic insurance - you need additional (aanvullende) insurance.",
  }),
  lezenItem({
    id: "lezen-38",
    topic: "vervoer",
    prompt:
      "Bij vertraging van meer dan dertig minuten heeft u recht op een deel van uw geld terug via de website van de vervoerder.\n\nVraag: Wanneer heeft u recht op geld terug?",
    options: ["Bij een vertraging van meer dan dertig minuten", "Bij elke vertraging", "Nooit"],
    correctIndex: 0,
    explanationRu: "Право на компенсацию возникает при задержке более 30 минут.",
    explanationEn: "The right to compensation arises if the delay exceeds 30 minutes.",
  }),
  lezenItem({
    id: "lezen-39",
    topic: "kinderopvang",
    prompt:
      "Voor kinderopvangtoeslag moeten beide ouders werken of studeren, en de opvang moet geregistreerd staan bij de gemeente.\n\nVraag: Wat is een voorwaarde voor kinderopvangtoeslag?",
    options: ["De opvang moet geregistreerd zijn bij de gemeente", "U moet minstens drie kinderen hebben", "U moet in Amsterdam wonen"],
    correctIndex: 0,
    explanationRu: "Одно из условий — детский сад должен быть зарегистрирован в муниципалитете.",
    explanationEn: "One condition is that the childcare provider must be officially registered.",
  }),
  lezenItem({
    id: "lezen-40",
    topic: "bibliotheek",
    prompt:
      "Met een bibliotheekpas kunt u gratis boeken lenen, maar bij te laat inleveren betaalt u een boete per dag.\n\nVraag: Wat gebeurt er als u een boek te laat inlevert?",
    options: ["U betaalt een boete per dag", "U krijgt een gratis waarschuwing per e-mail", "Uw pas wordt meteen geblokkeerd"],
    correctIndex: 0,
    explanationRu: "За просрочку возврата книги взимается штраф за каждый день.",
    explanationEn: "For late return of the book is charged a fine for each day.",
  }),
  lezenItem({
    id: "lezen-41",
    topic: "sport",
    prompt:
      "De sportschool biedt een gratis proefles aan, maar u moet zich van tevoren online aanmelden.\n\nVraag: Wat moet u doen voor een gratis proefles?",
    options: ["U van tevoren online aanmelden", "Gewoon binnenlopen", "Eerst een jaarabonnement kopen"],
    correctIndex: 0,
    explanationRu: "На бесплатное пробное занятие нужно записаться заранее онлайн.",
    explanationEn: "For a free trial, you need to register online in advance.",
  }),
  lezenItem({
    id: "lezen-42",
    topic: "energie",
    prompt:
      "Bij een storing in uw energievoorziening belt u het storingsnummer van de netbeheerder, niet van uw energieleverancier.\n\nVraag: Wie belt u bij een storing?",
    options: ["De netbeheerder", "De energieleverancier", "De gemeente"],
    correctIndex: 0,
    explanationRu: "При аварии звонят сетевому оператору (netbeheerder), а не поставщику энергии.",
    explanationEn: "In an accident, the network operator (netbeheerder) is called, not the energy provider.",
  }),
  lezenItem({
    id: "lezen-43",
    topic: "bank",
    prompt:
      "Voor het openen van een bankrekening heeft u een geldig identiteitsbewijs en een Nederlands adres nodig.\n\nVraag: Wat heeft u nodig om een bankrekening te openen?",
    options: ["Een identiteitsbewijs en een Nederlands adres", "Alleen een telefoonnummer", "Een werkgeversverklaring is altijd verplicht"],
    correctIndex: 0,
    explanationRu: "Для открытия банковского счёта нужны действительное удостоверение личности и нидерландский адрес.",
    explanationEn: "To open a bank account, you need a valid identity card and a Dutch address.",
  }),
  lezenItem({
    id: "lezen-44",
    topic: "post",
    prompt:
      "Een aangetekende brief die u niet thuis kunt ontvangen, kunt u binnen twee weken ophalen bij het postkantoor.\n\nVraag: Hoe lang kunt u een aangetekende brief ophalen?",
    options: ["Binnen twee weken", "Binnen één dag", "Er is geen tijdslimiet"],
    correctIndex: 0,
    explanationRu: "Заказное письмо можно забрать на почте в течение двух недель.",
    explanationEn: "Order letter can be picked up at the post office within two weeks.",
  }),
  lezenItem({
    id: "lezen-45",
    topic: "afval",
    prompt:
      "Plastic, blik en drinkpakken gaan in de PBD-bak, die eens per twee weken wordt opgehaald.\n\nVraag: Hoe vaak wordt de PBD-bak opgehaald?",
    options: ["Eens per twee weken", "Elke dag", "Eens per jaar"],
    correctIndex: 0,
    explanationRu: "Контейнер PBD (пластик/жесть/пакеты) вывозят раз в две недели.",
    explanationEn: "PBD containers (plastic/tin/packages) are exported every two weeks.",
  }),
  lezenItem({
    id: "lezen-46",
    topic: "buurthuis",
    prompt:
      "Het buurthuis organiseert elke woensdag een gratis Nederlandse gesprekstafel voor iedereen die wil oefenen.\n\nVraag: Voor wie is de gesprekstafel bedoeld?",
    options: ["Voor iedereen die Nederlands wil oefenen", "Alleen voor kinderen", "Alleen voor mensen die er wonen"],
    correctIndex: 0,
    explanationRu: "Разговорный клуб открыт для всех, кто хочет практиковать нидерландский язык.",
    explanationEn: "The Conversation Club is open to anyone who wants to practice Dutch.",
  }),
  lezenItem({
    id: "lezen-47",
    topic: "bibliotheek",
    prompt:
      "Leden van de bibliotheek mogen maximaal tien boeken tegelijk lenen, voor een periode van drie weken. Te laat inleveren kost 25 cent per boek per dag.\n\nVraag: Wat gebeurt er als u een boek te laat inlevert?",
    options: ["U betaalt 25 cent per dag per boek", "U verliest uw lidmaatschap direct", "Er gebeurt niets"],
    correctIndex: 0,
    explanationRu: "За просрочку возврата книги взимается 25 центов в день за книгу.",
    explanationEn: "For late return of the book is charged 25 cents a day per book.",
  }),
  lezenItem({
    id: "lezen-48",
    topic: "energie",
    prompt:
      "Vanwege stijgende energieprijzen kunt u bij de gemeente een eenmalige energietoeslag aanvragen als uw inkomen onder een bepaalde grens ligt.\n\nVraag: Wie kan de energietoeslag aanvragen?",
    options: ["Mensen met een inkomen onder een bepaalde grens", "Alle inwoners, ongeacht inkomen", "Alleen huiseigenaren"],
    correctIndex: 0,
    explanationRu: "Единовременную доплату на энергию можно получить, только если доход ниже определённого порога.",
    explanationEn: "A one-time energy supplement can only be obtained if the income is below a certain threshold.",
  }),
  lezenItem({
    id: "lezen-49",
    topic: "sport",
    prompt:
      "De sportschool biedt een gratis proefles aan voor nieuwe leden, maar u moet zich vooraf online aanmelden.\n\nVraag: Wat moet u doen voordat u de gratis proefles kunt volgen?",
    options: ["U vooraf online aanmelden", "Contant betalen bij de deur", "Een doktersverklaring meenemen"],
    correctIndex: 0,
    explanationRu: "Для бесплатного пробного занятия нужно заранее записаться онлайн.",
    explanationEn: "For a free trial, you need to register online in advance.",
  }),
  lezenItem({
    id: "lezen-50",
    topic: "kinderopvang",
    prompt:
      "Voor kinderopvangtoeslag moet u beiden werken of studeren, en uw kind moet ingeschreven staan bij een geregistreerde opvang.\n\nVraag: Wat is een voorwaarde voor kinderopvangtoeslag?",
    options: ["Uw kind staat ingeschreven bij een geregistreerde opvang", "U bent alleenstaand ouder", "Uw kind is ouder dan twaalf"],
    correctIndex: 0,
    explanationRu: "Одно из условий получения пособия на детский сад — регистрация ребёнка в лицензированном учреждении.",
    explanationEn: "One condition for receiving childcare benefit is that the child attends a registered childcare provider.",
  }),
  lezenItem({
    id: "lezen-51",
    topic: "documenten",
    prompt:
      "Een verlopen identiteitskaart kunt u alleen vernieuwen op afspraak bij de gemeente; meeneemen: een pasfoto en het oude document.\n\nVraag: Wat moet u meenemen om uw identiteitskaart te vernieuwen?",
    options: ["Een pasfoto en het oude document", "Alleen een pasfoto", "Niets, alles gaat digitaal"],
    correctIndex: 0,
    explanationRu: "Для продления удостоверения личности нужно принести фото на документ и старый документ.",
    explanationEn: "To renew the identity card, you need to bring a photo to the document and the old document.",
  }),
  lezenItem({
    id: "lezen-52",
    topic: "vervoer",
    prompt:
      "Met een OV-chipkaart kunt u inchecken bij alle vormen van openbaar vervoer; vergeet niet uit te checken, anders wordt het maximale bedrag afgeschreven.\n\nVraag: Wat gebeurt er als u vergeet uit te checken?",
    options: ["Het maximale bedrag wordt afgeschreven", "U krijgt een boete van 50 euro", "De kaart wordt geblokkeerd"],
    correctIndex: 0,
    explanationRu: "Если забыть выписаться, спишется максимальная сумма поездки.",
    explanationEn: "If you forget to check out, the maximum amount of the trip will be written off.",
  }),
  lezenItem({
    id: "lezen-53",
    topic: "geld",
    prompt:
      "Bij betalingsproblemen kunt u gratis en vrijwillig hulp krijgen van de schuldhulpverlening van de gemeente.\n\nVraag: Wat kost de hulp van de schuldhulpverlening?",
    options: ["Niets, het is gratis", "Een vast bedrag per maand", "Een percentage van uw schuld"],
    correctIndex: 0,
    explanationRu: "Помощь службы урегулирования долгов при муниципалитете — бесплатная.",
    explanationEn: "Debt settlement service at the municipality is free of charge.",
  }),
  lezenItem({
    id: "lezen-54",
    topic: "gezondheid",
    prompt:
      "Voor een griepprik hoeft u geen afspraak te maken; u kunt gewoon binnenlopen op de aangegeven dagen bij de huisartsenpraktijk.\n\nVraag: Moet u een afspraak maken voor de griepprik?",
    options: ["Nee, u kunt binnenlopen", "Ja, minimaal een week van tevoren", "Ja, alleen telefonisch"],
    correctIndex: 0,
    explanationRu: "Для прививки от гриппа предварительная запись не нужна — можно прийти без записи в указанные дни.",
    explanationEn: "For the flu vaccine, a pre-registration is not necessary - you can come without an appointment on the specified days.",
  }),
  lezenItem({
    id: "lezen-55",
    topic: "wonen",
    prompt:
      "Als huurder bent u verplicht om kleine reparaties, zoals een kapotte deurklink, zelf te betalen; grote reparaties zijn voor de verhuurder.\n\nVraag: Wie betaalt een kapotte deurklink?",
    options: ["De huurder zelf", "Altijd de verhuurder", "De gemeente"],
    correctIndex: 0,
    explanationRu: "Мелкий ремонт, например поломанную дверную ручку, оплачивает сам арендатор; крупный ремонт — за счёт арендодателя.",
    explanationEn: "Minor repairs, such as a broken door handle, are paid by the tenant himself; major repairs are paid by the landlord.",
  }),
  lezenItem({
    id: "lezen-56",
    topic: "werk",
    prompt:
      "Bij ontslag heeft u meestal recht op een WW-uitkering, mits u voldoende weken heeft gewerkt in de periode ervoor.\n\nVraag: Waar hangt het recht op een WW-uitkering van af?",
    options: ["Of u voldoende weken heeft gewerkt", "Of u getrouwd bent", "Of u ouder bent dan 40"],
    correctIndex: 0,
    explanationRu: "Право на пособие по безработице (WW) зависит от того, отработали ли вы достаточно недель в предшествующий период.",
    explanationEn: "Eligibility for unemployment benefit (WW) depends on whether you have worked enough weeks in the previous period.",
  }),
];
