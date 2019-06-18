class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard();
    this.bindEvents();
    // this.game.play();
  }

  bindEvents() {
    this.$el.on('click', '#square', ( e => {
      const $square = $(e.target);
      this.makeMove($square);
    }));
  }

  makeMove($square) {
    let pos = $square[0].className.split("").map(x => parseInt(x)); 
    $square.text(this.game.currentPlayer);
    this.game.playMove(pos);
    $square.attr("id", "clicked-square");
    
    console.log(this.game.board.grid);
    if (this.game.isOver()) {
      const $squares = $('li'); 
      for (let i = 0; i < $squares.length; i++) {
        let currentSquare = $squares.eq(i); 
        if (currentSquare.text() === this.game.winner()) {
          $squares.eq(i).css('background-color', 'green'); 
        } else {
          $squares.eq(i).css('color', 'red'); 
        }
      }

      // if(this.game.winner()) {
        alert(this.game.winner());
      // }
    }

  }

  setupBoard() {   
    const $board = $('<ul>');
    $board.addClass('board');

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const $square = $('<li>');
        $square.attr("id", "square");
        $square.addClass(`${i%3}${j%3}`)
        $board.append($square);
      }


      // if (i % 3 === 2) {
      //   $board.append('<br/>')
      // }
      
    }
    this.$el.append($board);
  }
}

module.exports = View;


// if (i >= 0 && i <= 2) {
//   $square.addClass(`0 ${i % 3}`);
// } else if (i >= 3 && i <= 5) {
//   $square.addClass(`1 ${i % 3}`);
// } else {
//   $square.addClass(`2 ${i % 3}`);
// }
