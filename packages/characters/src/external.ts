export type Team = "good" | "evil" | "neither" | "either";

export type Edition =
  | "trouble_brewing"
  | "bad_moon_rising"
  | "sects_&_violets"
  | "experimental";

export type CharacterType =
  | "townsfolk"
  | "outsider"
  | "minion"
  | "demon"
  | "traveller"
  | "fabled";

export type Character = {
  label: string;
  icon: string;
  description: string;
  type?: CharacterType;
  team?: Team;
  size?: number;
};
export type EvilCharacter = Character & {
  type: "demon" | "minion";
  team?: "evil";
};

type RequiredByKeys<T, K extends keyof T = keyof T> = Omit<
  T & Required<Pick<T, K & keyof T>>,
  never
>;
type ChangeTypeByKeys<T, K extends keyof T, N> = Omit<
  T & { [k in K]: N },
  never
>;
type CharacterRecord = Record<string, Character>;

type CharacterGroup<
  TRecord extends CharacterRecord,
  TType extends CharacterType,
> = {
  [K in keyof TRecord]: ChangeTypeByKeys<TRecord[K], "type", TType>;
};

type CharacterTeam<TRecord extends CharacterRecord, TTeam extends Team> = {
  [K in keyof TRecord]: RequiredByKeys<
    ChangeTypeByKeys<TRecord[K], "team", TTeam>,
    "type"
  >;
};

export const characters = <T extends CharacterRecord>(characters: T): T =>
  characters;

export const character_group = <
  T extends CharacterRecord,
  V extends CharacterType,
>(
  type: V,
  characters: T,
) => {
  Object.entries(characters).forEach(([_, c]) => (c.type = type));
  return characters as unknown as CharacterGroup<T, V>;
};
export const townsfolk = <T extends CharacterRecord>(characters: T) =>
  character_group("townsfolk", characters);
export const outsiders = <T extends CharacterRecord>(characters: T) =>
  character_group("outsider", characters);
export const minions = <T extends CharacterRecord>(characters: T) =>
  character_group("minion", characters);
export const demons = <T extends CharacterRecord>(characters: T) =>
  character_group("demon", characters);

export const character_team = <T extends CharacterRecord, V extends Team>(
  team: V,
  characters: T,
): CharacterTeam<T, V> => {
  Object.entries(characters).forEach(([_, c]) => (c.team = team));
  return characters as unknown as CharacterTeam<T, V>;
};
export const good_team = <T extends CharacterRecord>(characters: T) =>
  character_team("good", characters);
export const evil_team = <T extends CharacterRecord>(characters: T) =>
  character_team("evil", characters);

export const script = <T extends CharacterRecord>(c: T) => characters(c);

export class Script<T extends CharacterRecord> {
  characters: T;

  constructor(roster: T) {
    this.characters = roster;
  }

  getByType(type: CharacterType) {
    return Object.entries(this.characters).filter(([_, c]) => c.type === type);
  }

  townsfolk() {
    return this.getByType("townsfolk");
  }

  outsiders() {
    return this.getByType("outsider");
  }

  minions() {
    return this.getByType("minion");
  }

  demon() {
    return this.getByType("demon");
  }
}
