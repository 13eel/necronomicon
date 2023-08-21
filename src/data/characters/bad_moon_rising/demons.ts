import characters from "~/utils/characters";

export const demons = characters({
  type: "demon",
  characters: {
    zombuul: {
      label: "zombuul",
      icon: "bmr/zombuul",
      description:
        "Ogni notte*, se nessuno è morto oggi, scegli un giocatore: muore. La prima volta che muori, vivi ma resulti come morto.",
    },
    pukka: {
      label: "pukka",
      icon: "bmr/pukka",
      description:
        "Ogni notte, scegli un giocatore: sono avvelenati. Il giocatore precedentemente avvelenato muore e diventa sano.",
    },
    shabaloth: {
      label: "shabaloth",
      icon: "bmr/shabaloth",
      description:
        "Ogni notte*, scegli 2 giocatori: muoiono. Un giocatore morto scelto la sera prima potrebbe essere rigurgitato.",
    },
    po: {
      label: "po",
      icon: "bmr/po",
      description:
        "Ogni notte*, puoi scegliere un giocatore: muore. Se la sera prima non hai scelto nessuno, scegli 3 giocatori stanotte.",
    },
  },
});
