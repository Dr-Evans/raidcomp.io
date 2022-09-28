import { Class, ClassID, ExpansionID } from "../models";
import React from "react";

export interface ExpansionDB {
  id: ExpansionID;
  getClassByID(classID: ClassID): Class;
  getAllClasses(): Class[];
}

export const ExpansionContext = React.createContext<ExpansionDB>({
  id: ExpansionID.WrathOfTheLichKing,
  getClassByID: (classID) => ({
    hexColor: "foo",
    specs: [],
    id: ClassID.DeathKnight,
  }),
  getAllClasses: () => [],
});
