import characters from "~/utils/characters";

export const townsfolk = characters({
  type: "townsfolk",
  characters: {
    grandmother: {
      label: "nonna",
      icon: "bmr/grandmother",
      description:
        "Inizi sapendo un giocatore buono ed il loro personaggio. Se il Demone li uccide, muori anche tu",
    },
    sailor: {
      label: "marinaio",
      icon: "bmr/sailor",
      description:
        "Non puoi morire.<br>Ogni notte, scegli un giocatore vivo: Tu o loro sarete ubriachi fino al tramonto",
    },
    chambermaid: {
      label: "cameriera",
      icon: "bmr/chambermaid",
      description:
        "Ogni notte, scegli 2 giocatori vivi (te stessa esclusa): Scopri quanti di loro si sono svegliati stanotte a causa della loro abilità",
    },
    exorcist: {
      label: "esorcista",
      icon: "bmr/exorcist",
      description:
        "Inizi sapendo che 1 di 2 giocatrici indicate è una precisa seguageOgni notte*, scegli un giocatore (diverso della scorsa notte): il Demone, se scelto, scopre chi sei e non si sveglierà stanotte",
    },
    innkeeper: {
      label: "locandiere",
      icon: "bmr/innkeeper",
      description:
        "Ogni notte*, scegli 2 giocatori: Non possono morire stanotte, ma 1 sarà ubriaco fino al tramonto",
    },
    gambler: {
      label: "giocatore d'azzardo",
      icon: "bmr/gambler",
      description:
        "Ogni notte*, scegli un giocatore e indovina il loro personaggio: se indovini male, muori",
    },
    gossip: {
      label: "pettegolo",
      icon: "bmr/gossip",
      description:
        "Ogni giorno, puoi fare una dichiarazione pubblica. Stanotte, se era vera, un giocatore muore",
    },
    courtier: {
      label: "cortigiano",
      icon: "bmr/courtier",
      description:
        "Una volta per partita, di notte, scegli un personaggio: Sarà ubriaco per 3 notti e 3 giorni",
    },
    professor: {
      label: "professoressa",
      icon: "bmr/professor",
      description:
        "Una volta per partita, di notte*, scegli un giocatore morto: Se è un Cittadino, viene resuscitato",
    },
    minstrel: {
      label: "menestrello",
      icon: "bmr/minstrel",
      description:
        "Quando un Seguage muore per esecuzione, tutti giocatori (tranne Forestieri) sono ubriaci fino al tramonto di domani",
    },
    tea_lady: {
      label: "dama del tè",
      icon: "bmr/tea_lady",
      description:
        "Se emtrambi i vostri vicini vivi sono buoni, non possono morire",
    },
    pacifist: {
      label: "pacifista",
      icon: "bmr/pacifist",
      description: "I giocatori buoni giustiziati potrebbero non morire",
    },
    fool: {
      label: "sciocco",
      icon: "bmr/fool",
      description: "La 1° volta che muori, non muori",
    },
  },
});
