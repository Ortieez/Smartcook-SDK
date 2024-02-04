import { Basics } from './resources/basics/basics';
import { Recipes } from './resources/recipes/recipes';
import { Config } from './resources/base';
export { Recipe } from "./resources/recipes/models/Recipe";
export { Ingredient } from "./resources/recipes/models/Ingredient";
export {
  Necessary,
  DishCategory,
  RecipeCategory,
  Difficulty,
  Price,
  Unit,
  Tolerance,
  Attribute,
  Filter,
  FilterParams
} from "./resources/recipes/types";
export { Status, ErrorResponse, ValidResponse } from "./resources/basics/types";


export class Smartcook {
  basics: Basics;
  recipes: Recipes;
  authorName: string;

  constructor(config: Config) {
    this.basics = new Basics(config);
    this.recipes = new Recipes(config);
    this.authorName = config.authorName
  }
}

