import { Component } from '@angular/core';
import {Observable, Subscriber} from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div class="clock">{{ time | async | date: 'mediumTime'}}</div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  time = new Observable<string>((observer: Subscriber<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });
}

let stream1$ = new Observable<number>((observer: Subscriber<number>) => {
	let count = 0;
	let t = setInterval(() => {
		observer.next(count++);
	},1000);
	return () => {
		clearTimeout(t);
	}
});

stream1$.filter((value: number) => value%21===0)
		.subscribe(value => console.log(value));

// let stream1$ = new Observable<string>((observer: Subscriber<string>) => {
// 	let t= setTimeout(() => {
// 		observer.next("Observer timeout");
// 	},2000);

// 	return () => {
// 		clearTimeout(t);
// 	} 
// });

// let disposable= stream1$.subscribe(value => console.log(value));
// setTimeout(() => {
// 	disposable.unsubscribe();
// },1400);