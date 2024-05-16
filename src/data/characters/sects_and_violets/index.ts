import { demons } from "~/data/characters/sects_and_violets/demons";
import { minions } from "~/data/characters/sects_and_violets/minions";
import { outsiders } from "~/data/characters/sects_and_violets/outsiders";
import { townsfolk } from "~/data/characters/sects_and_violets/townsfolk";

const sects_and_violets = {
  ...townsfolk,
  ...outsiders,
  ...minions,
  ...demons,
};

export default sects_and_violets;
