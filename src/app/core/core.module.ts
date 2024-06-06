import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaService } from './services/categoria.service';
import { ProductoService } from './services/producto.service';
import { AuthService } from './services/auth.service';
import { PedidoService } from './services/pedido.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [CategoriaService, ProductoService, AuthService, PedidoService]
})
export class CoreModule { }
