import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlBase: string = environment.servidor1

  constructor(private http: HttpClient) { }

  login(credenciales: any){
    return this.http.post(`${this.urlBase}/v1/auth/login`, credenciales)
  }

  perfil(){
    return this.http.get(`${this.urlBase}/v1/auth/profile`);
  }

}
