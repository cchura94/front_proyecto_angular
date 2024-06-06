import { Component, inject } from '@angular/core';
import { Producto } from '../../../../core/interfaces/producto';
import { PedidoService } from '../../../../core/services/pedido.service';
import { Pedido } from '../../../../core/interfaces/pedido';


interface Carrito{
  producto_id?: number,
  nombre: string,
  precio:number,
  cantidad:number
}

@Component({
  selector: 'app-pedido-nuevo',
  templateUrl: './pedido-nuevo.component.html',
  styleUrl: './pedido-nuevo.component.scss'
})
export class PedidoNuevoComponent {

  carrito: Carrito[] = [];
  
   buscador: string = '';
   cliente_seleccionado: any;

   pedidoService = inject(PedidoService);

   total: number = 0;


  agregarAlCarrito(producto: Producto){
    let sw = false;
    for (let pos in this.carrito) {
      
      if(this.carrito[pos].producto_id == producto.id){
        this.carrito[pos].cantidad++;
        sw=true;

        this.total = parseFloat(this.total.toString()) + parseFloat(this.carrito[pos].precio.toString());
      }
    }
    if(!sw){
      const data = {
        producto_id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad: 1
      }

      this.total = parseFloat(this.total.toString()) + parseFloat(data.precio.toString());
      this.carrito.push(data);
    }
  }

  buscar(event: KeyboardEvent){
    if(event.key === 'Enter'){
      this.pedidoService.buscarCliente(this.buscador).subscribe(
        (res: any) => {
this.cliente_seleccionado = res
        }
      )
    }
  }

  guardarPedido(){

    if(this.cliente_seleccionado?.id){

      let productos: any[] = [];
      this.carrito.forEach(prod => {
        productos.push({producto_id: prod.producto_id, cantidad: prod.cantidad})
      });

      const data: Pedido = {
          cliente_id: this.cliente_seleccionado.id,
          productos: productos,
          observaciones: "NINGUNA",
          estado: 1
      }

      this.pedidoService.guardarPedido(data).subscribe(
        (res: any) => {
          alert("Pedido Registrado")
        },
        (error: any) => {
          alert("Ocurrió un error al registrar el Pedido")
        }
      )

    }else{
      alert("Se necesita datos del cliente");
    }
  }

}
