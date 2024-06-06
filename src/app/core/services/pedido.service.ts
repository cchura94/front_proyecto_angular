import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido } from '../interfaces/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  http = inject(HttpClient)

  urlBase: string = environment.servidor1

  constructor() { }

  listarPedidos(page:number=1, limit:number = 10, q: string = ''): Observable<Pedido[]>{
    return this.http.get<Pedido[]>(`${this.urlBase}/pedido?page=${page}&limit=${limit}&q=${q}`)
  }

  guardarPedido(datos: Pedido): Observable<string>{
    return this.http.post<string>(`${this.urlBase}/pedido`, datos);
  }

  buscarCliente(q: string=''){
    return this.http.get(`${this.urlBase}/cliente/buscar?q=${q}`)
  }

}
