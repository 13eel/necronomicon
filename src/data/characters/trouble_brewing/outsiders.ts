import characters from "~/utils/characters";

export const outsiders = characters({
  type: "outsider",
  characters: {
    butler: {
      label: "maggiordomo",
      icon: "tb/butler",
      description:
        "Ogni notte, scegli un giocatore (te stesso escluso): domani potrai votare solo se egli voterà",
    },
    drunk: {
      label: "ubriacona",
      icon: "tb/drunk",
      description:
        "Non sai di essere l'ubriacona. Pensi di essere una cittadina ma la tua abilità malfunziona",
    },
    recluse: {
      label: "recluso",
      icon: "tb/recluse",
      description:
        "Potresti risultare come malvagio e come Demone o seguace, anche se morto",
    },
    saint: {
      label: "santa",
      icon: "tb/saint",
      description: "Se vieni giustiziata, la tua squadra perde",
    },
  },
});
