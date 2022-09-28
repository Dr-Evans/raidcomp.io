import {
  BuffSubType,
  BuffType,
  Class,
  ClassID,
  ExpansionID,
  SpecializationRole,
} from "../../models";
import { ExpansionDB } from "../db";

const classes: Class[] = [
  {
    id: ClassID.DeathKnight,
    hexColor: "C41E3A",
    specs: [
      {
        id: "blood",
        role: SpecializationRole.Tank,
        buffs: [
          {
            id: "53138",
            type: BuffType.RaidBuff,
            subType: BuffSubType.TenPercentAttackPower,
          },
          {
            id: "55610",
            type: BuffType.RaidBuff,
            subType: BuffSubType.MeleeHaste,
          },
          {
            id: "57623",
            type: BuffType.RaidBuff,
            subType: BuffSubType.StrengthAndAgility,
          },
        ],
      },
      {
        id: "frost",
        role: SpecializationRole.MeleeDPS,
        buffs: [],
      },
      {
        id: "unholy",
        role: SpecializationRole.MeleeDPS,
        buffs: [],
      },
    ],
  },
  {
    id: ClassID.Druid,
    hexColor: "FF7C0A",
    specs: [
      {
        id: "balance",
        role: SpecializationRole.MagicDPS,
        buffs: [],
      },
      {
        id: "feral-bear",
        role: SpecializationRole.Tank,
        buffs: [],
      },
      {
        id: "feral-cat",
        role: SpecializationRole.MeleeDPS,
        buffs: [],
      },
      {
        id: "restoration",
        role: SpecializationRole.Healer,
        buffs: [],
      },
    ],
  },
  {
    id: ClassID.Hunter,
    hexColor: "AAD372",
    specs: [
      {
        id: "beast-mastery",
        role: SpecializationRole.RangedDPS,
        buffs: [],
      },
      {
        id: "marksmanship",
        role: SpecializationRole.RangedDPS,
        buffs: [],
      },
      {
        id: "survival",
        role: SpecializationRole.RangedDPS,
        buffs: [],
      },
    ],
  },
  {
    id: ClassID.Mage,
    hexColor: "3FC7EB",
    specs: [
      {
        id: "arcane",
        role: SpecializationRole.MagicDPS,
        buffs: [],
      },
      {
        id: "fire",
        role: SpecializationRole.MagicDPS,
        buffs: [],
      },
      {
        id: "frost",
        role: SpecializationRole.MagicDPS,
        buffs: [],
      },
    ],
  },
  {
    id: ClassID.Paladin,
    hexColor: "F48CBA",
    specs: [
      {
        id: "holy",
        role: SpecializationRole.Healer,
        buffs: [],
      },
      {
        id: "protection",
        role: SpecializationRole.Tank,
        buffs: [],
      },
      {
        id: "retribution",
        role: SpecializationRole.MeleeDPS,
        buffs: [],
      },
    ],
  },
  {
    id: ClassID.Priest,
    hexColor: "FFFFFF",
    specs: [
      {
        id: "discipline",
        role: SpecializationRole.Healer,
        buffs: [],
      },
      {
        id: "holy",
        role: SpecializationRole.Healer,
        buffs: [],
      },
      {
        id: "shadow",
        role: SpecializationRole.MagicDPS,
        buffs: [],
      },
    ],
  },
  {
    id: ClassID.Rogue,
    hexColor: "FFF468",
    specs: [
      {
        id: "assassination",
        role: SpecializationRole.MeleeDPS,
        buffs: [],
      },
      {
        id: "combat",
        role: SpecializationRole.MeleeDPS,
        buffs: [],
      },
      {
        id: "subtlety",
        role: SpecializationRole.MeleeDPS,
        buffs: [],
      },
    ],
  },
  {
    id: ClassID.Shaman,
    hexColor: "0070DD",
    specs: [
      {
        id: "elemental",
        role: SpecializationRole.MagicDPS,
        buffs: [],
      },
      {
        id: "enhancement",
        role: SpecializationRole.MeleeDPS,
        buffs: [],
      },
      {
        id: "restoration",
        role: SpecializationRole.Healer,
        buffs: [],
      },
    ],
  },
  {
    id: ClassID.Warlock,
    hexColor: "8788EE",
    specs: [
      {
        id: "affliction",
        role: SpecializationRole.MagicDPS,
        buffs: [],
      },
      {
        id: "demonology",
        role: SpecializationRole.MagicDPS,
        buffs: [],
      },
      {
        id: "destruction",
        role: SpecializationRole.MagicDPS,
        buffs: [],
      },
    ],
  },
  {
    id: ClassID.Warrior,
    hexColor: "C69B6D",
    specs: [
      {
        id: "arms",
        role: SpecializationRole.MeleeDPS,
        buffs: [],
      },
      {
        id: "fury",
        role: SpecializationRole.MeleeDPS,
        buffs: [],
      },
      {
        id: "protection",
        role: SpecializationRole.Tank,
        buffs: [],
      },
    ],
  },
];

const classesMap = classes.reduce((map, wowClass) => {
  map[wowClass.id] = wowClass;
  return map;
}, {} as { [id: string]: Class });

export const WrathDB: ExpansionDB = {
  id: ExpansionID.WrathOfTheLichKing,
  getAllClasses() {
    return classes;
  },
  getClassByID(classID) {
    return classesMap[classID];
  },
};
