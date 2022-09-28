import Box from "@mui/material/Box";
import { useContext } from "react";
import { ExpansionContext } from "../../db";

export const RaidCompPage = () => {
  let { id: expansionID } = useContext(ExpansionContext);

  return <Box>{`Expansion ID = ${expansionID}`}</Box>;
};
