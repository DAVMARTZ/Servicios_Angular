// Define la forma individual de un solo personaje
export interface Character { // Permite que la interfaz sea importada y reutilizada 
    id: number;
    name: string;
    status: string; // Alive, Dead, unknown
    species: string; // Human, Alien
    image: string; // URL de la imagen
}

// Define la respuesta de forma global que devuelve el servidor cuando pide la lista de personajes
export interface CharacterResponse { // La API envuelve los personajes en "results"
    results: Character[];
}