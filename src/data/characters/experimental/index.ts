import { demons } from "~/data/characters/experimental/demons";
import { minions } from "~/data/characters/experimental/minions";
import { outsiders } from "~/data/characters/experimental/outsiders";
import { townsfolk } from "~/data/characters/experimental/townsfolk";

const experimental = {
  ...townsfolk,
  ...outsiders,
  ...minions,
  ...demons,
};

export default experimental;
