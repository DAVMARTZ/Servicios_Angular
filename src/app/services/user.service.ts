import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { User, UserResponse } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private url = 'https://dummyjson.com/users';

  obtenerUsuario(): Observable<UserResponse> {
    return ajax.getJSON<UserResponse>(this.url)
  }

}
