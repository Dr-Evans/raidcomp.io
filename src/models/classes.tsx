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
}

export const classes: Class[] = [
  {
    id: ClassID.DeathKnight,
    hexColor: "C41E3A",
    specs: [
      {
        id: "blood",
        role: SpecializationRole.Tank,
      },
      {
        id: "frost",
        role: SpecializationRole.MeleeDPS,
      },
      {
        id: "unholy",
        role: SpecializationRole.MeleeDPS,
      },
    ],
  },
  {
    id: ClassID.DemonHunter,
    hexColor: "A330C9",
    specs: [
      {
        id: "havoc",
        role: SpecializationRole.MeleeDPS,
      },
      {
        id: "vengeance",
        role: SpecializationRole.Tank,
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
      },
      {
        id: "feral-combat",
        role: SpecializationRole.Tank,
      },
      {
        id: "restoration",
        role: SpecializationRole.Healer,
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
      },
      {
        id: "marksmanship",
        role: SpecializationRole.RangedDPS,
      },
      {
        id: "survival",
        role: SpecializationRole.RangedDPS,
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
      },
      {
        id: "fire",
        role: SpecializationRole.MagicDPS,
      },
      {
        id: "frost",
        role: SpecializationRole.MagicDPS,
      },
    ],
  },
  {
    id: ClassID.Monk,
    hexColor: "00FF98",
    specs: [
      {
        id: "brewmaster",
        role: SpecializationRole.Tank,
      },
      {
        id: "mistweaver",
        role: SpecializationRole.Healer,
      },
      {
        id: "windwalker",
        role: SpecializationRole.MeleeDPS,
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
      },
      {
        id: "protection",
        role: SpecializationRole.Tank,
      },
      {
        id: "retribution",
        role: SpecializationRole.MeleeDPS,
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
      },
      {
        id: "holy",
        role: SpecializationRole.Healer,
      },
      {
        id: "shadow",
        role: SpecializationRole.MagicDPS,
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
      },
      {
        id: "combat",
        role: SpecializationRole.MeleeDPS,
      },
      {
        id: "subtlety",
        role: SpecializationRole.MeleeDPS,
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
      },
      {
        id: "enhancement",
        role: SpecializationRole.MeleeDPS,
      },
      {
        id: "restoration",
        role: SpecializationRole.Healer,
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
      },
      {
        id: "demonology",
        role: SpecializationRole.MagicDPS,
      },
      {
        id: "destruction",
        role: SpecializationRole.MagicDPS,
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
      },
      {
        id: "fury",
        role: SpecializationRole.MeleeDPS,
      },
      {
        id: "protection",
        role: SpecializationRole.Tank,
      },
    ],
  },
];

export const classesMap = classes.reduce((map, wowClass) => {
  map[wowClass.id] = wowClass;
  return map;
}, {} as { [id: string]: Class });
