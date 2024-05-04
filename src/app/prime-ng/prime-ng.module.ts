import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import { MenuModule } from 'primeng/menu';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { ChartModule } from 'primeng/chart';



const primeNG:any = [
  TableModule,
  ButtonModule,
  RippleModule,
  TooltipModule,
  MenuModule,
  MessagesModule,
  ToastModule,
  ChartModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, primeNG
  ],
  exports: [primeNG]
})
export class PrimeNGModule { }
