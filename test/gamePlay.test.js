const { gameBoard, gamePlay, newPlayer } = require('../js/script');

describe('check game', () => {
  gamePlay.player1 = newPlayer('Anna', 'X');
  gamePlay.player2 = newPlayer('Shola', 'O');
  gameBoard.board = ['X', 'X', 'X', 4, 5, 6, 7, 8, 9];
  gamePlay.check();
  gamePlay.currentPlayer = gamePlay.player1.name;
  test('player 1 can win', () => {
    expect(gamePlay.gameActive).toEqual(false);
  });
  gameBoard.board = ['O', 'O', 'O', 4, 5, 6, 7, 8, 9];
  gamePlay.check();
  gamePlay.currentPlayer = gamePlay.player2.name;
  test('player 2 can win', () => {
    expect(gamePlay.gameActive).toEqual(false);
  });
  gamePlay.round = 9;
  gameBoard.board = ['X', 'O', 'O', 'O', 'X', 'X', 'X', 'X', 'O'];
  test('game can end in a Draw', () => {
    expect(gamePlay.draw()).toEqual(true);
  });

  gameBoard.reset();
});
