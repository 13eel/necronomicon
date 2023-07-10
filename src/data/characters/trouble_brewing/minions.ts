import characters from "~/utils/characters";

export const minions = characters({
  type: "minion",
  characters: {
    baron: {
      label: "barone",
      icon: "tb/baron",
      description: "Ci sono 2 emarginati extra in gioco<br>[+2 Emarginati]",
    },
    poisoner: {
      label: "avvelenatrice",
      icon: "tb/poisoner",
      description:
        "Ogni notte, scegli un giocatrice: stanotte e domani giorno sarà avvelinato",
    },
    scarlet_woman: {
      label: "donna scarlatta",
      icon: "tb/scarletwoman",
      size: 95,
      description:
        "Se ci sono almeno 5 giocatori vivi e il Demone muore, diventi il Demone.(I forestieri non contano)",
    },
    spy: {
      label: "spia",
      icon: "tb/spy",
      description:
        "Ogni notte, guardi il grimorio. Potresti risultare come buono e come cittadino o emarginato, anche se morto",
    },
  },
});
