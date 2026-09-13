import { Injectable } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokeService {

  /*CONSUMO USANDO AYNC AWAIT*/

  //Async: es una función que devuelve una promesa
  //Promesa: es un resultado futuro (ya se an error o acierto)
  //Await: instrucción que frena la promesa tenga un resultado

  
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon'; //URL BASE

  async getPokemon(idOrName: number | string): Promise<Pokemon> { //Función asincrrona que devuelve una promesa tipo Pokemon
    const response = await fetch(`${this.baseUrl}/${idOrName}`); //ffetch hace la peticion get del pokemon por ID
    
    if (!response.ok) { //si la respuesta es diferente a ok
      throw new Error(`Error al obtener Pokémon con ID: ${idOrName}`); 
    }
    return await response.json(); //detiene el codigo hasta transformar la respuesta en tipo JSON.
  };
}
