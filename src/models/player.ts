import { Specialization } from "./classes";

export interface Player {
  id: string;
  name?: string;
  specialization: Specialization;
}
