import characters from "~/utils/characters";

export const outsiders = characters({
  type: "outsider",
  characters: {
    butler: {
      label: "Maggiordomo",
      icon: "tb/butler",
      description:
        "Ogni notte, scegli un giocatore (non se stessi): domani potrai votare solo se anche loro stanno votando.",
    },
    drunk: {
      label: "Ubriacona",
      icon: "tb/drunk",
      description:
        "Non sai di essere l'Ubriacona. Credi di essere un personaggio Cittadino, ma non lo sei.",
    },
    recluse: {
      label: "Recluso",
      icon: "tb/recluse",
      description:
        "Potresti risultare come malvagio e come Demone o Seguace, anche se morto.",
    },
    saint: {
      label: "Santa",
      icon: "tb/saint",
      description: "Se muori per esecuzione, la tua squadra perde.",
    },
  },
});
