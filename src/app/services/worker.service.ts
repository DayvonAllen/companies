import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  constructor(private http: HttpClient) { }
//makes an api call use a url parameter
  async getWorker(){
    return this.http.get('http://localhost:3000/workers');
  }
}
