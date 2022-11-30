import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewStockComponent } from './stock-tracker/components/new-stock/new-stock.component';
import { StockListComponent } from './stock-tracker/components/stock-list/stock-list.component';
import { StockDetailComponent } from './stock-tracker/components/stock-detail/stock-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NewStockComponent,
    StockListComponent,
    StockDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
