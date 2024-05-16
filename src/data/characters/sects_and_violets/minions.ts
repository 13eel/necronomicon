import characters from "~/utils/characters";

export const minions = characters({
  type: "minion",
  characters: {
    eviltwin: {
      label: "gemello maligno",
      icon: "snv/eviltwin",
      size: 100,
      description:
        "Tu e una persona avversaria vi conoscete.<br/>Se la persona buona viene giustiziata, il male vince.<br/>Il bene non può vincere se entrambi sopravvivete.",
    },
    witch: {
      label: "strega",
      icon: "snv/witch",
      description:
        "Ogni notte, scegli una persona: se nomina domani, muore.<br/>Se rimangono solo 3 persone vive, perdi questa abilità.",
    },
    cerenovus: {
      label: "cerenovus",
      icon: "snv/cerenovus",
      description:
        'Ogni notte, scegli una persona e un personaggio buono: sarà "folle" riguardo a essere questo personaggio domani, o potrebbe essere giustiziata.',
    },
    pithag: {
      label: "sciamana",
      icon: "snv/pithag",
      description:
        "Ogni notte, scegli una persona e un personaggio che diventerà<br/>(se non è in gioco).<br/>Se viene creato un Demone, le morti questa notte sono arbitrarie.",
    },
  },
});
