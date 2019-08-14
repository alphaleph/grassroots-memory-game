'use strict'

function randHTMLID() {
  //Warning: Only use for testing, has significant chance for collision!
  let randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  return randLetter + Date.now();
}

export {
  randHTMLID
}