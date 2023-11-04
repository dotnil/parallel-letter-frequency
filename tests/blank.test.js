import { expect, test } from 'vitest'
import { countFrequency } from '../parallel-letter-frequency.js'


test('counting letter frequencies in a text array', async () => {
  const texts = [
    'loop',
    'loops'
  ]
  const result = await countFrequency(texts)
  const expected = {
    'l': 2,
    'o': 4,
    'p': 2,
    's': 1,
  }

  expect(result).toEqual(expected)
})
