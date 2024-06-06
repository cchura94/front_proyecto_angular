import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { ProductoComponent } from './components/producto/producto.component';
import { AppLayoutComponent } from '../layout/app.layout.component';
import { authGuard } from '../core/guards/auth.guard';
import { PedidoListaComponent } from './components/pedido/pedido-lista/pedido-lista.component';
import { PedidoNuevoComponent } from './components/pedido/pedido-nuevo/pedido-nuevo.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {path: 'perfil', component: PerfilComponent, canActivate: [authGuard]},
      {path: 'categoria', component: CategoriaComponent, canActivate: [authGuard]},
      {path: 'producto', component: ProductoComponent, canActivate: [authGuard]},
      {
        path: 'pedido',
        component: PedidoListaComponent,
        canActivate: [authGuard]
      },
      {
        path: 'pedido/nuevo',
        component: PedidoNuevoComponent,
        canActivate: [authGuard]
      }      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
