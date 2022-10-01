import { Player } from "../../../../../../../../models/player";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import { Clear } from "@mui/icons-material";
import { FormattedMessage } from "react-intl";
import { getSpecializationIDText } from "../../../../../../../../models";

interface PublicProps {
  player: Player;
  onRemoveButtonClick?: (player: Player) => void;
}

export type Props = PublicProps;

export const PlayerItem: React.FC<Props> = ({
  player,
  onRemoveButtonClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      display={"flex"}
      position={"relative"}
      height={34}
      alignItems={"center"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
    </Box>
  );
};
