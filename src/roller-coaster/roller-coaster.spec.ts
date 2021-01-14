import { rollerCoaster } from './roller-coaster'

describe('roller-coaster', () => {
  test('roller-coaster should return 7', () => {
    const result = rollerCoaster(3, 3, 4, [3, 1, 1, 2])

    expect(result).toEqual(7)
  })

  test('roller-coaster should return 14', () => {
    const result = rollerCoaster(5, 3, 4, [2, 3, 5, 4])

    expect(result).toEqual(14)
  })

  test('roller-coaster should return 100', () => {
    const result = rollerCoaster(10, 100, 1, [1])

    expect(result).toEqual(100)
  })
})
