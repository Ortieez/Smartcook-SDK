import { Basics } from './resources/basics/basics';
import { Recipes } from './resources/recipes/recipes';
import { Config } from './resources/base';

export class Smartcook {
  basics: Basics;
  recipes: Recipes;

  constructor(config: Config) {
    this.basics = new Basics(config);
    this.recipes = new Recipes(config);
  }
}
