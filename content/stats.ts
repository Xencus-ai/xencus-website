/**
 * Stats / metrics section — numbers we display (e.g. students trained, trainers, live hours, clients).
 * Set `illustration` when you have an asset (e.g. "/Assets/stats/students.svg").
 */

export type StatItem = {
  value: string;
  label: string;
  illustration?: string;
};

export const stats: readonly StatItem[] = [
  { value: "2M+", label: "Students trained" },
  { value: "1000+", label: "Industry expert trainers" },
  { value: "50000+", label: "Hours of live classes" },
  { value: "300+", label: "EdTech partners we serve" },
];
