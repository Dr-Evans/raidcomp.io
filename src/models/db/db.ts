import { Class, ClassID, ExpansionID } from "../index";
import { Theme } from "@mui/material";

export interface ExpansionDB {
  id: ExpansionID;
  getClassByID(classID: ClassID): Class;
  getAllClasses(): Class[];

  theme: Theme;
}
