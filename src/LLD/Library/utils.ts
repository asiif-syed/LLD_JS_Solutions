export function calculateDaysPassed(date: Date): number {
  const today = new Date(); // Get today's date
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date format");
  }

  // Calculate the difference in milliseconds
  const differenceInMs = today.getTime() - date.getTime();

  // Convert milliseconds to days
  const daysPassed = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));

  return daysPassed;
}
