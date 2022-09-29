export enum ExpansionID {
  Classic = "classic",
  BurningCrusade = "tbc",
  WrathOfTheLichKing = "wrath",
  Cataclysm = "cata",
  WarlordsOfDraenor = "wod",
  Legion = "legion",
  BattleForAzeroth = "bfa",
  Shadowlands = "sl",
  Dragonflight = "df",
}

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
    case "df":
      return ExpansionID.Dragonflight;
    default:
      return ExpansionID.Classic;
  }
};
