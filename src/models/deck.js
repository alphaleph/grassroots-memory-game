'use strict'

import Card from './card.js';
import * as ListFct from '../util/list-functions.js';

class Deck {
  constructor(numUniqCards = 12, numCopies = 2) {
    this.deck = [];

    for (let i = 0; i < numUniqCards; i++) {
      for (let j = 0; j < numCopies; j++) {
        let name = 'card' + i;
        let url = './../assets/' + name + '.jpg';
        this.addCard(name, url);
      }
    }
  }

  get size() {
    return this.deck.length;
  }

  addCard(name, url) {
      let card = new Card(name, url);
      this.deck.push(card);
  }

  getCard(index) {
    if (index >= 0 && index < this.deck.length) {
      return this.deck[index];
    } else {
      console.log(`Invalid deck index: ${index}`);
    }
  }

  shuffle() {
    ListFct.shuffle(this.deck);
  }

}

export default Deck;
