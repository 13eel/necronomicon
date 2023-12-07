import characters from "~/utils/characters";

export const minions = characters({
  type: "minion",
  characters: {
    godfather: {
      label: "padrino",
      icon: "bmr/godfather",
      description:
        "Inizi sapendo quali Emarginati sono in gioco. Se 1 di loro muore oggi, stanotte, scegli una persona: muore.<br>[-1 o +1 Emarginati]",
    },
    devils_advocate: {
      label: "avvocato del diavolo",
      icon: "bmr/devils_advocate",
      size: 75,
      description:
        "Ogni notte, scegli una persona viva(diversa dalla  notte precedente): se viene giustiziata domani, non muore.",
    },
    assassin: {
      label: "assassina",
      icon: "bmr/assassin",
      description:
        "Una volta per gioco, di notte*, scegli una persona: muore, anche se per qualche motivo non potrebbe.",
    },
    mastermind: {
      label: "genio del male",
      icon: "bmr/mastermind",
      description:
        "Se il Demone muore per esecuzione (terminando il gioco), giocate per 1 giorno in più. Se una persona viene giustiziata, la sua squadra perde.",
    },
  },
});
