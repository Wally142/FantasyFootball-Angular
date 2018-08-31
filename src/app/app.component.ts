import { Component } from '@angular/core';
import { FootballService } from './football.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The League of Donks';
  message = 'Message Board';
}
