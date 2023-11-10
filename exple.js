function getStringLength(value) {
  return typeof value !== 'string' ? 0 : value.length;
}

console.log(getStringLength(null));
