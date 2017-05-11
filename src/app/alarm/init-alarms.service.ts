import { Injectable } from '@angular/core';
import { Alarm } from './init-alarms';

@Injectable() 
export class AlarmInitService extends Alarm {
	constructor() {
		super();
		console.log("Initialized");
		this.load();
	}
	getTime() {
		let cHour:number = new Date().getHours() * 60;
    	let cMin:number = new Date().getMinutes();
    	let cTime:number = cHour+cMin;
    	console.log(cTime);
    	this.setUpAlarms(cTime);
	}
	getAlarms() {
		let Alarm = JSON.parse(localStorage.getItem('Alarm'));
		return Alarm;
	}
	addAlarm(alarm) {
		console.log("Added...", alarm);
		let Alarm = JSON.parse(localStorage.getItem('Alarm'));
		Alarm.push(alarm);
		localStorage.setItem('Alarm', JSON.stringify(Alarm));
	}

	setUpAlarms(currentTime: number) {
	this.savedAlarms(currentTime)
			 .filter(alarm =>  this.checkAlarm(alarm, currentTime));
	}

	savedAlarms(time: number) {
		let Alarm = JSON.parse(localStorage.getItem('Alarm'));
		return Object.keys(Alarm).map(param => {
			let time = Alarm[param].time;
			let z = time.substr(0,2);
			let savedTime = parseInt(z,10)*60 + parseInt(time.substr(3,5),10);
			return savedTime;
		});
	}

	checkAlarm(alarm: number, currentTime: number ) {
		console.log(alarm,' ', currentTime);
		if(alarm === currentTime) {
			this.showAlert();
			return true;
		}
		else {
			return false;
		}
	}
	showAlert() {
		alert("wake up!");
	}

}
