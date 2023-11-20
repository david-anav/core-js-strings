console.log(invertCase('Hello, World!'))/*'hELLO, wORLD!'*/
console.log(invertCase('JavaScript is Fun'))/*'jAVAsCRIPT IS fUN'*/
console.log(invertCase('12345'))/*'12345'*/
console.log(invertCase('!@#$'))/*'!@#$'*/
console.log(invertCase(''))/*''*/
console.log(invertCase('Hello, 12345!'))/*'hELLO, 12345!'*/
console.log(invertCase('1a2b3c4d5'))/*'1A2B3C4D5'*/

function invertCase(str) {
  let newStr = '';
  for(let i = 0; i < str.length; i+=1){
    if(str[i] === str[i].toLowerCase()){
      newStr += str[i].toUpperCase()
    }else {
      newStr += str[i].toLowerCase();
    }
  }
  return newStr;
}


