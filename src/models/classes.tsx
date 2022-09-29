import { Buff } from "./buffs";

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

export enum SpecializationRole {
  Tank,
  MeleeDPS,
  RangedDPS,
  MagicDPS,
  Healer,
}

export interface Specialization {
  id: string;
  role: SpecializationRole;
  classID: ClassID;
  buffs: Buff[];
}
