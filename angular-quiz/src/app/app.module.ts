import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuizCardsComponent } from './components/quiz-cards/quiz-cards.component';
import { QuizCardComponent } from './components/quiz-card/quiz-card.component';

@NgModule({
  declarations: [AppComponent, QuizCardsComponent, QuizCardComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
