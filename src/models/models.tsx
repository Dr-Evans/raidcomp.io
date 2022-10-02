/*eslint-disable @typescript-eslint/no-use-before-define*/
import { FormattedMessage, MessageDescriptor } from "react-intl";

/*
  Expansion
 */
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

const compare = (e1?: ExpansionID, e2?: ExpansionID) => {
  const e1Index = Object.values(ExpansionID).findIndex((e) => e === e1);
  const e2Index = Object.values(ExpansionID).findIndex((e) => e === e2);

  return e2Index - e1Index;
};

const baseClasses = (expansionID: ExpansionID) => [
  getClass(expansionID, ClassID.Druid),
  getClass(expansionID, ClassID.Hunter),
  getClass(expansionID, ClassID.Mage),
  getClass(expansionID, ClassID.Paladin),
  getClass(expansionID, ClassID.Priest),
  getClass(expansionID, ClassID.Rogue),
  getClass(expansionID, ClassID.Shaman),
  getClass(expansionID, ClassID.Warlock),
  getClass(expansionID, ClassID.Warrior),
];

const baseClassesWrath = (expansionID: ExpansionID) => [
  getClass(expansionID, ClassID.DeathKnight),
  ...baseClasses(expansionID),
];

const baseClassesMists = (expansionID: ExpansionID) => [
  ...baseClassesWrath(expansionID),
  getClass(expansionID, ClassID.Monk),
];

const baseClassesLegion = (expansionID: ExpansionID) => [
  ...baseClassesMists(expansionID),
  getClass(expansionID, ClassID.DemonHunter),
];

const expansionDB: (expansionID: ExpansionID) => { [key: string]: Expansion } =
  (expansionID) => ({
    [ExpansionID.Classic]: {
      id: ExpansionID.Classic,
      get classes() {
        return baseClasses(expansionID);
      },
    },
    [ExpansionID.BurningCrusade]: {
      id: ExpansionID.BurningCrusade,
      get classes() {
        return baseClasses(expansionID);
      },
    },
    [ExpansionID.WrathOfTheLichKing]: {
      id: ExpansionID.WrathOfTheLichKing,
      get classes() {
        return baseClassesWrath(expansionID);
      },
    },
    [ExpansionID.Cataclysm]: {
      id: ExpansionID.Cataclysm,
      get classes() {
        return baseClassesWrath(expansionID);
      },
    },
    [ExpansionID.MistsOfPandaria]: {
      id: ExpansionID.MistsOfPandaria,
      get classes() {
        return baseClassesMists(expansionID);
      },
    },
    [ExpansionID.WarlordsOfDraenor]: {
      id: ExpansionID.WarlordsOfDraenor,
      get classes() {
        return baseClassesMists(expansionID);
      },
    },
    [ExpansionID.Legion]: {
      id: ExpansionID.Legion,
      get classes() {
        return baseClassesLegion(expansionID);
      },
    },
    [ExpansionID.BattleForAzeroth]: {
      id: ExpansionID.BattleForAzeroth,
      get classes() {
        return baseClassesLegion(expansionID);
      },
    },
    [ExpansionID.Shadowlands]: {
      id: ExpansionID.Shadowlands,
      get classes() {
        return baseClassesLegion(expansionID);
      },
    },
  });

export const getExpansion = (expansionID: ExpansionID) =>
  expansionDB(expansionID)[expansionID];

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
}

const classDB: (expansionID: ExpansionID) => { [key: string]: Class } = (
  expansionID
) => ({
  [ClassID.DeathKnight]: {
    id: ClassID.DeathKnight,
    hexColor: "#C41E3A",
    get specs() {
      return [
        getSpec(expansionID, SpecializationID.DeathKnightBlood),
        getSpec(expansionID, SpecializationID.DeathKnightFrost),
        getSpec(expansionID, SpecializationID.DeathKnightUnholy),
      ];
    },
  },
  [ClassID.DemonHunter]: {
    id: ClassID.DemonHunter,
    hexColor: "#A330C9",
    get specs() {
      return [
        getSpec(expansionID, SpecializationID.DemonHunterHavoc),
        getSpec(expansionID, SpecializationID.DemonHunterVengeance),
      ];
    },
  },
  [ClassID.Druid]: {
    id: ClassID.Druid,
    hexColor: "#FF7C0A",
    get specs() {
      return [
        getSpec(expansionID, SpecializationID.DruidBalance),
        getSpec(expansionID, SpecializationID.DruidFeralBear),
        getSpec(expansionID, SpecializationID.DruidFeralCat),
        getSpec(expansionID, SpecializationID.DruidRestoration),
      ];
    },
  },
  [ClassID.Hunter]: {
    id: ClassID.Hunter,
    hexColor: "#AAD372",
    get specs() {
      return [
        getSpec(expansionID, SpecializationID.HunterBeastMastery),
        getSpec(expansionID, SpecializationID.HunterMarksmanship),
        getSpec(expansionID, SpecializationID.HunterSurvival),
      ];
    },
  },
  [ClassID.Mage]: {
    id: ClassID.Mage,
    hexColor: "#3FC7EB",
    get specs() {
      return [
        getSpec(expansionID, SpecializationID.MageArcane),
        getSpec(expansionID, SpecializationID.MageFire),
        getSpec(expansionID, SpecializationID.MageFrost),
      ];
    },
  },
  [ClassID.Monk]: {
    id: ClassID.Monk,
    hexColor: "#00FF96",
    get specs() {
      return [
        getSpec(expansionID, SpecializationID.MonkBrewmaster),
        getSpec(expansionID, SpecializationID.MonkMistweaver),
        getSpec(expansionID, SpecializationID.MonkWindwalker),
      ];
    },
  },
  [ClassID.Paladin]: {
    id: ClassID.Paladin,
    hexColor: "#F48CBA",
    get specs() {
      return [
        getSpec(expansionID, SpecializationID.PaladinHoly),
        getSpec(expansionID, SpecializationID.PaladinProtection),
        getSpec(expansionID, SpecializationID.PaladinRetribution),
      ];
    },
  },
  [ClassID.Priest]: {
    id: ClassID.Priest,
    hexColor: "#FFFFFF",
    get specs() {
      return [
        getSpec(expansionID, SpecializationID.PriestDiscipline),
        getSpec(expansionID, SpecializationID.PriestHoly),
        getSpec(expansionID, SpecializationID.PriestShadow),
      ];
    },
  },
  [ClassID.Rogue]: {
    id: ClassID.Rogue,
    hexColor: "#FFF468",
    get specs() {
      return [
        getSpec(expansionID, SpecializationID.RogueAssassination),
        compare(ExpansionID.Legion, expansionID) >= 0
          ? getSpec(expansionID, SpecializationID.RogueOutlaw)
          : getSpec(expansionID, SpecializationID.RogueCombat),
        getSpec(expansionID, SpecializationID.RogueSubtlety),
      ];
    },
  },
  [ClassID.Shaman]: {
    id: ClassID.Shaman,
    hexColor: "#0070DD",
    get specs() {
      return [
        getSpec(expansionID, SpecializationID.ShamanElemental),
        getSpec(expansionID, SpecializationID.ShamanEnhancement),
        getSpec(expansionID, SpecializationID.ShamanRestoration),
      ];
    },
  },
  [ClassID.Warlock]: {
    id: ClassID.Warlock,
    hexColor: "#8788EE",
    get specs() {
      return [
        getSpec(expansionID, SpecializationID.WarlockAffliction),
        getSpec(expansionID, SpecializationID.WarlockDemonology),
        getSpec(expansionID, SpecializationID.WarlockDestruction),
      ];
    },
  },
  [ClassID.Warrior]: {
    id: ClassID.Warrior,
    hexColor: "#C69B6D",
    get specs() {
      return [
        getSpec(expansionID, SpecializationID.WarriorArms),
        getSpec(expansionID, SpecializationID.WarriorFury),
        getSpec(expansionID, SpecializationID.WarriorProtection),
      ];
    },
  },
});

const getClass = (expansionID: ExpansionID, classID: ClassID) =>
  classDB(expansionID)[classID];

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
  name: string;
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
  RogueOutlaw = "rogue-outlaw",
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

const specDB: (expansionID: ExpansionID) => { [key: string]: Specialization } =
  (expansionID) => ({
    [SpecializationID.DeathKnightBlood]: {
      id: SpecializationID.DeathKnightBlood,
      get class() {
        return getClass(expansionID, ClassID.DeathKnight);
      },
      name: "blood",
      role: SpecializationRole.Tank,
      get buffs() {
        return [
          getBuff(expansionID, "53138"),
          getBuff(expansionID, "55610"),
          getBuff(expansionID, "57623"),
        ];
      },
    },
    [SpecializationID.DeathKnightFrost]: {
      id: SpecializationID.DeathKnightFrost,
      get class() {
        return getClass(expansionID, ClassID.DeathKnight);
      },
      name: "frost",
      role: SpecializationRole.MeleeDPS,
      get buffs() {
        return [];
      },
    },
    [SpecializationID.DeathKnightUnholy]: {
      id: SpecializationID.DeathKnightUnholy,
      get class() {
        return getClass(expansionID, ClassID.DeathKnight);
      },
      name: "unholy",
      role: SpecializationRole.MeleeDPS,
      buffs: [],
    },
    [SpecializationID.DemonHunterHavoc]: {
      id: SpecializationID.DemonHunterHavoc,
      get class() {
        return getClass(expansionID, ClassID.DemonHunter);
      },
      name: "havoc",
      role: SpecializationRole.MeleeDPS,
      buffs: [],
    },
    [SpecializationID.DemonHunterVengeance]: {
      id: SpecializationID.DemonHunterVengeance,
      get class() {
        return getClass(expansionID, ClassID.DemonHunter);
      },
      name: "vengeance",
      role: SpecializationRole.Tank,
      buffs: [],
    },
    [SpecializationID.DruidBalance]: {
      id: SpecializationID.DruidBalance,
      get class() {
        return getClass(expansionID, ClassID.Druid);
      },
      name: "balance",
      role: SpecializationRole.MagicDPS,
      buffs: [],
    },
    [SpecializationID.DruidFeralBear]: {
      id: SpecializationID.DruidFeralBear,
      get class() {
        return getClass(expansionID, ClassID.Druid);
      },
      name: "feral-bear",
      role: SpecializationRole.Tank,
      buffs: [],
    },
    [SpecializationID.DruidFeralCat]: {
      id: SpecializationID.DruidFeralCat,
      get class() {
        return getClass(expansionID, ClassID.Druid);
      },
      name: "feral-cat",
      role: SpecializationRole.MeleeDPS,
      buffs: [],
    },
    [SpecializationID.DruidRestoration]: {
      id: SpecializationID.DruidRestoration,
      get class() {
        return getClass(expansionID, ClassID.Druid);
      },
      name: "restoration",
      role: SpecializationRole.Healer,
      buffs: [],
    },
    [SpecializationID.HunterBeastMastery]: {
      id: SpecializationID.HunterBeastMastery,
      get class() {
        return getClass(expansionID, ClassID.Hunter);
      },
      name: "beast-mastery",
      role: SpecializationRole.RangedDPS,
      buffs: [],
    },
    [SpecializationID.HunterMarksmanship]: {
      id: SpecializationID.HunterMarksmanship,
      get class() {
        return getClass(expansionID, ClassID.Hunter);
      },
      name: "marksmanship",
      role: SpecializationRole.RangedDPS,
      buffs: [],
    },
    [SpecializationID.HunterSurvival]: {
      id: SpecializationID.HunterSurvival,
      get class() {
        return getClass(expansionID, ClassID.Hunter);
      },
      name: "survival",
      role: SpecializationRole.RangedDPS,
      buffs: [],
    },
    [SpecializationID.MageArcane]: {
      id: SpecializationID.MageArcane,
      get class() {
        return getClass(expansionID, ClassID.Mage);
      },
      name: "arcane",
      role: SpecializationRole.MagicDPS,
      buffs: [],
    },
    [SpecializationID.MageFire]: {
      id: SpecializationID.MageFire,
      get class() {
        return getClass(expansionID, ClassID.Mage);
      },
      name: "fire",
      role: SpecializationRole.MagicDPS,
      buffs: [],
    },
    [SpecializationID.MageFrost]: {
      id: SpecializationID.MageFrost,
      get class() {
        return getClass(expansionID, ClassID.Mage);
      },
      name: "frost",
      role: SpecializationRole.MagicDPS,
      buffs: [],
    },
    [SpecializationID.MonkBrewmaster]: {
      id: SpecializationID.MonkBrewmaster,
      get class() {
        return getClass(expansionID, ClassID.Monk);
      },
      name: "brewmaster",
      role: SpecializationRole.Tank,
      buffs: [],
    },
    [SpecializationID.MonkMistweaver]: {
      id: SpecializationID.MonkMistweaver,
      get class() {
        return getClass(expansionID, ClassID.Monk);
      },
      name: "mistweaver",
      role: SpecializationRole.Healer,
      buffs: [],
    },
    [SpecializationID.MonkWindwalker]: {
      id: SpecializationID.MonkWindwalker,
      get class() {
        return getClass(expansionID, ClassID.Monk);
      },
      name: "windwalker",
      role: SpecializationRole.MeleeDPS,
      buffs: [],
    },
    [SpecializationID.PaladinHoly]: {
      id: SpecializationID.PaladinHoly,
      get class() {
        return getClass(expansionID, ClassID.Paladin);
      },
      name: "holy",
      role: SpecializationRole.Healer,
      buffs: [],
    },
    [SpecializationID.PaladinProtection]: {
      id: SpecializationID.PaladinProtection,
      get class() {
        return getClass(expansionID, ClassID.Paladin);
      },
      name: "protection",
      role: SpecializationRole.Tank,
      buffs: [],
    },
    [SpecializationID.PaladinRetribution]: {
      id: SpecializationID.PaladinRetribution,
      get class() {
        return getClass(expansionID, ClassID.Paladin);
      },
      name: "retribution",
      role: SpecializationRole.MeleeDPS,
      buffs: [],
    },
    [SpecializationID.PriestDiscipline]: {
      id: SpecializationID.PriestDiscipline,
      get class() {
        return getClass(expansionID, ClassID.Priest);
      },
      name: "discipline",
      role: SpecializationRole.Healer,
      buffs: [],
    },
    [SpecializationID.PriestHoly]: {
      id: SpecializationID.PriestHoly,
      get class() {
        return getClass(expansionID, ClassID.Priest);
      },
      name: "holy",
      role: SpecializationRole.Healer,
      buffs: [],
    },
    [SpecializationID.PriestShadow]: {
      id: SpecializationID.PriestShadow,
      get class() {
        return getClass(expansionID, ClassID.Priest);
      },
      name: "shadow",
      role: SpecializationRole.MagicDPS,
      buffs: [],
    },
    [SpecializationID.RogueAssassination]: {
      id: SpecializationID.RogueAssassination,
      get class() {
        return getClass(expansionID, ClassID.Rogue);
      },
      name: "assassination",
      role: SpecializationRole.MeleeDPS,
      buffs: [],
    },
    [SpecializationID.RogueCombat]: {
      id: SpecializationID.RogueCombat,
      get class() {
        return getClass(expansionID, ClassID.Rogue);
      },
      name: "combat",
      role: SpecializationRole.MeleeDPS,
      buffs: [],
    },
    [SpecializationID.RogueOutlaw]: {
      id: SpecializationID.RogueOutlaw,
      get class() {
        return getClass(expansionID, ClassID.Rogue);
      },
      name: "outlaw",
      role: SpecializationRole.MeleeDPS,
      buffs: [],
    },
    [SpecializationID.RogueSubtlety]: {
      id: SpecializationID.RogueSubtlety,
      get class() {
        return getClass(expansionID, ClassID.Rogue);
      },
      name: "subtlety",
      role: SpecializationRole.MeleeDPS,
      buffs: [],
    },
    [SpecializationID.ShamanElemental]: {
      id: SpecializationID.ShamanElemental,
      get class() {
        return getClass(expansionID, ClassID.Shaman);
      },
      name: "elemental",
      role: SpecializationRole.MagicDPS,
      buffs: [],
    },
    [SpecializationID.ShamanEnhancement]: {
      id: SpecializationID.ShamanEnhancement,
      get class() {
        return getClass(expansionID, ClassID.Shaman);
      },
      name: "enhancement",
      role: SpecializationRole.MeleeDPS,
      buffs: [],
    },
    [SpecializationID.ShamanRestoration]: {
      id: SpecializationID.ShamanRestoration,
      get class() {
        return getClass(expansionID, ClassID.Shaman);
      },
      name: "restoration",
      role: SpecializationRole.Healer,
      buffs: [],
    },
    [SpecializationID.WarlockAffliction]: {
      id: SpecializationID.WarlockAffliction,
      get class() {
        return getClass(expansionID, ClassID.Warlock);
      },
      name: "affliction",
      role: SpecializationRole.MagicDPS,
      buffs: [],
    },
    [SpecializationID.WarlockDemonology]: {
      id: SpecializationID.WarlockDemonology,
      get class() {
        return getClass(expansionID, ClassID.Warlock);
      },
      name: "demonology",
      role: SpecializationRole.MagicDPS,
      buffs: [],
    },
    [SpecializationID.WarlockDestruction]: {
      id: SpecializationID.WarlockDestruction,
      get class() {
        return getClass(expansionID, ClassID.Warlock);
      },
      name: "destruction",
      role: SpecializationRole.MagicDPS,
      buffs: [],
    },
    [SpecializationID.WarriorArms]: {
      id: SpecializationID.WarriorArms,
      get class() {
        return getClass(expansionID, ClassID.Warrior);
      },
      name: "arms",
      role: SpecializationRole.MeleeDPS,
      buffs: [],
    },
    [SpecializationID.WarriorFury]: {
      id: SpecializationID.WarriorFury,
      get class() {
        return getClass(expansionID, ClassID.Warrior);
      },
      name: "fury",
      role: SpecializationRole.MeleeDPS,
      buffs: [],
    },
    [SpecializationID.WarriorProtection]: {
      id: SpecializationID.WarriorProtection,
      get class() {
        return getClass(expansionID, ClassID.Warrior);
      },
      name: "protection",
      role: SpecializationRole.Tank,
      buffs: [],
    },
  });

const getSpec = (expansionID: ExpansionID, specID: SpecializationID) =>
  specDB(expansionID)[specID];

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
  return `/classes/${spec.class.id}/specs/${spec.name}/icon.png`;
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
  name: string;
  type: BuffType;
  subType: BuffSubType;
  class: Class;
  expansion: Expansion;
}

export type BuffID = "53138" | "55610" | "57623";

const buffDB: (expansionID: ExpansionID) => { [key: string]: Buff } = (
  expansionID
) => ({
  "53138": {
    id: "53138",
    name: "Abomination's Might",
    type: BuffType.RaidBuff,
    subType: BuffSubType.TenPercentAttackPower,
    get class() {
      return getClass(expansionID, ClassID.DeathKnight);
    },
    get expansion() {
      return getExpansion(ExpansionID.WrathOfTheLichKing);
    },
  },
  "55610": {
    id: "55610",
    name: "Improved Icy Talons",
    type: BuffType.RaidBuff,
    subType: BuffSubType.MeleeHaste,
    get class() {
      return getClass(expansionID, ClassID.DeathKnight);
    },
    get expansion() {
      return getExpansion(ExpansionID.WrathOfTheLichKing);
    },
  },
  "57623": {
    id: "57623",
    name: "Horn of Winter",
    type: BuffType.RaidBuff,
    subType: BuffSubType.StrengthAndAgility,
    get class() {
      return getClass(expansionID, ClassID.DeathKnight);
    },
    get expansion() {
      return getExpansion(ExpansionID.WrathOfTheLichKing);
    },
  },
});

const getBuff = (expansionID: ExpansionID, buffID: BuffID) =>
  buffDB(expansionID)[buffID];
