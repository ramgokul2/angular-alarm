"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var alarm_app_1 = require("./alarm.app");
var alarm_app_service_1 = require("./alarm.app.service");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var in_memory_data_service_1 = require("./in-memory-data.service");
var init_alarms_service_1 = require("./init-alarms.service");
var AlarmAppModule = (function () {
    function AlarmAppModule() {
    }
    return AlarmAppModule;
}());
AlarmAppModule = __decorate([
    core_1.NgModule({
        imports: [forms_1.FormsModule, forms_1.ReactiveFormsModule, common_1.CommonModule, http_1.HttpModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService)],
        declarations: [alarm_app_1.AlarmInputComponent],
        exports: [alarm_app_1.AlarmInputComponent],
        providers: [alarm_app_service_1.AlarmService, init_alarms_service_1.AlarmInitService]
    })
], AlarmAppModule);
exports.AlarmAppModule = AlarmAppModule;
//# sourceMappingURL=alarm.app.module.js.map