interface Cash {
  [index: string]: {
    amount: number
    next: number
  }
}

export function rollerCoaster(
  numberOfPlaces: number,
  numberOfTime: number,
  numberOfPeople: number,
  groups: number[]
): number {
  const cash: Cash = {}
  let resetIndex = numberOfPeople
  let [rides, sum, nextIndex, rest] = [0, 0, 0, numberOfPlaces]

  while (rides < numberOfTime) {
    if (cash[nextIndex]) {
      const { amount, next } = cash[nextIndex]
      sum += amount
      nextIndex = next
      rides++
      // eslint-disable-next-line no-continue
      continue
    }

    const originalIndex = nextIndex
    while (nextIndex < numberOfPeople) {
      const nextGroup = Number(groups[nextIndex])

      if (nextGroup > rest) {
        break
      }

      rest -= nextGroup
      nextIndex += 1

      if (nextIndex === resetIndex) {
        break
      }

      if (nextIndex === numberOfPeople) {
        nextIndex = 0
      }
    }

    rides += 1
    sum += numberOfPlaces - rest
    rest = numberOfPlaces
    resetIndex = nextIndex

    if (nextIndex === numberOfPeople) {
      nextIndex = 0
    }

    cash[originalIndex] = {
      amount: Number(groups[originalIndex]),
      next: nextIndex,
    }
  }

  return sum
}
