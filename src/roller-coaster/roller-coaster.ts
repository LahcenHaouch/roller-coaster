interface Cash {
  ammount: number
  next: number
}

export function rollerCoaster(
  numberOfPlaces: number,
  numberOfTime: number,
  numberOfPeople: number,
  groups: number[]
): number {
  const cash: any = {}
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
      const nextGroup = groups[nextIndex]

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

    cash[originalIndex] = { amount: groups[originalIndex], next: nextIndex }
  }

  return sum
}
