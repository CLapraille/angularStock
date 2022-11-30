import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManagedStock } from 'src/app/models/managed-stock.model';
import { StockSentiment } from 'src/app/models/stock-sentiment.model';
import { FinnhubQuoteService } from 'src/app/services/finnhub-stock.service';

@Component({
  selector: 'app-sentiment',
  templateUrl: './sentiment.component.html',
  styleUrls: ['./sentiment.component.scss']
})
export class SentimentComponent implements OnInit {

  stockSentiments!: StockSentiment[];
  stockName: string = 'Not yet coded :p';
  providedSymbol!: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private fhStockServie : FinnhubQuoteService) { }

  ngOnInit(): void {
    this.providedSymbol = this.route.snapshot.params['symbol'];
    console.log(`provided symbol is : ${this.providedSymbol}`)

    this.fhStockServie.getSentimentForStock(this.providedSymbol).subscribe(r => this.stockSentiments = r);
  }

  onBackward(){
    this.router.navigateByUrl('');
  }
}
