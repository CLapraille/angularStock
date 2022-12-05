import { Component, Input, OnInit } from '@angular/core';
import { StockSentimentInfo } from 'src/app/core/models/stock-sentiment.model';

@Component({
  selector: 'app-single-sentiment',
  templateUrl: './single-sentiment.component.html',
  styleUrls: ['./single-sentiment.component.scss']
})
export class SingleSentimentComponent implements OnInit {

  @Input() sentiment!: StockSentimentInfo;

  currentMonth!: string;

  constructor() { }

  ngOnInit(): void {
    this.currentMonth = this.getMonthName(this.sentiment.month);
  }

  getMonthName(monthNumber: number) {
    const date = new Date();
    date.setMonth(monthNumber - 1);
  
    return date.toLocaleString('en-US', { month: 'long' });
  }

}
