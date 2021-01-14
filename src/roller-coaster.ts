/* eslint-disable no-continue */
// [3,1,1,2]
export function rollerCoaster(
  numberOfPlaces: number,
  numberOfTime: number,
  groups: number[],
  numberOfPeople: number
) {
  const initialGroups = [...groups]
  let intialTime = numberOfTime
  let rest = numberOfPlaces
  let sum = 0

  while (intialTime > 0) {
    // if (sum === 10) {
    //   break
    // }
    // console.log('rest', rest)
    // console.log('sum', sum)
    const firstGroup = initialGroups[0]
    // console.log('initialGroups', initialGroups)
    // console.log('firstGroup', firstGroup)
    // console.log('numberOfPlaces', numberOfPlaces)
    if (firstGroup === rest) {
      // move group to the back of the queu
      sum += firstGroup
      if (numberOfPeople > 1) {
        initialGroups.push(initialGroups.shift())
      }
      // start the ride
      intialTime -= 1
      rest = numberOfPlaces
      continue
    }

    if (firstGroup > rest) {
      intialTime -= 1
      rest = numberOfPlaces
      continue
    }

    if (firstGroup < rest) {
      if (numberOfPeople > 1) {
        sum += firstGroup
        initialGroups.push(initialGroups.shift())
        rest -= firstGroup
        // rest = numberOfPlaces
        continue
      } else {
        intialTime -= 1
      }

      // rest -= firstGroup
      // console.log('minus')

      sum += firstGroup
    }
  }

  return sum
}
