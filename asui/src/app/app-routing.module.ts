import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecipeDetailsComponent} from "./recipe-details/recipe-details.component";
import {AccountDetailsComponent} from "./account-details/account-details.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {ShopListComponent} from "./shop-list/shop-list.component";

const routes: Routes = [
  { path:'', redirectTo:'/home', pathMatch:'full'},
  { path: 'home', component: HomePageComponent},
  { path: 'recipes/:id', component: RecipeDetailsComponent},
  { path: 'signIn', component: SignInComponent},
  { path: 'signUp', component: SignUpComponent},
  { path: 'recipes/:id', component: RecipeDetailsComponent},
  { path: 'users/:id', component: AccountDetailsComponent},
  { path: 'users/:id/shoplist', component: ShopListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
