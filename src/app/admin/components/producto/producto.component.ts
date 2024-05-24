import { Component, inject } from '@angular/core';
import { ProductoService } from '../../../core/services/producto.service';
import { CategoriaService } from '../../../core/services/categoria.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent {

  productos: any[] = [];
  categorias: any[] = [];
  categoria_seleccionada: number = -1;
  // productoService2 = inject(ProductoService)
  // categoriaService2 = inject(CategoriaService)

  constructor(private productoService: ProductoService,
              private categoriaService: CategoriaService,){
    this.getProductos()
    this.getCategorias();
  }

  getProductos(){
    this.productoService.listarProductos().subscribe(
      (res: any) => {
        console.log(res);
        this.productos = res.data
      }
    )
  }

  getCategorias(){
    this.categoriaService.listarCategorias().subscribe(
      (res: any) => {
        console.log(res);
        this.categorias = res
      }
    )
  }

  funObtenerLosProductos(){
    console.log(this.categoria_seleccionada);
    this.categoriaService.mostrarCategoria(this.categoria_seleccionada).subscribe(
      (res: any) => {
        this.productos = res.productos
      }
    )
  }

}
