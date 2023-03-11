const minions = {
  baron: {
    label: "barone",
    iconSrc: "tb/baron",
    desc: "Ci sono 2 emarginati extra in gioco<br>[+2 Emarginati]",
    evil: true,
  },
  poisoner: {
    label: "avvelenatrice",
    iconSrc: "tb/poisoner",
    desc: "Ogni notte, scegli un giocatrice: stanotte e domani giorno sarà avvelinato",
    evil: true,
  },
  scarlet_woman: {
    label: "donna scarlatta",
    iconSrc: "tb/scarletwoman",
    size: 95,
    desc: "Se ci sono almeno 5 giocatori vivi e il Demone muore, diventi il Demone.(I forestieri non contano)",
    evil: true,
  },
  spy: {
    label: "spia",
    iconSrc: "tb/spy",
    desc: "Ogni notte, guardi il grimorio. Potresti risultare come buono e come cittadino o emarginato, anche se morto",
    evil: true,
  },
} as const;

export default minions;
