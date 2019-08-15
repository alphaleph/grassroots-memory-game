'use strict'
import * as RandFct from './util/random-functions.js';
import Deck from './models/deck.js';

//Deck Initialization
const NUM_UNIQUE_CARDS = 12;
const NUM_COPIES = 2;

let deck = new Deck();
for (let i = 0; i < NUM_UNIQUE_CARDS; i++) {
  for (let j = 0; j < NUM_COPIES; j++) {
    let name = 'card' + i;
    let url = './../assets/' + name + '.jpg';
    deck.addCard(name, url);
  }
}

//Game Initialization
const game = document.querySelector('#game');

const grid = document.createElement('section');
grid.setAttribute('class', 'grid');

game.appendChild(grid);

deck.shuffle();

initializeCardsView();


let count = 0;
let firstGuess = '', secondGuess = '';
let previousTarget = null;

grid.addEventListener('click', (event) => {
  let clicked = event.target;

  //Ignore if grid is selected
  if (clicked.nodeName === 'SECTION' || clicked === previousTarget) {
    return
  }

  if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = clicked.dataset.name;
      clicked.classList.add('selected');
    } else {
      secondGuess = clicked.dataset.name;
      clicked.classList.add('selected');
    }

    if (firstGuess !== '' && secondGuess !== '') {
      if (firstGuess === secondGuess) {
        matchifyView();
      }
    }

    previousTarget = clicked;

  }
})



//TODO: Display facedown?

// - While all cards are not matched
//   - Player reveals up to two cards per turn
//     - Determine if selected cards are a match; flip down if not
// - When game ends or is cancelled, display closing/reset prompt.

function initializeCardsView() {
  for (let i = 0; i < deck.size; i++) {
      const card = document.createElement('div');
      card.classList.add('card');
      card.id = RandFct.randHTMLID();
      card.dataset.name = deck.getCard(i).name;
      card.style.backgroundImage = `url(${deck.getCard(i).img})`;
      grid.appendChild(card);
  }
}

function matchifyView() {
  let selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.add('match');
  });
}