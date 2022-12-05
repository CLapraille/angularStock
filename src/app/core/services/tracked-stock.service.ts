import { Injectable } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TrackedStock } from '../models/tracked-stock.model';
import { LocalService } from './local.service';

@Injectable({
  providedIn: 'root'
})
export class TrackedStockService {

  localStorageKey: string = "trackedStocks";
  trackedStock: TrackedStock[] = [];

  constructor(private local : LocalService) { 
    this.trackedStock = this.getAllStock();
  }
 
  addStock(trackedStock: TrackedStock): TrackedStock[] {
    this.trackedStock.push(trackedStock);
        
    return this.refreshLocalStorage();
  }

  removeStock(symbol: string){
    this.trackedStock.forEach((item, index) => {
      if(item.symbol === symbol) this.trackedStock.splice(index, 1);
    });
    console.log(symbol);
    return this.refreshLocalStorage();    
  }


  getAllStock(): TrackedStock[] {
    let stockStr = this.local.getData(this.localStorageKey);

    if(stockStr)
      return JSON.parse(stockStr) as TrackedStock[];
    
    return [];
  }

  getStockDescription(symbol: string): string {
    let desc = this.trackedStock.find(x => x.symbol === symbol)?.description;
    
    if(desc !== undefined)
      return desc;
    
    return '';
  }

  clearLocalStorage(){
    this.local.clearData();
    this.trackedStock = [];
  }

  private refreshLocalStorage(): TrackedStock[] {
    this.local.clearData();
    this.local.saveData(this.localStorageKey, JSON.stringify(this.trackedStock));
    return this.trackedStock;
  }
}
