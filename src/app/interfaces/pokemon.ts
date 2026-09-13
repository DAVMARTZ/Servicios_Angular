export interface Pokemon {
  id: number;
  name: string;
  sprites: { //Objeto que contiene entre otras cosas, la URL de la imágen
    front_default: string;
  };
  types: Array<{ //Array que contiene el tipo o tipos de pokemon
    type: { name: string };
  }>;
}
