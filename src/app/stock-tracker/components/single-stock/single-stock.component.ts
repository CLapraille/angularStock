import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagedStock } from 'src/app/models/managed-stock.model';
import { TrackedStockService } from 'src/app/services/tracked-stock.service';

@Component({
  selector: 'app-single-stock',
  templateUrl: './single-stock.component.html',
  styleUrls: ['./single-stock.component.scss']
})
export class SingleStockComponent implements OnInit {

  constructor(private route: Router,              
              private trackedStockService: TrackedStockService) { }

  @Input() managedStock!: ManagedStock;

  ngOnInit(): void {
  }

  onUnsubscribeStock(stockAcronym: string){
    this.trackedStockService.removeStock(stockAcronym);
    location.reload();
  }
  
  onGotoSocialSentiment(event: Event){
    this.route.navigateByUrl(`sentiment/${this.managedStock.symbol}`);
  }

}
