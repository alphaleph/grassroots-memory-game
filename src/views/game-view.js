import * as RandFct from '../util/random-functions.js';

class GameView {
  constructor() {
    const game = document.querySelector('#game');

    const grid = document.createElement('section');
    grid.setAttribute('class', 'grid');
    
    game.appendChild(grid);
  }


  initializeCardsView(deck) {
    for (let i = 0; i < deck.size; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.id = RandFct.randHTMLID();
        card.dataset.name = deck.getCard(i).name;
  
        const front = document.createElement('div');
        front.classList.add('front');
  
        const back = document.createElement('div');
        back.classList.add('back');
        back.style.backgroundImage = `url(${deck.getCard(i).img})`;
        
        grid.appendChild(card);
        card.appendChild(front);
        card.appendChild(back);
    }
  }

  matchifyView() {
    let selected = document.querySelectorAll('.selected');
    selected.forEach( card => {
      card.classList.add('match');
    });
  }

  clearSelectedView() {
    let selected = document.querySelectorAll('.selected');
    selected.forEach( card => {
      card.classList.remove('selected')
    });
  }

}

export GameView;