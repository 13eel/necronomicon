import characters from "~/utils/characters";

export const minions = characters({
  type: "minion",
  characters: {
    godfather: {
      label: "padrino",
      icon: "bmr/godfather",
      description:
        "Inizi a conoscere quali Emarginati sono in gioco. Se 1 è morto oggi, scegli un giocatore stasera: muoiono. [-1 o +1 Emarginati]",
    },
    devils_advocate: {
      label: "avvocato del diavolo",
      icon: "bmr/poisoner",
      description:
        "Ogni notte, scegli un giocatore vivo (diverso dalla scorsa notte): se viene giustiziato domani, non muore",
    },
    assassin: {
      label: "assassina",
      icon: "bmr/assassin",
      description:
        "Una volta per gioco, di notte*, scegli un giocatore: Muore, anche se per qualche motivo non potrebbe",
    },
    mastermind: {
      label: "genio del male",
      icon: "bmr/mastermind",
      description:
        "Se il Demone muore per esecuzione (terminando il gioco), giocate per 1 in più. Se un giocatore viene giustiziato, la loro squadra perde",
    },
  },
});
