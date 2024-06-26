export function getSecondsUntil(end: Date, start: Date = new Date()): number {
  const time = end.getTime() - start.getTime();
  return Math.floor(time / 1000);
}

export function roundToSeconds(ms: Date | number): number {
  if (ms instanceof Date) ms = ms.getTime();
  return Math.floor(ms / 1000);
}
