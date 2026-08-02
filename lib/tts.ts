// Thin wrapper around the browser's Web Speech API for Dutch pronunciation
// playback. Shared by any component that needs to speak a short bit of
// Dutch text (vocab lemmas, listening transcripts, ...).

export const supportsTts = typeof window !== "undefined" && "speechSynthesis" in window;

export function speakDutch(text: string): void {
  if (!supportsTts) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "nl-NL";
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}
