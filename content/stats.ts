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
  { value: "1M+", label: "Students trained" },
  { value: "500+", label: "Industry expert trainers" },
  { value: "5000+", label: "Hours of live classes" },
  { value: "200+", label: "EdTech partners we serve" },
];
