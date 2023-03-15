import { type NextPage } from "next";
import { useState } from "react";
import player_counts from "~/data/player_counts";
import Range from "../components/ui/Range";

const BagPage: NextPage = () => {
  const [players, setPlayers] = useState(8);
  const foo = player_counts.has(5) ? player_counts.get(5) : player_counts.;
  // const aa = player_counts[10]
  // const fob = player_counts[5]
  // const foo = player_counts[5] ? player_counts[5] : 6;
  // const { townsfolk, outsider, minion, demon } = player_counts[players]
  //   ? player_counts[players]
  //   : player_counts[5];

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
        <div className="flex">
          <span>TS: {townsfolk}</span>
          <span>O: {outsider}</span>
          <span>M: {minion}</span>
          <span>D: {demon}</span>
        </div>
      </main>
    </>
  );
};

export default BagPage;
