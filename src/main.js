'use strict'

import GameController from './controllers/game-controller.js';
import GameView from './views/game-view.js';
import Deck from './models/deck.js';


const NUM_UNIQUE_CARDS = 12;
const NUM_COPIES = 2;

const app = new GameController(new Deck(NUM_UNIQUE_CARDS, NUM_COPIES), new GameView());

app.start();