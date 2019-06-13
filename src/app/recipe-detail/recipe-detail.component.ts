import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeIngredientModel } from '../recipe/recipe-ingredient.model';
import { Recipe } from '../recipe/recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  id: string;
  recipe: Recipe;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    this.id= this.route.snapshot.paramMap.get("id");
    this.recipeService.getRecipe(this.id).subscribe(result=>this.recipe=result);
  }

}
