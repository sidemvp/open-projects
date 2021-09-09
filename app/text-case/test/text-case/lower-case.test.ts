import { lowerCase } from 'mvp-app-text-case/src/text-case/lower-case'

describe('lowerCase', () => {
  it('should transform text to lower case', () => {
    expect(lowerCase.transform('TeSt sTrIng')).toBe('test string')
  })
})
