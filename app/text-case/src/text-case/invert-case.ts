import { swapCase as transformInvertCase } from 'swap-case'

import { TextCase } from 'mvp-app-text-case/src/text-case/text-case-type'

export const invertCase: TextCase = {
  name: 'inVERT caSE',
  transform: transformInvertCase,
}
