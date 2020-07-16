const gameBoard = (() => {
    return {
        board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        reset: function () {
            this.board = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        }
    }
})();

const render = () => {
    let cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i += 1) {
        document.getElementsByClassName('cell')[i].innerHTML = gameBoard.board[i]
    }
}

let currentPlayer = 'x';
let round = 0;
let winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const check = () => {
    let output = false;
    for (let i = 0; i < winningConditions.length; i += 1) {
        let condition = winningConditions[i];
        let a = gameBoard.board[condition[0]];
        let b = gameBoard.board[condition[1]];
        let c = gameBoard.board[condition[2]];
        if (a == b && b == c) {
            output = true;
            break
        }
    }
    return output
};


const play = (num) => {
    if (typeof gameBoard.board[num] == "number"){
        gameBoard.board[num] = currentPlayer;
        render();
        if (check() || round >= 9) {
            result();
        } else {
            round += 1;
            if (currentPlayer === 'x') {
                currentPlayer = 'o'
            } else {
                currentPlayer = 'x'
            }
    
        }
    } else {
        document.getElementById('game-status').innerHTML = `we both know you can't do that, so why are you even trying? click an empty column`
    }
    
}

const result = () => {
    if (round < 9){
        document.getElementById('game-status').innerHTML = `Congratulations ${currentPlayer}! you've won! sucks for ${currentPlayer} 😂`
    } else {
        document.getElementById('game-status').innerHTML = `It's a Draw! well I guess you're both bad at this`
    }
}

const reset = () => {
    gameBoard.reset();
    currentPlayer = 'x';
    round = 0;
    document.getElementById('game-status').innerHTML = ''
    render()
}