import { Component } from '@angular/core';
import { Pokemon } from 'src/app/pokemon';

@Component({
  selector: 'app-create-pokemon',
  template: `
    <h2 class="center">Ajouter un pokemon</h2> 
    <app-pokemon-form [pokemon]="pokemon"></app-pokemon-form>
  `
})
export class CreatePokemonComponent {

  pokemon : Pokemon;

  ngOnInit() {
    //ici j'initialize un nouveau pokemon 
    this.pokemon = new Pokemon();
  }
}
