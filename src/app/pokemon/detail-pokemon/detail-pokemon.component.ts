import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../../pokemon';
import { PokemonService } from '../pokemon.service';




@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
})
export class DetailPokemonComponent implements OnInit {

  pokemonList: Pokemon[];
  pokemon: Pokemon|undefined;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
    ) {}
    

    ngOnInit() {
      //On fait appel à la route courante à l'instant T je récupere le paramètre identifiant.
      const pokemonId: string|null= this.route.snapshot.paramMap.get('id');
      if(pokemonId) {
      //Le + devant pokemonId permet de changer les chaine de caractere paramétrée de base en nombre.
      this.pokemonService.getPokemonById(+pokemonId)
      .subscribe(pokemon => this.pokemon = pokemon);
      }
    }

    goToPokemonList(){
      this.router.navigate(['/pokemons']);
    }
  
    gotToEditPokemon(pokemon:Pokemon){
      this.router.navigate(['/edit/pokemon', pokemon.id]);
    }

    deletePokemon(pokemon: Pokemon){
      this.pokemonService.deletePokemonById(pokemon.id)
      .subscribe(()=> this.goToPokemonList());
    }
}
