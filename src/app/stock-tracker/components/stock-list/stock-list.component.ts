import { Component, OnInit } from '@angular/core';
import { ManagedStock } from 'src/app/core/models/managed-stock.model';
import { FinnhubQuoteService } from 'src/app/core/services/finnhub-stock.service';
import { TrackedStockService } from 'src/app/core/services/tracked-stock.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {

  constructor(private fhQuoteService: FinnhubQuoteService,
              private trackedStockService: TrackedStockService) { }

  managedStocks: ManagedStock[] = [];

  ngOnInit(): void {
    this.refreshManagedStock();
  }

  refreshManagedStock(){
    this.trackedStockService.getAllStock().forEach(element => {
      this.fhQuoteService.getManagedStockForStock(element.symbol).subscribe(r => this.managedStocks.push(r));  
    });    
  }
}
