import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext'


const modulos = [
  TableModule,
  ButtonModule,
  PasswordModule,
  DialogModule,
  InputTextModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modulos
  ],
  exports: [modulos]
})
export class PrimeModule { }
