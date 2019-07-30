import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkOrderService {

  constructor(private http: HttpClient) { }
//makes an api call
  getWorkOrder(){
    return this.http.get('http://localhost:3000/work-order');
  }
}
