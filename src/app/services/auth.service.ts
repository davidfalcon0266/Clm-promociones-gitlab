import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioLogin } from '../interfaces/user-login';
import { UserRegister } from '../interfaces/user-register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 userAct: string = '';

  constructor(private router: Router) { 
    this.userAct = localStorage.getItem('user') || '';
  }

  login(user: UsuarioLogin): void {
    localStorage.setItem('user', user.email);
    this.userAct = user.email;
  }
  register(user: UserRegister): void {
    console.log(user)
    localStorage.setItem('user', user.nombre);
    this.userAct = user.nombre;
  }
  logout() {
    localStorage.removeItem('user');
    this.userAct = '';
  }
}
