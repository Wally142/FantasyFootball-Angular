import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.css']
})
export class MessageBoardComponent implements OnInit {
  newcomponent = "Entered in new component created";

  constructor() { }

  ngOnInit() {
  }

}
