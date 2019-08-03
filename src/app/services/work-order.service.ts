import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkOrderService {

  constructor(private http: HttpClient) { }
//makes an api call
   getWorkOrder() {
    return of(this.http.get('https://companies-api123.herokuapp.com/work-order'));
  }
}
