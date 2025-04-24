import characters from "~/utils/characters";

export const minions = characters({
  type: "minion",
  characters: {
    baron: {
      label: "Barone",
      icon: "tb/baron",
      description: "Ci sono più emarginati in gioco.<br><b>[+2 Emarginati]</b>",
    },
    poisoner: {
      label: "Avvelenatrice",
      icon: "tb/poisoner",
      size: 100,
      description:
        "Ogni notte, scegli un giocatrice: è avvelinato stanotte e domani giorno.",
    },
    scarlet_woman: {
      label: "Donna Scarlatta",
      icon: "tb/scarletwoman",
      size: 95,
      description:
        "Se ci sono 5 o più giocatori vivi e il Demone muore, diventi il Demone.",
    },
    spy: {
      label: "Spia",
      icon: "tb/spy",
      description:
        "Ogni notte, vedi il Grimorio.<br>Potresti risultare come buono e come un Cittadino o Emarginato, anche se morto",
    },
  },
});
