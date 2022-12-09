import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  //pathMatch permet de mieux isoler les routes
  { path:'', redirectTo: 'pokemons', pathMatch: 'full'},
  // la double * permet de prendre en compte TOUTES les pages
  { path:'**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
