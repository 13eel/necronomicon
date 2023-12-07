import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Page from "../../components/print/Page";
import Role from "../../components/print/Role";

import characters from "~/data/characters/bad_moon_rising";

const PrintScriptPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bad Moon Rising</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center bg-black">
        <Page className="overflow-hidden">
          <div
            style={{ backgroundImage: "url('/images/bmr/sheet.webp')" }}
            className="script h-full w-full"
          >
            <Image
              src="/images/bmr/logo.webp"
              width={1000}
              height={50}
              className="logo"
              alt="logo"
            />
            <div className="town-side side flex items-center justify-center font-script-title uppercase text-amber-200">
              cittadini
            </div>
            <div className="town columns-2 pr-8 pt-3">
              <Role {...characters.grandmother} />
              <Role {...characters.sailor} />
              <Role {...characters.chambermaid} />
              <Role {...characters.exorcist} />
              <Role {...characters.innkeeper} />
              <Role {...characters.gambler} />
              <Role {...characters.gossip} />
              <Role {...characters.courtier} />
              <Role {...characters.professor} />
              <Role {...characters.minstrel} />
              <Role {...characters.tea_lady} />
              <Role {...characters.pacifist} />
              <Role {...characters.fool} />
            </div>
            <div className="town -ml-10 w-80 border-b-2 border-black/50"></div>
            <div className="out-side side flex items-center justify-center font-script-title uppercase text-amber-200">
              emarginati
            </div>
            <div className="out columns-2 pr-8 pt-6">
              <Role {...characters.tinker} />
              <Role {...characters.moonchild} />
              <Role {...characters.goon} />
              <Role {...characters.lunatic} />
            </div>
            <div className="out -ml-10 w-80 border-b-2 border-black/50"></div>
            <div className="minions-side side flex items-center justify-center font-script-title uppercase text-amber-200">
              seguaci
            </div>
            <div className="minions columns-2 pr-8 pt-6">
              <Role {...characters.godfather} evil />
              <Role {...characters.devils_advocate} evil />
              <Role {...characters.assassin} evil />
              <Role {...characters.mastermind} evil />
            </div>
            <div className="minions -ml-10 w-80 border-b-2 border-black/50"></div>
            <div className="demons-side side mt-4 flex items-center justify-end font-script-title uppercase text-amber-200">
              demoni
            </div>
            <div className="demons relative columns-2 pr-8 pt-6">
              <Role {...characters.zombuul} evil />
              <Role {...characters.pukka} evil />
              <Role {...characters.shabaloth} evil />
              <Role {...characters.po} evil />
              <div
                className="absolute bottom-0 -left-10 flex h-[110px] w-full items-end"
                style={{ gridArea: "bottom" }}
              >
                <Image src="/images/bmr/sheet-bottom.webp" fill alt="bottom" />
                <div className="absolute bottom-2 ml-[30px] flex w-full justify-center font-serif">
                  <p className="block w-24 text-center text-sm text-black/60">
                    * Non la Prima Notte
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Page>
      </main>
    </>
  );
};

export default PrintScriptPage;
