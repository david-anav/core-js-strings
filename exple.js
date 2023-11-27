console.log(unbracketTag('<div>') )/*'div'*/
console.log(unbracketTag('<span>') );/*'span'*/
console.log(unbracketTag('<a>'));/*'a'*/

function unbracketTag(str) {
  return str.replace('<','').replace('>','')
}


