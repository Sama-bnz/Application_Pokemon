import { Component } from '@angular/core';
import { Pokemon } from 'src/app/pokemon';

@Component({
  selector: 'app-create-pokemon',
  template: `
    <h2 class="center">Créer un pokemon</h2> 
    <app-pokemon-form [pokemon]="pokemon"]></app-pokemon-form>
  `,
  styles: [
  ]
})
export class CreatePokemonComponent {

  pokemon : Pokemon;

  ngOnInit() {
    this.pokemon = new Pokemon();
  }
}
