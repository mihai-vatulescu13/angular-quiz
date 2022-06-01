import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.css'],
})
export class QuizCardComponent implements OnInit {
  @Input() quiz: any;
  @Input() index: any;

  public isSend = false;

  constructor() {}

  ngOnInit(): void {}

  onSelect(option: any) {
    option.isSelected = !option.isSelected;
  }

  onSend(quizzes: any) {
    this.isSend = true;
    //reset all the options that are selected:
    quizzes = quizzes.map((question: any) => (question.isSelected = false));
  }
}
