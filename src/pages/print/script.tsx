import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Page from "../../components/print/Page";
import Role from "../../components/print/Role";

import characters from "~/data/characters";

const PrintScriptPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Catfishing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center bg-black">
        <Page className="overflow-hidden">
          <div
            style={{ backgroundImage: "url('/images/snv/sheet.webp')" }}
            className="script h-full w-full"
          >
            <div className="logo text-center">
              <h1 className="font-token text-5xl text-[#481f44]">Catfishing</h1>
            </div>
            {/* <Image
              src="/images/snv/logo.webp"
              width={1000}
              height={50}
              className="logo"
              alt="logo"
            /> */}
            <div className="town-side side flex items-center justify-center font-script-title uppercase text-amber-200">
              cittadini
            </div>
            <div className="town flex pr-8 pt-0 pb-4">
              <div className="basis-1/2">
                <Role {...characters.investigator} />
                <Role {...characters.grandmother} />
                <Role {...characters.dreamer} />
                <Role {...characters.snakecharmer} />
                <Role {...characters.savant} />
                <Role {...characters.raven_keeper} />
                <Role {...characters.cannibal} />
              </div>
              <div className="basis-1/2">
                <Role {...characters.chef} />
                <Role {...characters.balloonist} />
                <Role {...characters.fortune_teller} />
                <Role {...characters.gambler} />
                <Role {...characters.philosopher} />
                <Role {...characters.amnesiac} />
              </div>
            </div>
            <div className="town -ml-10 w-80 border-b-2 border-black/50"></div>
            <div className="out-side side flex items-center justify-center font-script-title uppercase text-amber-200">
              emarginati
            </div>
            <div className="out flex pr-8 pt-0 pb-3">
              <div className="basis-1/2">
                <Role {...characters.drunk} />
                <Role {...characters.sweetheart} />
                <Role {...characters.lunatic} />
              </div>
              <div className="basis-1/2">
                <Role {...characters.recluse} />
                <Role {...characters.mutant} />
              </div>
            </div>
            <div className="out -ml-10 w-80 border-b-2 border-black/50"></div>
            <div className="minions-side side flex items-center justify-center font-script-title uppercase text-amber-200">
              seguaci
            </div>
            <div className="minions flex pr-8 pt-0 pb-4">
              <div className="basis-1/2">
                <Role {...characters.godfather} evil />
                <Role {...characters.pithag} evil />
              </div>
              <div className="basis-1/2">
                <Role {...characters.cerenovus} evil />
                <Role {...characters.widow} evil />
              </div>
            </div>
            <div className="minions -ml-10 w-80 border-b-2 border-black/50"></div>
            <div className="demons-side side mt-8 flex items-center justify-end font-script-title uppercase text-amber-200">
              demoni
            </div>
            <div className="demons relative columns-2 pr-8 pt-2">
              <div className="basis-1/2">
                <Role {...characters.imp} evil />
                <Role {...characters.fanggu} evil />
              </div>
              <div className="basis-1/2">
                <Role {...characters.vigormortis} evil />
              </div>
              <div
                className="absolute bottom-0 -left-10 flex h-[110px] w-full items-end"
                style={{ gridArea: "bottom" }}
              >
                <Image src="/images/snv/sheet-bottom.webp" fill alt="bottom" />
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
