import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { Pokemon } from 'src/app/pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  
})
export class SearchPokemonComponent implements OnInit {

  searchTerms = new Subject<string>();
  pokemon$: Observable<Pokemon[]>;

  constructor(
    private router: Router,
    private pokemonService: PokemonService
    ){ }

  ngOnInit(): void {
    this.pokemon$ = this.searchTerms.pipe(
      //je part d'un flux d'evennement utilisateur 
      //{..."a"."ab"..."abz"."ab"...."abc"....}
      debounceTime(300),
      //{...."ab"...."ab"....."abc"....}
      distinctUntilChanged(),
      //{...."ab"........."abc"....}
      switchMap((term) => this.pokemonService.searchPokemonList(term))
      //J'obtiens un flux de resultat correspondant venant du serveur
      //{....PokemonList(ab).........pokemonList(abc)....}
    );
  }

  search(term: string){
    this.searchTerms.next(term);
  } 

  goToDetail(pokemon: Pokemon){
    const link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }
}
function SwitchMap(arg0: (term: any) => Observable<Pokemon[]>): import("rxjs").OperatorFunction<string, Pokemon[]> {
  throw new Error('Function not implemented.');
}

