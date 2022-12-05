import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewStockComponent } from './components/new-stock/new-stock.component';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { SingleStockComponent } from './components/single-stock/single-stock.component';
import { SentimentComponent } from './components/sentiment/sentiment.component';
import { DefaultPageComponent } from './components/default-page/default-page.component';
import { SingleSentimentComponent } from './components/single-sentiment/single-sentiment.component';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NewStockComponent,
    StockListComponent,
    SingleStockComponent,
    SentimentComponent,
    DefaultPageComponent,
    SingleSentimentComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  exports: [
    NewStockComponent,
    StockListComponent,
    SingleStockComponent,
    SentimentComponent,
    DefaultPageComponent,
    SingleSentimentComponent,
  ]

})
export class StockTrackerModule { }
