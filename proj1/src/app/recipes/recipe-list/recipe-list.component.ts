import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Pad Thai', 'Pad thai or phad thai is a stir-fried rice noodle dish commonly served as a street food and at casual local eateries in Thailand.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Phat_Thai_kung_Chang_Khien_street_stall.jpg/768px-Phat_Thai_kung_Chang_Khien_street_stall.jpg'),
    new Recipe('Chicken Kathi Roll', 'Boneless chicken pieces sautéed with ginger garlic, cumin, onion and chillies - stuffed into a refined flour roti slathered with fresh green chutney and sprinkled with chaat masala and more onions.', 'http://images.tastespotting.com/uploads/thumbnail/50726.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
