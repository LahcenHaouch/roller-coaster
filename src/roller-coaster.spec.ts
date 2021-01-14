import { rollerCoaster } from './roller-coaster'

describe('roller-coaster', () => {
  test('roller-coaster should return 7', () => {
    const result = rollerCoaster(3, 3, [3, 1, 1, 2])

    expect(result).toEqual(7)
  })
})
