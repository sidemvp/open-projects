import { sentenceCase } from 'mvp-app-text-case/src/text-case/sentence-case'

describe('sentenceCase', () => {
  it('should transform text to sentence case', () => {
    expect(sentenceCase.transform('Test String')).toBe('Test string')
  })
})
