console.log(extractNameFromTemplate('Hello, John Doe!')) /*'John Doe'*/
console.log(extractNameFromTemplate('Hello, Chuck Norris!')) /*'Chuck Norris'*/

function extractNameFromTemplate(value) {
  return value[value.search(!/[H]/)]
}


