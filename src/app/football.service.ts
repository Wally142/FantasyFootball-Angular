import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FootballService {

  constructor() { }
  showTodayDate() {
    let ndate = new Date();
    return ndate;
  }

  comments = [];
  // getComments() {
     
  // }

postComment(data) {
  console.log(data);
  this.comments = [data];
}

}
