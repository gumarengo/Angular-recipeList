import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.modal';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Maçã', 5),
    new Ingredient('Carne', 10)
  ];

  constructor() { }

  ngOnInit(): void {
  }
  onIngredientAdded(ingredient: Ingredient){
this.ingredients.push(ingredient);
  }

}
