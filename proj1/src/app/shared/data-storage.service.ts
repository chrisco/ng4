import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipeService: RecipeService) { }

  storeRecipes() {
    return this.http.put(
      'https://ng-recipe-book-b2cfe.firebaseio.com/recipes.json',
      this.recipeService.getRecipes()
    );
  }

  getRecipes() {
    return this.http.get('https://ng-recipe-book-b2cfe.firebaseio.com/recipes.json')
      .map(
        (response: Response) => {
        const recipes: Recipe[] = response.json();

        for (const recipe of recipes) {
          if (!recipes['ingridients']) {
            recipe['ingridients'] = [];
          }
        }

        return recipes;
      })
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
