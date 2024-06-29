import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { InputComponent } from './components/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmDeleteModalComponent } from './components/confirm-delete-modal/confirm-delete-modal.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    InputComponent,
    ConfirmDeleteModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    InputComponent,
    ConfirmDeleteModalComponent
  ]
})
export class SharedModule { }
