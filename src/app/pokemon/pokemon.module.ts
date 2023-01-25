import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { CreatePokemonComponent } from './create-pokemon/create-pokemon.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { LoaderComponent } from './loader/loader.component';
import { AuthGuard } from '../auth.guard';

const pokemonRoutes: Routes = [
  //je déclare un objet qui as une propriété "path" et je lui associe un composant ex:LisPokemonComponent
  { path: 'edit/pokemon/:id', component:EditPokemonComponent, canActivate: [AuthGuard]},
  { path: 'pokemon/create', component:CreatePokemonComponent, canActivate: [AuthGuard]},
  { path: 'pokemons', component:ListPokemonComponent, canActivate: [AuthGuard]},
  { path: 'pokemon/:id', component:DetailPokemonComponent, canActivate: [AuthGuard]},
];

@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonFormComponent,
    EditPokemonComponent,
    CreatePokemonComponent,
    SearchPokemonComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pokemonRoutes)
  ],
  //provideIn root indique à angular qu'on utilise la meme instance de service dans toute l'application.
  providers:[PokemonService]
})
export class PokemonModule { }
