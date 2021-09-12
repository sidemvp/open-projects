import { upperCase as transformUpperCase } from 'upper-case'

import { TextCase } from 'mvp-app-text-case/src/text-case/text-case'

export const upperCase: TextCase = {
  name: 'UPPER CASE',
  transform: transformUpperCase,
}
