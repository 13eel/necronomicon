import characters from "~/utils/characters";

export const townsfolk = characters({
  type: "townsfolk",
  characters: {
    chef: {
      label: "cuoco",
      icon: "tb/chef",
      description:
        "Inizi sapendo quante coppie di giocatori malvagi siedono vicini",
    },
    empath: {
      label: "empatico",
      icon: "tb/empath",
      description: "Ogni notte, sai quanti dei tuoi 2 vicini vivi sono malvagi",
    },
    fortune_teller: {
      label: "indovino",
      icon: "tb/fortuneteller",
      description:
        "Ogni notte, scegli 2 giocatori: scopri se uno di loro è il Demone. C'è un giocatore buono che ti risulterà come il Demone",
    },
    investigator: {
      label: "investigatrice",
      icon: "tb/investigator",
      description:
        "Inizi sapendo che 1 di 2 giocatrici indicate è una precisa seguace",
    },
    librarian: {
      label: "bibliotecario",
      icon: "tb/librarian",
      size: 100,
      description:
        "Inizi sapendo che 1 di 2 giocatori indicati è un preciso emarginato (o che non ce ne sono in gioco)",
    },
    monk: {
      label: "monaca",
      icon: "tb/monk",
      description:
        "Ogni notte*, scegli una giocatrice (te stessa esclusa): sarà protetta dal Demone stanotte",
    },
    mayor: {
      label: "sindaca",
      icon: "tb/mayor",
      description:
        "Se non ci sono esecuzioni con 3 giocatrici in vita, la tua squadra vince.<br>Una giocatrice potrebbe morire al tuo posto durante la notte",
    },
    raven_keeper: {
      label: "custode dei corvi",
      icon: "tb/ravenkeeper",
      size: 95,
      description:
        "Se muori di notte, scegli un giocatore: scopri il suo ruolo",
    },
    slayer: {
      label: "caccia demoni",
      icon: "tb/slayer",
      description:
        "Una volta per gioco, di giorno, scegli pubblicamente una giocatrice: se è un Demone muore",
    },
    soldier: {
      label: "soldato",
      icon: "tb/soldier",
      description: "Sei al sicuro dal Demone",
    },
    undertaker: {
      label: "becchina",
      icon: "tb/undertaker",
      description:
        "Ogni notte*, scopri il ruolo di chi è stato giustiziato oggi",
    },
    virgin: {
      label: "vergine",
      icon: "tb/virgin",
      description:
        "La 1° volta che vieni nominato, se chi ti ha nominato è un cittadino, verrà giustiziato",
    },
    washerwoman: {
      label: "lavandaia",
      icon: "tb/washerwoman",
      description:
        "Inizi sapendo che 1 di 2 giocatrici è una precisa cittadina",
    },
  },
});
