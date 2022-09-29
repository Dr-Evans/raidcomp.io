import React from "react";
import { Card, Grid } from "@mui/material";
import { Player } from "../../../../../../models/player";
import { MAX_PARTY_SIZE } from "../../../../../../models/contants";
import { PlayerItem } from "./components/player-item";
import { PlaceholderItem } from "./components/placeholder-item";

interface PublicProps {
  party: (Player | undefined)[];
  onRemoveButtonClick?: (player: Player) => void;
}

export type Props = PublicProps;

export const PartyList: React.FC<Props> = ({ party, onRemoveButtonClick }) => {
  if (party.length > MAX_PARTY_SIZE) {
    throw new Error("Too many players passed in!");
  }

  const paddedParty = [
    ...party,
    ...new Array(MAX_PARTY_SIZE - party.length).fill(undefined),
  ];

  return (
    <Card>
      <Grid container direction={"column"} p={1}>
        {paddedParty.map((player, index) => (
          <Grid item key={player ? player.id : index}>
            {player ? (
              <PlayerItem
                player={player}
                onRemoveButtonClick={onRemoveButtonClick}
              />
            ) : (
              <PlaceholderItem />
            )}
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};
