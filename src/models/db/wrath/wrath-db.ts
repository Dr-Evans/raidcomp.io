import {
  BuffSubType,
  BuffType,
  Class,
  ClassID,
  ExpansionID,
  SpecializationID,
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
        id: SpecializationID.DeathKnightBlood,
        classID: ClassID.DeathKnight,
        specName: "blood",
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
        id: SpecializationID.DeathKnightFrost,
        classID: ClassID.DeathKnight,
        specName: "frost",
        role: SpecializationRole.MeleeDPS,
        buffs: [],
      },
      {
        id: SpecializationID.DeathKnightUnholy,
        classID: ClassID.DeathKnight,
        specName: "unholy",
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
        id: SpecializationID.DruidBalance,
        classID: ClassID.Druid,
        specName: "balance",
        role: SpecializationRole.MagicDPS,
        buffs: [],
      },
      {
        id: SpecializationID.DruidFeralBear,
        classID: ClassID.Druid,
        specName: "feral-bear",
        role: SpecializationRole.Tank,
        buffs: [],
      },
      {
        id: SpecializationID.DruidFeralCat,
        classID: ClassID.Druid,
        specName: "feral-cat",
        role: SpecializationRole.MeleeDPS,
        buffs: [],
      },
      {
        id: SpecializationID.DruidRestoration,
        classID: ClassID.Druid,
        specName: "restoration",
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
        id: SpecializationID.HunterBeastMastery,
        classID: ClassID.Hunter,
        specName: "beast-mastery",
        role: SpecializationRole.RangedDPS,
        buffs: [],
      },
      {
        id: SpecializationID.HunterMarksmanship,
        classID: ClassID.Hunter,
        specName: "marksmanship",
        role: SpecializationRole.RangedDPS,
        buffs: [],
      },
      {
        id: SpecializationID.HunterSurvival,
        classID: ClassID.Hunter,
        specName: "survival",
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
        id: SpecializationID.MageArcane,
        classID: ClassID.Mage,
        specName: "arcane",
        role: SpecializationRole.MagicDPS,
        buffs: [],
      },
      {
        id: SpecializationID.MageFire,
        classID: ClassID.Mage,
        specName: "fire",
        role: SpecializationRole.MagicDPS,
        buffs: [],
      },
      {
        id: SpecializationID.MageFrost,
        classID: ClassID.Mage,
        specName: "frost",
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
        id: SpecializationID.PaladinHoly,
        classID: ClassID.Paladin,
        specName: "holy",
        role: SpecializationRole.Healer,
        buffs: [],
      },
      {
        id: SpecializationID.PaladinProtection,
        classID: ClassID.Paladin,
        specName: "protection",
        role: SpecializationRole.Tank,
        buffs: [],
      },
      {
        id: SpecializationID.PaladinRetribution,
        classID: ClassID.Paladin,
        specName: "retribution",
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
        id: SpecializationID.PriestDiscipline,
        classID: ClassID.Priest,
        specName: "discipline",
        role: SpecializationRole.Healer,
        buffs: [],
      },
      {
        id: SpecializationID.PriestHoly,
        classID: ClassID.Priest,
        specName: "holy",
        role: SpecializationRole.Healer,
        buffs: [],
      },
      {
        id: SpecializationID.PriestShadow,
        classID: ClassID.Priest,
        specName: "shadow",
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
        id: SpecializationID.RogueAssassination,
        classID: ClassID.Rogue,
        specName: "assassination",
        role: SpecializationRole.MeleeDPS,
        buffs: [],
      },
      {
        id: SpecializationID.RogueCombat,
        classID: ClassID.Rogue,
        specName: "combat",
        role: SpecializationRole.MeleeDPS,
        buffs: [],
      },
      {
        id: SpecializationID.RogueSubtlety,
        classID: ClassID.Rogue,
        specName: "subtlety",
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
        id: SpecializationID.ShamanElemental,
        classID: ClassID.Shaman,
        specName: "elemental",
        role: SpecializationRole.MagicDPS,
        buffs: [],
      },
      {
        id: SpecializationID.ShamanEnhancement,
        classID: ClassID.Shaman,
        specName: "enhancement",
        role: SpecializationRole.MeleeDPS,
        buffs: [],
      },
      {
        id: SpecializationID.ShamanRestoration,
        classID: ClassID.Shaman,
        specName: "restoration",
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
        id: SpecializationID.WarlockAffliction,
        classID: ClassID.Warlock,
        specName: "affliction",
        role: SpecializationRole.MagicDPS,
        buffs: [],
      },
      {
        id: SpecializationID.WarlockDemonology,
        classID: ClassID.Warlock,
        specName: "demonology",
        role: SpecializationRole.MagicDPS,
        buffs: [],
      },
      {
        id: SpecializationID.WarlockDestruction,
        classID: ClassID.Warlock,
        specName: "destruction",
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
        id: SpecializationID.WarriorArms,
        classID: ClassID.Warrior,
        specName: "arms",
        role: SpecializationRole.MeleeDPS,
        buffs: [],
      },
      {
        id: SpecializationID.WarriorFury,
        classID: ClassID.Warrior,
        specName: "fury",
        role: SpecializationRole.MeleeDPS,
        buffs: [],
      },
      {
        id: SpecializationID.WarriorProtection,
        classID: ClassID.Warrior,
        specName: "protection",
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
