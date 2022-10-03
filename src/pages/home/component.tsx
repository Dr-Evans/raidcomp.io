import { Button, ButtonGroup, Grid } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { ExpansionID } from "../../models";
import React from "react";
import { FormattedMessage } from "react-intl";

export interface HomePageProps {
  onExpansionHover: (selectedExpansion: ExpansionID) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onExpansionHover }) => {
  return (
    <Grid container spacing={2} minHeight={160}>
      <Grid item xs display="flex" justifyContent="center" alignItems="center">
        <ButtonGroup orientation="vertical">
          <Button
            component={RouterLink}
            to={`/${ExpansionID.WrathOfTheLichKing}`}
            onMouseEnter={() =>
              onExpansionHover(ExpansionID.WrathOfTheLichKing)
            }
          >
            <FormattedMessage
              id={"home-page-wrath-title"}
              defaultMessage={"Wrath of the Lich King"}
            />
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
};
