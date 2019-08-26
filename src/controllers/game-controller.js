class GameController {

  static MATCH_DELAY = 650;

  constructor(deckModel, view) {
    this.deckModel = deckModel;
    this.view = view;

    // Game Management Variables
    this.firstGuess = '';
    this.firstGuessId = '';
    this.secondGuess = '';
    this.secondGuessId = '';
    this.count = 0;
  }

  start() {
    this._initializeBindings();
    this.deckModel.shuffle();
    this.view.initializeCardsView(this.deckModel);
  }

  _initializeBindings() {
    //this.view.bindShuffle(this.handleShuffle.bind(this));
    this.view.bindSelectCard(this.handleSelectCard);
  }

  // handleShuffle() {
  //   this.deckModel.shuffle();
  // }

  handleResetGuesses() {
    this.view.resetGuesses(this.firstGuessId, this.secondGuessId);

    this.firstGuess = '';
    this.firstGuessId = '';
    this.secondGuess = '';
    this.secondGuessId = '';
    this.count = 0;
  }

  handleMatch() {
    this.view.matchify(this.firstGuessId, this.secondGuessId);
  }

  handleSelectCard = (selectedCard, guessId) => {
    if (this.count < 2) {
      this.count++;
      this.view.selectify(guessId);
      if (this.count === 1) {
        this.firstGuess = selectedCard;
        this.firstGuessId = guessId;
      } else {
        this.secondGuess = selectedCard;
        this.secondGuessId = guessId;
      }

      if (this.firstGuess && this.secondGuess && this.firstGuessId && this.secondGuessId) {
        if (this.firstGuess === this.secondGuess) {
          this.handleMatch();
        }
        setTimeout(this.handleResetGuesses.bind(this), GameController.MATCH_DELAY);
      }
    }
  }

}

export default GameController;