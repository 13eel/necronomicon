const outsiders = {
  butler: {
    label: "maggiordomo",
    iconSrc: "tb/butler",
    desc: "Ogni notte, scegli un giocatore (te stesso escluso): domani potrai votare solo se egli voterà",
  },
  drunk: {
    label: "ubriacona",
    iconSrc: "tb/drunk",
    desc: "Non sai di essere l'ubriacona. Pensi di essere una cittadina ma la tua abilità malfunziona",
  },
  recluse: {
    label: "recluso",
    iconSrc: "tb/recluse",
    desc: "Potresti risultare come malvagio e come Demone o seguace, anche se morto",
  },
  saint: {
    label: "santa",
    iconSrc: "tb/saint",
    desc: "Se vieni giustiziata, la tua squadra perde",
  },
} as const;

export default outsiders;
