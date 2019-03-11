export const partOf = (part, whole) =>
  part.map(x => whole.includes(x)).reduce((agg, curr) => agg && curr, true)

export const flatten = arr =>
  'flat' in Array.prototype
    ? arr.flat()
    : arr.reduce((acc, curr) => acc.concat(curr), [])

export const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

export const shuffle = arr => {
  let currentIndex = arr.length
  let temporaryValue
  let randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = arr[currentIndex]
    arr[currentIndex] = arr[randomIndex]
    arr[randomIndex] = temporaryValue
  }

  return arr
}
