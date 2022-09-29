import { Class, ClassID, ExpansionID } from "../index";
import { Theme } from "@mui/material";
import { ClassicDB } from "./classic";
import { TBCDB } from "./tbc";
import { WrathDB } from "./wrath";

export interface ExpansionDB {
  id: ExpansionID;
  getClassByID(classID: ClassID): Class;
  getAllClasses(): Class[];

  theme: Theme;
}

export const getExpansionDB = (expansionID: ExpansionID) => {
  switch (expansionID) {
    case ExpansionID.BurningCrusade:
      return TBCDB;
    case ExpansionID.WrathOfTheLichKing:
      return WrathDB;
    default:
      return ClassicDB;
  }
};
