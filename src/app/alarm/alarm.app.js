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
var alarm_app_service_1 = require("./alarm.app.service");
var init_alarms_service_1 = require("./init-alarms.service");
var AlarmInputComponent = (function () {
    function AlarmInputComponent(alarmService, alarmInitService) {
        this.alarmService = alarmService;
        this.alarmInitService = alarmInitService;
        this.alarms = this.alarmInitService.getAlarms();
    }
    AlarmInputComponent.prototype.getAlarms = function () {
        this.alarms = this.alarmInitService.getAlarms();
    };
    AlarmInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () { return _this.alarmInitService.getTime(); }, 1000 * 50);
    };
    AlarmInputComponent.prototype.add = function () {
        var newAlarm = {
            id: this.id,
            time: this.time,
            notes: this.notes,
            repeat: this.repeat
        };
        if (!newAlarm.time)
            return;
        this.alarms.push(newAlarm);
        this.alarmInitService.addAlarm(newAlarm);
    };
    AlarmInputComponent.prototype.delete = function (alarm) {
        var _this = this;
        this.alarmService
            .delete(alarm.id)
            .then(function () {
            console.log("Done");
            _this.alarms = _this.alarms.filter(function (h) { return h !== alarm; });
            if (_this.selectedAlarm === alarm) {
                _this.selectedAlarm = null;
            }
            _this.alarmInitService.deleteAlarm(alarm);
            // localStorage.setItem("alarms", JSON.stringify(this.alarms));
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
    __metadata("design:paramtypes", [alarm_app_service_1.AlarmService, init_alarms_service_1.AlarmInitService])
], AlarmInputComponent);
exports.AlarmInputComponent = AlarmInputComponent;
//# sourceMappingURL=alarm.app.js.map