const townsfolk = {
  chef: {
    label: "cuoco",
    iconSrc: "tb/chef",
    desc: "Inizi sapendo quante coppie di giocatori malvagi siedono vicini",
  },
  empath: {
    label: "empatico",
    iconSrc: "tb/empath",
    desc: "Ogni notte, sai quanti dei tuoi 2 vicini vivi sono malvagi",
  },
  fortune_teller: {
    label: "indovino",
    iconSrc: "tb/fortuneteller",
    desc: "Ogni notte, scegli 2 giocatori: scopri se uno di loro è il Demone. C'è un giocatore buono che ti risulterà come il Demone",
  },
  investigator: {
    label: "investigatrice",
    iconSrc: "tb/investigator",
    desc: "Inizi sapendo che 1 di 2 giocatrici indicate è una precisa seguage",
  },
  librarian: {
    label: "bibliotecario",
    iconSrc: "tb/librarian",
    size: 100,
    desc: "Inizi sapendo che 1 di 2 giocatori indicati è un preciso emarginato (o che non ce ne sono in gioco)",
  },
  monk: {
    label: "monaca",
    iconSrc: "tb/monk",
    desc: "Ogni notte*, scegli una giocatrice (te stessa esclusa): sarà protetta dal Demone stanotte",
  },
  mayor: {
    label: "sindaca",
    iconSrc: "tb/mayor",
    desc: "Se non ci sono esecuzioni con 3 giocatrici in vita, la tua squadra vince.<br>Una giocatrice potrebbe morire al tuo posto durante la notte",
  },
  raven_keeper: {
    label: "custode dei corvi",
    iconSrc: "tb/ravenkeeper",
    size: 95,
    desc: "Se muori di notte, scegli un giocatore: scopri il suo ruolo",
  },
  slayer: {
    label: "caccia demoni",
    iconSrc: "tb/slayer",
    desc: "Una volta per gioco, di giorno, scegli pubblicamente una giocatrice: se è un Demone muore",
  },
  soldier: {
    label: "soldato",
    iconSrc: "tb/soldier",
    desc: "Sei al sicuro dal Demone",
  },
  undertaker: {
    label: "becchina",
    iconSrc: "tb/undertaker",
    desc: "Ogni notte*, scopri il ruolo di chi è stato giustiziato oggi",
  },
  virgin: {
    label: "vergine",
    iconSrc: "tb/virgin",
    desc: "La 1° volta che vieni nominato, se chi ti ha nominato è un cittadino, verrà giustiziato",
  },
  washerwoman: {
    label: "lavandaia",
    iconSrc: "tb/washerwoman",
    desc: "Inizi sapendo che 1 di 2 giocatrici è una precisa cittadina",
  },
} as const;

export default townsfolk;
