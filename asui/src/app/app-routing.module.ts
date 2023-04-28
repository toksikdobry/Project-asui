import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent} from "./recipes/recipes.component";
import {RecipeDetailsComponent} from "./recipe-details/recipe-details.component";
const routes: Routes = [
  { path: 'recipes', component: RecipesComponent},
  { path: 'recipes/:id', component: RecipeDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
