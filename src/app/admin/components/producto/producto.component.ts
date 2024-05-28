import { Component, inject } from '@angular/core';
import { ProductoService } from '../../../core/services/producto.service';
import { CategoriaService } from '../../../core/services/categoria.service';
import { LazyLoadEvent } from 'primeng/api';

interface Producto{
  id?: number,
  nombre: string,
  precio: number,
  descripcion: string,
  imagen: string,
  stock: number
}

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent {

  productos: any[] = [];
  categorias: any[] = [];
  categoria_seleccionada: number = -1;

  productDialog: boolean = false;

    // products!: Producto[];

    producto!: Producto;

    submitted: boolean = false;

    totalRecords!: number;

    loading: boolean = false;


  // productoService2 = inject(ProductoService)
  // categoriaService2 = inject(CategoriaService)

  constructor(private productoService: ProductoService,
              private categoriaService: CategoriaService,){
    this.getProductos()
    this.getCategorias();
  }

  getProductos(page:number = 1, limit:number = 10){
    this.loading = true;
    this.productoService.listarProductos(page, limit).subscribe(
      (res: any) => {
        console.log(res);
        this.productos = res.data

        this.totalRecords = res.total;
        this.loading = false;
      }
    )
  }

  loadProductos(event: any) {
    console.log(event);

    let page = (event.first / event.rows)+1;

    this.getProductos(page, event.rows)
    
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

  openNew() {
    this.producto = {descripcion: "", imagen: "", nombre: "", precio: 0, stock: 0};
    this.submitted = false;
    this.productDialog = true;
}

editProduct(product: Producto) {
  this.producto = { ...product };
  this.productDialog = true;
}

deleteProduct(product: Producto) {
  /*
  this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + product.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.products = this.products.filter((val) => val.id !== product.id);
          this.product = {};
          this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
      }
  });
  */
}

}
