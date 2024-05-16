import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Page from "../../components/print/Page";
import Role from "../../components/print/Role";

import characters from "~/data/characters/sects_and_violets";

const PrintScriptPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sects & Violets</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center bg-black">
        <Page className="overflow-hidden">
          <div
            style={{ backgroundImage: "url('/images/snv/sheet.webp')" }}
            className="script h-full w-full"
          >
            <Image
              src="/images/snv/logo.webp"
              width={1000}
              height={50}
              className="logo"
              alt="logo"
            />
            <div className="town-side side flex items-center justify-center font-script-title uppercase text-amber-200">
              cittadini
            </div>
            <div className="town columns-2 pr-8 pt-3">
              <Role {...characters.clockmaker} />
              <Role {...characters.dreamer} />
              <Role {...characters.snakecharmer} />
              <Role {...characters.mathematician} />
              <Role {...characters.flowergirl} />
              <Role {...characters.towncrier} />
              <Role {...characters.oracle} />
              <Role {...characters.savant} />
              <Role {...characters.seamstress} />
              <Role {...characters.philosopher} />
              <Role {...characters.artist} />
              <Role {...characters.juggler} />
              <Role {...characters.sage} />
            </div>
            <div className="town -ml-10 w-80 border-b-2 border-black/50"></div>
            <div className="out-side side flex items-center justify-center font-script-title uppercase text-amber-200">
              emarginati
            </div>
            <div className="out columns-2 pr-8 pt-4">
              <Role {...characters.mutant} />
              <Role {...characters.sweetheart} />
              <Role {...characters.barber} />
              <Role {...characters.klutz} />
            </div>
            <div className="out -ml-10 w-80 border-b-2 border-black/50"></div>
            <div className="minions-side side flex items-center justify-center font-script-title uppercase text-amber-200">
              seguaci
            </div>
            <div className="minions columns-2 pr-8 pt-3">
              <Role {...characters.eviltwin} evil />
              <Role {...characters.witch} evil />
              <Role {...characters.cerenovus} evil />
              <Role {...characters.pithag} evil />
              <div className="h-4 w-full"></div>
            </div>
            <div className="minions -ml-10 w-80 border-b-2 border-black/50"></div>
            <div className="demons-side side mt-4 flex items-center justify-end font-script-title uppercase text-amber-200">
              demoni
            </div>
            <div className="demons relative columns-2 pr-8 pt-4">
              <Role {...characters.fanggu} evil />
              <Role {...characters.vigormortis} evil />
              <Role {...characters.nodashii} evil />
              <Role {...characters.vortox} evil />
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
