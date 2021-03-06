import { camelCase as transformCamelCase } from 'camel-case'

import { TextCase } from 'mvp-app-text-case/src/text-case/text-case'

export const camelCase: TextCase = {
  name: 'camelCase',
  transform: transformCamelCase,
}
