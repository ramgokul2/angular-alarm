import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Alarm }       from './alarm';

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

  create(time:string, notes:string, repeat:string): Promise<Alarm> {
    return this.http
      .post(this.alarmsUrl, JSON.stringify({time: time, notes: notes, repeat: repeat}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Alarm)
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