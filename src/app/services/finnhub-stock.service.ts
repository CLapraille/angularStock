import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { ManagedStock } from '../models/managed-stock.model';
import { StockLookup } from '../models/stock-lookup.model';
import { StockQuote } from '../models/stock-quote.model';
import { StockSentiment } from '../models/stock-sentiment.model';

@Injectable({
  providedIn: 'root'
})
export class FinnhubQuoteService {

  constructor(private http: HttpClient) { }

  finnhubUrl: string = 'https://finnhub.io/api/v1';
  finnhubToken: string = '&token=bu4f8kn48v6uehqi3cqg';


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

  getSentimentForStock(stockAcronym: string) : Observable<StockSentiment>{
    var today = new Date();

    var previous3Month = new Date();
    previous3Month.setDate(today.getDate() - 91);

    var todayString: string = this.getDateConvertedToString(today);
    var today3Month: string = this.getDateConvertedToString(previous3Month);
    
    var extraUrlPart: string = `&from=${today3Month}&to=${todayString}`;
    var tmpUrl: string = `${this.finnhubUrl}/stock/insider-sentiment?symbol=${stockAcronym}${extraUrlPart}${this.finnhubToken}`;

    console.log(tmpUrl);

    return this.http.get<StockSentiment>(tmpUrl);
  }

  getDateConvertedToString(givenDate: Date) : string{
    const yyyy = givenDate.getFullYear();

    let mm = givenDate.getMonth() + 1; // Months start at 0!
    let dd = givenDate.getDate();

    var ddStr : string = (dd < 10) ? '0' + dd.toString() : dd.toString();
    var mmStr : string = (mm < 10) ? '0' + mm.toString() : mm.toString();


    return yyyy + '-' + mmStr + '-' + ddStr;
  }
  
}


