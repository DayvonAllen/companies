import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  constructor(private http: HttpClient) { }
//makes an api call use a url parameter
   getWorker(){
    return of(this.http.get('https://companies-api123.herokuapp.com/workers'));
  }
}
