import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from '../../../../core/interfaces/producto';
import { ProductoService } from '../../../../core/services/producto.service';

@Component({
  selector: 'app-pedido-producto',
  templateUrl: './pedido-producto.component.html',
  styleUrl: './pedido-producto.component.scss',
})
export class PedidoProductoComponent {
  @Input() titulo: string = '';
  @Output() productoEvent = new EventEmitter<Producto>();
  // @Input() lista_productos: Producto[] = [];

  productos: any[] = [];
  categoria_seleccionada: number = -1;

  // products!: Producto[];

  producto!: Producto;

  totalRecords!: number;

  loading: boolean = false;

  buscador: string = '';

  constructor(
    private productoService: ProductoService
  ) {
    this.getProductos();
  }

  getProductos(page: number = 1, limit: number = 10, q = '') {
    this.loading = true;
    this.productoService
      .listarProductos(page, limit, q)
      .subscribe((res: any) => {
        console.log(res);
        this.productos = res.data;

        this.totalRecords = res.total;
        this.loading = false;
      });
  }

  loadProductos(event: any) {
    console.log(event);

    let page = event.first / event.rows + 1;

    this.getProductos(page, event.rows);
  }

  buscar(event: KeyboardEvent){
    if(event.key === 'Enter'){
      this.getProductos(1, 10, this.buscador)
    }
  }

  addCarrito(product: Producto){
    this.productoEvent.emit(product);
  }
}
