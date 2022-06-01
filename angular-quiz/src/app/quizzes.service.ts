import { Injectable } from '@angular/core';
// get quizzes data:
import { quizzesList } from './QUIZ_DATA';

@Injectable({
  providedIn: 'root',
})
export class QuizzesService {
  constructor() {}

  public quizzes: any = quizzesList;

  //method that randomize quizzes for a certain category:
  public onRandomizeQuizzes(): void {
    this.quizzes = this.quizzes.sort(() => Math.random() - 0.5);
  }

  public onRandomizeQuizOptions(): void {
    for (let i = 0; i < this.quizzes.length - 1; i++) {
      this.quizzes[i].options.sort(() => Math.random() - 0.5);
    }
  }
}
