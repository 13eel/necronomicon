import { cva } from "class-variance-authority";

import { type Character } from "@acme/characters";

const variants = cva();

const CharacterToken = ({}: Character) => {};

export default CharacterToken;
