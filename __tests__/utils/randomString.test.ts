import { test, expect } from '@jest/globals'
import generateRandomString from '../../src/utils/randomString'

test('generateRandomString return string length equals expectedLength', () => {
  const expectedLength = 8

  const string = generateRandomString(expectedLength)

  expect(string).toHaveLength(expectedLength)
})
