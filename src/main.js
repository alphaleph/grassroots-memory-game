'use strict'
import Card from './models/card.js';

//Deck Initialization
const NUM_CARDS = 12;
const NUM_COPIES = 2;

const deck = [];
for (let i = 0; i < NUM_CARDS; i++) {
  let name = 'card' + i;
  let url = './assets/' + name + '.jpg';
  let card = new Card(name, url);
  deck.push(card);
}

//Game Initialization
const game = document.querySelector('#game');

const grid = document.createElement('section');
grid.setAttribute('class', 'grid');

game.appendChild(grid);

displayCards();



function displayCards() {
  deck.forEach(item => {
    for (let i = 0; i < NUM_COPIES; i++) {
      const card = document.createElement('div');
      card.classList.add('card');
      card.id = item.name + i;
      card.dataset.name = item.name;
      card.style.backgroundImage = `url(${item.img})`;
      grid.appendChild(card);
    }
  });

}