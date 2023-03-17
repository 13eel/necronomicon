import { type NextPage } from "next";
import { useState } from "react";
import player_counts from "~/data/player_counts";
import Range from "../components/ui/Range";
import Tab from "~/components/ui/Tab";

const BagPage: NextPage = () => {
  const [players, setPlayers] = useState(8);
  const [tab, setTab] = useState("T");
  const { townsfolk, outsider, minion, demon } = player_counts[players]
    ? player_counts[players]!
    : player_counts[5]!;

  return (
    <>
      <main className="p-2">
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

        <div className="tabs justify-between">
          <Tab
            className="grow"
            onClick={() => setTab("T")}
            active={tab === "T"}
          >
            T
          </Tab>
          <Tab
            className="grow"
            onClick={() => setTab("O")}
            active={tab === "O"}
          >
            O
          </Tab>
          <Tab
            className="grow"
            onClick={() => setTab("M")}
            active={tab === "M"}
          >
            M
          </Tab>
          <Tab
            className="grow"
            onClick={() => setTab("D")}
            active={tab === "D"}
          >
            D
          </Tab>
        </div>
      </main>
    </>
  );
};

export default BagPage;
