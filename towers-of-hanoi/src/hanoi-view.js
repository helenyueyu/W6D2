class HanoiView {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupTowers();
    // this.bindEvents();
    // this.game.play();
  }
  
  
  setupTowers() {
    const $board = $('<ul>'); 
    for (let i = 0; i < 3; i++) {
      const $pile = $('<li>'); 
      $board.append($pile); 
    }
    const $first = $pile.eq(0); 
    for (let i = 0; i < 3; i++) {
      const $piece = $('<div>'); 
      $first.append($piece); 
    }
    this.$el.append($board); 
  }
} 
