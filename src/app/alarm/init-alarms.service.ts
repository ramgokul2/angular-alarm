import { Injectable } from '@angular/core';
import { Alarm } from './init-alarms';
import { AlarmInterface } from './alarm.app'
	
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
	getAlarms():AlarmInterface[] {
		let Alarm = JSON.parse(localStorage.getItem('Alarm'));
		return Alarm;
	}
	addAlarm(alarm: AlarmInterface ) {
		console.log("Added...", alarm);
		let Alarm = JSON.parse(localStorage.getItem('Alarm'));
		Alarm.push(alarm);
		localStorage.setItem('Alarm', JSON.stringify(Alarm));
	}

	deleteAlarm(alarm: AlarmInterface) {
		console.log("Deleting...");
		let Alarm = JSON.parse(localStorage.getItem('Alarm'));
		for(let i=0; i<Alarm.length; i++ ) {
			if(alarm.time === Alarm[i].time && alarm.repeat == Alarm[i].repeat ) {
				Alarm.splice(i,1);
			}
		localStorage.setItem('Alarm', JSON.stringify(Alarm));
		}
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
