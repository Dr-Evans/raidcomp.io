import { ExpansionID, Specialization } from "../../../../models";
import React from "react";
import { Grid } from "@mui/material";
import { ClassBox } from "./components/class-box";
import { WrathDB } from "../../../../models/db/wrath";

interface PublicProps {
  expansionID: ExpansionID;
  onSpecClick?: (spec: Specialization) => void;
}

export type Props = PublicProps;

export const SpecSelection: React.FC<Props> = ({
  expansionID,
  onSpecClick,
}) => {
  return (
    <Grid container spacing={2} alignItems={"center"}>
      {WrathDB.getAllClasses().map((wowClass) => (
        <Grid item xs={2} key={wowClass.id}>
          <ClassBox wowClass={wowClass} onSpecClick={onSpecClick} />
        </Grid>
      ))}
    </Grid>
  );
};
