import characters from "~/utils/characters";

export const minions = characters({
  type: "minion",
  characters: {
    widow: {
      label: "vedova",
      icon: "exp/widow",
      description: "Nella tua 1ª notte, guarda il Grimorio e scegli una persona: è avvelenata.<br>1 persona buona sa che c'è la Vedova in gioco."
    }
  },
});
