import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ninjagold';
  total = 0;
  activities = [];

  constructor(private _httpService: HttpService){}

onButtonClickParam(str: string): void { 
  const actions ={
    "Farm" : [2,4],
    "Cave" : [5,6],
    "House" : [7,9],
    "Casino" : [-100,200]
  }
  console.log(Math.floor(Math.random()*actions[str][1]-1 + actions[str][0]))
  var gold = Math.floor(Math.random()*actions[str][1]-1 + actions[str][0])
  console.log(`Click event is working with num param: ${str}`);
  this.total += gold
  var activity = `You went to ${str} and earned/lost ${gold}`
  console.log(activity)
  this.activities.push(activity)
}
  makebob(bobsname: any): void{

  }
  getBobs() {
    let tempObservable = this._httpService.getBobs();
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    
  }
}




