'use strict'

class Card {
  constructor(name, img) {
    this.name = name;
    this.img = img;
    this.matches = 0;
  }

  incrementMatches() {
    this.matches++;
  }

  resetMatches() {
    this.matches = 0;
  }
  
}

export default Card;