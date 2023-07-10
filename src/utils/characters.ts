const characters = <T>({ type, characters }: Characters<T>) => {
  if (type === "minion" || type === "demon") {
    Object.entries(characters).forEach(([_, c]) => (c.team = "evil"));
  } else if (type === "townsfolk" || type === "outsider") {
    Object.entries(characters).forEach(([_, c]) => (c.team = "good"));
  }
  return characters;
};

export default characters;
