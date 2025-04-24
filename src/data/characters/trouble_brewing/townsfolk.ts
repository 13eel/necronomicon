import characters from "~/utils/characters";

export const townsfolk = characters({
  type: "townsfolk",
  characters: {
    chef: {
      label: "Chef",
      icon: "tb/chef",
      description: "Inizi sapendo quante coppie di giocatori malvagi ci sono.",
    },
    empath: {
      label: "Empatico",
      icon: "tb/empath",
      description:
        "Ogni notte, sai quanti dei tuoi 2 vicini vivi sono malvagi.",
    },
    fortune_teller: {
      label: "Indovino",
      icon: "tb/fortuneteller",
      description:
        "Ogni notte, scegli 2 giocatori:<br>scopri se uno di loro è il Demone.<br>C'è un giocatore buono che ti risulterà come il Demone.",
    },
    investigator: {
      label: "Investigatrice",
      icon: "tb/investigator",
      description:
        "Inizi sapendo che 1 dei 2 giocatori è un particolare Seguace",
    },
    librarian: {
      label: "bibliotecario",
      icon: "tb/librarian",
      size: 100,
      description:
        "Inizi sapendo che 1 dei 2 giocatori è un particolare Emarginato<br>(o che non ce ne sono in gioco).",
    },
    monk: {
      label: "Monaca",
      icon: "tb/monk",
      description:
        "Ogni notte*, scegli una giocatore<br>(non te stesso): sarà protetto dal Demone stanotte.",
    },
    mayor: {
      label: "Sindaca",
      icon: "tb/mayor",
      description:
        "Se non ci sono esecuzioni con 3 giocatori in vita, la tua squadra vince.<br>Una giocatore potrebbe morire al tuo posto durante la notte.",
    },
    raven_keeper: {
      label: "Custode dei corvi",
      icon: "tb/ravenkeeper",
      size: 95,
      description:
        "Se muori di notte, scegli un giocatore:<br>scopri il suo personaggio.",
    },
    slayer: {
      label: "Ammazzademoni",
      icon: "tb/slayer",
      size: 95,
      description:
        "Una volta per partita, durante il giorno, scegli pubblicamente una giocatrice: se è il Demone, muore.",
    },
    soldier: {
      label: "Soldato",
      icon: "tb/soldier",
      description: "Sei al sicuro dal Demone.",
    },
    undertaker: {
      label: "Becchina",
      icon: "tb/undertaker",
      description:
        "Ogni notte*, scopri quale personaggio è stato giustiziato oggi.",
    },
    virgin: {
      label: "Vergine",
      icon: "tb/virgin",
      description:
        "La 1ª volta che vieni nominato, se chi ti ha nominato è un Cittadino, viene giustiziato immediatamente.",
    },
    washerwoman: {
      label: "Lavandaia",
      icon: "tb/washerwoman",
      description:
        "Inizi sapendo che 1 dei 2 giocatori è una particolare Cittadino.",
    },
  },
});
