'use strict'
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
initializeGameView();

deck.shuffle();

initializeCardsView();

//Game Management
let count = 0;
let firstGuess = '', secondGuess = '';
let previousTarget = null;
const ANIMATION_DELAY = 1000;

grid.addEventListener('click', (event) => {
  const clicked = event.target;

  //Ignore if grid is selected
  if (
    clicked.nodeName === 'SECTION' || 
    clicked === previousTarget || 
    clicked.parentNode.classList.contains('selected') ||
    clicked.parentNode.classList.contains('match')
    ) {
      return
  }

  if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add('selected');
    } else {
      secondGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add('selected');
    }

    if (firstGuess && secondGuess) {
      if (firstGuess === secondGuess) {
        setTimeout(matchifyView, ANIMATION_DELAY);
      }
      setTimeout(resetGuesses, ANIMATION_DELAY);
    }

    previousTarget = clicked;
  
  }
})

function resetGuesses() {
  firstGuess = '';
  secondGuess = '';
  count = 0;
  previousTarget = null;

  clearSelectedView();
}

// import GameController from './controllers/game-controller.js';
// import GameView from './views/game-view.js';
// import Deck from './models/deck.js';

// const app = new GameController(new Deck(), new GameView());

