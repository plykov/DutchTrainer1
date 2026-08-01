export interface SpeakingExamItem {
  id: string;
  text: string;
  topic: string;
  timeLimitS: 20 | 30;
}

// §7 — Spreken exam demo: original prompts, distinct from the /speaking
// practice pool, run beep-paced with no backtracking via
// ExamSpeakingRunner. Real Spreken: ~25 min, 8 short (20s) + 8 medium (30s)
// [VERIFY] — this is a 15-item mechanism demo alternating both lengths.
export const SPEAKING_EXAM_ITEMS: SpeakingExamItem[] = [
  { id: "sexam-1", topic: "gezondheid", timeLimitS: 20, text: "Vertel kort waarom u vandaag naar de huisarts gaat." },
  { id: "sexam-2", topic: "gemeente", timeLimitS: 30, text: "Leg uit welke documenten u nodig heeft om u in te schrijven bij de gemeente." },
  { id: "sexam-3", topic: "werk", timeLimitS: 20, text: "Vertel kort wat voor werk u zoekt." },
  { id: "sexam-4", topic: "wonen", timeLimitS: 30, text: "Beschrijf uw woning en waarom u daar graag woont." },
  { id: "sexam-5", topic: "afspraak_verzetten", timeLimitS: 20, text: "Leg uit waarom u een afspraak wilt verzetten." },
  { id: "sexam-6", topic: "onderwijs", timeLimitS: 30, text: "Vertel waarom u een cursus Nederlands volgt." },
  { id: "sexam-7", topic: "geld", timeLimitS: 20, text: "Leg kort uit hoe u uw rekeningen betaalt." },
  { id: "sexam-8", topic: "buurt", timeLimitS: 30, text: "Vertel iets over uw buurt en uw buren." },
  { id: "sexam-9", topic: "gezondheid", timeLimitS: 20, text: "Beschrijf kort uw klachten aan de dokter." },
  { id: "sexam-10", topic: "werk", timeLimitS: 30, text: "Vertel over uw laatste sollicitatiegesprek." },
  { id: "sexam-11", topic: "documenten", timeLimitS: 20, text: "Leg uit welk document u bij de gemeente wilt aanvragen." },
  { id: "sexam-12", topic: "wonen", timeLimitS: 30, text: "Leg uit wat u zou doen als de verwarming in uw huis stuk is." },
  { id: "sexam-13", topic: "dagelijks_leven", timeLimitS: 20, text: "Vertel kort over uw dagelijkse routine." },
  { id: "sexam-14", topic: "gemeente", timeLimitS: 30, text: "Leg uit wat u zou zeggen als u een fout in een brief van de gemeente vindt." },
  { id: "sexam-15", topic: "werk", timeLimitS: 20, text: "Vertel kort waarom u geschikt bent voor een baan." },
];
