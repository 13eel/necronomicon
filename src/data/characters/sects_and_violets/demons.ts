import characters from "~/utils/characters";

export const demons = characters({
  type: "demon",
  characters: {
    fanggu: {
      label: "fanggu",
      icon: "snv/fanggu",
      description:
        "Ogni notte*, scegli una persona: muore.<br/>Il primo Emarginato che uccidi diventa un malvagio Fang Gu e tu muori al suo posto. [+1 Emarginato]",
    },
    vigormortis: {
      label: "vigormortis",
      icon: "snv/vigormortis",
      description:
        "Ogni notte*, scegli una persona: muore.<br/>I Seguaci che uccidi mantengono la loro abilità e avvelenano un vicino Cittadino.<br/>[−1 Emarginato]",
    },
    nodashii: {
      label: "nodashii",
      icon: "snv/nodashii",
      description:
        "Ogni notte*, scegli una persona: muore.<br/>I tuoi 2 vicini Cittadini sono avvelenati.",
    },
    vortox: {
      label: "vortox",
      icon: "snv/vortox",
      description:
        "Ogni notte*, scegli una persona: muore. Le abilità dei Cittadini forniscono informazioni false.<br/>Ogni giorno, se nessuno viene giustiziato, il male vince.",
    },
  },
});
