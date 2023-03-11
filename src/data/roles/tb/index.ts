import demons from "./demons";
import minions from "./minions";
import outsiders from "./outsiders";
import townsfolk from "./townsfolk";

const trouble_brewing = {
  ...townsfolk,
  ...outsiders,
  ...minions,
  ...demons,
};

export default trouble_brewing;
