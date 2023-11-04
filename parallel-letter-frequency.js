export async function countFrequency(texts) {
  const letterFrequencies = await calculateCharacterFrequencies(texts)
  const result = mergeCharacterFrequencies(letterFrequencies)

  return result
}

async function textFrequency(text) {
  return [...text].reduce((charCount, char) => {
    charCount[char] = (charCount[char] || 0) + 1
    return charCount
  }, {})
}

async function calculateCharacterFrequencies(texts) {
  const promises = texts.map((text) => textFrequency(text))
  return await Promise.all(promises)
}

function mergeCharacterFrequencies(frequencies) {
  return frequencies.flatMap(Object.entries)
    .reduce((acc, [char, count]) => {
      acc[char] = (acc[char] || 0) + count
      return acc
    }, {})
}
