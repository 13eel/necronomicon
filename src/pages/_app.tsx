import { type AppType } from "next/app";

import localFont from "next/font/local";
import {
  Uncial_Antiqua,
  Libre_Baskerville,
  Source_Sans_Pro,
} from "next/font/google";

import "../styles/globals.css";

const tokenFont = localFont({
  src: "../fonts/Dumbledor.ttf",
  variable: "--font-token",
});
const unical_antiqua = Uncial_Antiqua({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script-title",
});
const libre_baskerville = Libre_Baskerville({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});
const source_sans_pro = Source_Sans_Pro({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sans",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main
      className={`${tokenFont.variable} ${unical_antiqua.variable} ${libre_baskerville.variable} ${source_sans_pro.variable}`}
    >
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
