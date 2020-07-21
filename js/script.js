const gameBoard = (() => ({
  board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  reset() {
    this.board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  },
}))();


const newPlayer = (name, symbol) => ({ name, symbol });


const gamePlay = (() => {
  const render = () => {
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i += 1) {
      document.getElementsByClassName('cell')[i].innerHTML = gameBoard.board[i];
    }
  };

  let currentSymbol;
  let currentPlayer;
  let round = 1;
  let player1;
  let player2;
  let gameActive = true;
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const check = () => {
    let output = false;
    for (let i = 0; i < winningConditions.length; i += 1) {
      const condition = winningConditions[i];
      const a = gameBoard.board[condition[0]];
      const b = gameBoard.board[condition[1]];
      const c = gameBoard.board[condition[2]];
      if (a === b && b === c) {
        output = true;
        gameActive = false;
        break;
      }
    }
    return output;
  };
  const draw = () => {
    if (round >= 9 && !check()) {
      gameActive = false;
      return true;
    }
    return false;
  };

  const loser = () => {
    if (currentPlayer === player1.name) {
      return player2.name;
    }
    return player1.name;
  };

  const result = () => {
    if (check()) {
      document.getElementById('game-status').innerHTML = `Congratulations ${currentPlayer}! you've won! sucks for ${loser()} 😂`;
    } else {
      document.getElementById('game-status').innerHTML = 'It\'s a Draw! well I guess you\'re both bad at this🙄';
    }
  };

  const play = (num) => {
    if (typeof gameBoard.board[num] !== 'number' || !gameActive) {
      return;
    }
    if (gameActive) {
      if (typeof gameBoard.board[num] === 'number') {
        gameBoard.board[num] = currentSymbol;
        render();
      }
      if (check() || draw()) {
        result();
      } else {
        if (currentPlayer === player1.name) {
          currentPlayer = player2.name;
          currentSymbol = player2.symbol;
        } else {
          currentPlayer = player1.name;
          currentSymbol = player1.symbol;
        }
        round += 1;
      }
    } else {
      document.getElementById('game-status').innerHTML = 'we both know you can\'t do that, so why are you even trying?🙄 ';
    }
  };

  const reset = () => {
    gameBoard.reset();
    currentPlayer = player1.name;
    currentSymbol = player1.symbol;
    round = 1;
    gameActive = true;
    document.getElementById('game-status').innerHTML = '';
    render();
  };

  const form = document.querySelector('#game-form');
  const player1Input = document.querySelector('#player1');
  const player2Input = document.querySelector('#player2');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (player1Input.value !== '' && player2Input.value !== '') {
      render();
      form.style.display = 'none';
      document.querySelector('.reset').style.display = 'block';
      player1 = newPlayer(player1Input.value, 'x');
      player2 = newPlayer(player2Input.value, 'o');
      currentSymbol = player1.symbol;
      currentPlayer = player1.name;
    }
  });
  return { render, play, reset };
})();

gamePlay.render();
