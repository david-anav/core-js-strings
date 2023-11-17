function formatTime(minutes, seconds) {
  let min = minutes.toString();
  let sec = seconds.toString();
  if(min.length === 1){
    console.log(min = min.padStart(2,"0"))

  }
  if (sec.length === 1){
    sec = sec.padStart(2,"0")
  }
  return min.toString().concat(':', sec.toString());
}

console.log(formatTime(5,6))
