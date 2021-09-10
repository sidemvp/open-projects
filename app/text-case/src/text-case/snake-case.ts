import { snakeCase as transformSnakeCase } from 'snake-case'

import { TextCase } from 'mvp-app-text-case/src/text-case/text-case-type'

export const snakeCase: TextCase = {
  name: 'snake_case',
  transform: transformSnakeCase,
}
