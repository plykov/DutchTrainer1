// Core domain types for the Dutch A2/B1 exam-prep app.
// See scope doc §2 (learner profile), §5 (error taxonomy), §10 (item metadata).

export type LegalTrack = "wi2021_b1" | "wi2013_a2" | "nt2_p1" | "self_study";
export type TargetLevel = "A2" | "B1";
export type L1 = "ru" | "other";
export type ExplanationLanguage = "ru" | "nl" | "en";
export type Skill = "reading" | "listening" | "writing" | "speaking" | "interaction";

export interface LearnerProfile {
  legalTrack: LegalTrack;
  targetLevel: TargetLevel;
  examDate: string | null; // ISO date, nullable
  l1: L1;
  explanationLanguage: ExplanationLanguage;
  scriptSupport: boolean;
  baseline: Record<Skill, number>; // Rasch theta per skill
  weeklyMinutes: number;
  onboardedAt: string;
}

// --- §5 Dutch error taxonomy -------------------------------------------------

export const ERROR_CODES = [
  // Syntax
  "ERR_V2_POS",
  "ERR_SUB_END",
  "ERR_CLUSTER",
  "ERR_SEP_SPLIT",
  "ERR_SEP_PART",
  "ERR_NEG_POS",
  // Morphology & determiners
  "ERR_ART_DEHET",
  "ERR_ADJ_INFL",
  "ERR_DIM_ART",
  "ERR_PLUR",
  // Tense, aspect, auxiliary
  "ERR_AUX_SEL",
  "ERR_ASPECT_MAP",
  // er-functions
  "ERR_ER_EXIST",
  "ERR_ER_QUANT",
  "ERR_ER_PREP",
  "ERR_ER_LOC",
  // Particles
  "ERR_PARTICLE",
  // Lexis & phonology
  "ERR_PREP_FIXED",
  "ERR_COLLOC",
  "ERR_PHON_VLENGTH",
  "ERR_PHON_FRONTROUND",
  "ERR_PHON_DEVOICE",
  "ERR_PHON_XG",
] as const;

export type ErrorCode = (typeof ERROR_CODES)[number];

export interface ErrorTaxonomyEntry {
  code: ErrorCode;
  category: "syntax" | "morphology" | "tense_aspect" | "er_functions" | "particle" | "lexis_phonology";
  label: string;
  example: { wrong: string; correct?: string };
  l1Note: string; // Russian-L1 contrastive note, may be empty
  siblingGroup?: string; // confusable interleaving group, see §3
}

// Confusable sibling groups for interleaving (§3)
export const SIBLING_GROUPS = {
  TENSE: "present_imperfectum_perfectum",
  ER_FUNCTIONS: "er_functions",
  AUX: "hebben_zijn",
  WORD_ORDER: "v2_subclause_modal_cluster",
} as const;

// --- §10 Item metadata schema -------------------------------------------------

export type ExamTrack = "duo_inburgering_b1" | "staatsexamen_p1" | "a2" | "knm";
export type TaskType =
  | "mc" // multiple choice
  | "cloze"
  | "sentence_transform"
  | "dictation"
  | "short_write"
  | "elicited_imitation"
  | "reading_extensive"
  | "listening_discrimination"
  | "speaking_prompt";

export type Region = "netherlandic"; // Flemish deferred to v2

export interface ItemMeta {
  id: string;
  examTrack: ExamTrack;
  cefrLevel: TargetLevel;
  skill: Skill;
  taskType: TaskType;
  topic: string;
  register: "formal" | "informal" | "neutral";
  regionVariant: Region;
  targetLemmas: string[];
  grammarTarget?: string;
  errorCodes: ErrorCode[];
  l1ContrastFlag: boolean;
  audioSpeed?: "normal" | "slow";
  speakerId?: string;
  singleListen: boolean;
  allowedTools: "dictionary" | "none";
  timeLimitS: number | null;
  responseMinLen: number | null;
  difficultyTheta: number;
}

export interface McItem extends ItemMeta {
  taskType: "mc";
  prompt: string;
  options: string[];
  correctIndex: number;
  explanationRu: string;
  explanationEn?: string;
}

export interface ClozeItem extends ItemMeta {
  taskType: "cloze";
  textWithBlank: string; // uses ___ for the blank
  answer: string;
  acceptableVariants?: string[];
  explanationRu: string;
}

export interface SentenceTransformItem extends ItemMeta {
  taskType: "sentence_transform";
  prompt: string;
  source: string;
  answer: string;
  explanationRu: string;
}

export interface ShortWriteItem extends ItemMeta {
  taskType: "short_write";
  taskPrompt: string;
  requirements: string[]; // task-completion checklist, used by adequacy gate
  modelAnswer: string;
}

export type PracticeItem = McItem | ClozeItem | SentenceTransformItem | ShortWriteItem;

// --- §4 Noun storage bundle ---------------------------------------------------

export interface NounBundle {
  lemma: string;
  article: "de" | "het";
  plural: string;
  diminutive: string;
  diminutivePlural: string;
  adjAgreement: { definite: string; indefinite: string };
  audioUrl?: string;
  collocations: string[]; // 2-3 collocations
  cefrLevel: TargetLevel;
  frequencyRank?: number;
}

// --- FSRS-related retrieval mode ---------------------------------------------

export type RetrievalMode = "receptive" | "productive";

export interface CardKey {
  itemId: string;
  mode: RetrievalMode;
}
