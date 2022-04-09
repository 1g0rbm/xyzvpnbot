import { test, expect } from '@jest/globals'
import generatePassword from '../../src/utils/generatePassword'

test('generateRandomString return string length equals expectedLength', () => {
  const expectedLength = 8

  const string = generatePassword(expectedLength)

  expect(string).toHaveLength(expectedLength)
})
