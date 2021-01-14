export function rollerCoaster(
  numberOfPlaces: number,
  numberOfTime: number,
  numberOfPeople: number,
  groups: number[]
): number {
  let resetIndex = numberOfPeople
  let [rides, sum, nextIndex, rest] = [0, 0, 0, numberOfPlaces]

  while (rides < numberOfTime) {
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
  }

  return sum
}
