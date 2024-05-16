import characters from "~/utils/characters";

export const townsfolk = characters({
  type: "townsfolk",
  characters: {
    artist: {
      label: "artista",
      icon: "snv/artist",
      description:
        "Una volta per partita, di giorno, chiedi in privato al Narratore qualsiasi domanda egli potrà rispondere solo si/no",
    },
    clockmaker: {
      label: "orologiaio",
      icon: "snv/clockmaker",
      description:
        "Inizi sapendo a quanti passi dal Demone si trova il suo Seguace più vicino.",
    },
    dreamer: {
      label: "sognatrice",
      icon: "snv/dreamer",
      description:
        "Ogni notte, scegli 1 persona (te stessa e Forestieri esclusi): scopri 1 personaggio buono ed 1 cattivo, uno dei quali è corretto.",
    },
    flowergirl: {
      label: "fioraia",
      icon: "snv/flowergirl",
      description: "Ogni notte*, scopri se un Demone ha votato oggi.",
    },
    juggler: {
      label: "giocoliere",
      icon: "snv/juggler",
      description:
        "Il tuo primo giorno, indovina pubblicamente fino a 5 personaggi di persone.<br/>Quella notte, scopri quanti ne hai indovinati correttamente.",
    },
    mathematician: {
      label: "matematica",
      icon: "snv/mathematician",
      description:
        "Ogni notte, scopri quanti poteri delle persone hanno funzionato in modo anomalo (dall'alba) a causa dell'abilità di un altro personaggio.",
    },
    oracle: {
      label: "oracolo",
      icon: "snv/oracle",
      description: "Ogni notte*, scopri quante persone morte sono malvagie.",
    },
    philosopher: {
      label: "Filosofa",
      icon: "snv/philosopher",
      description:
        "Una volta per partita, di notte, scegli un personaggio buono: acquisisci quella abilità. Se questo personaggio è in gioco, è ubriaco.",
    },
    sage: {
      label: "Saggia",
      icon: "snv/sage",
      description: "Se il Demone ti uccide, scopri che è uno di 2 giocatori.",
    },
    savant: {
      label: "dotto",
      icon: "snv/savant",
      description:
        "Ogni giorno, puoi visitare il Narratore per conoscere 2 cose in privato: 1 è vera e 1 è falsa.",
    },
    seamstress: {
      label: "sarta",
      icon: "snv/seamstress",
      description:
        "Una volta per partita, di notte, scegli 2 persone (non te stessa): scopri se hanno lo stesso allineamento.",
    },
    snakecharmer: {
      label: "incantatore di serpenti",
      icon: "snv/snakecharmer",
      size: 69,
      description:
        "Ogni notte, scegli una persona viva: un Demone scelto scambia personaggi e allineamenti con te ed è poi avvelenato.",
    },
    towncrier: {
      label: "Banditore",
      icon: "snv/towncrier",
      description: "Ogni notte*, scopri se un Seguace ha nominato oggi.",
    },
  },
});
