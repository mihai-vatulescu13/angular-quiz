import { Injectable } from '@angular/core';
// get quizzes data:
import { quizzesListOperatingSystems } from './quizzes-data/QUIZ_DATA_OS';
import { quizzesListRetele } from './quizzes-data/QUIZ_DATA_RETELE';
import { quizzesListSecuritate } from './quizzes-data/QUIZ_DATA_SECURITATE';
import { quizzesListArhitectura } from './quizzes-data/QUIZ_DATA_ARHITECTURA';
import { quizzesListPorgramareC } from './quizzes-data/QUIZ_DATA_PROGRAMAREC';
import { quizzesListOOP } from './quizzes-data/QUIZ_DATA_OOP';
import { quizzesListJava } from './quizzes-data/QUIZ_DATA_JAVA';

@Injectable({
  providedIn: 'root',
})
export class QuizzesService {
  constructor() {}

  //by default se va randa grila de la sisteme de operare:
  public currentQuizzesLabel: string = 'sisteme_operare';

  // public quizzes: any = quizzesListOperatingSystems;
  public quizzes: any = quizzesListOperatingSystems;
  public allRandomizedQuizzes: any = [];

  //method that randomize quizzes for a certain category:
  public onRandomizeQuizzes(): void {
    this.quizzes = this.quizzes.sort(() => Math.random() - 0.5);
  }

  public onRandomizeQuizOptions(): void {
    for (let i = 0; i < this.quizzes.length - 1; i++) {
      this.quizzes[i].options.sort(() => Math.random() - 0.5);
    }
  }

  public pushRandomQuizzesTuple(selectedQuizzesList: any): void {
    let randomQuiz: any =
      selectedQuizzesList[
        Math.floor(Math.random() * selectedQuizzesList.length)
      ];

    //this will have a side effect to the all randomized quizzes array:
    if (
      !this.allRandomizedQuizzes.some((quiz: any) => {
        return quiz.id === randomQuiz.id;
      })
    ) {
      this.allRandomizedQuizzes.push(randomQuiz);
    }
  }

  public setAllQuizes(): void {
    //previous value:3
    for (let i = 0; i < 4; i++) {
      this.pushRandomQuizzesTuple(quizzesListOperatingSystems);
      this.pushRandomQuizzesTuple(quizzesListRetele);
      this.pushRandomQuizzesTuple(quizzesListSecuritate);
      this.pushRandomQuizzesTuple(quizzesListArhitectura);
      this.pushRandomQuizzesTuple(quizzesListPorgramareC);
      this.pushRandomQuizzesTuple(quizzesListOOP);
      this.pushRandomQuizzesTuple(quizzesListJava);
    }

    this.quizzes = this.allRandomizedQuizzes;
  }

  //generic quiz method selector:
  public selectQuiz(selectedQuizLabel: any): void {
    //the label gets updated depending by the parameter:
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

    if (this.currentQuizzesLabel === 'programare_c') {
      this.quizzes = quizzesListPorgramareC;
    }

    if (this.currentQuizzesLabel === 'OOP') {
      this.quizzes = quizzesListOOP;
    }

    if (this.currentQuizzesLabel === 'java') {
      this.quizzes = quizzesListJava;
    }

    if (this.currentQuizzesLabel === 'all_quizzes') {
      // this.quizzes = quizzesListOOP;
      this.setAllQuizes();
    }
  }
}
