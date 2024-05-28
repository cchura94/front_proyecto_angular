import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext'

import { ConfirmationService, MessageService } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';


const modulos = [
  TableModule,
  ButtonModule,
  PasswordModule,
  DialogModule,
  InputTextModule,
  RippleModule,
  ToastModule,
  ToolbarModule,
  ConfirmDialogModule,
  InputTextareaModule,
  FileUploadModule,
  DropdownModule,
  TagModule,
  RadioButtonModule,
  RatingModule,
  FormsModule,
  InputNumberModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modulos
  ],
  exports: [modulos],
  providers: [ConfirmationService, MessageService]
})
export class PrimeModule { }
