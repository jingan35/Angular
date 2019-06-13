import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipes/recipes.component';
import {AddFormComponent} from './add-form/add-form.component'


const routes: Routes = [
    {
      path: 'recipes/:id',
      component: RecipeDetailComponent,
      pathMatch: 'full'
  },
  {
      path: 'recipes',
      component: RecipesComponent,
      pathMatch: 'full'
  },
  {
    path: 'adding',
    component: AddFormComponent,
    pathMatch: 'full'
  },
  {
      path: '**',
      redirectTo: 'recipes',
      pathMatch: 'full'
  }
];
@NgModule({
  
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { 
  
}
