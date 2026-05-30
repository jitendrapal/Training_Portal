// Utility to determine the next batch date from an array of ISO date strings
export function getNextBatchDate(dates = []) {
  // Return a date exactly one week (7 days) ahead of the current date.
  // This makes the "next batch" always show as one week from today.
  const today = new Date();
  const weekAhead = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 7,
  );
  return formatDate(weekAhead);
}

function formatDate(d) {
  const today = new Date();
  const opts = { month: "long", day: "numeric" };
  const sameYear = d.getFullYear() === today.getFullYear();
  if (!sameYear) opts.year = "numeric";
  return d.toLocaleDateString("en-US", opts);
}

export default getNextBatchDate;
