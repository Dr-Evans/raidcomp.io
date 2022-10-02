/*
  Expansion
 */
import { FormattedMessage, MessageDescriptor } from "react-intl";

export interface Expansion {
  id: ExpansionID;
  classes: Class[];
}

export enum ExpansionID {
  Classic = "classic",
  BurningCrusade = "tbc",
  WrathOfTheLichKing = "wrath",
  Cataclysm = "cata",
  MistsOfPandaria = "mop",
  WarlordsOfDraenor = "wod",
  Legion = "legion",
  BattleForAzeroth = "bfa",
  Shadowlands = "sl",
}

const baseClasses = () => [
  getClass(ClassID.Druid),
  getClass(ClassID.Hunter),
  getClass(ClassID.Mage),
  getClass(ClassID.Paladin),
  getClass(ClassID.Priest),
  getClass(ClassID.Rogue),
  getClass(ClassID.Shaman),
  getClass(ClassID.Warlock),
  getClass(ClassID.Warrior),
];

const baseClassesWrath = () => [
  getClass(ClassID.DeathKnight),
  ...baseClasses(),
];

const baseClassesMists = () => [...baseClassesWrath(), getClass(ClassID.Monk)];

const baseClassesLegion = () => [
  ...baseClassesMists(),
  getClass(ClassID.DemonHunter),
];

const expansionDB: { [key: string]: Expansion } = {
  [ExpansionID.Classic]: {
    id: ExpansionID.Classic,
    get classes() {
      return baseClasses();
    },
  },
  [ExpansionID.BurningCrusade]: {
    id: ExpansionID.BurningCrusade,
    get classes() {
      return baseClasses();
    },
  },
  [ExpansionID.WrathOfTheLichKing]: {
    id: ExpansionID.WrathOfTheLichKing,
    get classes() {
      return baseClassesWrath();
    },
  },
  [ExpansionID.Cataclysm]: {
    id: ExpansionID.Cataclysm,
    get classes() {
      return baseClassesWrath();
    },
  },
  [ExpansionID.MistsOfPandaria]: {
    id: ExpansionID.MistsOfPandaria,
    get classes() {
      return baseClassesMists();
    },
  },
  [ExpansionID.WarlordsOfDraenor]: {
    id: ExpansionID.WarlordsOfDraenor,
    get classes() {
      return baseClassesMists();
    },
  },
  [ExpansionID.Legion]: {
    id: ExpansionID.Legion,
    get classes() {
      return baseClassesLegion();
    },
  },
  [ExpansionID.BattleForAzeroth]: {
    id: ExpansionID.BattleForAzeroth,
    get classes() {
      return baseClassesLegion();
    },
  },
  [ExpansionID.Shadowlands]: {
    id: ExpansionID.Shadowlands,
    get classes() {
      return baseClassesLegion();
    },
  },
};

export const getExpansion = (expansionID: ExpansionID) =>
  expansionDB[expansionID];

export const getExpansionID = (expansionIDString: string) => {
  switch (expansionIDString) {
    case "tbc":
      return ExpansionID.BurningCrusade;
    case "wrath":
      return ExpansionID.WrathOfTheLichKing;
    case "cata":
      return ExpansionID.Cataclysm;
    case "wod":
      return ExpansionID.WarlordsOfDraenor;
    case "legion":
      return ExpansionID.Legion;
    case "bfa":
      return ExpansionID.BattleForAzeroth;
    case "sl":
      return ExpansionID.Shadowlands;
    default:
      return ExpansionID.Classic;
  }
};

/*
  Class
 */

export interface Class {
  id: ClassID;
  hexColor: string;
  specs: Specialization[];
}

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

const classDB: { [key: string]: Class } = {
  [ClassID.DeathKnight]: {
    id: ClassID.DeathKnight,
    hexColor: "#C41E3A",
    get specs() {
      return [
        getSpec(SpecializationID.DeathKnightBlood),
        getSpec(SpecializationID.DeathKnightFrost),
        getSpec(SpecializationID.DeathKnightUnholy),
      ];
    },
  },
  [ClassID.DemonHunter]: {
    id: ClassID.DemonHunter,
    hexColor: "#A330C9",
    get specs() {
      return [
        getSpec(SpecializationID.DemonHunterHavoc),
        getSpec(SpecializationID.DemonHunterVengeance),
      ];
    },
  },
  [ClassID.Druid]: {
    id: ClassID.Druid,
    hexColor: "#FF7C0A",
    get specs() {
      return [
        getSpec(SpecializationID.DruidBalance),
        getSpec(SpecializationID.DruidFeralBear),
        getSpec(SpecializationID.DruidFeralCat),
        getSpec(SpecializationID.DruidRestoration),
      ];
    },
  },
  [ClassID.Hunter]: {
    id: ClassID.Hunter,
    hexColor: "#AAD372",
    get specs() {
      return [
        getSpec(SpecializationID.HunterBeastMastery),
        getSpec(SpecializationID.HunterMarksmanship),
        getSpec(SpecializationID.HunterSurvival),
      ];
    },
  },
  [ClassID.Mage]: {
    id: ClassID.Mage,
    hexColor: "#3FC7EB",
    get specs() {
      return [
        getSpec(SpecializationID.MageArcane),
        getSpec(SpecializationID.MageFire),
        getSpec(SpecializationID.MageFrost),
      ];
    },
  },
  [ClassID.Monk]: {
    id: ClassID.Monk,
    hexColor: "#00FF96",
    get specs() {
      return [
        getSpec(SpecializationID.MonkBrewmaster),
        getSpec(SpecializationID.MonkMistweaver),
        getSpec(SpecializationID.MonkWindwalker),
      ];
    },
  },
  [ClassID.Paladin]: {
    id: ClassID.Paladin,
    hexColor: "#F48CBA",
    get specs() {
      return [
        getSpec(SpecializationID.PaladinHoly),
        getSpec(SpecializationID.PaladinProtection),
        getSpec(SpecializationID.PaladinRetribution),
      ];
    },
  },
  [ClassID.Priest]: {
    id: ClassID.Priest,
    hexColor: "#FFFFFF",
    get specs() {
      return [
        getSpec(SpecializationID.PriestDiscipline),
        getSpec(SpecializationID.PriestHoly),
        getSpec(SpecializationID.PriestShadow),
      ];
    },
  },
  [ClassID.Rogue]: {
    id: ClassID.Rogue,
    hexColor: "#FFF468",
    get specs() {
      return [
        getSpec(SpecializationID.RogueAssassination),
        getSpec(SpecializationID.RogueCombat),
        getSpec(SpecializationID.RogueSubtlety),
      ];
    },
  },
  [ClassID.Shaman]: {
    id: ClassID.Shaman,
    hexColor: "#0070DD",
    get specs() {
      return [
        getSpec(SpecializationID.ShamanElemental),
        getSpec(SpecializationID.ShamanEnhancement),
        getSpec(SpecializationID.ShamanRestoration),
      ];
    },
  },
  [ClassID.Warlock]: {
    id: ClassID.Warlock,
    hexColor: "#8788EE",
    get specs() {
      return [
        getSpec(SpecializationID.WarlockAffliction),
        getSpec(SpecializationID.WarlockDemonology),
        getSpec(SpecializationID.WarlockDestruction),
      ];
    },
  },
  [ClassID.Warrior]: {
    id: ClassID.Warrior,
    hexColor: "#C69B6D",
    get specs() {
      return [
        getSpec(SpecializationID.WarriorArms),
        getSpec(SpecializationID.WarriorFury),
        getSpec(SpecializationID.WarriorProtection),
      ];
    },
  },
};

const getClass = (classID: ClassID) => classDB[classID];

export const getClassIconURL = (classID: ClassID) => {
  return `/classes/${classID}/icon.png`;
};

/*
  Specializations
 */
export interface Specialization {
  id: SpecializationID;
  role: SpecializationRole;
  class: Class;
  specName: string;
  buffs: Buff[];
}

export enum SpecializationID {
  DeathKnightBlood = "death-knight-blood",
  DeathKnightFrost = "death-knight-frost",
  DeathKnightUnholy = "death-knight-unholy",
  DemonHunterHavoc = "demon-hunter-havoc",
  DemonHunterVengeance = "demon-hunter-vengeance",
  DruidBalance = "druid-balance",
  DruidFeralBear = "druid-feral-bear",
  DruidFeralCat = "druid-feral-cat",
  DruidRestoration = "druid-restoration",
  HunterBeastMastery = "hunter-beast-mastery",
  HunterMarksmanship = "hunter-marksmanship",
  HunterSurvival = "hunter-survival",
  MageArcane = "mage-arcane",
  MageFire = "mage-fire",
  MageFrost = "mage-frost",
  MonkBrewmaster = "monk-brewmaster",
  MonkMistweaver = "monk-mistweaver",
  MonkWindwalker = "monk-windwalker",
  PaladinHoly = "paladin-holy",
  PaladinProtection = "paladin-protection",
  PaladinRetribution = "paladin-retribution",
  PriestDiscipline = "priest-discipline",
  PriestHoly = "priest-holy",
  PriestShadow = "priest-shadow",
  RogueAssassination = "rogue-assassination",
  RogueCombat = "rogue-combat",
  RogueSubtlety = "rogue-subtlety",
  ShamanElemental = "shaman-elemental",
  ShamanEnhancement = "shaman-enhancement",
  ShamanRestoration = "shaman-restoration",
  WarlockAffliction = "warlock-affliction",
  WarlockDemonology = "warlock-demonology",
  WarlockDestruction = "warlock-destruction",
  WarriorArms = "warrior-arms",
  WarriorFury = "warrior-fury",
  WarriorProtection = "warrior-protection",
}

export enum SpecializationRole {
  Tank,
  MeleeDPS,
  RangedDPS,
  MagicDPS,
  Healer,
}

const specDB: { [key: string]: Specialization } = {
  [SpecializationID.DeathKnightBlood]: {
    id: SpecializationID.DeathKnightBlood,
    get class() {
      return getClass(ClassID.DeathKnight);
    },
    specName: "blood",
    role: SpecializationRole.Tank,
    get buffs() {
      return [getBuff("53138"), getBuff("55610"), getBuff("57623")];
    },
  },
  [SpecializationID.DeathKnightFrost]: {
    id: SpecializationID.DeathKnightFrost,
    get class() {
      return getClass(ClassID.DeathKnight);
    },
    specName: "frost",
    role: SpecializationRole.MeleeDPS,
    buffs: [],
  },
  [SpecializationID.DeathKnightUnholy]: {
    id: SpecializationID.DeathKnightUnholy,
    get class() {
      return getClass(ClassID.DeathKnight);
    },
    specName: "unholy",
    role: SpecializationRole.MeleeDPS,
    buffs: [],
  },
  [SpecializationID.DemonHunterHavoc]: {
    id: SpecializationID.DemonHunterHavoc,
    get class() {
      return getClass(ClassID.DemonHunter);
    },
    specName: "havoc",
    role: SpecializationRole.MeleeDPS,
    buffs: [],
  },
  [SpecializationID.DemonHunterVengeance]: {
    id: SpecializationID.DemonHunterVengeance,
    get class() {
      return getClass(ClassID.DemonHunter);
    },
    specName: "vengeance",
    role: SpecializationRole.Tank,
    buffs: [],
  },
  [SpecializationID.DruidBalance]: {
    id: SpecializationID.DruidBalance,
    get class() {
      return getClass(ClassID.Druid);
    },
    specName: "balance",
    role: SpecializationRole.MagicDPS,
    buffs: [],
  },
  [SpecializationID.DruidFeralBear]: {
    id: SpecializationID.DruidFeralBear,
    get class() {
      return getClass(ClassID.Druid);
    },
    specName: "feral-bear",
    role: SpecializationRole.Tank,
    buffs: [],
  },
  [SpecializationID.DruidFeralCat]: {
    id: SpecializationID.DruidFeralCat,
    get class() {
      return getClass(ClassID.Druid);
    },
    specName: "feral-cat",
    role: SpecializationRole.MeleeDPS,
    buffs: [],
  },
  [SpecializationID.DruidRestoration]: {
    id: SpecializationID.DruidRestoration,
    get class() {
      return getClass(ClassID.Druid);
    },
    specName: "restoration",
    role: SpecializationRole.Healer,
    buffs: [],
  },
  [SpecializationID.HunterBeastMastery]: {
    id: SpecializationID.HunterBeastMastery,
    get class() {
      return getClass(ClassID.Hunter);
    },
    specName: "beast-mastery",
    role: SpecializationRole.RangedDPS,
    buffs: [],
  },
  [SpecializationID.HunterMarksmanship]: {
    id: SpecializationID.HunterMarksmanship,
    get class() {
      return getClass(ClassID.Hunter);
    },
    specName: "marksmanship",
    role: SpecializationRole.RangedDPS,
    buffs: [],
  },
  [SpecializationID.HunterSurvival]: {
    id: SpecializationID.HunterSurvival,
    get class() {
      return getClass(ClassID.Hunter);
    },
    specName: "survival",
    role: SpecializationRole.RangedDPS,
    buffs: [],
  },
  [SpecializationID.MageArcane]: {
    id: SpecializationID.MageArcane,
    get class() {
      return getClass(ClassID.Mage);
    },
    specName: "arcane",
    role: SpecializationRole.MagicDPS,
    buffs: [],
  },
  [SpecializationID.MageFire]: {
    id: SpecializationID.MageFire,
    get class() {
      return getClass(ClassID.Mage);
    },
    specName: "fire",
    role: SpecializationRole.MagicDPS,
    buffs: [],
  },
  [SpecializationID.MageFrost]: {
    id: SpecializationID.MageFrost,
    get class() {
      return getClass(ClassID.Mage);
    },
    specName: "frost",
    role: SpecializationRole.MagicDPS,
    buffs: [],
  },
  [SpecializationID.MonkBrewmaster]: {
    id: SpecializationID.MonkBrewmaster,
    get class() {
      return getClass(ClassID.Monk);
    },
    specName: "brewmaster",
    role: SpecializationRole.Tank,
    buffs: [],
  },
  [SpecializationID.MonkMistweaver]: {
    id: SpecializationID.MonkMistweaver,
    get class() {
      return getClass(ClassID.Monk);
    },
    specName: "mistweaver",
    role: SpecializationRole.Healer,
    buffs: [],
  },
  [SpecializationID.MonkWindwalker]: {
    id: SpecializationID.MonkWindwalker,
    get class() {
      return getClass(ClassID.Monk);
    },
    specName: "windwalker",
    role: SpecializationRole.MeleeDPS,
    buffs: [],
  },
  [SpecializationID.PaladinHoly]: {
    id: SpecializationID.PaladinHoly,
    get class() {
      return getClass(ClassID.Paladin);
    },
    specName: "holy",
    role: SpecializationRole.Healer,
    buffs: [],
  },
  [SpecializationID.PaladinProtection]: {
    id: SpecializationID.PaladinProtection,
    get class() {
      return getClass(ClassID.Paladin);
    },
    specName: "protection",
    role: SpecializationRole.Tank,
    buffs: [],
  },
  [SpecializationID.PaladinRetribution]: {
    id: SpecializationID.PaladinRetribution,
    get class() {
      return getClass(ClassID.Paladin);
    },
    specName: "retribution",
    role: SpecializationRole.MeleeDPS,
    buffs: [],
  },
  [SpecializationID.PriestDiscipline]: {
    id: SpecializationID.PriestDiscipline,
    get class() {
      return getClass(ClassID.Priest);
    },
    specName: "discipline",
    role: SpecializationRole.Healer,
    buffs: [],
  },
  [SpecializationID.PriestHoly]: {
    id: SpecializationID.PriestHoly,
    get class() {
      return getClass(ClassID.Priest);
    },
    specName: "holy",
    role: SpecializationRole.Healer,
    buffs: [],
  },
  [SpecializationID.PriestShadow]: {
    id: SpecializationID.PriestShadow,
    get class() {
      return getClass(ClassID.Priest);
    },
    specName: "shadow",
    role: SpecializationRole.MagicDPS,
    buffs: [],
  },
  [SpecializationID.RogueAssassination]: {
    id: SpecializationID.RogueAssassination,
    get class() {
      return getClass(ClassID.Rogue);
    },
    specName: "assassination",
    role: SpecializationRole.MeleeDPS,
    buffs: [],
  },
  [SpecializationID.RogueCombat]: {
    id: SpecializationID.RogueCombat,
    get class() {
      return getClass(ClassID.Rogue);
    },
    specName: "combat",
    role: SpecializationRole.MeleeDPS,
    buffs: [],
  },
  [SpecializationID.RogueSubtlety]: {
    id: SpecializationID.RogueSubtlety,
    get class() {
      return getClass(ClassID.Rogue);
    },
    specName: "subtlety",
    role: SpecializationRole.MeleeDPS,
    buffs: [],
  },
  [SpecializationID.ShamanElemental]: {
    id: SpecializationID.ShamanElemental,
    get class() {
      return getClass(ClassID.Shaman);
    },
    specName: "elemental",
    role: SpecializationRole.MagicDPS,
    buffs: [],
  },
  [SpecializationID.ShamanEnhancement]: {
    id: SpecializationID.ShamanEnhancement,
    get class() {
      return getClass(ClassID.Shaman);
    },
    specName: "enhancement",
    role: SpecializationRole.MeleeDPS,
    buffs: [],
  },
  [SpecializationID.ShamanRestoration]: {
    id: SpecializationID.ShamanRestoration,
    get class() {
      return getClass(ClassID.Shaman);
    },
    specName: "restoration",
    role: SpecializationRole.Healer,
    buffs: [],
  },
  [SpecializationID.WarlockAffliction]: {
    id: SpecializationID.WarlockAffliction,
    get class() {
      return getClass(ClassID.Warlock);
    },
    specName: "affliction",
    role: SpecializationRole.MagicDPS,
    buffs: [],
  },
  [SpecializationID.WarlockDemonology]: {
    id: SpecializationID.WarlockDemonology,
    get class() {
      return getClass(ClassID.Warlock);
    },
    specName: "demonology",
    role: SpecializationRole.MagicDPS,
    buffs: [],
  },
  [SpecializationID.WarlockDestruction]: {
    id: SpecializationID.WarlockDestruction,
    get class() {
      return getClass(ClassID.Warlock);
    },
    specName: "destruction",
    role: SpecializationRole.MagicDPS,
    buffs: [],
  },
  [SpecializationID.WarriorArms]: {
    id: SpecializationID.WarriorArms,
    get class() {
      return getClass(ClassID.Warrior);
    },
    specName: "arms",
    role: SpecializationRole.MeleeDPS,
    buffs: [],
  },
  [SpecializationID.WarriorFury]: {
    id: SpecializationID.WarriorFury,
    get class() {
      return getClass(ClassID.Warrior);
    },
    specName: "fury",
    role: SpecializationRole.MeleeDPS,
    buffs: [],
  },
  [SpecializationID.WarriorProtection]: {
    id: SpecializationID.WarriorProtection,
    get class() {
      return getClass(ClassID.Warrior);
    },
    specName: "protection",
    role: SpecializationRole.Tank,
    buffs: [],
  },
};

const getSpec = (specID: SpecializationID) => specDB[specID];

export const getSpecializationIDText = (specID: SpecializationID) => {
  let messageDescriptor: MessageDescriptor = {};

  switch (specID) {
    case SpecializationID.DeathKnightBlood:
      messageDescriptor = {
        description: "Specialization name for Blood Death Knights",
        defaultMessage: "Blood",
      };

      break;
    case SpecializationID.DeathKnightFrost:
      messageDescriptor = {
        description: "Specialization name for Frost Death Knights",
        defaultMessage: "Frost",
      };

      break;
    case SpecializationID.DeathKnightUnholy:
      messageDescriptor = {
        description: "Specialization name for Unholy Death Knights",
        defaultMessage: "Unholy",
      };

      break;
    case SpecializationID.DruidBalance:
      messageDescriptor = {
        description: "Specialization name for Balance Druids",
        defaultMessage: "Balance",
      };

      break;
    case SpecializationID.DruidFeralBear:
      messageDescriptor = {
        description: "Specialization name for Feral Druids focusing on tanking",
        defaultMessage: "Feral (🐻)",
      };

      break;
    case SpecializationID.DruidFeralCat:
      messageDescriptor = {
        description: "Specialization name for Feral Druids focusing on dps",
        defaultMessage: "Feral (🐱)",
      };

      break;
    case SpecializationID.DruidRestoration:
      messageDescriptor = {
        description: "Specialization name for Restoration Druids",
        defaultMessage: "Restoration",
      };

      break;
    case SpecializationID.HunterBeastMastery:
      messageDescriptor = {
        description: "Specialization name for Beast Mastery Hunters",
        defaultMessage: "Beast Mastery",
      };

      break;
    case SpecializationID.HunterMarksmanship:
      messageDescriptor = {
        description: "Specialization name for Marksmanship Hunters",
        defaultMessage: "Marksmanship",
      };

      break;
    case SpecializationID.HunterSurvival:
      messageDescriptor = {
        description: "Specialization name for Survival Hunters",
        defaultMessage: "Survival",
      };

      break;
    case SpecializationID.MageArcane:
      messageDescriptor = {
        description: "Specialization name for Arcane Mage",
        defaultMessage: "Arcane",
      };

      break;
    case SpecializationID.MageFire:
      messageDescriptor = {
        description: "Specialization name for Fire Mage",
        defaultMessage: "Fire",
      };

      break;
    case SpecializationID.MageFrost:
      messageDescriptor = {
        description: "Specialization name for Frost Mage",
        defaultMessage: "Frost",
      };

      break;
    case SpecializationID.PaladinHoly:
      messageDescriptor = {
        description: "Specialization name for Holy Paladin",
        defaultMessage: "Holy",
      };

      break;
    case SpecializationID.PaladinProtection:
      messageDescriptor = {
        description: "Specialization name for Protection Paladin",
        defaultMessage: "Protection",
      };

      break;
    case SpecializationID.PaladinRetribution:
      messageDescriptor = {
        description: "Specialization name for Retribution Paladin",
        defaultMessage: "Retribution",
      };

      break;
    case SpecializationID.PriestDiscipline:
      messageDescriptor = {
        description: "Specialization name for Discipline Priest",
        defaultMessage: "Discipline",
      };

      break;
    case SpecializationID.PriestHoly:
      messageDescriptor = {
        description: "Specialization name for Holy Priest",
        defaultMessage: "Holy",
      };

      break;
    case SpecializationID.PriestShadow:
      messageDescriptor = {
        description: "Specialization name for Shadow Priest",
        defaultMessage: "Shadow",
      };

      break;
    case SpecializationID.RogueAssassination:
      messageDescriptor = {
        description: "Specialization name for Assassination Rogue",
        defaultMessage: "Assassination",
      };

      break;
    case SpecializationID.RogueCombat:
      messageDescriptor = {
        description: "Specialization name for Combat Rogue",
        defaultMessage: "Combat",
      };

      break;
    case SpecializationID.RogueSubtlety:
      messageDescriptor = {
        description: "Specialization name for Subtlety Rogue",
        defaultMessage: "Subtlety",
      };

      break;
    case SpecializationID.ShamanElemental:
      messageDescriptor = {
        description: "Specialization name for Elemental Shaman",
        defaultMessage: "Elemental",
      };

      break;
    case SpecializationID.ShamanEnhancement:
      messageDescriptor = {
        description: "Specialization name for Enhancement Shaman",
        defaultMessage: "Enhancement",
      };

      break;
    case SpecializationID.ShamanRestoration:
      messageDescriptor = {
        description: "Specialization name for Restoration Shaman",
        defaultMessage: "Restoration",
      };

      break;
    case SpecializationID.WarlockAffliction:
      messageDescriptor = {
        description: "Specialization name for Affliction Warlock",
        defaultMessage: "Affliction",
      };

      break;
    case SpecializationID.WarlockDemonology:
      messageDescriptor = {
        description: "Specialization name for Demonology Warlock",
        defaultMessage: "Demonology",
      };

      break;
    case SpecializationID.WarlockDestruction:
      messageDescriptor = {
        description: "Specialization name for Destruction Warlock",
        defaultMessage: "Destruction",
      };

      break;
    case SpecializationID.WarriorArms:
      messageDescriptor = {
        description: "Specialization name for Arms Warrior",
        defaultMessage: "Arms",
      };

      break;
    case SpecializationID.WarriorFury:
      messageDescriptor = {
        description: "Specialization name for Fury Warrior",
        defaultMessage: "Fury",
      };

      break;
    case SpecializationID.WarriorProtection:
      messageDescriptor = {
        description: "Specialization name for Protection Warrior",
        defaultMessage: "Protection",
      };

      break;
  }

  return <FormattedMessage id={specID} {...messageDescriptor} />;
};

export const getSpecIconURL = (spec: Specialization) => {
  return `/classes/${spec.class.id}/specs/${spec.specName}/icon.png`;
};

/*
  Buff
 */
export enum BuffType {
  RaidBuff,
  SinglePlayerBuff,
  Debuff,
}

export enum BuffSubType {
  Heroism,
  BlessingOfKings,
  SpellPower,
  Haste,
  SpellHaste,
  SpellCrit,
  AttackPower,
  GiftOfTheWild,
  PhysicalCrit,
  MeleeHaste,
  Health,
  StrengthAndAgility,
  TenPercentAttackPower,
  Damage,
  Spirit,
  Healing,
  Intellect,
  Stamina,
}

export interface Buff {
  id: string;
  type: BuffType;
  subType: BuffSubType;
  class: Class;
  expansion: Expansion;
}

export type BuffID = "53138" | "55610" | "57623";

const buffDB: { [key: string]: Buff } = {
  "53138": {
    id: "53138",
    type: BuffType.RaidBuff,
    subType: BuffSubType.TenPercentAttackPower,
    get class() {
      return getClass(ClassID.DeathKnight);
    },
    get expansion() {
      return getExpansion(ExpansionID.WrathOfTheLichKing);
    },
  },
  "55610": {
    id: "55610",
    type: BuffType.RaidBuff,
    subType: BuffSubType.MeleeHaste,
    get class() {
      return getClass(ClassID.DeathKnight);
    },
    get expansion() {
      return getExpansion(ExpansionID.WrathOfTheLichKing);
    },
  },
  "57623": {
    id: "57623",
    type: BuffType.RaidBuff,
    subType: BuffSubType.StrengthAndAgility,
    get class() {
      return getClass(ClassID.DeathKnight);
    },
    get expansion() {
      return getExpansion(ExpansionID.WrathOfTheLichKing);
    },
  },
};

const getBuff = (buffID: BuffID) => buffDB[buffID];
