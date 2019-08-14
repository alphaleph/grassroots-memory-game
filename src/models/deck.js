'use strict'

import Card from './card.js';
import * as ListFct from '../util/list-functions.js';

class Deck {
  constructor() {
    this.deck = [];
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
