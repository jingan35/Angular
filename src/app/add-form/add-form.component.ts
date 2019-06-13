import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { RecipeIngredientModel } from '../recipe/recipe-ingredient.model';
import { IngredientModel } from '../recipe/ingredient.model';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

  model: Recipe = new Recipe();;
  ingredient1: RecipeIngredientModel;
  ingredient2: RecipeIngredientModel;
  ing1:IngredientModel;
  ing2: IngredientModel;
  recipeGroup:FormGroup;

  constructor(private router: Router, private recipeService: RecipeService,private formBuilder : FormBuilder ) { 
    this.createForm();
  }

  ngOnInit() {
    this.ing1=new IngredientModel();
    this.ing1.name="vanille";
    this.ing2=new IngredientModel();
    this.ing2.name="choco";
    this.ingredient1=new RecipeIngredientModel();
    this.ingredient2=new RecipeIngredientModel();
    this.ingredient1.ingredient=this.ing1;
    this.ingredient2.ingredient=this.ing2;
    this.ingredient1.quantity=3;
    this.ingredient2.quantity=2;
    this.ingredient1.unit="va";
    this.ingredient2.unit="cho";
    this.model.ingredients=[this.ingredient1,this.ingredient2];
    this.model.instructions= ['.....1','....2']
    
  }

  submit(){
    const recipe = this.recipeGroup.value as Recipe;
    recipe.ingredients=[this.ingredient1,this.ingredient2];
    recipe.instructions=['ajouter','melanger','boire'];
    this.recipeService.postRecipe(recipe).subscribe(()=>this.router.navigate(['recipes']));
    
  }

  createForm(){
    this.recipeGroup=this.formBuilder.group({name:['',Validators.required],picture:['',Validators.maxLength(255)],description:'',})
  }

}
