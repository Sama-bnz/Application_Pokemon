import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})

export class PokemonFormComponent implements OnInit {
@Input() pokemon: Pokemon;
types:string[];

constructor(
  private pokemonService: PokemonService,
  private router: Router
  ) {}

  ngOnInit() {
    //pokemonTypeList
    //J'initialise le formulaire avec tout les types de pokémon présents dans le projet
    this.types = this.pokemonService.getPokemonTypeList();
}
  hasType(type: string): boolean{
    //Je vérifie si un pokemon as ou n'a pas un type à l'initialisation du formumaire
    return this.pokemon.types.includes(type);
  }

  selectType($event: Event, type: string) {
    //lorsque l'utilisateur interagit avec un type, je peux mettre à jour le pokemon 
    const isChecked = ($event.target as HTMLInputElement).checked;

    if(isChecked){
      this.pokemon.types.push(type);
    }else{
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index,1);
    }
  }

  isTypesValid(type: string): boolean {
    if(this.pokemon.types.length == 1 && this.hasType(type)){
      return false;
    }

    if(this.pokemon.types.length > 2 && !this.hasType(type)){
      return false;
    }

    return true;
  }

  onSubmit(){
    console.log('Submit form ! ');
    //Enfin je redirige l'utilisateur sur la page qu'il vient de modifier
    this.router.navigate(['/pokemon', this.pokemon.id]);
  }
}
