import { Injectable } from '@angular/core';
// get quizzes data:
import { quizzesListOperatingSystems } from './quizzes-data/QUIZ_DATA_OS';
import { quizzesListRetele } from './quizzes-data/QUIZ_DATA_RETELE';
import { quizzesListSecuritate } from './quizzes-data/QUIZ_DATA_SECURITATE';
import { quizzesListArhitectura } from './quizzes-data/QUIZ_DATA_ARHITECTURA';

@Injectable({
  providedIn: 'root',
})
export class QuizzesService {
  constructor() {}

  //by default se va randa grila de la sisteme de operare:
  public currentQuizzesLabel: string = 'sisteme_operare';

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

  //generic quiz method selector:
  public selectQuiz(selectedQuizLabel: any): void {
    this.currentQuizzesLabel = selectedQuizLabel;

    if (this.currentQuizzesLabel === 'sisteme_operare') {
      this.quizzes = quizzesListOperatingSystems;
    }

    if (this.currentQuizzesLabel === 'retele') {
      this.quizzes = quizzesListRetele;
    }

    if (this.currentQuizzesLabel === 'securitate') {
      this.quizzes = quizzesListSecuritate;
    }

    if (this.currentQuizzesLabel === 'arhitectura') {
      this.quizzes = quizzesListArhitectura;
    }
  }
}
