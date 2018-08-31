import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MessageBoardComponent } from './message-board/message-board.component';
import { FootballService } from './football.service';

@NgModule({
  declarations: [
    AppComponent,
    MessageBoardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [FootballService],
  bootstrap: [AppComponent]
})
export class AppModule { }
