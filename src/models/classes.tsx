export enum Classes {
  Druid = "druid",
  Hunter = "hunter",
  Mage = "mage",
  Paladin = "paladin",
  Priest = "priest",
  Rogue = "rogue",
  Shaman = "shaman",
  Warlock = "warlock",
  Warrior = "warrior",
}

export enum DruidSpec {
  Balance = "balance",
  FeralCombat = "feral combat",
  Restoration = "restoration",
}

export abstract class Class {}

export abstract class Druid extends Class {}

export class BalanceDruid extends Druid {}
