import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InventoryDetailsComponent} from './Inventory/inventory-details/inventory-details.component'

const routes: Routes = [
  { path: 'Inventory', component: InventoryDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
