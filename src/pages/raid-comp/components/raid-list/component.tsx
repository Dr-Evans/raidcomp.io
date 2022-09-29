import React from "react";
import { Grid, Typography } from "@mui/material";
import { PartyList } from "./components/party-list";
import { Player } from "../../../../models/player";
import { MAX_PARTY_SIZE, MAX_RAID_SIZE } from "../../../../models/contants";
import { FormattedMessage } from "react-intl";

interface PublicProps {
  players: (Player | undefined)[];
  onRemoveButtonClick?: (player: Player) => void;
}

export type Props = PublicProps;

export const RaidList: React.FC<Props> = ({ players, onRemoveButtonClick }) => {
  const raid = [
    ...players,
    ...new Array(MAX_RAID_SIZE - players.length).fill(undefined),
  ];

  let parties: (Player | undefined)[][] = [];
  for (let i = 0; i < raid.length; i = i + MAX_PARTY_SIZE) {
    parties = [...parties, [...raid.slice(i, i + MAX_PARTY_SIZE)]];
  }

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
            <Typography>
              <FormattedMessage
                id={"group-title-text"}
                description={"Title shown above each party"}
                defaultMessage={"Group {numOfGroup}"}
                values={{ numOfGroup: index + 1 }}
              />
            </Typography>
            <PartyList
              party={party}
              onRemoveButtonClick={onRemoveButtonClick}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};
