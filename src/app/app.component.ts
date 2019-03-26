import { Component, OnInit } from '@angular/core';
import { ShowInterestService } from './show-interest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  result:any;
  amount;
  duration;
  
  constructor(private service:ShowInterestService){}
  // submit function to send data to the api to calculate interest rate and showing the result
  submit(data){
    this.service.showInterest(data).subscribe(res =>{this.result=res});
  }
  
  ngOnInit(){}

}
