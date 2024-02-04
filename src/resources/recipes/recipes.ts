import { Base } from '../base';
import {ErrorResponse, ValidResponse} from '../basics/types';
import { Recipe } from './models/Recipe';
import { Attribute, Filter, FilterParams } from "./types";

export class Recipes extends Base {
  listCategories(): Promise<ValidResponse | ErrorResponse> {
    return this.request('/structure');
  }

  addNewRecipe(recipe: Recipe): Promise<ValidResponse | ErrorResponse> {
    return this.request('/recipe-add', {
      method: 'POST',
      body: this.prepareBody({ data: recipe.toObject() })
    });
  }

  removeRecipe(recipeId: number): Promise<ValidResponse | ErrorResponse> {
    return this.request('/recipe-remove', {
      method: 'POST',
      body: this.prepareBody({ recipe_id: recipeId })
    });
  }

  validateRecipe(recipe: Recipe): Promise<ValidResponse | ErrorResponse> {
    return this.request('/recipe-validate', {
      method: 'POST',
      body: this.prepareBody({ data: recipe.toObject() })
    });
  }

  getRecipeById(recipeId: number): Promise<ValidResponse | ErrorResponse> {
    return this.request('/recipe', {
      method: "POST",
      body: this.prepareBody({ recipe_id: recipeId})
    })
  }

  getRecipes(attributes?: Attribute[], filters?: Record<string, any>): Promise<ValidResponse | ErrorResponse> {
    return this.request('/recipes', {
      method: "POST",
      body: this.prepareBody({ attributes: attributes, filter: filters })
    })
  }

  createFilters(params: FilterParams): Record<string, any> {
    return {
        [Filter.AUTHOR]: params.author || [],
        [Filter.DISH_CATEGORY]: params.dish_category || [],
        [Filter.RECIPE_CATEGORY]: params.recipe_category || [],
        [Filter.DIFFICULTY]: params.difficulty || [],
        [Filter.PRICE]: params.price || [],
        [Filter.TOLERANCE]: params.tolerance || [],
        [Filter.INGREDIENT]: params.ingredient || [],
    };
  };
}
