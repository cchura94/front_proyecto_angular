import { Component, inject } from '@angular/core';
import { ProductoService } from '../../../core/services/producto.service';
import { CategoriaService } from '../../../core/services/categoria.service';
import { LazyLoadEvent } from 'primeng/api';

import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable'
import { Producto } from '../../../core/interfaces/producto';


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

    imagenProductoDialog: boolean = false

    uploadedFiles: any[] =[];

    buscador: string = ''


  // productoService2 = inject(ProductoService)
  // categoriaService2 = inject(CategoriaService)

  constructor(private productoService: ProductoService,
              private categoriaService: CategoriaService,){
    this.getProductos()
    this.getCategorias();
  }

  getProductos(page:number = 1, limit:number = 10, q=''){
    this.loading = true;
    this.productoService.listarProductos(page, limit, q).subscribe(
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

actualizaImagen(producto: Producto){
  this.producto = producto;

  this.imagenProductoDialog = true;

}

subirImagen(event: any) {
  console.log(event)
  let formData = new FormData()
  formData.append("imagen", event.files[0]);

  this.productoService.actualizaImagen(this.producto.id, formData).subscribe(
    (res: any) => {
      this.imagenProductoDialog = false;
      this.producto = {nombre: "", imagen: "", stock: 0, precio:0, descripcion: ""};
      this.uploadedFiles = [];
      this.getProductos()
    }
  )
}

  exportarPDF(){
    const doc = new jsPDF();

    const filas = this.productos.map(item => [item.id, item.nombre, item.precio, item.stock, , item.categoria.nombre])

    autoTable(doc, {
      head: [['id', 'Nombre', 'Precio', 'Stock', 'categoria']],
      body: filas,
    })


    doc.save("a4.pdf");
  }

  buscar(event: KeyboardEvent){
    if(event.key === 'Enter'){
      this.getProductos(1, 10, this.buscador)
    }
  }

}
