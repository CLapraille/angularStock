import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagedStock } from 'src/app/models/managed-stock.model';

@Component({
  selector: 'app-single-stock',
  templateUrl: './single-stock.component.html',
  styleUrls: ['./single-stock.component.scss']
})
export class SingleStockComponent implements OnInit {

  constructor(private route: Router) { }

  @Input() managedStock!: ManagedStock;

  ngOnInit(): void {
  }

  onUnsubscribeStock(stockAcronym: string){
    console.log(`unsubscribe to ${stockAcronym}`);
  }
  
  onGotoSocialSentiment(event: Event){
    this.route.navigateByUrl(`sentiment/${this.managedStock.symbol}`);
  }

}
