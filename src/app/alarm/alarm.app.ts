import {Component, OnInit} from '@angular/core'; 
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Observable, Subscriber} from 'rxjs/Rx';
import {AlarmService} from './alarm.app.service';
import { AlarmInitService } from './init-alarms.service';

@Component({
	selector: 'alarm-input',
	templateUrl: './alarm.app.html',
	styleUrls: ['./alarm.app.css']
})

export class AlarmInputComponent implements OnInit{
	alarms: Alarm[];
	selectedAlarm: Alarm;
  id: number;
  time: string;
  notes: string;
  repeat: string;
	constructor(private alarmService: AlarmService, private alarmInitService: AlarmInitService) {
    this.alarms = this.alarmInitService.getAlarms();	
	}
	getAlarms() {
		this.alarmInitService.getAlarms()
						 .then(alarms => this.alarms = alarms);
	}

	ngOnInit() {
		let cHour = new Date().getHours() * 60;
    let cMin = new Date().getMinutes();
    let cTime = cHour+cMin;
    this.alarmInitService.setUpAlarms(cTime);
	}

	add(): void {
    var newAlarm = {
      id: this.id,
    	time : this.time,
    	notes : this.notes,
    	repeat : this.repeat
     } 
    	if(!newAlarm.time) return;
      this.alarms.push(newAlarm);
      this.alarmInitService.addAlarm(newAlarm);
  }

    delete(alarm: Alarm): void {
    this.alarmService
        .delete(alarm.id)
        .then(() => {
          console.log("Done");
          this.alarms = this.alarms.filter(h => h !== alarm);
          if (this.selectedAlarm === alarm) { this.selectedAlarm = null;
        }
        localStorage.setItem("alarms", JSON.stringify(this.alarms));
});
  }

  onSelect(alarm: Alarm): void {
    this.selectedAlarm = alarm;
  }
}

interface Alarm {
  id: number;
  time: string;
  notes: string;
  repeat: string;
}