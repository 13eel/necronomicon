import { demons } from "~/data/characters/trouble_brewing/demons";
import { minions } from "~/data/characters/trouble_brewing/minions";
import { outsiders } from "~/data/characters/trouble_brewing/outsiders";
import { townsfolk } from "~/data/characters/trouble_brewing/townsfolk";

const trouble_brewing = {
  ...townsfolk,
  ...outsiders,
  ...minions,
  ...demons,
};

export default trouble_brewing;
