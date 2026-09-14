import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  imports: [ReactiveFormsModule],
  templateUrl: './form-reactive.html',
  styleUrl: './form-reactive.css',
})
export class FormReactive {

  /* un formulario reactivo es una técnica que gestiona 
     los formularios en typescript de forma sincrona, 
     es decir cuando un usuario escribe algo, eso va 
     directa e instaneamente a un objeto del ts.

     El estado del formulario y sus validaciones, se hacen
     de forma automática, no hay que esperar que Angular
     actualice la interfaz.
  */
  
  movieForm: FormGroup; //FormGroup es un tipo de dato que representa a todo el formulario
  name: FormControl; //FormControl es cada una de las piezas del formulario
  duration: FormControl;
  director: FormControl;

  /* iniciar las varibales en el constructor */
  constructor() {
    this.name = new FormControl(''); //instancia de la clase con el atributo vacio
    this.duration = new FormControl(''); 
    this.director = new FormControl('');

    this.movieForm = new FormGroup({ //Instancia que contiene un objeto con los datos del form
      name: this.name,
      duration: this.duration,
      director: this.director
    })
  }

  handleSubmit(): void {
    console.log(this.movieForm.value); //value es el que contiene la información registrada 
  }
}
