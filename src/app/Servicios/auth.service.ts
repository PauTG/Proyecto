import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDTO } from '../Modelos/jwt.DTO';
import { LoginUsuario } from '../Modelos/login-usuario';
import { NuevoUsuario } from '../Modelos/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = 'https://paulag.herokuapp.com/auth';
  authUrl = 'https://porfolioargentino.herokuapp.com/auth'

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
    return this.httpClient.post<any>(this.authURL + '/nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDTO>{
    return this.httpClient.post<JwtDTO>(this.authURL + '/login', loginUsuario);
  }
}
