import { Component, OnInit } from '@angular/core';
import { ManagedStock } from 'src/app/models/managed-stock.model';
import { FinnhubQuoteService } from 'src/app/services/finnhub-stock.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {

  constructor(private fhQuoteService: FinnhubQuoteService) { }

  managedStocks!: ManagedStock[];

  ngOnInit(): void {
    this.managedStocks = [
      { "description": "APPLE INC", "symbol": "AAPL", "stockQuote": { "c": 141.17, "d": -3.05, "dp": -2.1148, "h": 144.81, "l": 140.355, "o": 144.29, "pc": 144.22, "t": 1669755604 } },
      { "description": "Google Co", "symbol": "GOOGL", "stockQuote": { "c": 141.17, "d": 3.05, "dp": 2.1148, "h": 144.81, "l": 140.355, "o": 144.29, "pc": 144.22, "t": 1669755604 } },
      { "description": "APPLE INC", "symbol": "AAPL", "stockQuote": { "c": 141.17, "d": -3.05, "dp": -2.1148, "h": 144.81, "l": 140.355, "o": 144.29, "pc": 144.22, "t": 1669755604 } },
      { "description": "APPLE INC", "symbol": "AAPL", "stockQuote": { "c": 141.17, "d": -3.05, "dp": -2.1148, "h": 144.81, "l": 140.355, "o": 144.29, "pc": 144.22, "t": 1669755604 } },
      { "description": "APPLE INC", "symbol": "AAPL", "stockQuote": { "c": 141.17, "d": -3.05, "dp": -2.1148, "h": 144.81, "l": 140.355, "o": 144.29, "pc": 144.22, "t": 1669755604 } },
      { "description": "APPLE INC", "symbol": "AAPL", "stockQuote": { "c": 141.17, "d": -3.05, "dp": -2.1148, "h": 144.81, "l": 140.355, "o": 144.29, "pc": 144.22, "t": 1669755604 } }
    ];
  }

  onTrackButtonClick(){
    //this.fhQuoteService.getManagedStockForStock('AAPL').subscribe(r => this.managedStock = r);
  }
}
