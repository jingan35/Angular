import { Component, OnInit, Input, Output } from '@angular/core';
import {Recipe} from './recipe.model'
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  @Input()
  recipe: Recipe;
  expand: boolean=false;
  constructor(private router: Router, private recipeService: RecipeService) { }

  @Output()
  event = new EventEmitter<Recipe>();

  ngOnInit() {
    console.log(this.recipe)
  }

  toggleExpand(){
    this.expand=!this.expand
  }

  details(){
      window.location.href="recipes/"+this.recipe.id;
  }

  delete(){
    this.recipeService.deleteRecipe(""+this.recipe.id).subscribe(()=>this.event.emit(this.recipe));
    
  }
}
