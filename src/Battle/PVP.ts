import Fighter from '../Fighter';
import getRandomInt from '../utils';
import Battle from './Battle';

class PVP extends Battle {
  constructor(private _player1: Fighter, private _player2: Fighter) {
    super(_player1);
  }

  static checkWinner(player1: number): number {
    if (player1 === -1) {
      return -1;
    } return 1;
  }

  fight(): number {
    while (this._player1.lifePoints > 0 && this._player2.lifePoints > 0) {
      const oddsOrEvens = getRandomInt(1, 10);
      if (oddsOrEvens % 2 === 0) {
        this._player1.attack(this._player2);
      } else {
        this._player2.attack(this._player1);
      }
    }

    return PVP.checkWinner(this._player1.lifePoints);
  }
}

export default PVP;