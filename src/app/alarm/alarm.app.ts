import {Component, OnInit} from '@angular/core'; 
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import {AlarmService} from './alarm.app.service';
import {Alarm} from './alarm';

@Component({
	selector: 'alarm-input',
	templateUrl: './alarm.app.html',
	styleUrls: ['./alarm.app.css']
})

export class AlarmInputComponent implements OnInit{
	form: FormGroup;
	alarms: Alarm[];
	selectedAlarm: Alarm;
	constructor(public fb: FormBuilder, private alarmService: AlarmService) {
		this.form = this.fb.group({
			time: '',
			notes: '',
			repeat: 'Once'
		})
	}
	getAlarms() {
		this.alarmService.getAlarms()
						 .then(alarms => this.alarms = alarms);
	}

	ngOnInit() {
		this.getAlarms();
	}

	add(): void {
    	let time = this.form.controls.time.value;
    	let notes = this.form.controls.notes.value;
    	let repeat = this.form.controls.repeat.value;
    	if(!time) return;
    	this.alarmService.create(time, notes, repeat)
    					  .then(alarm => {
    					  	this.alarms.push(alarm);
    					  	this.selectedAlarm = null;
    					  });
  }

    delete(alarm: Alarm): void {
    	console.log(alarm);
    this.alarmService
        .delete(alarm.id)
        .then(() => {
          console.log("Done");
          this.alarms = this.alarms.filter(h => h !== alarm);
          if (this.selectedAlarm === alarm) { this.selectedAlarm = null;
        }
    });
  }

  onSelect(alarm: Alarm): void {
    this.selectedAlarm = alarm;
  }
}