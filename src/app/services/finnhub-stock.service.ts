import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { ManagedStock } from '../models/managed-stock.model';
import { StockLookup } from '../models/stock-lookup.model';
import { StockQuote } from '../models/stock-quote.model';

@Injectable({
  providedIn: 'root'
})
export class FinnhubQuoteService {

  constructor(private http: HttpClient) { }

  //https://finnhub.io/api/v1/quote?symbol=AAPL&token=ce3hj72ad3ieh1ff8g20ce3hj72ad3ieh1ff8g2g


  finnhubUrl: string = 'https://finnhub.io/api/v1';
  finnhubToken: string = '&token=bu4f8kn48v6uehqi3cqg';

  // getLookupForStock(stockAcronym: string) : Observable<StockLookup>{
  //   var tmpUrl: string = `${this.finnhubUrl}/search?q=${stockAcronym}${this.finnhubToken}`;    
  //   console.log('built URL : ' + tmpUrl);

  //   return this.http.get<StockLookup>(tmpUrl);
  // }

  getManagedStockForStock(stockAcronym: string) : Observable<ManagedStock> {
      var tmpUrl: string = `${this.finnhubUrl}/search?q=${stockAcronym}${this.finnhubToken}`;    
      console.log('built URL : ' + tmpUrl);
  
      var quote: StockQuote;
      this.getQuoteForStock(stockAcronym).subscribe(r => quote = r);

      return this.http.get<StockLookup>(tmpUrl).pipe(
        map(stock => new ManagedStock({ 
          description: stock.result[0].description, 
          symbol: stock.result[0].symbol,
          stockQuote:quote
          })
        )
      );
  }

  getQuoteForStock(stockAcronym: string) : Observable<StockQuote>{
    var tmpUrl: string = `${this.finnhubUrl}/quote?symbol=${stockAcronym}${this.finnhubToken}`;
    console.log('built URL : ' + tmpUrl);

    return this.http.get<StockQuote>(tmpUrl);
  }
  
}
