import * as RandFct from '../util/random-functions.js';

class GameView {

  static ANIMATION_DELAY = 100;

  constructor() {
    this.game = document.querySelector('#game');

    this.grid = document.createElement('section');
    this.grid.setAttribute('class', 'grid');
    
    this.game.appendChild(this.grid);
    
    this.previousTarget = null;
  }


  initializeCardsView(deckModel) {
    for (let i = 0; i < deckModel.size; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.id = RandFct.randHTMLID();
        card.dataset.name = deckModel.getCard(i).name;
  
        const front = document.createElement('div');
        front.classList.add('front');
  
        const back = document.createElement('div');
        back.classList.add('back');
        back.style.backgroundImage = `url(${deckModel.getCard(i).img})`;
        
        this.grid.appendChild(card);
        card.appendChild(front);
        card.appendChild(back);
    }
  }

  // bindShuffle(handler) {
  // }

  bindSelectCard(handler) {
    this.grid.addEventListener('click', (event) => {
      const clicked = event.target;

      //Ignore if grid is selected
      if (
        clicked.nodeName === 'SECTION' || 
        clicked === this.previousTarget || 
        clicked.parentNode.classList.contains('selected') ||
        clicked.parentNode.classList.contains('match')
        ) {
          return
      }

      handler(clicked.parentNode.dataset.name, clicked.parentNode.id);

      this.previousTarget = clicked.parentNode.id;
    });
  }

  selectify(id) {
    document.querySelector(`#${id}`).classList.add('selected');
  }

  matchify(firstGuess, secondGuess) {
    setTimeout( () => {
      this._matchifyView(firstGuess, secondGuess)
    }, GameView.ANIMATION_DELAY);
  }

  _matchifyView(firstGuess, secondGuess) {
    let selected = document.querySelectorAll(`#${firstGuess}, #${secondGuess}`);
    selected.forEach( card => {
      card.classList.add('match');
    });
  }

  resetGuesses(firstGuess, secondGuess) {
    setTimeout( () => { 
      this._resetGuessesView(firstGuess, secondGuess) 
    }, GameView.ANIMATION_DELAY);
  }

  _resetGuessesView(firstGuess, secondGuess) {
    this.previousTarget = null;

    let selected = document.querySelectorAll(`#${firstGuess}, #${secondGuess}`);
    selected.forEach( card => {
      card.classList.remove('selected')
    });
  }

}

export default GameView;