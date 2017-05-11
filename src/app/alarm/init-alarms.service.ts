import { Injectable } from '@angular/core';
import { Alarm } from './init-alarms';

@Injectable() 
export class AlarmInitService extends Alarm {
	constructor() {
		super();
		console.log("Initialized");
		this.load();
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
		setInterval(() =>this.savedAlarms(currentTime)
			 .filter(alarm =>  this.checkAlarm(alarm, currentTime), 500));
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
			var interval = setInterval(() => clearTimeout(interval), 1000 * 60);
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
