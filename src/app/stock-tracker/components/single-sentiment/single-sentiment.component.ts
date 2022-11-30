import { Component, Input, OnInit } from '@angular/core';
import { StockSentiment } from 'src/app/models/stock-sentiment.model';

@Component({
  selector: 'app-single-sentiment',
  templateUrl: './single-sentiment.component.html',
  styleUrls: ['./single-sentiment.component.scss']
})
export class SingleSentimentComponent implements OnInit {

  @Input() sentiment!: StockSentiment | null;

  currentMonth!: string;

  constructor() { }

  ngOnInit(): void {

  }

}
