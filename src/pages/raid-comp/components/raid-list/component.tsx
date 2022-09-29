import React from "react";
import { Grid, Typography } from "@mui/material";
import { PartyList } from "./components/party-list";
import { Player } from "../../../../models/player";
import { MAX_PARTY_SIZE, MAX_RAID_SIZE } from "../../../../models/contants";

interface PublicProps {
  players: (Player | undefined)[];
}

export type Props = PublicProps;

export const RaidList: React.FC<Props> = ({ players }) => {
  const raid = [
    ...players,
    ...new Array(MAX_RAID_SIZE - players.length).fill(undefined),
  ];

  let parties: (Player | undefined)[][] = [];
  for (let i = 0; i < raid.length; i = i + MAX_PARTY_SIZE) {
    parties = [...parties, [...raid.slice(i, i + MAX_PARTY_SIZE)]];
  }

  console.log(parties);
  return (
    <Grid container spacing={2}>
      {parties.map((party, index) => {
        // I hope this works this is pretty jank
        const partyKey = `${index}-${party.reduce(
          (prevValue, player) => prevValue + player?.id,
          ""
        )}`;

        return (
          <Grid item xs={3} key={partyKey}>
            <Typography>{`Group ${index + 1}`}</Typography>
            <PartyList party={party} />
          </Grid>
        );
      })}
    </Grid>
  );
};
