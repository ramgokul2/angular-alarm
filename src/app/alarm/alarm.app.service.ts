import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Alarm }       from './init-alarms';

const FETCH_LATENCY = 500;

@Injectable()
export class AlarmService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private alarmsUrl = 'api/alarms';  // URL to web api

  constructor(private http: Http) { }

  getAlarms(): Promise<Alarm[]> {
    return this.http.get(this.alarmsUrl)
               .toPromise()
               .then(response => response.json().data as Alarm[])
               .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    console.log(this);
    const url = `${this.alarmsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }
}