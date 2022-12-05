import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, tap } from 'rxjs';
import { TrackedStock } from 'src/app/core/models/tracked-stock.model';
import { FinnhubQuoteService } from 'src/app/core/services/finnhub-stock.service';
import { TrackedStockService } from 'src/app/core/services/tracked-stock.service';

@Component({
  selector: 'app-new-stock',
  templateUrl: './new-stock.component.html',
  styleUrls: ['./new-stock.component.scss']
})
export class NewStockComponent implements OnInit {

  stockForm!: FormGroup;
  
  constructor(private formBuilder: FormBuilder,
              private trackedStockService: TrackedStockService,
              private fhService: FinnhubQuoteService) { }
  

  ngOnInit(): void {
    this.stockForm = this.formBuilder.group({
      stockAcronym: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(5)]]
    });
  }

  get stockAcronym() { return this.stockForm.get('stockAcronym'); }

  onTrackButtonClick(){
    //Check if provided acronym returns something ?
    
    var trackedStock = new TrackedStock();
    trackedStock.symbol = String(this.stockAcronym?.value).toUpperCase();
        
    this.fhService.getStockDescription(trackedStock.symbol).pipe(
      map(r => trackedStock.description = r),
      tap(() => {
        this.trackedStockService.addStock(trackedStock);
        window.location.reload();
      })
    ).subscribe();
  }

  onClearLocalCache(){
    this.trackedStockService.clearLocalStorage();
    window.location.reload();
  }
}
