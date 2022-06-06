import { Component } from '@angular/core';
import { QuizzesService } from './quizzes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public quizzesService: QuizzesService) {}

  public onSelectSisteme(): void {
    this.quizzesService.selectSisteme();
  }

  public onSelectRetele(): void {
    this.quizzesService.selectRetele();
  }
}
