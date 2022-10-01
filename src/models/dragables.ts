import { Specialization } from "./specializations";
import { Player } from "./player";

export enum ItemType {
  Specialization = "specialization",
  Player = "player",
}

export interface SpecializationItem {
  specialization: Specialization;
}

export interface PlayerItem {
  player: Player;
  fromIndex: number;
}
