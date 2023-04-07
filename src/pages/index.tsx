import { type NextPage } from "next";
import { useState } from "react";
import player_counts from "~/data/player_counts";
import Range from "../components/ui/Range";
import Tab from "~/components/ui/Tab";
import Tabs from "~/components/ui/Tabs";

const BagPage: NextPage = () => {
  const [players, setPlayers] = useState(8);
  const [tab, setTab] = useState("T");
  const { townsfolk, outsider, minion, demon } = player_counts[players]
    ? player_counts[players]!
    : player_counts[5]!;

  return (
    <>
      <main className="container mx-auto p-2">
        <Range
          step={1}
          min={5}
          max={15}
          label={`Players: ${players}`}
          value={players}
          onChange={setPlayers}
        />

        <div className="flex justify-around gap-2">
          <span>{townsfolk}</span>
          <span>{outsider}</span>
          <span>{minion}</span>
          <span>{demon}</span>
        </div>

        <div className="w-full">
          <Tabs tabs={{ T: "T", O: "O", M: "M", D: "D" }} />
        </div>
      </main>
    </>
  );
};

export default BagPage;
