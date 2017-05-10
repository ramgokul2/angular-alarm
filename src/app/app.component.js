"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var AppComponent = (function () {
    function AppComponent() {
        this.time = new Rx_1.Observable(function (observer) {
            setInterval(function () { return observer.next(new Date().toString()); }, 1000);
        });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<div class=\"clock\">{{ time | async | date: 'mediumTime'}}</div>",
        styleUrls: ['./app.component.css']
    })
], AppComponent);
exports.AppComponent = AppComponent;
var stream1$ = new Rx_1.Observable(function (observer) {
    var count = 0;
    var t = setInterval(function () {
        observer.next(count++);
    }, 1000);
    return function () {
        clearTimeout(t);
    };
});
stream1$.filter(function (value) { return value % 21 === 0; })
    .subscribe(function (value) { return console.log(value); });
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
//# sourceMappingURL=app.component.js.map