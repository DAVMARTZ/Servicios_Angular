export interface DBDGZ { // Interfaz creada con el fin de ingresar en los datos internos del personaje
    id: number;
    name: string;
    ki: string;
    race:string;
    description:string;
}

export interface DbzResponse { // Segunda interfaz creada para acceder al personaje puesto que la respuesta viene envuelta en un JSON
    items: DBDGZ[]; // Atributo declarado de tipo interfaz de dato de personaje
}