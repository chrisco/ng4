import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Pad Thai',
      'Pad thai or phad thai is a stir-fried rice noodle dish commonly served as a street food and at casual local eateries in Thailand.',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Phat_Thai_kung_Chang_Khien_street_stall.jpg/768px-Phat_Thai_kung_Chang_Khien_street_stall.jpg',
      [
        new Ingredient('Rice noodles', 1),
        new Ingredient('Chicken', 1),
        new Ingredient('Veggies', 1),
        new Ingredient('Seasonings', 1)
      ]
    ),
    new Recipe(
      'Chicken Kathi Roll',
      'Boneless chicken pieces sautéed with ginger garlic, cumin, onion and chillies - stuffed into a refined flour roti slathered with fresh green chutney and sprinkled with chaat masala and more onions.',
      'http://images.tastespotting.com/uploads/thumbnail/50726.jpg',
      [
        new Ingredient('Pack of roti', 10),
        new Ingredient('Chicken', 1),
        new Ingredient('Veggies', 1),
        new Ingredient('Seasonings', 1)
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipeById(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(id: number) {
    this.recipes.splice(id, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
