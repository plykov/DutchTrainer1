import { ErrorTaxonomyEntry, SIBLING_GROUPS } from "./types";

// §5 — stable error codes, the spine of adaptive routing.
export const ERROR_TAXONOMY: ErrorTaxonomyEntry[] = [
  {
    code: "ERR_V2_POS",
    category: "syntax",
    label: "V2 word order",
    example: { wrong: "Morgen ik ga naar school.", correct: "Morgen ga ik naar school." },
    l1Note:
      "Русский порядок слов определяется информационной структурой, а не грамматическим правилом V2 — в нидерландском спрягаемый глагол всегда занимает вторую позицию.",
    siblingGroup: SIBLING_GROUPS.WORD_ORDER,
  },
  {
    code: "ERR_SUB_END",
    category: "syntax",
    label: "Subordinate clause verb-final",
    example: { wrong: "...omdat ik ben ziek.", correct: "...omdat ik ziek ben." },
    l1Note: "Прямого аналога в русском нет — придаточное с omdat требует глагол в конце.",
    siblingGroup: SIBLING_GROUPS.WORD_ORDER,
  },
  {
    code: "ERR_CLUSTER",
    category: "syntax",
    label: "Verb cluster order",
    example: { wrong: "...had lezen moeten.", correct: "...had moeten lezen." },
    l1Note: "",
    siblingGroup: SIBLING_GROUPS.WORD_ORDER,
  },
  {
    code: "ERR_SEP_SPLIT",
    category: "syntax",
    label: "Separable verb not split",
    example: { wrong: "Ik opbel mijn moeder.", correct: "Ik bel mijn moeder op." },
    l1Note: "",
  },
  {
    code: "ERR_SEP_PART",
    category: "syntax",
    label: "Separable verb participle malformed",
    example: { wrong: "geopbeld", correct: "opgebeld" },
    l1Note: "",
  },
  {
    code: "ERR_NEG_POS",
    category: "syntax",
    label: "Misplaced niet/geen",
    example: { wrong: "Ik niet begrijp het.", correct: "Ik begrijp het niet." },
    l1Note: "",
  },
  {
    code: "ERR_ART_DEHET",
    category: "morphology",
    label: "de/het selection",
    example: { wrong: "de huis", correct: "het huis" },
    l1Note:
      "В русском артиклей нет вообще — двойная нагрузка: и сама категория артикля, и присвоение рода конкретному слову.",
  },
  {
    code: "ERR_ADJ_INFL",
    category: "morphology",
    label: "Adjective inflection",
    example: { wrong: "een grote huis", correct: "een groot huis" },
    l1Note: "Привязано к артиклю — учите как единый блок вместе с de/het.",
  },
  {
    code: "ERR_DIM_ART",
    category: "morphology",
    label: "Diminutive article",
    example: { wrong: "de huisje", correct: "het huisje" },
    l1Note: "Все уменьшительные формы (-je) берут het — это одно из немногих надёжных правил.",
  },
  {
    code: "ERR_PLUR",
    category: "morphology",
    label: "Plural -en/-s selection",
    example: { wrong: "huisen", correct: "huizen" },
    l1Note: "",
  },
  {
    code: "ERR_AUX_SEL",
    category: "tense_aspect",
    label: "hebben vs zijn",
    example: { wrong: "Ik heb gegaan.", correct: "Ik ben gegaan." },
    l1Note: "",
    siblingGroup: SIBLING_GROUPS.AUX,
  },
  {
    code: "ERR_ASPECT_MAP",
    category: "tense_aspect",
    label: "Imperfectum/perfectum via Russian aspect mapping",
    example: { wrong: "Ik las het boek (для завершённого действия)", correct: "Ik heb het boek gelezen." },
    l1Note:
      "Важная ловушка: в русском вид (совершенный/несовершенный) выражается морфологически и не соответствует напрямую нидерландскому imperfectum/perfectum. Это НЕ русский вид — выбирайте время по функции (завершённое событие vs фон/процесс), а не по переводу глагола.",
    siblingGroup: SIBLING_GROUPS.TENSE,
  },
  {
    code: "ERR_ER_EXIST",
    category: "er_functions",
    label: "er — existential",
    example: { wrong: "In de tuin is een boom.", correct: "Er staat een boom in de tuin." },
    l1Note: "Прямого эквивалента в русском нет ни для одной из функций er.",
    siblingGroup: SIBLING_GROUPS.ER_FUNCTIONS,
  },
  {
    code: "ERR_ER_QUANT",
    category: "er_functions",
    label: "er — quantitative",
    example: { wrong: "Ik heb twee.", correct: "Ik heb er twee." },
    l1Note: "Прямого эквивалента в русском нет ни для одной из функций er.",
    siblingGroup: SIBLING_GROUPS.ER_FUNCTIONS,
  },
  {
    code: "ERR_ER_PREP",
    category: "er_functions",
    label: "er — prepositional (er + prep)",
    example: { wrong: "Ik denk aan het.", correct: "Ik denk eraan." },
    l1Note: "Прямого эквивалента в русском нет ни для одной из функций er.",
    siblingGroup: SIBLING_GROUPS.ER_FUNCTIONS,
  },
  {
    code: "ERR_ER_LOC",
    category: "er_functions",
    label: "er — locative",
    example: { wrong: "Ik woon in Amsterdam sinds 2020, ik hou van het.", correct: "Ik woon er sinds 2020." },
    l1Note: "Прямого эквивалента в русском нет ни для одной из функций er.",
    siblingGroup: SIBLING_GROUPS.ER_FUNCTIONS,
  },
  {
    code: "ERR_PARTICLE",
    category: "particle",
    label: "Modal particles (toch, maar, even, eens, wel, nou)",
    example: { wrong: "Kom binnen.", correct: "Kom maar binnen." },
    l1Note:
      "Такой категории почти нет в русском языке. Именно эти частицы делают речь естественной — это прямо влияет на оценку раздела Spreken. Учите в диалоге, никогда не переводите дословно.",
  },
  {
    code: "ERR_PREP_FIXED",
    category: "lexis_phonology",
    label: "Fixed preposition (vast voorzetsel)",
    example: { wrong: "wachten voor", correct: "wachten op" },
    l1Note: "Учите как цельный блок (chunk), не выводите по смыслу.",
  },
  {
    code: "ERR_COLLOC",
    category: "lexis_phonology",
    label: "Collocation violation",
    example: { wrong: "een afspraak doen", correct: "een afspraak maken" },
    l1Note: "",
  },
  {
    code: "ERR_PHON_VLENGTH",
    category: "lexis_phonology",
    label: "Vowel length",
    example: { wrong: "man/maan confused" },
    l1Note: "Долгота гласных не является фонематической в русском — тренируйте пары man/maan, bom/boom.",
  },
  {
    code: "ERR_PHON_FRONTROUND",
    category: "lexis_phonology",
    label: "Front-rounded vowels",
    example: { wrong: "huren/horen confused" },
    l1Note: "В русском нет огублённых передних гласных (u, eu) — уделите этому отдельное внимание.",
  },
  {
    code: "ERR_PHON_DEVOICE",
    category: "lexis_phonology",
    label: "Final devoicing",
    example: { wrong: "spelling honten for hond /hɔnt/" },
    l1Note: "В русском тоже есть оглушение конечных согласных, но нидерландская орфография его не отражает — не пишите так, как слышите.",
  },
  {
    code: "ERR_PHON_XG",
    category: "lexis_phonology",
    label: "/x/ and /ɣ/",
    example: { wrong: "g/ch confused" },
    l1Note: "Приоритет для русскоговорящих: различайте глухой /x/ и звонкий /ɣ/ — оба отличаются от русского [x].",
  },
];

export function getErrorEntry(code: string): ErrorTaxonomyEntry | undefined {
  return ERROR_TAXONOMY.find((e) => e.code === code);
}
