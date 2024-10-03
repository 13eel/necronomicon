import characters from "~/utils/characters";

export const townsfolk = characters({
  type: "townsfolk",
  characters: {
    amnesiac: {
      label: "amnesico",
      icon: "exp/amnesiac",
      description:
        "Non conosci la tua abilità.<br>Se muori, scopri la tua abilità.",
    },
    balloonist: {
      label: "pilota di mongolfiera",
      icon: "exp/balloonist",
      description:
        "Ogni notte, scopri un giocatore di ciascun tipo di personaggio, fino a quando non ci sono più tipi da scoprire.<br>[+1 Emarginato]",
    },
    cannibal: {
      label: "cannibale",
      icon: "exp/cannibal",
      description:
        "Hai l'abilità dell'esecutato più recente.Se sono malvagi, sei avvelenato fino a quando un giocatore buono muore per esecuzione.",
    },
  },
});
