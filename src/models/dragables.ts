import { Specialization } from "./specializations";

export const ItemTypes = {
  Specialization: "specialization",
  Player: "player",
};

export interface SpecializationItem {
  specialization: Specialization;
}
