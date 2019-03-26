import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ShowInterestService {

  constructor(private http:HttpClient) { }

  url;
  //hitting the api and getting the result
  showInterest(data){
    this.url="https://ftl-frontend-test.herokuapp.com/interest?amount="+data.lamnt+"&numMonths="+data.lduration;
    return this.http.get(this.url);
  }
}
