import { Player } from "../../../../models";
import React from "react";
import { RoleList } from "./components/role-list";
import { Grid } from "@mui/material";
import { BuffList } from "./components/buff-list";

interface PublicProps {
  players: (Player | undefined)[];
}

export type Props = PublicProps;

export const DataList: React.FC<Props> = ({ players }) => {
  return (
    <Grid container spacing={2} direction={"column"}>
      <Grid item>
        <RoleList players={players} />
      </Grid>
      <Grid item>
        <BuffList players={players} />
      </Grid>
    </Grid>
  );
};
