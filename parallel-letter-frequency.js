export const countFrequency = texts => {
  const splitTexts = texts.map(text => text.split(''))

  const frequency = splitText.reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1

    return acc
  }, {})
}
