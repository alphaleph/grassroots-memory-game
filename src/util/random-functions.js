'use strict'

function randHTMLID() {
  //Warning: Only use for testing, has significant chance for collision!
  let randCode = '';
  for (let i = 0; i < 3; i++) {
   randCode += String.fromCharCode(65 + Math.floor(Math.random() * 26));
  }
  return randCode + Date.now();
}

export {
  randHTMLID
}