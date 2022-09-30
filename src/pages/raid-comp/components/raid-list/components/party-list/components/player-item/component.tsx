import { Player } from "../../../../../../../../models/player";
import { Box, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import { Clear } from "@mui/icons-material";
import { FormattedMessage } from "react-intl";

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
    <>
      <Grid
        container
        position={"relative"}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Typography>{player.specialization.id}</Typography>
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
      </Grid>
    </>
  );
};
