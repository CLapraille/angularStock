import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-stock',
  templateUrl: './new-stock.component.html',
  styleUrls: ['./new-stock.component.scss']
})
export class NewStockComponent implements OnInit {

  stockForm!: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }
  

  ngOnInit(): void {
    this.stockForm = this.formBuilder.group({
      stockAcronym: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(5)]]
    });
  }

  get stockAcronym() { return this.stockForm.get('stockAcronym'); }

  onTrackButtonClick(){
    console.log('coucou');
  }
}
