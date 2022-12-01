import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewStockComponent } from './stock-tracker/components/new-stock/new-stock.component';
import { StockListComponent } from './stock-tracker/components/stock-list/stock-list.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SingleStockComponent } from './stock-tracker/components/single-stock/single-stock.component';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { SentimentComponent } from './stock-tracker/components/sentiment/sentiment.component';
import { DefaultPageComponent } from './stock-tracker/components/default-page/default-page.component';
import { AppRoutingModule } from './app-routing.module';
import { SingleSentimentComponent } from './stock-tracker/components/single-sentiment/single-sentiment.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { LoadingInterceptor } from './interceptors/loading.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NewStockComponent,
    StockListComponent,
    SingleStockComponent,
    SentimentComponent,
    DefaultPageComponent,
    SingleSentimentComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    MatIconModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
