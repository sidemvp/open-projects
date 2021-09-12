import { capitalCase as transformCapitalCase } from 'capital-case'

import { TextCase } from 'mvp-app-text-case/src/text-case/text-case'

export const capitalCase: TextCase = {
  name: 'Capital Case',
  transform: transformCapitalCase,
}
