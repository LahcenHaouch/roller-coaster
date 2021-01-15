import { promises as fsPromises } from 'fs'
import path from 'path'

import { rollerCoaster } from './roller-coaster'

export const readFileAndPrintSum = async (filePath: string) => {
  try {
    const data = await fsPromises.readFile(
      path.resolve(__dirname, filePath),
      'utf-8'
    )

    const [numberOfPlaces, numberOfTime, numberOfPeopleAndGroups] = data.split(
      ' '
    )

    const [numberOfPeople, ...rest] = numberOfPeopleAndGroups.split('\n')

    const groups = rest.map(element => Number(element))

    console.log(
      rollerCoaster(
        Number(numberOfPlaces),
        Number(numberOfTime),
        Number(numberOfPeople),
        groups
      )
    )
  } catch (error) {
    console.log(error)
  }
}

readFileAndPrintSum('../data/roller_coaster.hard')
