import { Player } from "../../../../../../../../models/player";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import { Clear } from "@mui/icons-material";
import { FormattedMessage } from "react-intl";
import {
  getSpecializationIDText,
  ItemType,
  PlayerItem as DNDPlayerItem,
  SpecializationItem,
} from "../../../../../../../../models";
import { ConnectableElement, useDrag, useDrop } from "react-dnd";
import { v4 as uuidv4 } from "uuid";

interface PublicProps {
  player?: Player;
  raidIndex: number;
  onRemoveButtonClick?: (player: Player) => void;
  onDrop?: (player: Player, fromIndex?: number) => void;
}

export type Props = PublicProps;

export const PlayerItem: React.FC<Props> = ({
  player,
  raidIndex,
  onRemoveButtonClick,
  onDrop,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [{ isOver }, dropRef] = useDrop(
    () => ({
      accept: [ItemType.Specialization, ItemType.Player],
      drop: (item: SpecializationItem | DNDPlayerItem, monitor) => {
        switch (monitor.getItemType()) {
          case ItemType.Specialization:
            onDrop?.({
              id: uuidv4(),
              // @ts-ignore TODO FIX THIS
              specialization: item.specialization,
            });
            break;
          case ItemType.Player:
            // @ts-ignore TODO FIX THIS
            onDrop?.(item.player, item.fromIndex);
            break;
        }
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
    }),
    [onDrop]
  );

  const [, dragRef] = useDrag(() => ({
    type: ItemType.Player,
    item: {
      player,
      fromIndex: raidIndex,
    },
  }));

  return (
    <Box
      display={"flex"}
      position={"relative"}
      height={34}
      alignItems={"center"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={(el: ConnectableElement) => {
        // This element is both a drag and drop reference! Neat!
        dragRef(el);
        dropRef(el);
      }}
      bgcolor={isOver ? "darkslategray" : ""}
    >
      {player && (
        <>
          <Typography>
            {player.name || getSpecializationIDText(player.specialization.id)}
          </Typography>
          {isHovered && (
            <Box position={"absolute"} right={0} top={0} bottom={0}>
              <Tooltip
                title={
                  <FormattedMessage
                    id={"remove-tooltip-text"}
                    description={
                      "Tooltip button text to remove player from raid list"
                    }
                    defaultMessage={"Remove"}
                  />
                }
              >
                <IconButton
                  onClick={() => onRemoveButtonClick?.(player)}
                  size={"small"}
                >
                  <Clear />
                </IconButton>
              </Tooltip>
            </Box>
          )}
        </>
      )}
    </Box>
  );
};
