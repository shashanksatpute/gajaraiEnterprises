import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InventoryDetailsComponent} from './Inventory/inventory-details/inventory-details.component'
import {CustomerDetailsComponent}from './customer/customer-details/customer-details.component'
import {CustomerMaterialDetailsComponent}from './customer/customer-material-details/customer-material-details.component'
import {BillingDetailsComponent} from './bill/billing-details/billing-details.component'
const routes: Routes = [
  { path: 'Inventory', component: InventoryDetailsComponent },
  { path: 'Customer', component: CustomerDetailsComponent },
  { path: 'CustomerDetails/:id', component: CustomerMaterialDetailsComponent },
  { path: 'buyMaterial/:id', component: BillingDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
