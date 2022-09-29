import { ExpansionID, Specialization } from "../../../../models";
import React from "react";
import { getExpansionDB } from "../../../../models/db";
import { Grid } from "@mui/material";
import { ClassBox } from "./components/class-box";

interface PublicProps {
  expansionID: ExpansionID;
  onSpecClick?: (spec: Specialization) => void;
}

export type Props = PublicProps;

export const SpecSelection: React.FC<Props> = ({
  expansionID,
  onSpecClick,
}) => {
  const expansionDB = getExpansionDB(expansionID);

  return (
    <Grid container spacing={2} alignItems={"center"}>
      {expansionDB.getAllClasses().map((wowClass) => (
        <Grid item xs={4} key={wowClass.id}>
          <ClassBox wowClass={wowClass} onSpecClick={onSpecClick} />
        </Grid>
      ))}
    </Grid>
  );
};
