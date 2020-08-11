const { newPlayer } = require('../js/script');


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
