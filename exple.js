function removeFirstOccurrences(str, value) {
  if ( str.includes(value)){

    return str.replace(str.substring(str.indexOf(value),str.indexOf(value)+value.length),'');
  }
  return str;
}

console.log(removeFirstOccurrences('To be or not to be', 'be'));

