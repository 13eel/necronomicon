import characters from "~/utils/characters";

export const outsiders = characters({
  type: "outsider",
  characters: {
    goon: {
      label: "scagnozzo",
      icon: "bmr/goon",
      description:
        "Ogni notte, la prima persona che ti sceglie con la propria abilità sarà ubriaca fino all'alba e tu assumerai il suo allineamento.",
    },
    lunatic: {
      label: "lunatico",
      icon: "bmr/lunatic",
      description:
        "Tu pensi di essere un Demone, ma non lo sei.  Il Demone sa chi sei e chi scegli di notte.",
    },
    tinker: {
      label: "inventore",
      icon: "bmr/tinker",
      description: "Potresti morire in qualsiasi momento.",
    },
    moonchild: {
      label: "figlio della luna",
      icon: "bmr/moonchild",
      size: 90,
      description:
        "Quando vieni a sapere che sei morto, scegli pubblicamente una persona viva. Stanotte, se era buona, morirà.",
    },
  },
});
