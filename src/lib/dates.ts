const daysInMonth = (y: number, m: number) => new Date(y, m + 1, 0).getDate();

/** Next occurrence of a day-of-month (clamped to month length) and whole days until it. */
export function nextDue(day: number, from = new Date()) {
  const y = from.getFullYear(), m = from.getMonth();
  const today = new Date(y, m, from.getDate());
  let due = new Date(y, m, Math.min(day, daysInMonth(y, m)));
  if (due < today) due = new Date(y, m + 1, Math.min(day, daysInMonth(y, m + 1)));
  return { due, days: Math.round((+due - +today) / 86_400_000) };
}
