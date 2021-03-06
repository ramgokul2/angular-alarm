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
			 .filter(alarm =>  this.checkAlarm(alarm.savedTime, currentTime, alarm.savedRepeat, alarm.savedNotes, alarm.time));
	}

	savedAlarms(time: number) {
		let Alarm = JSON.parse(localStorage.getItem('Alarm'));
		return Object.keys(Alarm).map(param => {
			let time = Alarm[param].time;
			let notes = Alarm[param].notes;
			let repeat =Alarm[param].repeat;
			let alarmObj = {
				savedNotes: '',
				savedTime: 0,
				savedRepeat: '',
				time: ''
			};
			let z = time.substr(0,2);
			alarmObj.savedTime = parseInt(z,10)*60 + parseInt(time.substr(3,5),10);
			alarmObj.savedRepeat = repeat;
			alarmObj.savedNotes = notes;
			return alarmObj;
		});
	}

	checkAlarm(alarm: number, currentTime: number, currentRepeat: string, currentNotes: string, time:string) {
		console.log(alarm,' ', currentTime);
		let t = new Date();
		if(alarm === currentTime) {
			if(currentRepeat === "Mon-Fri" && (t.getDay()=== 6 || t.getDay()==7)) {
				return false;
			} 
			this.showAlert(currentNotes);
			return true;
		}
		else {
			return false;
		}
	}
	showAlert(currentNotes: string) {
		alert(currentNotes);
	}

}
