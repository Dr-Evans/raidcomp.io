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
  const [players, setPlayers] = useState<(Player | undefined)[]>([]);

  return (
    <Box p={2}>
      <SpecSelection
        expansionID={expansionID}
        onSpecClick={(newSpec) => {
          if (players.length < MAX_RAID_SIZE) {
            setPlayers([
              ...players,
              {
                id: uuidv4(),
                specialization: newSpec,
              },
            ]);
          }
        }}
      />
      <RaidList players={players} />
    </Box>
  );
};
