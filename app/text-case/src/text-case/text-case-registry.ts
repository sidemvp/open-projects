import { camelCase } from 'mvp-app-text-case/src/text-case/camel-case'
import { capitalCase } from 'mvp-app-text-case/src/text-case/capital-case'
import { invertCase } from 'mvp-app-text-case/src/text-case/invert-case'
import { kebabCase } from 'mvp-app-text-case/src/text-case/kebab-case'
import { lowerCase } from 'mvp-app-text-case/src/text-case/lower-case'
import { sentenceCase } from 'mvp-app-text-case/src/text-case/sentence-case'
import { snakeCase } from 'mvp-app-text-case/src/text-case/snake-case'
import { TextCase } from 'mvp-app-text-case/src/text-case/text-case'
import { upperCase } from 'mvp-app-text-case/src/text-case/upper-case'

export const allTextCases: TextCase[] = [
  upperCase,
  lowerCase,
  sentenceCase,
  capitalCase,
  invertCase,
  camelCase,
  kebabCase,
  snakeCase,
]
