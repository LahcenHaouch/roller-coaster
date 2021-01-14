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
    const originalIndex = nextIndex
    if (nextIndex in cash) {
      const { amount, next } = cash[nextIndex]
      sum += amount
      nextIndex = next
      rides++
      // eslint-disable-next-line no-continue
      continue
    } else {
      while (nextIndex < numberOfPeople && Number(groups[nextIndex]) <= rest) {
        rest -= Number(groups[nextIndex])
        nextIndex = nextIndex === numberOfPeople - 1 ? 0 : nextIndex + 1

        if (nextIndex === resetIndex) {
          break
        }
      }
    }

    rides += 1
    const amountToAdd = numberOfPlaces - rest
    sum += amountToAdd
    rest = numberOfPlaces
    resetIndex = nextIndex

    if (nextIndex === numberOfPeople) {
      nextIndex = 0
    }

    cash[originalIndex] = {
      amount: amountToAdd,
      next: nextIndex,
    }
  }

  return sum
}
