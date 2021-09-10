import { sentenceCase as transformSentenceCase } from 'sentence-case'

import { TextCase } from 'mvp-app-text-case/src/text-case/text-case-type'

export const sentenceCase: TextCase = {
  name: 'Sentence case',
  transform: transformSentenceCase,
}
