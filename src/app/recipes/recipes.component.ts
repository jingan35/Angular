import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit{
  title = 'formationAngular';
  recipes: Recipe[];

  constructor(private recipeService: RecipeService){

  }

  ngOnInit():void{
    this.recipeService.getRecipes().subscribe(
      (result: Recipe[]) => {
        console.log("test:"+result)
        this.recipes=result
      },
      (error) => {
          // Traiter l'erreur
      }
  );
  }

  delete(recipe:Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe),1);
  }
}

