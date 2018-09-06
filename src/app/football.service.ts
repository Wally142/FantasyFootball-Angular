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

  comments = ['Fantasy', 'Football'];
  // getComments() {
     
  // }

postComment(data) {
  console.log(data);
}

}
