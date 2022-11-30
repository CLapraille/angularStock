import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewStockComponent } from './stock-tracker/components/new-stock/new-stock.component';
import { StockListComponent } from './stock-tracker/components/stock-list/stock-list.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SingleStockComponent } from './stock-tracker/components/single-stock/single-stock.component';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { SentimentComponent } from './stock-tracker/components/sentiment/sentiment.component';
import { DefaultPageComponent } from './stock-tracker/components/default-page/default-page.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NewStockComponent,
    StockListComponent,
    SingleStockComponent,
    SentimentComponent,
    DefaultPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    MatIconModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
