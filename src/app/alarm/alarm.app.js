"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var alarm_app_service_1 = require("./alarm.app.service");
var AlarmInputComponent = (function () {
    function AlarmInputComponent(fb, alarmService) {
        this.fb = fb;
        this.alarmService = alarmService;
        this.form = this.fb.group({
            time: '',
            notes: '',
            repeat: 'Once'
        });
    }
    AlarmInputComponent.prototype.getAlarms = function () {
        var _this = this;
        this.alarmService.getAlarms()
            .then(function (alarms) { return _this.alarms = alarms; });
    };
    AlarmInputComponent.prototype.ngOnInit = function () {
        this.getAlarms();
    };
    AlarmInputComponent.prototype.add = function () {
        var _this = this;
        var time = this.form.controls.time.value;
        var notes = this.form.controls.notes.value;
        var repeat = this.form.controls.repeat.value;
        if (!time)
            return;
        this.alarmService.create(time, notes, repeat)
            .then(function (alarm) {
            _this.alarms.push(alarm);
            _this.selectedAlarm = null;
        });
    };
    AlarmInputComponent.prototype.delete = function (alarm) {
        var _this = this;
        console.log(alarm);
        this.alarmService
            .delete(alarm.id)
            .then(function () {
            console.log("Done");
            _this.alarms = _this.alarms.filter(function (h) { return h !== alarm; });
            if (_this.selectedAlarm === alarm) {
                _this.selectedAlarm = null;
            }
        });
    };
    AlarmInputComponent.prototype.onSelect = function (alarm) {
        this.selectedAlarm = alarm;
    };
    return AlarmInputComponent;
}());
AlarmInputComponent = __decorate([
    core_1.Component({
        selector: 'alarm-input',
        templateUrl: './alarm.app.html',
        styleUrls: ['./alarm.app.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, alarm_app_service_1.AlarmService])
], AlarmInputComponent);
exports.AlarmInputComponent = AlarmInputComponent;
//# sourceMappingURL=alarm.app.js.map