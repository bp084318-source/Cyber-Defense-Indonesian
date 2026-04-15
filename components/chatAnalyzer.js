export function analyzeChatLogic(text) {
  const keywords = ["transfer", "urgent", "klik link", "hadiah"];

  let found = keywords.filter(word =>
    text.toLowerCase().includes(word)
  );

  return found.length > 0
    ? "⚠️ Chat mencurigakan!"
    : "✅ Aman";
}
