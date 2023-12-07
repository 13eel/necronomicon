import characters from "~/utils/characters";

export const demons = characters({
  type: "demon",
  characters: {
    zombuul: {
      label: "zombuul",
      icon: "bmr/zombuul",
      description:
        "Ogni notte*, se nessuno è morto oggi, scegli una persona: muore. La prima volta che muori, vivi ma risulti come morto.",
    },
    pukka: {
      label: "pukka",
      icon: "bmr/pukka",
      description:
        "Ogni notte, scegli una persona: è avvelenata. La persona precedentemente avvelenata muore e diventa sana.",
    },
    shabaloth: {
      label: "shabaloth",
      icon: "bmr/shabaloth",
      description:
        "Ogni notte*, scegli due persone: muoiono. Una persona morta scelta la sera prima potrebbe essere rigurgitata.",
    },
    po: {
      label: "po",
      icon: "bmr/po",
      description:
        "Ogni notte*, puoi scegliere una persona : muore. Se la sera prima non hai scelto nessuno, stanotte, scegli 3 persone.",
    },
  },
});
