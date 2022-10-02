import React, { useState } from "react";
import {
  Expansion,
  Player,
  MAX_RAID_SIZE,
  ItemType,
  PlayerItem,
} from "../../models";
import { SpecSelection } from "./components/spec-selection";
import { Box, Grid } from "@mui/material";
import { RaidList } from "./components/raid-list";
import { DataList } from "./components/data-list";
import { v4 as uuidv4 } from "uuid";
import { useDrop } from "react-dnd";

interface PublicProps {
  expansion: Expansion;
}

export type Props = PublicProps;

export const RaidCompPage: React.FC<Props> = ({ expansion }) => {
  const [players, setPlayers] = useState<(Player | undefined)[]>(
    new Array(MAX_RAID_SIZE).fill(undefined)
  );

  const [, dropRef] = useDrop(
    () => ({
      accept: ItemType.Player,
      drop: (item: PlayerItem) => {
        setPlayers([
          ...players.slice(0, item.fromIndex),
          undefined,
          ...players.slice(item.fromIndex + 1),
        ]);
      },
      canDrop: (item, monitor) => {
        return monitor.isOver({ shallow: true });
      },
    }),
    []
  );

  return (
    <Grid container p={2} spacing={2} ref={dropRef}>
      <Grid xs item>
        <SpecSelection
          expansion={expansion}
          onSpecClick={(newSpec) => {
            // Find the first empty spot
            let indexToInsert = players.findIndex((player) => !player);

            if (indexToInsert >= 0) {
              const newPlayer: Player = {
                id: uuidv4(),
                specialization: newSpec,
              };

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
            onPlayerAdd={(newPlayer, toIndex, fromIndex) => {
              let newPlayers: (Player | undefined)[];
              const playerToSwap = players[toIndex];

              if (fromIndex === undefined) {
                // Just place the new player in the toIndex
                newPlayers = [
                  ...players.slice(0, toIndex),
                  newPlayer,
                  ...players.slice(toIndex + 1),
                ];
              } else if (fromIndex < toIndex) {
                newPlayers = [
                  ...players.slice(0, fromIndex),
                  playerToSwap,
                  ...players.slice(fromIndex + 1, toIndex),
                  newPlayer,
                  ...players.slice(toIndex + 1),
                ];
              } else {
                newPlayers = [
                  ...players.slice(0, toIndex),
                  newPlayer,
                  ...players.slice(toIndex + 1, fromIndex),
                  playerToSwap,
                  ...players.slice(fromIndex + 1),
                ];
              }

              setPlayers(newPlayers);
            }}
            onPlayerEdit={(newPlayer) => {
              let indexToReplace = players.findIndex(
                (p) => p?.id === newPlayer.id
              );

              setPlayers([
                ...players.slice(0, indexToReplace),
                newPlayer,
                ...players.slice(indexToReplace + 1),
              ]);
            }}
          />
        </Box>
      </Grid>
      <Grid xs={4} item>
        <DataList players={players} />
      </Grid>
    </Grid>
  );
};
