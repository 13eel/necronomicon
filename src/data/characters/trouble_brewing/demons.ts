import characters from "~/utils/characters";

export const demons = characters({
  type: "demon",
  characters: {
    imp: {
      label: "Diavoletto",
      icon: "tb/imp",
      description:
        "Ogni notte*, scegli un giocatore: muore.<br>Se ti uccidi in questo modo, un Seguace diventa il Diavoletto.",
    },
  },
});
