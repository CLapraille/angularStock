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


  getStockDescription(stockAcronym: string) : Observable<string>{
    var tmpUrl: string = `${this.finnhubUrl}/search?q=${stockAcronym}${this.finnhubToken}`;    
    
    return this.http.get<StockLookup>(tmpUrl).pipe(
      map(stock => stock.result[0]?.description)
    );
  }

  getManagedStockForStock(stockAcronym: string) : Observable<ManagedStock> {
      var tmpUrl: string = `${this.finnhubUrl}/search?q=${stockAcronym}${this.finnhubToken}`;    
      
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
    
    return this.http.get<StockQuote>(tmpUrl);
  }

  getSentimentLast3MonthsForStock(stockAcronym: string) : Observable<StockSentiment>{
    var today = new Date();

    var previous3Month = new Date();
    previous3Month.setDate(today.getDate() - 91);

    var todayString: string = this.getDateConvertedToString(today);
    var today3Month: string = this.getDateConvertedToString(previous3Month);
    
    var extraUrlPart: string = `&from=${today3Month}&to=${todayString}`;
    var tmpUrl: string = `${this.finnhubUrl}/stock/insider-sentiment?symbol=${stockAcronym}${extraUrlPart}${this.finnhubToken}`;

    return this.http.get<StockSentiment>(tmpUrl);
  }

  // getSentimentForMonth(stockAcronym: string, dateRef: Date) : Observable<StockSentiment>{
  //   var fromDate = new Date(dateRef.getFullYear(), dateRef.getMonth(), 1);
  //   var toDate = new Date(dateRef.getFullYear(), dateRef.getMonth(), 28);
    
  //   var fromDateStr: string = this.getDateConvertedToString(fromDate);
  //   var toDateStr: string = this.getDateConvertedToString(toDate);
    
  //   var extraUrlPart: string = `&from=${fromDateStr}&to=${toDateStr}`;
  //   var tmpUrl: string = `${this.finnhubUrl}/stock/insider-sentiment?symbol=${stockAcronym}${extraUrlPart}${this.finnhubToken}`;

  //   console.log(tmpUrl);

  //   return this.http.get<StockSentiment>(tmpUrl);
  // }

  getDateConvertedToString(givenDate: Date) : string{
    const yyyy = givenDate.getFullYear();

    let mm = givenDate.getMonth() + 1; // Months start at 0!
    let dd = givenDate.getDate();

    var ddStr : string = (dd < 10) ? '0' + dd.toString() : dd.toString();
    var mmStr : string = (mm < 10) ? '0' + mm.toString() : mm.toString();


    return yyyy + '-' + mmStr + '-' + ddStr;
  }
  
}


