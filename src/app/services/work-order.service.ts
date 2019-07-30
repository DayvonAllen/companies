import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkOrderService {

  constructor(private http: HttpClient) { }
//makes an api call
  async getWorkOrder(){
    return this.http.get('https://companies-api123.herokuapp.com/work-order');
  }
}
