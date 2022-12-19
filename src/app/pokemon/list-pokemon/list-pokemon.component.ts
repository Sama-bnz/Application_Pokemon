import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  
})
export class ListPokemonComponent implements OnInit {
  pokemonList: Pokemon[];

  constructor(
    private router: Router,
    private pokemonService: PokemonService){
    //A NE SURTOUT PAS FAIRE LA LIGNE EN DESSOUS!!!!
    //const pokemonService = new PokemonService();
  }

  ngOnInit(){
    //J'initialise la liste de mes pokemon grace à mon pokemonService que j'ai précedemment, 
    //cela permet de rendre mon code plus souple
    this.pokemonList = this.pokemonService.getPokemonList();
  }

    goToPokemon(pokemon: Pokemon){
      this.router.navigate(['/pokemon', pokemon.id]);

    }
  
}
