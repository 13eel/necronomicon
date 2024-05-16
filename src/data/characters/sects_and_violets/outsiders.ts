import characters from "~/utils/characters";

export const outsiders = characters({
  type: "outsider",
  characters: {
    mutant: {
      label: "mutante",
      icon: "snv/mutant",
      description:
        'Se sei "folle" riguardo a essere un Emarginato, potresti essere giustiziato.',
    },
    sweetheart: {
      label: "Dolce metà",
      icon: "snv/sweetheart",
      description:
        "Quando muori, 1 persona sarà ubriaca da questo momento in poi.",
    },
    barber: {
      label: "barbiere",
      icon: "snv/barber",
      description:
        "Se muori oggi o stanotte, il Demone può scegliere 2 persone (non un altro Demone) per scambiare personaggi.",
    },
    klutz: {
      label: "imbranato",
      icon: "snv/klutz",
      description:
        "Quando vieni a sapere che sei morto, scegli pubblicamente 1 persona viva: se è malvagia, la tua squadra perde.",
    },
  },
});
