import { PracticeItem } from "../types";

// Seed task bank. Original items modelled on public exam blueprints (§7) —
// no reproduction of secure DUO/Cito material.
function base(overrides: Partial<PracticeItem>) {
  return {
    examTrack: "a2",
    cefrLevel: "A2",
    skill: "writing",
    register: "neutral",
    regionVariant: "netherlandic",
    l1ContrastFlag: true,
    singleListen: false,
    allowedTools: "none",
    timeLimitS: null,
    responseMinLen: null,
    difficultyTheta: 0,
    ...overrides,
  } as PracticeItem;
}

export const PRACTICE_ITEMS: PracticeItem[] = [
  base({
    id: "v2-mc-1",
    taskType: "mc",
    topic: "dagelijks_leven",
    grammarTarget: "V2",
    errorCodes: ["ERR_V2_POS"],
    prompt: "Kies de juiste zin.",
    options: ["Morgen ik ga naar de tandarts.", "Morgen ga ik naar de tandarts.", "Ik morgen ga naar de tandarts."],
    correctIndex: 1,
    explanationRu:
      "В нидерландском спрягаемый глагол всегда на втором месте (правило V2), даже если предложение начинается не с подлежащего. 'Morgen' занимает первое место → глагол 'ga' сразу после него.",
  } as PracticeItem),
  base({
    id: "sub-end-mc-1",
    taskType: "mc",
    topic: "gezondheid",
    grammarTarget: "subordinate_clause",
    errorCodes: ["ERR_SUB_END"],
    prompt: "Kies de juiste zin.",
    options: [
      "Ik bel de huisarts, omdat ik ben ziek.",
      "Ik bel de huisarts, omdat ik ziek ben.",
      "Ik bel de huisarts, omdat ben ik ziek.",
    ],
    correctIndex: 1,
    explanationRu:
      "После omdat спрягаемый глагол уходит в конец придаточного предложения: 'omdat ik ziek ben', а не 'omdat ik ben ziek'.",
  } as PracticeItem),
  base({
    id: "sep-split-cloze-1",
    taskType: "cloze",
    topic: "dagelijks_leven",
    grammarTarget: "separable_verb",
    errorCodes: ["ERR_SEP_SPLIT"],
    textWithBlank: "Ik ___ mijn moeder morgen op. (opbellen)",
    answer: "bel",
    acceptableVariants: ["bel"],
    explanationRu:
      "Разделяемый глагол opbellen: приставка 'op' уходит в конец предложения, спрягается только основа: 'Ik bel ... op'.",
  } as PracticeItem),
  base({
    id: "aux-sel-mc-1",
    taskType: "mc",
    topic: "reizen",
    grammarTarget: "hebben_zijn",
    errorCodes: ["ERR_AUX_SEL"],
    prompt: "Kies de juiste zin.",
    options: ["Ik heb naar Utrecht gegaan.", "Ik ben naar Utrecht gegaan.", "Ik heb naar Utrecht ging."],
    correctIndex: 1,
    explanationRu:
      "Глаголы движения/изменения состояния (gaan, komen, worden) образуют перфект со вспомогательным zijn, а не hebben.",
  } as PracticeItem),
  base({
    id: "aspect-map-mc-1",
    taskType: "mc",
    topic: "verhaal",
    grammarTarget: "imperfectum_perfectum",
    errorCodes: ["ERR_ASPECT_MAP"],
    prompt: "Gisteren ___ ik een brief aan mijn moeder. (schrijven, voltooide actie)",
    options: ["schreef", "heb geschreven", "schrijf"],
    correctIndex: 1,
    explanationRu:
      "Внимание: это НЕ русский вид! 'heb geschreven' (perfectum) — завершённое единичное событие, о котором сообщается как о факте. 'schreef' (imperfectum) подошло бы для фона/повторяющегося действия. Не переводите по виду глагола в русском — определяйте по функции в контексте.",
  } as PracticeItem),
  base({
    id: "er-exist-mc-1",
    taskType: "mc",
    topic: "wonen",
    grammarTarget: "er_existential",
    errorCodes: ["ERR_ER_EXIST"],
    prompt: "Kies de juiste zin.",
    options: ["In de tuin is een boom.", "Er staat een boom in de tuin.", "Een boom is er in de tuin."],
    correctIndex: 1,
    explanationRu:
      "Экзистенциальное 'er' используется, когда подлежащее неопределённое и стоит не в начале: 'Er staat een boom...'. Прямого аналога в русском нет.",
  } as PracticeItem),
  base({
    id: "er-quant-mc-1",
    taskType: "mc",
    topic: "boodschappen",
    grammarTarget: "er_quantitative",
    errorCodes: ["ERR_ER_QUANT"],
    prompt: "Heb je appels? Kies de juiste zin.",
    options: ["Ja, ik heb twee.", "Ja, ik heb er twee.", "Ja, ik heb ze er twee."],
    correctIndex: 1,
    explanationRu:
      "Количественное 'er' обязательно при ответе числом/количеством без существительного: 'Ik heb er twee' (= 'у меня их два').",
  } as PracticeItem),
  base({
    id: "er-prep-mc-1",
    taskType: "mc",
    topic: "werk",
    grammarTarget: "er_prepositional",
    errorCodes: ["ERR_ER_PREP"],
    prompt: "Denk je aan de vergadering? Kies de juiste zin.",
    options: ["Ja, ik denk aan het.", "Ja, ik denk eraan.", "Ja, ik denk het aan."],
    correctIndex: 1,
    explanationRu:
      "Для неодушевлённых предметов после предлога используется 'er' + предлог слитно: 'eraan', а не 'aan het'.",
  } as PracticeItem),
  base({
    id: "er-loc-mc-1",
    taskType: "mc",
    topic: "wonen",
    grammarTarget: "er_locative",
    errorCodes: ["ERR_ER_LOC"],
    prompt: "Woon je nog in Rotterdam? Kies de juiste zin.",
    options: ["Ja, ik woon er sinds 2020.", "Ja, ik woon in het sinds 2020.", "Ja, ik woon daar het sinds 2020."],
    correctIndex: 0,
    explanationRu: "Локативное 'er' заменяет уже упомянутое место вместо повторения названия города.",
  } as PracticeItem),
  base({
    id: "particle-mc-1",
    taskType: "mc",
    topic: "gesprek",
    grammarTarget: "modal_particle",
    errorCodes: ["ERR_PARTICLE"],
    skill: "speaking",
    prompt: "Kies de meest natuurlijke zin (vriend nodigt vriend uit).",
    options: ["Kom binnen.", "Kom maar binnen.", "Kom binnen, alsjeblieft, nu."],
    correctIndex: 1,
    explanationRu:
      "Частица 'maar' смягчает приглашение и звучит естественно в разговорной речи. В русском такой категории частиц почти нет — учите в контексте диалога, не переводите дословно.",
  } as PracticeItem),
  base({
    id: "art-dehet-mc-1",
    taskType: "mc",
    topic: "wonen",
    grammarTarget: "de_het",
    errorCodes: ["ERR_ART_DEHET"],
    prompt: "Kies het juiste lidwoord.",
    options: ["de huis", "het huis"],
    correctIndex: 1,
    explanationRu:
      "'huis' — het-слово. Надёжного правила нет (кроме уменьшительных на -je, которые всегда het) — het-слова запоминайте как меньший, отдельно заучиваемый набор.",
  } as PracticeItem),
  base({
    id: "adj-infl-mc-1",
    taskType: "mc",
    topic: "wonen",
    grammarTarget: "adjective_inflection",
    errorCodes: ["ERR_ADJ_INFL"],
    prompt: "Kies de juiste zin.",
    options: ["een grote huis", "een groot huis"],
    correctIndex: 1,
    explanationRu:
      "Перед het-словом в неопределённой форме единственного числа прилагательное без окончания -e: 'een groot huis'. Учите это вместе с артиклем как единый блок.",
  } as PracticeItem),
  base({
    id: "sentence-transform-1",
    taskType: "sentence_transform",
    topic: "gezondheid",
    grammarTarget: "subordinate_clause",
    errorCodes: ["ERR_SUB_END"],
    prompt: "Combineer de zinnen met 'omdat'.",
    source: "Ik ga naar de huisarts. Ik ben ziek.",
    answer: "Ik ga naar de huisarts, omdat ik ziek ben.",
    explanationRu: "После 'omdat' спрягаемый глагол в самом конце придаточного.",
  } as PracticeItem),
  base({
    id: "short-write-1",
    taskType: "short_write",
    skill: "writing",
    examTrack: "staatsexamen_p1",
    cefrLevel: "B1",
    topic: "afspraak_verzetten",
    grammarTarget: undefined,
    errorCodes: ["ERR_SUB_END", "ERR_V2_POS", "ERR_AUX_SEL"],
    responseMinLen: 30,
    timeLimitS: 600,
    taskPrompt:
      "Schrijf een e-mail aan de gemeente. Je wilt je afspraak van volgende week verzetten naar een andere dag. Leg kort uit waarom.",
    requirements: [
      "vraagt om de afspraak te verzetten",
      "geeft een reden",
      "stelt een nieuwe datum of vraagt om opties",
      "beleefde aanhef en afsluiting",
    ],
    modelAnswer:
      "Beste meneer/mevrouw,\n\nIk heb volgende week een afspraak bij de gemeente, maar ik kan helaas niet komen omdat ik moet werken. Kunt u mij een andere datum geven, bijvoorbeeld de week erna?\n\nAlvast bedankt.\n\nMet vriendelijke groet,",
  } as PracticeItem),
];
