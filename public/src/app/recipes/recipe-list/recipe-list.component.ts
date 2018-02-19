import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.module';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();


  recipes: Recipe[] = [ new Recipe('A test recipe', 'this is simple taste','http://cdn1.foodviva.com/static-content/food-images/rice-recipes/vegetable-pulav-recipe/vegetable-pulav-recipe.jpg' ),
    new Recipe('A test recipe', 'this is simple taste', 'http://cdn1.foodviva.com/static-content/food-images/rice-recipes/vegetable-pulav-recipe/vegetable-pulav-recipe.jpg')];
  constructor() { }

  ngOnInit() {
  }



  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
