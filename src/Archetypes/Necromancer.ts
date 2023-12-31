import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _archInstance = 0;

  constructor(name:string) {
    super(name);
    this._energyType = 'mana';
    Necromancer._archInstance += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances():number {
    return this._archInstance;
  }
}

export default Necromancer;
