import { UnitKey } from '../types';

export enum Necessary {
  yes = '1',
  no = '0'
}

export interface IIngredient {
  id: number;
  name: string;
  quantity: number;
  unit: UnitKey;
  necessary: Necessary;
  comment?: string;
}

export class Ingredient implements IIngredient {
  private _id: number;
  private _name: string;
  private _quantity: number;
  private _unit: UnitKey;
  private _necessary: Necessary;
  private _comment?: string;

  constructor(
    name: string,
    quantity: number,
    unit: UnitKey,
    necessary: Necessary,
    comment?: string,
    id?: number
  ) {
    this._id = id;
    this._name = name;
    this._quantity = quantity;
    this._unit = unit;
    this._necessary = necessary;
    this._comment = comment;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get quantity(): number {
    return this._quantity;
  }

  set quantity(value: number) {
    this._quantity = value;
  }

  get unit(): UnitKey {
    return this._unit;
  }

  set unit(value: UnitKey) {
    this._unit = value;
  }

  get necessary(): Necessary {
    return this._necessary;
  }

  set necessary(value: Necessary) {
    this._necessary = value;
  }

  get comment(): string {
    return this._comment;
  }

  set comment(value: string) {
    this._comment = value;
  }

  public toObject(this: Ingredient): Record<string, any> {
    return {
      name: this.name,
      quantity: this.quantity,
      unit: this.unit,
      necessary: this.necessary,
      ...(this.comment ? { comment: this.comment } : {})
    };
  }
}
