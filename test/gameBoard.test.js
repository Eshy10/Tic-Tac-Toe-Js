const { gameBoard } = require('../js/script');

describe('checking gameboard', () => {
  const board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const newBoard = [1, 'X', 3, 4, 5, 6, 7, 8, 9];
  test('check if the there is a gameboard', () => {
    expect(gameBoard.board).toEqual(board);
  });

  test('check if the reset board is correct', () => {
    gameBoard.board[1] = 'X';
    expect(gameBoard.board).toEqual(newBoard);
  });

  test('check if the reset board is correct', () => {
    gameBoard.board[1] = 'X';
    gameBoard.reset();
    expect(gameBoard.board).toEqual(board);
  });
});
