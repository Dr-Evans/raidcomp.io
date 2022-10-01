import { Specialization } from "./specializations";

export enum ClassID {
  DeathKnight = "death-knight",
  DemonHunter = "demon-hunter",
  Druid = "druid",
  Hunter = "hunter",
  Mage = "mage",
  Monk = "monk",
  Paladin = "paladin",
  Priest = "priest",
  Rogue = "rogue",
  Shaman = "shaman",
  Warlock = "warlock",
  Warrior = "warrior",
  Invoker = "invoker",
}

export interface Class {
  id: ClassID;

  hexColor: string;

  specs: Specialization[];
}

export const getClassIconURL = (classID: ClassID) => {
  return `/classes/${classID}/icon.png`;
};
