import {
  BuffSubType,
  BuffType,
  Class,
  ClassID,
  ExpansionID,
  SpecializationRole,
} from "../../index";
import { ExpansionDB } from "../db";
import { createTheme, ThemeOptions } from "@mui/material";

const classes: Class[] = [
  {
    id: ClassID.DeathKnight,
    hexColor: "#C41E3A",
    specs: [
      {
        id: "death-knight-blood",
        classID: ClassID.DeathKnight,
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
        id: "death-knight-frost",
        classID: ClassID.DeathKnight,
        role: SpecializationRole.MeleeDPS,
        buffs: [],
      },
      {
        id: "death-knight-unholy",
        classID: ClassID.DeathKnight,
        role: SpecializationRole.MeleeDPS,
        buffs: [],
      },
    ],
  },
  {
    id: ClassID.Druid,
    hexColor: "#FF7C0A",
    specs: [
      {
        id: "druid-balance",
        classID: ClassID.Druid,
        role: SpecializationRole.MagicDPS,
        buffs: [],
      },
      {
        id: "druid-feral-bear",
        classID: ClassID.Druid,
        role: SpecializationRole.Tank,
        buffs: [],
      },
      {
        id: "druid-feral-cat",
        classID: ClassID.Druid,

        role: SpecializationRole.MeleeDPS,
        buffs: [],
      },
      {
        id: "druid-restoration",
        classID: ClassID.Druid,

        role: SpecializationRole.Healer,
        buffs: [],
      },
    ],
  },
  {
    id: ClassID.Hunter,
    hexColor: "#AAD372",
    specs: [
      {
        id: "hunter-beast-mastery",
        classID: ClassID.Hunter,

        role: SpecializationRole.RangedDPS,
        buffs: [],
      },
      {
        id: "hunter-marksmanship",
        classID: ClassID.Hunter,

        role: SpecializationRole.RangedDPS,
        buffs: [],
      },
      {
        id: "hunter-survival",
        classID: ClassID.Hunter,

        role: SpecializationRole.RangedDPS,
        buffs: [],
      },
    ],
  },
  {
    id: ClassID.Mage,
    hexColor: "#3FC7EB",
    specs: [
      {
        id: "mage-arcane",
        classID: ClassID.Mage,

        role: SpecializationRole.MagicDPS,
        buffs: [],
      },
      {
        id: "mage-fire",

        classID: ClassID.Mage,
        role: SpecializationRole.MagicDPS,
        buffs: [],
      },
      {
        id: "mage-frost",

        classID: ClassID.Mage,
        role: SpecializationRole.MagicDPS,
        buffs: [],
      },
    ],
  },
  {
    id: ClassID.Paladin,
    hexColor: "#F48CBA",
    specs: [
      {
        id: "paladin-holy",
        classID: ClassID.Paladin,
        role: SpecializationRole.Healer,
        buffs: [],
      },
      {
        id: "paladin-protection",
        classID: ClassID.Paladin,

        role: SpecializationRole.Tank,
        buffs: [],
      },
      {
        id: "paladin-retribution",
        classID: ClassID.Paladin,

        role: SpecializationRole.MeleeDPS,
        buffs: [],
      },
    ],
  },
  {
    id: ClassID.Priest,
    hexColor: "#FFFFFF",
    specs: [
      {
        id: "priest-discipline",
        classID: ClassID.Priest,
        role: SpecializationRole.Healer,
        buffs: [],
      },
      {
        id: "priest-holy",
        classID: ClassID.Priest,

        role: SpecializationRole.Healer,
        buffs: [],
      },
      {
        id: "priest-shadow",
        classID: ClassID.Priest,

        role: SpecializationRole.MagicDPS,
        buffs: [],
      },
    ],
  },
  {
    id: ClassID.Rogue,
    hexColor: "#FFF468",
    specs: [
      {
        id: "rogue-assassination",
        classID: ClassID.Rogue,
        role: SpecializationRole.MeleeDPS,
        buffs: [],
      },
      {
        id: "rogue-combat",
        classID: ClassID.Rogue,
        role: SpecializationRole.MeleeDPS,
        buffs: [],
      },
      {
        id: "rogue-subtlety",
        classID: ClassID.Rogue,

        role: SpecializationRole.MeleeDPS,
        buffs: [],
      },
    ],
  },
  {
    id: ClassID.Shaman,
    hexColor: "#0070DD",
    specs: [
      {
        id: "shaman-elemental",
        classID: ClassID.Shaman,

        role: SpecializationRole.MagicDPS,
        buffs: [],
      },
      {
        id: "shaman-enhancement",
        classID: ClassID.Shaman,

        role: SpecializationRole.MeleeDPS,
        buffs: [],
      },
      {
        id: "shaman-restoration",
        classID: ClassID.Shaman,

        role: SpecializationRole.Healer,
        buffs: [],
      },
    ],
  },
  {
    id: ClassID.Warlock,
    hexColor: "#8788EE",
    specs: [
      {
        id: "warlock-affliction",
        classID: ClassID.Warlock,

        role: SpecializationRole.MagicDPS,
        buffs: [],
      },
      {
        id: "warlock-demonology",
        classID: ClassID.Warlock,

        role: SpecializationRole.MagicDPS,
        buffs: [],
      },
      {
        id: "warlock-destruction",
        classID: ClassID.Warlock,

        role: SpecializationRole.MagicDPS,
        buffs: [],
      },
    ],
  },
  {
    id: ClassID.Warrior,
    hexColor: "#C69B6D",
    specs: [
      {
        id: "warrior-arms",
        classID: ClassID.Warrior,
        role: SpecializationRole.MeleeDPS,
        buffs: [],
      },
      {
        id: "warrior-fury",
        classID: ClassID.Warrior,

        role: SpecializationRole.MeleeDPS,
        buffs: [],
      },
      {
        id: "warrior-protection",
        classID: ClassID.Warrior,

        role: SpecializationRole.Tank,
        buffs: [],
      },
    ],
  },
];

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#628AB9",
    },
    secondary: {
      main: "#85B2CA",
    },
  },
};

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
  theme: createTheme(themeOptions),
};
