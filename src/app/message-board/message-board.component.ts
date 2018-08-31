import { Component, OnInit } from '@angular/core';
import { FootballService } from '../football.service';

@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.css']
})
export class MessageBoardComponent implements OnInit {

  todaydate;
  constructor(private football: FootballService) { }
  ngOnInit() {
    this.todaydate = this.football.showTodayDate();
  }
  submitComment(data) {
    alert("hello");
  }
}
