import { paramCase as transformKebabCase } from 'param-case'

import { TextCase } from 'mvp-app-text-case/src/text-case/text-case'

export const kebabCase: TextCase = {
  name: 'kebab-case',
  transform: transformKebabCase,
}
