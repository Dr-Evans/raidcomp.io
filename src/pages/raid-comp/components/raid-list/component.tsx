import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { PartyList } from "./components/party-list";
import { Player } from "../../../../models/player";
import { MAX_PARTY_SIZE } from "../../../../models/contants";
import { FormattedMessage } from "react-intl";

interface PublicProps {
  players: (Player | undefined)[];
  onPlayerRemove?: (player: Player) => void;
  onPlayerAdd?: (newPlayer: Player, index: number) => void;
  onPlayerEdit?: (newPlayer: Player, oldPlayer: Player) => void;
}

export type Props = PublicProps;

export const RaidList: React.FC<Props> = ({
  players,
  onPlayerRemove,
  onPlayerAdd,
}) => {
  let parties: (Player | undefined)[][] = [];
  for (let i = 0; i < players.length; i = i + MAX_PARTY_SIZE) {
    parties = [...parties, [...players.slice(i, i + MAX_PARTY_SIZE)]];
  }

  return (
    <Grid container spacing={2}>
      {parties.map((party, partyIndex) => {
        // I hope this works this is pretty jank
        const partyKey = `${partyIndex}-${party.reduce(
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
                values={{ numOfGroup: partyIndex + 1 }}
              />
            </Typography>
            <Box pt={1}>
              <PartyList
                party={party}
                onPlayerRemove={onPlayerRemove}
                onPlayerAdd={(p, playerIndex) =>
                  onPlayerAdd?.(p, partyIndex * MAX_PARTY_SIZE + playerIndex)
                }
              />
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};
