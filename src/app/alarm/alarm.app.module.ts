import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlarmInputComponent } from './alarm.app';
import { AlarmService } from './alarm.app.service';
import { CommonModule } from '@angular/common';
import { HttpModule }    from '@angular/http';


import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { AlarmInitService} from './init-alarms.service';

@NgModule ({
	imports: [FormsModule, ReactiveFormsModule, CommonModule, HttpModule,
    			InMemoryWebApiModule.forRoot(InMemoryDataService)],
	declarations: [ AlarmInputComponent ],
	exports: [ AlarmInputComponent ],
	providers: [ AlarmService, AlarmInitService ]
})

export class AlarmAppModule {
	
}