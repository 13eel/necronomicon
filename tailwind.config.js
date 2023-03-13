const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "token-image": "url('/images/token.webp')",
      },
      backgroundSize: {
        "token-size": "113%",
      },
      fontFamily: {
        token: ["var(--font-token)"],

        "script-title": ["var(--font-script-title)"],
        serif: ["var(--font-serif)", ...fontFamily.serif],
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("daisyui")],
};
