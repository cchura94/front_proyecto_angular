import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  urlBase: string = environment.servidor1

  constructor(private http: HttpClient) { }

  listarProductos(page:number, limit:number, q: string){
    return this.http.get(`${this.urlBase}/producto?page=${page}&limit=${limit}&q=${q}`)
  }

  actualizaImagen(id:any, formData: any){
    return this.http.post(`${this.urlBase}/producto/${id}/carga-imagen`, formData)
  }
}
