import Fighter, { SimpleFighter } from '../Fighter';
// import getRandomInt from '../utils';
import Battle from './Battle';

class PVE extends Battle {
  constructor(
    private _player: Fighter,
    private _enemies: (Fighter | SimpleFighter)[],
  ) {
    super(_player);
  }
  
  static checkWinner(player1: number): number {
    if (player1 === -1) {
      return -1;
    } return 1;
  }

  fight(): number {
    this._enemies.forEach((enemy) => {
      while (this._player.lifePoints > 0 && enemy.lifePoints > 0) {
        this._player.attack(enemy);
        enemy.attack(this.player);
      }
    });
    return PVE.checkWinner(this._player.lifePoints);
  }
}

export default PVE;