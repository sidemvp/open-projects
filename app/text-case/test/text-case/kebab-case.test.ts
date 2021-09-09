import { kebabCase } from 'mvp-app-text-case/src/text-case/kebab-case'

describe('kebabCase', () => {
  it('should transform text to kebab case', () => {
    expect(kebabCase.transform('test string')).toBe('test-string')
  })
})
