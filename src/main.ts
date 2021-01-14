import { promises as fsPromises } from 'fs'
import path from 'path'

import { rollerCoaster } from './roller-coaster/roller-coaster'

export const readFileAndPrintSum = async (filePath: string) => {
  const data = await fsPromises.readFile(
    path.resolve(__dirname, filePath),
    'utf-8'
  )

  const [numberOfPlaces, numberOfTime, numberOfPeopleAndGroups] = data.split(
    ' '
  )

  const [numberOfPeople, ...groups] = numberOfPeopleAndGroups.split('\n')

  console.log(
    rollerCoaster(
      Number(numberOfPlaces),
      Number(numberOfTime),
      Number(numberOfPeople),
      (groups as unknown) as number[]
    )
  )
}

readFileAndPrintSum('../data/roller_coaster.hard')
