import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';
import { ProductoComponent } from './components/producto/producto.component';
import { AppLayoutModule } from '../layout/app.layout.module';
import { PrimeModule } from '../prime/prime.module';
import { PedidoListaComponent } from './components/pedido/pedido-lista/pedido-lista.component';
import { PedidoNuevoComponent } from './components/pedido/pedido-nuevo/pedido-nuevo.component';
import { PedidoProductoComponent } from './components/pedido/pedido-producto/pedido-producto.component';




@NgModule({
  declarations: [
    PerfilComponent,
    CategoriaComponent,
    ProductoComponent,
    PedidoListaComponent,
    PedidoNuevoComponent,
    PedidoProductoComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    CoreModule,
    FormsModule,
    AppLayoutModule,

    PrimeModule
    
  ]
})
export class AdminModule { }
