import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DBDGZ, DbzResponse } from '../interfaces/anime.interface';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  private http = inject(HttpClient); // Inyecta la dependecia usada para consumir la api
  private apiUrl = 'https://dragonball-api.com/api/characters'; // Url de la api de DBZ

  getAnime(): Observable<DBDGZ[]> { // Metodo creado usando observable que trabaja de forma asincrona con multiples datos continuos desde aqui se emite 
  // la informacion a los multiples servicios o componentes que esten escuchando
    return this.http.get<DbzResponse>(this.apiUrl).pipe( // retorna el identificador this que determina que http hace parte de la clase, con ese http usando el get como metodo de acceso de llamado se recibe la
      // informacion de la interfaz de la respuesta y devolvera la misma informacion del tipo de respuesta seteando con la funcion/tuberia pipe que permite crear otros metodos, como map, este tiene la funcion principal de transformar los datos  
      map(response => response.items) // El map crea una variable interna que accede a la propiedad items, declarada en la interfaz de respuesta de tipo interfaz de datos
    );
  }
}
