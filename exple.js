function removeFirstOccurrences(str, value) {
  if ( str.includes(value)){
    
    return str.split(' ').reverse().join(' ').replace(str.substring(str.lastIndexOf(value),str.lastIndexOf(value)+value.length),'').split(' ').reverse().join(' ');
  }
  return str;
}

console.log(removeFirstOccurrences('To be or not to be', 'be'));

