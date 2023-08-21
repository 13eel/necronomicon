import characters from "~/utils/characters";

export const outsiders = characters({
  type: "outsider",
  characters: {
    goon: {
      label: "scagnozzo",
      icon: "bmr/goon",
      description:
        "Ogni notte, il primo giocatore che ti sceglie con la propria abilità sarà ubriaco fino all'alba. Tu assumerai la loro allineamento",
    },
    lunatic: {
      label: "lunatico",
      icon: "bmr/lunatic",
      description:
        "Tu pensi di essere un Demone, ma non lo sei. Il Demone sa chi sei e chi scegli di notte",
    },
    tinker: {
      label: "inventore",
      icon: "bmr/tinker",
      description: "Potresti morire in qualsiasi momento",
    },
    moonchild: {
      label: "figlio della luna",
      icon: "bmr/moonchild",
      description:
        "Quando vieni a sapere che sei morto, scegli publicamante 1 giocatore vivo. Stanotte, se erano un giocatore buono, morira",
    },
  },
});
