import { type AppType } from "next/app";

import { api } from "../utils/api";
import localFont from "@next/font/local";

import "../styles/globals.css";

const tokenFont = localFont({
  src: "../fonts/Dumbledor.ttf",
  variable: "--font-token",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`${tokenFont.variable}`}>
      <Component {...pageProps} />
    </main>
  );
};

export default api.withTRPC(MyApp);
