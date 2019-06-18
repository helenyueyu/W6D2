const View = require('./ttt-view.js');
const Game = require('../node-solution/game.js');

  $(() => {
   let $board = $('figure.ttt');
   const game = new Game();
   new View(game, $board);
  });
