import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let alarms = [
      {id: 1, time: '11:01', notes: 'Interview', repeat: 'once'},
      {id:2, time: '05:40', notes: 'Wake up', repeat: 'Mon_Fri'}
      
    ];
    return {alarms};
  }
}