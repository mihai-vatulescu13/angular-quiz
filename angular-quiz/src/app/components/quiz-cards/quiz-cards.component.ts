import { Component, OnInit, Input } from '@angular/core';
import { QuizzesService } from 'src/app/quizzes.service';

@Component({
  selector: 'app-quiz-cards',
  templateUrl: './quiz-cards.component.html',
  styleUrls: ['./quiz-cards.component.css'],
})
export class QuizCardsComponent implements OnInit {
  @Input() quizzes: any;

  constructor(public quizzesService: QuizzesService) {}

  ngOnInit(): void {}
}
