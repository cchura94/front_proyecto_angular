import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { ProductoComponent } from './components/producto/producto.component';
import { AppLayoutComponent } from '../layout/app.layout.component';
import { authGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {path: 'perfil', component: PerfilComponent, canActivate: [authGuard]},
      {path: 'categoria', component: CategoriaComponent, canActivate: [authGuard]},
      {path: 'producto', component: ProductoComponent, canActivate: [authGuard]},
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
