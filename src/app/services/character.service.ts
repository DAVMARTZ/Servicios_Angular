import { Injectable } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { CharacterResponse } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {

  // httpResource recibe una función que devuelve la URL (o un objeto de configuración).
  // Angular ejecuta esa función, hace el GET, y guarda el resultado en un "resource" reactivo.
  // el resource se actualiza solo.
  charactersResource = httpResource<CharacterResponse>(
    () => 'https://rickandmortyapi.com/api/character'
  );
}