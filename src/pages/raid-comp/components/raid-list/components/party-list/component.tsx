import React from "react";
import { Card, Grid } from "@mui/material";
import { Player } from "../../../../../../models/player";
import { MAX_PARTY_SIZE } from "../../../../../../models/contants";

interface PublicProps {
  party: (Player | undefined)[];
}

export type Props = PublicProps;

export const PartyList: React.FC<Props> = ({ party }) => {
  if (party.length > MAX_PARTY_SIZE) {
    throw new Error("Too many players passed in!");
  }

  const paddedParty = [
    ...party,
    ...new Array(MAX_PARTY_SIZE - party.length).fill(undefined),
  ];

  return (
    <Card>
      <Grid container direction={"column"}>
        {paddedParty.map((player, index) => (
          <Grid item border={1} height={20} key={player ? player.id : index}>
            {player ? player.specialization.id : ""}
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};
