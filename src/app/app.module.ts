import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewStockComponent } from './stock-tracker/components/new-stock/new-stock.component';
import { StockListComponent } from './stock-tracker/components/stock-list/stock-list.component';
import { StockDetailComponent } from './stock-tracker/components/stock-detail/stock-detail.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SingleStockComponent } from './stock-tracker/components/single-stock/single-stock.component';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NewStockComponent,
    StockListComponent,
    StockDetailComponent,
    SingleStockComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    MatIconModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
