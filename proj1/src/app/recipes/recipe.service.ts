import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

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

  getRecipes() {
    return this.recipes.slice();
  }
}
