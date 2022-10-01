import { ClassID } from "./classes";
import { FormattedMessage, MessageDescriptor } from "react-intl";
import React from "react";
import { Buff } from "./buffs";

export enum SpecializationID {
  DeathKnightBlood = "death-knight-blood",
  DeathKnightFrost = "death-knight-frost",
  DeathKnightUnholy = "death-knight-unholy",
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

export interface Specialization {
  id: SpecializationID;
  role: SpecializationRole;
  classID: ClassID;
  specName: string;
  buffs: Buff[];
}

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
  return `/classes/${spec.classID}/specs/${spec.specName}/icon.png`;
};
