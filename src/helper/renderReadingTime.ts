export const renderReadingTime = (
  value: string | number | null | undefined,
): { sec: number; min: number; hour: number } => {
  const totalSeconds = Math.max(0, Math.floor(Number(value) || 0))
  const totalMinutes = Math.floor(totalSeconds / 60)

  return {
    sec: totalSeconds % 60,
    min: totalMinutes % 60,
    hour: Math.floor(totalMinutes / 60),
  }
}
