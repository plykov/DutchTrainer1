// Randomizes MC option order so the correct answer's position isn't
// memorizable/predictable (content authoring tends to cluster correct
// answers at index 0). Call once per item via useMemo keyed on the item's
// id, not on every render, so the order stays stable while a question is
// being answered.
export function shuffleOptions<T>(options: T[], correctIndex: number): { options: T[]; correctIndex: number } {
  const indices = options.map((_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  return {
    options: indices.map((i) => options[i]),
    correctIndex: indices.indexOf(correctIndex),
  };
}
