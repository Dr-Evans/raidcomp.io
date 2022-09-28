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
}
