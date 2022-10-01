import React from "react";
import { Card, Grid } from "@mui/material";
import { Player } from "../../../../../../models/player";
import { MAX_PARTY_SIZE } from "../../../../../../models/contants";
import { PlayerItem } from "./components/player-item";

interface PublicProps {
  party: (Player | null | undefined)[];
  onPlayerRemove?: (player: Player) => void;
  onPlayerAdd?: (newPlayer: Player, index: number) => void;
  onPlayerEdit?: (newPlayer: Player, oldPlayer: Player) => void;
}

export type Props = PublicProps;

export const PartyList: React.FC<Props> = ({
  party,
  onPlayerRemove,
  onPlayerAdd,
}) => {
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
            <PlayerItem
              player={player}
              onRemoveButtonClick={onPlayerRemove}
              onDrop={(p) => onPlayerAdd?.(p, index)}
            />
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};
