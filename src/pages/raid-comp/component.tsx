import React, { useState } from "react";
import { ExpansionID } from "../../models";
import { SpecSelection } from "./components/spec-selection";
import { Box } from "@mui/material";
import { RaidList } from "./components/raid-list";
import { Player } from "../../models/player";
import { v4 as uuidv4 } from "uuid";
import { MAX_RAID_SIZE } from "../../models/contants";

interface PublicProps {
  expansionID: ExpansionID;
}

export type Props = PublicProps;

export const RaidCompPage: React.FC<Props> = ({ expansionID }) => {
  const [players, setPlayers] = useState<(Player | undefined)[]>(
    new Array(MAX_RAID_SIZE).fill(undefined)
  );

  return (
    <Box p={2}>
      <SpecSelection
        expansionID={expansionID}
        onSpecClick={(newSpec) => {
          // Find the first empty spot
          let indexToInsert = players.findIndex((player) => !player);

          if (indexToInsert >= 0) {
            const newPlayer: Player = {
              id: uuidv4(),
              specialization: newSpec,
            };

            console.log([
              ...players.slice(0, indexToInsert),
              newPlayer,
              ...players.slice(indexToInsert + 1),
            ]);

            // Replace spot
            setPlayers([
              ...players.slice(0, indexToInsert),
              newPlayer,
              ...players.slice(indexToInsert + 1),
            ]);
          }
        }}
      />
      <Box pt={1}>
        <RaidList
          players={players}
          onPlayerRemove={(playerToRemove) => {
            const indexToRemove = players.findIndex(
              (player) => player?.id === playerToRemove.id
            );

            setPlayers([
              ...players.slice(0, indexToRemove),
              undefined,
              ...players.slice(indexToRemove + 1),
            ]);
          }}
          onPlayerAdd={(newPlayer, index) => {
            setPlayers([
              ...players.slice(0, index),
              newPlayer,
              ...players.slice(index + 1),
            ]);
          }}
        />
      </Box>
    </Box>
  );
};
