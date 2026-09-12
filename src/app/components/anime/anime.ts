import { Component, inject, OnInit, signal } from '@angular/core';
import { AnimeService } from '../../services/anime.service';
import { DBDGZ } from '../../interfaces/anime.interface';

@Component({
  selector: 'app-anime',
  imports: [],
  templateUrl: './anime.html',
  styleUrl: './anime.css',
})
export class Anime implements OnInit { // Clase modular que implementa el hook  OnInit
  private animeService = inject(AnimeService); // Declaracion de variable privada donde si valor es inyectar el servicio donde se consume la api
  animes = signal<DBDGZ[]>([]); //Señal declarada que es de tipo interfaz de datos del personajes e iniciara con el valor de un arreglo vacio

  ngOnInit(): void { //Metodo Init que inicializa automaticamente de una sola vez despues de que Angular inicializ las propiedades vinculadas
    this.animeService.getAnime().subscribe({ //Usando this usamos animeService y este accede al metodo del servicio que trae todos los datos y 
    //Se subscribe a el con el fin de iformar al observable que lo estan ejecutando
      next: (data) => this.animes.set(data), // Determina que pasara despues de subscribirse y lo que hace la linea es acceder a la señal y asignar todos los datos a la señal
      // para enviarlo al componente donde se esta usando
      error: (err) => console.error('Error al consultar la API:', err) // Otro callback que funciona como mensaje de error, por si durante la trasferencia de datos se rompio algo 
    });
  }
}
