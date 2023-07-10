import characters from "~/utils/characters";

export const demons = characters({
  type: "demon",
  characters: {
    imp: {
      label: "diavoletto",
      icon: "tb/imp",
      description:
        "Ogni notte*, scegli un giocatore: muore.<br>Se uccidi te stesso, un seguace diventerà il Diavoletto",
    },
  },
});
