import React from "react";
import { Card, Grid } from "@mui/material";
import { Player } from "../../../../../../models/player";
import { MAX_PARTY_SIZE } from "../../../../../../models/contants";
import { PlayerItem } from "./components/player-item";

interface PublicProps {
  party: (Player | undefined)[];
  partyIndex: number;
  onPlayerRemove: (player: Player) => void;
  onPlayerAdd: (newPlayer: Player, toIndex: number, fromIndex?: number) => void;
  onPlayerEdit: (newPlayer: Player, oldPlayer: Player) => void;
}

export type Props = PublicProps;

export const PartyList: React.FC<Props> = ({
  party,
  partyIndex,
  onPlayerRemove,
  onPlayerAdd,
}) => {
  return (
    <Card>
      <Grid container direction={"column"} p={1}>
        {party.map((player, index) => (
          <Grid item key={player ? player.id : index}>
            <PlayerItem
              player={player}
              raidIndex={partyIndex * MAX_PARTY_SIZE + index}
              onRemoveButtonClick={onPlayerRemove}
              onDrop={(p, fromIndex) =>
                onPlayerAdd(p, partyIndex * MAX_PARTY_SIZE + index, fromIndex)
              }
            />
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};
