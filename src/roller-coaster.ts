/* eslint-disable no-continue */
// [3,1,1,2]
export function rollerCoaster(
  numberOfPlaces: number,
  numberOfTime: number,
  groups: number[],
  _numberOfPeople?: number
) {
  const initialGroups = [...groups]
  let intialTime = numberOfTime
  let rest = numberOfPlaces
  let sum = 0

  while (intialTime > 0) {
    console.log('rest', rest)
    console.log('sum', sum)
    const firstGroup = initialGroups[0]
    console.log('initialGroups', initialGroups)
    console.log('firstGroup', firstGroup)
    if (firstGroup === rest) {
      // move group to the back of the queu
      sum += firstGroup
      initialGroups.push(initialGroups.shift())
      // start the ride
      intialTime -= 1
      rest = numberOfPlaces
      continue
    }

    if (firstGroup > rest) {
      // move group to the back of the queu
      intialTime -= 1
      rest = numberOfPlaces
      continue
    }

    if (firstGroup < rest) {
      rest -= firstGroup

      sum += firstGroup
      initialGroups.push(initialGroups.shift())
    }
  }

  return sum
}
