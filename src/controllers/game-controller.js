class GameController {
  constructor(deckModel, view) {
    this.deckModel = deckModel;
    this.view = view;
  }

  start() {
    this._initializeBindings();
  }

  _initializeBindings() {
    this.view.bindShuffle(this.handleShuffle);
  }

  const handleShuffle = () => {
    this.deckModel.shuffle();
  }


}

export default GameController;