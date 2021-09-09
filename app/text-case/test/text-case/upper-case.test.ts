import { upperCase } from 'mvp-app-text-case/src/text-case/upper-case'

describe('upperCase', () => {
  it('should transform text to upper case', () => {
    expect(upperCase.transform('TeSt sTrIng')).toBe('TEST STRING')
  })
})
