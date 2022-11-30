import { Component, Input, OnInit } from '@angular/core';
import { ManagedStock } from 'src/app/models/managed-stock.model';

@Component({
  selector: 'app-single-stock',
  templateUrl: './single-stock.component.html',
  styleUrls: ['./single-stock.component.scss']
})
export class SingleStockComponent implements OnInit {

  constructor() { }

  @Input() managedStock!: ManagedStock;

  ngOnInit(): void {
  }

  onUnsubscribeStock(stockAcronym: string){
    console.log(`unsubscribe to ${stockAcronym}`);
  }
  
  onGotoSocialSentiment(event: Event){
    console.log('goto social sentiment with id ' + (event.target as Element).id);
  }

}
