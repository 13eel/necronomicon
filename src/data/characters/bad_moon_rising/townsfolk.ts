import characters from "~/utils/characters";

export const townsfolk = characters({
  type: "townsfolk",
  characters: {
    grandmother: {
      label: "nonna",
      icon: "bmr/grandmother",
      description:
        "Inizi conoscendo una persona che è buona e il suo personaggio specifico. Se il Demone la uccide, muori anche tu.",
    },
    sailor: {
      label: "marinaio",
      icon: "bmr/sailor",
      description:
        "Non puoi morire.<br>Ogni notte, scegli una persona  viva: tu o lei sarete ubriachi fino al tramonto.",
    },
    chambermaid: {
      label: "cameriera",
      icon: "bmr/chambermaid",
      description:
        "Ogni notte, scegli 2 persone vive (te stessa esclusa): scopri quante di loro si sono svegliate stanotte per la loro abilità.",
    },
    exorcist: {
      label: "esorcista",
      icon: "bmr/exorcist",
      description:
        "Ogni notte*, scegli una persona (diversa dalla notte precedente): il Demone, se scelto, scopre chi sei e non si sveglierà stanotte.",
    },
    innkeeper: {
      label: "locandiere",
      icon: "bmr/innkeeper",
      description:
        "Ogni notte*, scegli 2 persone: non possono morire stanotte, ma una sarà ubriaca fino al tramonto.",
    },
    gambler: {
      label: "giocatore d'azzardo",
      icon: "bmr/gambler",
      size: 80,
      description:
        "Ogni notte*, scegli una persona e indovina il suo personaggio: se sbagli, muori.",
    },
    gossip: {
      label: "pettegolo",
      icon: "bmr/gossip",
      description:
        "Ogni giorno, puoi fare una dichiarazione pubblica. Stanotte, se era vera, una persona morirà.",
    },
    courtier: {
      label: "cortigiano",
      icon: "bmr/courtier",
      description:
        "Una volta per partita, di notte, scegli un personaggio sarà ubriaco per 3 notti e 3 giorni.",
    },
    professor: {
      label: "professoressa",
      icon: "bmr/professor",
      description:
        "Una volta per partita, di notte*, scegli una persona morta: se è un Cittadino, viene resuscitata.",
    },
    minstrel: {
      label: "menestrello",
      icon: "bmr/minstrel",
      description:
        "Quando un Seguace muore per esecuzione, tutte le persone (tranne i Forestieri) sono ubriache fino al tramonto di domani.",
    },
    tea_lady: {
      label: "dama del tè",
      icon: "bmr/tea_lady",
      description:
        "Se entrambi i vostri vicini vivi sono buoni, non possono morire.",
    },
    pacifist: {
      label: "pacifista",
      icon: "bmr/pacifist",
      description: "Giocatori buoni giustiziati potrebbero non morire",
    },
    fool: {
      label: "giullare",
      icon: "bmr/fool",
      description: "La 1° volta che muori, non muori.",
    },
  },
});
