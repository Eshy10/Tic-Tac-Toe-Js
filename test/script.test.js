const { gameBoard, gamePlay, newPlayer } = require('../js/script');

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

describe('check new players', () => {
  const player = {
    name: 'Anna',
    symbol: 'X',
  };
  const name = 'Anna';
  const symbol = 'X';
  test('expect new player to have a name and symbol', () => {
    expect(newPlayer(name, symbol)).toEqual(player);
  });
});

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
