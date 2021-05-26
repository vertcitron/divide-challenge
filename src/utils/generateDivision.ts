export interface Division {
  numerator: number
  divider: number
  result: number
}

export function generateDivision (): Division {
  const result = Math.floor(80 * Math.random() + 20)
  const divider = Math.floor(8 * Math.random()) + 2
  const numerator = divider * result
  return { numerator, divider, result }
}
