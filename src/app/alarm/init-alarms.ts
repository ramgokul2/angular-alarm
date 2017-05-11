export class Alarm{
	load() {
		if(localStorage.getItem('Alarm')==null || localStorage.getItem('Alarm')==undefined) {
			console.log("Creating....");
			var Alarm= [
				{id: 1, time: '11:01', notes: 'Interview', repeat: 'once'},
     			 {id:2, time: '05:40', notes: 'Wake up', repeat: 'Mon_Fri'}
			]
			localStorage.setItem('Alarm', JSON.stringify(Alarm));
		}
		else {
			console.log("Loading alarms...");
		}
	}
}