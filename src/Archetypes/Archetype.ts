import { EnergyType } from '../Energy';

abstract class Archetype {
  private _cost: number;
  private _special: number;
  private _name: string;

  constructor(name: string) {
    this._cost = 0;
    this._special = 0;
    this._name = name;
  }

  get name():string {
    return this._name;
  }

  get special():number {
    return this._special;
  }

  get cost():number {
    return this._cost;
  }

  static createdArchetypeInstances():number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}

export default Archetype;