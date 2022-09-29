import { Player } from "../../../../../../../../models/player";
import { Grid, IconButton, Tooltip, Typography } from "@mui/material";
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
        <Grid
          position={"absolute"}
          display={isHovered ? "flex" : "none"}
          right={0}
        >
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
        </Grid>
      </Grid>
    </>
  );
};
