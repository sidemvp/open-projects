import { camelCase } from 'mvp-app-text-case/src/text-case/camel-case'

describe('camelCase', () => {
  it('should transform text to camel case', () => {
    expect(camelCase.transform('test string')).toBe('testString')
  })
})
