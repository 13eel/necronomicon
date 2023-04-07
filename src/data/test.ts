import { type Role } from "~/types";

type RoleSchemas = Record<string, Role>;
type Edition =
  | "trouble_brewing"
  | "bad_moon_rising"
  | "sects_&_violets"
  | "experimental";

type CharacterType = "townsfolk" | "outsider" | "minion" | "demon";
type Roles<T> = T extends RoleSchemas
  ? { edition?: Edition; type?: CharacterType; characters: T }
  : never;

const roles = <T>({ type, characters }: Roles<T>) => {
  if (type === "minion" || type === "demon") {
    Object.entries(characters).forEach(([_, c]) => (c.evil = true));
  }
  return characters;
};

export const foo = roles({
  type: "demon",
  characters: { imp: { label: "", iconSrc: "", desc: "" } },
});
