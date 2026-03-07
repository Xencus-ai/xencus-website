/**
 * Returns the next batch start date (first week of next month).
 * Batches start in the first week of every month.
 * Uses a deterministic day from the first week (1–7) based on month+year so it stays stable per month.
 */

const FIRST_WEEK_DAYS = [1, 2, 3, 4, 5, 6, 7] as const;

function getFirstWeekDayForMonth(month: number, year: number): number {
  const index = (year * 12 + month) % FIRST_WEEK_DAYS.length;
  return FIRST_WEEK_DAYS[index];
}

export function getNextBatchStartDate(): { day: number; month: number; year: number; label: string } {
  const now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1; // 1-indexed

  // Next month
  month += 1;
  if (month > 12) {
    month = 1;
    year += 1;
  }

  const day = getFirstWeekDayForMonth(month, year);
  const date = new Date(year, month - 1, day);
  const label = date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

  return { day: date.getDate(), month: date.getMonth() + 1, year: date.getFullYear(), label };
}
