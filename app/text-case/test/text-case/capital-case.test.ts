import { capitalCase } from 'mvp-app-text-case/src/text-case/capital-case'

describe('capitalCase', () => {
  it('should transform text to capital case', () => {
    expect(capitalCase.transform('test string')).toBe('Test String')
  })
})
