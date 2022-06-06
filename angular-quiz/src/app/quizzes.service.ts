import { Injectable } from '@angular/core';
// get quizzes data:
import { quizzesListOperatingSystems } from './quizzes-data/QUIZ_DATA_OS';
import { quizzesListRetele } from './quizzes-data/QUIZ_DATA_RETELE';

@Injectable({
  providedIn: 'root',
})
export class QuizzesService {
  constructor() {}

  // public quizzes: any = quizzesListOperatingSystems;
  public quizzes: any = quizzesListOperatingSystems;

  //method that randomize quizzes for a certain category:
  public onRandomizeQuizzes(): void {
    this.quizzes = this.quizzes.sort(() => Math.random() - 0.5);
  }

  public onRandomizeQuizOptions(): void {
    for (let i = 0; i < this.quizzes.length - 1; i++) {
      this.quizzes[i].options.sort(() => Math.random() - 0.5);
    }
  }

  //by default se va randa grila de la sisteme de operare:
  public selectSisteme(): void {
    this.quizzes = quizzesListOperatingSystems;
  }

  public selectRetele(): void {
    this.quizzes = quizzesListRetele;
  }
}
