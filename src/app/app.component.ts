import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'})
  
export class AppComponent implements OnInit{
  pokemonList: Pokemon[] = POKEMONS;
 // Je déclare une nouvelle propriété qui correspondra au pokemon sélectionné par l'utilisateur
 pokemonSelected: Pokemon|undefined;


  ngOnInit() {
    console.table(this.pokemonList);
  }

  selectPokemon(pokemonId: string){
  //J'affiche le pokemon qui correspond à l'identifiant selectionné
    const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);
    if(pokemon){
      console.log(`vous avez cliquer sur le pokemon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    }else {
      console.log(`Ce pokémon n'existe pas.`);
      this.pokemonSelected = pokemon;
    }
  }
}
