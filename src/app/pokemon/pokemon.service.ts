import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TagContentType } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { catchError, Observable,of, tap } from 'rxjs';
import { Pokemon } from '../pokemon';

@Injectable()
export class PokemonService {

  constructor(private http:HttpClient){}

  getPokemonList(): Observable<Pokemon[]> {
    //return POKEMONS;
    //Je fais une requete HTTP qui va recevoir un Obversable qui contient une liste de pokémons 
    //Je passe en parametre de la méthode get une URL 
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      //Dés que j'ai la réponse je la log 
      tap((response) => this.log(response)),
      //Si il y as une erreur je log l'erreur en retournant un tableau vide 
      catchError((error) => this.handleError(error, []))
    );
  }

  getPokemonById(pokemonId: number): Observable<Pokemon|undefined> {
    //return POKEMONS.find(pokemon => pokemon.id == pokemonId);
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
        //Dés que j'ai la réponse je la log 
        tap((response) => this.log(response)),
        //Si il y as une erreur je log l'erreur en retournant undefined
        catchError((error) => this.handleError(error, undefined))
    );
  }

  createPokemon(pokemon: Pokemon): Observable<null>{
    const httpOptions = {
      headers: new HttpHeaders ({'Content-Type ' : 'application/json'})
    };

    return this.http.post('api/pokemons', pokemon, httpOptions).pipe(
      //Dés que j'ai la réponse je la log 
      tap((response) => this.log(response)),
      //Si il y as une erreur je log l'erreur en retournant undefined
      catchError((error) => this.handleError(error, null))
    )
  }

  updatePokemon(pokemon : Pokemon): Observable<null>{
    const httpOptions = {
      headers: new HttpHeaders ({'Content-Type ' : 'application/json'})
    };
     
    return this.http.put('api/pokemons', pokemon, httpOptions).pipe(

      tap((response) => this.log(response)),
      catchError((error) =>  this.handleError(error, null))
    );
  }

  deletePokemonById(pokemonId: number): Observable<null> {
    return this.http.delete(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) =>  this.handleError(error, null))
    );
  }

  private log(response: any) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue)
  }

  getPokemonTypeList(): string[] {
    return[
     'Plante',
     'Feu',
     'Eau',
     'Insect',
     'Normal', 
     'Electrique', 
     'Poison',
     'Fée', 
     'Vol', 
     'Combat',
     'Psy',
     'Sol',
     'Roche',
     'Acier',
     'Glace',
     'Spectre',
    ];
  }
}
function off(arg0: never[]): any {
  throw new Error('Function not implemented.');
}

