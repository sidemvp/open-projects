import { lowerCase as transformLowerCase } from 'lower-case'

import { TextCase } from 'mvp-app-text-case/src/text-case/text-case-type'

export const lowerCase: TextCase = {
  name: 'lower case',
  transform: transformLowerCase,
}
