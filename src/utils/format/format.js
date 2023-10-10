/** Capitalize the first letter of each word from a string
 *
 * @param { String } text Input text entered by the user
 * @returns { String } Formatted string
 */
export function capitalize(text) {
  const wordsArray = text.split(' ')
  const formattedWordsArray = wordsArray.map((el) => {
    return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase()
  })
  const formattedString = formattedWordsArray.join(' ')
  return formattedString
}
