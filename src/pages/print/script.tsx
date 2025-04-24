import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Page from "../../components/print/Page";
import Role from "../../components/print/Role";

import characters from "~/data/characters";

/**
 * Acts on the first night
 * Acts every night
 * Acts every night (except the first night)
 * Acts during the day
 * Once per game
 * Acts on a trigger OR passive
 *
 * Then within each of these subsets the abilities are ordered from shortest to longest
 * unless there's another more cognitively useful option.
 * To give an example of when it's more cognitively useful to do it differently:
 * the top 4 in TB are ordered the way they are to be detecting Town/Outsider/Minions,
 * because that's the order those groups are on every script.
 */
const PrintScriptPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Trouble Brewing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center bg-black">
        <Page className="overflow-hidden">
          <div
            style={{ backgroundImage: "url('/images/tb/sheet.webp')" }}
            className="script h-full w-full"
          >
            {/* <div className="logo text-center">
              <h1 className="font-token text-5xl text-[#481f44]">Catfishing</h1>
            </div> */}
            <Image
              src="/images/tb/logo.webp"
              width={1000}
              height={50}
              className="logo"
              alt="logo"
            />
            <div className="town-side side flex items-center justify-center font-script-title uppercase text-amber-200">
              cittadini
            </div>
            <div className="town gap-y-2 pt-6 pb-4">
              <Role {...characters.washerwoman} />
              <Role {...characters.librarian} />
              <Role {...characters.investigator} />
              <Role {...characters.chef} />
              <Role {...characters.empath} />
              <Role {...characters.fortune_teller} />
              <Role {...characters.undertaker} />
              <Role {...characters.monk} />
              <Role {...characters.raven_keeper} />
              <Role {...characters.virgin} />
              <Role {...characters.slayer} />
              <Role {...characters.mayor} />
              <Role {...characters.soldier} />
            </div>
            <div className="town -ml-10 w-80 border-b-2 border-black/50"></div>
            <div className="out-side side flex items-center justify-center font-script-title uppercase text-amber-200">
              emarginati
            </div>
            <div className="out gap-y-2 pt-3 pb-4">
              <Role {...characters.butler} />
              <Role {...characters.recluse} />
              <Role {...characters.drunk} />
              <Role {...characters.saint} />
            </div>
            <div className="out -ml-10 w-80 border-b-2 border-black/50"></div>
            <div className="minions-side side flex items-center justify-center font-script-title uppercase text-amber-200">
              seguaci
            </div>
            <div className="minions gap-y-2 pt-3 pb-4">
              <Role {...characters.poisoner} evil />
              <Role {...characters.spy} evil />
              <Role {...characters.scarlet_woman} evil />
              <Role {...characters.baron} evil />
            </div>
            <div className="minions -ml-10 w-80 border-b-2 border-black/50"></div>
            <div className="demons-side side mt-8 flex items-center justify-end font-script-title uppercase text-amber-200">
              demoni
            </div>
            <div className="demons items-start pt-3 align-top">
              <Role {...characters.imp} evil />
            </div>
            <div className="footer relative">
              <div className="absolute bottom-0 -left-10 flex h-[110px] w-full items-end">
                <Image src="/images/tb/sheet-bottom.webp" fill alt="bottom" />
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
