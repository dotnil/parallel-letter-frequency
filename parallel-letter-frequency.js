export function countFrequency(texts) {
  const splitTexts = texts.map(text => [...text])

  const promises = splitTexts.map(splitText => {
    return new Promise((resolve, reject) => {
      try {
        const frequency = splitText.reduce((acc, char) => {
          acc[char] = (acc[char] || 0) + 1
          return acc
        }, {})
        resolve(frequency)
      } catch (error) {
        reject(error)
      }
    })
  })

  return Promise.all(promises)
    .then(results => {
      const totalFrequency = results.flatMap(Object.entries)
        .reduce((acc, [char, count]) => {
          acc[char] = (acc[char] || 0) + count
          return acc
        }, {})
      return totalFrequency
    })
    .catch(error => {
      console.error('Error in countFrequency:', error)
      throw error
    })
}

const texts = ['Hello, World!', 'This is a test text']
countFrequency(texts)
  .then(result => {
    console.log(result)
  })
  .catch(error => {
    console.error('Error in countFrequency:', error)
  })
