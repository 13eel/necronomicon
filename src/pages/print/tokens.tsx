import { type NextPage } from "next";
import Head from "next/head";
import Page from "~/components/print/Page";
import Token from "~/components/print/Token";

import characters from "~/data/characters/sects_and_violets";

const PrintTokenPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Trouble Brewing</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center bg-black">
        <Page className="py-[0.5cm]">
          <div className="flex justify-around">
            <Token {...characters.clockmaker} />
            <Token {...characters.dreamer} />
            <Token {...characters.snakecharmer} />
            <Token {...characters.mathematician} />
          </div>
          <div className="-mt-4 flex justify-center gap-6">
            <Token {...characters.flowergirl} />
            <Token {...characters.towncrier} />
            <Token {...characters.oracle} />
          </div>
          <div className="-mt-4 flex justify-around">
            <Token {...characters.savant} />
            <Token {...characters.seamstress} />
            <Token {...characters.philosopher} />
            <Token {...characters.artist} />
          </div>
          <div className="-mt-4 flex justify-center gap-6">
            <Token {...characters.juggler} />
            <Token {...characters.sage} />
            <Token {...characters.mutant} />
          </div>
          <div className="-mt-4 flex justify-around">
            <Token {...characters.sweetheart} />
            <Token {...characters.barber} />
            <Token {...characters.klutz} />
            <Token {...characters.eviltwin} />
          </div>
          <div className="-mt-4 flex justify-center gap-6">
            <Token {...characters.witch} />
            <Token {...characters.cerenovus} />
            <Token {...characters.pithag} />
          </div>
          <div className="-mt-4 flex justify-around">
            <Token {...characters.fanggu} />
            <Token {...characters.vigormortis} />
            <Token {...characters.nodashii} />
            <Token {...characters.vortox} />
          </div>
        </Page>
      </main>
    </>
  );
};

export default PrintTokenPage;
