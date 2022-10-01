import { Specialization } from "./specializations";

export interface Player {
  id: string;
  name?: string;
  specialization: Specialization;
}
