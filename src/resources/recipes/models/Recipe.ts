import { DishCategoryKey, RecipeCategoryKey, ToleranceKey } from '../types';
import { Ingredient } from './Ingredient';

interface IRecipe {
  id?: number;
  name: string;
  difficulty: number;
  duration: string;
  price: number;
  description: string;
  country: string;
  dishCategory: DishCategoryKey[];
  recipeCategory: RecipeCategoryKey[];
  tolerance: ToleranceKey[];
  ingredients: Ingredient[];
  author: string;
}

export class Recipe implements IRecipe {
  private _id?: number;
  private _name: string;
  private _difficulty: number;
  private _duration: string;
  private _price: number;
  private _description: string;
  private _country: string;
  private _dishCategory: DishCategoryKey[];
  private _recipeCategory: RecipeCategoryKey[];
  private _tolerance: ToleranceKey[];
  private _ingredients: Ingredient[];
  private _author: string;

  constructor(
    name: string,
    difficulty: number,
    duration: string,
    price: number,
    description: string,
    country: string,
    dishCategory: DishCategoryKey[],
    recipeCategory: RecipeCategoryKey[],
    tolerance: ToleranceKey[],
    ingredients: Ingredient[],
    author: string,
    id?: number
  ) {
    this._id = id;
    this._name = name;
    this._difficulty = difficulty;
    this._duration = duration;
    this._price = price;
    this._description = description;
    this._country = country;
    this._dishCategory = dishCategory;
    this._recipeCategory = recipeCategory;
    this._tolerance = tolerance;
    this._ingredients = ingredients;
    this._author = author;
  }

  get id(): number | undefined {
    return this._id;
  }

  set id(value: number | undefined) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get difficulty(): number {
    return this._difficulty;
  }

  set difficulty(value: number) {
    this._difficulty = value;
  }

  get duration(): string {
    return this._duration;
  }

  set duration(value: string) {
    this._duration = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }

  get dishCategory(): DishCategoryKey[] {
    return this._dishCategory;
  }

  set dishCategory(value: DishCategoryKey[]) {
    this._dishCategory = value;
  }

  get recipeCategory() {
    return this._recipeCategory;
  }

  set recipeCategory(value: RecipeCategoryKey[]) {
    this._recipeCategory = value;
  }

  get tolerance(): ToleranceKey[] {
    return this._tolerance;
  }

  set tolerance(value: ToleranceKey[]) {
    this._tolerance = value;
  }

  get ingredients(): Ingredient[] {
    return this._ingredients;
  }

  set ingredients(value: Ingredient[]) {
    this._ingredients = value;
  }

  get author(): string {
    return this._author;
  }

  set author(value: string) {
    this._author = value;
  }

  public toObject(this: Recipe): Record<string, any> {
    return {
      name: this.name,
      difficulty: this.difficulty,
      duration: this.duration,
      price: this.price,
      description: this.description,
      country: this.country,
      dish_category: this.dishCategory,
      recipe_category: this.recipeCategory,
      tolerance: this.tolerance,
      ingredient: this.ingredients.map((ingredient: Ingredient) => {
        return ingredient.toObject();
      }),
      author: this.author
    };
  }
}
