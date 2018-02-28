import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

@Injectable()

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() { }


  getIngredients(){
    // to get work done #1 solutation  
       // return this.ingredients;
    return this.ingredients.slice(); 
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

}
