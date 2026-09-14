import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user.interface';


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent implements OnInit{
  usuarios: User[] = [];

  constructor(private userServices: UserService) {}

  ngOnInit(): void {
    this.userServices.obtenerUsuario().subscribe({
      next: (respuesta) => {
        this.usuarios = respuesta.users;
      },
      error(err) {
        console.error('Error al obtener usuarios: ', err);
      },
    });
  }
}
