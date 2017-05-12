"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var alarms = [
            { id: 1, time: '11:01', notes: 'Interview', repeat: 'once' },
            { id: 2, time: '05:40', notes: 'Wake up', repeat: 'Mon_Fri' },
            { id: 3, time: '16:10', notes: 'Coffee', repeat: 'Daily' }
        ];
        return { alarms: alarms };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map