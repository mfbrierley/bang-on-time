export type Set = "Set 1" | "Set 2" | "Set 3" | "Finale";

export interface Firework {
  fireworkName: string;
  duration: number;
  delay: number;
  segment: number[];
  cueNumber: number;
}
