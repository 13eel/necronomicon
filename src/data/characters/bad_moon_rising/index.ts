import { demons } from "~/data/characters/bad_moon_rising/demons";
import { minions } from "~/data/characters/bad_moon_rising/minions";
import { outsiders } from "~/data/characters/bad_moon_rising/outsiders";
import { townsfolk } from "~/data/characters/bad_moon_rising/townsfolk";

const bad_moon_rising = {
  ...townsfolk,
  ...outsiders,
  ...minions,
  ...demons,
};

export default bad_moon_rising;
