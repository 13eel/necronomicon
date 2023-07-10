type Team = "good" | "evil" | "either" | "neither";

type Edition =
  | "trouble_brewing"
  | "bad_moon_rising"
  | "sects_&_violets"
  | "experimental";

type CharacterType = "townsfolk" | "outsider" | "minion" | "demon";

interface Character {
  label: string;
  icon: string;
  description: string;
  type?: CharacterType;
  team?: Team;
  size?: number;
}

type Characters<T> = T extends Record<string, Character>
  ? { edition?: Edition; type?: CharacterType; characters: T }
  : never;
