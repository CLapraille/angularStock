import { MapType } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { ManagedStock } from 'src/app/models/managed-stock.model';
import { StockSentiment, StockSentimentInfo } from 'src/app/models/stock-sentiment.model';
import { FinnhubQuoteService } from 'src/app/services/finnhub-stock.service';
import { TrackedStockService } from 'src/app/services/tracked-stock.service';

@Component({
  selector: 'app-sentiment',
  templateUrl: './sentiment.component.html',
  styleUrls: ['./sentiment.component.scss']
})
export class SentimentComponent implements OnInit {

  defaultSentiments: StockSentimentInfo[] = [];
  // stockSentiments!: StockSentimentInfo[];
  stockName!: string;
  providedSymbol!: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private trackedStock: TrackedStockService,
              private fhStockServie : FinnhubQuoteService) { }

  ngOnInit(): void {
    this.providedSymbol = this.route.snapshot.params['symbol'];
    this.stockName = this.trackedStock.getStockDescription(this.providedSymbol);

    this.defineFullSentimentsList();
    
    this.fhStockServie.getSentimentLast3MonthsForStock(this.providedSymbol).pipe(
      map(sents => [...sents.data].sort((a,b) => a.month - b.month)),
      map(sortedSent => sortedSent.forEach(val => {
        let idx = this.defaultSentiments.findIndex(x => x.month === val.month);
        if(idx > -1) {
          this.defaultSentiments[idx].change = val.change;
          this.defaultSentiments[idx].mspr = val.mspr;
        }
      }))
    ).subscribe();
  }

  defineFullSentimentsList(){
    for (let i = 2; i >= 0; i--) {
      let toDate =  new Date();
      var newDate = new Date(toDate.setMonth(toDate.getMonth()-i));
      let currentMonthSentiment = new StockSentimentInfo();
      
      currentMonthSentiment.symbol = this.providedSymbol;
      currentMonthSentiment.month = newDate.getMonth();
      currentMonthSentiment.year = newDate.getFullYear();

      this.defaultSentiments.push(currentMonthSentiment);
    }
  }

  onBackward(){
    this.router.navigateByUrl('');
  }

  // getStockElement(id: number) : StockSentimentInfo{
  //   if(this.stockSentiments == null || this.stockSentiments.length < id)
  //     return new StockSentimentInfo();

  //   return this.stockSentiments[id];
  // }
}
