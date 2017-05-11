"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var init_alarms_1 = require("./init-alarms");
var AlarmInitService = (function (_super) {
    __extends(AlarmInitService, _super);
    function AlarmInitService() {
        var _this = _super.call(this) || this;
        console.log("Initialized");
        _this.load();
        return _this;
    }
    AlarmInitService.prototype.getTime = function () {
        var cHour = new Date().getHours() * 60;
        var cMin = new Date().getMinutes();
        var cTime = cHour + cMin;
        console.log(cTime);
        this.setUpAlarms(cTime);
    };
    AlarmInitService.prototype.getAlarms = function () {
        var Alarm = JSON.parse(localStorage.getItem('Alarm'));
        return Alarm;
    };
    AlarmInitService.prototype.addAlarm = function (alarm) {
        console.log("Added...", alarm);
        var Alarm = JSON.parse(localStorage.getItem('Alarm'));
        Alarm.push(alarm);
        localStorage.setItem('Alarm', JSON.stringify(Alarm));
    };
    AlarmInitService.prototype.setUpAlarms = function (currentTime) {
        var _this = this;
        this.savedAlarms(currentTime)
            .filter(function (alarm) { return _this.checkAlarm(alarm, currentTime); });
    };
    AlarmInitService.prototype.savedAlarms = function (time) {
        var Alarm = JSON.parse(localStorage.getItem('Alarm'));
        return Object.keys(Alarm).map(function (param) {
            var time = Alarm[param].time;
            var z = time.substr(0, 2);
            var savedTime = parseInt(z, 10) * 60 + parseInt(time.substr(3, 5), 10);
            return savedTime;
        });
    };
    AlarmInitService.prototype.checkAlarm = function (alarm, currentTime) {
        console.log(alarm, ' ', currentTime);
        if (alarm === currentTime) {
            this.showAlert();
            return true;
        }
        else {
            return false;
        }
    };
    AlarmInitService.prototype.showAlert = function () {
        alert("wake up!");
    };
    return AlarmInitService;
}(init_alarms_1.Alarm));
AlarmInitService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], AlarmInitService);
exports.AlarmInitService = AlarmInitService;
//# sourceMappingURL=init-alarms.service.js.map