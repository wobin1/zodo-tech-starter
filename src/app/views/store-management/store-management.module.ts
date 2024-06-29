import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreManagementRoutingModule } from './store-management-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrimeNGModule } from '../../prime-ng/prime-ng.module';
import { StoreManagementComponent } from './store-management.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ReportsComponent } from './reports/reports.component';
import { SupliersComponent } from './supliers/supliers.component';
import { OrdersComponent } from './orders/orders.component';
import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    DashboardComponent,
    StoreManagementComponent,
    InventoryComponent,
    ReportsComponent,
    SupliersComponent,
    OrdersComponent,
  ],
  imports: [
    CommonModule,
    StoreManagementRoutingModule,
    PrimeNGModule,
    SharedModule,
    HttpClientModule,
    
  ]
})
export class StoreManagementModule { }
