'use strict'

function shuffle(list) {
  if (list.length > 1) {
    for (let i = 0; i < list.length-1; i++) {
      //Pick a random i <= j < deck.length
      let j = Math.floor(Math.random() * (list.length - i)) + i;
      let temp = list[i];
      list[i] = list[j];
      list[j] = temp;
    }
  }
}

export {
    shuffle
}