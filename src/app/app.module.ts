import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InventoryDetailsComponent } from './Inventory/inventory-details/inventory-details.component';
import {InventoryMaterialModule} from './Inventory/material-module';
import { HttpClientModule } from '@angular/common/http';
import { CustomerDetailsComponent } from './customer/customer-details/customer-details.component';
@NgModule({
  declarations: [
    AppComponent,
    InventoryDetailsComponent,
    CustomerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InventoryMaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
