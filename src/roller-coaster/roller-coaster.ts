interface Cache {
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
  const cache: Cache = {}
  let resetIndex = numberOfPeople
  let [rides, sum, nextIndex, rest] = [0, 0, 0, numberOfPlaces]

  while (rides < numberOfTime) {
    const originalIndex = nextIndex
    if (nextIndex in cache) {
      const { amount, next } = cache[nextIndex]
      sum += amount
      nextIndex = next
      rides++
      // eslint-disable-next-line no-continue
      continue
    } else {
      while (nextIndex < numberOfPeople && groups[nextIndex] <= rest) {
        rest -= groups[nextIndex]
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

    cache[originalIndex] = {
      amount: amountToAdd,
      next: nextIndex,
    }
  }

  return sum
}
