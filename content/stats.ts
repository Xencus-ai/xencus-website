/**
 * Stats / metrics section — numbers we display (e.g. students trained, trainers, live hours, clients).
 * Set `illustration` when you have an asset (e.g. "/Assets/stats/students.svg").
 */

export type StatItem = {
  value: string;
  label: string;
  illustration?: string;
  target: number;
  format: "millions" | "thousands" | "plain";
};

export const stats: readonly StatItem[] = [
  { value: "2.6M+", label: "Students trained", target: 2.6, format: "millions" },
  { value: "1.2K+", label: "Industry expert trainers", target: 1.2, format: "thousands" },
  { value: "58K+", label: "Hours of live classes", target: 58, format: "thousands" },
  { value: "340+", label: "EdTech partners we serve", target: 340, format: "plain" },
];
