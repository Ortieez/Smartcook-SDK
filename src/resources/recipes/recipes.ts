import { Base } from '../base';
import { CategoriesResponse } from './types';
import {ErrorResponse, RecipeResponse, ValidResponse} from '../basics/types';
import { Recipe } from './models/Recipe';

export class Recipes extends Base {
  listCategories(): Promise<CategoriesResponse | ErrorResponse> {
    return this.request('/structure');
  }

  addNewRecipe(recipe: Recipe): Promise<RecipeResponse | ErrorResponse> {
    return this.request('/recipe-add', {
      method: 'POST',
      body: this.prepareBody({ data: recipe.toObject() })
    });
  }

  removeRecipe(recipeId: number): Promise<RecipeResponse | ErrorResponse> {
    return this.request('/recipe-remove', {
      method: 'POST',
      body: this.prepareBody({ recipe_id: recipeId })
    });
  }

  validateRecipe(recipe: Recipe): Promise<RecipeResponse | ErrorResponse> {
    return this.request('/recipe-validate', {
      method: 'POST',
      body: this.prepareBody({ data: recipe.toObject() })
    });
  }

  getRecipeById(recipeId: number): Promise<RecipeResponse | ErrorResponse> {
    return this.request('/recipe', {
      method: "POST",
      body: this.prepareBody({ recipe_id: recipeId})
    })
  }

  // TODO: Create a type for filters
  getRecipes(filters?: Record<string, any>): Promise<RecipeResponse | ErrorResponse> {
    return this.request('/recipes', {
      method: "POST",
      body: this.prepareBody({ filters: filters })
    })
  }
}
