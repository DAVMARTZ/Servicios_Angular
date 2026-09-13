import { Component, inject, OnInit } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';
import { PokeService } from '../../services/poke.service';

@Component({
  selector: 'app-pokelistcomponent',
  imports: [],
  templateUrl: './pokelistcomponent.html',
  styleUrl: './pokelistcomponent.css',
})
export class Pokelistcomponent implements OnInit{ //onInit indica que el metodo utiliza ngOninit

  //Async: es una función que devuelve una promesa
  //Promesa: es un resultado futuro (ya se an error o acierto)
  //Await: instrucción que frena la promesa tenga un resultado

  private pokeservice = inject(PokeService); //inyección del servicio 

  pokemons: Pokemon[] = [];
  errorMessage: string = '';

  async ngOnInit(): Promise<void> { //ngOnInit: cada vez que el usuario accede al componente 
    try {
      
      //estos son los IDs de los pokemones que quiero consumir
      const pokemonIds = [1, 2, 3, 4, 5];

      //Ejecutar las 5 periciones en paralelo
      const promises = pokemonIds.map(id => this.pokeservice.getPokemon(id)); //crea una lista con 5 promesas pendientes, 
                                                                             //.map crea un nuevo array trasnformando el original y se llena con las promnesas
      
      //Esperar a que se resuelvan las promesas y guardar los datos
      this.pokemons = await Promise.all(promises); //Promise.all ejecuta todas las promesas al tiempo y devuelve una sola cuando terminan con exito
    } catch (error) {
      this.errorMessage = 'No se pudieron cargar los 5 pokemones';
    } 
  }

}
