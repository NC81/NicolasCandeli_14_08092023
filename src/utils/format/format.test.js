import '@testing-library/jest-dom'
import { capitalize } from './format'

describe('Given capitalize() takes a string as argument', () => {
  it('should return each word with a capitalized letter', async () => {
    const lowerCaseString = '44 sunset boulevard'
    const stringToExpect = '44 Sunset Boulevard'

    expect(capitalize(lowerCaseString)).toBe(stringToExpect)
  })
})
