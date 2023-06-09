import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {Ingredient, Recipe} from "./recipe-model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  baseURL = "http://127.0.0.1:8000/recipes/"

  constructor(private client: HttpClient) { }

  getRecipe(id: number) : Observable<Recipe> {
    return this.client.get<Recipe>(this.baseURL + `${id}/`);
  }

  getRecipeList() : Observable<Recipe[]> {
    return this.client.get<Recipe[]>(this.baseURL)
  }

  postRecipe(recipe: Recipe) : Observable<Recipe> {
    return this.client.post<Recipe>(this.baseURL, recipe);
  }

  updateRecipe(recipe: Recipe) : Observable<Recipe> {
    return this.client.put<Recipe>(this.baseURL + `${recipe.id}/`, recipe);
  }

  deleteRecipe(id: number) : Observable<Recipe> {
    return this.client.delete<Recipe>(this.baseURL + `${id}/`);
  }

  saveRecipe(recipe: Recipe) : Observable<Recipe> {
    return this.client.put<Recipe>(this.baseURL + `${recipe.id}/save/`, recipe);
  }

  addToShoppingList(ingredients: Ingredient[]) : Observable<Ingredient[]> {
    return this.client.post<Ingredient[]>(this.baseURL + 'shoplist/add/', ingredients);
  }

  postRating(recipe_id: number, rating: number) : Observable<number> {
    return this.client.post<number>(this.baseURL + `${recipe_id}` + '/rating/', rating);
  }
  uploadRecipePicture(image: File): Observable<Response> {
    const formData = new FormData();
    formData.append('photo', image);
    return this.client.put<Response>(this.baseURL + 'upload-image/', formData);
  }
}
