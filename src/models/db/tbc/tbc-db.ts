import { Class, ClassID, ExpansionID, SpecializationRole } from "../../index";
import { ExpansionDB } from "../db";
import { createTheme, ThemeOptions } from "@mui/material";

const classes: Class[] = [
  {
    id: ClassID.Druid,
    hexColor: "#FF7C0A",
    specs: [
      {
        id: "balance",
        classID: ClassID.Druid,
        role: SpecializationRole.MagicDPS,
        buffs: [],
      },
      {
        id: "feral-bear",
        classID: ClassID.Druid,
        role: SpecializationRole.Tank,
        buffs: [],
      },
      {
        id: "feral-cat",
        classID: ClassID.Druid,

        role: SpecializationRole.MeleeDPS,
        buffs: [],
      },
      {
        id: "restoration",
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
        id: "beast-mastery",
        classID: ClassID.Hunter,

        role: SpecializationRole.RangedDPS,
        buffs: [],
      },
      {
        id: "marksmanship",
        classID: ClassID.Hunter,

        role: SpecializationRole.RangedDPS,
        buffs: [],
      },
      {
        id: "survival",
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
        id: "arcane",
        classID: ClassID.Mage,

        role: SpecializationRole.MagicDPS,
        buffs: [],
      },
      {
        id: "fire",

        classID: ClassID.Mage,
        role: SpecializationRole.MagicDPS,
        buffs: [],
      },
      {
        id: "frost",

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
        id: "holy",
        classID: ClassID.Paladin,
        role: SpecializationRole.Healer,
        buffs: [],
      },
      {
        id: "protection",
        classID: ClassID.Paladin,

        role: SpecializationRole.Tank,
        buffs: [],
      },
      {
        id: "retribution",
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
        id: "discipline",
        classID: ClassID.Priest,
        role: SpecializationRole.Healer,
        buffs: [],
      },
      {
        id: "holy",
        classID: ClassID.Priest,

        role: SpecializationRole.Healer,
        buffs: [],
      },
      {
        id: "shadow",
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
        id: "assassination",
        classID: ClassID.Rogue,

        role: SpecializationRole.MeleeDPS,
        buffs: [],
      },
      {
        id: "combat",
        classID: ClassID.Rogue,

        role: SpecializationRole.MeleeDPS,
        buffs: [],
      },
      {
        id: "subtlety",
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
        id: "elemental",
        classID: ClassID.Shaman,

        role: SpecializationRole.MagicDPS,
        buffs: [],
      },
      {
        id: "enhancement",
        classID: ClassID.Shaman,

        role: SpecializationRole.MeleeDPS,
        buffs: [],
      },
      {
        id: "restoration",
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
        id: "affliction",
        classID: ClassID.Warlock,

        role: SpecializationRole.MagicDPS,
        buffs: [],
      },
      {
        id: "demonology",
        classID: ClassID.Warlock,

        role: SpecializationRole.MagicDPS,
        buffs: [],
      },
      {
        id: "destruction",
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
        id: "arms",
        classID: ClassID.Warrior,
        role: SpecializationRole.MeleeDPS,
        buffs: [],
      },
      {
        id: "fury",
        classID: ClassID.Warrior,

        role: SpecializationRole.MeleeDPS,
        buffs: [],
      },
      {
        id: "protection",
        classID: ClassID.Warrior,

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

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#818c59",
    },
    secondary: {
      main: "#C7934D",
    },
  },
};

export const TBCDB: ExpansionDB = {
  id: ExpansionID.BurningCrusade,
  getAllClasses() {
    return classes;
  },
  getClassByID(classID) {
    return classesMap[classID];
  },
  theme: createTheme(themeOptions),
};
