import { snakeCase } from 'mvp-app-text-case/src/text-case/snake-case'

describe('snakeCase', () => {
  it('should transform text to snake case', () => {
    expect(snakeCase.transform('test string')).toBe('test_string')
  })
})
