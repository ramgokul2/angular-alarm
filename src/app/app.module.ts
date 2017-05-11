import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '@angular/material';
import { HttpModule }    from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './alarm/in-memory-data.service';

import { AppComponent }  from './app.component';
import { AlarmAppModule } from './alarm/alarm.app.module';

@NgModule({
  imports:      [ BrowserModule,
  				  FormsModule, CommonModule, AlarmAppModule, MaterialModule.forRoot(), HttpModule,
    				InMemoryWebApiModule.forRoot(InMemoryDataService) ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  exports: [MaterialModule]
})
export class AppModule { }
