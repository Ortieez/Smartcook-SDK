import { DishCategory, RecipeCategory, Tolerance } from '../types';
import { Ingredient } from './Ingredient';

interface IRecipe {
  id?: number;
  name: string;
  difficulty: number;
  duration: string;
  price: number;
  description: string;
  country: string;
  dishCategory: DishCategory[];
  recipeCategory: RecipeCategory[];
  tolerance: Tolerance[];
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
  private _dishCategory: DishCategory[];
  private _recipeCategory: RecipeCategory[];
  private _tolerance: Tolerance[];
  private _ingredients: Ingredient[];
  private _author: string;

  constructor(
    recipe: {
      name: string,
      difficulty: number,
      duration: string,
      price: number,
      description: string,
      country: string,
      dishCategory: DishCategory[],
      recipeCategory: RecipeCategory[],
      tolerance: Tolerance[],
      ingredients: Ingredient[],
      author: string,
      id?: number
    }
  ) {
    this._id = recipe.id;
    this._name = recipe.name;
    this._difficulty = recipe.difficulty;
    this._duration = recipe.duration;
    this._price = recipe.price;
    this._description = recipe.description;
    this._country = recipe.country;
    this._dishCategory = recipe.dishCategory;
    this._recipeCategory = recipe.recipeCategory;
    this._tolerance = recipe.tolerance;
    this._ingredients = recipe.ingredients;
    this._author = recipe.author;
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

  get dishCategory(): DishCategory[] {
    return this._dishCategory;
  }

  set dishCategory(value: DishCategory[]) {
    this._dishCategory = value;
  }

  get recipeCategory() {
    return this._recipeCategory;
  }

  set recipeCategory(value: RecipeCategory[]) {
    this._recipeCategory = value;
  }

  get tolerance(): Tolerance[] {
    return this._tolerance;
  }

  set tolerance(value: Tolerance[]) {
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
