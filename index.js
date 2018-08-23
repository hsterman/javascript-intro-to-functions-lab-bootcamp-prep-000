function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function sayHiToGrandma(string) {
  var upperCase = string.toUpperCase()
  var lowerCase = string.toLowerCase()
  if (string === lowerCase) {
    return "I can't hear you!"
  }
}

function logWhisper(string) {
  let lowerCase = string.toLowerCase()
  console.log(lowerCase)
}

function logShout(string) {
  let upperCase = string.toUpperCase()
  console.log(upperCase)
}

