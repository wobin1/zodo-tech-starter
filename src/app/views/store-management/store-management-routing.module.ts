import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StoreManagementComponent } from './store-management.component';
import path from 'path';
import { InventoryComponent } from './inventory/inventory.component';
import { ReportsComponent } from './reports/reports.component';
import { SupliersComponent } from './supliers/supliers.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  {path: '', component: StoreManagementComponent, children: [
    {path:'dashboard', component: DashboardComponent},
    {path:'inventory', component: InventoryComponent},
    {path:'reports', component: ReportsComponent},
    {path:'supliers', component: SupliersComponent},
    {path:'orders', component: OrdersComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreManagementRoutingModule { }
