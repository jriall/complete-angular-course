import {  Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
        'Tasty recipe 1',
        'Om nom nom nom nom',
        'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/12/vegan-thai-curry.jpg?itok=8Il6uTfT',
        [
          new Ingredient('Tofu', 1),
          new Ingredient('Noodles', 2)
        ]),
    new Recipe(
      'Tasty recipe 2',
      'Damn that\'s good',
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/12/vegan-thai-curry.jpg?itok=8Il6uTfT',
      [
        new Ingredient('Burger bun', 1),
        new Ingredient('Veggie burger', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {

  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
