export function capitalize(string) {
  const wordsArray = string.split(' ')
  const formattedWordsArray = wordsArray.map((el) => {
    return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase()
  })
  const formattedString = formattedWordsArray.join(' ')
  return formattedString
}
